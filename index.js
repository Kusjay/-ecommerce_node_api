const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected successfully!'))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/product', productRoute);

const PORT = process.env.PORT;

app.listen(PORT || 9000, () => {
  console.log(`Backend server running on port ${PORT}`);
});
