import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// Primary Button
export const PrimaryButton = styled((props: ButtonProps) => (
  <Button variant="contained" disableElevation {...props} />
))(({ theme }) => ({
  borderRadius: "8px",
  padding: "6px 22px",
  textTransform: "none",
  fontWeight: 500,
  // text + background colors from tailwind theme
  color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.grey[900] || "#242424" // fallback for dark
      : "rgba(133,133,133,0.7)",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.grey[800] || "#1a1a1a"
        : "rgba(133,133,133,0.9)",
  },
}));

// Secondary Button
export const SecondaryButton = styled((props: ButtonProps) => (
  <Button variant="outlined" disableElevation {...props} />
))(({ theme }) => ({
  borderRadius: "8px",
  padding: "6px 22px",
  textTransform: "none",
  fontWeight: 500,
  border:
    theme.palette.mode === "dark"
      ? "1px solid #4B4848"
      : "1px solid rgba(0,0,0,0.6)",
  color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
  backgroundColor: "transparent",
  "&:hover": {
    border:
      theme.palette.mode === "dark"
        ? "1px solid #6b6969"
        : "1px solid rgba(0,0,0,0.8)",
    backgroundColor:
      theme.palette.mode === "dark" ? "rgba(75,72,72,0.1)" : "rgba(0,0,0,0.05)",
  },
}));
