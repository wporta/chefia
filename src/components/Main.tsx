import { useState } from 'react';
import Ingredients from './Ingredients';
import Recipe from './Recipe';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipe, setRecipe] = useState('');

  async function getRecipe() {
    try {
      const response = await fetch('http://localhost:3333/getrecipe');
      if (!response.ok) {
        throw new Error('HTTP Error');
      }

      const recipeMarkdown = await response.text();
      setRecipe(recipeMarkdown);
    } catch (error) {
      console.error('Failed to fetch the recipe:', error);
      return null;
    }
  }

  function addIngredient(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function handleGetRecipe() {
    setShowRecipe((prevState) => !prevState);
    await getRecipe();
  }

  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          aria-label="Add ingredient"
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>

      {ingredients.length > 0 ? (
        <Ingredients
          ingredients={ingredients}
          handleGetRecipe={handleGetRecipe}
        />
      ) : null}
      {showRecipe ? <Recipe recipe={recipe} /> : null}
    </main>
  );
}
