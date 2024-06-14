import { useEffect } from "react";
import { API_URL } from "src/Env";
import { useStore } from "src/Store/Store";
import Circle from "./Circle";
import { Link, useParams } from "react-router-dom";
import OnlyTree from "./OnlyTree";

const Tree = () => {
  const { id, cycle, packagee } = useParams();
  const { tree, setTree } = useStore((state) => state);
  const callAPI = async (id: any, cycleee: any, packageee: any) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const requestOptions: any = {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const result = await fetch(
      `${API_URL}api/v1/tree?userId=${id}&packagee=${packageee}&cycle=${cycleee}`,
      requestOptions,
    );
    const response = await result.json();
    if (response?.statusCode === 200) {
      setTree(response?.data);
    }
  };

  useEffect(() => {
    callAPI(id, cycle, packagee);
  }, [id, cycle, packagee]);
  return (
    <div>
      <div className="flex relative flex-1 py-10 pt-8.5 flex-col justify-between w-full px-10 sm:px-0 sm:pt-7.5">
        <div className="flex flex-col space-y-10 sm:space-y-7.5 z-0 overflow-x-hidden">
          <div className="fixed top-0 right-0 w-full h-full z-0"></div>
          <div className="flex z-10 notranslate !mt-0">
            <div className="flex flex-col flex-wrap w-full sm:px-5">
              <div className="notranslate"></div>
              <div className="flex items-center mb-1.5 sm:mb-2.5">
                <div className="flex">
                  <a
                    className="mr-1.5 text text-white-300 sm:text-sm"
                    href="/dashboard?user=1"
                  >
                    <span className="hover:text-white-500">ID {id}</span> /
                  </a>
                  <a
                    className="mr-1.5 text text-white-300 sm:text-sm"
                    href="/dashboard/xGold?user=1"
                  >
                    <span className="hover:text-white-500">Matrix</span>
                  </a>
                </div>
                <span className="text text-white whitespace-nowrap sm:text-sm">
                  Cycle {cycle}
                </span>
              </div>
              <div className="w-full flex justify-between flex-wrap">
                <div className="flex flex-wrap items-center">
                  <span className="text-two-half text-white font-medium mr-2 sm:text-2xl sm:max-w-[170px]">
                    Cycle {cycle}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex flex-col px-5 space-y-10">
              <div className="flex w-full min-h-340px sm:min-h-290px col-span-4 rounded relative bg-main-blue">
                <div className="flex w-full flex-col z-10 p-7.5 overflow-hidden sm:p-5">
                  <div className="flex w-full justify-between pb-10 z-10">
                    <div className="flex flex-1 items-start justify-start "></div>
                    <div className="flex-1 flex flex-col items-center">
                      <span className="text-white text-two-half font-medium mb-2.5 sm:text-xl">
                        ID 1
                      </span>
                    </div>
                    <div className="flex items-start justify-end flex-1 text-white-300 text-two-half font-normal text-right  sm:text-xl">
                      <div className="flex items-center">
                        <svg
                          className="w-6 h-6 sm:h-4 sm:w-4 mr-2.5 sm:mr-2"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="24"
                            height="24"
                            rx="12"
                            fill="#F3BA2F"
                          ></rect>
                          <path
                            d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                            fill="#fff"
                            stroke="#F0B90B"
                          ></path>
                        </svg>
                        {packagee}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col  w-full h-full z-10">
                    <div className="flex justify-center mb-15 sm:mb-10">
                      <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                        <div className="relative flex w-full justify-evenly items-start false false">
                          <div className="flex flex-col justify-around items-center  w-full">
                            <Circle data={tree[0]} />
                            <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                              <div className="relative flex w-full justify-evenly items-start false false">
                                <div className="flex flex-col justify-around items-center  w-full">
                                  <Circle data={tree[0]} />
                                  <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                                    <div className="relative flex w-full justify-evenly items-start false false">
                                      <div className="flex flex-col justify-around items-center  w-full">
                                        <a href="/dashboard/xGold/2?user=688812">
                                          <div className="relative">
                                            <div
                                              className="flex flex-col  bg-white 
                                                               items-center justify-center text-main-blue text-base group hover:opacity-75 rounded-full  w-13 h-13 sm:w-6.5 sm:h-6.5 "
                                            >
                                              <span className="text-main-bg  text-sm sm:text-5px">
                                                688812
                                              </span>
                                              <span className="false hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                688812
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                                          <div className="relative flex w-full justify-evenly items-start false false">
                                            <div className="flex flex-col justify-around items-center  false">
                                              <a href="/dashboard/xGold/2?user=1597108">
                                                <div className="relative">
                                                  <div
                                                    className="flex flex-col  bg-white 
                                                                        items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                  >
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
                                                        stroke-linejoin="round"
                                                      ></path>
                                                    </svg>
                                                    <span className="group-hover:flex group-hover:absolute hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                      1597108
                                                    </span>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                            <div className="flex flex-col justify-around items-center  false">
                                              <div className="relative">
                                                <div
                                                  className="flex flex-col  bg-hover-main-blue 
                                                                     items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col justify-around items-center  w-full">
                                        <a href="/dashboard/xGold/2?user=1504827">
                                          <div className="relative">
                                            <div
                                              className="flex flex-col  bg-orange 
                                                               items-center justify-center text-main-blue text-base group hover:opacity-75 rounded-full  w-13 h-13 sm:w-6.5 sm:h-6.5 "
                                            >
                                              <span className="text-main-bg  text-sm sm:text-5px">
                                                1504827
                                              </span>
                                              <span className="false hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-orange text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                1504827
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                                          <div className="relative flex w-full justify-evenly items-start false false">
                                            <div className="flex flex-col justify-around items-center  false">
                                              <a href="/dashboard/xGold/2?user=1625022">
                                                <div className="relative">
                                                  <div
                                                    className="flex flex-col  bg-white 
                                                                        items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                  >
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
                                                        stroke-linejoin="round"
                                                      ></path>
                                                    </svg>
                                                    <span className="group-hover:flex group-hover:absolute hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                      1625022
                                                    </span>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                            <div className="flex flex-col justify-around items-center  false">
                                              <div className="relative">
                                                <div
                                                  className="flex flex-col  bg-hover-main-blue 
                                                                     items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col justify-around items-center  w-full">
                                  <a href="/dashboard/xGold/2?user=1263047">
                                    <div className="relative">
                                      <div
                                        className="flex flex-col  bg-white 
                                                      items-center justify-center text-main-blue text-base group hover:opacity-75 rounded-full  w-20 h-20 sm:w-10 sm:h-10 "
                                      >
                                        <span className="text-main-bg  text-base sm:text-mini">
                                          1263047
                                        </span>
                                        <span className="false hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                          1263047
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                                    <div className="relative flex w-full justify-evenly items-start false false">
                                      <div className="flex flex-col justify-around items-center  w-full">
                                        <a href="/dashboard/xGold/2?user=1462646">
                                          <div className="relative">
                                            <div
                                              className="flex flex-col  bg-white 
                                                               items-center justify-center text-main-blue text-base group hover:opacity-75 rounded-full  w-13 h-13 sm:w-6.5 sm:h-6.5 "
                                            >
                                              <span className="text-main-bg  text-sm sm:text-5px">
                                                1462646
                                              </span>
                                              <span className="false hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                1462646
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                                          <div className="relative flex w-full justify-evenly items-start false false">
                                            <div className="flex flex-col justify-around items-center  false">
                                              <a href="/dashboard/xGold/2?user=1585746">
                                                <div className="relative">
                                                  <div
                                                    className="flex flex-col  bg-white 
                                                                        items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                  >
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
                                                        stroke-linejoin="round"
                                                      ></path>
                                                    </svg>
                                                    <span className="group-hover:flex group-hover:absolute hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                      1585746
                                                    </span>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                            <div className="flex flex-col justify-around items-center  false">
                                              <div className="relative">
                                                <div
                                                  className="flex flex-col  bg-hover-main-blue 
                                                                     items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col justify-around items-center  w-full">
                                        <a href="/dashboard/xGold/2?user=1306766">
                                          <div className="relative">
                                            <div
                                              className="flex flex-col  bg-white 
                                                               items-center justify-center text-main-blue text-base group hover:opacity-75 rounded-full  w-13 h-13 sm:w-6.5 sm:h-6.5 "
                                            >
                                              <span className="text-main-bg  text-sm sm:text-5px">
                                                1306766
                                              </span>
                                              <span className="false hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                1306766
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                                          <div className="relative flex w-full justify-evenly items-start false false">
                                            <div className="flex flex-col justify-around items-center  false">
                                              <div className="relative">
                                                <div
                                                  className="flex flex-col  bg-hover-main-blue 
                                                                     items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                ></div>
                                              </div>
                                            </div>
                                            <div className="flex flex-col justify-around items-center  false">
                                              <div className="relative">
                                                <div
                                                  className="flex flex-col  bg-hover-main-blue 
                                                                     items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-around items-center  w-full">
                            <Circle data={tree[1]} />
                            <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                              <div className="relative flex w-full justify-evenly items-start false false">
                                <div className="flex flex-col justify-around items-center  w-full">
                                  <a href="/dashboard/xGold/2?user=1200507">
                                    <div className="relative">
                                      <div
                                        className="flex flex-col  bg-white 
                                                      items-center justify-center text-main-blue text-base group hover:opacity-75 rounded-full  w-20 h-20 sm:w-10 sm:h-10 "
                                      >
                                        <span className="text-main-bg  text-base sm:text-mini">
                                          1200507
                                        </span>
                                        <span className="false hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                          1200507
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                                    <div className="relative flex w-full justify-evenly items-start false false">
                                      <div className="flex flex-col justify-around items-center  w-full">
                                        <a href="/dashboard/xGold/2?user=1416029">
                                          <div className="relative">
                                            <div
                                              className="flex flex-col  bg-orange 
                                                               items-center justify-center text-main-blue text-base group hover:opacity-75 rounded-full  w-13 h-13 sm:w-6.5 sm:h-6.5 "
                                            >
                                              <span className="text-main-bg  text-sm sm:text-5px">
                                                1416029
                                              </span>
                                              <span className="false hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-orange text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                1416029
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                                          <div className="relative flex w-full justify-evenly items-start false false">
                                            <div className="flex flex-col justify-around items-center  false">
                                              <a href="/dashboard/xGold/2?user=1619260">
                                                <div className="relative">
                                                  <div
                                                    className="flex flex-col  bg-white 
                                                                        items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                  >
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
                                                        stroke-linejoin="round"
                                                      ></path>
                                                    </svg>
                                                    <span className="group-hover:flex group-hover:absolute hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                      1619260
                                                    </span>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                            <div className="flex flex-col justify-around items-center  false">
                                              <div className="relative">
                                                <div
                                                  className="flex flex-col  bg-hover-main-blue 
                                                                     items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col justify-around items-center  w-full">
                                        <a href="/dashboard/xGold/2?user=1416477">
                                          <div className="relative">
                                            <div
                                              className="flex flex-col  bg-white 
                                                               items-center justify-center text-main-blue text-base group hover:opacity-75 rounded-full  w-13 h-13 sm:w-6.5 sm:h-6.5 "
                                            >
                                              <span className="text-main-bg  text-sm sm:text-5px">
                                                1416477
                                              </span>
                                              <span className="false hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                1416477
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                                          <div className="relative flex w-full justify-evenly items-start false false">
                                            <div className="flex flex-col justify-around items-center  false">
                                              <a href="/dashboard/xGold/2?user=1566811">
                                                <div className="relative">
                                                  <div
                                                    className="flex flex-col  bg-white 
                                                                        items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                  >
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
                                                        stroke-linejoin="round"
                                                      ></path>
                                                    </svg>
                                                    <span className="group-hover:flex group-hover:absolute hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                      1566811
                                                    </span>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                            <div className="flex flex-col justify-around items-center  false">
                                              <div className="relative">
                                                <div
                                                  className="flex flex-col  bg-hover-main-blue 
                                                                     items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col justify-around items-center  w-full">
                                  <a href="/dashboard/xGold/2?user=1301714">
                                    <div className="relative">
                                      <div
                                        className="flex flex-col  bg-white 
                                                      items-center justify-center text-main-blue text-base group hover:opacity-75 rounded-full  w-20 h-20 sm:w-10 sm:h-10 "
                                      >
                                        <span className="text-main-bg  text-base sm:text-mini">
                                          1301714
                                        </span>
                                        <span className="false hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                          1301714
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                                    <div className="relative flex w-full justify-evenly items-start false false">
                                      <div className="flex flex-col justify-around items-center  w-full">
                                        <a href="/dashboard/xGold/2?user=1448741">
                                          <div className="relative">
                                            <div
                                              className="flex flex-col  bg-orange 
                                                               items-center justify-center text-main-blue text-base group hover:opacity-75 rounded-full  w-13 h-13 sm:w-6.5 sm:h-6.5 "
                                            >
                                              <span className="text-main-bg  text-sm sm:text-5px">
                                                1448741
                                              </span>
                                              <span className="false hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-orange text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                1448741
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                                          <div className="relative flex w-full justify-evenly items-start false false">
                                            <div className="flex flex-col justify-around items-center  false">
                                              <a href="/dashboard/xGold/2?user=1094616">
                                                <div className="relative">
                                                  <div
                                                    className="flex flex-col  bg-white 
                                                                        items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                  >
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
                                                        stroke-linejoin="round"
                                                      ></path>
                                                    </svg>
                                                    <span className="group-hover:flex group-hover:absolute hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                      1094616
                                                    </span>
                                                  </div>
                                                </div>
                                              </a>
                                            </div>
                                            <div className="flex flex-col justify-around items-center  false">
                                              <div className="relative">
                                                <div
                                                  className="flex flex-col  bg-hover-main-blue 
                                                                     items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col justify-around items-center  w-full">
                                        <a href="/dashboard/xGold/2?user=1481102">
                                          <div className="relative">
                                            <div
                                              className="flex flex-col  bg-white 
                                                               items-center justify-center text-main-blue text-base group hover:opacity-75 rounded-full  w-13 h-13 sm:w-6.5 sm:h-6.5 "
                                            >
                                              <span className="text-main-bg  text-sm sm:text-5px">
                                                1481102
                                              </span>
                                              <span className="false hidden w-20 h-20 sm:w-12 sm:h-12 rounded-full bg-white text-main-bg flex justify-center items-center z-30 text-sm sm:text-mini ">
                                                1481102
                                              </span>
                                            </div>
                                          </div>
                                        </a>
                                        <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                                          <div className="relative flex w-full justify-evenly items-start false false">
                                            <div className="flex flex-col justify-around items-center  false">
                                              <div className="relative">
                                                <div
                                                  className="flex flex-col  bg-hover-main-blue 
                                                                     items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                ></div>
                                              </div>
                                            </div>
                                            <div className="flex flex-col justify-around items-center  false">
                                              <div className="relative">
                                                <div
                                                  className="flex flex-col  bg-hover-main-blue 
                                                                     items-center justify-center text-main-blue text-base group false rounded-full  w-6.5 h-6.5 sm:w-3 sm:h-3 "
                                                ></div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between w-full ">
                      <div className="flex space-x-14 xl:space-x-8 sm:space-x-7.5">
                        <div className="flex flex-col">
                          <span className="text-white text-base sm:text-white-500 sm:text-sm">
                            Cycles
                          </span>
                          <div className="flex items-center mt-2.5">
                            <svg
                              className="stroke-current text-white-500 w-6 h-6"
                              viewBox="0 0 20 20"
                              fill="none"
                              stroke="#2CFF4E"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                clipRule="evenodd"
                                d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                              ></path>
                            </svg>
                            <span className="text-white text-base ml-2.5 sm:text-sm">
                              45
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white text-base text-right sm:text-white-500 sm:text-sm">
                          Total level revenue
                        </span>
                        <div className="flex items-center mt-2.5 justify-end">
                          <svg
                            className="stroke-current text-white w-6 h-6"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="#fff"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              opacity=".5"
                              strokeLinecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M14.167 6.667v-2.5a.833.833 0 0 0-.834-.834H5A1.667 1.667 0 0 0 3.333 5m0 0A1.667 1.667 0 0 0 5 6.667h10a.833.833 0 0 1 .833.833V10m-12.5-5v10A1.667 1.667 0 0 0 5 16.667h10a.833.833 0 0 0 .833-.834v-2.5"></path>
                              <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                            </g>
                          </svg>
                          <span className="text-white text-base ml-2.5 notranslate sm:text-sm">
                            9304 BUSD
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex absolute rounded -bottom-5 top-5 right-5 left-2.5 bg-opacity-50 bg-main-blue"></div>
              </div>
              <div className="flex justify-between z-10">
                <div className="flex flex-1">
                  <Link
                    className="flex items-center justify-start font-normal h-full w-full"
                    to={`/dashboard/tree/${id}/${cycle !== undefined && parseInt(cycle) === 1 ? 1 : cycle !== undefined && parseInt(cycle) - 1}/${packagee}`}
                  >
                    <svg
                      className="flex-shrink-0"
                      width="8"
                      height="14"
                      stroke="#fff"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 13 1 7M7 1 1 7"
                        stroke-width="1.5"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="text-white text-base ml-2.5">
                      Cycle {cycle}
                    </span>
                  </Link>
                </div>
                <div className="flex flex-1">
                  <Link
                    className="flex items-center justify-end font-normal h-full w-full "
                    to={`/dashboard/tree/${id}/${cycle !== undefined && parseInt(cycle) + 1}/${packagee}`}
                  >
                    <span className="text-white text-base mr-2.5">
                      Cycle {cycle !== undefined && parseInt(cycle) + 1}
                    </span>
                    <svg
                      className="flex-shrink-0"
                      width="8"
                      height="14"
                      stroke="#fff"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m1 13 6-6M1 1l6 6"
                        stroke-width="1.5"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <div className="flex flex-col sm:px-5 space-y-10 z-10">
              <div className="flex space-x-10 xl:space-x-0 z-10">
                <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-2.5 bg-black-light hover:bg-line-gray active:bg-active-gray min-w-140px xl:hidden p-7 bg-black-light rounded">
                  <Link
                    className="flex items-center justify-center font-normal h-full w-full"
                    to={`/dashboard/tree/${id}/${cycle !== undefined && parseInt(cycle) === 1 ? 1 : cycle !== undefined && parseInt(cycle) - 1}/${packagee}`}
                  >
                    <svg
                      className="flex-shrink-0"
                      width="8"
                      height="14"
                      stroke="#fff"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 13 1 7M7 1 1 7"
                        stroke-width="1.5"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span className="text-white text-base ml-2 5">
                      Cycle{" "}
                      {cycle !== undefined && parseInt(cycle) === 1
                        ? 1
                        : cycle !== undefined && parseInt(cycle) - 1}
                    </span>
                  </Link>
                </button>
                <div className="flex w-full min-h-340px sm:min-h-290px col-span-4 rounded relative bg-main-blue">
                  <div className="flex w-full flex-col z-10 p-7.5 overflow-hidden sm:p-5">
                    <div className="flex w-full justify-between pb-10 z-10">
                      <div className="flex flex-1 items-start justify-start "></div>
                      <div className="flex-1 flex flex-col items-center">
                        <span className="text-white text-two-half font-medium mb-2.5 sm:text-xl">
                          ID {id}
                        </span>
                      </div>
                      <div className="flex items-start justify-end flex-1 text-white-300 text-two-half font-normal text-right  sm:text-xl">
                        <div className="flex items-center">
                          <svg
                            className="w-6 h-6 sm:h-4 sm:w-4 mr-2.5 sm:mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="24"
                              height="24"
                              rx="12"
                              fill="#F3BA2F"
                            ></rect>
                            <path
                              d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                              fill="#fff"
                              stroke="#F0B90B"
                            ></path>
                          </svg>
                          {packagee}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col  w-full h-full z-10">
                      <OnlyTree trees={tree} />
                    </div>
                  </div>
                  <div className="flex absolute rounded -bottom-5 top-5 right-5 left-2.5 bg-opacity-50 bg-main-blue"></div>
                </div>
                <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-2.5 bg-black-light hover:bg-line-gray active:bg-active-gray min-w-140px xl:hidden p-7 bg-black-light rounded">
                  <Link
                    className="flex items-center justify-center font-normal h-full w-full"
                    to={`/dashboard/tree/${id}/${cycle !== undefined && parseInt(cycle) + 1}/${packagee}`}
                  >
                    <span className="text-white text-base mr-2.5">
                      Cycle {cycle !== undefined && parseInt(cycle) + 1}
                    </span>
                    <svg
                      className="flex-shrink-0"
                      width="8"
                      height="14"
                      stroke="#fff"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m1 13 6-6M1 1l6 6"
                        stroke-width="1.5"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </button>
              </div>
              <div className="hidden xl:flex justify-between">
                <Link
                  className="flex cursor-pointer py-5 px-10 z-10 sm:hidden items-center"
                  to={`/dashboard/tree/${id}/${cycle !== undefined && parseInt(cycle) === 1 ? 1 : cycle !== undefined && parseInt(cycle) - 1}/${packagee}`}
                >
                  <svg
                    className="flex-shrink-0 stroke-current text-white"
                    width="8"
                    height="14"
                    stroke="#fff"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13 1 7M7 1 1 7"
                      stroke-width="1.5"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span className="text-white text-base ml-4">
                    Cycle {cycle}
                  </span>
                </Link>
                <Link
                  className="flex cursor-pointer py-5 px-10 z-10 ml-auto sm:hidden items-center"
                  to={`/dashboard/tree/${id}/${cycle !== undefined && parseInt(cycle) + 1}/${packagee}`}
                >
                  <span className="text-white text-base mr-4">
                    Cycle {cycle !== undefined && parseInt(cycle) + 1}
                  </span>
                  <svg
                    className="flex-shrink-0"
                    width="8"
                    height="14"
                    stroke="#fff"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m1 13 6-6M1 1l6 6"
                      stroke-width="1.5"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tree;
