<template>
    <div>

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand mr-5" href="#"></a>
    <ul class="navbar-nav">
    <li class="mr-5"><router-link to="/">HOME</router-link></li>
        <li class="mr-5"><router-link to="/about">ABOUT</router-link></li>
         <li class="mr-5"><router-link to="/chef" id="go">OUR CHEFS</router-link></li>
        <li class="mr-5"><router-link to="/Menu">MENU</router-link></li>
<li class="mr-5"><router-link to="/Contact">CONTACT US</router-link></li>
  </ul>

    <ul class="nav navbar-nav navbar-right">
      <!-- <li class="mr-5" ><router-link to="/Admin"><span class="glyphicon glyphicon-user"></span>Admin</router-link></li> -->
      <li class="mr-5"><router-link to="/Log"><span class="glyphicon glyphicon-log-in"></span>Login</router-link></li>
      <li class="mr-5"><router-link to="/Sign"><span class="glyphicon glyphicon-user"></span>Signup</router-link></li>
      <li class="mr-5"><router-link to="/Cart">Cart</router-link></li>
      <li class="mr-5"><router-link to="/Trans">Transaction-History</router-link></li>
    </ul>
      </nav>
     </div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style>
#go{
  color: blue;
}

</style>