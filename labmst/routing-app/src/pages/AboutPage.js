import Navigation from '../components/Navigation';

function AboutPage() {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600">Learn more about our application</p>
      </div>
    </div>
  );
}

export default AboutPage;