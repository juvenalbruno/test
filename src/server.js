const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes)

const port = 3030;
app.listen(port, () => console.log(`Server is running. Port: ${port}`));