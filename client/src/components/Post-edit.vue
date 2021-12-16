<template>
    <form class="card" @submit.prevent="$emit('add')">
        <div class="card-content">
            <div class="content">
                <label class="label">Post your activity!</label>
                <div class="field">
                    <label class="label">Picture</label>
                    <div class="control">
                        <input class="input" type="url" placeholder="Input a URL to a picture" v-model="post.src" />
                    </div>
                </div>
                <div class="field">
                    
                    <div class="field">
                    <label class="label">Alt</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Some alternate text for this picture" v-model="post.alt" />
                    </div>
                </div>
                
                    
                    </div>
                <div class="field">
                    <label class="label">Workout/Activity Type</label>
                    <div class="control">
                        <input class="input" type="activity" placeholder="Input the type of Activity you did" v-model="post.activity"/>
                          
                      </div>
                    </div>
                     <div class="field">
                    <label class="label">Tag a friend to see your progress!</label>
                    <div class="control">
                        <p class="content"><b>Handle Selected:</b> {{ selected }}</p>
    <o-field label="Find a JS framework">
      <o-autocomplete rounded expanded v-model="name" :data="filteredDataArray" placeholder="e.g. @natewerm2000" icon="search" clearable @select="option => selected = option">
        <template v-slot:empty>No results found</template>
      </o-autocomplete>
    </o-field>
                      </div>
                    </div>
                </div>
            
                <div class="field">
                    <label class="label">Description</label>
                    <tr v-for="u in list" :key="u.handle">
                        
                    <td>{{ u.handle }}</td>
                    </tr>
                    <div class="control">
                        <textarea class="textarea" placeholder="Describe your activity or just anything you desire!" v-model="post.caption"></textarea>
                    </div>
                </div>


            </div>
        
        <footer class="card-footer">
            <button class="button is-black card-footer-item" type="submit">Submit</button>
            <button class="button is-link is-light card-footer-item" type="reset">Cancel</button>

        </footer>
    </form>
</template>

<script>import {  GetAll } from "../services/users"
export default {
    props: {
        newPost: Object
    },
    data(){
        return {
            post: this.newPost,
            data: ['@llama', '@jp', '@rapper'],
            daa: [],
        name: '',
        selected: null
        }
    },
    async mounted(){
        this.list = await GetAll();
    },
    watch: {
        newPost(){
            this.post = this.newPost;
        }
    },
    computed: {
         handles(){
            return this.Session.user.following;
        },
      filteredDataArray() {
        return this.data.filter(option => {
          return (
            option
              .toString()
              .toLowerCase()
              .indexOf(this.name.toLowerCase()) >= 0
          )
       
        })
      }
    }
}
</script>

<style>
</style>