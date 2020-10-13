const meta = require('html-metadata-parser');

module.exports = function get_user_followers (user) {
    meta.parser('https://www.instagram.com/'+user+'/', function (err, result) {
        res = Number((result.meta.description.replace(',', '').match(/[0-9]+/g))[0])
        console.log(res);
    })
}