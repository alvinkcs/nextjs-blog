
import clientPromise from "./index";

let client
let db
let link

async function init(){
    if (db) return
    try {
        client = await clientPromise
        db = await client.db()
        link = await db.collection('todolist')
    } catch (error){
        throw new Error('Failed to stablish connection to database')
    }
}

;(async () => {
    await init()
})()

export async function deleteToDoList(item) {
    try {
        if (!link) await init()
        const result = await link
            .deleteOne(item)

    } catch (error) {
        return {error: 'Failed to insert item!'}
    }
}