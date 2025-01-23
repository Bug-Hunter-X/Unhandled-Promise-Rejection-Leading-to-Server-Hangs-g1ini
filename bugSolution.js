const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(async () => {
    try {
      // Simulate an operation that might fail
      // const result = await someAsyncOperation();
      res.send('Hello!');
    } catch (error) {
      console.error('Error during request processing:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 5000);
}).catch(err => {
  console.error('Promise rejection caught:', err);
  res.status(500).send('Internal Server Error');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});