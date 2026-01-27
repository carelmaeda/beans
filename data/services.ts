import { Service } from '@/lib/types';
import { PRICING, SERVICE_IDS } from '@/lib/constants';

export const services: Service[] = [
  {
    id: SERVICE_IDS.ONLINE_COACHING,
    title: 'Online Coaching',
    description: 'Train with me from anywhere. Weekly video sessions with real-time feedback.',
    price: PRICING.SINGLE_SESSION,
    priceLabel: 'per session',
    icon: 'Monitor',
    image: '/images/services/online-coaching.jpg',
    detailedDescription: 'I coach you live via video—personalized drills, technique fixes, game strategy. All from your location.',
    features: [
      '60-min 1-on-1 video sessions',
      'Custom training plans',
      'Real-time corrections',
      'Personalized drills',
      'Train from anywhere',
      'Flexible scheduling',
      'Session recordings',
      'WhatsApp support',
    ],
  },
  {
    id: SERVICE_IDS.VIDEO_ANALYSIS,
    title: 'Video Lab',
    description: 'Send me your footage. I break down your technique frame-by-frame.',
    price: PRICING.VIDEO_ANALYSIS,
    priceLabel: 'per video',
    icon: 'Video',
    image: '/images/services/video-analysis.jpg',
    detailedDescription: 'I analyze your footage frame-by-frame and show you exactly what to fix.',
    features: [
      'Frame-by-frame breakdown',
      'Technical analysis',
      'Written report',
      'Drill prescriptions',
      '48-hour turnaround',
      'Annotated video',
      'Follow-up Q&A',
      'Actionable fixes',
    ],
  },
  {
    id: SERVICE_IDS.IN_PERSON,
    title: 'In-Person Training',
    description: 'Hands-on sessions with me. Real court, real intensity, instant feedback.',
    price: PRICING.SINGLE_SESSION,
    priceLabel: 'per session',
    icon: 'Users',
    image: '/images/services/in-person.jpg',
    detailedDescription: 'I work with you directly on court—drills, conditioning, game pressure.',
    features: [
      '60-min session',
      'Direct corrections',
      'Conditioning guidance',
      'Position work',
      'Game drills',
      'Select locations',
      'Small groups available',
      'Bonus video analysis',
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
