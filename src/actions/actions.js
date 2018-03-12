  export const ACTIVATE_GEOD = 'ACTIVATE_GEOD';
  export const CLOSE_GEOD = 'CLOSE_GEOD';
  // actions.js
  export const activateGeod = geod => ({  
    type: 'ACTIVATE_GEOD',
    geod,
  });
  
  export const closeGeod = () => ({  
    type: 'CLOSE_GEOD',
  });
  