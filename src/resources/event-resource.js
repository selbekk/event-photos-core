let service = require('../services/event-service');

let EventResource = {
    getLatest(req, res, next) {
        service.getLatest()
            .then(events => res.json(events))
            .catch(next);
    },
    getEvent(req, res, next) {
        service.getEvent(req.params.tag)
            .then(event => res.json(event))
            .catch(next);
    }
};

module.exports = EventResource;
