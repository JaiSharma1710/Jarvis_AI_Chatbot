const QuestionAnswer = ({ response }) => {
  return (
    <>
      <p className="text-white font-semibold text-xl">
        Q. {response?.question} ?
      </p>
      <p
        className="text-white h-[85%] overflow-y-auto scroll-m-0 no-scrollbar"
        dangerouslySetInnerHTML={{
          __html: `Ans: ${response?.answer
            .replace(/\n/g, "<br />")
            .replace(/\*\*/g, " ")}`,
        }}
      ></p>
    </>
  );
};

export default QuestionAnswer;
