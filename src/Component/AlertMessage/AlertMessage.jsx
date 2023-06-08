import React from 'react'
import "./AlertMessage.css"
const AlertMessage = (props) => {
    var color = "#0b4a0b";
    var bgcolor = "#C2EAC2";
    var hrcolor = "#5cb35cf0";
    if (props.bgcolor) { bgcolor = props.bgcolor }
    if (props.color) { color = props.color }
    if (props.hrcolor) { hrcolor = props.hrcolor }
    return (
        <div className="alertBody" style={{ background: bgcolor, color: color }}>
            <div><i>{props.icon}</i>
                <p>{props.msg}</p></div>
            <hr style={{ backgroundColor: hrcolor }}></hr>
        </div>
    )
}

export default AlertMessage