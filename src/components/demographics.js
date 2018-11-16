import React from 'react'
import gender from '../assets/images/SexRatio.png'
import strength from '../assets/images/strength.png'
import student from '../assets/images/Stydentfaculty.png'
const Demographics=()=>{
    return(<div className='demo'>
    <h1 style={{marginTop:'5%'}}>Gender Ratio</h1>
     <img src={gender} alt='' className='gender'/>
     {/* <img src={strength} alt='' className='strength'/>
     <img src={student} alt='' className='student'/> */}
     <h3>(3:1)</h3>
     <h1>Student-Teacher Ratio</h1>
     <img src={student} alt='' className='gender'/>
     <h3>(6:1)</h3>
     <h1>Final Year Strength</h1>
     <img src={strength} alt='' className='gender'/>
    </div>)
}

export default Demographics