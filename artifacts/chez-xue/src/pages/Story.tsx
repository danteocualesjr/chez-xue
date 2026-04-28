import { motion } from "framer-motion";

export default function Story() {
  return (
    <div className="w-full bg-background pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="max-w-4xl mx-auto mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-7xl tracking-tighter leading-none mb-8 border-l-8 border-primary pl-8"
          >
            FORM FOLLOWS<br />FUNCTION
          </motion.h1>
          <p className="font-sans text-xl leading-relaxed text-muted-foreground font-medium pl-10 border-l-8 border-transparent">
            Our philosophy is rooted in the Bauhaus principle of stripping away the non-essential. In culinary terms, this means letting the inherent quality of the ingredients speak without unnecessary embellishment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div className="relative border-4 border-foreground p-2">
            <img src="/images/chef-plating.png" alt="Chef Xue" className="w-full h-full object-cover filter grayscale" />
            <div className="absolute -bottom-6 -left-6 bg-[#FFCC00] text-foreground font-bold tracking-widest px-6 py-3 border border-foreground">
              FOUNDER / CHEF XUE
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-heading font-bold text-3xl tracking-widest">THE ORIGIN NODE</h2>
            <p className="font-sans text-lg leading-relaxed text-muted-foreground">
              Chef Xue began his journey in the traditional kitchens of Sichuan before spending a decade in structural engineering. This duality of discipline birthed Chez Xue—a space where culinary tradition is analyzed, deconstructed, and rebuilt with architectural precision.
            </p>
            <p className="font-sans text-lg leading-relaxed text-muted-foreground">
              Every dish is designed like a building. Foundation, structure, facade. Flavor profiles are mapped on a matrix of tension and release.
            </p>
          </div>
        </div>

        <div className="bg-[#1A1A1A] text-[#F4F1EB] p-16 md:p-24 text-center my-24 border-y-8 border-primary">
          <h2 className="font-heading font-bold text-3xl md:text-5xl tracking-widest leading-tight max-w-4xl mx-auto">
            "WE DO NOT DECORATE PLATES. WE ENGINEER EXPERIENCES OF TASTE AND TEXTURE."
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl tracking-widest mb-16 text-center">DEVELOPMENT TIMELINE</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-foreground/20">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-background text-xs">22</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 border-2 border-foreground shadow-[4px_4px_0px_0px_#1A1A1A]">
                <h3 className="font-heading font-bold text-xl tracking-widest text-primary mb-2">INITIAL CONCEPTION</h3>
                <p className="font-sans text-muted-foreground font-medium">The blueprint for Chez Xue is drafted. Culinary paradigms are established.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-background text-xs">23</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 border-2 border-foreground shadow-[4px_4px_0px_0px_#1A1A1A]">
                <h3 className="font-heading font-bold text-xl tracking-widest text-foreground mb-2">GROUNDBREAKING</h3>
                <p className="font-sans text-muted-foreground font-medium">Physical construction begins in Foster City. Brutalist aesthetic is solidified.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-[#FFCC00] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-foreground text-xs">24</div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 border-2 border-foreground shadow-[4px_4px_0px_0px_#1A1A1A]">
                <h3 className="font-heading font-bold text-xl tracking-widest text-[#FFCC00] mb-2 text-shadow-sm">DOORS OPEN</h3>
                <p className="font-sans text-muted-foreground font-medium">Voted best new restaurant in Foster City. The methodology is proven.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
