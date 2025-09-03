const params = new URLSearchParams(window.location.search);
const mealId = params.get("id1");
console.log("Meal ID:", mealId);

const getCategory = (mealId) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then((res) => res.json())
    .then((data) => {
      const datas = data.categories;
      console.log(datas);

      const match = datas.find((item) => item.idCategory == mealId);
      if (match) {
        const catagoy = document.getElementById("mealDetails");
        const createElement = document.createElement("div");
        createElement.classList.add("apple");
        createElement.innerHTML = `
              <h1 class="text-3xl font-bold mb-4">${match.strCategory}</h1>
              <img src="${match.strCategoryThumb}" class="rounded-xl mb-4 w-full max-h-[400px] object-cover"/>
              <p class="mt-2 text-gray-700">${match.strCategoryDescription}</p>
            `;

        catagoy.appendChild(createElement);
      }
    });
};
getCategory(mealId);
