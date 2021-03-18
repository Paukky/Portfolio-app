import React from 'react'
import ContactKeepers from '../layout/ContactKeeper.png'
import ContactKeepers2 from '../layout/ContactKeeper2.png'
import ContactKeepers3 from '../layout/ContactKeeper3.png'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
const ContactKeeper = () =>  {


        return (      
            <React.Fragment>
                <div className="container p-2 ">
                    <Carousel
                        plugins={[
                            'arrows',
                            'centered',
                            'fastSwipe',
                            'infinite'
                        ]}
                    >
                    <img src={ContactKeepers} width="100%"/>
                    <img src={ContactKeepers2} width="100%"/>      
                    <img src={ContactKeepers3} width="100%"/>       
                    </Carousel>
                    <p className ="text-center text-primary p-2">
                    This is my first full stack application created for learning the back-end. 
                    I used postman for creating my API and use MongoDB to serve as my Cloud Database. You can view this project here
                    <br/>
                    <a href="https://thawing-ocean-01541.herokuapp.com/login"> <b>ContactKeeper Application</b></a>
                    </p>
                   
                </div>
            </React.Fragment>
        )
    }


export default ContactKeeper
