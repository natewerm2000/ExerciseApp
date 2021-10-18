<template>

  <div class="home">
          <section class="hero is-black " >
  <div class="hero-body">
    <p class="title">
      Resistance Training
    </p>
    <p class="subtitle">
      Reps and Sets counter
    </p>
  </div>
</section>
      <div class="message-body">
              Enter your reps and sets

            </div>
            <p>Enter Workout: <input type="text" placeholder="workout" name="workout"></p>
          <p>Reps: <input type="text" placeholder="reps" name="reps"></p>
          <p>x</p>
          <p>Sets: <input type="text" placeholder="sets" name="sets"></p>
         <p> <button class="button button5">Calculate total number performed</button></p>
         <p>place holder to display calculated value (needs javascript)</p>
          <article class="message is-black">
            <div class="message-header" :style="` font-size: 98`" >
              <div class="messagehead">
              <div id = "counter">
                
              </div>
              </div>
            </div>
          </article>
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
