const express = require('express'); //importation d'express
const app = express(); //Initialisation de la librairie express

app.listen(1020, function() {
    console.log("Serveur demarré avec succes") //message box
});


app.get('/toto', function(req, res) {
    res.send('Salut les veterand'); 
});

app.get('/isig', function(req, res){
    res.send('Pleins de dignite');
});
