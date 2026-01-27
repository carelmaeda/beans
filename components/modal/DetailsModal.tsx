import { Calendar, CheckCircle2, Sparkles, X } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

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
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="w-full max-w-lg p-0 overflow-hidden bg-white rounded-3xl max-h-[85vh] flex flex-col"
      >
        {/* Header */}
        <DialogHeader className="bg-bean-blue px-5 py-4 text-white relative flex-shrink-0">
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full w-8 h-8"
            >
              <X size={18} />
            </Button>
          </DialogClose>

          <div className="flex items-center justify-between pr-10">
            <div>
              <DialogTitle className="text-xl font-black tracking-tight uppercase text-white">
                {title}
              </DialogTitle>
              <DialogDescription className="text-white/60 text-sm mt-0.5">
                {content}
              </DialogDescription>
            </div>
            {price && (
              <div className="flex items-baseline gap-0.5 bg-bean-accent text-bean-dark px-3 py-1.5 rounded-xl">
                <span className="text-xs font-bold">$</span>
                <span className="text-xl font-black">{price}</span>
              </div>
            )}
          </div>
        </DialogHeader>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* Features */}
          {features && (
            <div className="grid grid-cols-2 gap-2">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 bg-gray-50 px-3 py-2.5 rounded-xl border border-gray-100"
                >
                  <CheckCircle2 size={14} className="text-bean-blue flex-shrink-0" />
                  <span className="text-bean-dark font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Outcome */}
          {outcome && (
            <div className="bg-bean-blue/5 border border-bean-blue/10 px-4 py-3 rounded-xl flex gap-3">
              <Sparkles size={16} className="text-bean-accent flex-shrink-0 mt-0.5" />
              <p className="text-bean-dark/80 text-sm leading-relaxed">
                {outcome}
              </p>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="p-5 pt-0 flex-shrink-0">
          <DialogClose asChild>
            <Button
              asChild
              className="flex items-center justify-center gap-2 w-full py-4 bg-bean-accent text-bean-dark font-black rounded-xl hover:bg-bean-accent/90 active:scale-[0.98] transition-all shadow-lg uppercase tracking-tight group h-auto"
            >
              <Link href="#contact">
                <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                Book Now
              </Link>
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
