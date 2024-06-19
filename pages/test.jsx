import Footer from "../app/Footer"
import "../app/globals.css";

export default function test(){
    return <div>
        <title>Music</title>
        <p>test</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cWBNAu78Lxw?si=q6No6wbe6J5PHlpS&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        <a href="./">Go back to main page</a>
        <Footer />
    </div>
}