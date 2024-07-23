const express = require('express');
const path = require('path');

const app = express();
const port = 8000;
const baseDirectory = path.join(__dirname, 'hls'); // Caminho para os arquivos HLS

// Middleware para servir arquivos estáticos
app.use(express.static(baseDirectory));

// Rota para arquivos HLS
app.get('/*', (req, res) => {
    const filePath = path.join(baseDirectory, req.url);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('File not found');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
