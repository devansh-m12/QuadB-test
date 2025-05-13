import express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = new express();

app.use(cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cookieParser());

//routes import
import router from "./routes/index.js";

app.get('/', (req, res) => {
    res.send({ message: 'Hello from  Backend' });
});
app.use("/api/v1/", router);


export default app;