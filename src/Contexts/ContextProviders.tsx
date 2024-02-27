import { ReactNode, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavProvider } from "./useNavContext";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { red } from "@mui/material/colors";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  },
});

const ContextProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<h1 className="text-black">Loading</h1>}>
            <NavProvider>{children}</NavProvider>
          </Suspense>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default ContextProviders;

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});
