import { useQuery } from "@tanstack/react-query";
import { ChangeEvent } from "react";

import { partnersApi } from "src/Api/Partners";
import { useStore } from "src/Store/Store";

export const usePartners = (amount: string) => {
  const { page, skip, setPage, setPageCount } = useStore((state) => state);

  const { isPending, data } = useQuery({
    queryKey: ["partners", amount, page],
    queryFn: () =>
      partnersApi({
        page,
        skip,
        setPageCount,
        amount,
      }),
  });

  const handleChangePage = (_e: ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };

  return { isPending, data, handleChangePage };
};
