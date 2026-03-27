const db = require("../lib/db");

const getAllEnemies =  async () => {
    const result = await db.query("SELECT * FROM Enemies ORDER BY id ASC");
    return result.rows;
};

const getEnemyById = async (id) => {
    const result = await db.query("SELECT * FROM Enemies WHERE id = $1", [id]);

    if(result.row.length === 0) {
        return null;
    }

    return result.rows[0];
};
module.exports = {
    getAllEnemies,
    getEnemyById
}