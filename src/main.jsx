import React from "react";
import {createRoot} from "react-dom/client";
import { useState } from "react";

const root = createRoot(document.getElementById("root"));

function BookForm({onNewAdd}) {

    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onNewAdd({title})
        setTitle("");
    }

    return <form onSubmit={handleSubmit}>
        <div>
        <label>
            Book Title: <input
            type="text"
            value={title}
            onChange={(e) =>
                setTitle(e.target.value)}
        />
        </label>
        </div>
        <button>Submit</button>
    </form>;
}

function LibraryApplication() {
    const [books, setBooks] = useState([]);


   async function handleNewAdd(book) {
        setBooks((prevBooks) => [book, ...prevBooks]);


    await fetch("/api/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Books),
    })
}

    return <>
        <h1>Books i want to read</h1>

        <ul>
            {books.map((book, index) => (
                <div key={index}>
                    <input type="checkbox"/>
                    {book.title}
                </div>
            ))}
        </ul>


        <BookForm onNewAdd={handleNewAdd}/>

    </>;


}

root.render(<LibraryApplication/>);