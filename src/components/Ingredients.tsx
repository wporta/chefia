type IngredientsProps = {
  ingredients: string[];
  handleGetRecipe: () => void;
  removeIngredient: (ingredient: string) => void;
  isLoading: boolean;
};

export default function Ingredients({
  ingredients,
  handleGetRecipe,
  removeIngredient,
  isLoading,
}: IngredientsProps) {
  const ingredientListItems = ingredients.map((ingredient, index) => (
    <li
      key={ingredient}
      className="ingredient-item"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="ingredient-label">
        <span className="ingredient-dot" aria-hidden="true" />
        <span>{ingredient}</span>
      </div>
      <button
        type="button"
        className="ghost-button"
        onClick={() => removeIngredient(ingredient)}
        aria-label={`Remove ${ingredient}`}
        disabled={isLoading}
      >
        &times;
      </button>
    </li>
  ));

  return (
    <section className="ingredients-panel" aria-live="polite">
      <div className="ingredients-header">
        <h2>Ingredients on hand</h2>
        <span className="ingredients-count">{ingredients.length}</span>
      </div>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientListItems}
      </ul>
      {ingredientListItems.length > 2 ? (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your ingredient list.</p>
          </div>
          <button type="button" onClick={handleGetRecipe} disabled={isLoading}>
            {isLoading ? 'Generating...' : 'Get a recipe'}
          </button>
        </div>
      ) : null}
    </section>
  );
}
