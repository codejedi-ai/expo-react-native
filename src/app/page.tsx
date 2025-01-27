import Navbar from '@/components/Navbar';
import type { Film } from '@/types/film';

async function getFeaturedFilms(): Promise<Film[]> {
  const res = await fetch('http://localhost:3000/api/featured', {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch featured films');
  }
  
  return res.json();
}

export default async function Home() {
  const featuredFilms = await getFeaturedFilms();
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
              {featuredFilms.map((film) => (
                <div key={film.id} className="relative group overflow-hidden rounded-lg">
                  <div className="aspect-[16/9] bg-gray-800 relative">
                    {film.posterUrl && (
                      <img
                        src={film.posterUrl}
                        alt={film.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                    <h3 className="text-xl font-bold mb-2">{film.title}</h3>
                    <p className="text-sm mb-4 text-center">{film.description}</p>
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
