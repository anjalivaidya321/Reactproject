import About from "../About/About"
import aboutpageCSS from './../Pages/aboutpage.module.css'
import aboutImg from '../../assets/hero-2.png'
import { useEffect } from "react";
function Aboutpage(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return(
<>

<section>
            <div><About/></div>
        </section>
         
           <section>
           <div class={`${aboutpageCSS.story_wrapper} section`}>
  <div class={aboutpageCSS.story_img}>
    <img src={aboutImg} alt="Our Story" />
  </div>
  <div class={aboutpageCSS.story_content}>
    <small class={aboutpageCSS.section_Heading}>The Royal Hotel</small>
    <h2 class={aboutpageCSS.section_Title}>Our Journey <span>Through Time</span></h2>
    <p>
      Founded in 2000, The Royal Hotel began as a family-run business, committed to providing an escape from the ordinary. Over two decades, we've grown into an award-winning establishment.
    </p>
    <p>Some of our milestones:</p>
    <ul>
    <li>
        <span>2000:</span>
        <div className={aboutpageCSS.milestone_text}>Opened our first location</div>
      </li>
      <li>
        <span>2010:</span>
        <div className={aboutpageCSS.milestone_text}>Won the 'Best Luxury Hotel' award</div>
      </li>
      <li>
        <span>2020:</span>
        <div className={aboutpageCSS.milestone_text}>Hosted 150+ global events</div>
      </li>
    </ul>
  </div>
</div>

         

        </section>
           
</>

 


        )
}
export default Aboutpage