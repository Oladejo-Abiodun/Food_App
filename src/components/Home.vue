<template >
    <div  class="pic">
        <h2 class="premium">BUSTA</h2>
        <p class="quality">Quality</p>
        <h1 class="rest">Restaurant </h1>
        <h2 class="dishes">& Dishes</h2>

        <div  class="container">
            <button type="button" @click="goMenu()" 
                class="btn btn-primary btn-block" id="button"
            >
                Get Started
            </button>
        </div>

        <div class="pix">
        </div>
    </div>
</template>

<script>
export default {
    name:"Home",

    methods:{
    goMenu(){ 
      this.$router.push('/Sign');
    }
  }

}
</script>

<style>
    .pic{
        background: url(./ice.jpg);
        background-size: cover;
        height: 90vh;
        margin-top: -20px;
    }

.premium{
   text-align: center;
   position: relative;
   bottom: -120px;
   color:yellow;
   font-family: Comic Sans MS;
}

.quality{
   text-align: center;
   position: relative;
   bottom: -120px;
   color:grey;
   font-family: Comic Sans MS;
}

.rest{
   text-align: center;
   position: relative;
   bottom: -120px;
   color:grey;
   font-family: Comic Sans MS;
}

.dishes{
   text-align: center;
   position: relative;
   bottom: -110px;
   color:grey;
   font-family: Comic Sans MS;
}

 #button{
   text-align: center;
   position: relative;
   bottom: -130px;
   font-family: Comic Sans MS;
} 

    

</style>