import React from "react";

function Playbox(){
  return (
    <div className="bg-gray-900 text-white p-4 rounded-md max-w-sm mx-auto shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex">
        <img src="!#"/>
        <h2 className="text-lg font-bold">내 라이브러리</h2>
        </div>
        <button className="text-xl text-white">+</button>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-md mb-10 heighttemp">
        <h3 className="text-xl font-semibold mb-2 leading-7">첫 번째 플레이리스트를 만드세요.</h3>
        <p className="text-sm text-gray-400 mb-4 leading-6">어렵지 않아요. 저희가 도와드릴게요.</p>
        <button className="bg-white text-black px-4 py-2 rounded-2xl font-bold hover:bg-gray-200">플레이리스트 만들기</button>
      </div>
      <div className="h-20 "></div>
      <div className="h-48 flex flex-col bg-gray-800 p-4 pt-20 rounded-md relative">
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="!#" className="w-32 h-32 mb-4 rounded-full" />
        </div>
        <p className="text-sm text-gray-400 mb-10">현재 플레이 중인 음악이 없습니다.</p>
        <div className="w-full flex flex-col">
          <input type="range" className="w-full h-1 bg-gray-700 rounded-lg overflow-hidden appearance-none cursor-pointer mb-3" />
          <button className="text-white ml-2">
           삼
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playbox;
