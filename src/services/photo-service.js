const Q = require('q');

const mockDataSource = require('../utils/mock-datasource.js');

let EventService = {
    getPhotosForEvent(event) {
        const deferred = Q.defer();

        mockDataSource.getPhotos(photo => photo.eventTag === event.tag, (err, photos) => {
            if(err) {
                return deferred.reject(err);
            }
            event.photos = photos;
            return deferred.resolve(event);
        })

        return deferred.promise;
    },
    getPhotoCount(event) {
        const deferred = Q.defer();

        mockDataSource.getPhotoCount(event.tag, (err, count) => {
            if(err) {
                return deferred.reject(err);
            }

            deferred.resolve(count);
        })

        return deferred.promise;
    }
};

module.exports = EventService;
