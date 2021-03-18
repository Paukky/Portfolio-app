import React from 'react'

const Footer = () => {
    
    return (
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
                        <i class="fab fa-github"></i>
                    </li>
                    <li>
                        <i class="fab fa-linkedin"></i>
                    </li>
                    <li>
                      <i class="far fa-file-pdf"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
