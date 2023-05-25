import axios from 'axios';

export default class ProjectsService {
  constructor() {
    this.API_URL = `${import.meta.env.VITE_API_URL}`;
    // this.API_URL = axios.create({
    //   baseURL: `${import.meta.env.VITE_API_URL}`,
    // });
    // this.API_URL.interceptors.request.use((config) => {
    //   const storedToken = localStorage.getItem('authToken');

    //   if (storedToken) {
    //     config.headers = { Authorisation: `Bearer ${storedToken}` };
    //   }
    //   return config;
    // },
    // (error) => {
    //     Promise.reject(error);
    //   }
    // );
  }

  getProjects() {
    return axios.get(`${this.API_URL}`);
  }

  getOneProject(projId) {
    return axios.get(`${this.API_URL}/${projId}`); 
  }

  addProject(project) {
    return axios.post(`${this.API_URL}/new`, project); // hay que sacar el "/new"
  }

  editProject(projId, project) {
    return axios.put(`${this.API_URL}/${projId}/edit`, project); // hay que sacar el "/edit"
  }

  deleteProject(projId) {
    return axios.delete(`${this.API_URL}/${projId}/delete`); // hay que sacar el "/delete"
  }

  uploadFile(file) {
    return axios.post(`${this.API_URL}/upload`, file);
  }
}
