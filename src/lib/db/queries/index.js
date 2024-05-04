const { Book } = require("@/lib/models/bookModel");
const { connectToDb } = require("@/lib/services/mongo")


export const getBooks = async() => {
    try {
        connectToDb();
        const books = await Book.find();
        return JSON.parse(JSON.stringify(books));
    } catch (error) {
        console.log(error);
    }
}

export const getBookById = async(id) => {
    try {
        connectToDb();
        const book = await Book.findById(id);
        return JSON.parse(JSON.stringify(book));
    } catch (error) {
        console.log(error);
    }
}