const API_URL = "http://localhost:5000";

export const getBackendMessage = async () => {
  try {
    const response = await fetch(API_URL);

    const data = await response.json();

    return data.message;
  } catch (error) {
    console.log(error);

    return "Backend connection failed";
  }
};