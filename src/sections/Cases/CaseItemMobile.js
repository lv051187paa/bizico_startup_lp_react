import React, { useState } from "react";
import PropTypes from 'prop-types';

import { flags } from '../../img';
import CaseItemIcon from '../../img/case_mobile_item.svg';
import LandingDrawer from '../../components/LandingDrawer/LandingDrawer';
import CaseItem from './CaseItem';

const CaseItemMobile = ({className, caseItem}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const showDrawer = () => setDrawerVisible(true);
  const hideDrawer = () => setDrawerVisible(false);
  console.log(drawerVisible);
  return (
    <div className={`${className} cases__item-mobile`}>
      <div onClick={showDrawer}>
        <div className="cases__item-icon"  >
          <img src={CaseItemIcon} alt=""/>
          <img className="flag-mobile" src={flags[caseItem.location.toLowerCase()]} alt=""/>
        </div>
        <div className="cases__item-description">
          <div className="cases__item-title">
            <h4 className="cases__item-number">Case #{caseItem.id}</h4>
            <div className="cases__item-params">
              <span className="cases__item-title">Idea: </span>
              <span className="cases__item-text">{caseItem.idea.substring( 0, 14 )}...</span>
            </div>
            <div className="cases__item-params">
              <span className="cases__item-title">Solutions: </span>
              <span className="cases__item-text">{caseItem.solutions.substring( 0, 10 )}...</span>
            </div>
          </div>
        </div>
      </div>
      <LandingDrawer
      title={`Case #${caseItem.id}`}
      onClose={hideDrawer}
      visible={drawerVisible}
      >
      <CaseItem caseItem={caseItem}/>
      </LandingDrawer>
    </div>
  );
};

CaseItemMobile.propTypes = {
  className: PropTypes.string,
  caseItem: PropTypes.object.isRequired,
}

CaseItemMobile.defaultProps = {
  className: '',
}

export default CaseItemMobile;
