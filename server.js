const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Indique à Express de servir les fichiers statiques (ton style.css et script.js)
app.use(express.static(__dirname));

// Route principale : charge le fichier index.html quand on visite la page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Lancement du serveur
app.listen(port, () => {
    console.log(`🚀 Serveur en ligne ! Ouvre ce lien dans ton navigateur : http://localhost:${port}`);
});