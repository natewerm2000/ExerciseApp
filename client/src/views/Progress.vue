<template>
  <div class="home">
    <h1 class="title">
          <div id="titleFont">Universal Fitness</div>
        </h1>
        
          <div id="subtitleFont">all around exercise</div>
       

<div class="box">
  <div class="box">
    <img src="https://cdn.dribbble.com/users/541480/screenshots/10860012/jo_dribbble_exercise_takeover_logo-grid_4x.jpg" width = "200px">
  </div>
  <div class="title has-text-grey is-5">Progress Tracker</div>
</div>
 
   <div id="subtitleFont">how much progress you made</div>
<article class="message is-black">
            <div class="message-header" :style="` font-size: 98`" >
              <div class="messagehead">
              <div id = "counter">
                
              </div>
              </div>
            </div>
            </article>
            <form>
              <div class="field">
                <div class="control">
                   Daily Calories consumed <progress class="progress is-link" value="90" max="100">90%</progress>
                </div>
              </div>
              <div class="field">
                <div class="control">
                   Daily Calories burned <progress class="progress is-primary" value="90" max="100">90%</progress>
                </div>
              </div>
              <div class="field">
                <div class="control">
                    Daily Movement <progress class="progress is-warning" value="90" max="100">90%</progress>
                </div>
              </div>
              <div class="field">
                <div class="control">
                   Daily Lifting <progress class="progress is-danger" value="90" max="100">90%</progress>
                </div>
              </div>

            </form>

</div>
 
  
</template>
<style>
 html, body {
  font-family: sans-serif;
  width: 100%;
  height: 100%;
  margin: 0;
}

#friend-list { 
  display: block;
  margin: 0;
  padding: 0;
  width: 300px;
  height: 100%;
  background: #EEE;
  list-style-type: none;
}

.friend {
  width: 300px;
  height: 60px;
  background: #EEE;
  border-bottom: 1px solid #DDD;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.friend img {
  width: 45px;
  height: 45px;
  border-radius: 30px;
  border: 2px solid #AAA;
  object-fit: cover;
  margin-left: 5px;
  margin-right: 10px;
}

.friend .name {
  font-size: 18px;
}

.friend.selected {
  background: #43A047;
  color: white;
}

.friend.selected img {
  border-color: white;
}

.friend:not(.selected):hover {
  background: #DDD;
} 
.message-body{
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
