<template>
  <div class="home">
    <section class="hero is-black">
  <div class="hero-body">
    <p class="title">
      Universal Fitness
    </p>
    <p class="subtitle">
      all around exercise
    </p>
  </div>
</section>
       


 <h3 class="title has-text-black"></h3>
<hr class="login-hr">
<p class="subtitle has-text-black">Universal Fitness Profile</p>
<div class="box">
  <div class="box">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk5pgY_bJYiNCunOgfuzvERIOA1LewXg5w6Q&usqp=CAU" width = "200px">
  </div>
  <div class="title has-text-grey is-5">edit information</div>
</div>
<form>
        <div class="field">
          <div class="control">
            <input class="input is-large" type="Name" placeholder="Name" autofocus=""> Nathaniel Alexander
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input is-large" type="email" placeholder="Email">alexandn7@newpaltz.edu
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input is-large" type="username" placeholder="Username" autofocus="">natewerm2000
          </div>
        </div>
   <div class="control">
                            <div class="select is-fullwidth" type="gender">
                                <select>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Non-binary</option>
                                    <option>Other</option>
                                   
                                </select>
                            </div>
                        </div>
                      
<div class="field">
          <div class="control">
            <textarea class="textarea" placeholder="About Me"></textarea>
          </div>
        </div>
        </form>
        <button class="button is-block is-black is-large is-fullwidth">Save Changes</button>
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
