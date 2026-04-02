import axios from "axios";

//artists API
 export const getArtists = async () => {
    const { 
        data: { results },
    } = await axios.get("http://localhost:5174/api/artists");

    const artistsData = await Promise.all(
      results.map(async ({ url }) => {
        const { data } = await axios.get(url);
        return data;
    })
  );
    return artistsDatas;
  };