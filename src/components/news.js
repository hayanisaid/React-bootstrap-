import React ,{Component} from 'react'
import { Grid ,Image ,Row , Col} from 'react-bootstrap'


export default class News extends Component{
	render(){
		return(
			<Grid>
				<Row className='container'>
                 <Col md={12} sm={12}>
                  <Image src={require('../assets/images/image2.jpg')}/>
                 </Col>
                 <Col md={8} sm={12}>
                  <h3 className='text-center'>Where does it come from?</h3>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                  </p>
                 </Col>
                 <Col md={4} sm={12}>
                   <Col md={12} sm={12}>
                     <Image src={require('../assets/images/image3.jpg')} className='Thumbnail img-responsive' />
                     <p>
                     	many web sites still in their infancy.
                     	 Various versions have evolved over the years, sometimes 
                     	by accident, sometimes on
                     	 purpose (injected humour and the like).
                     </p>
                   </Col>
                   <Col md={12} sm={12}>
                     <Image src={require('../assets/images/image4.jpg')} className='Thumbnail img-responsive'/>
                     <p>
                     	many web sites still in their infancy.
                     	 Various versions have evolved over the years, sometimes 
                     	by accident, sometimes on
                     	 purpose (injected humour and the like).
                     </p>
                   </Col>
                   <Col md={12} sm={12}>
                     <Image src={require('../assets/images/image1.jpg')} className='Thumbnail img-responsive'/>
                     <p>
                     	many web sites still in their infancy.
                     	 Various versions have evolved over the years, sometimes 
                     	by accident, sometimes on
                     	 purpose (injected humour and the like).
                     </p>
                   </Col>
                 </Col>
				</Row>
			</Grid>
		)
	}
}