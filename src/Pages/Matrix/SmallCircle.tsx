import { Link, useParams } from "react-router-dom";

const SmallCircle = ({ data }: any) => {
  const { cycle, packagee } = useParams();
  if (data?.userId) {
    return (
      <Link to={`/dashboard/tree/${data?.userId}/${cycle}/${packagee}`}>
        <div className="relative">
          <div className="flex flex-col bg-white items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 ">
            <svg
              className="w-3.5 h-3.5 sm:h-2 sm:w-2 stroke-current text-main-bg"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 9.167A3.333 3.333 0 1 0 10 2.5a3.333 3.333 0 0 0 0 6.667ZM5 17.5v-1.667A3.333 3.333 0 0 1 8.333 12.5h3.334A3.333 3.333 0 0 1 15 15.833V17.5"
                stroke="#191A1B"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="group-hover:flex group-hover:absolute hidden w-13 h-13 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
              {data?.userId}
            </span>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <div className="relative">
        <div className="flex flex-col  bg-hover-main-blue items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "></div>
      </div>
    );
  }
};

export default SmallCircle;
