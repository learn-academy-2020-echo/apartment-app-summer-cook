import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button} from 'reactstrap'

class AvailableApartments extends Component {
  render () {
    return (
      <div className= "view-apartments">
      <h3>All the Apartments</h3>
        { this.props.apartments && this.props.apartments.map((apartment, index) => {
          return (
            <div>
              <h5>{ apartment.street }</h5>
              <h5>{ apartment.city }</h5>
              <h5>{ apartment.state }</h5>
              <p>
                <NavLink to={`/apartmentdetails/${apartment.id}`}>
                  <Button color="secondary">
                    More Info
                  </Button>
                </NavLink>
              </p>
            </div>
          )
        })}
        </div>
    );
  }
}

export default AvailableApartments