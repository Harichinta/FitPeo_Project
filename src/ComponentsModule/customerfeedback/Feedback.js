import React from 'react'
import './feedback.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

function Feedback() {

  const customerfeedback = [
    {
      customername: "Wade Warren",
      profilepic: require('../../Assets/orderprofilpic1.png'),
      star: "4",
      Desc: "The food was excellent and so was the service. I had the mushroom risotto with scallopos wich was awesome. I had a burger over greens(glutten-free) which was also very good.",
    },
    {
      customername: "Jone cooper",
      profilepic: require('../../Assets/orderprofilpic2.png'),
      star: "5",
      Desc: "We enjoyed the Eggs bennedicts served on homemade focaccia bread and hot coffee. Perfect service",
    }, {
      customername: "cody fisher",
      profilepic: require('../../Assets/orderprofilpic2.jpg'),
      star: "4",
      Desc: "The dish was a delightful blend of flavors, each bite better than the last. The presentation was as impressive as the taste!",
    },
    {
      customername: "Jone cooper",
      profilepic: require('../../Assets/orderprofilpic2.png'),
      star: "5",
      Desc: "We enjoyed the Eggs bennedicts served on homemade focaccia bread and hot coffee. Perfect service",
    }, {
      customername: "cody fisher",
      profilepic: require('../../Assets/orderprofilpic2.jpg'),
      star: "4",
      Desc: "The dish was a delightful blend of flavors, each bite better than the last. The presentation was as impressive as the taste!",
    }
  ]

 
  return (
    <div className='feedbackcontain'>
      <h5 style={{ padding: "8px" }}>Customer's Feedback</h5>
      {customerfeedback && customerfeedback.map((feedback, i) => {

        const rating = parseInt(feedback.star, 10);
        const starsArray = Array(5).fill(false).map((_, index) => index < rating);

        return (
          <div className="feedback" key={i}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className='feedprofile'><img src={feedback.profilepic} alt="" width='35px' /></div>
              <span>{feedback.customername}</span>
            </div>
            <div className='ratting'>
            <div style={{ fontSize: '1rem',marginTop:"10px" }}>
                {starsArray.map((filled, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={solidStar}
                    style={{
                      marginRight: '5px',
                      color: filled ? '#FFD700' : 'white', 
                    }}
                  />
                ))}
              </div>
            </div>
            <p className='description'>{feedback.Desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Feedback