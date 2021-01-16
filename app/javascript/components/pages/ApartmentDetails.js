import React, { Component } from 'react'

class ApartmentDetails extends Component {
  render () {
    const { apartment } = this.props
    return (
      <>
        <h3>Show Page</h3>
        <p>{ apartment.street }</p>
        <p>{ apartment.city }</p>
        <p>{ apartment.state }</p>
        <p>{ apartment.manager }</p>
        <p>{ apartment.contact }</p>
        <p>{ apartment.price }</p>
        <p>{ apartment.bedrooms }</p>
        <p>{ apartment.bathrooms }</p>
        <p>{ apartment.pets }</p>
      </>
    );
  }
}

export default ApartmentDetails