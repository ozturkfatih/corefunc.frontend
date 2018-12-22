const del = require('del');

module.exports = (gulp, paths, $, _) => {
    return del([
        _.files(paths.public), 
        _.files(paths.public.assets, _.NOT)
    ]);
};