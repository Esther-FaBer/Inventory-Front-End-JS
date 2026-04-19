import { useState, useCallback } from 'react';
import { login, getMe } from '../api/authApi';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  const handleLogin = useCallback(async (credentials) => {
    setLoading(true);
    try {
      const data = await login(credentials);
      return data;
    } catch (err) {
      setError(err.response?.data?.message ?? 'Login failed');
    } finally {
      setLoading(false);
    }
  }, []);

  return { handleLogin, loading, error };
}