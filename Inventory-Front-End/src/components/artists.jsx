import { useArtistList } from '../../hooks/useArtists';

export default function ArtistList() {
  const { artists, loading, error, refetch } = useArtistList();
  const { remove, loading: deleting } = useArtistMutations(refetch);


  return (
  );
};