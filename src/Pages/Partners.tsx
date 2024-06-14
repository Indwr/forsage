import { CircularProgress, Pagination } from "@mui/material";
import { useState } from "react";
import { usePartners } from "src/Hooks/usePartners";
import { useStore } from "src/Store/Store";
import Dropdown from "react-bootstrap/Dropdown";

const Partners = () => {
  const [amount, setAmount] = useState(20);

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
                  Select package
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
                    </tr>
                  </thead>

                  <tbody className="text-gray-600 text-sm font-light">
                    {data &&
                      data.length > 0 &&
                      data?.map((item: any, key: number) => (
                        <tr
                          key={key}
                          className=" border-b border-white-100 whitespace-nowrap last:border-b-0"
                        >
                          <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left text-white-500 font-medium text-xs">
                            <span>{item.createdAt}</span>
                          </td>
                          <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                            <div className="flex items-center space-x-2.5">
                              <span className="text-white font-medium text-xs">
                                {item.userId}
                              </span>
                            </div>
                          </td>
                          <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-left">
                            <a
                              className="flex items-center notranslate justify-center px-2.5 leading-30px bg-blue-100 hover:bg-main-blue-300 text-main-blue rounded w-max text-sm"
                              href="/dashboard?user=1667618"
                            >
                              {item.addresses.ethAddress}
                            </a>
                          </td>
                          <td className="p-6 xl:p-4 lg:p-3 whitespace-nowrap notranslate text-center text-white font-medium text-xs">
                            {amount}
                          </td>
                        </tr>
                      ))}
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
