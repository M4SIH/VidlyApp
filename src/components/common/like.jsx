import React from "react";

const Like = (props) => {
  let classes = "bi bi-heart-fill";
  if (!props.liked) classes = "bi bi-heart";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
    ></i>
  );
};

export default Like;
