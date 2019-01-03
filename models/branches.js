let mongo = require('mongoose');
let db = require('./db');
//let autoIncrement = require('mongoose-auto-increment');


let Schema = mongo.Schema;
let branchSchema = new Schema({ // create a schema
    id: { type: String, unique: true },
    name: String,
    active: Boolean,
    city: String
});


branch = [{id: 123, name: "Petah Tikva Flowers", active: true, city: 'Petah Tikva'},
    {id: 456, name: "Tel Aviv Flowers", active: false, city: 'Tel Aviv'}];


let branches = db.model('branches', branchSchema);



/*for (let i = 0; i < branch.length; i++) {
    branches.create(branch[i], function (err, branch) {
        if (err) throw err;

    });
}*/
/*branches.remove({}, function(err) {
    if (err) {
        console.log(err)}});*/
module.exports = branches;