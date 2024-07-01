'use client'
import {useState} from 'react'

function ToDoList_c(props){

    const [newItem, setNewItem] = useState({
        eventName: ""
    })

    const [items, setItems] = useState(props.items)


    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewItem(prevItem => {
            return {
                ...prevItem,
                [name]: value
            }
        })
    }

    const handleClick = (event) => {
        props.handler(newItem.eventName)
        let lastobj = items[items.length-1]
        let newIndex = +lastobj._id+1
        let newobj = {_id:newIndex, event:newItem.eventName}
        setItems(prevItem => {
            return [
                ...prevItem,
                newobj
            ]
        })
        event.preventDefault();
    }

    const handleDelete = (event) => {
        const {name, value} = event.target
        setItems(items.filter(item => item._id !== value))
        props.delete(value)
        event.preventDefault()
    }

    return (
        <div>
        <form onSubmit={handleClick}>
            <input
                className='input'
                name="eventName"
                onChange={handleChange}
                placeholder="Add a thing to do"
                value={newItem.eventName}
                style={{backgroundColor:"black", marginLeft:"20px", textAlign:"center"}}
                >
            </input>
            <button className='button-27' style={{marginLeft:"30px",width:"120px",textAlign:"center"}}>Add</button>
        </form>
        {items.map(item => {
                return <form style={{display:"flex"}}>
                    <h1 className="input" key={item._id} style={{textAlign:"center", marginLeft:"320px", width:"fit-contetn",display:"inline-block"}}>{item.event}</h1>
                    <button className="button-27" style={{marginLeft:"30px",width:"120px",textAlign:"center"}} name="button" value={item._id} onClick={handleDelete}>Checked</button>
                </form>
            })}
        </div>
    )
}

export default ToDoList_c