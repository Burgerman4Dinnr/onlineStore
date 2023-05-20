import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation on form inputs
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    fetch('http://localhost:3000/api/contacts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then(() => {
        navigate('/thankyou');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  console.log(name);
  console.log(email);
  console.log(message)
 
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-md-6 supportTabs">
            <h1 className="supportHelp">Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name} name='name' onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} name='email' onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" placeholder="Description" rows="5" value={message} name='message' onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6 supportTabs">
            <h1 className="supportHelp">FAQs</h1>
            <h1 className="supportHelp">FAQs</h1>
              <h3 className="supportHelp">How can I reset my password?</h3>
              <p className="supportHelp">Yo, if you're struggling with your password, don't even sweat it. The solution is simple, my friend: just reset the password! It's like magic, except instead of pulling a rabbit out of a hat, you're pulling a fresh password out of thin air. It's like hitting the reset button on your life, but without any of the actual life-altering consequences. So go ahead and reset that password, my dude. You got this!</p>
              <h3 className="supportHelp">How do I update my billing information?</h3>
              <p className="supportHelp">Hey there, champ! Need to update your billing info? No problemo, my friend. It's as easy as pie! All you gotta do is update your billing info. It's like a before and after photo, but instead of losing weight or gaining muscle, you're just updating your billing info. It's like painting a room, except instead of changing the color, you're changing your payment method. So go ahead and update that billing info, you beautiful human being. You've got this!</p>
              <h3 className="supportHelp">Can I cancel my order at any time?</h3>
              <p className="supportHelp">We are cautiously optimistic about the timeline. Based on our current progress and the team's dedication, I believe we have a good chance of meeting our deadline. However, there are always unforeseen challenges that can arise during the course of a project, so I'm keeping a realistic mindset and preparing for any potential roadblocks. Ultimately, I'm hopeful that we will be able to deliver a successful outcome within the expected timeframe. Aka, I hope so :/</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
