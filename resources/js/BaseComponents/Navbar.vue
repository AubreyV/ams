<template>
  <nav class="navbar bg-orange-brand flex flex-no-wrap px-4">
    <input class="form-control form-control-dark w-1/4" type="text ml-2" placeholder="Search" aria-label="Search">
    <ul class="px-3 flex">
      <li class="nav-item text-nowrap flex">
        <div class="group">
          <div class="group">
            <div class="flex items-center cursor-pointer text-sm text-white border-b-0  group-hover:border-grey-light rounded-t-lg py-1 px-2" @click="drop = !drop">
              John Doe
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              <img src="https://placekitten.com/30/30" class="rounded-full mx-2">
            </div>
            <div 
              class="items-center absolute border border-t-0 rounded-b-lg mt-2 p-1 bg-white p-2 w-40 -ml-8"
              :class="drop ? 'visible' : 'invisible'"
              >
             <a href="#" class="px-4 py-2 block text-black hover:bg-grey-lighter">View Profile</a>
             <a href="#" class="px-4 py-2 block text-black hover:bg-grey-lighter">Edit Profile</a>
             <hr class="border-t mx-2 border-grey-ligght">
             <a href="#" class="px-4 py-2 block text-black hover:bg-grey-lighter" @click="logOut">Logout</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>

import { LOGOUT } from "../store/actions.type";

export default {
    mounted() {

    },
    data() {
      return {
        'drop' : false
      }
    },
    methods: {
      logOut(){
        this.$store.dispatch(LOGOUT)
          .then(()=>{
            this.$router.push('/login')
          })
      }
    }
}
</script>