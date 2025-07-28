export const GA_TRACKING_ID = '';

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Define the event parameters
interface GtagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Function to track page views
export const pageview = (url: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Function to track custom events
export const event = ({ action, category, label, value }: GtagEvent): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
