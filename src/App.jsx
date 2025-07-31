function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <header className="mb-8">
        <h1 className="text-5xl font-bold tracking-tight uppercase">Pitch Social</h1>
        <nav className="mt-4 space-x-6 text-sm">
          <a href="#" className="hover:underline">Menu</a>
          <a href="#" className="hover:underline">Private Events</a>
          <a href="#" className="hover:underline">Who We Are</a>
          <a href="#" className="hover:underline">Location</a>
        </nav>
      </header>

      <main>
        <p className="text-xl max-w-md">
          An upscale, minimalist college bar where vibes meet pitchers.
        </p>
      </main>
    </div>
  );
}

export default App;
