import React, { useEffect, useRef, useState } from "react";
import { ProgressBar, ProgressCircle } from "./PlayBox.style";
import "./PlayBox.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setPlayingMusic,
  setIsPlaying,
  setPause,
  resetMusic,
} from "../../redux/playingMusicSlice";
import { setSelectedIndex } from "../../redux/playlistSlice";

function PlayBox() {
  const dispatch = useDispatch();

  //플레이리스트 부분
  const { items, totalAlbums, totalAmount, selectedIndex } = useSelector(
    (state) => state.playlist
  );

  //현재 재생 음악
  const selectedSong = useSelector((state) => state.playingMusic);

  // 플레이리스트 하단 갱신 참조용
  const scrollContainerRef = useRef(null);

  const handlePlayingMusic = (music) => {
    dispatch(setPlayingMusic(music));
    dispatch(resetMusic());
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [items]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollAmount = selectedIndex * 68;
      scrollContainerRef.current.scrollTop = scrollAmount;
    }
  }, [selectedIndex]);

  const handleAnimationEnd = () => {
    if (selectedIndex + 1 < items.length) {
      let tmp = selectedIndex + 1;
      dispatch(setSelectedIndex(tmp));
      dispatch(setPlayingMusic(items[tmp]));
      dispatch(resetMusic());
    } else dispatch(setPause());
  };

  const playlistEmpty = () => (
    <div
      className="p-4 rounded-md mb-10 mobile-None"
      style={{ background: "var(--primary-color)" }}
    >
      <h3 className="text-xl font-semibold mb-2 leading-7">
        첫 번째 플레이리스트를 만드세요.
      </h3>
      <p className="text-sm text-gray-400 mb-4 leading-6">
        어렵지 않아요. 저희가 도와드릴게요.
      </p>
      <button
        onClick={() => {
          console.log(items);
        }}
        className="bg-white text-black px-4 py-2 rounded-2xl font-bold hover:bg-gray-200"
      >
        플레이리스트 만들기
      </button>
    </div>
  );
  const playlistWithItem = () => (
    <div
      className="w-full h-40 mb-5 overflow-auto scroll-hide mobile-None"
      ref={scrollContainerRef}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className={`p-1 rounded-md mb-2 mobile-None ${
            selectedIndex === i ? "text-green-500" : ""
          }`}
          style={{ background: "var(--primary-color)" }}
          onClick={() => {
            dispatch(setSelectedIndex(i));
            handlePlayingMusic(item);
            selectedSong.isPlaying
              ? dispatch(resetMusic())
              : dispatch(setIsPlaying());
          }}
        >
          <div className="flex">
            <div className="w-28 h-14">
              <img
                className="w-14 h-14 rounded-full"
                src={`./images/${item.musicImgSrc}`}
              ></img>
            </div>
            <div className="flex-col items-center py-1">
              <h3 className="font-bold mb-2">{item.musicName}</h3>
              <p className="text-sm" style={{ color: "#b3b3b3" }}>
                {item.artistName}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="w-full h-full text-white p-4 rounded-md shadow-lg   overflow-y-auto scroll-hide
"
      style={{ background: "var(--primary-color3)" }}
    >
      <div className="flex items-center justify-between mb-8 mobile-None">
        <div className="flex gap-3">
          <img src="./images/book_icon.svg" />
          <h2 className="text-lg font-bold">내 라이브러리</h2>
        </div>
        <div>
          <img src="./images/library_submenu.svg" alt="" />
        </div>
      </div>
      {items.length > 0 ? playlistWithItem() : playlistEmpty()}

      <div className="h-28 mobile-None"></div>
      {selectedSong.musicName === "" ? (
        <div className="h-60 flex flex-col p-4 pt-28 rounded-md relative mobile-On bg-custom-black">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mobile-None">
            <img src="./images/playlist_logo.svg" />
          </div>

          <p className="text-base text-white font-bold ml-4 mb-10">
            현재 플레이 중인 음악이 없습니다.
          </p>

          <div className="w-full flex flex-col">
            <ProgressBar>
              <ProgressCircle $isPushed={selectedSong.isPlaying} />
            </ProgressBar>
            <button className="mx-auto">
              <img src="./images/playbutton.svg"></img>
            </button>
          </div>
        </div>
      ) : (
        <div className="h-60 flex flex-col p-4 pt-24 rounded-md relative mobile-On bg-custom-black">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mobile-None">
            <img
              className="w-40 h-40 rounded-full"
              src={`./images/${selectedSong.musicImgSrc}`}
            />
          </div>

          <div className="text-base text-white  ml-4 mb-8">
            <h3>{selectedSong.musicName}</h3>
            <p style={{ color: "#b3b3b3" }}>{selectedSong.artistName}</p>
          </div>
          <div className="w-full flex flex-col">
            <ProgressBar>
              <ProgressCircle
                $isPushed={selectedSong.isPlaying}
                onAnimationEnd={handleAnimationEnd}
              />
            </ProgressBar>
            <button
              className="mx-auto"
              onClick={() => {
                !selectedSong.isPlaying
                  ? dispatch(setIsPlaying())
                  : dispatch(setPause());
              }}
            >
              {selectedSong.isPlaying ? (
                <img src="./images/pausebutton.svg"></img>
              ) : (
                <img src="./images/playbutton.svg"></img>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayBox;
