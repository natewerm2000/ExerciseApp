<template>

  <div class="section">
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
  <div class="title has-text-grey is-5">Post whatever you would like to show your friends!</div>
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
         <div class="title has-text-grey is-5">Want to create a post on your exercise? start by editing this post below to get started</div>
<div class="column">
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

<script>
import Post from '../components/Post.vue';
import session from "../services/session";
import { Add, Delete, GetFeed } from "../services/posts";
import PostEdit from "../components/Post-edit.vue";
const newPost = ()=> ({ user: session.user, user_handle: session.user.handle })
export default {
    components: {
        Post,
        PostEdit
    },
    data: ()=> ({
        posts: [],
        newPost: newPost()
    }),
    async mounted(){
        this.posts = await GetFeed(session.user.handle)
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
            console.log("Adding new post at " + new Date())
            const response = await Add(this.newPost);
            console.log({ response });
            if(response){
                this.posts.unshift(response);
                this.newPost = newPost();
            }
        }
    }
}
</script>

<style>
    .card {
        margin-bottom: 10px;
    }
</style>