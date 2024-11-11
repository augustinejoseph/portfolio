import { MEDIUM_API_LINK, axios, SKILLS_GOOGLE_SHEETS_LINK, PROJECTS_GOOGLE_SHEETS_LINK, PROFILE_GOOGLE_SHEETS_LINK } from '../../imports'
import { } from '../../imports.jsx'


export const fetchMediumArticles = async () => {
    const response = await axios.get(MEDIUM_API_LINK)
    return response?.data
}

export const fetchSkillListFromSheet = async () => {
    console.log('Fetching Skill List Sheet...');
    const response = await axios.get(SKILLS_GOOGLE_SHEETS_LINK);
    console.log('Skill List Data:', response.data);
    return response?.data;
  };
  
  export const fetchProjectListFromSheet = async () => {
    console.log('Fetching Project List Sheet...');
    const response = await axios.get(PROJECTS_GOOGLE_SHEETS_LINK);
    console.log('Project List Data:', response.data);
    return response?.data;
  };
  
  export const fetchProfileListFromSheet = async () => {
    console.log('Fetching Profile Sheet...');
    const response = await axios.get(PROFILE_GOOGLE_SHEETS_LINK);
    console.log('Profile Data:', response.data);
    return response?.data;
  };

  export const sanitizeAndParseJSON = (jsonString) => {
    try {
      // Clean up the JSON string by removing unwanted characters (quotes, newlines, etc.)
      const cleanedString = jsonString
        .replace(/""/g, '"') // Replace double quotes with a single quote
        .replace(/\n/g, '')  // Remove newlines
        .replace(/\s+/g, ' ') // Remove extra spaces
        .trim(); // Remove leading/trailing whitespace

      // Now, parse the cleaned string as JSON
      return JSON.parse(cleanedString);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return [];  // Return an empty array in case of parsing error
    }
  };