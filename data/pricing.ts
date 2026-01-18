import { PricingTier } from '@/lib/types';
import { PRICING, ROUTES } from '@/lib/constants';

export const pricingTiers: PricingTier[] = [
  {
    id: 'single-session',
    name: 'Single Session',
    price: PRICING.SINGLE_SESSION,
    period: 'session',
    description: 'Perfect for trying out coaching or occasional training',
    features: [
      '60-minute one-on-one session',
      'Online or in-person (select locations)',
      'Personalized feedback',
      'Session recording (online only)',
      'Flexible scheduling',
    ],
    highlighted: false,
    ctaText: 'Book Session',
    ctaLink: ROUTES.CONTACT,
  },
  {
    id: 'monthly-package',
    name: 'Monthly Package',
    price: PRICING.MONTHLY_PACKAGE,
    period: 'month',
    description: 'Best value - 4 sessions per month with ongoing support',
    features: [
      '4 x 60-minute sessions',
      'Mix online, video analysis, or in-person',
      'Custom training plan',
      'Progress tracking & reviews',
      'WhatsApp support between sessions',
      'Priority scheduling',
      'Save $100 vs single sessions',
    ],
    highlighted: true,
    ctaText: 'Get Started',
    ctaLink: ROUTES.CONTACT,
  },
  {
    id: 'video-analysis',
    name: 'Video Analysis',
    price: PRICING.VIDEO_ANALYSIS,
    period: 'video',
    description: 'Detailed technical analysis of your training or match footage',
    features: [
      'Frame-by-frame analysis',
      'Written feedback report',
      'Annotated video with comments',
      'Specific drill recommendations',
      '48-hour turnaround',
      'Follow-up questions included',
    ],
    highlighted: false,
    ctaText: 'Submit Video',
    ctaLink: ROUTES.CONTACT,
  },
];

export function getPricingById(id: string): PricingTier | undefined {
  return pricingTiers.find((tier) => tier.id === id);
}

export default pricingTiers;
