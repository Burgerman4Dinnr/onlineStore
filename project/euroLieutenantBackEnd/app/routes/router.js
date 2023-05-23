const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

/**
 * Build API
 */

// localhost:3000/api
router.get('/api', (request,response)=> {
    response.json({
        'All Products': `http://localhost:${PORT}/api/product`,
        'All Users': `http://localhost:${PORT}/api/user`,
        'All Contacts': `http://localhost:${PORT}/api/contacts`
    })
})

const productRoutes = require('./api/productRoutes')
router.use('/api/product', productRoutes)

const userRoutes = require('./api/userRoutes')
router.use('/api/user', userRoutes)

const contactsRoutes = require('./api/contactsRoutes')
router.use('/api/contacts', contactsRoutes)

module.exports = router