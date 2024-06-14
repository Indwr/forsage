import { CircularProgress, Pagination } from "@mui/material";
import { useState } from "react";
import { usePartners } from "src/Hooks/usePartners";
import { useStore } from "src/Store/Store";
import Dropdown from "react-bootstrap/Dropdown";

const Partners = () => {
  const [amount, setAmount] = useState("");

  const changeAmount = (amt: string) => setAmount(amt);

  const { data, isPending, handleChangePage } = usePartners(amount);

  const { page, pageCount } = useStore((state) => state);

  if (isPending)
    return (
      <div className="h-100 flex justify-center align-middle">
        <CircularProgress sx={{ scale: ".8", color: "white" }} />;
      </div>
    );

  return (
    <main className="flex flex-1 w-full">
      <div className="flex flex-col w-full space-y-10 sm:space-y-7.5">
        <div className="flex flex-col flex-wrap w-full sm:px-5">
          <div className="notranslate"></div>
          <div className="flex items-center mb-1.5 sm:mb-2.5"></div>
          <div className="w-full flex justify-between flex-wrap">
            <div className="flex flex-wrap items-center">
              <span className="text-two-half text-white font-medium mr-2 sm:text-2xl whitespace-nowrap">
                Partners
              </span>
              <a
                className="inline-flex px-2.5 !leading-30px bg-blue-100 notranslate hover:bg-main-blue-300 text-main-blue rounded text-xl w-max sm:text-base"
                href="/dashboard?user=1"
              >
                ID 1
              </a>
            </div>

            <div className="flex relative items-center ml-7.5 cursor-pointer">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Filters
                  {/* <div className="flex items-center rounded px-2.5 py-1 bg-main-blue-200">
                    <svg
                      className="w-5 h-5 fill-current mr-1.5 text-main-blue"
                      viewBox="0 0 24 24"
                      fill="#406AFF"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.5 5h13a1 1 0 0 1 .5 1.5L14 12v7l-4-3v-4L5 6.5A1 1 0 0 1 5.5 5Z"></path>
                    </svg>
                    <span className="text-base leading-6 text-main-blue">
                      Filters
                    </span>
                  </div> */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => changeAmount("20")}>
                    20
                  </Dropdown.Item>

                  <Dropdown.Item onClick={() => changeAmount("50")}>
                    50
                  </Dropdown.Item>

                  <Dropdown.Item onClick={() => changeAmount("100")}>
                    100
                  </Dropdown.Item>

                  <Dropdown.Item onClick={() => changeAmount("200")}>
                    200
                  </Dropdown.Item>

                  <Dropdown.Item onClick={() => changeAmount("500")}>
                    500
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col mb-5 w-full">
            <div className="flex-1 sm:rounded-none z-10 flex w-full flex-col bg-black-light rounded overflow-hidden h-full min-h-90 sm:max-h-3/4">
              <div className="overflow-auto max-h-[80vh] sm:max-h-[75vh]">
                <table className="w-full table-auto border-white-100]">
                  <thead>
                    <tr className="text-white-500 text-xs font-normal border-b border-white-100">
                      <th className="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-left">
                        <div className="whitespace-nowrap flex items-center notranslate">
                          Joining Date
                          {/* <div className="flex flex-col ml-[4px]">
                            <svg
                              className=""
                              width="4"
                              height="5"
                              fill="#D9D9D9"
                              opacity=".5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                            </svg>
                            <svg
                              className="rotate-180 mt-[2px] "
                              width="4"
                              height="5"
                              fill="#D9D9D9"
                              opacity=".5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1 5h2a1 1 0 0 0 .923-1.385l-1-2.4c-.342-.82-1.504-.82-1.846 0l-1 2.4A1 1 0 0 0 1 5Z"></path>
                            </svg>
                          </div> */}
                        </div>
                      </th>

                      <th className=" p-6 xl:p-4 lg:p-6 lg:px-3 text-left">
                        <div className="whitespace-nowrap flex items-center notranslate">
                          USER ID
                        </div>
                      </th>

                      <th className=" p-6 xl:p-4 lg:p-6 lg:px-3 text-left">
                        <div className="whitespace-nowrap flex items-center notranslate">
                          <span className="notranslate">Address</span>
                        </div>
                      </th>

                      <th className="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-center">
                        <div className="whitespace-nowrap flex items-center notranslate">
                          <span className="notranslate">Toal USDT Package</span>
                        </div>
                      </th>

                      <th className="cursor-pointer p-6 xl:p-4 lg:p-6 lg:px-3 text-center">
                        <div className="whitespace-nowrap flex items-center notranslate">
                          <span className="notranslate">Topup Date</span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-600 text-sm font-light">
                    <tr className="bg-green-100 border-b border-white-100 whitespace-nowrap last:border-b-0">
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                        <span>23.12.2023 19:08</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-white font-medium text-xs">
                            0x944F...0fBE
                          </span>
                          <button>
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 20 20"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                              ></path>
                            </svg>
                          </button>
                          <a
                            target="_blank"
                            href="https://bscscan.com/address/0x944f2e7c2edbbcd5a2a1850b6dc16ceb691c0fbe"
                          >
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 24 24"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <a
                          className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                          href="/dashboard?user=1631464"
                        >
                          ID 1631464
                        </a>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        2
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        25 BUSD
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BNB
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        <span className="text-green-350 font-semibold">
                          + 1
                        </span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        3
                      </td>
                    </tr>
                    <tr className=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                        <span>25.02.2024 19:34</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-white font-medium text-xs">
                            0xfc47...D732
                          </span>
                          <button>
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 20 20"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                              ></path>
                            </svg>
                          </button>
                          <a
                            target="_blank"
                            href="https://bscscan.com/address/0xfc471fc8a0af49f02c0fbb657219cbd77b58d732"
                          >
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 24 24"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <a
                          className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                          href="/dashboard?user=1667618"
                        >
                          ID 1667618
                        </a>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BUSD
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BNB
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        <span>0</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        0
                      </td>
                    </tr>
                    <tr className=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                        <span>23.02.2024 19:52</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-white font-medium text-xs">
                            0xf250...9917
                          </span>
                          <button>
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 20 20"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                              ></path>
                            </svg>
                          </button>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://bscscan.com/address/0xf250d2e17ee5d03ed23c067dea6b0d3848629917"
                          >
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 24 24"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <a
                          className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                          href="/dashboard?user=1666666"
                        >
                          ID 1666666
                        </a>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BUSD
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BNB
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        <span>0</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        0
                      </td>
                    </tr>
                    <tr className=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                        <span>23.02.2024 04:10</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-white font-medium text-xs">
                            0xEb26...8939
                          </span>
                          <button>
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 20 20"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                              ></path>
                            </svg>
                          </button>
                          <a
                            target="_blank"
                            href="https://bscscan.com/address/0xeb26429c0a2b0aa29c364566244eee623f7f8939"
                          >
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 24 24"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <a
                          className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                          href="/dashboard?user=1666362"
                        >
                          ID 1666362
                        </a>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BUSD
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BNB
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        <span>0</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        0
                      </td>
                    </tr>
                    <tr className=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                        <span>22.02.2024 23:57</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-white font-medium text-xs">
                            0x5c0e...23C8
                          </span>
                          <button>
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 20 20"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                              ></path>
                            </svg>
                          </button>
                          <a
                            target="_blank"
                            href="https://bscscan.com/address/0x5c0e2417aa9f0b38df8932858823f9588a8a23c8"
                          >
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 24 24"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <a
                          className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                          href="/dashboard?user=1666338"
                        >
                          ID 1666338
                        </a>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        2
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BUSD
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BNB
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        <span>0</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        0
                      </td>
                    </tr>
                    <tr className=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                        <span>22.02.2024 20:24</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-white font-medium text-xs">
                            0x422d...a200
                          </span>
                          <button>
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 20 20"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                              ></path>
                            </svg>
                          </button>
                          <a
                            target="_blank"
                            href="https://bscscan.com/address/0x422dab38c683b0bfbe892d2dea9c76c03176a200"
                          >
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 24 24"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <a
                          className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                          href="/dashboard?user=1666185"
                        >
                          ID 1666185
                        </a>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BUSD
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BNB
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        <span>0</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        0
                      </td>
                    </tr>
                    <tr className=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                        <span>21.02.2024 16:34</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-white font-medium text-xs">
                            0xDC93...1D8D
                          </span>
                          <button>
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 20 20"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                              ></path>
                            </svg>
                          </button>
                          <a
                            target="_blank"
                            href="https://bscscan.com/address/0xdc9302d90c087a4b605cee41d871eb0418391d8d"
                          >
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 24 24"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <a
                          className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                          href="/dashboard?user=1665606"
                        >
                          ID 1665606
                        </a>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BUSD
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BNB
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        <span>0</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        0
                      </td>
                    </tr>
                    <tr className=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                        <span>20.02.2024 19:17</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-white font-medium text-xs">
                            0xef75...Ca8c
                          </span>
                          <button>
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 20 20"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                              ></path>
                            </svg>
                          </button>
                          <a
                            target="_blank"
                            href="https://bscscan.com/address/0xef7581adee21c0e4448f91f01621d62674f0ca8c"
                          >
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 24 24"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <a
                          className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                          href="/dashboard?user=1665161"
                        >
                          ID 1665161
                        </a>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BUSD
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BNB
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        <span>0</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        0
                      </td>
                    </tr>
                    <tr className=" border-b border-white-100 whitespace-nowrap last:border-b-0">
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                        <span>20.02.2024 10:22</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-white font-medium text-xs">
                            0xb737...826B
                          </span>
                          <button>
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 20 20"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                              ></path>
                            </svg>
                          </button>
                          <a
                            target="_blank"
                            href="https://bscscan.com/address/0xb737802b8006114549f813ff8d67233521bb826b"
                          >
                            <svg
                              className="h-18px w-18px"
                              viewBox="0 0 24 24"
                              fill="#fff"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.232 7.232A2.5 2.5 0 0 1 6 6.5h5a.5.5 0 0 1 0 1H6A1.5 1.5 0 0 0 4.5 9v9A1.5 1.5 0 0 0 6 19.5h9a1.5 1.5 0 0 0 1.5-1.5v-5a.5.5 0 0 1 1 0v5a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V9a2.5 2.5 0 0 1 .732-1.768Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.354 3.646a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.708-.708l10-10a.5.5 0 0 1 .708 0Z"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H15a.5.5 0 0 1-.5-.5Z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                        <a
                          className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                          href="/dashboard?user=1664914"
                        >
                          ID 1664914
                        </a>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        1
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                        0
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BUSD
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-right text-white font-medium text-xs">
                        0 BNB
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        <span>0</span>
                      </td>
                      <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-white text-right font-medium text-xs">
                        0
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <div className="flex p-4 sm:p-2.5">
                <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 w-full rounded-mini flex justify-center items-center">
                  <svg
                    className="mr-2.5"
                    width="21"
                    height="20"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.5 15.833c3.333 0 6.11-1.944 8.333-5.833-2.222-3.89-5-5.833-8.333-5.833S4.39 6.11 2.167 10c2.222 3.889 5 5.833 8.333 5.833ZM12.167 10a1.667 1.667 0 1 1-3.334 0 1.667 1.667 0 0 1 3.334 0Z"
                    ></path>
                  </svg>{" "}
                  <span>See more</span>
                </button>
              </div> */}
              <Pagination
                className={`mx-auto text-white`}
                count={pageCount}
                page={page + 1}
                onChange={handleChangePage}
                shape="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Partners;
