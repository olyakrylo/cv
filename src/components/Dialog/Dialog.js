import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";

export default function AppDialog({ opened, title, content, onClose }) {
  return (
    <Dialog open={opened} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions />
    </Dialog>
  );
}
