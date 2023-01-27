import Book from "./Book.js";

const getAllBooks = async (req, res) => {
    try {
        const getAllBooks =  await Book.find();
        res.status(200).send(getAllBooks)
    } catch (err) {
        res.status(500).send(err)
    }
};

const addNewBook = async (req, res) => {
    try {
        const addBook = await Book.create(req.body);
        res.status(200).json(addBook);
    } catch (err) {
        res.status(500).send(err);
    }
};

const deleteBook = async (req, res) => {
    try {
        const postId = req.params.id;
        Book.findOne(postId)
    } catch (err) {
        res.status(500).send(err)
    }
}

export { getAllBooks, addNewBook }