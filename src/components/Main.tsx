import { useState } from 'react';
import Ingredients from './Ingredients';
import Recipe from './Recipe';
import loading from '../assets/loading.gif';
import Welcome from './Welcome';

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState('');
  const [showRecipe, setShowRecipe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function getRecipe() {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3333/getrecipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ingredients),
      });

      if (!response.ok) {
        throw new Error('HTTP Error');
      }

      const recipeMarkdown = await response.text();
      setRecipe(recipeMarkdown);
    } catch (error) {
      console.error('Failed to fetch the recipe:', error);
      return null;
    }
    setIsLoading(false);
  }

  function addIngredient(formData: FormData) {
    const newIngredient = formData.get('ingredient') as string;
    if (!newIngredient) return;
    if (!ingredients.includes(newIngredient)) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
  }

  async function handleGetRecipe() {
    await getRecipe();
    setIngredients([]);
    setShowRecipe((prevState) => !prevState);
  }

  function handleNewRecipe() {
    setShowRecipe((prevState) => !prevState);
    setRecipe('');
  }

  return (
    <main>
      <Welcome />
      {!showRecipe ? (
        <>
          <form className="add-ingredient-form" action={addIngredient}>
            <input
              aria-label="Add ingredient"
              type="text"
              placeholder="e.g. oregano"
              name="ingredient"
            />
            <button>Add Ingredient</button>
          </form>
          <p className="help-msg">Enter a least 3 ingredients, one by one.</p>
        </>
      ) : null}

      {ingredients.length > 0 ? (
        <Ingredients
          ingredients={ingredients}
          handleGetRecipe={handleGetRecipe}
        />
      ) : null}
      {isLoading ? (
        <div className="loading">
          <h3>Generating Recipe....</h3>
          <span>
            <img src={loading} />
          </span>
        </div>
      ) : null}
      {showRecipe ? (
        <Recipe recipe={recipe} newRecipe={handleNewRecipe} />
      ) : null}
    </main>
  );
}
