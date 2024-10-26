import React     from "react";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function BookForm() {
    return <form>
        <label>
            Book Title: <input type="text"/>
        </label>
        <button>Submit</button>
    </form>;
}

function LibraryApplication() {
    return <>
        <h1>Books i want to read</h1>

        <BookForm/>

        </>;


}

root.render(<LibraryApplication/>);