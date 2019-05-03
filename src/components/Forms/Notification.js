import PropTypes from 'prop-types';
import { notification } from 'antd';

export const showNotification = (message, icon) => {notification[icon]({
  message,
  style: {
    marginTop: 50,
  },
})};

showNotification.propTypes = {
  message: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
