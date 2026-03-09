export default function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome-accent" aria-hidden="true" />
      <h1>Cook confidently with what you already have</h1>
      <p>
        Add ingredients from your kitchen and ChefIA will generate a practical recipe
        in seconds.
      </p>
      <ul className="welcome-features">
        <li>
          <span className="feature-icon" aria-hidden="true">&#9889;</span>
          Instant AI recipes
        </li>
        <li>
          <span className="feature-icon" aria-hidden="true">&#127860;</span>
          Use what you have
        </li>
        <li>
          <span className="feature-icon" aria-hidden="true">&#9889;</span>
          Zero food waste
        </li>
      </ul>
    </section>
  );
}
