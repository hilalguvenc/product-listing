import { products } from "./sample_products";

var items = $.map(products, function (item) {
  var div = document.createElement("div");
  div.setAttribute("class", "container");
  document.body.appendChild(div);

  // var i = document.createElement("i");
  // i.setAttribute("class", "fas fa-angle-left");
  // document.body.appendChild(i);

  // var i = document.createElement("i");
  // i.setAttribute("class", "fas fa-angle-right");
  // document.body.appendChild(i);

  var image = document.createElement("img");
  image.setAttribute("class", "image");
  image.setAttribute("src", item.imageS);
  div.appendChild(image);

  var i = document.createElement("i");
  if (item.params.likeCount) {
    i.textContent = item.params.likeCount;
    div.appendChild(i);
  }
  i.setAttribute("class", "far fa-heart");

  var p = document.createElement("p");
  p.textContent = item.name;
  p.setAttribute("class", "name");
  div.appendChild(p);

  var p = document.createElement("p");
  if (item.params.land) {
    p.textContent = item.params.land;
  } else {
    p.textContent = " ";
  }
  p.setAttribute("class", "land");
  div.appendChild(p);

  var p = document.createElement("p");
  if (item.params.region) {
    p.textContent = item.params.region;
  } else {
    p.textContent = " ";
  }
  p.setAttribute("class", "region");
  div.appendChild(p);

  var p = document.createElement("p");
  if (item.params.art) {
    p.textContent = item.params.art;
  } else {
    p.textContent = " ";
  }
  p.setAttribute("class", "art");
  div.appendChild(p);

  var span = document.createElement("span");
  span.setAttribute("class", "prices");
  div.appendChild(span);

  var p = document.createElement("p");
  p.textContent = item.price + " " + "€" + "*";
  p.setAttribute("class", "prices");
  span.appendChild(p);

  var p = document.createElement("p");
  if (item.oldPrice) {
    p.textContent = item.oldPrice + " " + "€" + "*";
  } else {
    p.textContent = "";
  }
  p.setAttribute("class", "oldPrice");
  span.appendChild(p);

  var p = document.createElement("p");
  p.textContent = item.params.basePrice;
  p.setAttribute("class", "basePrice");
  div.appendChild(p);
});
document.write(items);
