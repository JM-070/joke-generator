// Importing express and axios
import express from "express";
import axios from "axios";

const app = express();
// server running port
const port = 3000;

// Declaring static files in folder
app.use(express.static("public"));

// Handling the get / route
app.get("/", async(req, res) => {
    // (Req, Res) -> Public API
    try{
        const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
        console.log(response.data);
        res.render("index.ejs", {joke: response.data.joke});

    }catch(error){
        console.log(error);
        res.render("index.ejs", {joke: "Server out of Reach"});
    }
    
});

// Listen the port
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});