import { response } from "express";
import Note from "../../models/Note.js";

export const getAllNotes = async (_, res) => {
    // res.status(200).send("You got 20 notes.");
    try {
        const notes = await Note.find().sort({ createdAt: 1 });  //-1 last added on top, 1 - first added top
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error in getAllNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getNoteById = async (req, res) => {
    try {

        const newNote = await Note.findById(req.params.id);
        if (!newNote)
            return res.status(404).json({ message: "Note id not found." });


        res.status(200).json({ newNote });
    } catch (error) {
        console.log("Error in getNoteById controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const createNotes = async (req, res) => {

    try {
        const { title, content } = req.body;
        const newNote = new Note({ title: title, content: content });

        const savedNote = await newNote.save();

        res.status(201).json({ savedNote });
    } catch (error) {
        console.log("Error in createNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }

}

export const updateNotes = async (req, res) => {

    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });

        if (!updatedNote)
            return res.status(404).json({ message: "Note id not found." });


        res.status(200).json({ updatedNote });
    } catch (error) {
        console.log("Error in updateNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const deleteNotes = async (req, res) => {

    try {

        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote)
            return res.status(404).json({ message: "Note id not found." });


        res.status(200).json({ deletedNote });
    } catch (error) {
        console.log("Error in deleteNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}