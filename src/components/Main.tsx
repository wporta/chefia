import { useState } from 'react';
import Ingredients from './Ingredients';
import Recipe from './Recipe';
import Welcome from './Welcome';

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState('');
  const [showRecipe, setShowRecipe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function getRecipe(): Promise<string | null> {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const apiUrl = import.meta.env.VITE_API_URL ?? 'https://chefia-api.wporta.org/getrecipe';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredients),
      });

      if (!response.ok) {
        throw new Error('Unable to generate recipe right now.');
      }

      const recipeMarkdown = await response.text();
      return recipeMarkdown;
    } catch (error) {
      console.error('Failed to fetch the recipe:', error);
      setErrorMessage(
        'We could not generate a recipe right now. Please try again in a moment.',
      );
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  function addIngredient(formData: FormData) {
    const rawIngredient = formData.get('ingredient');
    const newIngredient = typeof rawIngredient === 'string' ? rawIngredient.trim() : '';
    if (!newIngredient) return;
    if (
      !ingredients.some(
        (ingredient) => ingredient.toLowerCase() === newIngredient.toLowerCase(),
      )
    ) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
  }

  function removeIngredient(ingredientToRemove: string) {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient !== ingredientToRemove),
    );
  }

  async function handleGetRecipe() {
    if (isLoading) return;
    const recipeMarkdown = await getRecipe();
    if (recipeMarkdown === null) return;
    setRecipe(recipeMarkdown);
    setIngredients([]);
    setShowRecipe(true);
  }

  function handleNewRecipe() {
    setShowRecipe(false);
    setRecipe('');
    setErrorMessage('');
  }

  return (
    <main className="app-main">
      <Welcome />
      {!showRecipe ? (
        <>
          <form className="add-ingredient-form" action={addIngredient}>
            <div className="input-wrapper">
              <span className="input-icon" aria-hidden="true">&#128269;</span>
              <input
                aria-label="Add ingredient"
                type="text"
                placeholder="e.g. oregano"
                name="ingredient"
                disabled={isLoading}
              />
            </div>
            <button type="submit" disabled={isLoading}>
              Add ingredient
            </button>
          </form>
          <p className="help-msg">Add at least 3 ingredients, one by one.</p>
        </>
      ) : null}

      {ingredients.length > 0 ? (
        <Ingredients
          ingredients={ingredients}
          handleGetRecipe={handleGetRecipe}
          removeIngredient={removeIngredient}
          isLoading={isLoading}
        />
      ) : null}

      {errorMessage ? (
        <div className="error-msg" role="alert">
          <span className="error-icon" aria-hidden="true">&#9888;</span>
          <p>{errorMessage}</p>
        </div>
      ) : null}

      {isLoading ? (
        <div className="loading" role="status" aria-live="polite" aria-busy="true">
          <div className="loading-spinner" aria-hidden="true" />
          <h3>Generating your recipe...</h3>
          <p className="loading-hint">This usually takes a few seconds</p>
        </div>
      ) : null}
      {showRecipe ? (
        <Recipe recipe={recipe} newRecipe={handleNewRecipe} />
      ) : null}
    </main>
  );
}
