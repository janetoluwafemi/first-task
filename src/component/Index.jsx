import React from 'react';
import './style/Index.css'
import './images/images (9).jpeg'
import image2 from './images/56dd8eca584e90171f114e57dbca0c78.jpg'

function Index() {
    return (
        <div className="Container">
            <div className="App">
                <header>
                    <img className="image" src={image2} alt="image" />
                </header>
                <section className="sect">
                    <h1>Jessica Randall</h1>
                    <h4>London, United Kingdom</h4>
                </section>
                <main>
                    <section>
                        <h2>"Front-end developer and avid reader."</h2>
                    </section>
                    <nav>
                        <ul>
                            <li className="link1"><a href="https://github.com/" className="join">GitHub</a></li>
                            <li className="link2"><a href="https://www.frontendmentor.io/home" className="join">Frontend Mentor</a></li>
                            <li className="link3"><a href="https://www.linkedin.com/feed/" className="join">LinkedIn</a></li>
                            <li className="link4"><a href="https://x.com/login?" className="join">Twitter</a></li>
                            <li className="link5"><a href="https://www.instagram.com/accounts/login/?hl=en" className="join">Instagram</a></li>
                        </ul>
                    </nav>
                </main>
            </div>
          </div>
    )
}

export default Index;