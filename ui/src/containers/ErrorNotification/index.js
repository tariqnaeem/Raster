import { connect } from 'react-redux';
import Toaster from '../../components/Toaster';
import { getNotifications } from '../../selectors';
import { removeNotification } from '../../actions';

const mapDispatchToProps = {
  dismiss: removeNotification
}

const mapStateToProps = (state) => ({
  errors: getNotifications(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);
