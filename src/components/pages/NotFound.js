import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../Forms/formComponents';
import NotFoundImg from '../../img/404.svg';
import Footer from '../../sections/Footer/Footer';

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="not-found">
          <img src={NotFoundImg} alt="Not found"/>
          <p>
            Oooops, Something goes wrong
          </p>
          <Link to="/"><Button title="Go back"/> </Link>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default NotFound;
