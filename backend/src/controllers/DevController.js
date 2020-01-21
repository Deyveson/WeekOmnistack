const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store (request, response) {

        const { github_usermane, techs, latitude, longitude } =  request.body;

        let dev = await Dev.findOne({ github_usermane });

        if(!dev){

            const apiResponse = await axios.get(`https://api.github.com/users/${github_usermane}`);
    
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            const techsArray = techs.split(',').map(tech => tech.trim());
        
            console.log( github_usermane, name, avatar_url, bio, techsArray );
            console.log( techsArray );
        
            const location = {
                type: "Point",
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_usermane,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

        }else{
            console.log("dev ja existe");
        }
    
        return response.json(dev);
    }
}