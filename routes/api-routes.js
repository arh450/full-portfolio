const db = require('../models');
const router = require('express').Router();

router.post('/', (req, res) => {
    db.Message
        .create({
            name: req.body.name,
            email: req.body.email,
            note: req.body.note
        })
        .then((result) => {
            console.log("Message added successfully");
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;
