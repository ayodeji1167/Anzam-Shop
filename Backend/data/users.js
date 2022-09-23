const bcrypt = require('bcryptjs')

const users = [

    {
        name: 'admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('pass1', 10),
        isAdmin: 'true'
    },

    {
        name: 'ayo',
        email: 'ayo@gmail.com',
        password: bcrypt.hashSync('pass1', 10),
    },

    {
        name: 'deji',
        email: 'deji@gmail.com',
        password: bcrypt.hashSync('pass1', 10),
    }
]

module.exports = users;