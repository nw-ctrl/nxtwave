'use client';

import { useEffect } from 'react';

export function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const { ip } = await response.json();

        // Get timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        // Get language
        const language = navigator.language;

        // Get screen resolution
        const screenResolution = `${window.innerWidth}x${window.innerHeight}`;

        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'visitor',
            data: {
              ip,
              timezone,
              language,
              screenResolution,
              page: window.location.pathname,
              referrer: document.referrer || 'Direct',
            },
          }),
        });
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    trackVisitor();
  }, []);

  return null;
}
