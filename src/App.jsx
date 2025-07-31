function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex justify-between items-center p-6 border-b border-neutral-800">
        <h1 className="text-3xl font-bold">Pitch Social</h1>
        <nav className="space-x-6 text-sm">
          <a href="#menu" className="hover:underline">Menu</a>
          <a href="#private-events" className="hover:underline">Private Events</a>
          <a href="#about" className="hover:underline">Who We Are</a>
          <a href="#location" className="hover:underline">Location</a>
        </nav>
      </header>

      <main className="text-center mt-32 px-6">
        <h2 className="text-5xl font-extrabold mb-6">Welcome to Pitch Social</h2>
        <p className="text-xl text-neutral-400 max-w-xl mx-auto">
          An upscale, minimalist college bar where vibes meet pitchers.
        </p>
      </main>
    </div>
  );
}

export default App;

