const database = require('./database');

mp.events.add('playerReady', player => {
    player.call('showLoginScreen');
});

mp.events.add('serverShutdown', async () => {
    await database.pool.end();
});