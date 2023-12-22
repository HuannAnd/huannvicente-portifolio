import { useEffect } from 'react';

type EventCallback = (event: Event) => void;

export default function useWindowEventListenerEffect(
  eventName: string,
  callback: EventCallback,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    const eventListener = (event: Event) => callback(event)

    window.addEventListener(eventName, eventListener, options)
    return () => {
      window.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, callback, options]);
}
