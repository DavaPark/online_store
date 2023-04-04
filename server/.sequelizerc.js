const path = require('path');
const {config} = require("dotenv");

module.exports = {
    'config': path.resolve('config', 'config.json'),
    'models-path': path.resolve('models'),
    'seeders-path': path.resolve('seeders'),
    'migration-path': path.resolve('migration')
};