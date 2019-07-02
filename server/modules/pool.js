const pg = require('pg');

const Pool = pg.Pool;

const config = {
    database: 'playfair_songs', // can reuse this block, just change this name!
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000, // thirty thousand milliseconds or 30 seconds.
}

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('Database connected!');
    
})

pool.on('error', ()=> {
    console.log('Database error, yo', error);
    
})

module.exports = pool;

// WHAT IS pool YOU ASK???
    // well, pool is this => a 'pool' of connections from server to our database