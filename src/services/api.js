import axios from "axios";

const API_KEY = "NfCQ9fxWsDvN2aBU4KQ7HxQYMdIgQhWOKzUPl7C4fNo";
const BASE_URL = "https://api.unsplash.com";

const fetchImages = async (query, page = 1) => {
  // console.log("API_KEY:", API_KEY);

  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: {
        query,
        page,
        per_page: 12,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export default fetchImages;
