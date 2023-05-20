const daoCommon = require('./common/daoCommon')

const productDao = {
...daoCommon,
...require('./api/productDao')
}

const userDao = {
...daoCommon,
...require('./api/userDao')
}

const contactsDao = {
...daoCommon,
...require('./api/contactsDao')
}

module.exports = {
productDao,
userDao,
contactsDao
}