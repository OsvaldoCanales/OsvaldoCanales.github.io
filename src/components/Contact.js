import emailjs from "emailjs-com";

import React, {useRef} from 'react';
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer"


export const Contact = () => { 
    const form = useRef();
    const navigate = useNavigate();
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const handleSubmit = (e) => { 
        e.preventDefault();
        emailjs
            .sendForm(
                'service_9vevcsw', 'template_r2lkgjm', form.current, '3UjwIK_hL2xp3WTi1')
            .then(
                () => {
                    console.log('SUCCESS!');
                    navigate("/success");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            ); 
    }
    return ( 
        <section ref={ref} id="contact" className={`contact ${inView ? "visible": ""}`}> 
        <h2> Say hello </h2>
        <div className = "contact-line"></div>
        <form ref={form} onSubmit={handleSubmit}>
            <label htmlFor="email"> Your email </label>
            <input type = "email" id="email" name="user_email" placeholder="Your email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="user_message" placeholder="Your message" required></textarea>
            <button type="submit">Send message</button>
        </form>
        </section>
    );
}