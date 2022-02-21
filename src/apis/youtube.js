import axios from "axios";

const KEY = "AIzaSyB3b4pl-qbfCHmoha8v89l-sciKBRu_lhs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
