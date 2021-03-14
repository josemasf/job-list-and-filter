<template>
  <v-app>
    <div class="bg-header">
    </div>
    <v-main class="bg-body">
      <div id="content">
        <cards-jobs></cards-jobs>
      </div>
    </v-main>
  </v-app>
</template>


<script lang="ts">
import Vue from 'vue';

import CardsJobs from './containers/CardsJobs.vue';

export default Vue.extend({
  name: 'App',

  components: {
    CardsJobs,
  },

  data: () => ({
    //
  }),
});
</script>

<style scoped>
.bg-header{  
  background-image: url('~@/assets/bg-header-desktop.svg');
  background-color: hsl(180, 29%, 50%);
  min-height: 150px;
  background-size: 100% 100%;
}

.bg-body{
  background-color: hsl(180, 52%, 96%);    
}
#content{  
  max-width: 1440px;
  margin: 80px auto 0;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');
*{
  font-family: 'Spartan', sans-serif;
}
</style>


