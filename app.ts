import express from 'express';
import connectDB from './src/configs/db-connection';
import routes from './src/routers/decor-categories.routes'

const app = express();
app.use(express.json());




connectDB();
app.use('/categories', routes)




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
})
