<template>

  <div class="home">
         <section class="hero is-black">
  <div class="hero-body">
    <p class="title">
      Universal Fitness
    </p>
    <p class="subtitle">
      report an issue
    </p>
  </div>
</section>

     <div class="message-body">
              <p>Submit a form:</p>
          <p>Name: <input type="text" placeholder="Name" name="Name"></p>
          <p>Problem being reported: <input type="text" placeholder="problem" name="problem"></p>
          <p>Explanation</p>
          <p><textarea class="textarea is-link" placeholder="Link textarea"></textarea></p>
         <p> <button class="button button5">Submit form</button></p>
          <article class="message is-black">
            <div class="message-header" :style="` font-size: 98`" >
              <div class="messagehead">
              <div id = "counter">
                
              </div>
              </div>
            </div>
            <h1 class="subtitle">
                <div id="subtitleFont">Thank you for your concern, we will get back to you shortly</div>
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
