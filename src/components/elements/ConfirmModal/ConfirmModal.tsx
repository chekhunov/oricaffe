import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";
import { useTranslation } from "react-i18next";
import { MAIN_ROUTE } from "../../../types/const";
import { useNavigate } from "react-router-dom";

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

interface DraggableDialogProps {
  open: boolean;
  setOpen: (bool: boolean) => void;
}

export default function DraggableDialog({
  open,
  setOpen,
}: DraggableDialogProps) {
  const { t } = useTranslation();
  const history = useNavigate();

  const handleClose = () => {
    setOpen(false);
    history(MAIN_ROUTE);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {t("notification")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{t("thank_for_order")}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("ok")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
