import React from "react";
import IconsDialog from "./Dialog/IconsDialog";
import SelectIconButton from "./SelectIconButton";

const IconSelector = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SelectIconButton handleClickOpen={handleClickOpen}></SelectIconButton>
      <IconsDialog open={open} onClose={handleClose} />
    </>
  );
};

export default IconSelector;
