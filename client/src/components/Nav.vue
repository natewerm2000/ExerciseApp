<template>
    <div id="nav">
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://cdn.dribbble.com/users/541480/screenshots/10860012/jo_dribbble_exercise_takeover_logo-grid_4x.jpg" height="28">
      <h3 class="title">Universal Fitness</h3>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{'is-active': isActive}" @click="isActive = !isActive">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

    <div class="container">
  <div class="navbar-menu" :class="{'is-active': isActive}">
    <div class="navbar-start">
      
        <router-link class = "navbar-item is-tab" to = "/" active-class="is-active">
        Home
        </router-link>

      <router-link class = "navbar-item is-tab" to = "/nutrition" active-class="is-active">
        Nutrition
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Social Network
        </a>

        <div class="navbar-dropdown">
          <router-link class = "navbar-item is-tab" to = "/social" active-class="is-active">
            Social
          </router-link>
          <router-link class = "navbar-item is-tab" to = "/friends" active-class="is-active">
            Friends and Feed
          </router-link>
          <router-link class = "navbar-item is-tab" to = "/activitylog" active-class="is-active">
            Activity Log
          </router-link>
           <router-link class = "navbar-item is-tab" to = "/progress" active-class="is-active">
            Weekly Progress
           </router-link>
          <router-link class = "navbar-item is-tab" to = "/profile" active-class="is-active">
            Profile
          </router-link>
        </div>
      </div>
       <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Resistance Training
        </a>

        <div class="navbar-dropdown">
          <router-link class = "navbar-item is-tab" to = "/weights" active-class="is-active">
            Weights
          </router-link>
          <router-link class = "navbar-item is-tab" to = "/counter" active-class="is-active">
            Reps/Sets Tracker
          </router-link>
         <router-link class = "navbar-item is-tab" to = "/stopwatch" active-class="is-active">
            Stopwatch
         </router-link>
        </div>
      </div>
       <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Cardio Training
        </a>

        <div class="navbar-dropdown">
          <router-link class = "navbar-item is-tab" to = "/running" active-class="is-active">
            Running
          </router-link>
          <router-link class = "navbar-item is-tab" to = "/bike" active-class="is-active">
            Bicycle
          </router-link>
          <router-link class = "navbar-item is-tab" to = "/swimming" active-class="is-active">
            Swimming
          </router-link>
           <router-link class = "navbar-item is-tab" to = "/stopwatch" active-class="is-active">
            Stopwatch
           </router-link>
        </div>
      </div>
       <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
         More
        </a>

        <div class="navbar-dropdown">
          <router-link class = "navbar-item is-tab" to = "/about" active-class="is-active">
            About
          </router-link>
          <router-link class = "navbar-item is-tab" to = "/contactus" active-class="is-active">
            Contact Us
          </router-link>
          <router-link class = "navbar-item is-tab" to = "/reportissue" active-class="is-active">
            Report an Issue
          </router-link>
        </div>
      </div>
    </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
          <login-badge />
      </div>
    </div>
  </div>
</nav>
</div>
</template>

<script>
import LoginBadge from './LoginBadge.vue'

export default {
    data() {
        return {
            isActive: false
        } 
    },
    components: {
        LoginBadge
    }

}
</script>

<style>

</style>