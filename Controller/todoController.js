import todoCollection from "../Model/todoModel.js";

export const postTodo = async (req, res) => {
    try {
        const data = new todoCollection(req.body);

        await data.save();

        res.status(201).json({
            message: "data has been stored"
        });

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }
};