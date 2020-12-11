const db = require("../models/linkModels");

const linksController = {};

linksController.getAll = (req, res, next) => {
  console.log('we got all');
  const getLinksQuery = 'SELECT card_name, * FROM card LEFT OUTER JOIN link ON link.card_id = card._id LIMIT 5'; 
  db.query(getLinksQuery)
    .then((data) => {
      console.log(data.rows);
      res.locals.links = data.rows;
      return next();
    })
    .catch((err) => {
      console.log(err)
      return next({
        log: "linksController.getAll: ERROR: Error getting database",
        message: {
          err:
            "linksController.getAll: ERROR: Check database for details",
        },
      });
    });
};

linksController.createCard = (req, res, next) => {
    console.log('we got card', req.body.card_name);
    const { card_name } = req.body;
    const createCardQuery = 'INSERT INTO card (card_name) VALUES($1)';
    db.query(createCardQuery, [card_name])
        .then((data) => {
            console.log('success', data);
            return next();
        })
        .catch((err) => {
            console.log('err', err);
            return next({
            log:
                "linksController.createCard: ERROR: Error getting card database",
            message: {
                err:
                "linksController.createCard: ERROR: Check card database for details",
            },
            });
        });
};

linksController.createLink = (req, res, next) => {
    console.log('we got link', req.body);
    const { link_name, link, is_read, is_important, card_id } = req.body;
    const linkArr = [link_name, link, is_read, is_important, card_id];
    const createLinkQuery = 'INSERT INTO link (link_name, link, is_read, is_important, card_id) VALUES($1, $2, $3, $4, $5)';
    db.query(createLinkQuery, linkArr)
    .then((data) => {
        console.log('success', data);
        return next();
    })
    .catch((err) => {
        console.log('err', err);
        return next({
        log:
            "linksController.createLink: ERROR: Error getting link database",
        message: {
            err:
            "linksController.createLink: ERROR: Check link database for details",
        },
        });
    });
    //return next();
}

module.exports = linksController;