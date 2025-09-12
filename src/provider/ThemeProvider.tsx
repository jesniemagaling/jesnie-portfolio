import { useEffect, useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export default function AppThemeProvider({ children }: Props) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const html = document.documentElement;

    const observer = new MutationObserver(() => {
      setMode(html.classList.contains("dark") ? "dark" : "light");
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // initialize once on mount
    setMode(html.classList.contains("dark") ? "dark" : "light");

    return () => observer.disconnect();
  }, []);

  const theme = createTheme({
    palette: {
      mode,
    },
    typography: {
      fontFamily: "Inter, sans-serif", // sync with Tailwind
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
