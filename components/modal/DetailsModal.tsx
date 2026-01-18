import { X, Calendar, CheckCircle2, DollarSign, Target } from 'lucide-react';
import Link from 'next/link';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  price?: string;
  features?: string[];
  outcome?: string;
}

export default function DetailsModal({ isOpen, onClose, title, content, price, features, outcome }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bean-dark/95 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        
        {/* Header Section */}
        <div className="bg-bean-blue p-8 md:p-10 text-white relative">
          <div className="flex justify-between items-start">
            <div>
              <span className="bg-white/20 px-3 py-1 rounded text-[10px] font-black tracking-widest uppercase">Service Details</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mt-4 leading-none">{title}</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X size={32} />
            </button>
          </div>
          
          {price && (
            <div className="mt-8 inline-flex items-center gap-2 bg-bean-accent text-bean-dark px-6 py-3 rounded-2xl shadow-lg">
              <DollarSign size={24} strokeWidth={3} />
              <span className="text-2xl font-black">{price}</span>
            </div>
          )}
        </div>

        {/* Body Section */}
        <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
          {/* Left: Info & Features */}
          <div className="space-y-10">
            <div>
              <h4 className="text-bean-blue font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
                <Target size={18} /> The Mission
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {content}
              </p>
            </div>

            {features && (
              <div>
                <h4 className="text-bean-blue font-black uppercase text-xs tracking-widest mb-4">What&apos;s Included</h4>
                <ul className="grid grid-cols-1 gap-3">
                  {features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-bean-dark font-bold bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <CheckCircle2 size={20} className="text-bean-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: Outcome & CTA */}
          <div className="flex flex-col justify-between">
            <div className="bg-gray-50 p-8 rounded-[2rem] border-2 border-dashed border-gray-200 relative mb-8">
              <h4 className="text-bean-dark font-black uppercase text-[10px] tracking-[0.2em] mb-4">Expected Outcome</h4>
              <p className="text-gray-600 italic leading-relaxed mb-6 font-medium text-sm">
                {outcome}
              </p>
              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-bean-blue w-[85%] rounded-full" />
                </div>
                <p className="text-[10px] font-black text-bean-blue uppercase tracking-widest text-right">Performance Growth: +85%</p>
              </div>
            </div>

            <Link 
              href="#contact" 
              onClick={onClose}
              className="flex items-center justify-center gap-4 w-full py-6 bg-bean-accent text-bean-dark font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl text-xl uppercase tracking-tight group"
            >
              <Calendar size={28} className="group-hover:rotate-12 transition-transform" />
              Book This Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}