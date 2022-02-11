const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
    try {
        const allSnacks = await db.any("SELCT * FROM snacks") //to get all snacks
        return allSnacks
    } catch (error) {
        return error;
    }
}


const oneSnack = async (id) => {
    try {
        const oneSnack = await db.one(
            "SELECT * FROM snacks WHERE id=$1",
            id
        );
        return oneSnack
    } catch (error) {
        return error
    }
}

const createSnack = async (snack) => {
    try {
        const newSnack = await db.one(
            "INSERT INTO snacks () VALUES () RETURNING *",
        )
        return newSnack;
    } catch (error) {
        return error
    }
}

const deleteSnack = async (snack) => {
    try {
        const deletedSnack = await db.one(
            "DELETE FROM snacks WHERE id = $1 RETURNING *",
            id
        );
        return deletedSnack
    } catch (error) {
        return error
    }
}

const updateSnack = async(id, snack)=>{
    try{
        const updatedSnack = await db.one(
            "UPDATE snacks *",
            []
        );
        return updatedBookmark;
    } catch(error){
        return error;
    }
}

 
module.exports = {
    getAllSnacks,
    oneSnack,
    createSnack,
    deleteSnack,
    updateSnack
};
