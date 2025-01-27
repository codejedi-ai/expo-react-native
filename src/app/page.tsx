import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <section className="hero-section h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
              Morning Wood
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Skibidi Dop Dop Dop Yes Yes, Skibidi Dop Dop Yee Yee
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn-primary">Our Projects</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
              Latest Productions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative group overflow-hidden rounded-lg">
                  <div className="aspect-[16/9] bg-gray-800 relative">
                    {/* Add movie poster images here */}
                  </div>
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="btn-primary">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
