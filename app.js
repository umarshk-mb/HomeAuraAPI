"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_connection_1 = __importDefault(require("./src/configs/db-connection"));
const categories_routes_1 = require("./src/routers/categories.routes");
const products_routes_1 = require("./src/routers/products.routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:4200/',
    methods: 'GET, POST, PUT, UPDATE, DELETE, HEAD, PATCH',
    credentials: true
}));
(0, db_connection_1.default)();
app.use('/categories', categories_routes_1.categoriesRouter);
app.use('/products', products_routes_1.productsRouter);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
