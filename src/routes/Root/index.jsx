import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import PrimaryNavigation from '../../components/PrimaryNavigation';
import SecondaryNavigation from '../../components/SecondaryNavigation';

function Root({ outlet }) {
  return (
    <>
      <SecondaryNavigation />
      <PrimaryNavigation />
      <main className="main">{outlet ? outlet : <Outlet />}</main>
    </>
  );
}

Root.propTypes = {
  outlet: PropTypes.element,
};

export default Root;
