const express = require('express');

const linksController = require('../controllers/linksController');
const helpers = require('../controllers/helpers');

const router = express.Router();

router.get('/', 
    linksController.getAll,
    (req, res) => res.status(200).json(res.locals.links)
);

router.post('/link',
    helpers.getTitle,
    linksController.createLink,
    (req, res) => res.status(200).json(res.locals.link)
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

