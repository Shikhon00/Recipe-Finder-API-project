const allcategory = () => {
  const outputValues = document.getElementById("randomApiDatas");
  outputValues.innerHTML = "";

  fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then((e) => e.json())
    .then((data) => {
      showCategory(data);
    });

  const showCategory = (data) => {
    const alldata = data.categories;

    alldata.map((data) => {
      const createElement = document.createElement("div");
      createElement.classList.add("apple");
      createElement.innerHTML = `
        <div class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <a href="category.html?id1=${data.idCategory}">
            <img src=${data.strCategoryThumb} class="w-full h-40 object-cover" alt="">
          </a>
          <div class="p-3 text-center">
            <h2 class="font-semibold text-lg">${data.strCategory}</h2>
          </div>
        </div>
      `;
      outputValues.appendChild(createElement);
    });
  };
};

allcategory();

getValuefunction = () => {
  const inputvalue = document.getElementById("inputvalues").value;
  const inputvalueRemoveal = document.getElementById("inputvalues");
  const outputValues = document.getElementById("outputValue");
  const categoriesSection = document.getElementById("categoriesSection");

  outputValues.innerHTML = "";

  // Hide categories when searching
  categoriesSection.style.display = "none";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`)
    .then((e) => e.json())
    .then((data) => {
      showingApidata(data);
    });

  showingApidata = (data) => {
    let apidata = data;

    if (apidata.meals != null) {
      apidata.meals.map((data) => {
        const createElement = document.createElement("div");
        createElement.classList.add("apple");
        createElement.innerHTML = `
          <div class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
            <a href="apifulldata.html?id=${data.idMeal}">
              <img src=${data.strMealThumb} class="w-full h-40 object-cover" alt="">
            </a>
            <div class="p-3 text-center">
              <h2 class="font-semibold text-lg">${data.strMeal}</h2>
            </div>
          </div>
        `;
        outputValues.appendChild(createElement);
      });
    } else {
      outputValues.innerHTML =
        "<p class='text-center text-gray-500 col-span-3'>No data found</p>";
    }
  };

  inputvalueRemoveal.value = "";
};

// Enter key search
const inputField = document.getElementById("inputvalues");
inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getValuefunction();
  }
});
