const Profile = () => {
  return (
    <div>
      <div className="flex flex-shrink w-full flex-col items-center min-h-screen bg-main max-w-[calc(100% - 326px)] lg:max-w-full overflow-auto">
        <div className="flex relative flex-1 py-10 pt-8.5 flex-col justify-between w-full px-10 sm:px-0 sm:pt-7.5">
          <main className="flex flex-1 flex-col w-full">
            <div className="flex w-full justify-between items-center mb-10 sm:mb-7.5">
              <div className="flex flex-wrap justify-between sm:px-5">
                <div className="flex flex-col flex-wrap w-full sm:px-5">
                  <div className="notranslate"></div>
                  <div className="flex items-center mb-1.5 sm:mb-2.5">
                    <div className="flex">
                      <a
                        className="mr-1.5 text text-white-300 sm:text-sm"
                        href="/dashboard"
                      >
                        <span className="hover:text-white-500">Dashboard</span>{" "}
                        /
                      </a>
                    </div>
                    <span className="text text-white whitespace-nowrap sm:text-sm">
                      Profile
                    </span>
                  </div>
                  <div className="w-full flex justify-between flex-wrap">
                    <div className="flex flex-wrap items-center">
                      <span className="text-two-half text-white font-medium mr-2 sm:text-2xl whitespace-nowrap">
                        Profile
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-10 sm:flex-col sm:space-x-0 sm:px-5">
              <form className="min-w-[500px] sm:max-w-full sm:min-w-full flex flex-1 overflow-hidden relative w-full flex-col bg-black-light rounded p-7.5 pb-5 sm:p-5 lg:max-w-full sm:order-2  sm:rounded-[20px]">
                <div className="flex flex-1 flex-col justify-start mt-[24px] mb-10">
                  <div className="bg_profile_gradient absolute rounded-t-[20px] min-w-[540px] min-h-[160px] sm:min-w-[350px] sm:min-h-[120px] right-0 top-0"></div>
                  <div className="flex flex-col items-center mb-[40px]">
                    <div className="flex relative w-120px h-120px p-[2px] border_profile_logo_gradient rounded-full sm:h-98px sm:w-98px">
                      <div className="flex w-full items-center justify-center cursor-pointer px-5 py-3 bg-white-100 rounded-full text-white-500 hover:text-white hover:bg-black-500">
                        <svg
                          className="w-10 h-10 sm:h-7.5 sm:w-7.5 stroke-current"
                          viewBox="0 0 40 40"
                          stroke="#fff"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25 13.333h.017"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M28.333 6.667H11.667a5 5 0 0 0-5 5v16.666a5 5 0 0 0 5 5h16.666a5 5 0 0 0 5-5V11.667a5 5 0 0 0-5-5Z"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="m6.667 25 6.666-6.667c.76-.731 1.623-1.116 2.5-1.116.878 0 1.74.385 2.5 1.116l8.334 8.334"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M23.333 23.333 25 21.667c.76-.732 1.622-1.117 2.5-1.117.878 0 1.74.385 2.5 1.117L33.333 25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <input type="file" className="hidden" />
                      </div>
                    </div>
                    <span className="absolute text-[16px] text-white-500 top-[184px] sm:text-[14px] sm:mt-[-20px] sm:mb-[100px]">
                      Chose your photo
                    </span>
                  </div>
                  <div className="w-full relative flex flex-col mt-[40px] sm:max-w-full">
                    <div className="flex items-baseline">
                      <label className="mb-2.5 text-white-500 sm:text-sm flex-shrink-0">
                        Nickname
                      </label>
                    </div>
                    <div className="w-full relative">
                      <input
                        className="w-full bg-white-100 border-2 border-transparent rounded-mini py-3 px-5 text-white outline-none focus:border-2 focus:border-main-blue focus:bg-transparent  "
                        placeholder="Your nickname"
                        name="username"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="w-full relative flex flex-col mt-[20px]  sm:max-w-full">
                    <div className="flex items-baseline">
                      <label className="mb-2.5 text-white-500 sm:text-sm flex-shrink-0">
                        Email
                      </label>
                    </div>
                    <div className="w-full relative">
                      <input
                        className="w-full bg-white-100 border-2 border-transparent rounded-mini py-3 px-5 text-white outline-none focus:border-2 focus:border-main-blue focus:bg-transparent  "
                        placeholder="e.g. hello@forsage.io"
                        name="email"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="relative flex flex-col">
                    <span className="mb-2.5 mt-[20px] text-[16px] text-white-500">
                      Description
                    </span>
                    <textarea
                      className="text-white-500 h-[120px]  sm:max-w-full w-full bg-white-100 border-2 border-transparent rounded-mini py-1.5 px-2.5 text-white outline-none h-full resize-none focus:border-2 focus:border-main-blue focus:bg-transparent false"
                      placeholder="Your description "
                      name="user_description"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <button
              type="submit"
              className="flex justify-center items-center text-center text-base font-bold text-white rounded-mini sm:text-sm outline-none px-5 py-3 bg-main-blue hover:bg-hover-main-blue active:bg-active-main-blue mt-[40px] max-w-[530px] sm:max-w-full sm:mt-[20px] sm:max-h-[40px] sm:ml-[20px] sm:mr-[20px]"
            >
              Save changes
            </button>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
