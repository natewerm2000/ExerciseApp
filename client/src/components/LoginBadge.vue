<template>
    <div class="buttons" v-if="!Session.user">
          <router-link class="button is-black is-tab"  to="/signup" active-class="is-active" @click="signup">
            <strong>Sign up</strong>
        </router-link>
        <router-link class="button is-light is-tab"  to="/login" active-class="is-active" @click="login">
            Login
        </router-link>
    </div>
<div v-else>

        Hello {{name}} 
   
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
    computed:{
        name(){
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
        }
    }
}
</script>

<style>
</style>