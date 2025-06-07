import express from 'express';
const app = express();
const PORT = Number(process.env.PORT) || 8000;
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!'
  });
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
