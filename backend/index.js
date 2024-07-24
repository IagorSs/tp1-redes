import express from 'express';
import { join } from 'path';

// Creating vars to filename and dirname
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// ---

const app = express();
const baseDirectory = join(__dirname, 'hls'); // Caminho para os arquivos HLS

// Middleware para servir arquivos estáticos
app.use(express.static(baseDirectory));

// Rota para arquivos HLS
app.get('/*', (req, res) => {
    const filePath = join(baseDirectory, req.url);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('File not found');
        }
    });
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
