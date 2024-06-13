const conf = require('./config.json');
const pool = require('mysql2/promise').createPool(conf);

module.exports.pool = pool;

async function connect() {
    try {
        const conn = await pool.getConnection();
        if(conn) {
            console.log('[DONE] Successful connection to MySQL.');
            mp.events.delayInitialization = false;
        }
    } catch(err) {
        console.error(`[WARN] MySQL Error: ${err.message}.`);
    }
}

module.exports.connect = connect;