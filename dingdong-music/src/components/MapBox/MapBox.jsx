import { useEffect, useState, useRef } from "react";
import {
  Container,
  MapBoxHeader,
  HeaderText,
  ContextWrapper,
  MapWrapper,
  ContextText,
  MapContainer,
  SearchWrapper,
  SearchTitle,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  SearchResultsList,
  SearchResultItem,
  FriendListContainer,
  FriendListTitle,
  FriendList,
  FriendListItem,
  FriendName,
  FriendActions,
  FriendActionButton,
  ModalOverlay,
  ModalContent,
  CloseButton,
  AddFriendInput,
} from "./MapBox.style";


function MapBox() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [addressResults, setAddressResults] = useState([]); // 검색 결과를 저장할 상태
  const [searchInput, setSearchInput] = useState(""); // 검색창 입력값 상태
  const [friends, setFriends] = useState([
    { id: 1, friendName: "friend1", latitude: 37.4855, longitude: 126.8842 },
    { id: 2, friendName: "friend2", latitude: 37.488, longitude: 126.877 },
    { id: 3, friendName: "friend3", latitude: 37.48, longitude: 126.8735 },
    { id: 4, friendName: "friend4", latitude: 37.4795, longitude: 126.886 },
    { id: 5, friendName: "friend5", latitude: 37.4872, longitude: 126.8815 },
    { id: 6, friendName: "friend6", latitude: 37.4788, longitude: 126.8781 },
    { id: 7, friendName: "friend7", latitude: 37.4811, longitude: 126.89 },
    { id: 8, friendName: "friend8", latitude: 37.4865, longitude: 126.8755 },
    { id: 9, friendName: "friend9", latitude: 37.484, longitude: 126.872 },
    { id: 10, friendName: "friend10", latitude: 37.4799, longitude: 126.883 },
  ]);

  const [friendMarkers, setFriendMarkers] = useState([]); // 친구들의 마커 상태
  const [showModal, setShowModal] = useState(false); // 친구 추가 모달 표시 여부
  const [showEditModal, setShowEditModal] = useState(false); // 친구 수정 모달 표시 여부
  const [newFriend, setNewFriend] = useState({
    friendName: "",
    latitude: null,
    longitude: null,
  });
  const [editFriend, setEditFriend] = useState({
    id: null,
    friendName: "",
  }); // 수정할 친구 정보
  const mapkey= import.meta.env.VITE_KAKAOMAP_API_KEY;

  const mapRef = useRef(null); // map 객체를 저장하기 위한 ref
  const markerRef = useRef(null); // 클릭한 위치에 표시될 마커
  const searchMarkersRef = useRef([]); // 검색 결과 마커들을 저장하기 위한 ref
  const activeOverlayRef = useRef(null); // 현재 활성화된 오버레이를 저장할 ref
  const geocoder = useRef(null); // Geocoder 객체를 저장할 ref

  useEffect(() => {
    const container = document.querySelector("#map");

    if (!container) return; // container가 없는 경우 반환

    if (!("geolocation" in navigator)) {
      alert("Geolocation is not available");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);

        if (window.kakao && window.kakao.maps) {
          console.log("if");
          initMap(container, pos.coords.latitude, pos.coords.longitude);
        } else {
          console.log("else");
          const script = document.createElement("script");
          script.onload = () =>
            kakao.maps.load(() =>
              initMap(container, pos.coords.latitude, pos.coords.longitude)
            );
          script.src =
            `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${mapkey}&libraries=services,places`; // services, places 라이브러리 추가
          document.head.appendChild(script);
        }
      },
      (err) => {
        alert(err.message);
      }
    );
  }, []); // 빈 배열로 한 번만 실행

  const initMap = (container, lat, lng) => {
    console.log("init");
    if (!window.kakao || !window.kakao.maps) {
      console.error("Kakao Maps API is not loaded.");
      return;
    }

    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    mapRef.current = map; // ref에 저장

    // Geocoder 객체 생성
    geocoder.current = new kakao.maps.services.Geocoder();

    // 지도 클릭 시 클릭한 위치에 마커 표시
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      if (mouseEvent.target && mouseEvent.target.className === "wrap") return;

      const latlng = mouseEvent.latLng;

      if (markerRef.current) {
        markerRef.current.setMap(null);
      }

      const clickMarker = createMarker(latlng, map);
      markerRef.current = clickMarker;

      geocoder.current.coord2Address(
        latlng.getLng(),
        latlng.getLat(),
        function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            const placeName = result[0].road_address
              ? result[0].road_address.building_name || "Unknown Place"
              : "Unknown Place";
            const address = result[0].road_address
              ? result[0].road_address.address_name
              : result[0].address.address_name;

            const overlayContent = createOverlayContent(
              placeName,
              address,
              latlng.getLat(),
              latlng.getLng(),
              "add"
            );

            const overlay = new kakao.maps.CustomOverlay({
              content: overlayContent,
              map: null,
              position: clickMarker.getPosition(),
              zIndex: 100,
            });

            kakao.maps.event.addListener(clickMarker, "click", function () {
              if (activeOverlayRef.current) {
                activeOverlayRef.current.setMap(null);
              }
              overlay.setMap(map);
              activeOverlayRef.current = overlay;
            });
          }
        }
      );
    });

    updateFriendMarkers(); // 친구 마커 초기화
  };

  // 친구 목록이 변경될 때마다 지도 마커 업데이트
  useEffect(() => {
    if (mapRef.current) {
      updateFriendMarkers();
    }
  }, [friends]); // friends 상태가 변경될 때마다 실행

  const updateFriendMarkers = () => {
    // 기존 친구 마커 제거
    friendMarkers.forEach((marker) => marker.setMap(null));

    const newMarkers = friends.map((friend) => {
      const markerPosition = new kakao.maps.LatLng(
        friend.latitude,
        friend.longitude
      );
      const marker = createMarker(markerPosition, mapRef.current);

      // 마커 클릭 시 오버레이 생성
      kakao.maps.event.addListener(marker, "click", function () {
        if (activeOverlayRef.current) {
          activeOverlayRef.current.setMap(null);
        }

        // 친구의 좌표로 주소 변환
        geocoder.current.coord2Address(
          friend.longitude,
          friend.latitude,
          function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
              const address = result[0].road_address
                ? result[0].road_address.address_name
                : result[0].address.address_name;

              const overlayContent = createOverlayContent(
                friend.friendName,
                address,
                friend.latitude,
                friend.longitude,
                "edit"
              );

              const overlay = new kakao.maps.CustomOverlay({
                content: overlayContent,
                map: null,
                position: marker.getPosition(),
                zIndex: 100,
              });

              overlay.setMap(mapRef.current);
              activeOverlayRef.current = overlay; // 현재 활성화된 오버레이 업데이트
            }
          }
        );
      });

      return marker;
    });

    setFriendMarkers(newMarkers); // 새 친구 마커로 상태 업데이트
  };

  const createMarker = (position, map) => {
    return new kakao.maps.Marker({
      position,
      map,
      clickable: true,
      zIndex: 0,
    });
  };

  const createOverlayContent = (title, address, lat, lng, type) => {
    const overlayContent = document.createElement("div");
    overlayContent.className = "wrap";
    overlayContent.style.cssText =
      "position: relative; width: 250px; border: 1px solid #ccc; background-color: white; box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1); border-radius: 10px; overflow: hidden; pointer-events: auto; z-index: 100;"; // z-index를 더 높게 설정
    overlayContent.innerHTML = `
      <div class="info" style="display: flex; flex-direction: row;">
        <div class="img" style="flex: 1; overflow: hidden;">
          <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="desc" style="flex: 2; padding: 10px; font-size: 12px; line-height: 1.5;">
          <div class="title" style="font-weight: bold; font-size: 16px; margin-bottom: 5px;">${title}</div>
          <div class="address" style="margin-bottom: 5px;">${address}</div>
          <div class="actions" style="margin-top: 10px;">
            ${
              type === "edit"
                ? `
              <button class="edit" style="margin-right: 5px;">수정</button>
              <button class="delete">삭제</button>
            `
                : `
              <button class="add">추가</button>
            `
            }
          </div>
        </div>
      </div>
      <div class="close" style="position: absolute; top: 10px; right: 10px; cursor: pointer; background: #fff; border: 1px solid #ccc; border-radius: 3px; padding: 2px 6px;">X</div>
    `;

    const closeBtn = overlayContent.querySelector(".close");
    closeBtn.onclick = function () {
      if (activeOverlayRef.current) {
        activeOverlayRef.current.setMap(null);
      }
    };

    // 수정 버튼 핸들러
    const editBtn = overlayContent.querySelector(".edit");
    if (editBtn) {
      editBtn.onclick = () => {
        setEditFriend({
          id: friends.find((f) => f.latitude === lat && f.longitude === lng).id,
          friendName: title,
        });
        setShowEditModal(true);
        activeOverlayRef.current.setMap(null);
      };
    }

    // 삭제 버튼 핸들러
    const deleteBtn = overlayContent.querySelector(".delete");
    if (deleteBtn) {
      deleteBtn.onclick = () => {
        handleDeleteFriend(lat, lng);
        activeOverlayRef.current.setMap(null);
      };
    }

    // 추가 버튼 핸들러
    const addBtn = overlayContent.querySelector(".add");
    if (addBtn) {
      addBtn.onclick = () => {
        setNewFriend({ friendName: "", latitude: lat, longitude: lng });
        setShowModal(true); // 모달 표시
        activeOverlayRef.current.setMap(null);
      };
    }

    return overlayContent;
  };

  // 친구 추가 처리
  const handleAddFriend = () => {
    if (newFriend.friendName && newFriend.latitude && newFriend.longitude) {
      const newId = Math.max(...friends.map((friend) => friend.id)) + 1;

      // 주소 조회
      geocoder.current.coord2Address(
        newFriend.longitude,
        newFriend.latitude,
        function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            const address = result[0].road_address
              ? result[0].road_address.address_name
              : result[0].address.address_name;

            const updatedFriends = [
              ...friends,
              { ...newFriend, id: newId, address },
            ];
            setFriends(updatedFriends);
          }
        }
      );

      setShowModal(false);
      setNewFriend({ friendName: "", latitude: null, longitude: null }); // 초기화
    }
  };

  // 친구 수정 처리
  const handleEditFriend = () => {
    if (editFriend.friendName && editFriend.id !== null) {
      const updatedFriends = friends.map((friend) =>
        friend.id === editFriend.id
          ? { ...friend, friendName: editFriend.friendName }
          : friend
      );
      setFriends(updatedFriends);
      setShowEditModal(false);
      setEditFriend({ id: null, friendName: "" }); // 초기화
    }
  };

  // 검색 기능 구현
  const handleSearch = () => {
    if (!window.kakao || !window.kakao.maps) {
      console.error("Kakao Maps API is not loaded.");
      return;
    }

    const ps = new kakao.maps.services.Places(); // 장소 검색 객체 생성
    ps.keywordSearch(searchInput, placesSearchCB); // 키워드로 장소 검색
  };

  // 장소 검색 완료 시 호출되는 콜백함수
  const placesSearchCB = (data, status) => {
    if (status === kakao.maps.services.Status.OK) {
      const sortedData = data.sort((a, b) => {
        const distanceA = Math.sqrt(
          Math.pow(a.y - latitude, 2) + Math.pow(a.x - longitude, 2)
        );
        const distanceB = Math.sqrt(
          Math.pow(b.y - latitude, 2) + Math.pow(b.x - longitude, 2)
        );
        return distanceA - distanceB;
      });

      setAddressResults(sortedData);

      searchMarkersRef.current.forEach((marker) => marker.setMap(null));
      searchMarkersRef.current = [];

      if (sortedData.length > 0) {
        const closestLocation = sortedData[0];
        const markerPosition = new kakao.maps.LatLng(
          closestLocation.y,
          closestLocation.x
        );
        mapRef.current.setCenter(markerPosition);
      }

      sortedData.forEach((result) => {
        const markerPosition = new kakao.maps.LatLng(result.y, result.x);
        const marker = createMarker(markerPosition, mapRef.current);

        const overlayContent = createOverlayContent(
          result.place_name,
          result.address_name,
          result.y,
          result.x,
          "add"
        );

        const overlay = new kakao.maps.CustomOverlay({
          content: overlayContent,
          map: null,
          position: marker.getPosition(),
          zIndex: 100,
        });

        kakao.maps.event.addListener(marker, "click", function () {
          if (activeOverlayRef.current) {
            activeOverlayRef.current.setMap(null);
          }
          overlay.setMap(mapRef.current);
          activeOverlayRef.current = overlay;
        });

        searchMarkersRef.current.push(marker);
      });
    } else {
      alert("검색 결과가 없습니다.");
    }
  };

  // 검색 결과 목록에서 항목 클릭 시 지도에 마커 표시 및 중심 이동
  const handleListItemClick = (lat, lng, name, address) => {
    const markerPosition = new kakao.maps.LatLng(lat, lng);
    mapRef.current.setCenter(markerPosition);
  };

  const handleDeleteFriend = (latitude, longitude) => {
    const updatedFriends = friends.filter(
      (friend) => friend.latitude !== latitude && friend.longitude !== longitude
    );
    setFriends(updatedFriends); // 친구 목록에서 삭제
  };

  return (
    <Container>
      <MapBoxHeader>
        <HeaderText>마이페이지</HeaderText>
      </MapBoxHeader>
      <ContextWrapper>
        <ContextText>친구 거주지</ContextText>
        <MapWrapper>
          <SearchWrapper>
            <SearchTitle>주소 검색</SearchTitle>
            <SearchInputContainer>
              <SearchInput
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="주소를 입력하세요"
              />
              <SearchButton onClick={handleSearch}>검색</SearchButton>
            </SearchInputContainer>
            <SearchResultsList>
              {addressResults.map((result, index) => (
                <SearchResultItem
                  key={index}
                  onClick={() =>
                    handleListItemClick(
                      result.y,
                      result.x,
                      result.place_name,
                      result.address_name
                    )
                  }
                >
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                    {result.place_name}
                  </div>
                  <div>{result.address_name}</div>
                </SearchResultItem>
              ))}
            </SearchResultsList>
          </SearchWrapper>
          <MapContainer id="map"></MapContainer>
          <FriendListContainer>
            <FriendListTitle>친구 목록</FriendListTitle>
            <FriendList>
              {friends.map((friend, idx) => (
                <FriendListItem
                  key={idx}
                  onClick={() =>
                    handleListItemClick(
                      friend.latitude,
                      friend.longitude,
                      friend.friendName,
                      `Lat: ${friend.latitude}, Lng: ${friend.longitude}`
                    )
                  }
                >
                  <FriendName>{friend.friendName}</FriendName>
                  <FriendActions>
                    <FriendActionButton
                      onClick={(e) => {
                        e.stopPropagation(); // 클릭 이벤트 전파 방지
                        setEditFriend({
                          id: friend.id,
                          friendName: friend.friendName,
                        });
                        setShowEditModal(true);
                      }}
                    >
                      수정
                    </FriendActionButton>
                    <FriendActionButton
                      onClick={(e) => {
                        e.stopPropagation(); // 클릭 이벤트 전파 방지
                        handleDeleteFriend(friend.latitude, friend.longitude);
                      }}
                    >
                      삭제
                    </FriendActionButton>
                  </FriendActions>
                </FriendListItem>
              ))}
            </FriendList>
          </FriendListContainer>
        </MapWrapper>
      </ContextWrapper>

      {/* 친구 추가 모달 */}
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
            <h2>친구 추가</h2>
            <AddFriendInput
              type="text"
              value={newFriend.friendName}
              onChange={(e) =>
                setNewFriend({ ...newFriend, friendName: e.target.value })
              }
              placeholder="친구 이름 입력"
            />
            <FriendActionButton onClick={handleAddFriend}>
              추가
            </FriendActionButton>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* 친구 수정 모달 */}
      {showEditModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setShowEditModal(false)}>X</CloseButton>
            <h2>친구 수정</h2>
            <AddFriendInput
              type="text"
              value={editFriend.friendName}
              onChange={(e) =>
                setEditFriend({ ...editFriend, friendName: e.target.value })
              }
              placeholder="새 친구 이름 입력"
            />
            <FriendActionButton onClick={handleEditFriend}>
              수정
            </FriendActionButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default MapBox;
