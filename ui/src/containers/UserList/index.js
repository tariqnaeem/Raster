import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initBones } from '../../actions';
import { getUsers } from '../../selectors';
import List from '../../components/List';
import Loader from '../../components/Loader';

class UserList extends Component {
  componentDidMount() {
    this.props.initBones()
  }

  render() {
    const { isFetching, users } = this.props;
    return (isFetching) ? <Loader/> : <List items={users} />
  }
}

const mapDispatchToProps = {
  initBones
}

const mapStateToProps = (state) => ({
  users: getUsers(state),  
  isFetching: state.entities.users.isFetching
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
