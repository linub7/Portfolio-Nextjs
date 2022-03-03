import useSWR from 'swr';

export const fetcher = async (url) => {
  const res = await fetch(url);
  const result = await res.json();
  if (res.status !== 200) {
    return Promise.reject(result);
  } else {
    return result;
  }
};

export const useGetUser = () => {
  const { data, error, ...rest } = useSWR('/api/v1/me', fetcher);
  return { data, error, loading: !data && !error, ...rest };
};
