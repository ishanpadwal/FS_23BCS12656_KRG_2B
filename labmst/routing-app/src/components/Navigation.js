import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}

export default Navigation;
