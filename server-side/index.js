mp.events.delayInitialization = true;

const database = require('./database');

(async () => {
    await database.connect();
})();

require('./events');
require('./authentication');
require('./commands');
require('./crime');