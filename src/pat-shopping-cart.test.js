import "regenerator-runtime/runtime"; // needed for ``await`` support
import "./pat-shopping-cart";
import registry from "@patternslib/patternslib/src/core/registry";
import utils from "@patternslib/patternslib/src/core/utils";

describe("pat-shopping-cart", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
    });

    it("is initialized correctly", async () => {
        document.body.innerHTML = `
            <ul>
              <li
                class="pat-shopping-cart"
                data-pat-shopping-cart="id: 18cc5d165ca34709ad4fccbe496fa155"
              >
                1
              </li>
              <li
                class="pat-shopping-cart"
                data-pat-shopping-cart="id: 56097ab0afce4aa5846a80773228cc7e"
              >
                2
              </li>
              <li
                class="pat-shopping-cart"
                data-pat-shopping-cart="id: 76774c2217a44e2bb47971de51d02bfb"
              >
                3
              </li>
            </ul>
            <div
              class="pat-shopping-cart"
              data-pat-shopping-cart="action: /download-zip"
            >
              Download as zip
            </div>
            <div class="pat-shopping-cart" data-pat-shopping-cart="action: /send-email">
              Send as email
            </div>
            <div class="pat-shopping-cart" data-pat-shopping-cart="action: empty">
              Empty cart
            </div>
        `;

        registry.scan(document.body);
        await utils.timeout(1);

        const items = document.querySelectorAll("li");
        const actions = document.querySelectorAll("div");

        expect(items[0].classList.contains("in-cart")).toBe(false);
        expect(items[1].classList.contains("in-cart")).toBe(false);
        expect(items[2].classList.contains("in-cart")).toBe(false);

        expect(actions[0].classList.contains("is-empty")).toBe(true);
        expect(actions[1].classList.contains("is-empty")).toBe(true);
        expect(actions[2].classList.contains("is-empty")).toBe(true);

        items[1].click();

        expect(items[0].classList.contains("in-cart")).toBe(false);
        expect(items[1].classList.contains("in-cart")).toBe(true);
        expect(items[2].classList.contains("in-cart")).toBe(false);

        expect(actions[0].classList.contains("has-items")).toBe(true);
        expect(actions[1].classList.contains("has-items")).toBe(true);
        expect(actions[2].classList.contains("has-items")).toBe(true);
    });
});
