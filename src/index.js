import { products } from "./sample_products";

var items = $.map(products, function (item) {
  var div = document.createElement("div");
  div.setAttribute("class", "container");
  document.body.appendChild(div);

  var image = document.createElement("img");
  image.setAttribute("src", item.imageS);
  document.body.appendChild(image);

  var p = document.createElement("p");
  p.textContent = item.name;
  div.setAttribute("class", "name");
  document.body.appendChild(p);

  var p = document.createElement("p");
  p.textContent = item.price + " " + "€" + "*";
  p.setAttribute("class", "price");
  document.body.appendChild(p);

  var p = document.createElement("p");
  if (item.oldPrice) {
    p.textContent = item.oldPrice + " " + "€" + "*";
  } else {
    p.textContent = "";
  }
  p.setAttribute("class", "oldPrice");
  document.body.appendChild(p);

  var p = document.createElement("p");
  p.textContent = item.params.basePrice;
  p.setAttribute("class", "basePrice");
  document.body.appendChild(p);
});
document.write(items);
