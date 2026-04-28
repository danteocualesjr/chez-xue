import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F4F1EB] py-16 border-t-8 border-[#E6392D]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <div className="font-heading font-bold text-3xl tracking-wider mb-6 cursor-pointer hover:text-[#FFCC00] transition-colors">
                CHEZ XUE
              </div>
            </Link>
            <p className="text-[#F4F1EB]/70 max-w-sm font-sans mb-8">
              A dialogue between Chinese culinary heritage and modern technique. Brutalist forms, warm materials, and a focus on essential functionality.
            </p>
            <div className="flex gap-4">
              {/* Social icons would go here */}
              <div className="w-10 h-10 border border-[#F4F1EB]/20 flex items-center justify-center hover:border-[#FFCC00] hover:text-[#FFCC00] cursor-pointer transition-colors">IN</div>
              <div className="w-10 h-10 border border-[#F4F1EB]/20 flex items-center justify-center hover:border-[#FFCC00] hover:text-[#FFCC00] cursor-pointer transition-colors">IG</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg tracking-widest mb-6 text-[#FFCC00]">LOCATION NODE</h4>
            <address className="not-italic text-[#F4F1EB]/70 font-sans space-y-2">
              <p>FOSTER CITY</p>
              <p>CALIFORNIA, 94404</p>
              <p className="pt-4 hover:text-[#FFCC00] cursor-pointer transition-colors">INFO@CHEZXUE.COM</p>
              <p className="hover:text-[#FFCC00] cursor-pointer transition-colors">+1 (555) 123-4567</p>
            </address>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg tracking-widest mb-6 text-[#FFCC00]">HOURS OF OPS</h4>
            <div className="text-[#F4F1EB]/70 font-sans space-y-2">
              <p className="flex justify-between"><span>MON-THU</span> <span>17:00 - 22:00</span></p>
              <p className="flex justify-between"><span>FRI-SAT</span> <span>17:00 - 23:00</span></p>
              <p className="flex justify-between text-[#E6392D] font-bold"><span>SUN</span> <span>CLOSED</span></p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#F4F1EB]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#F4F1EB]/50 font-sans">
          <p>© {new Date().getFullYear()} CHEZ XUE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span className="hover:text-[#F4F1EB] cursor-pointer">TERMS</span>
            <span className="hover:text-[#F4F1EB] cursor-pointer">PRIVACY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
