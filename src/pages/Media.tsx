import { PageTransition } from "@/components/PageTransition";

const Media = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-8 md:px-16 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gold">Media</h1>
        <div className="h-1 w-24 bg-gold mb-12" />
        
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-semibold mb-6">Performance Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center border border-border">
                <p className="text-muted-foreground">Video embed placeholder</p>
              </div>
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center border border-border">
                <p className="text-muted-foreground">Video embed placeholder</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">Production Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i}
                  className="aspect-square bg-secondary rounded-lg flex items-center justify-center border border-border hover:border-gold transition-smooth"
                >
                  <p className="text-muted-foreground">Photo {i}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6">Audio Recordings</h2>
            <div className="space-y-4">
              {["Il Trovatore - Stride la vampa", "Carmen - Habanera", "War and Peace - Act II"].map((title, i) => (
                <div 
                  key={i}
                  className="p-4 border border-border rounded-lg hover:border-gold transition-smooth"
                >
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-muted-foreground mt-1">Audio player placeholder</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Media;
