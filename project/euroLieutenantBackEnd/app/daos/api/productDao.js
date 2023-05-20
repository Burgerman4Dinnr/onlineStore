const con = require('../../config/dbconfig')

const productDao = {
    table: 'product',

    create: (req, res) => {
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body) // create an array
            const values = Object.values(req.body) //create an array

            con.execute(
                `INSERT INTO product SET ${fields.join(' = ?,')} = ?;`,
                values,
                (error, dbres) => {
                    if(!error) {
                        res.send(`Last inserted id: ${dbres.insertId}`)
                    } else {
                        console.log(' DAO ERROR ', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    update: (req, res) => {
        if(!isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "Id must be a number."
            })
        } else if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to update"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)
            
            con.execute(
                `UPDATE product SET ${fields.join (' = ?, ')} = ? WHERE contact_id = ?;`,
                [...values, req.params.id],
                (error, dbres)=> {
                    if(!error) {
                        res.send(`Changed ${dbres.changedRows} row(s)`)
                    } else {
                        console.log(' DAO ERROR ', error)
                        res.send(`Error updating record`)
                    }
                }
            )
        }
    },
    sort: (req, res) => {
        con.execute(
            'SELECT * FROM product ORDER BY name;',
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' DAO ERROR ', error)
                    res.send('Error fetching record(s)')
                }
            }
        )
    },

    findByName: (req, res) => {
        const name = req.params.name;
        con.execute(
            `SELECT * FROM product WHERE name LIKE '${name}%'`,
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR ', error)
                    res.send(`Error fetching record for ${name}`)
                }
            }
        )
    }
}

module.exports = productDao;