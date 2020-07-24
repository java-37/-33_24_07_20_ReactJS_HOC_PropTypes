import React from 'react';
import PropTypes from 'prop-types';

class Car extends React.Component{
    render(){
        return <div>
            <h2>{this.props.model.trim()}</h2>
            <h3>{this.props.manufc}</h3>
            <h3>{this.props.price}</h3>
        </div>
    }
}

Car.defaultProps = {
    model:'No Model'
}

Car.propTypes = {
    model:PropTypes.string,
    manufc:PropTypes.string,
    price:PropTypes.number.isRequired
}

export default Car;