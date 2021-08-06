import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";

function Input(props) {
    var [text, setText] = useState("");
    var [focus, setFocus] = useState(false);
    var [date, setDate] = useState(String(new Date().toLocaleDateString()));
    var [time, setTime] = useState(String(new Date().toLocaleTimeString()).slice(0, 5));
    function changeDateFormatToRequired(givenDate) {
        var year = givenDate.slice(0, 4);
        var month = givenDate.slice(5, 7);
        var day = givenDate.slice(8, 10);
        return day+"/"+month+"/"+year;
    }
    function changeDateFormatToNotRequired(givenDate) {
        var day = givenDate.slice(0, 2);
        var month = givenDate.slice(3, 5);
        var year = givenDate.slice(6, 10);
        return year+"-"+month+"-"+day;
    }
    return (
        <form className="input-form" style={{height: focus ? "auto" : "3rem"}}>
            <input 
                className="form-control" 
                onChange={(event) => setText(event.target.value)} 
                value={text} onClick={() => setFocus(true)}
                placeholder="New Item"
            />
            <input
                type="date"
                className="form-control"
                onChange={(event) => setDate(changeDateFormatToRequired(event.target.value))}
                value={changeDateFormatToNotRequired(date)}
                style={{display: focus ? "block" : "none"}}
            />
            <input
                type="time"
                className="form-control"
                onChange={(event) => setTime(event.target.value)}
                value={time}
                style={{display: focus ? "block" : "none"}}
            />
            <Zoom in={focus ? true : false}>
                <Fab onClick={() => {
                        props.onAdd({text: text, date: date, time: time});
                        setText("");
                        setDate(new Date().toLocaleDateString());
                        setTime(String(new Date().toLocaleTimeString()).slice(0, 5));
                        setFocus(false);
                    }}><AddIcon />
                </Fab>
            </Zoom>
        </form>
    );
}

export default Input;