import { Service } from '@/lib/types';
import { PRICING, SERVICE_IDS } from '@/lib/constants';

export const services: Service[] = [
  {
    id: SERVICE_IDS.ONLINE_COACHING,
    title: 'Online Coaching',
    description: 'One-on-one video sessions with personalized training plans. Real-time feedback from anywhere in the world.',
    price: PRICING.SINGLE_SESSION,
    priceLabel: 'per session',
    icon: 'Monitor',
    image: '/images/services/online-coaching.jpg',
    detailedDescription: 'Get professional volleyball mentorship from the comfort of your home. Real-time feedback, personalized drills, and technique refinement through high-quality video sessions.',
    features: [
      '60-minute one-on-one video sessions',
      'Personalized training plans',
      'Real-time feedback and corrections',
      'Custom drills and exercises',
      'Available anywhere in the world',
      'Flexible scheduling',
      'Session recordings for review',
      'WhatsApp support between sessions',
    ],
  },
  {
    id: SERVICE_IDS.VIDEO_ANALYSIS,
    title: 'Video Lab',
    description: 'Submit your training or match videos for detailed technical analysis and professional feedback.',
    price: PRICING.VIDEO_ANALYSIS,
    priceLabel: 'per video',
    icon: 'Video',
    image: '/images/services/video-analysis.jpg',
    detailedDescription: 'Upload videos of your training or matches and receive detailed, frame-by-frame analysis of your technique with actionable improvement strategies.',
    features: [
      'Detailed technical analysis',
      'Frame-by-frame technique breakdown',
      'Written feedback report',
      'Improvement strategies',
      'Specific drill recommendations',
      '48-hour turnaround time',
      'Annotated video with comments',
      'Follow-up questions welcome',
    ],
  },
  {
    id: SERVICE_IDS.IN_PERSON,
    title: 'In-Person Training',
    description: 'Hands-on coaching at gyms and facilities. Direct technique correction and physical conditioning.',
    price: PRICING.SINGLE_SESSION,
    priceLabel: 'per session',
    icon: 'Users',
    image: '/images/services/in-person.jpg',
    detailedDescription: 'Experience hands-on volleyball coaching with direct feedback and correction. Available at select locations.',
    features: [
      '60-minute in-person session',
      'Direct technique correction',
      'Physical conditioning guidance',
      'Court positioning and movement',
      'Game situation drills',
      'Available in major cities',
      'Small group options available',
      'Complementary video analysis',
    ],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getServiceByIndex(index: number): Service | undefined {
  return services[index];
}

export default services;
