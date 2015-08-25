let service = require('../services/event-service');

let EventResource = {
    getLatest(req, res, next) {
        service.getLatest()
            .then(events => res.json(events))
            .catch(next);
    }
};

module.exports = EventResource;
