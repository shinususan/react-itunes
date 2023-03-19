export const mediaTypes = [
  "movie",
  "podcast",
  "music",
  "musicVideo",
  "audiobook",
  "shortFilm",
  "tvShow",
  "software",
  "ebook",
  "all",
];

export async function itunesApiRequest(
  term: string,
  media = "all",
  offset = "0"
) {
  const url = new URL("https://itunes.apple.com/search");
  const params = {
    limit: "10",
    term,
    media,
    offset,
  };
  try {
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url.toString());
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return {
      results: []
    };
  }
}
