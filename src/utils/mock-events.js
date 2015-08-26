let Event = require('../models/Event');

let mockData = [
    new Event({
        title: 'Anne and Kristofer\'s wedding',
        tag: 'anneandkris',
        description: 'Dreams, perhaps, but oh well. Dreams are real too!'
    }),
    new Event({
        title: 'Chris and Birthe\'s wedding',
        tag: 'chrisandbirthe',
        description: 'I think this one is closer to a reality'
    }),
    new Event({
        title: 'Redbull Flugtag Oslo',
        tag: 'flugtagoslo',
        description: 'Sponsored tags can get promoted more'
    }),
    new Event({
        title: 'Fadderullan',
        tag: 'fadderullan',
        description: 'Party party party party party party'
    }),
];

module.exports = {
    getLatest(callback) {
        callback(mockData);
    },
    getEvent(tag, callback) {
        let event = mockData.filter(e => e.tag);
        if(event.length === 0) {
            return callback({status: 404, message: 'No events found with tag ' + tag + '.'});
        }
        return callback(null, event[0]);
    }
};
