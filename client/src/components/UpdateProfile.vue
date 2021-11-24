<template>
  <div class="home">
    
       


 <h3 class="title has-text-black"></h3>
<hr class="login-hr">
<p class="subtitle has-text-black">Universal Fitness Profile</p>
<div class="box">
  <div class="box">
    <img :src="post.src" width="250" :alt="username" />
  </div>
 
</div>

   
        <div class="field">
          <div class="control">
            <div class="title has-text-grey is-5"><b>First Name: {{post.firstName}}</b></div>
          
            
          </div>
          
        </div>
         <div class="field">
          <div class="control">
            <div class="title has-text-grey is-5"><b>Last Name: {{post.lastName}}</b></div>
            
          </div>
          
        </div>
        <div class="field">
          <div class="control">
            <div class="title has-text-grey is-5"><b>Email: {{post.email}}</b></div>
          </div>
        </div>
        <div class="field">
          <div class="control">
           <div class="title has-text-grey is-5"><b>Handle: {{post.handle}}</b></div>
            
          </div>
        </div>
        <div class="field">
          <div class="control">
           <div class="title has-text-grey is-5"><b>Password: CONFIDENTIAL </b></div>
            
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