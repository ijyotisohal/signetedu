import React from 'react'
import NewHeader from '../components/Header/NewHeader'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Agents = () => {
  return (
    <div>
      <NewHeader/>

      <div className="sub-course-banner pt--150">
       <div className="container">
       <div className="sub-banner-text pt-80">
          <div className="row">
         
            <div className="col-md-6 banner-sub-text-one">
      
              <h3 className="banner-sub-ttile">
              Empowering Your Education: Enroll with Signet Institute Agents
              </h3>
              <p className="banner-sub-descr">
              Signet Institute Agents offer the ideal pathway for your educational journey. With a proven track record of excellence, personalized guidance, and unwavering support, choosing Signet Institute Agents ensures a seamless enrollment experience. Our team of dedicated professionals understands the nuances of the education landscape and will guide you towards the best-fit programs, institutions, and opportunities tailored to your aspirations.
              </p>
              <p className="sub-banner-cap"> </p>
            </div>
            <div className="col-md-5 banner-sub-text-two ">
            {/* <div class="wrapper">
	<svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			Signet Institute 
		</text>
	</svg>
  <svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			 Of Australia
		</text>
	</svg>
</div> */}
                <div className="sub-c-banner sub-c-bannerra">
                <img
                    src="/img/about/boy2.png"
                    alt="banner"
                  />
               
                </div>
                <div className="sub-c-banner-tw">
                <img className='sp-one'
                    src="/assets/images/shapes/circle-dots-two.png"
                    alt="banner"
                  />
                </div>
                <div className="sub-c-banner-th">
                <img className='sp-twoo'
                    src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/shape-1.png"
                    alt="banner"
                  />
                  <img class="sp-three" src="/img/brushes/contact/2.png" alt="banner"></img>
                </div>
               
            </div>
          </div>
        </div>
       </div>
       </div>
       <div className=" mt--150">
     <div className="agent-sec">
        <div className="agent-form">
        <a href="/img/courses/Signet.I-Education-Agent-Application-Form-V2-00.pdf">Signet.I-Education-Agent-Application-Form-V2-00.pdf</a>
        </div>
      </div>
     </div>

       <Footer/>
    </div>
  )
}

export default Agents