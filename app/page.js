
import { getMovies } from '../lib/mongo/movies'
import Footer from "./Footer";
import CreateArea from "./createArea";
import { insertSongs } from "../lib/mongo/insert";
import Sidebar from "./sidebar"
import ToDoList from "./ToDoList"; 
import MoneyTracer from "./components/MoneyTracer"
import app from "./firebase"


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
          <iframe width="560" height="315" src={`${movies[Math.floor(Math.random()*movies.length)].url}}&autoplay=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <CreateArea className="url-box" handler={newSong} />
          <ToDoList />
          <MoneyTracer />
          <Footer />
          <a href="./test">Go to Music Page</a>
        </div>
      </div>
  )
}