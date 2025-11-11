import Navigation from '../components/Navigation';

function HomePage() {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome Home</h1>
        <p className="text-gray-600">This is the home page</p>
      </div>
    </div>
  );
}

export default HomePage;