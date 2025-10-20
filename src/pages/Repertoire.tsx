import { PageTransition } from "@/components/PageTransition";

const repertoireData = [
  {
    composer: "Giuseppe Verdi",
    roles: ["Azucena (Il Trovatore)", "Amneris (Aida)", "Ulrica (Un ballo in maschera)"]
  },
  {
    composer: "Richard Wagner",
    roles: ["Fricka (Das Rheingold, Die Walküre)", "Waltraute (Götterdämmerung)", "Ortrud (Lohengrin)"]
  },
  {
    composer: "Richard Strauss",
    roles: ["Klytämnestra (Elektra)", "Herodias (Salome)"]
  },
  {
    composer: "Sergei Prokofiev",
    roles: ["Hélène Bezukhova (War and Peace)", "The Queen (The Golden Cockerel)"]
  },
  {
    composer: "Georges Bizet",
    roles: ["Carmen (Carmen)"]
  },
  {
    composer: "Pyotr Ilyich Tchaikovsky",
    roles: ["Olga (Eugene Onegin)", "Paulina (The Queen of Spades)"]
  },
  {
    composer: "Modest Mussorgsky",
    roles: ["Marina Mniszek (Boris Godunov)"]
  },
  {
    composer: "Wolfgang Amadeus Mozart",
    roles: ["Dorabella (Così fan tutte)", "Cherubino (Le nozze di Figaro)"]
  }
];

const Repertoire = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-8 md:px-16 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-red">Repertoire</h1>
        <div className="h-1 w-24 bg-red mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {repertoireData.map((item, index) => (
            <div 
              key={index}
              className="border border-border p-6 rounded-lg hover:border-red transition-smooth"
            >
              <h2 className="text-2xl font-semibold mb-4 text-red-muted">
                {item.composer}
              </h2>
              <ul className="space-y-2">
                {item.roles.map((role, roleIndex) => (
                  <li 
                    key={roleIndex}
                    className="text-lg leading-relaxed"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Repertoire;
