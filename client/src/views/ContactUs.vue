<template>

  <div class="home">
          <h1 class="title">
          <div id="titleFont">Universal Fitness</div>
        </h1>
          <div id="subtitleFont">Contact Us</div>

     <div class="message-body">
              <p>Email: alexandn7@newpaltz.edu</p>
              <p>phone number: 123 456 7890</p>
<p>Direct email to "alexandn7@newpaltz.edu":</p>
          <p>your Email: <input type="text" placeholder="Email" name="Email"></p>
          <p>subject: <input type="text" placeholder="subject" name="subject"></p>
          <p><textarea class="textarea is-link" placeholder="insert contact message here"></textarea></p>
         <p> <button class="button button5">Send</button></p>
          <article class="message is-black">
            <div class="message-header" :style="` font-size: 98`" >
              <div class="messagehead">
              <div id = "counter">
                
              </div>
              </div>
            </div>
            <h1 class="subtitle">
                <div id="subtitleFont">We will get back to you shortly</div>
              </h1>
        </article>
            </div>
         
        </div>
  
  
</template>
<style> .message-body{
              font-family: "Arial Black", Gadget, sans-serif;
              font-size: 20px;
              letter-spacing: 2px;
              word-spacing: 2px;
              color: #000000;
              font-weight: normal;
              font-style: normal;
              font-variant: normal;
                          }
                          h1{text-align: center;}
  p{text-align: center;}
  div{text-align: center;}
  #titleFont {
          font-family: "Arial Black", Gadget, sans-serif;
          font-size: 90px;
          letter-spacing: 2px;
          word-spacing: 2px;
          color: #000000;
          font-weight: normal;
          text-decoration: underline solid rgb(68, 68, 68);
          font-style: normal;
          font-variant: normal;
          text-transform: uppercase;
          }
          #subtitleFont {
font-family: "Arial Black", Gadget, sans-serif;
font-size: 28px;
letter-spacing: 2px;
word-spacing: 2px;
color: #000000;
font-weight: normal;
text-decoration: none solid rgb(68, 68, 68);
font-style: normal;
font-variant: normal;
text-transform: uppercase;

}.message-body{
  font-family: "Arial Black", Gadget, sans-serif;
              font-size: 20px;
              letter-spacing: 2px;
              word-spacing: 2px;
              color: #000000;
              font-weight: normal;
              font-style: normal;
              font-variant: normal;
 
}
                        
                        </style>
<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
