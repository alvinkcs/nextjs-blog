
import React from "react";
import { getToDoList } from "../lib/mongo/getToDoList"
import { insertToDoList } from "../lib/mongo/insertToDoList"
import { deleteToDoList } from "../lib/mongo/deleteToDoList"
import ToDoList_c from "./ToDoList_c"

async function fetchItems() {
    const { list } = await getToDoList()
    if (!list) throw new Error('Failed to fetch items!')
    
    return list
}

async function ToDoList(){

    const items = await fetchItems()

    async function deleteItem(formData){
        'use server'
        let objToBeDeleted = {"_id":+formData}
        console.log("deleted:",objToBeDeleted)
        deleteToDoList(objToBeDeleted)
    }

    async function clicked(formData) {
        'use server'
        console.log("formData: ", formData)
        let lastobj = items[items.length-1]
        let newIndex = +lastobj._id+1
        let item = {_id:newIndex, event:formData}
        insertToDoList(item)
    }

    return (
        <div>
            <ToDoList_c handler={clicked} delete={deleteItem} items={items}/>
        </div>
    )
}

export default ToDoList;