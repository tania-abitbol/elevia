declare global {
  interface Window {
    gtag: (event: string, action: string, options: { send_to: string; value: number; currency: string }) => void;
  }
}

export {};
