'use client';

import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      const hour = new Date().getHours();
      // Night: 6 PM (18) to 6 AM (6)
      const isNight = hour >= 18 || hour < 6;
      setIsDark(isNight);
      document.documentElement.setAttribute('data-theme', isNight ? 'dark' : 'light');
    };

    updateTheme();
    // Check theme every minute
    const interval = setInterval(updateTheme, 60000);
    return () => clearInterval(interval);
  }, []);

  return <>{children}</>;
}
