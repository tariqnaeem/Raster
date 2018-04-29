import React from 'react';
import Spinner from 'react-spinkit';
import './Loader.css';

const Loader = (props) => {
  const { big, ...rest } = props;
  const addBig = (big) ? 'Loader--big' : '';
  return <Spinner name="three-bounce" className={`Loader ${addBig}`} fadeIn='none' { ...rest } />
};

export default Loader;
