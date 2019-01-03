let mongo = require('mongoose');
let db = require('./db');
//let autoIncrement = require('mongoose-auto-increment');


let Schema = mongo.Schema;
let flowerSchema = new Schema({ // create a schema
    name: { type: String, unique: true },
    color: String,
    price: Number,
    photo: String
});
/*flowerSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});*/




let flowers = db.model('flowers', flowerSchema);


flower = [
    {
        name: 'Rose',
        color: 'pink',
        price: 40,
        photo: 'https://images.pexels.com/photos/736231/pexels-photo-736231.jpeg?auto=compress&cs=tinysrgb&h=350'
    },
    {
        name: 'Anemone',
        color: 'blue',
        price: 20,
        photo: 'http://cdn.shopify.com/s/files/1/1902/7917/products/Anemone-de-Caen-Mr.-Fokker-blue_grande.jpg?v=1495789538'
    },
    {
        name: 'Narcissus',
        color: 'yellow',
        price: 30,
        photo: 'https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full_caption/public/blogs/89816/2012/03/90410-86622.jpg?itok=ScKc-ggc'
    }

];
/*for (let i = 0; i < flower.length; i++) {
    flowers.create(flower[i], function (err, flower) {
        if (err) throw err;
        console.log('Flower created:' + flower);
    });
}*/
/*flowers.remove({}, function(err) {
    if (err) {
        console.log(err)}});*/
module.exports = flowers;