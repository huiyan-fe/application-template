const extendConfig = require('./eslintrc.json');

module.exports = {
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/react',
    ],
    globals: {
        'BMapGL': true,
        'mapvgl': true,
        'mapvthree': true,
    },
    ...extendConfig,
};
