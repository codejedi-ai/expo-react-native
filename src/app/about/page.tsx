import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <section className="hero-section h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
              Morning Wood Studio
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Crafting Powerful Stories in Just 10 Seconds
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn-primary">Watch Our Shorts</button>
              <button className="btn-secondary">Partner With Us</button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">Our Mission</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              We believe in the power of micro-storytelling. Each 10-second episode 
              is crafted to deliver maximum impact in minimum time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-lg bg-gray-800">
                <h3 className="text-2xl font-bold mb-4">500M+</h3>
                <p>Views Across Platforms</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800">
                <h3 className="text-2xl font-bold mb-4">1000+</h3>
                <p>10-Second Episodes</p>
              </div>
              <div className="p-6 rounded-lg bg-gray-800">
                <h3 className="text-2xl font-bold mb-4">50+</h3>
                <p>Series Produced</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
              Featured Series
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Quick Laughs", desc: "Comedy in seconds" },
                { title: "Mini Stories", desc: "Micro dramas" },
                { title: "Flash Action", desc: "Quick-paced thrills" }
              ].map((series, i) => (
                <div key={i} className="relative group overflow-hidden rounded-lg">
                  <div className="aspect-[16/9] bg-gray-800 relative p-6 flex items-center justify-center">
                    <div>
                      <h3 className="text-xl font-bold">{series.title}</h3>
                      <p className="text-gray-400">{series.desc}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="btn-primary">Watch Now</button>
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