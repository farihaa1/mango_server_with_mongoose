import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import routes from "./routes";

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
    res.send({success:true, message:"server running"});
})

app.listen(config.port, () => {
    console.log(`server running`)
})


async function server() {
    try {
        await mongoose.connect(config.database_url as string);

        console.log("MongoDB Connected");

        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    } catch (error) {
        console.log(error);
    }
}

server();