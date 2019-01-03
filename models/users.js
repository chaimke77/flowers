let mongo = require('mongoose');
let db = require('./db');
//let autoIncrement = require('mongoose-auto-increment');


let Schema = mongo.Schema;
let userSchema = new Schema({ // create a schema
    id : { type: String, unique: true },
    name: String,
    category: String,
    branchId: Number,
    userName: String,
    password :String,
    valid : Boolean
});





let users = db.model('users', userSchema);


user = [
    {
        id: 305266462,
        name: 'Chaim',
        category: Category.MANAGER,
        branchId: 456,
        userName: 'a',
        password: '1',
        valid: true
    },
    {
        id: 325817434,
        name: 'Tzvika',
        category: Category.CUSTOMER,
        userName: 'Tzvika123',
        password: 'abcd',
        valid: false
    },
    {
        id: 123456,
        name: 'Moshe',
        category: Category.WORKER,
        branchId: 123,
        userName: 'd',
        password: '2',
        valid: true
    },
    {
        id: 123,
        name: 'Moshe',
        category: Category.CUSTOMER,
        userName: 's',
        password: '11',
        valid: true
    }
];

/*for (let i = 0; i < user.length; i++) {
    users.create(user[i], function (err, flower) {
        if (err) throw err;

    });
}*/

module.exports = users;