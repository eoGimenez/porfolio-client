import { useState } from 'react';
import ProjectsService from '../services/projects.service';

export function useFile() {
  const projectService = new ProjectsService();
  const [imageAuxil, setImageAuxil] = useState('');
  

  const handleImage = (e) => {
    const uploadData = new FormData();
    uploadData.append('image', e.target.files[0]);
    projectService
      .uploadFile(uploadData)
      .then((response) => {
        console.log(response);
        setImageAuxil(response.data.imageUrl);
        return imageAuxil;
      })
      .catch((err) => console.log('Error while uploading the image: ', err));
  };

  return { handleImage, imageAuxil };
}
