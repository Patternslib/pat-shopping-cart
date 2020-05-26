import $ from "jquery";
import Base from "patternslib/src/core/base";
import Parser from "patternslib/src/core/parser";
import registry from "patternslib/src/core/registry";
import store from "patternslib/src/core/store";


const parser = new Parser("shopping-cart");
parser.add_argument("action");
parser.add_argument("id");
parser.add_argument("contents");
parser.add_argument("patterns");


export default Base.extend({
    name: "shopping-cart",
    trigger: ".pat-shopping-cart",
    storage: store.local("pat-shopping-cart"),

    init: function($el, opts) {
        var options = parser.parse($el, opts);
        if ($el.attr("type") == 'checkbox') {
            $el.bind("change", $.proxy(function(e) {
                if ("id" in options) {
                    if (this.isAddedToCart(options)) {
                        this.removeFromCart($el, options);
                    }
                    else this.addToCart($el, options);
                };
            }, this));
        } else {
            $el.bind("click", $.proxy(function(e) {
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
        };

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
        if ("contents" in options && options.contents.toLowerCase() == 'keep') {
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
        $el.removeClass("in-cart");
        if (cart.length === 1) {
            this.emptyCart();
        } else {
            var itemIndex = cart.indexOf(options.id);
            cart.splice(itemIndex, 1);
            this.storage.set("cart", cart);
        }
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
        $(".pat-shopping-cart.has-items").each(function(index) {
            $(this).removeClass("has-items");
            $(this).addClass("is-empty");
        });
        var cartItems = $(".pat-shopping-cart.in-cart");
        for (var i = 0; i < cartItems.length; i++) {
            var item = $(cartItems[i]);
            var opts = parser.parse(item, item.data());
            this.removeFromCart(item, opts);
            if (item.attr("type") == "checkbox") {
                item.prop("checked", false).trigger("change");
            };
        };

        this.storage.remove("cart");
    },

    cartIsEmpty: function($el, options) {
        return (this.storage.get("cart") === null);
    },

    processCart: function($el, options) {
        var cart = this.storage.get("cart");
        var patternsList = options.patterns.split(' ');
        var patternsDataStr = '';

        if (!options.keep) this.emptyCart();

        for (var i = 0; i < patternsList.length; i++) {
            var patternDataId = 'pat-shopping-cart-' + patternsList[i].replace('pat-', '');
            var patternData = $el.data(patternDataId);
            patternsDataStr += 'data-' + patternsList[i] + '=' + '"' + patternData +'"';
        };

        var form = $(
            '<form action="'+options.action+'" class="'+options.patterns+'" '+patternsDataStr+' method="post">'+
                '<input name="shopping-cart" type="hidden" value="'+cart+'"/>'+
            '</form>'
        );

        registry.scan(form);
        $('body').append(form);
        form.submit();
    }

});
