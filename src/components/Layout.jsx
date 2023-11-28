import React from 'react';
import LanguageSelector from './LanguageSelector';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Add your header content here */}
        <LanguageSelector />
      </header>
      <main>{children}</main>
      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  );
};

export default Layout;
