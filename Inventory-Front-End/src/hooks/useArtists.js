import { useState, useEffect, useCallback } from 'react';
import {
  getArtists,
  getArtist,
  updateArtist,
  deleteArtist,
} from '../api/artistsApi';

export function useArtistList() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const fetchArtists = useCallback(() => {
    setLoading(true);
    setError(null);
    getArtists()
      .then(setArtists)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchArtists();
  }, [fetchArtists]);

  return { artists, loading, error, refetch: fetchArtists };
}


export function useArtistDetail(id) {
  const [artist, setArtist]   = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    getArtist(id)
      .then(setArtist)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { artist, loading, error };
}

  const update = useCallback(async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const result = await updateArtist(id, data);
      onSuccess?.('update', result);
      return result;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [onSuccess]);

  const remove = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteArtist(id);
      onSuccess?.('delete', id);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [onSuccess]);

  return { create, update, remove, loading, error };