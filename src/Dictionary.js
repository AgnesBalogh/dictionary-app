import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {

    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

function handleResponse(response) {
    
   
    setResults(response.data[0]);
}

function search(event) {
    event.preventDefault();
    

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}
function handleKeywordChange(event) {
  
    setKeyword(event.target.value);
}
    return (
    <div className="Dictionary">
        <section>
        <h1 className="type">Type in a word</h1>
        <form onSubmit={search} className="type">
            <input type="search" onChange={handleKeywordChange} />
        </form>
        </section>
        <Results results={results} />
    </div>
    );
    
}