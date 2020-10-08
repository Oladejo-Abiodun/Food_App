<template>
    <div>
        <div class="row container-fluid">
            <div class="col-lg-3 pt-2" :key="i" v-for="(cartin, i) in carted">
        <div class="card">
            <div class="card-header bg-warning">
        <div><h1>Name:{{cartin.foodname}}</h1></div>
        </div>
        <div class="card-body">
        <div>Starting-Time:{{cartin.foodstart}}</div>
        <div>Ending-Time:{{cartin.foodend}}</div>
        <div>Price:${{cartin.foodprice}}</div>
        <!-- <div>Qty:<input type="number" @keyup="change(i, cartin.foodname, cartin.foodend,
         cartin.foodprice, cartin.Qty, cartin.foodprice * cartin.Qty)" v-model="cartin.Qty" id="qty"/></div> -->
        <!-- <div class="total">Total:{{cartin.foodprice * cartin.Qty}}</div> -->
        </div>
         <button type="button" @click="del(i)" class="btn btn-success">Delete</button>
        </div>
        </div>
        </div>
        <div class="container mt-4">
         <button type="button" @click="buy" class="btn btn-primary btn-block">Buy Food</button>
        </div>
    </div> 
</template>

<script>
export default {
    name:"Cart",
    data(){
        return{
            carted:"",
        }
    },
    mounted(){
        let collectCart = JSON.parse(localStorage.cart)
        this.carted = collectCart
    },

    methods:{
        del(i){
            let deleteCart = JSON.parse(localStorage.cart)
            deleteCart.splice(i,1);
            localStorage.cart = JSON.stringify(deleteCart)
            window.location = '/cart'
        },

        buy(){
            alert("Successful")
            let getCart = JSON.parse(localStorage.cart)
            let foods = [];
            let totalCost = 0;


            
            getCart.forEach(
                function(each){
                    console.log(each)
                    foods.push(each.foodname)
                    totalCost+=Number(each.foodprice)
                },
            )

            

            let first = JSON.parse(localStorage.getItem("currentCustomer")).firstName
            let last = JSON.parse(localStorage.getItem("currentCustomer")).lastName
            let password = JSON.parse(localStorage.getItem("currentCustomer")).password


            let Time = new Date()
            let time = Time.toLocaleString();
            

            let myCart = {foods,totalCost,first,last,password,time}

            if (localStorage.myCart) {
                let carti = JSON.parse(localStorage.myCart)
                carti.push(myCart)
                localStorage.myCart = JSON.stringify(carti)
            }

            else{
                let food = [myCart]
                localStorage.myCart = JSON.stringify(food)
            }
            localStorage.cart = ""
            // window.location = '/cart'
            window.location = "/Trans";    
        }

        // change(i,a,b,c,d,e){
        //     let getCart = JSON.parse(localStorage.cart)
        //     let obj = {
        //         foodstart:a,
        //         foodend:b,
        //         foodprice:c,
        //         Qty:d,
        //         Total:e
        //     }
            
        //     getCart[i] = obj
        //     localStorage.cart = JSON.stringify(obj)
        // }
    }
}
</script>

<style>
.qty{
      width: 30px;  
}
</style>