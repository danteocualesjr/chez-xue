import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full bg-background pt-12 pb-24 min-h-[calc(100vh-5rem)]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-16 border-l-8 border-primary pl-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-5xl md:text-7xl tracking-tighter leading-none mb-6"
          >
            ESTABLISH<br />CONTACT
          </motion.h1>
          <p className="text-muted-foreground font-bold tracking-widest text-sm max-w-xl">
            TRANSMIT YOUR INQUIRIES BELOW. COMMUNICATION PROTOCOLS ARE MONITORED DAILY.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="bg-[#1A1A1A] text-[#F4F1EB] p-10 border-b-8 border-primary">
              <h3 className="font-heading font-bold text-2xl tracking-widest mb-8 text-[#FFCC00]">HEADQUARTERS</h3>
              <div className="space-y-4 font-sans text-lg tracking-wide">
                <p>CHEZ XUE RESTAURANT</p>
                <p>FOSTER CITY, CA 94404</p>
                <p className="pt-4 text-[#F4F1EB]/70 hover:text-primary transition-colors cursor-pointer">INFO@CHEZXUE.COM</p>
                <p className="text-[#F4F1EB]/70 hover:text-primary transition-colors cursor-pointer">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="border-4 border-foreground p-10">
              <h3 className="font-heading font-bold text-2xl tracking-widest mb-8">OPERATIONAL HOURS</h3>
              <div className="space-y-4 font-sans text-lg tracking-wide font-bold">
                <div className="flex justify-between border-b border-foreground/20 pb-2">
                  <span className="text-muted-foreground">MON - THU</span>
                  <span>17:00 - 22:00</span>
                </div>
                <div className="flex justify-between border-b border-foreground/20 pb-2">
                  <span className="text-muted-foreground">FRI - SAT</span>
                  <span>17:00 - 23:00</span>
                </div>
                <div className="flex justify-between text-primary pt-2">
                  <span>SUNDAY</span>
                  <span>CLOSED / MAINTENANCE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="bg-white border-4 border-foreground p-8 md:p-12 shadow-[12px_12px_0px_0px_#FFCC00]">
              <h3 className="font-heading font-bold text-2xl tracking-widest mb-8">TRANSMISSION FORM</h3>
              
              {submitted ? (
                <div className="bg-primary text-background p-8 font-bold tracking-widest text-center">
                  <p className="text-xl mb-4">TRANSMISSION SUCCESSFUL</p>
                  <p className="text-sm">WE WILL RESPOND TO YOUR NODE SHORTLY.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 border-2 border-background px-6 py-2 hover:bg-background hover:text-primary transition-colors"
                  >
                    SEND ANOTHER
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="font-bold tracking-widest text-xs text-muted-foreground">IDENTIFIER (NAME)</label>
                    <input 
                      required
                      type="text" 
                      className="w-full border-2 border-foreground bg-background px-4 py-3 font-bold tracking-wider outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-bold tracking-widest text-xs text-muted-foreground">RETURN PATH (EMAIL)</label>
                    <input 
                      required
                      type="email" 
                      className="w-full border-2 border-foreground bg-background px-4 py-3 font-bold tracking-wider outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold tracking-widest text-xs text-muted-foreground">SUBJECT</label>
                    <select className="w-full border-2 border-foreground bg-background px-4 py-3 font-bold tracking-wider outline-none focus:border-primary transition-colors appearance-none rounded-none cursor-pointer">
                      <option>GENERAL INQUIRY</option>
                      <option>PRIVATE EVENTS / BUYOUT</option>
                      <option>PRESS / MEDIA</option>
                      <option>CAREERS</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold tracking-widest text-xs text-muted-foreground">DATA PAYLOAD (MESSAGE)</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full border-2 border-foreground bg-background px-4 py-3 font-bold tracking-wider outline-none focus:border-primary transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-foreground text-background font-bold text-lg py-5 tracking-[0.2em] border-2 border-foreground hover:bg-primary hover:border-primary transition-colors mt-4 uppercase"
                  >
                    INITIATE TRANSMISSION
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
