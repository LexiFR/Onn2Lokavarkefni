//const creatureService = require('../lib/creatureService');

async function index(req, res) {
    //const creatures = await creatureService.getCreatures();
    res.render('index', {title: "Ts might be the terminal"});
};


module.exports = {
    index
};