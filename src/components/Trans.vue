<template>
    <div class="container mt-3">
        <h2>Transactions page</h2>
            <table class="table bg-warning text-dark table-hover mt-4">
    <thead>
      <tr>
        <th>Cart_id</th>
        <th>Items</th>
        <th>Total Cost($)</th>
         <th>First_Name</th>
         <th>Last_Name</th>
         <th>Trans_Time</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(cart,i) in myCart">
        <td>{{i+1}}</td>
        <div   style="max-height:60px;overflow:auto;"  >
        <span :key="z" v-for="(food,z) in cart.foods"> {{food}}<hr> </span>
        </div>
        <!-- <td>{{cart.foods}}</td> -->
        <td>{{cart.totalCost}}</td>
        <td>{{cart.first}}</td>
        <td>{{cart.last}}</td>
       <td>{{cart.time}}</td>
        <span v-if="cart.status"><td class="bg-success"></td></span>
        <span v-else-if="cart.status==false"><td class="bg-danger"></td></span>
        <span v-else><td class="bg-primary"></td></span>
      
      </tr>
      <tr>
        
      </tr>
      <tr>
       
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: "Trans",
  data(){
      return{
        myCart: JSON.parse(localStorage.myCart)

      }
  },
  mounted(){
    let port = []
    let first = JSON.parse(localStorage.currentCustomer).firstName
    let last = JSON.parse(localStorage.currentCustomer).lastName
    
      this.myCart.forEach(function(each){
        if (each.first == first && each.last == last) {
          // port.push(each)
port=[...port,each]
        }
      })
      this.myCart = port
  }
}
</script>

<style>
</style>