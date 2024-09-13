export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export const Header = () => {
  return (
    <header>
      <h1>My Website</h1>
      <Navigation />
    </header>
  );
};

export const Hero = () => {
  return (
    <section>
      <h2>Welcome to Our Website!</h2>
      <p>This is the hero section with some introductory text.</p>
    </section>
  );
};

export const Services = () => {
  return (
    <section>
      <h2>Our Services</h2>
      <p>We offer a variety of services to meet your needs.</p>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 My Website. All rights reserved.</p>
    </footer>
  );
};
