/*
==========
| SERVER |
==================================================================================================================================

? @collaborators:        
    * James Primitive
    * Zac Eitel
    * Kaylan Prophet
    * Mason Morris
    * William Horn

? @doc-name:        server.js
? @doc-created:     07/13/2022

==================================================================================================================================

? @doc-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

Welcome to Sapient!

This file is the main application entry-point for initializing express server and all back-end components such as:
    - Mongo database connection
    - Apollo server & GraphQL routing

==================================================================================================================================

? @doc-todo
=================
| DOCUMENT TODO |
==================================================================================================================================

todo:   Heroku deployment not working; fix issue with root directory package.json scripts
        !Incomplete

todo:   Finish implementing apollo server & mongodb connection

==================================================================================================================================
*/


// Require local modules
const path = require('path');
const express = require('express');

// Create express server app
const app = express();

// Access .env variables
const PORT = process.env.PORT || 3000;

// Use app middleware
app.use(express.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

// 
app.listen(PORT, () => { console.log('running server on port: ' + PORT) });
