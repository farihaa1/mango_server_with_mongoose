
import mongoose from "mongoose";
import config from "./config";
import app from "./app";



async function server() {
    try {
        await mongoose.connect(config.database_url as string);

        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    } catch (error) {
        console.log(error);
    }
}

server();