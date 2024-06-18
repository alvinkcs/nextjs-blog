// Filename: src/pages/app.js 

// To inform next js, this is a client component 
"use client"; 

// Import useState from 'react' library 
import { useState } from "react"; 

export default function Click() { 

	// Initializing useState() hook 
    const [url, setUrl] = useState({url: "Youtube"});
	const [countClick, setCountClick] = useState(0); 

	// Function to change the value of state on 
	// click of button 
	const countClickHandler = () => { 
		setCountClick(countClick + 1); 
	}; 

    const urlChangeHandler = () => {
        console.log("clicked");
    };

	return ( 
		<center> 
			<h1>GeeksforGeeks</h1> 
			<h2> State value: {countClick} </h2> 
            <h2>URL: {url.url}</h2>
			<button onClick={countClickHandler}> 
				Click Me 
			</button> 
            <input
                name="url"
                placeholder="Input a URL"
            />
            <button onClick={urlChangeHandler}> 
				Click Me 
			</button> 
		</center> 
	); 
}
