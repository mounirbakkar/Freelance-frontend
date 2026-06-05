import { Snackbar, Alert } from "@mui/material";
export default function ShowMessage({ open = false, setOpen, message }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={() => setOpen(false)}
      sx={{zIndex:2000}}
    >
      <Alert severity="error">{message}</Alert>
    </Snackbar>
  );
}
