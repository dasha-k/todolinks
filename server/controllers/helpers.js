const fetch = require('node-fetch');

const helpers = {};

helpers.getTitle = (req, res, next) => {
    console.log('we are in get title');
    const { link_src: url } = req.body;
    console.log(url);
    fetch(url, {
        method: 'GET',
    })
    .then(res => res.text())
    .then(text => {
        //console.log("link title", text);
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