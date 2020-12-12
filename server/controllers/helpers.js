const fetch = require('node-fetch');

const helpers = {};

helpers.sort = (req, res, next) => {
    // go through array of object
    // create objects based on card_name
    // put links in links array for each card
    const { links } = res.locals;
    console.log('links', links);
    const cards = {};
    links.forEach(object => {
        const {card_name, cardid, card_id, _id, link_name, link, is_read, is_important } = object;
        const linkObj = {
            link_name, link, _id, is_read, is_important
        }
        if(cards[cardid]) {
            if(linkObj._id) {
                cards[cardid].links.push(linkObj);
            }
        } else {
            cards[cardid] = {};
            cards[cardid].card_name = card_name;
            cards[cardid]._id = cardid;
            cards[cardid].links = [];
            if(linkObj._id) {
                cards[cardid].links.push(linkObj);
            }
        }
    });
    res.locals.cards = cards;
    console.log('cards', cards);
    next();
}

helpers.getTitle = (req, res, next) => {
    console.log('we are in get title');
    const { link: url } = req.body;
    console.log(url);
    fetch(url, {
        method: 'GET',
    })
    .then(res => res.text())
    .then(text => {
        console.log("link title", text);
        const docTitle = text.match(/<title(.*?)>(.*?)<\/title>/); 
        console.log(docTitle[0]);
        let link_name = docTitle[0].replace(/<title(.*?)>/, "").replace(/<\/title>/, "");
        //link_name.replace(/<\/title>/, "");
        res.locals.link_name = link_name;
        next();
    })
    .catch((err) => {
        console.log('error', err)
    })
    //next();
}

module.exports = helpers;