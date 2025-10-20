import { PageTransition } from "@/components/PageTransition";
import portraitImage from "@/assets/portrait-main.jpg";

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center bg-black">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide">
                Kseniia Viaznikova
              </h1>
              <div className="h-1 w-32 bg-red" />
              <h2 className="text-2xl md:text-3xl font-light tracking-wider">
                Dramatic Mezzo-Soprano
              </h2>
              <p className="text-lg md:text-xl italic text-red-muted max-w-xl">
                Emotion, depth, and power — the voice that moves worlds.
              </p>
            </div>

            {/* Right side - Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <img 
                  src={portraitImage} 
                  alt="Kseniia Viaznikova"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
