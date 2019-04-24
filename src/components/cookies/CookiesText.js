import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const CookiesText = ({showToggle}) => {
  return (
      <div className="cookies-description">
        <SectionTitle content="COOKIES"/>
        <p>
          This website uses cookies.
        </p>
        <p>
          A cookie is a small text file that the website you are visiting stores on your computer. Cookies are used by a
          lot of websites to give visitors access to various functions. It is possible to use the information in the
          cookie to follow the user’s surfing.
        </p>

        <p>
          To avoid cookies, you can change the security settings in your web browser. How these are adjusted depends on
          which web browser you have.
        </p>

        <p>
          On this website we use cookies to enable you as a visitor to adapt the appearance of the website.
        </p>

        <p>
          The majority are the so called “session cookies”. They will be automatically deleted after the visit on the
          website. Cookies do not cause any harm to your computer and do not contain viruses.
        </p>

        <p>
          More information on Cookies
        </p>

        <p>
          Please see also our privacy policy in this regard!
        </p>

      </div>
  )
}

export default CookiesText;
