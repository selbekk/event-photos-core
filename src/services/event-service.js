const Q = require('q');

const mockDataSource = require('../utils/mock-datasource.js');

const EventService = {
    getLatest() {
        const deferred = Q.defer();

        // TODO: Get data from real data source
        mockDataSource.getLatestEvents(deferred.resolve);

        return deferred.promise;
    },
    getEvent(tag) {
        const deferred = Q.defer();
        mockDataSource.getEvent(tag, (err, event) => {
            if(err) {
                return deferred.reject(err);
            }
            deferred.resolve(event);
        });

        return deferred.promise;
    }
};

module.exports = EventService;
