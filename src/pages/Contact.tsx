import { PageTransition } from "@/components/PageTransition";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-8 text-gold">Contact</h1>
          <div className="h-1 w-24 bg-gold mb-12 mx-auto" />
          
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-4 text-lg">
              <Mail className="w-6 h-6 text-gold" />
              <a 
                href="mailto:vyaznikova.ks@mail.ru"
                className="hover:text-gold transition-smooth"
              >
                vyaznikova.ks@mail.ru
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-lg">
              <Phone className="w-6 h-6 text-gold" />
              <a 
                href="tel:+79104581106"
                className="hover:text-gold transition-smooth"
              >
                +7 910 458 1106
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-lg">
              <MapPin className="w-6 h-6 text-gold" />
              <span>Moscow, Russia</span>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              For booking inquiries, collaboration opportunities, or general questions,
              please feel free to reach out.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
