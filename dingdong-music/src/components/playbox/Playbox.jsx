import React, { useState } from "react";
import { ProgressBar, ProgressCircle } from "./PlayBox.style";
import "./PlayBox.css";

function PlayBox() {
  const [isPushed, setIsPushed] = useState(false);

  return (
    <div
      className="w-full h-full text-white p-4 rounded-md shadow-lg"
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
        <button className="bg-white text-black px-4 py-2 rounded-2xl font-bold hover:bg-gray-200">
          플레이리스트 만들기
        </button>
      </div>
      <div className="h-28 mobile-None"></div>
      <div className="h-60 flex flex-col p-4 pt-28 rounded-md relative mobile-On bg-custom-black">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mobile-None">
          <img src="./images/playlist_logo.svg" />
        </div>
        <p className="text-base text-white font-bold ml-4 mb-10">
          현재 플레이 중인 음악이 없습니다.
        </p>
        <div className="w-full flex flex-col">
          <ProgressBar>
            <ProgressCircle $isPushed={isPushed} />
          </ProgressBar>
          <button
            className="mx-auto"
            onClick={() => {
              setIsPushed(!isPushed);
            }}
          >
            <img src="./images/playbutton.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayBox;
