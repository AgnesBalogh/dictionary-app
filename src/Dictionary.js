import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary(props) {

    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

function handleResponse(response) {
    
   
    setResults(response.data[0]);
}

function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
    </div>
    );
} else {
    load();
    return "Loading";
}

    
    
}