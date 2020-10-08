<template>
    <div>
        <div class="container">
  <h2>Log in page</h2>
  <form>
    <div class="form-group">
      <label for="firstName">First-Name</label>
      <input type="text" class="form-control" id="first" placeholder="First-Name" v-model="first">
    </div>

     <div class="form-group">
      <label for="lastName">Last-Name</label>
      <input type="text" class="form-control" id="last" placeholder="Last-Name" v-model="last">
    </div>


    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model="password">
    </div>
    
   
    <button type="submit" @click="log" class="btn btn-primary">Log-in</button>
  </form>
</div>
    </div>
</template>

<script>
export default {
    name:"Log",

    data(){
      return{
        first:"",
        last:"",
        password:"",
      }
    },

     methods:{
        log(e){ 
           e.preventDefault()
           let person = JSON.parse(localStorage.getItem("Users"))
           
           if (person.find(data => this.first==data.first && this.last==data.last && 
            this.password==data.password)) {
             alert("Log in successful") 
            
             let obj = {
                firstName:this.first,
                lastName:this.last,
                password:this.password
             }
          // currentCustomer
            window.location = "/Menu";
          localStorage.currentCustomer = JSON.stringify(obj)

           }else{
             alert("Wrong Input")
           }
        }
    }
}
</script>

<style>
</style>