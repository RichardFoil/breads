// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

//baker seed
baker.get('/data/seed', (req, res) => {
    console.log('hi')
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})


// export
module.exports = baker                    
