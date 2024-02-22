import Loading from "./Loading";
import QuestionAnswer from "./questionAnswer";
import Welcome from "./welcome";

const Board = ({ response, isLoading }) => {
  return (
    <div
      className={`bg-[rgb(45,45,44)] rounded-md w-4/5 h-[85%] flex flex-col gap-4 p-4 ${
        response?.question?.length ? "justify-start" : "justify-center"
      }`}
    >
      {getBoardContent(isLoading, response)}
    </div>
  );
};

export default Board;

function getBoardContent(isLoading, response) {
  if (!response?.question?.length) return <Welcome />;

  if (isLoading) return <Loading />;

  return <QuestionAnswer response={response} />;
}
