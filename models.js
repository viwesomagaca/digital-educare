const mongoose = require('mongoose');
module.exports = function(mongoUrl) {
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoUrl);

    const schools = mongoose.model('schools', {
        name: 'String',
        surname: 'String',
        number: 'Number',
        schoolName:'String',
        occupation: 'String',
        Address:'String',
        Need: 'String'
    })

    return {
    schools
    };
}
