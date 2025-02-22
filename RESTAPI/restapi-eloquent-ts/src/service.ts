import  * as express from "express";
import router from "./routes/router";

const app = express();
const PORT =  3000;

app.use(express.json());
app.use(router);


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})