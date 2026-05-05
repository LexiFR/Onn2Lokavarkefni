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

        res.render("enemy-details", {
            title: enemy.title,
            enemy: enemy
        });
    } catch(error) {
        console.error("Error while getting enemies:", error);
        res.status(500).send("Server error - cannot load enemies");
    }
};


const getAddEmemyForm = (req, res) => {
    res.render("add-enemy", {
        title: "add the enemy"
    });
};

const createNewEnemy = async (req, res) => {
    try {
        const { title, img_url, type, unlocked, description, strategy } = req.body;

        if (!title) {
            return res.status(400).send(
                "Title cannot be empty"
            );
        }

        const newEnemy = await ultraService.createEnemy(
            title,
            img_url,
            type,
            unlocked,
            description,
            strategy
        );

        res.redirect(`/emenies/${newEnemy.id}`);
    } catch(error) {
        console.error("Error while trying to create an enemy:", error);
        res.status(500).send(
            "Server error - cannot create the enemy"
        );
    }
}

module.exports = {
    index,
    getEnemyDetails,
    getAddEmemyForm,
    createNewEnemy
};