import { products } from "./sample_products";

const widget = document.createElement("div");
widget.setAttribute("class", "widget");

const header = document.createElement("h1");
$("h1").html("Unsere Empfehlungen für Sie");
widget.appendChild(header);

const result = [[], [], []];
const productsParts = products.length / 3;

for (let line = 0; line < 3; line++) {
  for (let i = 0; i < productsParts; i++) {
    const value = products[i + line * productsParts];
    if (!value) continue;
    result[line].push(value);
  }
}
$.map(result[0], function (item) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "image-container");

  const image = document.createElement("img");
  image.setAttribute("class", "image");
  image.setAttribute("src", item.imageS);
  imageContainer.appendChild(image);

  const iTag = document.createElement("p");
  const likeCount = item.params.likeCount;
  // likeCount ? iTag.setAttribute("class","far fa-heart") : iTag.setAttribute("class","heart")
  iTag.setAttribute("class", "far fa-heart");
  iTag.textContent = item.params.likeCount ? " " + likeCount : "";
  imageContainer.appendChild(iTag);

  const disCount = document.createElement("p");
  item.oldPrice
    ? disCount.setAttribute("class", "discount")
    : disCount.setAttribute("class", "nondiscount");
  disCount.textContent = item.oldPrice
    ? "-" +
      (((item.oldPrice - item.price) * 100) / item.oldPrice).toFixed(0) +
      "%"
    : "";
  imageContainer.appendChild(disCount);

  const nameContainer = document.createElement("div");
  nameContainer.setAttribute("class", "name-container");
  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = item.name;
  nameParagraph.setAttribute("class", "name");
  nameContainer.appendChild(nameParagraph);

  const descriptionContainer = document.createElement("div");
  descriptionContainer.setAttribute("class", "description-container");
  const descParagraph = document.createElement("p");
  const land = item.params.land + " | ";
  const region = item.params.region + " | ";
  descParagraph.textContent =
    (item.params.land ? land : "") +
    (item.params.region ? region : "") +
    item.params.art;
  descParagraph.setAttribute("class", "desc");
  descriptionContainer.appendChild(descParagraph);

  const priceContainer = document.createElement("div");
  priceContainer.setAttribute("class", "price-container");

  const pricesandOld = document.createElement("div");
  pricesandOld.setAttribute("class", "priceandOld");
  priceContainer.appendChild(pricesandOld);

  const prices = document.createElement("p");
  prices.setAttribute("class", "prices");
  const oldPrices = document.createElement("p");
  oldPrices.setAttribute("class", "oldPrices");
  prices.textContent = item.price + " " + "€" + "*" + " ";
  oldPrices.textContent = item.oldPrice ? item.oldPrice + " " + "€" + "*" : "";
  pricesandOld.appendChild(prices);
  pricesandOld.appendChild(oldPrices);

  const basePrice = document.createElement("p");
  basePrice.setAttribute("class", "basePrice");
  basePrice.textContent = item.params.basePrice;
  priceContainer.appendChild(basePrice);

  card.appendChild(imageContainer);
  card.appendChild(nameContainer);
  card.appendChild(descriptionContainer);
  card.appendChild(priceContainer);

  widget.appendChild(card);
});

document.body.appendChild(widget);
