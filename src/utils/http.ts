import { API_URL } from '@env';

export class Http {
  public static async get<T>(url: string, signal?: AbortSignal): Promise<T> {
    const res = await fetch(`${API_URL}${url}`, {
      method: 'GET',
      signal,
    });

    const json = await res.json();

    return json;
  }

  public static async post<T>(url: string, data: T): Promise<T> {
    const res = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    return json;
  }

  public static async patch<T>(url: string, data: T): Promise<T> {
    const res = await fetch(`${API_URL}${url}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    return json;
  }
}
