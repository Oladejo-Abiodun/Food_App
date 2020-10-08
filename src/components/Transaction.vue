<template>
    <div>
        <div>
            
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
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr  :key="i" v-for="(cart,i) in myCart">
        <td>{{i+1}}</td>
         <!-- <div   style="max-height:60px;overflow:auto;"  >
        <span :key="z" v-for="(food,z) in cart.foods"> {{food}}<hr> </span>
        </div> -->
        <td>{{cart.foods}}</td>
        <td>{{cart.totalCost}}</td>
        <td>{{cart.first}}</td>
        <td>{{cart.last}}</td>
        <td>{{cart.time}}</td>
        <td><button @click="accept(i)">Accept</button></td>
        <td><button @click="ignore(i)">Ignore</button></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        
      </tr>
      <tr>
       
      </tr>
    </tbody>
  </table>
  </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Transaction",
  data(){
      return{
        myCart: JSON.parse(localStorage.myCart)
      }  
  },


  // This function is for the Admin to accept the Food Order
    methods:{
      accept(i){
        let acceptCart = JSON.parse(localStorage.myCart)
        let Cart = acceptCart[i]
        Cart.status = true;
        acceptCart[i] = Cart
        localStorage.myCart = JSON.stringify(acceptCart)
      },

      
      
      ignore(i){
        let ignoreCart = JSON.parse(localStorage.myCart)
        let ignore = ignoreCart[i]
        ignore.status = false;
        ignoreCart[i] = ignore
        localStorage.myCart = JSON.stringify(ignoreCart)
      }
    }
  
}
</script>

<style>
</style>