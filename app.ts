import express from 'express';
import connectDB from './src/configs/db-connection';
import { categoriesRouter } from './src/routers/categories.routes';
import { productsRouter } from './src/routers/products.routes';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors
    ({
        origin: 'http://localhost:4200',
        methods: 'GET, POST, PUT, DELETE, HEAD, PATCH',
        credentials: true
    })
);


connectDB();
app.use('/categories', categoriesRouter)
app.use('/products', productsRouter)



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})

// Allowing local ports for development purpose, later need to change.