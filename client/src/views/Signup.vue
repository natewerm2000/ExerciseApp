<template>

  <form class="section" @submit.prevent="signup()">
      
    <section class="hero is-black">
  <div class="hero-body">
    <p class="title">
      Universal Fitness
    </p>
    <p class="subtitle">
      sign up
    </p>
  </div>
</section>
      <p class="subtitle has-text-black">Please login to enter Universal Fitness</p>
<div class="box">
  <div class="box">
    <img src="https://cdn.dribbble.com/users/541480/screenshots/10860012/jo_dribbble_exercise_takeover_logo-grid_4x.jpg" width = "200px">
  </div>
  <div class="title has-text-grey is-5">Please enter the information required below</div>
</div>
       <div class="field">
                        <label class="label">Username</label>
                        <div class="control has-icons-left has-icons-right">
                          <input class="input" type="text" v-model="username">
                          <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                          </span>
                        </div>
                        
                      </div>

                      <div class="field">
                        <label class="label">Password</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="password" v-model="password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                      
                      <div class="field">
                        <label class="label">Email</label>
                        <div class="control has-icons-left">
                          <input class="input" type="email" v-model="email">
                          <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                          </span>
                        </div>
                      </div>
                      
                      <div class="field is-grouped">
                        <div class="control">
                          <button class="button is-info">Submit</button>
                        </div>
        
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
            // @ts-ignore
            this.Session.Login(this.email, this.password);
        }
    }
}
</script>

<style>
</style>