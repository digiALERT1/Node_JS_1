const router = require('express').Router();
const rateLimit = require('express-rate-limit');

const { getItems, addItem, deleteItem, updateItem, search } = require('../controllers/itemController');

// set up rate limiter: maximum of 100 requests per 15 minutes
const searchLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max 100 requests per windowMs
});

// crud on todo list
router.get('/', getItems)
router.post('/', addItem)

// search in the list
router.post('/search', searchLimiter, search)

module.exports = router