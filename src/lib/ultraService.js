const db = require("../lib/db");

const getAllEnemies =  async () => {
    const result = await db.query("SELECT * FROM Enemies ORDER BY id ASC");
    return result.rows;
};

