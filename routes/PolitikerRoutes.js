const express = require('express');
const router = express.Router();
const Politiker = require('../models/Politiker');
const politikerController = require('../controllers/PolitikerController');

// route to display add politker form
router.get('/add', (req, res) => {
    res.render('add');
});


router.get('/politiker/:id/update', async (req, res) => {
    try{
        const politiker = await Politiker.findById(req.params.id);
        res.render('update', {politiker});
    }catch(err){
        console.error('Error rendering update form');
        res.status(500).send('Error rendering update form');
    }
});

router.get('/', politikerController.getAllPolitikere);
router.post('/politiker', politikerController.addPolitiker);
router.post('/politiker/:id/update', politikerController.updatePolitikere);
router.post('/politiker/:id/delete', politikerController.deletePolitiker);

module.exports = router;
