const express = require('express');

const linksController = require('../controllers/linksController');
const cardsController = require('../controllers/cardsController');

const router = express.Router();

router.get('/', 
    linksController.getAll,
    cardsController.sort,
    (req, res) => res.status(200).json(res.locals.cards)
);

router.post('/card', 
    linksController.createCard,
    (req, res) => res.sendStatus(200)
);

router.post('/link',
    linksController.createLink,
    (req, res) => res.sendStatus(200)
);

router.delete('/link',
    linksController.deleteLink,
    (req, res) => res.sendStatus(200)
);

router.patch('/link',
    linksController.updateLink,
    (req, res) => res.sendStatus(200)
);

module.exports = router;

