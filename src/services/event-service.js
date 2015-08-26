let Q = require('q');

let mockDataSource = require('../utils/mock-events.js');

let EventService = {
    getLatest() {
        let deferred = Q.defer();

        // TODO: Get data from real data source
        mockDataSource.getLatest(deferred.resolve);

        return deferred.promise;
    },
    getEvent(tag) {
        let deferred = Q.defer();
        mockDataSource.getEvent(tag, function(err, event) {
            if(err) {
                return deferred.reject(err);
            }
            deferred.resolve(event);
        });

        return deferred.promise;
    }
};

module.exports = EventService;
