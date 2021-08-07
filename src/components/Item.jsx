import React, { useState } from "react";

function Item(props) {
    var [overtime, setOvertime] = useState(false);
    setInterval(() => {
        var day = Number(props.date.slice(0, 2));
        var month = Number(props.date.slice(3, 5));
        var year = Number(props.date.slice(6, 10));
        var hour = Number(props.time.slice(0, 2));
        var minute = Number(props.time.slice(3, 5));
        var today = new Date().toLocaleDateString();
        var d = Number(today.slice(0, 2));
        var m = Number(today.slice(3, 5));
        var y = Number(today.slice(6, 10));
        var now = String(new Date().toLocaleTimeString()).slice(0, 5);
        var h = Number(now.slice(0, 2));
        var mi = Number(now.slice(3, 5));
        if(y > year) {
            setOvertime(true);
        } else if(y === year && m > month) {
            setOvertime(true);
        } else if(y === year && m === month && d > day) {
            setOvertime(true);
        } else if(y === year && m === month && d === day && (h*60+mi) > (hour*60+minute)) {
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
                <div className="col-8">
                    <p>{props.text}</p>
                </div>
                <div className="col-4">
                    <p>{props.date+" "+props.time}</p>
                </div>
            </div>
            <hr className="hr-thin" />
        </div>
    );
}

export default Item;