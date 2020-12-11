const cardsController = {};

cardsController.sort = (req, res, next) => {
    // go through array of object
    // create objects based on card_name
    // put links in links array for each card
    const { links } = res.locals;
    const cards = {};
    links.forEach(object => {
        const {card_name, card_id, _id, link_name, link, is_read, is_important } = object;
        const linkObj = {
            link_name, link, _id, is_read, is_important
        }
        if(cards[card_name]) {
            cards[card_name].links.push(linkObj);
        } else {
            cards[card_name] = {};
            cards[card_name].card_name = card_name;
            cards[card_name]._id = card_id;
            cards[card_name].links = [];
            cards[card_name].links.push(linkObj);
        }
    });
    res.locals.cards = cards;
    //console.log('cards', cards);
    next();
}

module.exports = cardsController;