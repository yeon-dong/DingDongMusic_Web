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
  FriendModifyButton,
  FriendDeleteButton,
  ModalOverlay,
  ModalContent,
  CloseButton,
  AddFriendInput,
  SearchPlaceName,
  SearchDetailAddress,
} from "./MapBox.style";

function MapBox() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [addressResults, setAddressResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
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
  const [friendMarkers, setFriendMarkers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newFriend, setNewFriend] = useState({
    friendName: "",
    latitude: null,
    longitude: null,
  });
  const [editFriend, setEditFriend] = useState({ id: null, friendName: "" });
  const mapkey = import.meta.env.VITE_KAKAOMAP_API_KEY;

  const mapRef = useRef(null);
  const searchMarkersRef = useRef([]);
  const activeOverlayRef = useRef(null);
  const geocoder = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${mapkey}&libraries=services`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        if (!("geolocation" in navigator)) {
          alert("Geolocation is not available");
          return;
        }

        navigator.geolocation.getCurrentPosition(
          (pos) => {
            setLatitude(pos.coords.latitude);
            setLongitude(pos.coords.longitude);

            const container = document.getElementById("map");
            const options = {
              center: new window.kakao.maps.LatLng(
                pos.coords.latitude,
                pos.coords.longitude
              ),
              level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);
            mapRef.current = map;

            geocoder.current = new window.kakao.maps.services.Geocoder();
            updateFriendMarkers();
          },
          (err) => {
            alert(err.message);
          }
        );
      });
    });

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      updateFriendMarkers();
    }
  }, [friends]);

  const updateFriendMarkers = () => {
    friendMarkers.forEach((marker) => marker.setMap(null));

    const newMarkers = friends.map((friend) => {
      const markerPosition = new kakao.maps.LatLng(
        friend.latitude,
        friend.longitude
      );
      var firendMarkerImg = new kakao.maps.MarkerImage(
        `/images/friend.svg`,
        new kakao.maps.Size(28, 28),
        { offset: new kakao.maps.Point(27, 69) }
      );
      const marker = createMarker(
        markerPosition,
        mapRef.current,
        firendMarkerImg
      );

      kakao.maps.event.addListener(marker, "click", () => {
        if (activeOverlayRef.current) {
          activeOverlayRef.current.setMap(null);
        }
        geocoder.current.coord2Address(
          friend.longitude,
          friend.latitude,
          (result, status) => {
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
                yAnchor: 1,
              });
              overlay.setMap(mapRef.current);
              activeOverlayRef.current = overlay;
            }
          }
        );
      });

      return marker;
    });

    setFriendMarkers(newMarkers);
  };

  const createMarker = (position, map, img) => {
    return new kakao.maps.Marker({
      position,
      map,
      image: img,
      clickable: true,
      zIndex: 0,
    });
  };

  const createOverlayContent = (title, address, lat, lng, type) => {
    const overlayContent = document.createElement("div");
    overlayContent.className = "wrap";
    overlayContent.style.cssText =
      "position: relative; width: 250px; border: 1px solid #ccc; background-color: white; border-radius: 10px; overflow: hidden; pointer-events: auto; z-index: 99999;"; // z-index를 더 높게 설정
    overlayContent.innerHTML = `
      <div class="info" style="display: flex; flex-direction: row;">
        <div class="desc" style="flex: 2; padding: 10px; font-size: 12px; line-height: 1.5;">
          <div class="title" style="text-align:center; font-weight: bold; font-size: 16px; margin-bottom: 5px;">${title}</div>
          <div class="address" style="text-align:center; margin-bottom: 5px;">${address}</div>
          <div class="actions" style="margin-top: 10px; display: flex; justify-content: center; align-items: center;">
            ${
              type === "edit"
                ? `
              <button class="edit" style="margin-right: 16px; background-color: rgb(96, 165, 250); color: white; padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer">수정</button>
              <button class="delete" style="background-color: rgb(239, 68, 68); color: white; padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer">삭제</button>
            `
                : `
              <button class="add" style="background-color: rgb(96, 165, 250); color: white; padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer">추가</button>
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

    overlayContent.querySelector(".close").onclick = () => {
      if (activeOverlayRef.current) {
        activeOverlayRef.current.setMap(null);
      }
    };

    const editBtn = overlayContent.querySelector(".edit");

    if (editBtn) {
      editBtn.onmouseover = function() {
        this.style.backgroundColor = 'rgb(37, 99, 235)';
      };
      editBtn.onmouseout = function() {
          this.style.backgroundColor = 'rgb(96, 165, 250)';
      };
  
      editBtn.onclick = () => {
        setEditFriend({
          id: friends.find((f) => f.latitude === lat && f.longitude === lng).id,
          friendName: title,
        });
        setShowEditModal(true);
        activeOverlayRef.current.setMap(null);
      };
    }

    const deleteBtn = overlayContent.querySelector(".delete");
    if (deleteBtn) {
      deleteBtn.onmouseover = function() {
        this.style.backgroundColor = 'rgb(220, 38, 38)';
      };
      deleteBtn.onmouseout = function() {
          this.style.backgroundColor = 'rgb(239, 68, 68)';
      };
      deleteBtn.onclick = () => {
        handleDeleteFriend(lat, lng);
        activeOverlayRef.current.setMap(null);
      };
    }

    const addBtn = overlayContent.querySelector(".add");

    if (addBtn) {
      addBtn.onmouseover = function() {
        this.style.backgroundColor = 'rgb(37, 99, 235)';
      };
      addBtn.onmouseout = function() {
          this.style.backgroundColor = 'rgb(96, 165, 250)';
      };
      addBtn.onclick = () => {
        setNewFriend({ friendName: "", latitude: lat, longitude: lng });
        setShowModal(true);
      };
    }

    return overlayContent;
  };

  const handleAddFriend = () => {
    if (newFriend.friendName && newFriend.latitude && newFriend.longitude) {
      const newId = Math.max(...friends.map((friend) => friend.id)) + 1;

      geocoder.current.coord2Address(
        newFriend.longitude,
        newFriend.latitude,
        (result, status) => {
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

      activeOverlayRef.current.setMap(null);
      searchMarkersRef.current.forEach((marker) => marker.setMap(null));
      searchMarkersRef.current = [];

      setShowModal(false);
      setNewFriend({ friendName: "", latitude: null, longitude: null });
    }
  };

  const handleEditFriend = () => {
    if (editFriend.friendName && editFriend.id !== null) {
      const updatedFriends = friends.map((friend) =>
        friend.id === editFriend.id
          ? { ...friend, friendName: editFriend.friendName }
          : friend
      );
      setFriends(updatedFriends);
      setShowEditModal(false);
      setEditFriend({ id: null, friendName: "" });
    }
  };

  const handleSearch = () => {
    if (!window.kakao || !window.kakao.maps) {
      console.error("Kakao Maps API is not loaded.");
      return;
    }

    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchInput, placesSearchCB);
  };

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

        const searchMarkerImg = new kakao.maps.MarkerImage(
          `/images/search.svg`,
          new kakao.maps.Size(28, 28),
          { offset: new kakao.maps.Point(27, 69) }
        );
        const marker = createMarker(
          markerPosition,
          mapRef.current,
          searchMarkerImg
        );

        const overlayContent = createOverlayContent(
          closestLocation.place_name,
          closestLocation.address_name,
          closestLocation.y,
          closestLocation.x,
          "add"
        );

        const overlay = new kakao.maps.CustomOverlay({
          content: overlayContent,
          map: null,
          position: marker.getPosition(),
          zIndex: 100,
          yAnchor: 1,
        });

        kakao.maps.event.addListener(marker, "click", () => {
          if (activeOverlayRef.current) {
            activeOverlayRef.current.setMap(null);
          }
          overlay.setMap(mapRef.current);
          activeOverlayRef.current = overlay;
        });

        searchMarkersRef.current.push(marker);
      }

      // sortedData.forEach((result) => {
      //   const markerPosition = new kakao.maps.LatLng(result.y, result.x);
      //   const searchMarkerImg = new kakao.maps.MarkerImage(
      //     `/images/search.svg`,
      //     new kakao.maps.Size(28, 28),
      //     { offset: new kakao.maps.Point(27, 69) }
      //   );
      //   const marker = createMarker(
      //     markerPosition,
      //     mapRef.current,
      //     searchMarkerImg
      //   );

      //   const overlayContent = createOverlayContent(
      //     result.place_name,
      //     result.address_name,
      //     result.y,
      //     result.x,
      //     "add"
      //   );

      //   const overlay = new kakao.maps.CustomOverlay({
      //     content: overlayContent,
      //     map: null,
      //     position: marker.getPosition(),
      //     zIndex: 100,
      //   });

      //   kakao.maps.event.addListener(marker, "click", () => {
      //     if (activeOverlayRef.current) {
      //       activeOverlayRef.current.setMap(null);
      //     }
      //     overlay.setMap(mapRef.current);
      //     activeOverlayRef.current = overlay;
      //   });

      //   searchMarkersRef.current.push(marker);
      // });
    } else {
      alert("검색 결과가 없습니다.");
    }
  };

  const handleListItemClick = (lat, lng, name, address) => {
    searchMarkersRef.current.forEach((marker) => marker.setMap(null));
    searchMarkersRef.current = [];
    const markerPosition = new kakao.maps.LatLng(lat, lng);
    const searchMarkerImg = new kakao.maps.MarkerImage(
      `/images/search.svg`,
      new kakao.maps.Size(28, 28),
      { offset: new kakao.maps.Point(27, 69) }
    );
    const marker = createMarker(
      markerPosition,
      mapRef.current,
      searchMarkerImg
    );

    const overlayContent = createOverlayContent(
      name,
      address,
      lat,
      lng,
      "add"
    );

    const overlay = new kakao.maps.CustomOverlay({
      content: overlayContent,
      map: null,
      position: marker.getPosition(),
      zIndex: 100,
      yAnchor: 1,
    });

    kakao.maps.event.addListener(marker, "click", () => {
      if (activeOverlayRef.current) {
        activeOverlayRef.current.setMap(null);
      }
      overlay.setMap(mapRef.current);
      activeOverlayRef.current = overlay;
    });

    searchMarkersRef.current.push(marker);

    mapRef.current.setCenter(markerPosition);
  };

  const handleFriendListItemClick = (lat, lng, name, address) => {
    const markerPosition = new kakao.maps.LatLng(lat, lng);
    mapRef.current.setCenter(markerPosition);
  };

  const handleDeleteFriend = (latitude, longitude) => {
    const updatedFriends = friends.filter(
      (friend) => friend.latitude !== latitude && friend.longitude !== longitude
    );
    setFriends(updatedFriends);
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
                  <SearchPlaceName>
                    {result.place_name}
                  </SearchPlaceName>
                  <SearchDetailAddress>{result.address_name}</SearchDetailAddress>
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
                    handleFriendListItemClick(
                      friend.latitude,
                      friend.longitude,
                      friend.friendName,
                      `Lat: ${friend.latitude}, Lng: ${friend.longitude}`
                    )
                  }
                >
                  <FriendName>{friend.friendName}</FriendName>
                  <FriendActions>
                    <FriendModifyButton
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditFriend({
                          id: friend.id,
                          friendName: friend.friendName,
                        });
                        setShowEditModal(true);
                      }}
                    >
                      수정
                    </FriendModifyButton>
                    <FriendDeleteButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteFriend(friend.latitude, friend.longitude);
                      }}
                    >
                      삭제
                    </FriendDeleteButton>
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
            <FriendModifyButton onClick={handleAddFriend}>
              추가
            </FriendModifyButton>
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
            <FriendModifyButton onClick={handleEditFriend}>
              수정
            </FriendModifyButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default MapBox;
