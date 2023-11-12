import React from "react";
import "./square.css";

//Square component for the tic-tac-toe board
function Square(props) {
    return /*#__PURE__*/React.createElement("button", {
        className: "square",
        id: props.id,
        onClick: props.onClick
    }, props.value);
    }

export default Square;