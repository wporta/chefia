import ReactMarkdown from 'react-markdown';

type RecipeProps = {
  recipe: string;
  newRecipe: () => void;
};

export default function Recipe({ recipe, newRecipe }: RecipeProps) {
  return (
    <section className="recipe-view" aria-label="Generated recipe">
      <div className="recipe-badge">Chef's Pick</div>
      <section className="suggested-recipe-container">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </section>

      <div className="new-recipe-button-container">
        <button className="new-recipe-button" type="button" onClick={newRecipe}>
          <span className="new-recipe-icon" aria-hidden="true">&#8635;</span>
          Start over
        </button>
      </div>
    </section>
  );
}
