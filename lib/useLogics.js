/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";

export function useLogics() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
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
      setIsLoading(true);
      let response;

      if (!file) {
        response = await handleChat();
      } else if (file) {
        response = await handleImage();
        setFile(null);
      }

      if (response?.data?.status === "failed") {
        throw new Error("something went wrong");
      }

      setResponse((pre) => ({
        ...pre,
        answer: response?.data?.message || "sorry something went wrong",
      }));
      setIsLoading(false);
      setInputValue("");
    } catch (err) {
      console.log(err);
      setResponse((pre) => ({ ...pre, answer: "sorry something went wrong" }));
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleChat = async () => {
    return axios.post("/api/chat", {
      question: inputValue,
    });
  };

  const handleImage = () => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = async () => {
        try {
          let imageData = fileReader.result;
          const response = await axios.post("/api/image", {
            image: imageData,
            mimeType: file.type,
            question: inputValue,
          });
          resolve(response);
        } catch (error) {
          reject(error);
        }
      };
      fileReader.readAsDataURL(file);
    });
  };

  return {
    inputValue,
    response,
    isLoading,
    file,
    setInputValue,
    handleSubmit,
    handleFileUpload,
  };
}
