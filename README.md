**pat-shopping-cart**

Add a value to a "shopping cart" and process this "shopping cart".

This can be used to implement a bulk download feature e.g.

    <a class="pat-shopping-cart" data-pat-shopping-cart="id: 0d599f0ec05c3bda8c3b8a68c32a1b47">
      Add this item for download
    </a>

When an item is added to the cart, the element is given the .in-cart css class.

A .pat-shopping-cart element is also used for processing the cart.
A list of the id values is submitted to the action URL using the POST method as a comma separated string.

    <a class="pat-shopping-cart" data-pat-shopping-cart="action: /download-as-zip">
      Download them here.
    </a>

The shopping cart action element gets the .has-items css class when there are items in the cart, and .is-empty otherwise.
