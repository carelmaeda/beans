import { FAQItem } from '@/lib/types';

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What age groups do you work with?',
    answer: 'I primarily work with athletes aged 13-16, but I also coach younger players (10+) and older athletes who are serious about improving their game. Each training plan is customized to the athlete\'s age, skill level, and goals.',
  },
  {
    id: '2',
    question: 'What equipment do I need for online coaching?',
    answer: 'For online coaching, you\'ll need a device with a camera and stable internet connection (laptop, tablet, or smartphone). For training, basic equipment includes a volleyball, comfortable athletic wear, and enough space to move (living room, garage, or backyard). I\'ll provide a detailed equipment list during your free consultation.',
  },
  {
    id: '3',
    question: 'Can I switch between service types in my monthly package?',
    answer: 'Yes! The monthly package (4 sessions for $500 CAD) is flexible. You can mix online coaching, in-person training, and video analysis sessions based on your needs. This flexibility allows you to adapt your training to your schedule and goals.',
  },
  {
    id: '4',
    question: 'What is your cancellation policy?',
    answer: 'I require 24 hours notice for cancellations or rescheduling. If you cancel with less than 24 hours notice, the session will be forfeited. However, I understand emergencies happen - please communicate with me and we\'ll work something out.',
  },
  {
    id: '5',
    question: 'How quickly will I see improvement?',
    answer: 'Most athletes notice improvements within 2-4 weeks of consistent training. However, the timeline varies based on your starting skill level, practice frequency, and dedication. During your free consultation, I\'ll provide a realistic assessment of what you can expect.',
  },
  {
    id: '6',
    question: 'Do you offer group training sessions?',
    answer: 'Yes! I offer small group sessions (2-4 athletes) for in-person training. This is a great option for teammates who want to train together or siblings. Group rates are available - contact me for details.',
  },
  {
    id: '7',
    question: 'What if I\'m a complete beginner?',
    answer: 'Perfect! I love working with athletes at all levels. Whether you\'re brand new to volleyball or looking to refine advanced skills, I\'ll create a training plan tailored to your current abilities and help you progress at your own pace.',
  },
  {
    id: '8',
    question: 'How do I prepare for my first session?',
    answer: 'Start with the free 30-minute consultation where we\'ll discuss your goals, assess your current level, and answer any questions. Before your first training session, I\'ll send you a preparation guide including warm-up exercises, what to have ready, and what to expect.',
  },
];

export function getFAQById(id: string): FAQItem | undefined {
  return faqItems.find((item) => item.id === id);
}

export default faqItems;
