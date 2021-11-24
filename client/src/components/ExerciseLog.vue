<template>
  <div class="card">
  <div class="card-image">
    
  </div>
  <div class="card-content">
    <button class="delete" @click="$emit('remove')"></button>
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="post.user.pic" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4"> {{post.user.firstName}} {{post.user.lastName}} </p>
        <p class="subtitle is-6">
            {{post.user.handle}}
                  <time :datetime="post.time"> {{post.date}}</time>
        </p>
      </div>
    </div>
    <div class= "Content">
 <b>Exercise Type:</b> {{post.exercise}}
  </div>
<div class= "Content">
 <b>Muscle(s) Target:</b> {{post.muscle}}
  </div>
    <div class="content">
     <b>Description:</b> {{post.describe}}
    </div>
  </div>
    
</div>
</template>

<script>
export default {
    props: {
        post: Object
    },
    computed: {
        prettyDate(){
            if(this.post.time && this.post.time.toDateString){
                return this.post.time.toDateString()
            }else{
                return 'Never'
            }
            
        }
    }
}
</script>

<style>
    button.delete {
        position: absolute;
        top: 5px;
        right: 5px;
    }
</style>