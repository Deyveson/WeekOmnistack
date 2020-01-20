const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (request, response) => {

    const { github_usermane, techs } =  request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_usermane}`);

    const { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    console.log( github_usermane, name, avatar_url, bio, techsArray );
    console.log( techsArray );

    const dev = await Dev.create({
        github_usermane,
        name,
        avatar_url,
        bio,
        tech: techsArray
    })

    return response.json(dev);
});


module.exports = routes;