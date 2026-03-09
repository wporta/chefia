export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <p className="footer-brand">
          ChefIA <span className="footer-dot" aria-hidden="true" /> Cook smarter, waste less.
        </p>
        <p className="footer-copy">&copy; {currentYear} ChefIA. All rights reserved.</p>
      </div>
    </footer>
  );
}
