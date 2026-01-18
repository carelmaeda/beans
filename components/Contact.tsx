'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Instagram, Youtube, Facebook, Send, Loader2, CheckCircle, AlertCircle, Mail } from 'lucide-react';
import { sendContactEmail } from '@/lib/emailjs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactSchema = z.object({
  from_name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  athlete_age: z.string().optional(),
  from_email: z.string().email('Please enter a valid email address'),
  inquiry_type: z.enum(['online-coaching', 'video-analysis', 'in-person', 'little-seeds', 'other'], {
    message: 'Please select an inquiry type',
  }),
  goals: z.string().min(10, 'Please tell us more about your goals').max(1000, 'Message too long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const { register, handleSubmit, reset, control, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    try {
      await sendContactEmail({
        from_name: data.from_name,
        from_email: data.from_email,
        service: data.inquiry_type,
        message: `Age: ${data.athlete_age || 'Not specified'}\n\nGoals:\n${data.goals}`,
      });
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bean-dark px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Bold Dark Style */}
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 bg-bean-accent/20 text-bean-accent rounded-full text-[10px] font-black tracking-widest uppercase mb-4">
            The Harvest
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">
            READY TO <span className="text-bean-blue">GROW?</span>
          </h2>
          <div className="w-20 h-2 bg-bean-accent rounded-full" />
        </div>

        {/* Contact Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Branding & Info (5 Cols) */}
          <div className="lg:col-span-5 bg-bean-blue rounded-[3rem] p-10 md:p-14 text-white flex flex-col justify-between overflow-hidden relative group shadow-2xl">
            {/* Vertical Japanese Watermark */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block select-none opacity-[0.1] pointer-events-none">
              <p className="text-[7rem] font-black writing-vertical-rl tracking-widest uppercase">
                成長と種
              </p>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black tracking-tight uppercase mb-6 leading-none">
                Direct <br />
                Mentorship
              </h3>
              <p className="text-white/80 font-medium leading-relaxed mb-12 max-w-xs">
                Coach Mami personally reviews every application to ensure elite technical standards.
              </p>

              <div className="space-y-4">
                <p className="text-[10px] font-black text-bean-accent tracking-[0.3em] uppercase">Inquiries</p>
                <a href="mailto:info@beansvolleyball.com" className="text-xl md:text-2xl font-black hover:text-bean-accent transition-colors block border-b border-white/20 pb-4">
                  info@beansvolleyball.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 mt-12 relative z-10">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-bean-accent hover:text-bean-dark transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: The Form (7 Cols) - Glassmorphism Style */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-sm rounded-[3rem] p-8 md:p-14 border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-bean-accent">Athlete Name *</Label>
                  <Input 
                    {...register('from_name')}
                    placeholder="Full Name"
                    className="bg-transparent border-0 border-b-2 border-white/20 rounded-none h-12 text-white focus-visible:ring-0 focus-visible:border-bean-accent transition-colors placeholder:text-white/20"
                  />
                  {errors.from_name && <p className="text-xs text-red-400 font-bold">{errors.from_name.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-bean-accent">Email Address *</Label>
                  <Input 
                    {...register('from_email')}
                    placeholder="email@example.com"
                    className="bg-transparent border-0 border-b-2 border-white/20 rounded-none h-12 text-white focus-visible:ring-0 focus-visible:border-bean-accent transition-colors placeholder:text-white/20"
                  />
                  {errors.from_email && <p className="text-xs text-red-400 font-bold">{errors.from_email.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-bean-accent">Athlete Age</Label>
                  <Input 
                    {...register('athlete_age')}
                    placeholder="e.g. 17"
                    className="bg-transparent border-0 border-b-2 border-white/20 rounded-none h-12 text-white focus-visible:ring-0 focus-visible:border-bean-accent transition-colors placeholder:text-white/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-bean-accent">Program Interest *</Label>
                  <Controller
                    name="inquiry_type"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="bg-transparent border-0 border-b-2 border-white/20 rounded-none h-12 text-white focus:ring-0 focus:border-bean-accent">
                          <SelectValue placeholder="Choose Service" />
                        </SelectTrigger>
                        <SelectContent className="bg-bean-dark border-white/10 text-white">
                          <SelectItem value="online-coaching">Online Coaching</SelectItem>
                          <SelectItem value="video-analysis">Video Analysis</SelectItem>
                          <SelectItem value="in-person">In-Person Training</SelectItem>
                          <SelectItem value="little-seeds">Little Seeds</SelectItem>
                          <SelectItem value="other">Other Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-bean-accent">What are your goals? *</Label>
                <Textarea 
                  {...register('goals')}
                  placeholder="Tell us what you want to achieve..."
                  className="bg-white/5 border border-white/10 rounded-3xl h-32 text-white focus-visible:ring-0 focus-visible:border-bean-accent p-6 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="w-full bg-bean-accent text-bean-dark hover:bg-white py-8 rounded-[2rem] font-black text-xl uppercase tracking-tighter transition-all active:scale-95 disabled:opacity-50 h-auto shadow-xl"
              >
                {submitStatus === 'loading' ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : submitStatus === 'success' ? (
                  <div className="flex items-center gap-2"><CheckCircle size={24}/> APPLICATION SENT</div>
                ) : (
                  <div className="flex items-center gap-2">SEND APPLICATION <Send size={20}/></div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}