import Image from "next/image";

const Loading = ({className}) => (
  <div className="w-full h-full flex justify-center items-center">
    <Image
      alt="loader"
      src="/loading.gif"
      width={100}
      height={100}
      className={className}
    />
  </div>
);

export default Loading;
