// /* eslint-disable */
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.status(401).json({
            status: 'fail',
            data: {
                bearerToken: 'The bearerToken is required.',
            },
        });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) {
            return res.status(403).json({
                status: 'fail',
                data: {
                    refreshToken: 'It wasn\'t possible to verify the refreshToken.',
                },
            });
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;