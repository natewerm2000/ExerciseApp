<template>
    <div class="buttons" v-if="!Session.user">
          <router-link class="button is-dark is-tab"  to="/signup" active-class="is-active" @click="register">
            <strong>Sign up</strong>
        </router-link>
        <router-link class="button is-light is-tab"  to="/login" active-class="is-active" @click="login">
            Login
        </router-link>
    </div>
    <div v-else>
        Welcome to Universal Fitness {{name}} !
    </div>
</template>

<script>
import Session from "../services/session";
export default {
    data (){
        return ({ 
            Session
        })
    },
    methods: {
        login(){
            this.$router.push('/login');
            //this.Session.Login();
        }
        
    },
    signup(){
            this.$router.pusher('/signup')
        },
    computed:{
        name(){
            return this.Session.user.FirstName + ' ' + this.Session.user.LastName;
        }
    }
}
</script>

<style>
</style>