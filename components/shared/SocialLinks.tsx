import { Instagram, Youtube, Facebook } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://instagram.com/beansvolleyball"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        className="text-foreground-secondary hover:text-primary-purple-start transition-colors duration-200"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a
        href="https://youtube.com/@beansvolleyball"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Subscribe to our YouTube channel"
        className="text-foreground-secondary hover:text-primary-purple-start transition-colors duration-200"
      >
        <Youtube className="w-6 h-6" />
      </a>
      <a
        href="https://facebook.com/beansvolleyball"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Like us on Facebook"
        className="text-foreground-secondary hover:text-primary-purple-start transition-colors duration-200"
      >
        <Facebook className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;
