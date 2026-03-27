const ultraService = require('../lib/ultraService');

async function index(req, res) {
    res.render('index', {title: "Ts might be the terminal"});
};

const getEnemyDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const enemy = await ultraService.getEnemyById(id);

        if(!enemy) {
            return res.status(404).send("Vro got killed by Muga Ryoshu")
        }

        res.render("recipe-details", {
            title: enemy.title,
            enemy: enemy
        });
    } catch(error) {
        console.error("Villa vid ad sækja staka uppskrift:", error);
        res.status(500).send("Kerfisvilla - Get ekki hladid enemies");
    }
};

module.exports = {
    index,
    getEnemyDetails
};