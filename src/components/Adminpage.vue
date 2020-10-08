<template>
    <div>
         <router-link to="/Adminpage/Transaction">Transaction</router-link>
         <router-view></router-view>
        <div class="container">
            <h2>Admin Food Page</h2>
            <img v-if="tempFile" v-bind:src='tempFile' height="150" width="150">
            <input type="text" class="form-control" v-model="food" placeholder="Food"><br><br>
             <input type="text" class="form-control" v-model="price" placeholder="Price"><br><br>
            <input type="file" @change="uploader($event)" class="form-control" id="myFile"><br><br>
              

            <input type = "time" class="form-control" v-model="stime"><br><br>
            <input type = "time" class="form-control" v-model="etime"><br><br>  
            <button class="btn btn-primary" @click="add">Add</button>
            <button class="btn btn-primary ml-4" @click="clr">clearFood</button>
        </div>
    </div>
</template>

<script>


export default {
    name:"Adminpage",

    data(){
        return{
            food:"",
            price:"",
            stime:"",
            etime:"",
            myFood: [],
            myFile: '',
            tempFile: null
        }
    },
        methods:{ 
            add(){
                let obj = {
                    food: this.food,
                    price:this.price,
                    stime: this.stime,
                    etime: this.etime,
                    status:"Available",
                    Pic:this.myFile,
                    qty:1,
                } 
                
                if(localStorage.myFood) {
                   let exist = JSON.parse(localStorage.myFood)
                   exist.push(obj)
                   localStorage.myFood = JSON.stringify(exist);
                   alert("Added")

                }else{
                    const food = [obj];
                    localStorage.myFood = JSON.stringify(food); 
                     alert("Added")   
                }
            },

            see(e){
               console.log(e)
            },


            uploader(e){
                if(!e.target.files) return
                this.tempFile = URL.createObjectURL(e.target.files[0]);
                this.myFile = e.target.files[0].name;
                console.log(this.myFile);
            },
            clr(){
                localStorage.myFood = "";
                alert("Cleared")
            }
        }
}
</script>

