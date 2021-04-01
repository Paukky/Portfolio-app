import React from 'react'
import background from '../layout/background2.png'
import ContactKeepers from '../layout/ContactKeeper.png'
import GithubSearcher from '../layout/GithubSearcher.png'
import { Link } from 'react-router-dom';
import Resume from '../../Paul_Ly_Resume.pdf'
import Website from '../layout/Portfolio.png'


const Home = () => {

    return (
        <React.Fragment>
            <div className ="home-container">
                <img        
                    src={background}
                    style={{
                            width: '100%',
                            height: '125%',
                            display: 'flex',
                            alt: 'background'
                        }}
                >
                </img>
                <div className=" overlay">
                    <div className="text-center text-primary lead">
                        <h1>Paul Ly</h1> 
                    </div>
                </div> 
            </div>

            <div className= "bg-darkblue">
                <div className ="grid-2">

                    <Link to='/ContactKeeper'>
                        <div className="portfolio">
                            <img        
                                src={ContactKeepers}
                                style={{width: '100%', height: '100%'}}
                                alt ="ContactKeeper"
                            />
                            <div className="subtitle">Contact Keeper</div>
                        </div>
                    </Link>   

                    <Link to='/GithubSearcher'>               
                        <div className="portfolio">
                            <img
                                src={GithubSearcher}
                                style={{width: '100%', height: '100%'}}
                                alt = 'Github Searcher'
                            />
                            <div className="subtitle">Github Searcher</div>
                        </div>
                    </Link>  
                    
                   <Link to='/Portfolio'>  
                        <div className="portfolio">
                            <img
                                src={Website}
                                style={{width: '100%', height: '100%'}}
                                alt = 'Portfolio'
                            />
                            <div className="subtitle">Portfolio Website</div>
                        </div>
                    </Link> 

                </div>         
            </div>

            <div className = "footer">
                <div className ="text-center ">
                    <h2>Contact</h2>
                </div>
                <div className ="footer-contact">
                    <ul>
                        <li>
                        <i class="fas fa-phone"> (647)-718-8686 </i>
                        </li>
                        <li>
                            <i class="far fa-envelope">  paul.ly@live.ca</i>
                        </li>
                    </ul>
                </div>
                <div className ="footer-items">
                    <ul>
                        <li>
                            <a href="https://github.com/Paukky" className=""><i class="fab fa-github"/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/paul-ly1993/"><i class="fab fa-linkedin"/></a>      
                        </li>
                        <li>
                            <a href={Resume} download="Paul_Ly_Resume.pdf"><i class="far fa-file-pdf"/></a>   
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home
