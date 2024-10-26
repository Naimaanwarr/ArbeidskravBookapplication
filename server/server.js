import express from 'express';


const app =express();
app.use(express.json());

const books = [{
    title:"Book from the server"
}]

app.get("/api/books", (req, res) => {
    res.send(books)
})


app.post("/api/books", (req, res) => {
    const {title} = req.body;
    const book ={title}
    books.push(book);
    res.send(200);
})

app.listen(process.env.PORT || 3000);