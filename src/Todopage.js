import './todo.css'

import React, { useState } from 'react'

function Todopage() {

    //
    const [inputText, setinputText] = useState("");
    const [item, setitems] = useState([]);
    const [editId, setEditID] = useState(0);


    //setting the function for getting and displaying value on screen
    const itemEvent = (e) => {
        setinputText(e.target.value)
    }

    const listOfItems = () => {
        setitems((olditems) => {
            return [...olditems, inputText]
        })
        setinputText("")
    }

    const handleDelete = (deletingitem) => {
        const newItem = item.filter((itemval) => itemval !== deletingitem);
        setitems(newItem);
    }

    const handleedit = (key) => {
        const edittask = item.find((key)=>key.index === editId);
        setinputText(edittask.key);
        setEditID(key)
    }


    return (
        <div className='main_container'>
            <div className='center_div'>
                <br />
                <h1>ToDo Application</h1>
                <br />
                <input value={inputText} type='text' placeholder='Add An Items' className='inputbox' onChange={itemEvent}></input>
                <button className='button' onClick={listOfItems}> + </button>
                <ol className='orderedlist'>
                    {
                        item.map((itemval, index) => {
                            return <li>
                                <div className='listcontent'>
                                    <div className='itemval' key={index}>{itemval}</div>
                                    <div><button className='buttoncss' id='edit' onClick={()=>handleedit(itemval.index)}>Edit</button >
                                        <button className='buttoncss' id='delete' onClick={() => handleDelete(itemval)}>Delete</button></div>
                                </div>
                            </li>
                        })
                    }
                </ol>

            </div>

        </div>
    )
}

export default Todopage