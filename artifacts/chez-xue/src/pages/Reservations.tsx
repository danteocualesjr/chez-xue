import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon } from "lucide-react";

export default function Reservations() {
  const [step, setStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState("19:00");

  const times = [
    { time: "18:00", available: true },
    { time: "18:30", available: true },
    { time: "19:00", available: true },
    { time: "19:30", available: true },
    { time: "20:00", available: true },
    { time: "20:30", available: true },
    { time: "21:00", available: true },
    { time: "21:30", available: false },
    { time: "22:00", available: true },
    { time: "22:30", available: false },
  ];

  return (
    <div className="w-full bg-background pt-12 pb-24 min-h-[calc(100vh-5rem)]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 border-b-2 border-foreground pb-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading font-bold italic text-5xl md:text-7xl tracking-tighter leading-none mb-6"
            >
              SECURE YOUR<br />EXPERIENCE.
            </motion.h1>
            <p className="font-sans font-bold text-muted-foreground tracking-widest text-sm max-w-xl">
              BAUHAUS PRINCIPLES APPLIED TO CULINARY ARCHITECTURE.<br />
              SELECT YOUR PARAMETERS BELOW TO INITIATE RESERVATION.
            </p>
          </div>
          
          <div className="flex gap-4 mt-8 md:mt-0">
            <div className={`w-12 h-12 flex items-center justify-center font-bold tracking-widest border-2 border-foreground ${step === 1 ? 'bg-primary text-background border-primary' : 'bg-background text-foreground'}`}>
              01
            </div>
            <div className={`w-12 h-12 flex items-center justify-center font-bold tracking-widest border-2 border-foreground ${step === 2 ? 'bg-primary text-background border-primary' : 'bg-background text-foreground'}`}>
              02
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-8 space-y-12">
            
            <div className="border-2 border-foreground p-8 relative">
              <div className="absolute -top-3.5 left-6 bg-background px-4 font-bold tracking-widest text-primary text-sm">
                BOOKING PARAMETERS
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label className="font-bold tracking-widest text-xs text-muted-foreground">DATE_MM/DD/YYYY</label>
                  <div className="border border-foreground flex items-center px-4 py-3 bg-white">
                    <CalendarIcon className="w-5 h-5 mr-3 text-muted-foreground" />
                    <input type="text" defaultValue="11/15/2025" className="bg-transparent w-full outline-none font-bold tracking-widest" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-bold tracking-widest text-xs text-muted-foreground">GUESTS_COUNT</label>
                  <div className="border border-foreground px-4 py-3 bg-white">
                    <select className="bg-transparent w-full outline-none font-bold tracking-widest appearance-none cursor-pointer">
                      <option>01 PERSON</option>
                      <option selected>02 PERSONS</option>
                      <option>03 PERSONS</option>
                      <option>04 PERSONS</option>
                      <option>05 PERSONS</option>
                      <option>06 PERSONS</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="font-bold tracking-widest text-xs text-muted-foreground">SELECT_SLOT</label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {times.map((t) => (
                    <button
                      key={t.time}
                      disabled={!t.available}
                      onClick={() => setSelectedTime(t.time)}
                      className={`py-3 font-bold tracking-widest text-sm border transition-colors
                        ${!t.available 
                          ? 'border-muted-foreground/30 text-muted-foreground/40 bg-muted cursor-not-allowed' 
                          : selectedTime === t.time 
                            ? 'border-primary bg-primary text-background' 
                            : 'border-foreground text-foreground hover:bg-foreground hover:text-background'
                        }`}
                    >
                      {t.time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-2 border-foreground p-8 relative">
              <div className="absolute -top-3.5 left-6 bg-background px-4 font-bold tracking-widest text-primary text-sm">
                PERSONAL IDENTIFICATION
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-bold tracking-widest text-xs text-muted-foreground">NAME_STRING</label>
                  <input type="text" placeholder="ENTER FULL NAME" className="border border-foreground px-4 py-3 bg-white w-full outline-none font-bold tracking-widest placeholder:text-muted-foreground/50 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold tracking-widest text-xs text-muted-foreground">EMAIL_ADDRESS</label>
                  <input type="email" placeholder="ENTER EMAIL" className="border border-foreground px-4 py-3 bg-white w-full outline-none font-bold tracking-widest placeholder:text-muted-foreground/50 focus:border-primary" />
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                alert("Reservation initiated!");
                setStep(2);
              }}
              className="w-full bg-[#FFCC00] text-foreground font-bold text-lg py-5 tracking-[0.2em] border-2 border-foreground shadow-[8px_8px_0px_0px_#1A1A1A] hover:translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_#1A1A1A] transition-all"
            >
              INITIATE RESERVATION
            </button>

          </div>

          {/* Right Column - Map */}
          <div className="lg:col-span-4">
            <div className="border-2 border-foreground h-full min-h-[400px] relative bg-muted flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute top-4 left-4 bg-foreground text-background font-bold tracking-widest text-xs px-3 py-1 z-10">
                LOCATION NODE
              </div>
              
              {/* Abstract map representation */}
              <div className="absolute inset-0 opacity-20" 
                style={{ 
                  backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', 
                  backgroundSize: '20px 20px' 
                }}>
              </div>
              
              <div className="w-[1px] h-full bg-foreground/20 absolute left-1/2"></div>
              <div className="h-[1px] w-full bg-foreground/20 absolute top-1/2"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-6 h-6 bg-primary rotate-45 mb-4 shadow-[0_0_15px_rgba(230,57,45,0.5)]"></div>
                <div className="bg-background border border-foreground px-4 py-2 font-bold tracking-widest text-sm shadow-[4px_4px_0px_0px_#1A1A1A]">
                  FOSTER CITY, CA
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
