const params = new URLSearchParams(window.location.search);
const mealId = params.get("id");
console.log("Meal ID:", mealId);

const fullInfo = (mealId) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data.meals) {
        document.getElementById("mealDetails").innerHTML =
          "<p>No meal found</p>";
        return;
      }

      const meal = data.meals[0];
      console.log(meal);

      const detailsDiv = document.getElementById("mealDetails");

      detailsDiv.innerHTML = `
              <h1 class="text-3xl font-bold mb-4">${meal.strMeal}</h1>
              <img src="${meal.strMealThumb}" class="rounded-xl mb-4 w-full max-h-[400px] object-cover"/>
              <p><strong>Category:</strong> ${meal.strCategory}</p>
              <p><strong>Area:</strong> ${meal.strArea}</p>
              <h2 class="text-2xl font-semibold mt-4">Instructions</h2>
              <p class="mt-2 text-gray-700">${meal.strInstructions}</p>
            `;
    });
};

fullInfo(mealId);
