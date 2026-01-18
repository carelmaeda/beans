import { z } from 'zod';

export const contactFormSchema = z.object({
  from_name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  from_email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        // Basic phone validation (allows various formats)
        return /^[\d\s\-\(\)\+]+$/.test(val);
      },
      { message: 'Please enter a valid phone number' }
    ),
  service: z
    .enum(['online-coaching', 'video-analysis', 'in-person', 'not-sure', ''], {
      message: 'Please select a service',
    })
    .optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
