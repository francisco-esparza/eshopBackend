const Products = require("../schemas/products.schema")

const getProducts = async(OFFSET) => {
    try {
        const result = await Products.findAll({ offset: OFFSET, limit: 9 });
        return result;
    } catch (error) {
        throw new Error(error);   
    } 
}

const getProduct = async(ID_PRODUCT) => {
    try {
        const result = await Products.findOne({ where: { IdProduct: ID_PRODUCT } });
        return result;
    } catch (error) {
        throw new Error(error); 
    }
}

const getProductsForCategory = async(NAME_CATEGORY, OFFSET) => {
    try {
        const result = await Products.findAll({
            where: { Departament: NAME_CATEGORY },
            limit: 9,
            offset: OFFSET
        });

        return result;
    } catch (error) {
        throw new Error(error); 
    }
}

module.exports = {
    getProduct,
    getProducts,
    getProductsForCategory
}