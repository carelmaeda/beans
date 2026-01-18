import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <div className="h-10 aspect-square flex items-center justify-center" aria-label="Beans Logo">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="beanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--bean-yellow-bright)" />
              <stop offset="100%" stopColor="var(--bean-yellow-primary)" />
            </linearGradient>
          </defs>
          <ellipse cx="50" cy="50" rx="30" ry="40" fill="url(#beanGradient)" transform="rotate(20 50 50)" />
          <ellipse cx="48" cy="45" rx="8" ry="12" fill="white" opacity="0.3" transform="rotate(20 48 45)" />
        </svg>
      </div>
      <span className="font-bold text-[var(--bean-blue-primary)] text-2xl">BEANS</span>
    </Link>
  );
};

export default Logo;
