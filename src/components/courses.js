import React from "react";
import SubCard from "./sub-card";
import { semList } from "./semlist";

const Courses = () => (
  <React.Fragment>
    <div className="courses-outer-wrapper">
      <div className="courses">
        <h1>Courses Offered</h1>
        <h2>Undegraduate Courses</h2>
        <ul>
          <li>B.Tech. Information Technology (IT)</li>
        </ul>
        <p className="courses-overview">
          This course is arguably the best in the country. Its strength is its
          adaptability to the changing industry requirements. A student gets
          knowledge of the latest technologies, in addition to ample industry
          exposure. The students are given a choice of subject from the 6th
          semester itself in the form of electives. The students have ample
          practical knowledge owing to the mini projects taken up in their 5th,
          6th and 7th semesters. Apart from this, the students are required to
          submit an industrial project in their 8th semester. The course
          includes both theory and lab sessions. The curriculum emphasizes
          importance of applied knowledge, and promotes state-of-the-art
          teaching and learning.
        </p>
        <button disabled>Course Overview</button>
      </div>
    </div>
    <div className="course-outer">
      <div className="course-inner">
        {semList.map((val, index) => (
          <SubCard semNum={val} sem={val} ind={index} key={val + index} />
        ))}
      </div>
    </div>
  </React.Fragment>
);

export default Courses;
