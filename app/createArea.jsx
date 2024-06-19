"use client";

import { useState } from "react";

function CreateArea(props) {

  const [url, setUrl] = useState({
    url: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUrl(prevSong => {
      return {
        ...prevSong,
        [name]: value
      };
    });
  };

  const submitUrl = (event) => {
    props.handler(url.url);
    setUrl({
      songname: "",
      url: ""
    });
    event.preventDefault();
  };

  return <div>
    <form>
  <input
    className="input"
      name="url"
      onChange={handleChange}
      value={url.url}
      placeholder="Input a URL"
    />
    <button className="button-27" style={{maxWidth:"100px", marginLeft:"30px"}} onClick={submitUrl}>Submit</button>
  </form>
</div>

}

export default CreateArea;

