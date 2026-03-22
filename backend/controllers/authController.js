const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authService = require('../services/authService');

/**
 * @description 
 * req.body: { name: string, email: string, password: string }
 * response: { user: User.toPublicJSON(), token: string } 
 */
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        const result = await authService.register(name, email, password);
        res.json(result);
    } catch (apiError) {
        res.status(apiError.statusCode || 500).send(apiError.message);
    }
};

/**
 * @description
 * req.body: { email: string, password: string }
 * response: { user: User.toPublicJSON(), token: string } 
 */
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const result = await authService.login(email, password);
        res.json(result);
    } catch (apiError) {
        res.status(apiError.statusCode || 500).send(apiError.message);
    }
};

/**
 * @description
 * req.body: { id: string }
 * response: { user: User.toPublicJSON() } 
 */
exports.getMe = async (req, res) => {
    try {
        const { id } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new APIError('Invalid user ID', 400);
        }

        const user = await User.findById(id);
        res.json(user.toPublicJSON());
    } catch (apiError) {
        res.status(apiError.statusCode || 500).send(apiError.message);
    }
};

exports.updateMe = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.findByIdAndUpdate(
            req.user.id,
            { $set: { name, email } },
            { new: true }
        ).select('-passwordHash');
        res.json(user);
    } catch (apiError) {
        res.status(apiError.statusCode || 500).send(apiError.message);
    }
};