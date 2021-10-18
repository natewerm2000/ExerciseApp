<template>

  <form class="section" @submit.prevent="login()">
      
      <p class="subtitle has-text-black">Please login to enter Universal Fitness</p>
<div class="box">
  <div class="box">
    <img src="https://cdn.dribbble.com/users/541480/screenshots/10860012/jo_dribbble_exercise_takeover_logo-grid_4x.jpg" width = "200px">
  </div>
  <div class="title has-text-grey is-5">Please enter your email and password.</div>
</div>
      <div class="field">
       
            <input class="input" type="text" placeholder="Email" v-model="email">
            
        </div>
        <div class="field">
            <input class="input" type="password" placeholder="Password" v-model="password">
        </div>
        <div class="field">
             <label class="checkbox" style="margin: 20px;">
        <input type="checkbox">
          Remember me
      </label>
        <p class="control">
            <button class="button is-black">
            Login
            </button>
            
        </p>
        
        </div>
  </form>
</template>
<style>h1{text-align: center;}
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
  font-size: 22px;
 
}

</style>
<script>
import Session from "../services/session";
export default {
    data: ()=>({
        email: null,
        password: null,
        Session
    }),
    methods: {
        login(){
            this.Session.Login(this.email, this.password);
        }
    }
}
</script>

<style>
</style>