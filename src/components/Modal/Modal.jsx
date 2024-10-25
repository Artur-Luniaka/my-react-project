import { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
   const modalIv =  setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
   }, 2000);
      return () => clearInterval(modalIv)
  }, []);

  return <div>Modal</div>;
};
export default Modal;