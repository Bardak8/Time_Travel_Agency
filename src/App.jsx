import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import About from './components/About';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <About />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
