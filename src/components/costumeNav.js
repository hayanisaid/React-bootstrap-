import React ,{Component} from 'react'
import {Link}  from 'react-router-dom';
import {Navbar,Nav,NavItem} from 'react-bootstrap'


export default class CostumeNav extends Component{
	render(){
		return(
			<Navbar>
			  <Navbar.Header>
			     <Navbar.Brand>
			     	<Link to='/'>Home</Link>
			     </Navbar.Brand>
			  	
			  	 <Navbar.Toggle/>
			  </Navbar.Header>
			  <Navbar.Collapse>
			  	<Nav pullRight>
                  <NavItem eventKey={1} componentClass={Link} href='/' to='/'>
                  	Home
                  </NavItem>
                  <NavItem eventKey={2} componentClass={Link} href='/about' to='/about'>
                  	About
                  </NavItem>
                  <NavItem eventKey={3} componentClass={Link} href='/news' to='/news'>
                  	News
                  </NavItem>
                   <NavItem eventKey={4} componentClass={Link} href='/contact' to='/contact'>
                  	Contact
                  </NavItem>
                  
			  	</Nav>
			  </Navbar.Collapse>

			</Navbar>
		)
	}
}