const express = require("express");
const data = require("./data/db");

const router = express.Router();

router.get("/", (req, res) => {
    posts.find()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// When the client makes a POST request to /api/postss
router.post("/", (req, res) => {
    req.body.title && req.body.contents;

    !title || !contents ? res.status(400).json({ message: "Please provide title and contents for the post." })
        : posts.insert(req.body)

    .then(posts => {
        res.status(201).json(req.body);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: "There was an error while saving the post to the database." });
     })
})

// When the client makes a POST request to /api/posts/:id/comments
router.post("/:id/comments", (req, res) => {
    data.findById(req.params.id)

    !post ? res.status(404).json({ error: "The post with the specified ID does not exist." })
        : req.comments.text && req.comments.id;

    !text ? res.status(400).json({ errorMessage: "Please provide text for the comment." })
        : posts.findById(req.params.id);

    posts.newComment(comment)
        .then(comment => {
            res.status(201).json(comment)
        })
        .catch(error => {
            res.status(500).jsonp({ errorMessage: "There was an error while saving the comment to the database." })
        })
})

