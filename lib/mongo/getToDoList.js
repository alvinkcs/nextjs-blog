
import clientPromise from "./index";

let client
let db
let list

async function init(){
    if (db) return
    try {
        client = await clientPromise
        db = await client.db()
        list = await db.collection('todolist')
    } catch (error){
        throw new Error('Failed to stablish connection to database')
    }
}

;(async () => {
    await init()
})()

export async function getToDoList() {
    try {
        if (!list) await init()
        const result = await list
            .find({})
            //.limit(20)
            .map(user => ({ ...user, _id: user._id.toString() }))
            .toArray()
        return { list: result}
    } catch (error) {
        return {error: 'Failed to fetch lists!'}
    }
}