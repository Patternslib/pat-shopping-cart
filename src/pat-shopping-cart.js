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
    parser.add_argument("action");
    parser.add_argument("id");
    parser.add_argument("keep");
    parser.add_argument("patterns");

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
                    } else this.processCart($el, options);
                } else if ("id" in options) {
                    if (this.isAddedToCart(options)) {
                        this.removeFromCart($el, options);
                    }
                    else this.addToCart($el, options);
                };
            }, this));
            if ("action" in options) {
                if (this.cartIsEmpty()) {
                    $el.addClass("is-empty");
                    $el.attr("disabled", "disabled");
                } else {
                    $el.addClass("has-items");
                };
            };
            if ("id" in options && this.isAddedToCart(options)) {
                $el.addClass("in-cart");
                if ($el.attr("type") == "checkbox") {
                    $el.attr("checked", "checked");
                    $el.parentsUntil("lable").each(function(index, elem) {
                        $(elem).removeClass("unchecked").addClass("checked");
                    });
                };
            };
            if ("keep" in options && options.keep.toLowerCase() == 'true') {
                options.keep = true;
            } else options.keep = false;
            if (!("patterns" in options)) options.patterns = "";
        },

        addToCart: function($el, options) {
            var cart = this.storage.get("cart");
            if (cart === null) {
                this.storage.set("cart", [options.id]);
                $(".pat-shopping-cart.is-empty").each(function(index) {
                    $(this).removeClass("is-empty").addClass("has-items");
                    $(this).removeAttr("disabled");
                });
            } else {
                cart.push(options.id);
                this.storage.set("cart", cart);
            }
            $el.addClass("in-cart");
        },

        removeFromCart: function($el, options) {
            var cart = this.storage.get("cart");
            if (cart.length === 1) {
                this.emptyCart();
            } else {
                var itemIndex = cart.indexOf(options.id);
                cart.splice(itemIndex, 1);
                this.storage.set("cart", cart);
            }
            $el.removeClass("in-cart");
            if ($el.attr("type") == "checkbox") {
                $el.parentsUntil("lable").each(function(index, elem) {
                    $(elem).removeClass("checked").addClass("unchecked");
                });
            };
        },

        isAddedToCart: function(options) {
            var cart = this.storage.get("cart");
            if (cart === null) {
                return false;
            } else if (cart.indexOf(options.id) > -1) {
                return true;
            } else return false;
        },

        emptyCart: function() {
            this.storage.remove("cart");
            $(".pat-shopping-cart.has-items").each(function(index) {
                $(this).removeClass("has-items");
                $(this).addClass("is-empty");
                $(this).attr("disabled", "disabled");
            });
            $(".pat-shopping-cart.in-cart").each(function(index) {
                $(this).removeClass("in-cart");
            });
        },

        cartIsEmpty: function($el, options) {
            console.log("empty");
            return (this.storage.get("cart") === null);
        },

        processCart: function($el, options) {
            var cart = this.storage.get("cart");

            if (!options.keep) this.emptyCart();

            var form = $(
                '<form action="'+options.action+'" class="'+options.patterns+'" method="post">'+
                    '<input name="shopping-cart" type="hidden" value="'+cart+'"/>'+
                '</form>'
            );

            registry.scan(form);
            form.submit();
        }

    };
    registry.register(shoppingCart);
}));
