import { products } from "./sample_products";
import { createCard } from "./create-widget";
import { splitProductsIntoThreeParts } from "./util";
import { createTitle } from "./create-title";

const title = createTitle();

document.body.appendChild(title);

const result = splitProductsIntoThreeParts(products);

result.map((productsForWidget) => {
  const widget = document.createElement("div");
  widget.setAttribute("class", "widget");
  $.map(productsForWidget, function (item) {
    const card = createCard(item);
    widget.appendChild(card);
  });
  document.body.appendChild(widget);
});
