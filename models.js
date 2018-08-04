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
        address:'String',
        school_need: 'String'
    })

    return {
    schools
    };
}
