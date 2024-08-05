const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

export const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`There was an error when fetching data: ${errorMessage}`);
    }
    return await response.json();
};

export const getInfo = async (id, fetchType) => {
    return await fetchData(`${baseUrl}/${fetchType}/${id}?api_key=${apiKey}`);
};

export const getSearchResult = async (query, resultType) => {
    const data = await fetchData(`${baseUrl}/search/${resultType}?query=${query}&api_key=${apiKey}`);
    return data.results;
};

export const getMediaItems = async (id, fetchType, itemType) => {
    const data = await fetchData(`${baseUrl}/${fetchType}/${id}/${itemType}?api_key=${apiKey}`);
    if (itemType === "videos") {
        const trailer = data?.results?.find((v) => v.type === "Trailer") || data.results[0] || [];
        return trailer;
    } else {
        if (itemType === "credits" || itemType === "combined_credits") {
            return data.cast;
        } else {
            return data.results;
        }
    }
};

export const getMediaPerCategory = async (mediaType, fetchType, page = 1) => {
    let url;

    switch (mediaType) {
        case "trending":
            url = `${baseUrl}/${mediaType}/${fetchType}/day?api_key=${apiKey}`;
            break;
        case "discover":
            url = `${baseUrl}/${mediaType}/${fetchType}?api_key=${apiKey}`;
            break;
        default:
            url = `${baseUrl}/${fetchType}/${mediaType}?page=${page}&api_key=${apiKey}`;
            break;
    }

    const data = await fetchData(url);
    return data.results;
};


export const getEpisodes = async (seriesId, seasonId) => {
    const data = await fetchData(`${baseUrl}/tv/${seriesId}/season/${seasonId}?api_key=${apiKey}`);
    return data.episodes;
};

export const getEpisodeCredits = async (seriesId, seasonId, episodeId) => {
    const data = await fetchData(`${baseUrl}/tv/${seriesId}/season/${seasonId}/episode/${episodeId}/credits?api_key=${apiKey}`);
    return data;
};

export const fetchCountryName = async () => {
    const data = await fetchData('https://ipapi.co/json/');
    return data.country_name;
};
