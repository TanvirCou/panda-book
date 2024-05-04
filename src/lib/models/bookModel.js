import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    isRented: {
        type: Boolean,
        required: true,
        default: false,
    },
    stock: {
        type: Number,
        required: true
    },
    rentPrice: {
        type: Number,
        required: true
    },
    sellPrice: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        required: true
    },
    ISBN: {
        type: String,
        required: true
    },
    renterIds: {
        type: Array
    }
});

export const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);