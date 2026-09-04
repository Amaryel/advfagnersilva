import React, { useState } from 'react';
import { Scale, ImageOff } from 'lucide-react';

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackIcon?: React.ElementType;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackIcon: FallbackIcon = Scale,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!src || hasError) {
    return (
      <div 
        className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#121927] via-[#1a2337] to-[#0f1726] border border-[#22304a] text-[#c5a880] p-6 text-center select-none ${containerClassName}`}
      >
        <div className="p-3 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 mb-2 shadow-inner">
          <FallbackIcon className="w-8 h-8 text-[#c5a880]" />
        </div>
        <span className="text-xs font-serif font-bold uppercase tracking-wider text-[#e2e8f0]">
          {alt}
        </span>
        <span className="text-[10px] text-[#94a3b8] font-mono mt-1">
          Dr. Fagner Silva • Advocacia Criminal
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#0e1422] animate-pulse flex items-center justify-center">
          <Scale className="w-6 h-6 text-[#c5a880]/40 animate-bounce" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      />
    </div>
  );
};
