import { connect } from 'react-redux';
import {activateGeod, closeGeod} from './actions/actions';
import Toogle from 'Toogle'

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({  
    geod: state.geod,
  });
  
  const mapDispatchToProps = {  
    activateGeod,
    closeGeod,
  };
  
  const AppContainer = connect(  
    mapStateToProps,
    mapDispatchToProps
  )(Toogle);
  
  export default AppContainer;  