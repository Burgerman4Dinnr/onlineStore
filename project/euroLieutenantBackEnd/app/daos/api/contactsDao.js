const con = require('../../config/dbconfig')

const contactsDao = {
    table: 'contacts',

    create: (req, res) => {
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body) // create an array
            const values = Object.values(req.body) //create an array
            console.log(req.body)
            con.execute(
                `INSERT INTO contacts SET ${fields.join(' = ?,')} = ?;`,
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

    sort: (req, res) => {
        con.execute(
            'SELECT * FROM contacts ORDER BY name;',
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
            `SELECT * FROM contacts WHERE name LIKE '${name}%'`,
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' DAO ERROR ', error)
                    res.send(`Error fetching record for ${name}`)
                }
            }
        )
    }
}

module.exports = contactsDao;
