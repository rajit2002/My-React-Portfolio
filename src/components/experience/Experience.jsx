import React from 'react'
import "./Experience.css"
import {BsFillPatchCheckFill} from 'react-icons/bs'
 
function Experience() {
  return (
    <section id='experience'>
      <h5>What skills I Have</h5>
      <h2>My Experience
      </h2>
      
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
 <div className="experience_content">
 
      {/* 1 */}
<article className='experience_details'>
<BsFillPatchCheckFill  className='experience_details-icon' /> 

<div> 


<h4>HTML</h4>
<small className='text-light'> Experienced </small>


</div>
{/* 2/ */}

</article>
<article className='experience_details'>
<BsFillPatchCheckFill  className='experience_details-icon' /> 

<div>
<h4>CSS</h4>
<small className='text-light'>Intermediate</small>

</div>



{/* 3 */}
</article>
<article className='experience_details'>
<BsFillPatchCheckFill  className='experience_details-icon' /> 
<div> 
<h4>JAVAACRIPT</h4>
<small className='text-light'>Experienced </small>

</div>




{/* 4 */}

</article>
<article className='experience_details'>
<BsFillPatchCheckFill  className='experience_details-icon' /> 


<div>  

<h4>Bootstrap</h4>

<small className='text-light'> Experienced</small>

</div>
{/* 5 */}

</article>
<article className='experience_details'>
<BsFillPatchCheckFill  className='experience_details-icon' /> 

<div> 
<h4>Tailwind</h4>
<small className='text-light'>Experienced </small>

</div>

{/* 6 */}

</article>

{/* end of frontend */}
<article className='experience_details'>
<BsFillPatchCheckFill  className='experience_details-icon' /> 

<div> 
<h4>REACT</h4>
<small className='text-light'>Experienced </small>


</div>


</article>
  
 </div>


        </div>

       

        <div className="experience_backend">
      <h3>Backend Development</h3>
      <div className="experience_content">
        
       </div>
    </div>

 {/* end of backend */}

      </div>
      
      
    </section>
  )
}

export default Experience;
