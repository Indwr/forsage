import { Link, useParams } from "react-router-dom";

const Circle = ({ data }: any) => {
  const { cycle, packagee } = useParams();
  console.log("data", data);
  if (data?.userId) {
    return (
      <Link to={`/dashboard/tree/${data?.userId}/${cycle}/${packagee}`}>
        <div className="relative">
          <div
            className="flex flex-col  bg-white 
                       items-center justify-center text-main-blue text-base group hover:opacity-75 rounded-full  w-13 h-13 sm:w-15 sm:h-15 "
          >
            <span className="text-main-bg  text-base sm:text-sm">
              {data?.userId}
            </span>
            <span className="false hidden w-13 h-13 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
              {data?.userId}
            </span>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <div className="relative">
        <div className="flex flex-col bg-hover-main-blue items-center justify-center text-main-blue text-base group hover:opacity-75 rounded-full  w-13 h-13 sm:w-10 sm:h-10 "></div>
      </div>
    );
  }
};

export default Circle;
