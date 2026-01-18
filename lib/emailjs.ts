import emailjs from '@emailjs/browser';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

if (!serviceId || !templateId || !publicKey) {
  console.warn('EmailJS credentials not configured. Please add environment variables.');
}

export interface ContactFormData {
  from_name: string;
  from_email: string;
  phone?: string;
  service?: string;
  message: string;
}

export const sendContactEmail = async (data: ContactFormData) => {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      'EmailJS not configured. Please add NEXT_PUBLIC_EMAILJS_* environment variables.'
    );
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      data as unknown as Record<string, unknown>,
      publicKey
    );
    return response;
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
};

export default {
  sendContactEmail,
};
