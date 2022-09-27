import express from "express"
import {getToys, createToy}  from "../controllers/productsControllers.js"

let router = express.Router()

router
.route("/toys")
.get(getToys).post(createToy)


// .put((req,res)=>{
//     res.send("This is PUT request")
// })
// .delete((req,res)=>{
//     res.send("This is DELETE request")
// })


export default router