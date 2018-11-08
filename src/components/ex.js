import React from 'react'
import vijayshri from '../assets/images/vijayshri.jpg'
import director from '../assets/images/director.jpg'
const Ex=props=>(<div className='example'>
    <div class="blog-card">
    <div class="meta">
      <div class="photo" style={{backgroundImage:`url(${director})`}}></div>
      <ul class="details">
        <li class="author">Prof. P. Nagabhushan</li>
        <li class="date">Director</li>
        <li class="tags">
          <ul>
           <li>IIIT</li>
           <li>Lucknow</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>A vision to follow</h1>
      <h2>Evolving a brand-name takes years of nurturing</h2>
      <p> Evolving a brand-name takes years of nurturing, hard work and passion. IIIT Lucknow, which started its journey in 2015, has brought in the culture of innovation among its students. </p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
  <div class="blog-card alt">
    <div class="meta">
      <div class="photo" style={{backgroundImage:`url(${vijayshri})`}}></div>
      <ul class="details">
        <li class="author">Dr Vijayshri Tiwari</li>
        <li class="date">Training and Placement Officer</li>
        <li class="tags">
          <ul>
          <li>IIIT</li>
           <li>Lucknow</li>
            
          </ul>
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>Exploring the skies</h1>
      <h2>The Training and Placement cell </h2>
      <p>The Training and Placement cell of Indian Institute of Information Technology, Lucknow is an integral part of the academics It helps in shaping the careers of our students in the field of Information Technology. </p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
  </div>
)

export default Ex