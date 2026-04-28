import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row overflow-hidden border-b border-border">
        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center p-8 md:p-16 lg:p-24 relative z-10 bg-background">
          <div className="border-l-4 border-primary pl-8 mb-12 max-w-xl">
            <p className="font-sans text-lg md:text-xl font-medium tracking-wide">
              VOTED BEST RESTAURANT IN FOSTER CITY. A DIALOGUE BETWEEN CHINESE CULINARY HERITAGE AND MODERN TECHNIQUE.
            </p>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading font-bold text-7xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mb-16"
          >
            THE ART<br />OF TASTE
          </motion.h1>

          <div className="flex flex-col sm:flex-row gap-6 mt-auto">
            <Link href="/menu">
              <div className="bg-foreground text-background font-bold text-sm md:text-base px-8 py-5 tracking-[0.2em] cursor-pointer hover:bg-foreground/90 transition-colors text-center uppercase">
                EXPLORE MENU
              </div>
            </Link>
            <Link href="/reservations">
              <div className="bg-background text-foreground border-2 border-foreground font-bold text-sm md:text-base px-8 py-5 tracking-[0.2em] cursor-pointer hover:bg-background/90 transition-colors text-center uppercase shadow-[6px_6px_0px_0px_#FFCC00]">
                RESERVATIONS
              </div>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[45%] h-[50vh] lg:h-auto relative bg-foreground">
          <img 
            src="/images/hero-dimsum.png" 
            alt="Signature Chinese dish" 
            className="w-full h-full object-cover opacity-90"
          />
          
          {/* Vertical Banner */}
          <div className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 origin-center -rotate-90 bg-primary text-background font-bold tracking-[0.3em] py-3 px-8 text-sm whitespace-nowrap z-20 hidden lg:block">
            SIGNATURE SERIES 01
          </div>
        </div>
      </section>

      {/* 3-Column Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-border">
        {/* CRAFT */}
        <div className="bg-[#FFCC00] text-foreground p-12 md:p-16 border-b md:border-b-0 md:border-r border-border flex flex-col">
          <div className="w-12 h-12 mb-8 bg-foreground text-background flex items-center justify-center font-bold">01</div>
          <h2 className="font-heading font-bold text-3xl tracking-wider mb-6">CRAFT</h2>
          <p className="font-sans text-lg leading-relaxed font-medium">
            Every ingredient is sourced from ancestral farms, treated with the respect of a master artisan. Precision meets passion in every plate.
          </p>
        </div>

        {/* HERITAGE */}
        <div className="bg-background text-foreground p-12 md:p-16 border-b md:border-b-0 md:border-r border-border flex flex-col">
          <div className="w-12 h-12 mb-8 bg-foreground text-background flex items-center justify-center font-bold">02</div>
          <h2 className="font-heading font-bold text-3xl tracking-wider mb-6">HERITAGE</h2>
          <p className="font-sans text-lg leading-relaxed font-medium text-muted-foreground">
            We don't just cook recipes; we translate stories. Centuries of Chinese wisdom reinterpreted for the modern palate.
          </p>
        </div>

        {/* DESIGN */}
        <div className="bg-background text-foreground p-12 md:p-16 flex flex-col">
          <div className="w-12 h-12 mb-8 bg-foreground text-background flex items-center justify-center font-bold">03</div>
          <h2 className="font-heading font-bold text-3xl tracking-wider mb-6">DESIGN</h2>
          <p className="font-sans text-lg leading-relaxed font-medium text-muted-foreground">
            The space is an extension of the plate. Brutalist forms, warm materials, and a focus on essential functionality.
          </p>
        </div>
      </section>

      {/* Born from the Flame */}
      <section className="bg-[#1A1A1A] text-[#F4F1EB] grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 md:p-24 flex flex-col justify-center">
          <h2 className="font-heading font-bold text-5xl md:text-7xl tracking-tighter mb-12 leading-[0.9]">
            BORN FROM<br />THE FLAME
          </h2>
          <p className="font-sans text-xl md:text-2xl leading-relaxed mb-16 text-[#F4F1EB]/80">
            Chez Xue is more than a restaurant; it is a movement. Founded on the principle that "Form Follows Function," we strip away the superfluous to reveal the raw, powerful essence of Chinese gastronomy.
          </p>
          <Link href="/gallery">
            <div className="inline-flex items-center gap-4 text-primary font-bold tracking-[0.2em] text-lg cursor-pointer hover:text-primary/80 transition-colors group">
              VISIT THE GALLERY 
              <span className="w-12 h-[2px] bg-primary group-hover:w-16 transition-all duration-300"></span>
            </div>
          </Link>
        </div>
        <div className="h-[60vh] lg:h-auto border-l-4 border-primary">
          <img src="/images/chef-plating.png" alt="Chef plating" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-background py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-foreground pb-6">
            <h2 className="font-heading font-bold text-4xl md:text-6xl tracking-tighter">GALLERY / 01</h2>
            <p className="font-sans font-bold tracking-widest text-muted-foreground mt-4 md:mt-0">Selected works from our seasonal collection.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-muted mb-6 border border-border">
                <img src="/images/gallery-1.png" alt="Truffle Har Gow" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="font-heading font-bold text-2xl tracking-widest mb-2">TRUFFLE HAR GOW</h4>
              <p className="text-primary font-bold tracking-widest text-sm">WINTER 24 SELECTION</p>
            </div>
            <div className="group cursor-pointer md:mt-16">
              <div className="aspect-[4/3] overflow-hidden bg-muted mb-6 border border-border">
                <img src="/images/gallery-2.png" alt="Imperial Duck" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="font-heading font-bold text-2xl tracking-widest mb-2">IMPERIAL DUCK</h4>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-muted mb-6 border border-border">
                <img src="/images/gallery-3.png" alt="Silk Road Noodles" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="font-heading font-bold text-2xl tracking-widest mb-2">SILK ROAD NOODLES</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Equitable Hospitality */}
      <section className="bg-background py-24 border-b border-border text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-16 border-2 border-foreground mx-auto flex items-center justify-center mb-8">
            <span className="font-bold text-2xl">EQ</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tighter mb-6">EQUITABLE HOSPITALITY</h2>
          <p className="font-sans text-xl mb-16 text-muted-foreground">Chez Xue is a no-tipping restaurant.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="border-l-4 border-primary pl-8">
              <h3 className="font-heading font-bold text-6xl text-primary mb-4">18%</h3>
              <h4 className="font-heading font-bold text-2xl tracking-widest mb-4">DINE-IN SERVICE</h4>
              <p className="font-sans text-lg text-muted-foreground">Included on all dine-in bills in lieu of tips and gratuity to support fair wages.</p>
            </div>
            <div className="border-l-4 border-foreground pl-8">
              <h3 className="font-heading font-bold text-6xl text-foreground mb-4">7%</h3>
              <h4 className="font-heading font-bold text-2xl tracking-widest mb-4">TAKEOUT SERVICE</h4>
              <p className="font-sans text-lg text-muted-foreground">Included on all takeout orders to support our back-of-house team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve Section */}
      <section className="bg-background border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-16 md:p-24 border-b md:border-b-0 md:border-r border-border hover:bg-[#FFCC00] transition-colors group">
            <h4 className="font-heading font-bold text-xl tracking-widest text-primary mb-6">IN PERSON</h4>
            <h2 className="font-heading font-bold text-4xl md:text-6xl tracking-tighter mb-12">SECURE A<br />TABLE</h2>
            <a href="https://resy.com/cities/foster-city-ca-ca/venues/chez-xue" target="_blank" rel="noopener noreferrer" className="inline-block bg-foreground text-background font-bold px-8 py-4 tracking-[0.2em] group-hover:shadow-[6px_6px_0px_0px_#E6392D] transition-shadow uppercase">
              BOOK RESY
            </a>
          </div>
          <div className="p-16 md:p-24 hover:bg-muted transition-colors group">
            <h4 className="font-heading font-bold text-xl tracking-widest text-primary mb-6">AT HOME</h4>
            <h2 className="font-heading font-bold text-4xl md:text-6xl tracking-tighter mb-12">ORDER<br />DELIVERY</h2>
            <div className="flex flex-wrap gap-6">
              <a href="https://order.online/business/chez-xue-705689" target="_blank" rel="noopener noreferrer" className="inline-block bg-foreground text-background font-bold px-8 py-4 tracking-[0.2em] uppercase">
                DOORDASH
              </a>
              <a href="https://www.ubereats.com/store/chez-xue/0-bqgNOXTCWW_vJguitPCw" target="_blank" rel="noopener noreferrer" className="inline-block bg-background text-foreground border-2 border-foreground font-bold px-8 py-4 tracking-[0.2em] uppercase">
                UBER EATS
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
