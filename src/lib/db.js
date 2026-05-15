const { Pool } = require("pg");

const DBString = process.env.DATABASE_URL;

if (!DBString) {
    console.error("Vantar DATABASE_URL í .env skrá");
    process.exit(1);
}

const pool = new Pool({
    connectionString: DBString
});

pool.on('error', (err) => {
    console.error('The database cannot connect', err);
    process.exit(-1);
});

async function query(q, values = []) {
    const client = await pool.connect();
    try {
        const result = await client.query(q, values);
        return result;
    } catch (e) {
        console.error('The query is not working, crying emoji', e);
        throw e;
    } finally {
        client.release();
    }
}

module.exports = {
    query
};