import express from 'express';

const app = express();

const PORT = process.env.PORT || 3040;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`);
});