import { useEffect, useState } from "react";
import { API_URL } from "src/Env";
import { useDashboard } from "src/Hooks/useDashboard";

const X3 = () => {
  const [workingTreeData, setWorkingTreeData] = useState([]);
  const [totalPartners, setTotalPartners] = useState(0);
  const { userInfo, dashboardData } = useDashboard();

  const getWorkingTree = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `${API_URL}api/v1/team/workingList`,
      requestOptions,
    );
    const result = await response.json();
    setWorkingTreeData(result?.packages);
    setTotalPartners(result?.totalPartners);
  };

  useEffect(() => {
    getWorkingTree();
  }, []);

  console.log("workingTreeData", workingTreeData);
  const myStyle = {
    padding: "0px 50px",
  };
  const newStyle = { flexWrap: "wrap" };
  const thirdStyle = {
    display: "flex",
    MaxWidth: "150px",
  };
  return (
    <div className="flex flex-col space-y-10 sm:space-y-7.5">
      <div className="flex flex-wrap justify-between notranslate ">
        <div className="flex flex-col flex-wrap w-full sm:px-5">
          <div className="notranslate"></div>
          <div className="flex items-center mb-1.5 sm:mb-2.5">
            <div className="flex">
              <a className="mr-1.5 text text-white-300 sm:text-sm" href="#">
                <span className="hover:text-white-500">
                  ID {userInfo?.userId}
                </span>{" "}
                /
              </a>
            </div>
            <span className="text text-white whitespace-nowrap sm:text-sm">
              Crypto Global
            </span>
          </div>
          <div className="w-full flex justify-between flex-wrap">
            <div className="flex flex-wrap items-center">
              <span className="text-two-half text-white font-medium mr-2 sm:text-2xl sm:max-w-[170px]">
                Crypto Global
              </span>
            </div>
            <div className="flex flex-col items-end">
              <div className="self-end text-two-half text-white font-bold sm:text-2xl whitespace-nowrap">
                {dashboardData.totalWorkingSum} USDT
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex overflow-hidden relative w-full flex-col bg-black-light rounded p-7.5 pb-5 sm:p-5 sm:pl-2.5 sm:pr-2.5 sm:rounded-none">
          <div className="flex z-10 flex-wrap -m-2 sm:-mx-px mb-7.5 sm:justify-around">
            {workingTreeData &&
              workingTreeData.length > 0 &&
              workingTreeData?.map((item: any, key: number) => (
                <a key={key} href="#">
                  <div className="relative overflow-hidden flex flex-col w-180px min-h-158px max-h-[180px] sm:w-158px rounded-small p-5 m-2 justify-between bg-main-blue hover:bg-hover-main-blue sm:space-y-1.5">
                    <div className="flex w-full justify-between !mb-2.5">
                      <span
                        style={myStyle}
                        className="flex items-center text-white text-base sm:text-sm"
                      >
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
                        {item?.price}
                      </span>
                    </div>
                    <div className="relative flex flex-col -ml-2.5 -mr-2.5 !mb-3">
                      <div className="flex w-full justify-center items-center">
                        <div
                          className="relative flex  justify-evenly items-start false"
                          style={newStyle}
                        >
                          {item?.totalIds?.map((news: any, i: number) => (
                            <div key={i} className="flex" style={thirdStyle}>
                              <div className="flex flex-col w-full justify-evenly items-center space-y-1.5">
                                <div className="relative">
                                  <div
                                    style={{
                                      color: "black",
                                      textAlign: "center",
                                    }}
                                    className="bg-white rounded-full w-7.5 h-7.5"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap">
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
                            strokeWidth="1.333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        <span className="text-sm text-white font-normal sm:text-sm">
                          {item?.accordingToPackage}
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
                            clipRule="evenodd"
                            d="M6.354 3.818a7.25 7.25 0 0 1 10.808 5.28.5.5 0 1 1-.99.137A6.25 6.25 0 0 0 4.551 7h2.115a.5.5 0 0 1 0 1H3.333a.5.5 0 0 1-.5-.5V4.167a.5.5 0 1 1 1 0v2.086a7.25 7.25 0 0 1 2.521-2.435ZM3.265 10.338a.5.5 0 0 1 .564.427A6.25 6.25 0 0 0 15.449 13h-2.116a.5.5 0 1 1 0-1H16.667a.5.5 0 0 1 .5.5v3.333a.5.5 0 1 1-1 0v-2.086a7.25 7.25 0 0 1-13.329-2.845.5.5 0 0 1 .427-.564Z"
                          ></path>
                        </svg>
                        <span className="text-sm text-white font-normal sm:text-sm">
                          {item?.totalCycle}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
          </div>
          <div className="flex items-center flex-wrap z-10">
            <div className="flex items-center text-white-500 mb-5 mr-7.5 sm:items-start sm:mb-2.5 sm:pr-2.5 sm:mr-0 sm:w-1/2 sm:order-1">
              <svg
                className="w-5 h-5 mr-2.5 stroke-current text-white"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 7.333A2.667 2.667 0 1 0 6 2a2.667 2.667 0 0 0 0 5.333ZM2 14v-1.333A2.667 2.667 0 0 1 4.667 10h2.666A2.667 2.667 0 0 1 10 12.667V14M10.667 2.086a2.667 2.667 0 0 1 0 5.167M14 14v-1.333a2.667 2.667 0 0 0-2-2.567"
                  strokeWidth="1.333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="text-base sm:text-sm">
                Total Partners {totalPartners}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default X3;
