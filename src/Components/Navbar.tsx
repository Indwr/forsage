import { useEffect, useReducer, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import {
  DashboardIcon,
  DropdownIcon,
  InfoIcon,
  InstructionsIcon,
  PartnersIcon,
  PromoIcon,
  TeamIcon,
} from "src/Assets/Icons";
import { Devider } from "./Sidebar";

import { LogoGreen } from "src/Assets/Svg";
import { Logo } from "./Logo";
import { useStore } from "src/Store/Store";
import { logout, maskHex } from "src/Lib/utils";
import { usdtAddress } from "src/Utils/Addresses";
import { USDT_ABI } from "src/Utils/ABI";
import { Button } from "./ui/button";
import { useLogin } from "src/Hooks/useLogin";
import { CircularProgress } from "@mui/material";
import toast from "react-hot-toast";

export const Navbar = () => {
  const navigate = useNavigate();
  const { setWalletAddress } = useStore((state) => state);
  const [isNavSm, setIsNavSm] = useReducer((open) => !open, false);

  const isPreview = localStorage.getItem("isPreview") || "true";

  const getCurrentWalletConnected = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      }
    } catch (err: any) {
      toast.error(err.message);
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCurrentWalletConnected();
  }, []);

  console.log("isPreview", isPreview);
  const { isPending, handleSubmit } = useLogin();

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 flex justify-center w-full px-10 py-2.5 z-40 lg:p-0 lg:max-h-screen z-999999">
      {isNavSm ? (
        <NavbarSm {...{ close: setIsNavSm, isPreview }} />
      ) : (
        <>
          {isPreview === "false" ? (
            <AuthNav {...{ setIsNavSm }} />
          ) : (
            <div className="flex justify-between items-center rounded-mini max-w-desktop-preview-bar w-full bg-main-blue px-5 py-2 shadow-preview-bar lg:pl-10 sm:pl-5 lg:py-2.5 lg:rounded-none lg:rounded-b-mini lg:pr-0 false">
              <div className="flex w-full overflow-hidden items-center justify-between space-x-2.5 lg:items-start">
                <div className="w-full flex justify-start items-center space-x-5 lg:flex-col lg:h-full lg:items-start lg:space-x-0 lg:space-y-7.5">
                  <form onSubmit={(e) => handleSubmit(e, "id")}>
                    <div className="flex items-center false lg:w-full lg:pr-10 sm:pr-5">
                      <Logo src={LogoGreen} />

                      <span className="text-base text-white whitespace-nowrap mr-5 notranslate lg:mr-0 false">
                        Preview ID
                        <span className="hidden lg:inline ml-1.5">1</span>
                      </span>
                      <div className="flex justify-between items-center space-x-2.5 lg:space-x-5 lg:w-full lg:hidden">
                        <input
                          name="address"
                          className="px-4 py-3 rounded-mini leading-5 bg-white-100 text-white text-base outline-none false"
                        />
                        <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none bg-white-100 py-3 px-5">
                          {isPending ? (
                            <CircularProgress
                              sx={{ scale: ".5", color: "white" }}
                            />
                          ) : (
                            "Go"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <NavLink
                  to={"/login"}
                  className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-bg hover:bg-black-500 whitespace-nowrap lg:hidden"
                >
                  {"Connect Wallet"}
                </NavLink>
              </div>
              <div className="flex lg:justify-end lg:ml-auto lg:pr-10 sm:pr-5">
                <button
                  className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 rounded-full lg:hidden w-10 h-10 !p-0 ml-5"
                  // onClick={hideNavbar}
                  onClick={() => navigate("/login")}
                >
                  <svg
                    className="w-6 h-6 cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6 6 18M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div className="">
                  <button
                    className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 flex-col rounded-full w-10 h-10 !p-0 hidden lg:flex"
                    onClick={setIsNavSm}
                  >
                    <span className="w-4 border-t border-white mb-2"></span>
                    <span className="w-4 border-t border-white"></span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;

const NavbarSm = ({
  close,
  isPreview,
}: {
  close: () => void;
  isPreview: string | null;
}) => {
  const { setWalletAddress } = useStore((state) => state);
  const [isTeam, setIsTeam] = useReducer((open) => !open, false);
  const [isInfo, setIsInfo] = useReducer((open) => !open, false);
  const { isPending, handleSubmit } = useLogin();

  const getCurrentWalletConnected = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      }
    } catch (err: any) {
      toast.error(err.message);
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCurrentWalletConnected();
  }, []);

  return (
    <div className="flex justify-between items-center rounded-mini max-w-desktop-preview-bar w-full bg-main-blue px-5 py-2 shadow-preview-bar lg:pl-10 sm:pl-5 lg:py-2.5 lg:rounded-none lg:rounded-b-mini lg:pr-0 lg:flex-col lg:pb-5 lg:h-screen lg:max-h-screen lg:rounded-b-none lg:justify-start">
      <div className="flex w-full overflow-hidden items-center justify-between space-x-2.5 lg:items-start lg:order-2 lg:flex-col lg:pt-10 lg:items-start lg:space-y-7.5 lg:flex-1 lg:h-full">
        <div className="w-full flex justify-start items-center space-x-5 lg:flex-col lg:h-full lg:items-start lg:space-x-0 lg:space-y-7.5">
          <div className="absolute top-4 left-7">
            <Logo src={LogoGreen} />
          </div>

          {isPreview === "true" && (
            <>
              <div className="flex items-center lg:flex-col lg:items-start lg:w-full lg:pr-10 sm:pr-5">
                <span className="text-base text-white whitespace-nowrap mr-5 notranslate lg:mr-0 lg:text-2xl lg:text-medium lg:mb-7.5">
                  Preview ID<span className="hidden lg:inline ml-1.5">1</span>
                </span>
                <form onSubmit={(e) => handleSubmit(e, "id")}>
                  <div className="flex justify-between items-center space-x-2.5 lg:space-x-5 lg:w-full lg:flex">
                    <input
                      name="address"
                      className="px-4 py-3 rounded-mini leading-5 bg-white-100 text-white text-base outline-none lg:w-full lg:flex-1"
                    />
                    <button
                      type="submit"
                      className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none bg-white-100 py-3 px-5 lg:px-10"
                    >
                      {isPending ? (
                        <CircularProgress
                          sx={{ scale: ".5", color: "white" }}
                        />
                      ) : (
                        "Go"
                      )}
                    </button>
                  </div>
                </form>
              </div>

              <div className="w-full pr-5 lg:pr-10 sm:pr-5 !mt-4">
                <Button
                  onClick={logout}
                  className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-bg hover:bg-black-500 whitespace-nowrap hidden lg:flex w-full"
                >
                  Exit preview mode
                </Button>
              </div>
            </>
          )}

          <div className="overflow-auto w-full hidden lg:flex">
            <div className="flex flex-1 flex-col h-full w-full overflow-y-auto space-y-2.5 lg:space-y-0">
              <div className="flex flex-1 flex-col w-full h-full overflow-y-auto space-y-2.5 lg:space-y-0 lg:mb-5 sm:mb-[50px]">
                <NavLink to="/dashboard" onClick={close}>
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent bg-black-light lg:bg-transparent lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <DashboardIcon />

                      <span className="text-white-500 text-base ml-2.5 text-white-900">
                        Dashboard
                      </span>
                    </div>
                  </button>
                </NavLink>
                <div className=" bg-black-light lg:bg-transparent lg:!pb-0 min-w-[186px] cursor-pointer hover:bg-black-light lg:hover:bg-transparent rounded-[10px] lg:border-b lg:border-white-300 lg:rounded-none lg:justify-between">
                  <div
                    className="flex p-2.5 lg:px-0 lg:py-5"
                    onClick={setIsTeam}
                  >
                    <TeamIcon />

                    <span className="text-[#8B8C8C] text-base ml-2.5 lg:text-white-500">
                      Team
                    </span>

                    <DropdownIcon show={isTeam} />
                  </div>

                  {isTeam && (
                    <>
                      <Devider />

                      <div className="flex flex-col p-2.5 lg:py-0 lg:pr-0">
                        <NavLink to="partners" onClick={close}>
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <PartnersIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Partners
                              </span>
                            </div>
                          </button>
                        </NavLink>
                      </div>
                    </>
                  )}
                </div>

                <div className=" bg-black-light lg:bg-transparent lg:!pb-0  min-w-[186px] cursor-pointer hover:bg-black-light lg:hover:bg-transparent rounded-[10px] lg:border-b lg:border-white-300 lg:rounded-none lg:justify-between">
                  <div
                    className="flex p-2.5 lg:px-0 lg:py-5"
                    onClick={setIsInfo}
                  >
                    <InfoIcon />

                    <span className="text-[#8B8C8C] text-base ml-2.5 lg:text-white-500">
                      Statements
                    </span>

                    <DropdownIcon show={isInfo} />
                  </div>

                  {isInfo && (
                    <>
                      <Devider />

                      <div className="flex flex-col p-2.5 lg:py-0 lg:pr-0">
                        <NavLink to="referal-income" onClick={close}>
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between  lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <InstructionsIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Referal Income
                              </span>
                            </div>
                          </button>
                        </NavLink>

                        <NavLink to="level-income" onClick={close}>
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between  lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <InstructionsIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Level Income
                              </span>

                              {/* <span className="absolute top-1 right-1.5 text-green text-sm lg:bg-green-200 lg:px-2.5 lg:py-1 lg:rounded lg:top-1/2 lg:-translate-y-1/2 lg:right-5">
                                New
                              </span> */}
                            </div>
                          </button>
                        </NavLink>

                        <NavLink to="non-working-income" onClick={close}>
                          <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between  lg:pl-5 lg:border-t lg:border-white-300 hover:!bg-white-50 lg:hover:!bg-transparent">
                            <div className="flex items-center text-left">
                              <InstructionsIcon />

                              <span className="text-white-500 text-base ml-2.5 false">
                                Non-Working Income
                              </span>
                            </div>
                          </button>
                        </NavLink>
                      </div>
                    </>
                  )}
                </div>

                <NavLink to="promo" onClick={close}>
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer  hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <PromoIcon />

                      <span className="text-white-500 text-base ml-2.5 false">
                        Promo &amp; PDFs
                      </span>
                    </div>
                  </button>
                </NavLink>

                {isPreview === "false" && (
                  <button className="relative w-full flex items-center px-2.5 py-2 rounded-xl cursor-pointer undefined hover:bg-black-light lg:hover:bg-transparent false lg:rounded-none lg:pl-0 lg:pr-5 lg:py-5 lg:justify-between   lg:border-b lg:border-white-300">
                    <div className="flex items-center text-left">
                      <svg
                        className="w-6 h-6 stroke-current text-white-500 "
                        width="24"
                        height="24"
                        stroke="#fff"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2M7 12h14m0 0-3-3m3 3-3 3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span
                        onClick={logout}
                        className="text-white-500 text-base ml-2.5 false"
                      >
                        Log out
                      </span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-bg hover:bg-black-500 whitespace-nowrap lg:hidden">
          Connect wallet
        </button>
      </div>
      <div className="flex lg:justify-end lg:ml-auto lg:pr-10 sm:pr-5">
        <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 rounded-full lg:hidden w-10 h-10 !p-0 ml-5">
          <svg
            className="w-6 h-6 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6 6 18M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <div className="">
          <button
            className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-white-100 hover:bg-white-300 flex-col rounded-full w-10 h-10 !p-0 hidden lg:flex"
            onClick={close}
          >
            <div className="">
              <svg
                className="w-6 h-6 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6 6 18M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const AuthNav = ({ setIsNavSm }: { setIsNavSm: () => void }) => {
  const { userInfo } = useStore((state) => state);
  const [balance, setBalance] = useState<number>(0);

  const checkBalance = async () => {
    try {
      if (!window.ethereum) {
        console.log("window.ethereum is not available");
        return;
      }
      const getAccounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const usdtContract = new ethers.Contract(usdtAddress, USDT_ABI, signer);
      const balanceUSDT = await usdtContract.balanceOf(getAccounts[0]);
      const hex = ethers.formatUnits(balanceUSDT, 18); // Convert balance to human-readable format
      const finalAmount = hex.toString().slice(0, 4);
      setBalance(parseFloat(finalAmount));
    } catch (error) {
      console.error("Error checking balance:", error);
    }
  };

  useEffect(() => {
    checkBalance();
  }, []);
  return (
    <>
      <nav className="z-10 w-full max-w-desktop-preview-bar m-auto header-border-b px-4 pt-3">
        <div className="flex items-center justify-between">
          <Logo src={LogoGreen} />

          <div className="flex justify-end items-center ml-auto">
            <div className="flex justify-end">
              <button className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-2.5 bg-black-light hover:bg-line-gray active:bg-active-gray px-2.5 p-2 rounded ml-5 font-normal pl-0 pr-2.5 notranslate sm:pl-2.5 sm:ml-2.5">
                <div className="flex items-center border-r border-white-100 px-2.5 last:border-r-0 lg:hidden undefined lg:px-0 lg:pl-2.5 sm:pl-0">
                  <svg
                    className="w-6 h-6 mr-2.5 sm:hidden"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#F3BA2F"></rect>
                    <path
                      d="m12 4.32 1.903 1.943-4.791 4.777-1.903-1.897L12 4.32ZM14.889 7.2l1.902 1.943-7.68 7.657-1.902-1.897 7.68-7.703ZM6.223 10.08l1.903 1.943-1.903 1.897-1.903-1.897 1.903-1.943ZM17.777 10.08l1.903 1.943L12 19.68l-1.903-1.897 7.68-7.703Z"
                      fill="#fff"
                      stroke="#F0B90B"
                    ></path>
                  </svg>
                  <span id="usdtBalance" className="text-base text-white">
                    {balance} USDT
                  </span>
                </div>

                <div className="flex items-center border-r border-white-100 px-2.5 last:border-r-0 undefined undefined lg:px-0 lg:pl-2.5 sm:pl-0">
                  <svg
                    className="w-6 h-6 mr-2.5 sm:hidden"
                    viewBox="0 0 20 20"
                    fill="#ffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.468 3.468A2.167 2.167 0 0 1 5 2.833h8.334a1.333 1.333 0 0 1 1.333 1.334v2H15A1.333 1.333 0 0 1 16.334 7.5V10a.5.5 0 0 1-1 0V7.5A.333.333 0 0 0 15 7.167H5c-.417 0-.82-.12-1.167-.341V15A1.167 1.167 0 0 0 5 16.167h10a.333.333 0 0 0 .334-.334v-2.5a.5.5 0 0 1 1 0v2.5A1.333 1.333 0 0 1 15 17.168H5A2.166 2.166 0 0 1 2.833 15V5c0-.574.229-1.126.635-1.532ZM3.833 5A1.167 1.167 0 0 0 5 6.167h8.667v-2a.333.333 0 0 0-.333-.333H5A1.167 1.167 0 0 0 3.833 5Z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a2 2 0 0 0-2-2H5Z"
                      fillOpacity=".5"
                    ></path>
                    <path d="M16.667 10v3.333h-3.334a1.667 1.667 0 0 1 0-3.333h3.334Z"></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.333 10.5a1.167 1.167 0 1 0 0 2.333h2.834V10.5h-2.834Zm-1.532-.365a2.167 2.167 0 0 1 1.532-.635h3.334a.5.5 0 0 1 .5.5v3.333a.5.5 0 0 1-.5.5h-3.334a2.166 2.166 0 0 1-1.532-3.698Z"
                    ></path>
                  </svg>
                  <span id="address" className="text-base text-white-500">
                    {userInfo?.addresses?.ethAddress &&
                      maskHex(userInfo?.addresses?.ethAddress)}
                  </span>
                </div>
              </button>
            </div>
            <button
              onClick={logout}
              className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-0 py-0 bg-black-light rounded-full w-10 h-10 hover:bg-line-gray active:bg-active-gray ml-5 px-0 py-0 lg:hidden sm:ml-2.5"
            >
              <svg
                className="ml-1"
                width="24"
                height="24"
                stroke="#fff"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2M7 12h14m0 0-3-3m3 3-3 3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>

            <button
              className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-0 py-0 bg-black-light rounded-full w-10 h-10 hover:bg-line-gray active:bg-active-gray hidden lg:flex flex-col items-center justify-center ml-5 sm:ml-2.5"
              onClick={setIsNavSm}
            >
              <span className="w-4 border-t border-white mb-2"></span>
              <span className="w-4 border-t border-white"></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
