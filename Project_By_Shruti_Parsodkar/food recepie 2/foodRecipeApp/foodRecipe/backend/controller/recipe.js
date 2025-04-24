const Recipes = require("../models/recipe")
const multer = require('multer')
const path = require('path')

// Improved file upload configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'))
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        const filename = `${Date.now()}-${file.fieldname}${ext}`
        cb(null, filename)
    }
})

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
})

const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipes.find().populate('createdBy', 'email') // Include creator info
        return res.status(200).json(recipes)
    } catch (err) {
        console.error('Error fetching recipes:', err)
        return res.status(500).json({ message: 'Server error' })
    }
}

const getRecipe = async (req, res) => {
    try {
        const recipe = await Recipes.findById(req.params.id).populate('createdBy', 'email')
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' })
        }
        res.status(200).json(recipe)
    } catch (err) {
        console.error('Error fetching recipe:', err)
        res.status(500).json({ message: 'Server error' })
    }
}

const addRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, time } = req.body

        // Validation
        if (!title || !ingredients || !instructions) {
            return res.status(400).json({ message: "Required fields can't be empty" })
        }

        if (!req.file) {
            return res.status(400).json({ message: "Cover image is required" })
        }

        const newRecipe = await Recipes.create({
            title,
            ingredients,
            instructions,
            time,
            coverImage: req.file.filename,
            createdBy: req.user.id
        })

        return res.status(201).json(newRecipe)
    } catch (err) {
        console.error('Error adding recipe:', err)
        return res.status(500).json({ message: 'Server error' })
    }
}

const editRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, time } = req.body
        const recipe = await Recipes.findById(req.params.id)

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' })
        }

        const coverImage = req.file?.filename || recipe.coverImage
        const updatedRecipe = await Recipes.findByIdAndUpdate(
            req.params.id,
            { title, ingredients, instructions, time, coverImage },
            { new: true }
        )

        return res.status(200).json(updatedRecipe)
    } catch (err) {
        console.error('Error updating recipe:', err)
        return res.status(500).json({ message: 'Server error' })
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipes.findByIdAndDelete(req.params.id)
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' })
        }
        return res.status(200).json({ status: "ok", message: "Recipe deleted" })
    } catch (err) {
        console.error('Error deleting recipe:', err)
        return res.status(500).json({ message: 'Server error' })
    }
}

module.exports = { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe, upload }