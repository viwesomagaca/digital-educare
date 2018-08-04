const mongoose = require('mongoose');
module.exports = function(mongoUrl) {
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoUrl);

    const schools = mongoose.model('schools', {
        name: 'String',
        surname: 'String',
        id_no: 'Number',
        schoolName:'String',
        occupation: 'String',
        cell_no: 'Number',
        other:'String',
        school_need: 'String',
        Instution: 'String',
        Sector:'String',
        Postal_code:'Number',
        Urban_rural:'String',
        Telephone:'Number',
    })

    return {
    schools
    };
}
