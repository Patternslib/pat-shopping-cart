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
        factory(root.patterns, root.patterns.Parser, root.patterns.store);
    }
}(this, function(registry, Parser, store) {
    "use strict";

    var parser = new Parser("shopping-cart");
    parser.add_argument("id");
    parser.add_argument("action");

    // We now create an object which encapsulates the pattern's methods
    var shoppingCart= {
        name: "shopping-cart",
        trigger: ".pat-shopping-cart",
        storage: store.local("pat-shopping-cart"),

        init: function($el, opts) {
            var options = parser.parse($el, opts);
            $el.click($.proxy(function() {
                if ("action" in options) {
                    if (options.action == "empty") {
                        this.emptyCart();
                    } else this.processCart(options);
                } else if ("id" in options) {
                    if (this.isAddedToCart(options)) {
                        this.removeFromCart($el, options);
                    }
                    else {
                        this.addToCart($el, options);
                    }
                }
            }, this));
            if ("action" in options) {
                if (this.cartIsEmpty()) {
                    $el.addClass("is-empty");
                } else {
                    $el.addClass("has-items");
                }
            }
            if ("id" in options && this.isAddedToCart(options)) $el.addClass("in-cart");
        },

        addToCart: function($el, options) {
            var downloads = this.storage.get("downloads");
            if (downloads === null) {
                this.storage.set("downloads", [options.id]);
                $(".pat-shopping-cart.is-empty").each(function(index) {
                    $(this).removeClass("is-empty");
                    $(this).addClass("has-items");
                });
            } else {
                downloads.push(options.id);
                this.storage.set("downloads", downloads);
            }
            $el.addClass("in-cart");
        },

        removeFromCart: function($el, options) {
            var downloads = this.storage.get("downloads");
            if (downloads.length === 1) {
                this.emptyCart();
            } else {
                var itemIndex = downloads.indexOf(options.id);
                downloads.splice(itemIndex, 1);
                this.storage.set("downloads", downloads);
            }
            $el.removeClass("in-cart");
        },

        isAddedToCart: function(options) {
            var downloads = this.storage.get("downloads");
            if (downloads === null) {
                return false;
            } else if (downloads.indexOf(options.id) > -1) {
                return true;
            } else return false;
        },

        emptyCart: function() {
            this.storage.remove("downloads");
            $(".pat-shopping-cart.has-items").each(function(index) {
                $(this).removeClass("has-items");
                $(this).addClass("is-empty");
            });
            $(".pat-shopping-cart.in-cart").each(function(index) {
                $(this).removeClass("in-cart");
            });
        },

        cartIsEmpty: function($el, options) {
            console.log("empty");
            return (this.storage.get("downloads") === null);
        },

        processCart: function(options) {
            var action = options.action;
            var downloads = this.storage.get("downloads");

            // Note: we assume success and clear the cart
            this.emptyCart();

            $("#shopping-cart").remove();
            $("body").append(
                '<form id="shopping-cart" action="'+action+'" method="post">'+
                    '<input name="shopping-cart" type="hidden" value="'+downloads+'"/>'+
                    '</form>'
            );
            $("#shopping-cart").submit();
        }

    };
    registry.register(shoppingCart);
}));
