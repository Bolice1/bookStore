import Book from '../schema/books.schema.js'


export const addNewBook = async (req, res) => {
    try {
        const { title, author, price } = req.body;
        if (!title) return res.status(400).json({ msg: "Title required" });
        if (!author) return res.status(400).json({ msg: "Author required" });
        if (!price) return res.status(400).json({ msg: "Price is required" });

        const checkIfItDoesNotExist = await Book.findOne({ title })
        if (checkIfItDoesNotExist) return res.status(400).json({ Msg: "book already exists" })

        const newBook = await Book.create({
            title,
            author,
            price
        }

        )

        return res.status(201).json(newBook)
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "new book registration failed" })
    };
}


export const getAllBooks = async (req, res) => {
    try {
        const getAll = await Book.find({});
        if (getAll.length==0) return res.status(400).json({ msg: "Not found" })
        return res.status(200).json(getAll)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Something went wrong" })
    }
}

export const getAbookById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ msg: "No book selected" })

        const getTheBook = await Book.findById(id);
        if (!getTheBook) return res.status(400).json({ msg: "Not found" })

        return res.status(200).json(getTheBook)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Something went wrong" })
    }

}


export const updateAsingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updates  = req.body;
        if (!id) return res.status(400).json({ msg: "No book selected to update" })

        if (!updates) return res.status(400).json({ msg: "No values provided for update" })
        const updatedBook = await Book.findByIdAndUpdate(id, updates, { new: true, runValidators: true })
        if (!updatedBook) return res.status(404).json({ msg: "Not updated" })
        return res.status(200).json(updatedBook)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "something went wrong" })
    }
}

export const deleteAbook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findOneAndDelete(id);
        if (!deletedBook) return res.status(404).json({ msg: "Not found" })
        return res.status(201).json(deletedBook)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "something went wrong" })
    }
}

