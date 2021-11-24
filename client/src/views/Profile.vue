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
       


 <div class="box">
  <div class="box">
    <img src="https://cdn.dribbble.com/users/541480/screenshots/10860012/jo_dribbble_exercise_takeover_logo-grid_4x.jpg" width = "200px">
  </div>
  
</div>
<p class="subtitle has-text-black">Universal Fitness Profile</p>
<div class="box">
  <div class="box">
     <img :src="pic" width="250" :alt="username" />
  </div>
 
</div>

   
        <div class="field">
          <div class="control">
            <div class="title has-text-grey is-5"><b>First Name: {{firstname}}</b></div>
            
          </div>
          
        </div>
         <div class="field">
          <div class="control">
            <div class="title has-text-grey is-5"><b>Last Name: {{lastname}}</b></div>
            
          </div>
          
        </div>
        <div class="field">
          <div class="control">
            <div class="title has-text-grey is-5"><b>Email: {{this.Session.user.email}}</b></div>
          </div>
        </div>
        <div class="field">
          <div class="control">
           <div class="title has-text-grey is-5"><b>Handle: {{username}}</b></div>
            
          </div>
        </div>
        <div class="field">
          <div class="control">
           <div class="title has-text-grey is-5"><b>Password: CONFIDENTIAL </b></div>
            
          </div>
        </div>
      <div class="columns">

          <!--
          <div class="column">
              <div class="card">
                  <div class="card-content">
                      {{newPost}}
                  </div>
              </div>
          </div>
            -->
            
        <div class="column is-half is-offset-one-quarter">
  
<div class="column">
    <div class="title has-text-black is-5">Edit your profiles information below</div>
            <post :post="newPost" />
        </div>
        
           <post-edit :new-post="newPost" @add="add()" />

            <div class="post" v-for=" (p, i) in posts" :key="p.src">
                <post :post="p" @remove="remove(p, i)" />
            </div>

        </div>

        
      </div>


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
import Post from '../components/UpdateProfile.vue';
import Session from "../services/session";
import { Add, Delete, Update } from "../services/users";
import PostEdit from "../components/Profile-edit.vue";
const newPost = ()=> ({ user: Session.user, user_handle: Session.user.handle })
export default {
    components: {
        Post,
        PostEdit
    },
    data: ()=> ({
        posts: [],
        newPost: newPost(),
        Session
    }),
    
      computed:{
        name(){
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
        },
        firstname(){
          return this.Session.user.firstName;
        },
        lastname(){
          return this.Session.user.lastName;
        },
        pic(){
          return this.Session.user.pic;
        },
        username(){
          return this.Session.user.handle;
        },
         email(){
          return this.Session.user.email;
        },
        password(){
          return this.Session.user.password;
        }
        
    },
    
    methods: {
        async remove(post, i){
            console.log({post})
            const response = await Delete(post._id)
            if(response.deleted){
                this.posts.splice(i, 1)
            }
        },
        async add(){
            console.log("Adding new user at " + new Date())
            const response = await Add(this.newPost);
            console.log({ response });
            if(response){
                this.posts.unshift(response);
                this.newPost = newPost();
            }
        },
        async update(){
            console.log("Adding new user at " + new Date())
            const response = await Update(this.newPost);
            console.log({ response });
            if(response){
                this.posts.unshift(response);
                this.newPost = newPost();
            }
        }
    }
  }
    
</script>
