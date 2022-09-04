import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = message => toast.warn(message, {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export const success = message => toast.success(message,  {
position: "top-center",
autoClose: 3000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});