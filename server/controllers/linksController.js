const db = require("../models/linkModels");

const linksController = {};

linksController.getAll = (req, res, next) => {
  const { tag } = req.query;
  console.log('we got all', tag);
  let getLinksQuery;
  switch(tag) {
	case(undefined):
	default: 
		getLinksQuery = 'SELECT * FROM link'; 
		break;
	case('is_read'): //WHERE link.is_read = true
		getLinksQuery = 'SELECT card_name, card._id as cardid, * FROM card LEFT JOIN link ON link.card_id = card._id WHERE link.is_read = true'; 
		break;
	case('is_important'):
		getLinksQuery = 'SELECT card_name, card._id as cardid, * FROM card LEFT JOIN link ON link.card_id = card._id WHERE link.is_important = true';
		break;
  }

  db.query(getLinksQuery)
    .then((data) => {
      //console.log(data.rows);
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

linksController.createLink = (req, res, next) => {
    // console.log('we got link', req.body);
	const { link_src, tag_id } = req.body;
	const { link_name } = res.locals;
    const linkArr = [link_name, link_src, tag_id];
    const createLinkQuery = 'INSERT INTO link (link_name, link_src, tag_id) VALUES($1, $2, $3)';
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
}

linksController.deleteLink = (req, res, next) => {
	console.log('we got link delete', req.query, req.query.id);
	const { id } = req.query;

	const deleteLinkQuery = 'DELETE FROM link WHERE _id = $1'
	db.query(deleteLinkQuery, [id])
	.then((data) => {
			console.log('success', data);
			return next();
	})
	.catch((err) => {
		console.log('err', err);
		return next({
			log:
					"linksController.deleteLink: ERROR: Error deleting link database",
			message: {
					err:
					"linksController.deleteLink: ERROR: Check link database for details",
			}
		});
	});
}

linksController.updateLink = (req, res, next) => {
	console.log('we got link update', req.body, req.query.id);
	const { id } = req.query;
	// update is_read or is_important
	// get update data from req body 
	const { is_read, is_important } = req.body;
  const linkArr = [id, is_read, is_important];
	const updateLinkQuery = 'UPDATE link SET is_read = $2, is_important = $3 WHERE _id = $1'
	db.query(updateLinkQuery, linkArr)
	.then((data) => {
			console.log('success', data);
			return next();
	})
	.catch((err) => {
			console.log('err', err);
			return next({
			log:
					"linksController.updateLink: ERROR: Error updating link database",
			message: {
					err:
					"linksController.updateLink: ERROR: Check link database for details",
			},
			});
	});
}

module.exports = linksController;