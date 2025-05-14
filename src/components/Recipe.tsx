import ReactMarkdown from 'react-markdown';

export default function Recipe({ recipe, newRecipe }) {
  return (
    <>
      <section className="suggested-recipe-container">
        <h1>Recipe</h1>
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </section>
      <div className="new-recipe-button-container">
        <button className="new-recipe-button" onClick={newRecipe}>
          New Recipe
        </button>
      </div>
    </>
  );
}
