import React from 'react'
import "./DashboardCard.css"
import { BsPeople } from "react-icons/bs"
const DashboardCard = (props) => {
    return (
        <React.Fragment>
            <div id="dashboardCard">
                <div id="titleWithIcon">
                    <p>{props.title}</p>
                    <i><props.icon /></i>
                </div>
                <h1>{props.currency} {props.quantity}</h1>
                <p id="aboutDashCard"><span>{props.currency}{props.todayIncome} </span> {props.about}</p>
            </div>
        </React.Fragment>
    )
}

export default DashboardCard