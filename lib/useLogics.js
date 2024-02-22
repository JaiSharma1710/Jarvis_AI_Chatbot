/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

export function useLogics() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({
    question: "",
    answer: "",
  });

  const handleSubmit = async () => {
    try {
      if (!inputValue.length) {
        return;
      }
      setResponse({ question: inputValue, answer: "" });
      setInputValue("");
      setIsLoading(true);
      const response = await axios.post("/api/chat", {
        question: inputValue,
      });

      if (response?.data?.status === "failed") {
        throw new Error("something went wrong");
      }

      setResponse((pre) => ({
        ...pre,
        answer: response?.data?.message || "sorry something went wrong",
      }));
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setResponse((pre) => ({ ...pre, answer: "sorry something went wrong" }));
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    // let data = {};
    // formData.forEach((value, key) => {
    //   data[key] = value;
    // });

    // console.log(data.image);

    const response = await axios.post("/api/image", {
      image: formData,
    });
  };

  return {
    inputValue,
    response,
    isLoading,
    setInputValue,
    handleSubmit,
    handleFileUpload,
  };
}
