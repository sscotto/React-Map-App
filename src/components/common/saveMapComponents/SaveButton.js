import { Button } from "@material-ui/core";
import React from "react";
import { useModal } from "../../customHooks/useModal";
import ButtonDialog from "../ButtonDialog";
import save from "../../../assets/save.svg";
import SaveDialog from "./SaveDialog";

export const SaveButton = () => {
  const { open, handleClickOpen, handleClose } = useModal();
  return (
    <ButtonDialog
      ButtonComponent={
        <Button onClick={handleClickOpen}>
          <img style={{ width: "25px" }} alt={save} src={save}></img>
        </Button>
      }
      Dialog={<SaveDialog open={open} onClose={handleClose} />}
    ></ButtonDialog>
  );
};
