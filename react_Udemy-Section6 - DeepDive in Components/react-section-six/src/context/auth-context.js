import React from 'react';

const authContext = React.createContext({
  authenticated: false, //default as false in the context
  login: () => {}
});

export default authContext;
