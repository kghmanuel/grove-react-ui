import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { actions, selectors } from '../muir-user-redux';

const mapStateToProps = (state, ownProps) => ({
  from: (ownProps.location && ownProps.location.state) || { pathname: '/' }
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    submitLogin: actions.submitLogin
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);