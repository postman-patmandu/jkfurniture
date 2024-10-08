import path from 'path';
import express, { response } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import stripeRoutes from './routes/stripeRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import emailRoutes from './routes/emailRoutes.js';

const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

 app.use('/api/products', productRoutes);
 app.use('/api/users', userRoutes);
 app.use('/api/orders', orderRoutes);
 app.use('/api/stripe', stripeRoutes);
 app.use('/api/upload', uploadRoutes);
 app.use('/api/contact', emailRoutes);

 app.get('./api/config/paypal', (req, res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID }));

 const __dirname = path.resolve();
 app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

 if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static(path.join(__dirname, '/frontend/build')));

    // any route that is not api will be redirected to index.html
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
 } else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
 }

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.use(notFound);
app.use(errorHandler);

 app.listen(port, () => console.log(`Server is running in ${process.env.NODE_ENV} on ${port}`));