import { Link } from "react-router-dom";
import { useDashboard } from "src/Hooks/useDashboard";

const SelectTree = () => {
  const { dashboardData } = useDashboard();
  const tempId = localStorage.getItem("tempId");

  if (!tempId) return;
  const arr = [10, 50, 100, 200, 500];
  return (
    <div>
      <div className="flex flex-shrink w-full flex-col items-center min-h-screen bg-main max-w-[calc(100% - 326px)] lg:max-w-full overflow-auto pt-20 sm:pt-14">
        <div className="flex relative flex-1 py-10 pt-8.5 flex-col justify-between w-full px-10 sm:px-0 sm:pt-7.5">
          <div className="flex flex-col space-y-10 sm:space-y-7.5">
            <div className="flex flex-wrap justify-between notranslate ">
              <div className="flex flex-col flex-wrap w-full sm:px-5">
                <div className="notranslate"></div>
                <div className="flex items-center mb-1.5 sm:mb-2.5">
                  <div className="flex">
                    <a
                      className="mr-1.5 text text-white-300 sm:text-sm"
                      href="/dashboard?user=1"
                    >
                      <span className="hover:text-white-500">ID 1</span> /
                    </a>
                  </div>
                  <span className="text text-white whitespace-nowrap sm:text-sm">
                    {"Crypto Global"}
                  </span>
                  <span className="text text-white whitespace-nowrap ml-1.5 sm:text-sm"></span>
                </div>
                <div className="w-full flex justify-between flex-wrap">
                  <div className="flex flex-wrap items-center">
                    <span className="text-two-half text-white font-medium mr-2 sm:text-2xl sm:max-w-[170px]">
                      {"Crypto Global"}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="self-end text-two-half text-white font-bold sm:text-2xl whitespace-nowrap">
                      {dashboardData.MatrixSum} USDT
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex overflow-hidden relative w-full flex-col bg-black-light rounded p-7.5 pb-5 sm:p-5 sm:pl-2.5 sm:pr-2.5 sm:rounded-none ">
                <div className="flex z-10 flex-wrap -m-2 sm:-mx-px mb-7.5 sm:justify-around">
                  {arr.length > 0 &&
                    arr.map((_value: any) => (
                      <Link to={`/dashboard/tree/${tempId}/${1}/${_value}`}>
                        <div className="relative overflow-hidden flex flex-col w-180px min-h-180px  sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                          <div className="flex w-full justify-between !mb-2.5">
                            <div className="flex space-x-1.5 items-center">
                              <span className="text-white-500 text-base sm:text-sm">
                                Lvl 1
                              </span>
                            </div>
                            <span className="flex items-center text-white text-base sm:text-sm">
                              <svg
                                className="w-3 h-3 mr-1.5"
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
                              {_value}
                            </span>
                          </div>
                          <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3 ">
                            <div className="flex w-full justify-center items-center">
                              <div className="relative flex w-full justify-evenly items-start false">
                                <div className="flex w-full">
                                  <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                    <div className="relative">
                                      <div className="bg-white  rounded-full w-7.5 h-7.5 "></div>
                                    </div>
                                    <div className="flex w-full justify-center items-center">
                                      <div className="relative flex w-full justify-evenly items-start false">
                                        <div className="flex w-full">
                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                            <div className="relative">
                                              <div className="bg-white  rounded-full w-5 h-5 "></div>
                                            </div>
                                            <div className="flex w-full justify-center items-center">
                                              <div className="relative flex w-full justify-evenly items-start false">
                                                <div className="flex w-full">
                                                  <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                    <div className="relative">
                                                      <div className="bg-orange  rounded-full w-2.5 h-2.5 "></div>
                                                    </div>
                                                    <div className="flex w-full justify-center items-center">
                                                      <div className="relative flex w-full justify-evenly items-start false">
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-white  rounded-full w-1 h-1 "></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="flex w-full">
                                                  <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                    <div className="relative">
                                                      <div className="bg-white  rounded-full w-2.5 h-2.5 "></div>
                                                    </div>
                                                    <div className="flex w-full justify-center items-center">
                                                      <div className="relative flex w-full justify-evenly items-start false">
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
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
                                        <div className="flex w-full">
                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                            <div className="relative">
                                              <div className="bg-white  rounded-full w-5 h-5 "></div>
                                            </div>
                                            <div className="flex w-full justify-center items-center">
                                              <div className="relative flex w-full justify-evenly items-start false">
                                                <div className="flex w-full">
                                                  <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                    <div className="relative">
                                                      <div className="bg-white  rounded-full w-2.5 h-2.5 "></div>
                                                    </div>
                                                    <div className="flex w-full justify-center items-center">
                                                      <div className="relative flex w-full justify-evenly items-start false">
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="flex w-full">
                                                  <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                    <div className="relative">
                                                      <div className="bg-white  rounded-full w-2.5 h-2.5 "></div>
                                                    </div>
                                                    <div className="flex w-full justify-center items-center">
                                                      <div className="relative flex w-full justify-evenly items-start false">
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
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
                                </div>
                                <div className="flex w-full">
                                  <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                    <div className="relative">
                                      <div className="bg-white  rounded-full w-7.5 h-7.5 "></div>
                                    </div>
                                    <div className="flex w-full justify-center items-center">
                                      <div className="relative flex w-full justify-evenly items-start false">
                                        <div className="flex w-full">
                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                            <div className="relative">
                                              <div className="bg-white  rounded-full w-5 h-5 "></div>
                                            </div>
                                            <div className="flex w-full justify-center items-center">
                                              <div className="relative flex w-full justify-evenly items-start false">
                                                <div className="flex w-full">
                                                  <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                    <div className="relative">
                                                      <div className="bg-white  rounded-full w-2.5 h-2.5 "></div>
                                                    </div>
                                                    <div className="flex w-full justify-center items-center">
                                                      <div className="relative flex w-full justify-evenly items-start false">
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-white  rounded-full w-1 h-1 "></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="flex w-full">
                                                  <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                    <div className="relative">
                                                      <div className="bg-white  rounded-full w-2.5 h-2.5 "></div>
                                                    </div>
                                                    <div className="flex w-full justify-center items-center">
                                                      <div className="relative flex w-full justify-evenly items-start false">
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
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
                                        <div className="flex w-full">
                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                            <div className="relative">
                                              <div className="bg-white  rounded-full w-5 h-5 "></div>
                                            </div>
                                            <div className="flex w-full justify-center items-center">
                                              <div className="relative flex w-full justify-evenly items-start false">
                                                <div className="flex w-full">
                                                  <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                    <div className="relative">
                                                      <div className="bg-white  rounded-full w-2.5 h-2.5 "></div>
                                                    </div>
                                                    <div className="flex w-full justify-center items-center">
                                                      <div className="relative flex w-full justify-evenly items-start false">
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="flex w-full">
                                                  <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                    <div className="relative">
                                                      <div className="bg-white  rounded-full w-2.5 h-2.5 "></div>
                                                    </div>
                                                    <div className="flex w-full justify-center items-center">
                                                      <div className="relative flex w-full justify-evenly items-start false">
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="flex w-full">
                                                          <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                                            <div className="relative">
                                                              <div className="bg-hover-main-blue  rounded-full w-1 h-1 "></div>
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
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap space-x-2">
                            <div className="flex space-x-2 items-center">
                              <svg
                                className="w-5 h-5 stroke-current text-white-500"
                                viewBox="0 0 16 16"
                                fill="none"
                                stroke="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                                  stroke-width="1.333"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                              <span className="text-sm text-white font-normal sm:text-sm">
                                3978
                              </span>
                            </div>
                            <div className="flex space-x-2 items-center">
                              <svg
                                className="w-5 h-5 stroke-current text-white-500"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="#2CFF4E"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                                ></path>
                              </svg>
                              <span className="text-sm text-white font-normal sm:text-sm">
                                166
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectTree;
