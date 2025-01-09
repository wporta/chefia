export default function Ingredients({ ingredients, handleGetRecipe }) {
  const ingredientListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section>
      <h2>Ingredients on hands:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientListItems}
      </ul>
      {ingredientListItems.length > 3 ? (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredient.</p>
          </div>
          <button onClick={handleGetRecipe}>Get a recipe</button>
        </div>
      ) : null}
    </section>
  );
}
