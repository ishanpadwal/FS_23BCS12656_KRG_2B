import Navigation from '../components/Navigation';

function ContactPage() {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">Get in touch with us</p>
      </div>
    </div>
  );
}

export default ContactPage;