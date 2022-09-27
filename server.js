import express from "express";
import products from "./routes/products.js"


const app = express();

app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.send("Express Router")
})

app.use("/products", products)

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
