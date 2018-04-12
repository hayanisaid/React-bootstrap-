import React ,{Component} from 'react'
import {Link}  from 'react-router-dom';
import {Jumbotron, Grid, Button ,Image ,Row , Col} from 'react-bootstrap'
import './main.css'


export default class Home extends Component{
	render(){
		return(
			<Grid>
				<Jumbotron>
					<h2>Hello from react-boostrap</h2>
					<p>
					Read the detail here as front end developer
					</p>
					<Link to='/about'>
                      <Button bsStyle='primary'>Learn more</Button>
					</Link>
				</Jumbotron>
				<Row ClassName='show text-center'>
                  <Col lg={4} sm={12}>
                   <Image src={require('../assets/images/image5.jpg')} circle className='responsive-img'></Image>
                    <h3>Frank Rebevry</h3>
                    <p>
                    	is simply dummy text of the 
                    	printing and typesetting industry. 
                    	Lorem Ipsum has been the industry's 
                    	standard dummy text ever since the 1500s,
                    	 when an unknown printer took a galley of 
                    	 type and scrambled it to make a type specimen book. 
                    	
                    </p>
                  </Col>
                  <Col lg={4} sm={12}>
                   <Image src={require('../assets/images/image1.jpg')} circle className='responsive-img'></Image>
                    <h3>Where can I get some?</h3>
                    <p>
                    	is simply dummy text of the 
                    	printing and typesetting industry. 
                    	Lorem Ipsum has been the industry's 
                    	standard dummy text ever since the 1500s,
                    	 when an unknown printer took a galley of 
                    	 type and scrambled it to make a type specimen book. 
                    	
                    </p>
                  </Col>
                  <Col lg={4} sm={12}>
                   <Image src={require('../assets/images/image3.jpg')} circle className='responsive-img'></Image>
                    <h3>Why do we use it?</h3>
                    <p>
                    	is simply dummy text of the 
                    	printing and typesetting industry. 
                    	Lorem Ipsum has been the industry's 
                    	standard dummy text ever since the 1500s,
                    	 when an unknown printer took a galley of 
                    	 type and scrambled it to make a type specimen book. 
                    	
                    </p>
                  </Col>
				</Row>
			</Grid>
		)
	}
}