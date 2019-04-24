import {useState} from 'react';
import {createPortal} from 'react-dom';
import usePortal from '../hooks/usePortal';

const Modal = ({root, component, initialVisibile}) => {

  const [visibile, setVisible] = useState(initialVisibile);
  const toggleVisible = () => setVisible(!visibile);
  const target = usePortal(root, visibile);
  return createPortal(
    component(toggleVisible),
    target,
  );
};

export default Modal;
