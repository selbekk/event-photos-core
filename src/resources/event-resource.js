const assign = require('object-assign');
const eventService = require('../services/event-service');
const photoService = require('../services/photo-service');

const EventResource = {
    getLatest(req, res, next) {
        eventService.getLatest()
            .then(events => res.json(events))
            .catch(next);
    },
    getEvent(req, res, next) {
        eventService.getEvent(req.params.tag)
            .then(photoService.getPhotosForEvent)
            .then(event => assign({}, event, { imageCount: event.photos.length }))
            .then(eventWithPhotos => res.json(eventWithPhotos))
            .catch(next);
    }
};

module.exports = EventResource;
