//  Create web server

const express = require('express');

const router = express.Router();

const comments = require('../data/comments');

router.get('/comments', (req, res) => {

    res.json(comments);

}

);
