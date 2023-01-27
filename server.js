import express, {json} from "express";
import mongoose from "mongoose";
import Book from "./Book.js";

mongoose.set('strictQuery', false)

const app = express();
app.use(express.json());

const PORT = 3005;
const DB_URL = "mongodb+srv://akrabinelly:5454@cluster0.3mwt3bw.mongodb.net/?retryWrites=true&w=majority"

app.get("/", (req, res) => {
    res.send("<h1>Learning Backend</h1>")
})

app.get("/books", async (req, res) => {
    const getAllBooks =  await Book.find();
    res.status(200).send(getAllBooks)
})

app.post('/books', async (req, res) => {
    const newBook = await Book.create(req.body);
    res.json(newBook);

})

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL /**, {useUnifiedTopology: true, useNewUrlParser: true} */) 
        app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
} 
startApp();