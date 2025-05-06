import { FC } from 'react';
import { Bus } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = 'text-primary-900' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center justify-center bg-primary-900 rounded-md p-1 mr-2">
        <Bus className="h-6 w-6 text-accent-500" />
      </div>
      <div className="flex flex-col">
        <span className="font-display font-bold text-lg leading-none">AmirExpress</span>
        <span className="text-xs font-medium opacity-90">Travel & Tours</span>
      </div>
    </div>
  );
};

export default Logo;