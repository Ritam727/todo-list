import React, { useState } from "react";

function Item(props) {
    var [overtime, setOvertime] = useState(false);
    setInterval(() => {
        var day = props.date.slice(0, 2);
        var month = props.date.slice(3, 5);
        var year = props.date.slice(6, 10);
        var hour = props.time.slice(0, 2);
        var minute = props.time.slice(3, 5);
        var today = new Date().toLocaleDateString();
        var now = String(new Date().toLocaleTimeString()).slice(0, 5);
        if(Number(today.slice(6, 10)) > Number(year)) {
            setOvertime(true);
        } else if(Number(today.slice(3, 5)) > Number(month)) {
            setOvertime(true);
        } else if(Number(today.slice(0, 2)) > Number(day)) {
            setOvertime(true);
        } else if(Number(now.slice(3, 5)) > Number(minute)) {
            setOvertime(true);
        } else if(Number(now.slice(0, 2)) > Number(hour)) {
            setOvertime(true);
        }
    }, 1000);
    return (
        <div
            onClick={() => {
                props.onDelete(props.id);
            }}
            className="item"
        >
            <div className="row" style={{color: overtime ? "red" : "black"}}>
                <div className="col-lg-8">
                    <p>{props.text}</p>
                </div>
                <div className="col-lg-4">
                    <p>{props.date+" "+props.time}</p>
                </div>
            </div>
            <hr className="hr-thin" />
        </div>
    );
}

export default Item;