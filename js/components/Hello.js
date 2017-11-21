import React from 'react';
import PropTypes from 'prop-types';


export default  class Hello extends React.Component {

  constructor(props){
    super(props);
  }


  render() {

      return (
        <div>
          <h1>{this.props.str}</h1>
        </div>
      );


    }





}

Hello.propTypes = {
  str: PropTypes.string.isRequired,
};
