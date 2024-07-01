import Image from "next/image";
import { getMovies } from '../lib/mongo/movies'
import Footer from "./Footer";
import CreateArea from "./createArea";
import { insertSongs } from "../lib/mongo/insert";
import Sidebar from "./sidebar"
import { Form } from "react-bootstrap";
import ToDoList from "./ToDoList"; 


async function fetchMovies() {
  const { movies } = await getMovies()
  if (!movies) throw new Error('Failed to fetch movies!')
  
  return movies
}

export default async function Home() {
  const movies = await fetchMovies()

  console.log(movies);

  async function newSong(formData){
    'use server'
    console.log(formData);
    let song = {_id:movies.length, url:formData};
    insertSongs(song);
  }

  return (
      <div >
        <Sidebar/>
        <div className="content-area">
          <iframe src="https://drive.google.com/file/d/1SXOtiU2YLsdcZWAiT_A8blsYC61tzQbb/preview" width="960" height="540" allow="autoplay" allowFullScreen></iframe>
          <iframe width="560" height="315" src={`${movies[Math.floor(Math.random()*movies.length)].url}}&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <CreateArea className="url-box" handler={newSong} />
          <ToDoList />
          <Footer />
          <h1>phone as joystick to play game app</h1>
          <h1>phone as a remote control app</h1>
          <h1>todo list</h1>
          <h1>Sign up Sign in Sign out</h1>
          <a href="./test">Go to Music Page</a>
        </div>
      </div>
  )
}