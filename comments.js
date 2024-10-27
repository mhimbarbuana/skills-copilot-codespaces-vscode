// Create web server
// Create a new web server
const express = require('express');
const app = express();
// Create a new web server
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Create a new web server
const comments = [
    { id: 1, body: "comment1" },
    { id: 2, body: "comment2" },
    { id: 3, body: "comment3" }
];
// Create a new web server
app.get('/comments', (req, res) => {
    res.json(comments);
});
// Create a new web server
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) {
        return res.status(404).send('The comment with the given ID was not found.');
    }
    res.json(comment);
});
// Create a new web server
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        body: req.body.body
    };
    comments.push(comment);
    res.json(comment);
});
// Create a new web server
app.put('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) {
        return res.status(404).send('The comment with the given ID was not found.');
    }
    comment.body = req.body.body;
    res.json(comment);
});
// Create a new web server
app.delete('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) {
        return res.status(404).send('The comment with the given ID was not found.');
    }
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.json(comment);
});
// Create a new web server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
//