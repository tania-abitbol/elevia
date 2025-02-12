declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      id: string,
      params?: Record<string, unknown> // Remplace `any` par `unknown`
    ) => void;
    lintrk: (command: "track", params: Record<string, unknown>) => void;
  }
}

export {};
