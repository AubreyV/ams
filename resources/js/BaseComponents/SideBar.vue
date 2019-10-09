<template>
  <nav class="sidebar">
    <div class="sidebar-sticky">
      <a class="navbar-brand my-2 mx-3 text-white" href="#">Company name</a>
      <hr class="bg-blue-500">
      <ul class="nav flex-column mt-2">
        <li class="md:hidden">
          <span class="float-right font-bold text-xl mr-4">
            X
          </span>
        </li>
        <li class="hover:bg-blue-200" v-for="link in links">
          <a 
            class="nav-link hover:bg-blue-500 text-blue-100 hover:font-bold hover:text-gray-200 transition-colors transition-200"  
            :href="link.link">
            <span data-feather="home"></span>
            {{link.name}} <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
      <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Saved reports</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="hover:bg-blue-200" v-for="report in reports">
          <a 
            class="nav-link hover:bg-blue-500 text-blue-100 hover:font-bold hover:text-gray-200 transition-colors transition-1000"
            :href="report.link">
            <span data-feather="home"></span>
            {{report.name}} <span class="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

  data() {
    return {
      links: [
        {
          name: 'Dashboard',
          link: '#',
          isActive: false
        },
        {
          name: 'Orders',
          link: '#',
          isActive: false
        },
        {
          name: 'Products',
          link: '#',
          isActive: false
        },
        {
          name: 'Customers',
          link: '#',
          isActive: false
        },
        {
          name: 'Reports',
          link: '#',
          isActive : false
        }
      ],

      reports: [
        {
          name: 'Current Month',
          link: '#',
          isActive: false
        },
        {
          name: 'Last Quarter',
          link: '#',
          isActive: false
        },
        {
          name: 'Social Engagement',
          link: '#',
          isActive: false
        },
        {
          name: 'Year-end Sale',
          link: '#',
          isActive: false
        },
      ]
    }
  }
    
}
</script>