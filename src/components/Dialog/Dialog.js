import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
} from "@material-ui/core";
import "./Dialog.css";

export default function AppDialog({ opened, title, content, onClose, infoList = [] }) {
  return (
    <Dialog open={opened} onClose={onClose}>
      <DialogTitle className="title">{title}</DialogTitle>
      <DialogContent>
        <List className="list">
          {infoList.map((data, i) => (
            <ListItem key={i} className="list__item">
              {data}
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions />
    </Dialog>
  );
}
