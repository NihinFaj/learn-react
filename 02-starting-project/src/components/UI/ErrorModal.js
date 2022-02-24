import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import Card from "./Card";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onError}></div>;
}

function Overlay(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onError}>Okay</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onError={props.onError} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onError={props.onError}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}

export default ErrorModal;
