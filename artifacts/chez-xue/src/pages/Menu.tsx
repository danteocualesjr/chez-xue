import { motion } from "framer-motion";

export default function Menu() {
  return (
    <div className="w-full bg-background pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-4 border-foreground pb-8">
          <div>
            <div className="bg-primary text-background inline-block px-4 py-2 font-bold tracking-widest text-sm mb-6">
              SPECIFICATION 01.A
            </div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-heading font-bold text-5xl md:text-8xl tracking-tighter leading-none"
            >
              CULINARY<br />SCHEMA
            </motion.h1>
          </div>
          <div className="text-right font-sans font-bold tracking-widest text-xs md:text-sm text-muted-foreground space-y-2 border-l-2 border-primary pl-6">
            <p>REVISION: AUTUMN/WINTER 2025-2026</p>
            <p>UNIT: GOURMET LABORATORY</p>
            <p>CHEF: XUE</p>
          </div>
        </div>

        {/* SEC-01 Appetizers */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-widest whitespace-nowrap">APPETIZERS [SEC-01]</h2>
            <div className="w-full h-1 bg-foreground"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-[#FFCC00] p-8 border border-foreground shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-bold text-2xl tracking-widest">STRUCTURAL DUMPLINGS</h3>
                  <span className="font-sans font-bold text-xl">$24.00</span>
                </div>
                <p className="font-sans font-medium text-foreground/80 tracking-wide text-sm leading-relaxed">
                  PORK MATRIX / SCALLION EMULSIFICATION / TECHNICAL BLACK VINEGAR REDUCTION / CHILI LIPID
                </p>
              </div>

              <div className="bg-background p-8 border border-foreground">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-bold text-2xl tracking-widest">MAPO ARCHITECTURE</h3>
                  <span className="font-sans font-bold text-xl">$19.00</span>
                </div>
                <p className="font-sans font-medium text-muted-foreground tracking-wide text-sm leading-relaxed">
                  TOFU MONOLITHS / SICHUAN PEPPERCORN TENSION / FERMENTED BROAD BEAN FOUNDATION
                </p>
              </div>

              <div className="bg-background p-8 border border-foreground">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-bold text-2xl tracking-widest">CRISPY LOTUS GRID</h3>
                  <span className="font-sans font-bold text-xl">$16.00</span>
                </div>
                <p className="font-sans font-medium text-muted-foreground tracking-wide text-sm leading-relaxed">
                  LOTUS ROOT LATTICE / FIVE-SPICE DUST / SOY GLUXE
                </p>
              </div>
            </div>
            
            <div className="hidden lg:block relative border-4 border-foreground p-2">
              <img src="/images/menu-1.png" alt="Appetizers" className="w-full h-full object-cover filter grayscale" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-background font-bold tracking-widest px-4 py-2">FIG 1.1</div>
            </div>
          </div>
        </section>

        {/* SEC-02 Mains */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-widest whitespace-nowrap">MAIN COURSES [SEC-02]</h2>
            <div className="w-full h-1 bg-foreground"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="hidden lg:block relative border-4 border-foreground p-2">
              <img src="/images/menu-2.png" alt="Mains" className="w-full h-full object-cover filter grayscale" />
              <div className="absolute -top-6 -left-6 bg-primary text-background font-bold tracking-widest px-4 py-2">FIG 2.1</div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#FFCC00] p-8 border border-foreground shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-bold text-2xl tracking-widest">PEKING DUCK ASSEMBLY</h3>
                  <span className="font-sans font-bold text-xl">$68.00</span>
                </div>
                <p className="font-sans font-medium text-foreground/80 tracking-wide text-sm leading-relaxed">
                  CRISPY SKIN VENEER / HOISIN POLYMER / CUCUMBER STRUTS / STEAMED PANCAKE ENVELOPE
                </p>
              </div>

              <div className="bg-background p-8 border border-foreground">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-bold text-2xl tracking-widest">WAGYU BEEF TENSION</h3>
                  <span className="font-sans font-bold text-xl">$54.00</span>
                </div>
                <p className="font-sans font-medium text-muted-foreground tracking-wide text-sm leading-relaxed">
                  A5 GRADE SLICES / BLACK PEPPER SUSPENSION / CRISPY GARLIC NODE / BROCCOLINI
                </p>
              </div>

              <div className="bg-background p-8 border border-foreground">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-bold text-2xl tracking-widest">STEAMED COD CANTILEVER</h3>
                  <span className="font-sans font-bold text-xl">$42.00</span>
                </div>
                <p className="font-sans font-medium text-muted-foreground tracking-wide text-sm leading-relaxed">
                  BLACK COD FILLET / GINGER-SCALLION MATRIX / LIGHT SOY SOLVENT / HOT OIL FINISH
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEC-03 Desserts */}
        <section>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-widest whitespace-nowrap">DESSERTS [SEC-03]</h2>
            <div className="w-full h-1 bg-foreground"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-[#FFCC00] p-8 border border-foreground shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-bold text-2xl tracking-widest">SESAME SPHERE</h3>
                  <span className="font-sans font-bold text-xl">$14.00</span>
                </div>
                <p className="font-sans font-medium text-foreground/80 tracking-wide text-sm leading-relaxed">
                  BLACK SESAME MOUSSE / MATCHA GEOMETRY / CRISPY RICE FOUNDATION
                </p>
              </div>

              <div className="bg-background p-8 border border-foreground">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-bold text-2xl tracking-widest">OSMANTHUS FLUID</h3>
                  <span className="font-sans font-bold text-xl">$12.00</span>
                </div>
                <p className="font-sans font-medium text-muted-foreground tracking-wide text-sm leading-relaxed">
                  SWEET OSMANTHUS JELLY / GOJI BERRY SUSPENSION / ALMOND SYRUP
                </p>
              </div>
            </div>
            
            <div className="hidden lg:block relative border-4 border-foreground p-2">
              <img src="/images/menu-3.png" alt="Desserts" className="w-full h-full object-cover filter grayscale" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-background font-bold tracking-widest px-4 py-2">FIG 3.1</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
