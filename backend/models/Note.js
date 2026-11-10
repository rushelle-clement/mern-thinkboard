import mongoose from "mongoose";

//1- create schema
//2- create model based on schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},
    { timestamps: true }) //created at, updated at

const Note = mongoose.model("Note", noteSchema) //create Note model based on noteSchema

export default Note