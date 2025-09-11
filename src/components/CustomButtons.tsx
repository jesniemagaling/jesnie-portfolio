import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// Primary
export const PrimaryButton = styled((props: ButtonProps) => (
  <Button variant="contained" {...props} />
))(({ theme }) => ({
  borderRadius: "8px",
  padding: "8px 22px",
  textTransform: "none",
  color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
  backgroundColor:
    theme.palette.mode === "dark" ? "#242424" : "rgba(133, 133, 133, 0.7)",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark" ? "#1a1a1a" : "rgba(133, 133, 133, 0.9)",
  },
}));

// Secondary (outlined)
export const SecondaryButton = styled((props: ButtonProps) => (
  <Button variant="outlined" {...props} />
))(({ theme }) => ({
  borderRadius: "8px",
  padding: "8px 22px",
  textTransform: "none",
  border: "1px solid #4B4848",
  color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",
  "&:hover": {
    border:
      theme.palette.mode === "dark"
        ? "1px solid #6b6969"
        : "1px solid rgba(0,0,0,0.6)",
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(75, 72, 72, 0.1)"
        : "rgba(0,0,0,0.05)",
  },
}));
