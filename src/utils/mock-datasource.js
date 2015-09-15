const Event = require('../models/Event');
const Photo = require('../models/Photo');

const mockEvents = [
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
    })
];

const mockPhotos = [
    new Photo({
        eventTag: 'anneandkris',
        description: 'we are awesome',
        author: 'Anonymous'
    }),
    new Photo({
        eventTag: 'anneandkris',
        description: 'we are more awesome',
        author: 'Anothermous'
    }),
    new Photo({
        eventTag: 'chrisandbirthe',
        description: 'they are also awesome',
        author: 'Other dude'
    }),
    new Photo({
        eventTag: 'flugtag',
        description: 'sponsored baby',
        author: 'Random guy'
    }),
    new Photo({
        eventTag: 'flugtag',
        description: 'more sponsored baby',
        author: 'Person i dont know'
    }),
];

module.exports = {
    getLatestEvents(callback) {
        callback(mockEvents);
    },
    getEvent(tag, callback) {
        const event = mockEvents.filter(e => e.tag === tag);
        if(event.length === 0) {
            return callback({status: 404, message: 'No events found with tag ' + tag + '.'});
        }
        return callback(null, event[0]);
    },
    getPhotos(predicate, callback) {
        return callback(null, mockPhotos.filter(predicate));
    },
    getPhotoCount(tag, callback) {
        return callback(null, mockPhotos.filter(photo => photo.eventTag === tag).length);
    }
};
