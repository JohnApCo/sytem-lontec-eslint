import React from 'react';
import { Outlet } from 'react-router-dom';

function LogoOnlyLayout() {
  return (
    <div>
      <h1>LogoOnlyLayout</h1>
      <Outlet />
    </div>
  );
}

export default LogoOnlyLayout;
