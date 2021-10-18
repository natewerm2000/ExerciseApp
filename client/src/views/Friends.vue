<template>
  <div class="home">
    
       <section class="hero is-black">
  <div class="hero-body">
    <p class="title">
      Universal Fitness
    </p>
    <p class="subtitle">
      Social Feed and Friends
    </p>
  </div>
</section>
       

<div class="box">
  <div class="box">
    <img src="https://cdn.dribbble.com/users/541480/screenshots/10860012/jo_dribbble_exercise_takeover_logo-grid_4x.jpg" width = "200px">
  </div>
  <div class="title has-text-grey is-5">Friends & Feed</div>
</div>
 <div class="hero-body">
    
    <div class="container has-text-centered">
      <form>
        <ul id='friend-list'>
          <li class='friend selected'>
            <img src='' />
            <div class='name'>
              Nates friend
            </div>
          </li>
          <li class='friend'>
            <img src='' />
            <div class='name'>
              Nates friend
            </div>
          </li>
          <li class='friend'>
            <img src='' />
            <div class='name'>
              Nates friend
            </div>
          </li>
          <li class='friend'>
            <img src='' />
            <div class='name'>
              Nates friend
            </div>
          </li>
          <li class='friend'>
            <img src='' />
            <div class='name'>
              Nates friend
            </div>
          </li>
          <li class='friend'>
            <img src='' />
            <div class='name'>
              Nates friend
            </div>
          </li>

          
        </ul>
        </form>
    </div>
    <p class="subtitle has-text-black">Social Feed</p>
      <p>Posts from you and your friends on fitness and nutrition...</p>
       <div class="post" v-for="p in posts" :key="p.src">
            <Post :post="p"/>
          </div>
      <div class="column is-8 is-offset-2">
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
import Post from '../components/Post.vue';
import session from "../services/session";
import { GetWall } from "../services/posts";

export default {
  components: { Post },
    data: ()=> ({
      posts: GetWall(session.user.handle)
    })
}
</script>
