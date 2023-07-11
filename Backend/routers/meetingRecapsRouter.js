const express = require('express')
const router = express.Router()

const {
    getAllRecaps,
    getRecapByID,
    createRecap,
    updateRecap,
    deleteRecap
} = require('../controllers/meetingRecapsController')

router.get('/', getAllRecaps)
router.get('/:id',getRecapByID)
router.post('/', createRecap)
router.put('/:id', updateRecap)
router.delete('/:id', deleteRecap)

module.exports = router