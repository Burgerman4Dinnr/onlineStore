const express = require('express')
const router = express.Router()

// Destructure contactsDao
const { contactsDao: dao } = require('../../daos/dao')

/**
 * GET
 */

// localhost:3000/api/contacts
router.get('/', (req, res) => {
  dao.findAll(res, dao.table)
})

// localhost:3000/api/contacts/sort
router.get('/sort', (req, res) => {
  dao.sort(req, res)
})

router.get('/findByName/:name', (req, res) => {
  dao.findByName(req, res)
})

router.get('/:id', (req, res) => {
  dao.findById(res, dao.table, req.params.id)
})

/**
 * POST
 */
router.post('/create', (req, res) => {
  dao.create(req, res)
})

/**
 * PATCH
 */
router.patch('/update/:id', (req, res) => {
  dao.update(req, res)
})

module.exports = router
