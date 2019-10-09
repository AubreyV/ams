<template>
  <div class="flex w-full">
    <div class="w-full md:w-1/4 lg:w-1/5 bg-blue-brand">
      <side-bar />
    </div>
    <div class="flex-1">
      <nav-bar/>
      <div class="p-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from '../BaseComponents/Navbar';
import SideBar from '../BaseComponents/SideBar';

export default {
  components:{
    'nav-bar' : NavBar,
    'side-bar' : SideBar
  }
}
</script>
