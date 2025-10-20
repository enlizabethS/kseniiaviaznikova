import { PageTransition } from "@/components/PageTransition";

const performances = [
  {
    title: "The Golden Cockerel",
    role: "The Queen",
    venue: "Komische Oper Berlin",
    year: "2024",
    description: "A stunning production of Rimsky-Korsakov's satirical opera-tale"
  },
  {
    title: "War and Peace",
    role: "Hélène Bezukhova",
    venue: "Bavarian State Opera",
    year: "2023",
    description: "Prokofiev's epic masterpiece at one of Europe's most prestigious opera houses"
  },
  {
    title: "Elektra",
    role: "Klytämnestra",
    venue: "Stadttheater Klagenfurt",
    year: "2020",
    description: "A powerful portrayal in Richard Strauss's intense psychological drama"
  },
  {
    title: "Il Trovatore",
    role: "Azucena",
    venue: "Helikon Opera Moscow",
    year: "2018",
    description: "A tour de force performance in Verdi's dramatic masterpiece"
  },
  {
    title: "Carmen",
    role: "Carmen",
    venue: "Bolshoi Theatre",
    year: "2017",
    description: "The iconic role at Russia's most legendary opera house"
  },
  {
    title: "Die Walküre",
    role: "Fricka",
    venue: "Bavarian State Opera",
    year: "2019",
    description: "Wagner's Ring Cycle in Munich's historic opera house"
  }
];

const Performances = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-8 md:px-16 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-red">Performances</h1>
        <div className="h-1 w-24 bg-red mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {performances.map((performance, index) => (
            <div 
              key={index}
              className="border border-border p-6 rounded-lg hover:border-red transition-smooth hover:shadow-lg"
            >
              <div className="text-sm text-red-muted mb-2">{performance.year}</div>
              <h2 className="text-2xl font-semibold mb-2">
                {performance.title}
              </h2>
              <p className="text-lg text-red mb-2">{performance.role}</p>
              <p className="text-muted-foreground mb-4">{performance.venue}</p>
              <p className="text-sm leading-relaxed">{performance.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Performances;
