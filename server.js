import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
import cors from "cors";

mongoose.set('strictQuery', false)

const app = express();
app.use(express.json());
app.use(fileUpload()) /** middleware - связующее программное обеспечение, 
                        которое помогает приложению и серверу обмениваться друг с другом запросами */
app.use(cors())

const PORT = 3005;
const DB_URL = "mongodb+srv://akrabinelly:5454@cluster0.3mwt3bw.mongodb.net/?retryWrites=true&w=majority"

app.get("/", (req, res) => {
    res.send("<h1>Learning Backend</h1>")
})

app.use("/", router)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL /**, {useUnifiedTopology: true, useNewUrlParser: true} */) 
        app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
} 
startApp();