const { v4: uuidv4 } = require("uuid")
const userModel = require("../models/user.model")

const createAnUser = async (req, res) => {
    try {
        const newUser = new userModel({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age),
        })
        await newUser.save()
        res.status(201).json(newUser)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        if (users) {
            res.status(200).send(
                {
                    message: "all users",
                    data: users
                }
            )
        }
        else {
            res.status(404).send("products not available")
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getAnUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await userModel.findOne({
            _id: id
        })
        if (user) {
            res.status(200).send({
                message: "one user pulled",
                data: user
            })
        }
        else {
            res.status(201).json({
                message: "user not found"
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "user of this id not found"
        })
    }
}

const updateAnUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await userModel.findOne({
            _id: id
        })
        user.name = req.body.name;
        user.age = Number(req.body.age)

        await user.save()
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const delteAnUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await userModel.deleteOne({
            _id: id
        })
        if (user) {
            res.status(200).send({
                message: "user is deleted",
                data: user
            })
        }
        else {
            res.status(201).json({
                message: "user not found"
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "user of this id not found"
        })
    }
}


module.exports = { getAllUsers, getAnUser, createAnUser, updateAnUser, delteAnUser }