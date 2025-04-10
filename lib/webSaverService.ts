/* eslint-disable no-console */
import axios from "axios";

const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;

if (!API_SERVER) {
  throw new Error("API_SERVER is not defined in the environment variables.");
}

export const webSaverService = {
  async fetchData(): Promise<any> {
    try {
      const response = await axios.get(`${API_SERVER}/page`);

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },

  async saveData(payload: any): Promise<any> {
    try {
      const response = await axios.post(`${API_SERVER}/save`, payload);

      return response.data;
    } catch (error) {
      console.error("Error saving data:", error);
      throw error;
    }
  },
};
