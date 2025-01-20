// TitleWrapper.jsx
import React, { useEffect } from 'react';

function TitleWrapper({ title, children }) {
  useEffect(() => {
    document.title = title || 'Transportes Fernández';
  }, [title]);

  return <>{children}</>;
}

export default TitleWrapper;
