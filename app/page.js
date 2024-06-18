import Image from "next/image";
import { getMovies } from '../lib/mongo/movies'
import Footer from "./Footer";
import CreateArea from "./createArea";
import { insertSongs } from "../lib/mongo/insert";

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
  {movies.map(movie => (
    <iframe key={movie._id} width="560" height="315" src={movie.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    ))}
  return (
      <div style={{maxWidth:"fit-content", marginLeft:"auto", marginRight:"auto"}}>
        <iframe width="560" height="315" src={movies[Math.floor(Math.random()*movies.length)].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="url-box">
        <CreateArea handler={newSong} />
        </div>
        <Footer />
      </div>
  )
}