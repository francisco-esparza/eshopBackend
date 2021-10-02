const { validate, isNumber } = require('../helpers/validators.helper');
const { getProducts, getProduct, getProductsForCategory } = require('../models/products.model');

const getListProducts = async(req, res) => {
    const { OFFSET } = req.query;
    
    if (validate(OFFSET) && isNumber(OFFSET)) {
        try {
            const products = await getProducts(parseInt(OFFSET));
            res.status(200).json({
                status: 'success',
                data: products,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                msj: 'An error occurred while getting the data',
                error: error.message
            });
        }
    } else {
        res.status(400).json({
            status: 'fail',
            msj: 'sent parameters are not valid!'
        });
    }    
}

const getDetailProduct = async(req, res) => {
    const { ID_PRODUCT } = req.query;

    if (validate(ID_PRODUCT) && isNumber(ID_PRODUCT)) {
        try {

            const product = await getProduct(parseInt(ID_PRODUCT));
            res.status(200).json({
                status: 'success',
                data: product
            })
            
        } catch (error) {
            res.status(500).json({
                status: 'error',
                msj: 'An error occurred while getting the data',
                error: error.message
            });
        }
    } else {
        res.status(400).json({
            status: 'fail',
            msj: 'sent parameters are not valid!'
        });
    }
}

const getListProductsForCategory = async(req, res) => {
    const { NAME_CATEGORY, OFFSET } = req.query;
    if (validate(NAME_CATEGORY) &&
        validate(OFFSET) && isNumber(OFFSET)
    ) {
        try {
            const products = await getProductsForCategory(NAME_CATEGORY.trim(), parseInt(OFFSET) );
            res.status(200).json({
                status: 'success',
                data: products
            })
        } catch (error) {
            res.status(500).json({
                status: 'error',
                msj: 'An error occurred while getting the data',
                error: error.message
            });
        }
    } else {
        res.status(400).json({
            status: 'fail',
            msj: 'sent parameters are not valid!'
        });
    }
}

module.exports = {
    getListProducts,
    getDetailProduct,
    getListProductsForCategory
}