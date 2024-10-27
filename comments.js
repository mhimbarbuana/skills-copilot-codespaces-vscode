// create web server
const express = require('express');
const app = express();
const PORT = 3000;

// get all comments
app.get('/comments', (req, res) => {
  const comments = [
    { name: 'A', message: 'Hello' },
    { name: 'B', message: 'Hi' },
    { name: 'C', message: 'Goodbye' }
  ];

  res.json(comments);
});

// get a comment by name
app.get('/comments/:name', (req, res) => {
  const name = req.params.name;
  const comments = [
    { name: 'A', message: 'Hello' },
    { name: 'B', message: 'Hi' },
    { name: 'C', message: 'Goodbye' }
  ];

  const foundComment = comments.find(comment => comment.name === name);

  if (foundComment) {
    res.json(foundComment);
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});