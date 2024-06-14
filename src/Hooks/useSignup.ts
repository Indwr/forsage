import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useStore } from "src/Store/Store";
import { signupApi } from "src/Api/Signup";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();
  const { walletAddress } = useStore((state) => state);

  const { mutate, isPending } = useMutation({
    mutationFn: signupApi,

    onSuccess: (res) => {
      localStorage.setItem("token", res?.data?.data?.token);
      localStorage.setItem("isPreview", res?.data?.data?.isPreview);
      toast.success(res?.data?.statusMessage);
      navigate("/dashboard");
    },

    onError: (res: any) => {
      toast.error(res?.response?.data?.statusMessage);
    },
  });

  // const handleSubmit = (e: FormEvent<HTMLFormElement>, ) => {
  const handleSubmit = (
    sponsorId: FormDataEntryValue,
    uniqueId: string,
    transactionHash: string,
  ) => {
    // e.preventDefault();

    // if (!!!walletAddress) {
    //   toast.error("Please connect to your wallet");
    //   return;
    // }

    // const formData = new FormData(e.target as HTMLFormElement);
    // const sponsorId = formData.get("sponsorId");

    // if (!sponsorId) {
    //   toast.error("Please enter id");
    //   return;
    // }

    mutate({ address: walletAddress, sponsorId, uniqueId, transactionHash });

    // (e.target as HTMLFormElement).reset();
  };

  return { isPending, handleSubmit };
};
