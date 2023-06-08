import React from 'react'
import "./EPinCard.css"
// import { GiTakeMyMoney } from "react-icons/gi";
import { BsPinAngleFill } from "react-icons/bs";
const EPinCard = (props) => {
    return (
        <>
            <div className="pb-4 ePinCardMainDiv">
                <div id="ePinCard">
                    <div id="ePinCardImg"><i><props.img /></i></div>
                    <div id="ePinCardText">
                        <p>{props.title}</p>
                        <p>{props.pin} <span><i style={{ fontSize: "20px" }}><BsPinAngleFill /></i></span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EPinCard