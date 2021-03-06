/* 

A component to configure the "new movie" form.

*/

import React, { PropTypes, Component } from 'react';
import SmartForm from "meteor/nova:forms";
import Movies from '../collection.js';
import { MoviesListFragment } from './MoviesList.jsx';

const MoviesNewForm = (props, context) => {
  return (
    <SmartForm 
      collection={Movies}
      fragment={MoviesListFragment}
    />
  )
}

MoviesNewForm.contextTypes = {
  closeCallback: React.PropTypes.func,
}

export default MoviesNewForm;