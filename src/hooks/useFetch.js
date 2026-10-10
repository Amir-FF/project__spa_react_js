import { useEffect, useState } from "react";
import { request } from "../services/http";

/**
 * Fetches JSON from `url`.
 * Pass `null` to skip the request (e.g. when a route param is invalid).
 *
 * @returns {{ data: any, error: (Error & { status?: number }) | null, isLoading: boolean }}
 */
export const useFetch = (url) => {
  // The result remembers which url it belongs to, so a stale result is never
  // shown after the url changes and no state has to be reset inside the effect.
  const [result, setResult] = useState({ url: null, data: null, error: null });

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    request(url, { signal: controller.signal })
      .then((data) => setResult({ url, data, error: null }))
      .catch((error) => {
        if (error.name === "AbortError") return;
        setResult({ url, data: null, error });
      });

    // Cancel the request if the component unmounts or the url changes.
    return () => controller.abort();
  }, [url]);

  const isCurrent = result.url === url;

  return {
    data: isCurrent ? result.data : null,
    error: isCurrent ? result.error : null,
    isLoading: Boolean(url) && !isCurrent,
  };
};
