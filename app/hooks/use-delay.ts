import { useRef } from "react";

/**
 * The function signature for a callback function.
 */
type CallbackFunction = () => unknown;

/**
 * The function signature for the delay function.
 *
 * @param {CallbackFunction} cb The callback function to be executed after the delay.
 * @param {number} ms The milliseconds to delay the execution.
 */
type DelayFunction = (cb: CallbackFunction, ms: number) => void;

/**
 * Creates a delay function that can be used to delay the execution of a function
 * by using a reference to a timer that will be cleared every time the created
 * delay function is called.
 *
 * @returns {DelayFunction} The delay function.
 */
export function useDelay(): DelayFunction {
  const timer = useRef<NodeJS.Timeout | null>(null);

  return (cb, ms) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => cb(), ms);
  };
}
