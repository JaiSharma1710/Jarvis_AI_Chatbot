"use client";
import Board from "./board";

import { useLogics } from "@/lib/useLogics";

import SubmitIcon from "@/icons/submitIcon";
import UploadFile from "./uploadFile";

const Main = () => {
  const {
    inputValue,
    response,
    isLoading,
    setInputValue,
    handleSubmit,
    handleFileUpload,
  } = useLogics();

  return (
    <>
      <Board response={response} isLoading={isLoading} />
      <div className="bg-[rgb(45,45,44)] rounded-md w-4/5 h-[10%] p-4 flex justify-between">
        <input
          placeholder="Enter your query"
          className="w-[90%] h-full bg-[rgb(45,45,44)] outline-none text-white"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div className="flex justify-evenly items-center w-[10%]">
          <UploadFile handleFileUpload={handleFileUpload} />
          <div className="cursor-pointer w-1/4" onClick={handleSubmit}>
            <SubmitIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
