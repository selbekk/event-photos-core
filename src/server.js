let express = require('express');
let eventRouter = require('./routers/event-router');

let app = express();

app.set('port', process.env.PORT || 4001);

app.use('/events', eventRouter);

app.listen(app.get('port'),
    () => console.log('API listening at port ' + app.get('port'))
);
