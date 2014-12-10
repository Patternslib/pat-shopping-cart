(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // Make this module AMD (Asynchronous Module Definition) compatible, so
        // that it can be used with Require.js or other module loaders.
        define([
            "pat-registry",
            "pat-parser",
            "pat-store"
        ], function() {
            return factory.apply(this, arguments);
        });
    } else {
        // A module loader is not available. In this case, we need the
        // patterns library to be available as a global variable "patterns"
        factory(root.patterns, root.patterns.Parser, root.patterns.store);
    }
}(this, function(registry, Parser, store) {
    "use strict";

    // We instantiate a new Parser instance, which will parse HTML markup
    // looking for configuration settings for this pattern.
    //
    // This example pattern's name is pat-colorchanger. It is activated on a DOM
    // element by giving the element the HTML class "pat-colorchanger".
    //
    // The pattern can be configured by specifying an HTML5 data attribute
    // "data-pat-colorchanger" which contains the configuration parameters
    // Only configuration parameters specified here are valid.
    //
    // For example:
    //      <p class="pat-colorchanger" data-pat-colorchanger="color: blue">Hello World</p>

    var parser = new Parser("example");
    parser.add_argument("color", "red"); // A configuration parameter and its default value.

    // We now create an object which encapsulates the pattern's methods
    var example= {
        name: "example",
        trigger: ".pat-colorchanger",

        init: function patExampleInit($el, opts) {
            var options = parser.parse($el, opts);  // Parse the DOM element to retrieve the
            // configuration settings.
            setTimeout($.proxy(function () {
                this.setColor($el, options);
            }, this), 3000);
        },

        setColor: function patExampleSetColor($el, options) {
            $el.css("color", options.color);
        }
    };
    // Finally, we register the pattern object in the registry.
    registry.register(example);
}));
