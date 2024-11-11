const Politiker = require('../models/Politiker');

// add politiker
exports.addPolitiker = async (req, res) => {
    try{
        const newPolitiker = new Politiker({
            navn: req.body.navn,
            parti: req.body.parti,
            stilling: req.body.stilling
        });
        await newPolitiker.save();
        res.redirect('/');
    }catch(err){
        console.error("Error adding politiker: ", err);
        res.status(500).send("Error adding politiker.");
    }
};

// Get all
exports.getAllPolitikere = async (req, res) =>{
    try{
        const politikere = await Politiker.find();
        res.render('index', {politikere});
    }catch(err){
        console.error("Error getting politikere: ", err);
        res.status(500).send("Error getting politikere");
    }
};

// update politikere
exports.updatePolitikere = async (req, res) => {
    try{
        await Politiker.findByIdAndUpdate(req.params.id, {
            navn: req.body.navn,
            parti: req.body.parti,
            stilling: req.body.stilling
        });
        res.redirect('/');
    }catch(err){
        console.error("Error updating", err);
        res.status(500).send("Error updating");
    }
};

exports.deletePolitiker = async (req, res) => {
    try{
        await Politiker.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch(err){
        console.error("Error deleting", err);
        res.status(500).send("Error deleting");
    }
};











