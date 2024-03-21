// Create web server using express
// Create a route to handle comments
// Create a route to handle comments/new
// Create a route to handle comments/:id
// Create a route to handle comments/:id/edit
// Create a route to handle comments/:id/delete

const express = require('express');
const router = express.Router();

// Index Route
router.get('/', (req, res) => {
    res.send('INDEX /comments');
});

// New Route
router.get('/new', (req, res) => {
    res.send('NEW /comments/new');
});

// Create Route
router.post('/', (req, res) => {
    res.send('CREATE /comments');
});

// Show Route
router.get('/:id', (req, res) => {
    res.send('SHOW /comments/:id');
});

// Edit Route
router.get('/:id/edit', (req, res) => {
    res.send('EDIT /comments/:id/edit');
});

// Update Route
router.put('/:id', (req, res) => {
    res.send('UPDATE /comments/:id');
});

// Destroy Route
router.delete('/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});

module.exports = router;