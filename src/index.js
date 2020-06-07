import { products } from "./sample_products";

console.log(products);

var items = $.map(products, function (item) {
  return (
    (document.getElementById("imageS").innerHTML = item.image),
    (document.getElementById("name").innerHTML = item.name),
    (document.getElementById("price").innerHTML = item.price + " " + "€" + "*"),
    (document.getElementById("oldPrice").innerHTML =
      item.oldPrice + " " + "€" + "*"),
    (document.getElementById("basePrice").innerHTML = item.params.basePrice)
  );
});
