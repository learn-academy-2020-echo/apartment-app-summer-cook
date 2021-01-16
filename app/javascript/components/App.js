import React from "react"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

//Components
import Header from './components/Header'
import Footer from './components/Footer'

//Pages
import ApartmentDetails from './pages/ApartmentDetails'
import AvailableApartments from './pages/AvailableApartments'
import EditApartment from './pages/EditApartment'
import Home from './pages/Home'
import NewApartment from './pages/NewApartment'
import ProtectedIndex from './pages/ProtectedIndex'
import NotFound from './pages/NotFound'
import mockApartments from './pages/mockApartments.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      apartments: mockApartments
    }
  } 


  render () {
    console.log("logged in", this.props.logged_in)
    console.log("sign in route", this.props.sign_in_route)
    return (
      <React.Fragment>
        <Header 
          sign_in_route = { this.props.sign_in_route }
          sign_out_route = { this.props.sign_out_route }
          sign_up_route = { this.props.sign_up_route }/>

      
        <Router>
        <Switch>

          <Route exact path="/" component={ Home } />

{/* ----------------------Index */}
          <Route 
            path="/availableapartments"
            render= { (props) =>
            <AvailableApartments
              apartments ={ this.state.apartments}/>}
          />

{/* ----------------------Show */}
          <Route 
          path="/apartmentdetails/:id"
          render={ (props) =>{
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
            console.log(id,)
            return (
              <ApartmentDetails apartment={ apartment } />
            )
          }}
        />

{/* ----------------------Protected Index */}
        <Route 
          path="/myapartments"
          render={ (props) =>{
            let id = this.props.current_user.id
            let myApartments = this.state.apartments.filter(apartment => apartment.user_id === id)
            return(
              <ProtectedIndex myApartments= { myApartments } />
            )
          }}
        />


          <Route path="/newapartment" component={ NewApartment } />

          <Route path="/editapartment" component={ EditApartment } />

          <Route 
          render={ NotFound } />

        </Switch>
      </Router>

        <Footer 
          sign_in_route = { this.props.sign_in_route }
          sign_out_route = { this.props.sign_out_route }
          sign_up_route = { this.props.sign_up_route }/>
      </React.Fragment>
    );
  }
}

export default App