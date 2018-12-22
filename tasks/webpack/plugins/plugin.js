const webpack = require('webpack');
module.exports = (env, envs) => {
    if (!envs) { 
        return;
    }

    const defaultConfig =new webpack.ProvidePlugin({
        "React": "react",
    });

    const plugin = {
        [envs.production]: defaultConfig,
        [envs.development]: defaultConfig,
    };

    return plugin[env];
};
