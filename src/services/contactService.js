import api from "../api/axios";

export const sendMessage = async (message) => {
  try {
    const res = await api.post("/workintech", message);
    return res.data;
  } catch (err) {
    console.error("Send failed:", err);
    throw err; 
  }
};
