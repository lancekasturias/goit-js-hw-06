const categoriesList = document.querySelector("#categories");

const categoriesCount = categoriesList.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categoriesCount}`);

categoriesList.querySelectorAll("li.item").forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;

  const elementsCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
