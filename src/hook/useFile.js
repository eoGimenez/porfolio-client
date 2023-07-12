import { useState } from 'react';
import ProjectsService from '../services/projects.service';

export function useFile() {
  const projectService = new ProjectsService();
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState({});
  const [isLoadingImg, setIsLoadingImg] = useState(false);

  const onChange = (e) => {
    handleImage(e.target.files[0]);
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleImage(e.dataTransfer.files[0]);
  };

  function handleImage(file) {
    setIsLoadingImg(true);
    const uploadData = new FormData();
    uploadData.append('image', file);
    projectService
      .uploadFile(uploadData)
      .then((response) => {
        console.log(response);
        setStatus({ message: 'The file was successfully uploaded' });
        setImage(response.data.imageUrl);
        setIsLoadingImg(!isLoadingImg);
      })
      .catch((err) => {
        setStatus({
          message: 'Ocurrió un error de red, por favor, inténtalo nuevamente',
          codeError: err,
        });
        setIsLoadingImg(!isLoadingImg);
      });
  }

  return { image, status, isLoadingImg, onChange, handleDrag, handleDrop };
}
