import { ProcessStep } from '@/lib/types';
import { FREE_CONSULTATION_DURATION } from '@/lib/constants';

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Free Consultation',
    icon: '📞',
    description: `Start with a complimentary ${FREE_CONSULTATION_DURATION}-minute video call to discuss your goals and how coaching can help you reach them.`,
    details: [
      'Share your volleyball experience and aspirations',
      'Discuss current challenges and areas for improvement',
      'Learn about coaching approach and methods',
      'Ask any questions about the process',
      "Determine if we're a good fit to work together",
    ],
  },
  {
    step: 2,
    title: 'Initial Assessment',
    icon: '📊',
    description: 'Get a comprehensive evaluation of your current skill level, strengths, and areas for development.',
    details: [
      'Technical skill evaluation (serving, passing, setting, hitting, blocking)',
      'Physical fitness and conditioning baseline',
      'Game understanding and volleyball IQ assessment',
      'Mental approach and mindset evaluation',
      'Video analysis of your current technique',
    ],
  },
  {
    step: 3,
    title: 'Custom Training Plan',
    icon: '📋',
    description: 'Receive a personalized development roadmap tailored specifically to your goals, skill level, and timeline.',
    details: [
      'Short-term goals (3-6 months) and long-term objectives',
      'Specific drills and exercises for your development',
      'Training schedule recommendations',
      'Nutrition and fitness guidance',
      'Mental performance strategies',
      'Milestones and progress markers',
    ],
  },
  {
    step: 4,
    title: 'Regular Coaching Sessions',
    icon: '🎯',
    description: 'Engage in consistent, focused training through your chosen format - online, video analysis, or in-person.',
    details: [
      'Technical skill refinement and correction',
      'Progressive skill development',
      'Game strategy and tactical training',
      'Confidence building and mental performance',
      'Real-time feedback and adjustments',
      'Session recordings for continued learning',
    ],
  },
  {
    step: 5,
    title: 'Progress Tracking & Adjustment',
    icon: '📈',
    description: "Regular reviews and plan adjustments ensure you're always moving forward and achieving your goals.",
    details: [
      'Monthly progress reviews and assessments',
      'Video library of all sessions for reference',
      'WhatsApp check-ins and support',
      'Training plan adjustments based on progress',
      'Competition preparation and strategy',
      'Celebrate achievements and set new goals',
    ],
  },
];

export function getProcessStepByNumber(stepNumber: number): ProcessStep | undefined {
  return processSteps.find((step) => step.step === stepNumber);
}

export default processSteps;
