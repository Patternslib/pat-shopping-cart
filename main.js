require.config({
    baseUrl: '../src',
    paths: {
        "dropzone": "bower_components/dropzone/downloads/dropzone",
        "jquery": "bower_components/jquery/jquery",
        "pat-parser": "bower_components/patternslib/src/core/parser",
        "pat-registry": "bower_components/patternslib/src/core/registry",
        "patterns": "bower_components/patternslib/bundle",
        "text": "bower_components/requirejs-text/text",
        "underscore": "bower_components/underscore/underscore",
        "pat-logger": "bower_components/patternslib/src/core/logger",
        "pat-utils": "bower_components/patternslib/src/core/utils",
        "pat-compat": "bower_components/patternslib/src/core/compat",
        "pat-store": "bower_components/patternslib/src/core/store",
        "pat-jquery-ext": "bower_components/patternslib/src/core/jquery-ext",
        "logging": "bower_components/logging/src/logging",
    },
});
require(["pat-registry", "pat-shopping-cart"], function(registry) {
    registry.init();
    return;
});
