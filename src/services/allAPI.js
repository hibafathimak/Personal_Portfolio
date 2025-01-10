import commonAPI from "./commonAPI";
import SERVER_URL from './serverUrl';

// Messages
export const sendMessageAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/send-messages`, reqBody);
};

export const allMessagesAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/messages`, {});
};

export const deleteMessageAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVER_URL}/messages/${id}`, {});
};

// Skills
export const addSkillAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/skills`, reqBody);
};

export const getAllSkillsAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/skills`, {});
};

export const updateSkillLevelAPI = async (id, reqBody) => {
  return await commonAPI("PUT", `${SERVER_URL}/skills/${id}`, reqBody);
};

export const deleteSkillAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVER_URL}/skills/${id}`, {});
};

// Reminders
export const addReminderAPI = async (reqBody) => {
  return await commonAPI("POST", `${SERVER_URL}/reminders`, reqBody);
};

export const getAllRemindersAPI = async () => {
  return await commonAPI("GET", `${SERVER_URL}/reminders`, {});
};

export const deleteReminderAPI = async (id) => {
  return await commonAPI("DELETE", `${SERVER_URL}/reminders/${id}`, {});
};

// Projects

export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}

export const getAllProjectsAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/all-projects`,{})
}

export const updateProjectAPI =async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/projects/${id}/edit`,reqBody,reqHeader)
}

export const deleteProjectAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/projects/${id}/remove`,{})
}
