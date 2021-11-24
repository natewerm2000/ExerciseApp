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
                    
                    
                <label class="label">First Name:</label>
                    <div class="control">
                        <input class="input" type="topic" placeholder="enter new first name" v-model="post.firstName"/>
                          
                      </div>
                    </div>
                <div class="field">
                    <label class="label">Last Name</label>
                    <div class="control">
                        <input class="input" type="activity" placeholder="enter new last name" v-model="post.lastName"/>
                          
                      </div>
                    </div>
                </div>
            
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                        <input class="input" placeholder="enter new username" v-model="post.handle">
                    </div>
                </div>

                 <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" placeholder="Enter new email" v-model="post.email">
                    </div>
                </div>

    

            </div>
        
        <footer class="card-footer">
            <button class="button is-black card-footer-item" type="submit">Submit</button>
            <button class="button is-link is-light card-footer-item" type="reset">Cancel</button>

        </footer>
    </form>
</template>

<script>
export default {
    props: {
        newPost: Object
    },
    data(){
        return {
            post: this.newPost
        }
    },
    watch: {
        newPost(){
            this.post = this.newPost;
        }
    }
    
    
}
</script>

<style>
</style>