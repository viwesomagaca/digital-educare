const mongoose = require('mongoose');
module.exports = function(mongoUrl) {
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoUrl);

    const schools = mongoose.model('schools', {
        id_no: 'Number',
        school:{
            sector:'String',
            phase_doe: 'String',
            magistratial_district:'String',
            town:'String',
            postal_code:'Number',
            urban_rural:'String',
            telephone:'Number',
        },
        occupation: 'String',
        cell_no: 'Number',
        other:'String',
        school_need: 'String',

    })


    return {
    schools

    };
}
