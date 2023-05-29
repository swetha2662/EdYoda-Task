import React, { useState } from "react";
import "./CoursePlan.css";

const CoursePlan = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [finalCost, setFinalCost] = useState(0);

  const handleCourseSelection = (event) => {
    const courseId = parseInt(event.target.value, 10);
    setSelectedCourse(courseId);

    const selectedCourse = courses.find((course) => course.id === courseId);
    if (selectedCourse) {
      const totalCost = selectedCourse.originalCost + selectedCourse.subscriptionFee;
      const finalCost = totalCost + (totalCost * 18) / 100;
      setFinalCost(finalCost);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Selected course:", selectedCourse);
  };

  const courses = [
    {
      id: 1,
      content: "Offer expired",
      name: "12 month subscription",
      originalCost: 99,
      monthFee: 8,
      subscriptionFee: 99,
      expired: true,
    },
    {
      id: 2,
      content: "Recommended",
      name: "12 month subscription",
      originalCost: 179,
      monthFee: 15,
      subscriptionFee: 99,
      expired: false,
    },
    {
      id: 3,
      content: "",
      name: "6 month subscription",
      originalCost: 149,
      monthFee: 25,
      subscriptionFee: 99,
      expired: false,
    },
    {
      id: 4,
      content: "",
      name: "3 month subscription",
      originalCost: 99,
      monthFee: 33,
      subscriptionFee: 99,
      expired: false,
    },
  ];

  return (
    <div className="box">
      <h4 className="centercls">Select your subscription plan</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="course-container">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`course-box ${selectedCourse === course.id ? "selected" : ""} ${course.expired ? "expired" : ""}`}
            >
              {course.content && <span className="smallbox">{course.content}<br/></span>}
              <label className="course-label">
                <input
                  type="radio"
                  value={course.id}
                  checked={selectedCourse === course.id}
                  onChange={handleCourseSelection}
                  disabled={course.expired}
                />
                <div className="course-info">
                  <span style={{ fontWeight: 'bold'}}>{course.name} {course.expired && "(Expired)"}</span>
                  <div className="costcls">
                    Total<span className="rscls"> ₹{course.originalCost}</span>
                    <br />
                    <span className="rscls1">₹{course.monthFee}</span> /mo
                  </div>
                </div>
              </label>
            </div>
          ))}
        <div className="course-label">
          <hr></hr>
          Subscription Fee :<span className="rscls">₹18,500</span><br/>
          </div>
          <div className="course-box" style={{ color: 'red' }}>
            Limited offer <span style={{ fontWeight: 'bold',textAlign: 'right' }}> -₹18,401 </span>
            Offer valid till 25th March 2023
          </div>
        </div>
        
        <br/>
        {selectedCourse && (
          <div className="centercls">
            <span style={{ fontWeight: 'bold' }}>Total </span>(Incl. of 18% GST) <span className="rscls">₹{finalCost.toFixed(2)}</span>
          </div>
        )}
        <br/>
        <center>
          <button type="submit" disabled={!selectedCourse} style={{ border: '1px solid red', color: 'white', backgroundColor: 'red' }}  className="big-button cancel-button">
            CANCEL
          </button> &nbsp; &nbsp; &nbsp;
          <button type="submit" disabled={!selectedCourse} style={{ border: '1px solid green', color: 'white', backgroundColor: 'green' }} className="big-button proceed-button">
            PROCEED TO PAYMENT
          </button>
          <br/>
        </center>
      </form>
    </div>
  );
};

export default CoursePlan;
