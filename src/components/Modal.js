import {useState} from 'react';
import PropTypes from 'prop-types';
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

Modal.propTypes = {
  root: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
  initialVisibile: PropTypes.bool.isRequired,
}

export default Modal;
