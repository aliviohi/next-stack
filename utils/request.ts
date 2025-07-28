import { toast } from 'sonner';
import { getAuthToken } from './cookies';

type RequestOptions = {
  url: string;
  method?: string;
  data?: unknown;
  error?: string;
  headers?: Record<string, string>;
};

export async function request<T>(options: RequestOptions): Promise<T> {
  const {
    url,
    method = 'GET',
    data,
    error = 'Request failed',
    headers = { 'Content-Type': 'application/json' },
  } = options;

  // Get auth token from cookie
  const authToken = getAuthToken();

  // Add authorization header if token exists
  const requestHeaders = { ...headers };
  if (authToken) {
    requestHeaders['Authorization'] = `Bearer ${authToken}`;
  }

  const requestOptions: RequestInit = {
    method,
    headers: requestHeaders,
  };

  // Only include body for non-GET requests
  if (method !== 'GET' && data) {
    requestOptions.body = JSON.stringify(data);
  }

  const res = await fetch(url, requestOptions);

  if (!res.ok) {
    let errorMsg = error;
    try {
      const errorData = await res.json();
      errorMsg = errorData.message || errorMsg;
    } catch {}
    toast.error(errorMsg);
    throw new Error(errorMsg);
  }
  // Show success toast for non-GET requests
  if (method !== 'GET') {
    toast.success('Request successful');
  }
  return res.json();
}
