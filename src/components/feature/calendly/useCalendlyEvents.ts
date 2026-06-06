// src/components/features/calendly/useCalendlyEvents.ts
"use client";

import { useEffect } from "react";

// Types des événements Calendly
// https://help.calendly.com/hc/en-us/articles/223147027
type CalendlyEventType =
  | "calendly.event_type_viewed"
  | "calendly.date_and_time_selected"
  | "calendly.event_scheduled"
  | "calendly.profile_page_viewed";

interface CalendlyEvent {
  event: CalendlyEventType;
  payload: {
    event?: { uri: string };
    invitee?: { uri: string };
  };
}

function isCalendlyEvent(e: MessageEvent): e is MessageEvent<CalendlyEvent> {
  return (
    e.origin === "https://calendly.com" &&
    typeof e.data === "object" &&
    "event" in e.data
  );
}

interface UseCalendlyEventsOptions {
  onEventScheduled?: (payload: CalendlyEvent["payload"]) => void;
  onDateTimeSelected?: () => void;
  onProfilePageViewed?: () => void;
}

export function useCalendlyEvents({
  onEventScheduled,
  onDateTimeSelected,
  onProfilePageViewed,
}: UseCalendlyEventsOptions = {}) {
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (!isCalendlyEvent(e)) return;

      switch (e.data.event) {
        case "calendly.event_scheduled":
          onEventScheduled?.(e.data.payload);
          break;
        case "calendly.date_and_time_selected":
          onDateTimeSelected?.();
          break;
        case "calendly.profile_page_viewed":
          onProfilePageViewed?.();
          break;
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onEventScheduled, onDateTimeSelected, onProfilePageViewed]);
}
