<template>
    <form class="card" @submit.prevent="$emit('add')">
        <div class="card-content">
            <div class="content">
                <label class="label">Log your Exercise!</label>
                <div class="field">
                <label class="label">Date</label>
                    <div class="control">
                        <input class="input" type="topic" placeholder="Input the date of this exercise" v-model="post.date"/>
                          
                      </div>
                    </div>
                <div class="field">
                    <label class="label">Exercise Type</label>
                    <div class="control">
                        <input class="input" type="activity" placeholder="Input the type of Activity you did" v-model="post.exercise"/>
                          
                      </div>
                    </div>
                </div>
            
                <div class="field">
                    <label class="label">Muscle target</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Enter Muscle target" v-model="post.muscle"></textarea>
                    </div>
                </div>

                <div class="field">
                    <label class="label">General Exercise Information</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Describe your activity or just anything you desire!" v-model="post.describe"></textarea>
                    </div>
                </div>

            </div>
        
        <footer class="card-footer">
            <button class="button is-black card-footer-item" type="submit">Log Exercise</button>
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