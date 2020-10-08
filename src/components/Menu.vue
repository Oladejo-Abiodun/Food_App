<template>
    <div>
        <h1>Available Foods</h1>
        <div class="container">
        <div class="row">
            <div class="col-md-3" v-bind:key="i" v-for=" (food, i) in foods">
        <div class="d-inline-block mr-3 card  text-dark text-center mt-4">
            <img :src="require(`@/assets/FoodRecipe/${food.Pic}`)"  height="250" 
             class="card-img-top"/><br/>
            <div>name:{{food.food}}</div>
            <div>Price:${{food.price}}</div>
            <div>Starting-Time:{{food.stime}}</div>
            <!-- <div>Quantity:<input type="text" size="1" v-model="qty"/></div> -->
            <div>Ending-Time:{{food.etime}}</div>
            <div>Status:{{food.status}}</div>
            <button class="mt-2 btn btn-info" @click="add(i)" >Add Food Up</button><br><br>
            <!-- v-bind:disabled = "{}"    -->
            </div>
            </div>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Menu",
    data(){
       return{

           foods: JSON.parse(localStorage.myFood),
           newCart :[],
           qty:""
        }
    },

     mounted(){
            let time = new Date()
            let getHour = time.getHours();


            let getTime = JSON.parse(localStorage.myFood)
            getTime.forEach(function(each){
        let dtime = parseInt(each.etime.slice(0,2))
        let sstime = parseInt(each.stime.slice(0,2))
    
            if (dtime === getHour) {
                each.status = "Not-Available"  
            }

            else if (sstime === getHour) {
                each.status = "Available"
              
            }
             localStorage.myFood = JSON.stringify(getTime)

            // else{
            //  console.log('stst')   
            // }
            }
            )
            
        },

    
    methods:{
        see(event){console.log(event)},
        add(i){
            // alert(i);
             let getObj = JSON.parse(localStorage.myFood);


            let cartobj = {
                foodPic:getObj[i].Pic, foodend:getObj[i].etime, foodstart:getObj[i].stime,
                foodname:getObj[i].food,foodprice:getObj[i].price, qty:1,
        }

            if (getObj[i].status === "Not-Available") {
                    alert(`This food is ${getObj[i].status}`)
                }

        
           else if (localStorage.cart) {
                let Cart = JSON.parse(localStorage.cart)
                Cart.push(cartobj)
                localStorage.cart = JSON.stringify(Cart)
                alert("Added to cart")

            }else{
                let food = [cartobj]
                localStorage.cart = JSON.stringify(food)
                alert("Added to cart")
                 console.log(cartobj)
            }  
        },    
    }
    
}
</script>

<style>
</style>