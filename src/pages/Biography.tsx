import { PageTransition } from "@/components/PageTransition";

const Biography = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-8 md:px-16 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-red">Biography</h1>
        <div className="h-1 w-24 bg-red mb-12" />
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Kseniia Viaznikova is a distinguished dramatic mezzo-soprano whose powerful voice and 
            profound interpretations have captivated audiences across Europe's most prestigious opera houses.
          </p>
          
          <p>
            Her musical journey began at the renowned Moscow Tchaikovsky Conservatory, where she 
            honed her craft under the guidance of masters. She further refined her artistry at the 
            University of Music and Performing Arts Vienna, embracing both Russian and European 
            operatic traditions.
          </p>
          
          <p>
            Throughout her international career, Kseniia has graced the stages of Europe's leading 
            opera houses, including the legendary Bolshoi Theatre in Moscow, Komische Oper Berlin, 
            Bavarian State Opera in Munich, and Helikon Opera Moscow. Her performances are 
            characterized by emotional depth, vocal power, and an unwavering commitment to dramatic truth.
          </p>
          
          <p>
            Beyond her performance career, Kseniia is a dedicated pedagogue, sharing her knowledge 
            and passion with the next generation of singers. She holds a PhD in Art Studies, combining 
            scholarly insight with practical experience to offer a comprehensive understanding of the 
            operatic art form.
          </p>
          
          <p>
            Her repertoire spans from Verdi and Wagner to Russian masters like Prokofiev and 
            Tchaikovsky, demonstrating remarkable versatility and artistic range. Whether performing 
            Carmen's seductive arias or Azucena's tortured laments, Kseniia brings authenticity and 
            emotional resonance to every role.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default Biography;
