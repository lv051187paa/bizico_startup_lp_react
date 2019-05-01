import React, { useState } from 'react';
import { Button } from '../Forms/formComponents';
import Close from '../../img/cross.svg';
import CookiesText from './CookiesText';
import { Modal } from 'antd';

const CookiesWarn = () => {
  const [showModal, setShowModal] = useState( false );
  const [showCookieWarn, setshowCookieWarn] = useState( true );
  const toggleModal = () => setShowModal( !showModal );
  const showToggle = () => setshowCookieWarn(false);
  return (
    <div className="cookies" style={{display: !showCookieWarn && 'none'}}>
      <img className="close" src={Close} alt="" onClick={() => setshowCookieWarn(false)}/>
      <div className="container">
        <h4>THIS WEBSITE USES COOKIES</h4>
        <p>
          We inform you that this site uses own, technical and third parties cookies to make sure our web page is
          user-friendly and to guarantee a high functionality of the webpage. By continuing to browse this website, you
          declare to accept the use of cookies
        </p>
        <div className="cookies__controls">
          <Button title="Accept" className="cookies__controls-accept" onClick={showToggle}/>
          <Button title="More info" className="cookies__controls-info" onClick={toggleModal}/>
        </div>
      </div>
      <Modal
        visible={showModal}
        onOk={() => {
          toggleModal();
          showToggle();
        }}
        onCancel={toggleModal}
        cancelButtonProps={{
          className: 'ant-btn-cancel'
        }}
        okText="Accept"
        width={700}
      >
        <CookiesText/>
      </Modal>
    </div>
  )
}

export default CookiesWarn;
