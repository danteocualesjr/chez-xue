import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <div className="w-full bg-background pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col mb-16 border-l-8 border-foreground pl-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-[6rem] tracking-tighter leading-none mb-6"
          >
            FORM &<br />TEXTURE
          </motion.h1>
          <p className="text-primary font-bold tracking-[0.2em] max-w-2xl text-sm md:text-base">
            A VISUAL DOCUMENT OF BRUTALIST CULINARY EXPRESSION. WHERE RAW CONCRETE MEETS REFINED TECHNIQUE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          
          <div className="col-span-1 md:col-span-2 row-span-2 bg-[#1A1A1A] p-2 border border-border group relative overflow-hidden">
            <img src="/images/gallery-arch-1.png" alt="Brutalist interior" className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700 opacity-80" />
            <div className="absolute bottom-6 left-6 bg-background text-foreground font-bold tracking-widest px-4 py-2 text-sm border border-foreground">
              01. THE CONCRETE HALL
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 row-span-1 bg-muted p-2 border border-border group relative overflow-hidden">
            <img src="/images/gallery-1.png" alt="Food" className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-4 right-4 bg-primary text-background font-bold tracking-widest px-3 py-1 text-xs">
              02. TRUFFLE HAR GOW
            </div>
          </div>

          <div className="col-span-1 row-span-1 bg-muted p-2 border border-border group relative overflow-hidden">
             <img src="/images/gallery-2.png" alt="Food" className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute bottom-4 left-4 bg-[#FFCC00] text-foreground font-bold tracking-widest px-3 py-1 text-xs">
              03. IMPERIAL
            </div>
          </div>

          <div className="col-span-1 row-span-2 bg-muted p-2 border border-border group relative overflow-hidden">
             <img src="/images/menu-1.png" alt="Food detail" className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" />
          </div>

          <div className="col-span-1 md:col-span-3 row-span-2 bg-muted p-2 border border-border group relative overflow-hidden">
            <img src="/images/gallery-arch-2.png" alt="Exterior" className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute top-6 left-6 bg-background text-foreground font-bold tracking-widest px-4 py-2 text-sm border border-foreground">
              04. EXTERIOR FACADE
            </div>
          </div>

          <div className="col-span-1 row-span-1 bg-muted p-2 border border-border group relative overflow-hidden">
             <img src="/images/gallery-3.png" alt="Food" className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute bottom-4 right-4 bg-primary text-background font-bold tracking-widest px-3 py-1 text-xs">
              05. NOODLES
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2 row-span-1 bg-muted p-2 border border-border group relative overflow-hidden">
             <img src="/images/menu-2.png" alt="Chef" className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" />
          </div>

        </div>

      </div>
    </div>
  );
}
