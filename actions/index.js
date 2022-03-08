import { useState } from 'react';
import { createPortfolio } from './portfolios';

export const fetcher = async (url) => {
  const res = await fetch(url);
  const result = await res.json();
  if (res.status !== 200) {
    return Promise.reject(result);
  } else {
    return result;
  }
};

export function useApiHandler(apiCall) {
  const [reqState, setReqState] = useState({
    data: null,
    error: null,
    loading: false,
  });

  const handler = async (...data) => {
    setReqState({ data: null, error: null, loading: true });
    try {
      const json = await apiCall(...data);
      setReqState({ error: null, data: json.data, loading: false });
    } catch (error) {
      const message =
        (error.response && error.response.data.message) ||
        'Oops something went wrong...';
      setReqState({ error: message, data: null, loading: false });
    }
  };

  return [handler, { ...reqState }];
}
