
import clientPromise from "./index";

let client
let db
let songs

async function init(){
    if (db) return
    try {
        client = await clientPromise
        db = await client.db()
        songs = await db.collection('yt_url')
    } catch (error){
        throw new Error('Failed to stablish connection to database')
    }
}

;(async () => {
    await init()
})()

export async function insertSongs(song) {
    try {
        if (!songs) await init()
        const result = await songs
            .insertOne(song)

    } catch (error) {
        return {error: 'Failed to insert songs!'}
    }
}