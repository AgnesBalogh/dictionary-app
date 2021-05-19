import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary(props) {

    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
}    

function handleResponse(response) {
    
   
    setResults(response.data[0]);
}

function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = "563492ad6f91700001000001c45f78e0da2a493384fe86cf71b46a53";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search();
    

    
}
function handleKeywordChange(event) {
  
    setKeyword(event.target.value);
}
function load() {
    setLoaded(true);
    search();
}

if (loaded) {
return (
    <div className="Dictionary">
        <section>
        <h1 className="type">Type in a word</h1>
        <form onSubmit={handleSubmit} className="type">
            <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
        </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
    </div>
    );
} else {
    load();
    return "Loading";
}

    
    
}