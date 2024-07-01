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
                name="eventName"
                onChange={handleChange}
                placeholder="Add a thing to do"
                value={newItem.eventName}
                style={{backgroundColor:"black"}}
                >
            </input>
            <button>Add</button>
        </form>
        {items.map(item => {
                return <form>
                    <input
                    key={item._id}
                    style={{textAlign:"center", backgroundColor:"black"}}
                    placeholder={item.event}
                    >
                    </input>
                    <button name="button" value={item._id} onClick={handleDelete}>Checked</button>
                </form>
            })}
        </div>
    )
}

export default ToDoList_c