const express = require('express');
const app = express();
const port = 3000; // You can change this port number

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Create a 'public' directory for static files (CSS, JS)

app.set('view engine', 'ejs'); // You'll need to install the 'ejs' package as well

const tasks = [];

app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/addTask', (req, res) => {
    const taskName = req.body.taskName;
    tasks.push(taskName);
    res.redirect('/');
});

app.post('/deleteTask/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
    }
    
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
