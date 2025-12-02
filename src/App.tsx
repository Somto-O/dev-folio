import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-accent/20 selection:text-white p-8 md:p-20 lg:p-32">
      <div className="max-w-5xl mx-auto">
        <Hero />
        <div className="mt-8">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
