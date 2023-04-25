import { DialogContent, DialogContentText } from "@mui/material";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import { FC } from "react";

interface ModalWindowProps {
  onClose: () => void;
  modalMessage: string;
  open: boolean;
}

const ModalWindow: FC<ModalWindowProps> = ({ onClose, modalMessage, open }) => {
  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Окно покупок</DialogTitle>
      <DialogContent>
        <DialogContentText>{modalMessage}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ModalWindow;
