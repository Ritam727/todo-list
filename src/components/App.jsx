import React, { useState } from "react";
import Item from "./Item";
import Input from "./Input"

function App() {
    const defaultItems = [{
            text: "Click on the New Item input field to enter new field", 
            date: new Date().toLocaleDateString(), 
            time: String(new Date().toLocaleTimeString()).slice(0, 5)
        },
        {
            text:"Click on an item to delete it from the list",
            date: new Date().toLocaleDateString(),
            time: String(new Date().toLocaleTimeString()).slice(0, 5)
        }
    ];
    const [list, setList] = useState(localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : defaultItems);
    function addNew(item) {
        setList(prev => {
            return [...prev, item];
        });
    }
    function deleteItem(id) {
        setList(prev => {
            return prev.filter((item, ind) => {
                return ind !== id;
            })
        })
    }
    localStorage.setItem("items", JSON.stringify(list));
    return (
        <div className="container">
            <div className="vl">
                <h1>Todo-List</h1>
                <hr className="hr-thick" />
                {list.map((item, ind) => {
                    return <Item id={ind} key={ind} onDelete={deleteItem} text={item.text} date={item.date} time={item.time} />;
                })}
            </div>
            <Input onAdd={addNew} />
        </div>
    );
}

export default App;