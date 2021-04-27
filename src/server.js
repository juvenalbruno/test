const express = require('express');
const routes = require('./routes');
const app = express();
const port = 3030;

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server is running. Port: ${port}`));