declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (
      command: "config" | "event",
      id: string,
      params?: Record<string, any>
    ) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lintrk: (command: "track", params: Record<string, any>) => void;
  }
}
export {};
