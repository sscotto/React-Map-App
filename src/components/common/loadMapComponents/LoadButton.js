import { Button } from "@material-ui/core";
import React from "react";
import { useModal } from "../../customHooks/useModal";
import ButtonDialog from "../ButtonDialog";
import load from "../../../assets/download.svg";
import LoadDialog from "./LoadDialog";

export const LoadButton = () => {
  const { open, handleClickOpen, handleClose } = useModal();
  return (
    <ButtonDialog
      ButtonComponent={
        <Button onClick={handleClickOpen}>
          <img style={{ width: "25px" }} alt={load} src={load}></img>
        </Button>
      }
      Dialog={<LoadDialog open={open} onClose={handleClose} />}
    ></ButtonDialog>
  );
};
