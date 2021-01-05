const express = require('express');

const linksController = require('../controllers/linksController');
const helpers = require('../controllers/helpers');

const router = express.Router();

router.get('/', 
    linksController.getAll,
    helpers.sort,
    (req, res) => res.status(200).json(res.locals.cards)
);

router.post('/card', 
    linksController.createCard,
    (req, res) => res.status(200).json(res.locals.newCard)
);

router.patch('/card', 
    linksController.updateCard,
    (req, res) => res.sendStatus(200)
)

router.delete('/card',
    linksController.deleteCard,
    (req, res) => res.sendStatus(200)
);

router.post('/link',
    helpers.getTitle,
    linksController.createLink,
    (req, res) => res.status(200).json({})
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

