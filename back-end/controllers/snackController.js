const { response, request } = require("express")
const express = require("express")
const { getAllSnacks, oneSnack, createSnack, updateSnack, deleteSnack } = require("../queries/snacks")
const snacks = express.Router

snacks.get("/", async (request, response) => {
    try{
        const allSnacks = await getAllSnacks()
        if(allSnacks[0]) {
            response.status(200).json(allSnacks)
        } else {
            response.status(400).json({error: "server error"})
        }
    } catch (error) {
        console.lof(error)
    }
})

snacks.get("/id", async (request, response) => {
    const { id } = request.params;
    try {
        const snack = await oneSnack(id)
        if(snack.id) {
            response.status(200).json(snack);
        } else {
            response.status(400).json({error: "Snack not found"})
        }
    } catch (error) {
        console.log(error)
    }
})

snacks.post("/", async (request, response) => {
    const { body } = req;

    try {
        const createdSnack = await createSnack(body);
        if (createdSnack) {
            response.status(200).json(createdSnack);
        } else {
            response.status(400).json({error: "Snack create error"});
        }
    } catch (error) {
        console.log(error)
    }
})

snacks.delete("/:id", async(req, res)=>{
    const { id } = req.params;
    const deletedSnack = await deleteSnack(id);
    if(deletedBookmark.id){
        res.status(200).json(deletedSnack);
    } else {
        res.status(404).json({error: "Snack not found"});
    }
})

snacks.put("/:id", async(req, res)=>{
    const { id } = req.params;
    const { body } = req;
    const updatedSnack = await updateSnack(id, body);
    if(updatedSnack.id){
        res.status(200).json(updatedSnack);
    } else {
        res.status(404).json({error: "Snack not found"});
    }
})

module.exports = snacks;