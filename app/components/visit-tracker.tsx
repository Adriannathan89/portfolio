import { useEffect } from "react";

export function VisitTracker() {
  useEffect(() => {
    if (navigator.webdriver) return;

    void fetch("/api/visit", {
      method: "POST",
      credentials: "same-origin",
      keepalive: true,
    });
  }, []);

  return null;
}
