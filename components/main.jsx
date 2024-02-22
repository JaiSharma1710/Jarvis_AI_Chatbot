"use client";

import { useLogics } from "@/lib/useLogics";
import Image from "next/image";

const Main = () => {
  const { inputValue, response, isLoading, setInputValue, handleSubmit, handleFileUpload } =
    useLogics();
  return (
    <div className="w-screen h-[calc(100vh-80px)] flex justify-end items-center flex-col p-4 gap-4">
      <div
        className={`bg-[rgb(45,45,44)] rounded-md w-4/5 h-[85%] flex flex-col gap-4 p-4 ${
          response.question.length ? "justify-start" : "justify-center"
        }`}
      >
        {!response.question.length ? (
          <h2 className="text-white text-4xl font-bold text-center">
            Welcome To Jarvis AI
          </h2>
        ) : !isLoading ? (
          <>
            <p className="text-white font-semibold text-xl">
              Q. {response.question} ?
            </p>
            <p className="text-white h-[85%] overflow-y-auto scroll-m-0 no-scrollbar">
              Ans. {response.answer}
            </p>
          </>
        ) : (
          <Loading />
        )}
      </div>
      <div className="bg-[rgb(45,45,44)] rounded-md w-4/5 h-[10%] p-4 flex justify-between">
        <input
          placeholder="Enter your query"
          className="w-[90%] h-full bg-[rgb(45,45,44)] outline-none text-white"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div className="flex justify-evenly items-center w-[10%]">
          <div className="w-1/4">
            <label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full text-white h-full cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                />
              </svg>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                  onChange={handleFileUpload}
              />
            </label>
          </div>

          <div className="w-1/4" onClick={handleSubmit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full text-white h-full cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        alt="loader"
        src="/loading.gif"
        width={100}
        height={100}
        className=""
      />
    </div>
  );
}
