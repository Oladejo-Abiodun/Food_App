<template>
    <div>
        <div class="container">
          <h2>Admin page</h2>
  <form>

    <div class="form-group">
           <label for="name">Name</label>
              <input type="text"  v-model="name" class="form-control" id="name" placeholder="Name">
     </div>

           <div class="form-group">
                <label for="pwd">Password:</label>
                  <input type="password" v-model="password" class="form-control" 
                  id="pwd" placeholder="Enter password" name="pswd">
           </div>

      <div class="form-group form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember"> Remember me
          </label>
      </div>
  
    <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
  </form>
    </div>

        </div>
</template>

<script>
export default {
    name:"Admin",
    
    data(){
      return{
         name:"",
      password:"",

      }
     
    },

    methods:{
        submit(e){
            e.preventDefault();
            if (this.name == "" && this.password == "") {
            window.location = '/Adminpage';
            } else {
                alert("Incorrect Password");
            }
        }
    }
}
</script>

<style>
</style>