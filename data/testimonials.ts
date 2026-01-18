import { Testimonial } from '@/lib/types';

// TODO: Replace with actual testimonials from real clients
export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Mami\'s coaching transformed my game completely. Her technical expertise and personalized approach helped me earn a spot on my provincial team. The online sessions were just as effective as in-person training!',
    author: 'Sarah M.',
    role: 'U16 Provincial Player',
    rating: 5,
  },
  {
    id: '2',
    quote: 'As a parent, I was initially skeptical about online coaching. But Mami\'s professionalism and clear communication put my mind at ease. My daughter has improved tremendously and her confidence has soared.',
    author: 'Jennifer K.',
    role: 'Parent of Athlete',
    rating: 5,
  },
  {
    id: '3',
    quote: 'The video analysis service is incredible. Mami caught technical issues I didn\'t even know I had. Her feedback is detailed, actionable, and always constructive. Highly recommend!',
    author: 'Alex T.',
    role: 'High School Athlete',
    rating: 5,
  },
];

export function getTestimonialById(id: string): Testimonial | undefined {
  return testimonials.find((testimonial) => testimonial.id === id);
}

export default testimonials;
