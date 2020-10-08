<template>
    <div>
        <div class="container">
  <h2>Sign up page</h2>
  <form>
    <div class="form-group">
      <label for="firstName">First-Name</label>
      <input type="text" class="form-control"  placeholder="First-Name" v-model="first" required>
    </div>

     <div class="form-group">
      <label for="lastName">Last-Name</label>
      <input type="text" class="form-control"  placeholder="Last-Name" v-model="last">
    </div>

     <div class="form-group">
      <label for="address">Address</label>
      <input type="text" class="form-control"  placeholder="Address" maxlength="30" v-model="address">
    </div>

     <div class="form-group">
      <label for="phone">Phone-No</label>
      <input type="number" class="form-control"  placeholder="Phone-No" v-model="number">
    </div>

    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control"  placeholder="Enter password" v-model="password">
    </div>
   
    <button type="submit" @click="submit" class="btn btn-primary">Submit</button>
  </form>
</div><br>

      <li class="float-right mr-4" id="log"><router-link to="/log">Already have an account</router-link></li>
    </div>
</template>

<script>
export default {
    name:"Sign",

    data(){
        return{
            first:"",
            last:"",
            address:"",
            number:"",
            password:"",
            myUsers:[],
        }
    },
    methods:{
        submit(e){
             e.preventDefault();
            let users = {
                first: this.first,
                last: this.last,
                address: this.address,
                number: this.number,
                password:this.password};
              
              if (this.first == "" && this.last == "" && this.address == "" 
              && this. number == "" && this.password == "") {
                return alert("Input all the requirement")
              }

                   if (localStorage.getItem("Users")!==null) {
                   let exist = JSON.parse(localStorage.getItem("Users"))
                   let check = exist.some(data => this.first === data.first)
                   if (check) {return alert ("Name already exist")}
                   exist.push(users)

                   localStorage.setItem("Users", JSON.stringify(exist))
                   alert("Sign up successful")

                }else{
                        localStorage.setItem("Users", JSON.stringify(this.myUsers = [...this.myUsers, users]));
                        alert("Sign up successful")
                }
          
                }
        }
    }

</script>

<style>
#log{
  margin-top: -70px;
}
</style>