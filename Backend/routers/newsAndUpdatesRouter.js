const express = require('express')
const router = express.Router()

const {
    getAllNews,
    getNewsByID,
    createNews,
    updateNews,
    deleteNews
} = require('../controllers/newsAndUpdatesController')

router.get('/', getAllNews)
router.get('/:id',getNewsByID)
router.post('/', createNews)
router.put('/:id', updateNews)
router.delete('/:id', deleteNews)

module.exports = router