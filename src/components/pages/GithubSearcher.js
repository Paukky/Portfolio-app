import React from 'react'
import GithubSearchers from '../layout/GithubSearcher.png'
import GithubSearchers2 from '../layout/GithubSearcher2.png'
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
                    <img src={GithubSearchers} width="100%"/>
                    <img src={GithubSearchers2} width="100%"/>         
                    </Carousel>
                    <p className ="text-center text-primary p-2">
                    Using Github's REST API, I was able to integrate it into this application and being able to call for data. 
                    This is my first front-end application that taught me the basic of React. It's scalable and easy to use. 
                    <br/>
                    You can view this project here
                    <br/>
                    <a href="https://githubfindersearcher.netlify.app/"> <b>Github Searcher</b></a>
                    </p>
                   
                </div>
            </React.Fragment>
        )
    }


export default ContactKeeper
