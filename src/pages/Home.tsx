import { PageTransition } from "@/components/PageTransition";
import portraitImage from "@/assets/portrait.jpg";

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${portraitImage})`,
          }}
        />
        
        <div className="relative z-10 text-center text-white px-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-wide">
            Kseniia Viaznikova
          </h1>
          <div className="h-px w-32 bg-gold mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-wider">
            Dramatic Mezzo-Soprano
          </h2>
          <p className="text-lg md:text-xl italic text-gold-muted max-w-2xl mx-auto">
            Emotion, depth, and power — the voice that moves worlds.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
