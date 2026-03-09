import logo from '../assets/chefia-logo.png';

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-logo-wrapper">
        <img src={logo} alt="ChefIA logo" />
      </div>
      <div className="header-text">
        <h1>ChefIA</h1>
        <span className="header-tagline">AI-powered kitchen assistant</span>
      </div>
    </header>
  );
}
