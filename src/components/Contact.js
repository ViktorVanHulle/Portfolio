import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';

init("id");


export const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('SERVICE', 'template', form.current, 'id')
      .then((result) => {
          console.log(result.text);
          document.getElementById('formName').value = "";
          document.getElementById('formMail').value = "";
          document.getElementById('subject').value = "";
          document.getElementById('message').style.color = "green";

          setTimeout(function(){
            document.getElementById("message").style.color = 'white';
          }, 3000);

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} id='myform'>
      <p id='message'>Uw bericht is succesvol verzonden!</p>
      <input id='formName' type="text" name="name" placeholder='Name' required/>
      <input id='formMail' type="email" name="email" placeholder='Email' required/>
      <textarea id='subject' name="subject" placeholder='Subject'/>
      <input type="submit" value="Send"  id='submit'/>
    </form>
  );
};