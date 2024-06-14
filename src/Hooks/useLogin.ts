import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { FormEvent } from "react";

import { useStore } from "src/Store/Store";
import { loginApi } from "src/Api/Login";
// import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { walletAddress } = useStore((state) => state);
  // const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: loginApi,

    onSuccess: (res) => {
      localStorage.setItem("token", res?.data?.data?.token);
      localStorage.setItem("isPreview", res?.data?.data?.isPreview);

      toast.success(res?.data?.statusMessage);
      window.location.href = "/dashboard";
      // navigate("/dashboard");
    },

    onError: (res: any) => {
      toast.error(res?.response?.data?.statusMessage);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>, loginType: string) => {
    e.preventDefault();

    // if (!!!walletAddress) {
    //   toast.error("Please connect to your wallet");
    //   return;
    // }

    const formData = new FormData(e.target as HTMLFormElement);
    const address = formData.get("address");

    if (loginType === "id" && !address) {
      toast.error("Please enter id");
      return;
    }

    mutate({ address: address || walletAddress, loginType });

    (e.target as HTMLFormElement).reset();
  };

  return { isPending, handleSubmit };
};
