'use client';

import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Tawk.to chat widget
    // You'll need to replace this with your actual Tawk.to Property ID
    const tawkPropertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
    const tawkWidgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

    if (!tawkPropertyId || !tawkWidgetId) {
      console.log('Tawk.to chat widget not configured. Add NEXT_PUBLIC_TAWK_PROPERTY_ID and NEXT_PUBLIC_TAWK_WIDGET_ID to your .env.local file.');
      return;
    }

    // Load Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${tawkPropertyId}/${tawkWidgetId}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.body.appendChild(script);

    // Cleanup
    return () => {
      const tawkScript = document.querySelector(`script[src*="tawk.to"]`);
      if (tawkScript) {
        document.body.removeChild(tawkScript);
      }
      // @ts-ignore - Tawk_API is global
      if (window.Tawk_API) {
        // @ts-ignore
        window.Tawk_API = undefined;
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}
