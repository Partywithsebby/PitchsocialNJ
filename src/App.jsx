function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-black to-red-800 text-white">
      <header className="text-center py-10">
        <h1 className="text-5xl font-extrabold tracking-wide">Pitch Social</h1>
        <p className="mt-2 text-sm text-gray-300">An upscale, minimalist college bar where vibes meet pitchers.</p>
      </header>
      <nav className="flex justify-center space-x-6 text-sm font-medium text-white">
        <a href="#" className="hover:underline">Menu</a>
        <a href="#" className="hover:underline">Private Events</a>
        <a href="#" className="hover:underline">Who We Are</a>
        <a href="#" className="hover:underline">Location</a>
      </nav>
    </div>
  );
}

export default App;
