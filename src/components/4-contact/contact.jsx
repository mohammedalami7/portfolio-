import './contact.css';

import Lottie from 'react-lottie';
import anime from './contc.json';
import { useForm, ValidationError } from '@formspree/react';


export default function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: anime,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const [state, handleSubmit] = useForm("xayrrddp");

  return (
    <div className='contact' id='contact'>
      <div className="sectionLeft">
        <div className="up">
          <span>
            <span className='icon-mail'/>
            <h1>contact us</h1>
          </span>
          <p>Contact us for more information and get notified when we publish something new.</p>
        </div>
        <form id='myForm' onSubmit={handleSubmit}>
          <span>
            <label htmlFor="email"> Email Address:</label>
            <input id="email"type="email"  name="email" />
            <ValidationError  prefix="Email"  field="email"  errors={state.errors}/>
          </span>
          <span>
            <label htmlFor="message">Your message:</label>
            <textarea id="message" name="message" placeholder='Message'/>
            <ValidationError   prefix="Message"  field="message" errors={state.errors}/>
          </span>
          <button type="submit" disabled={state.submitting}>Submit</button>
        </form>
        {state.succeeded && (<h3 style={{textAlign:'center'}}>Your message has been sent successfully</h3>)}
      </div>
      <div className="sectionRight">
        <Lottie options={defaultOptions} height={400} width={400} />

      </div>
    </div>
  );
}


