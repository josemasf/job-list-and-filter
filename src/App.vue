<template>
  <v-app>
    <div class="bg-header">
      <div class="filter-box">
        <v-chip class="primary--text font-weight-bold ma-2" color="filterbg" close @click:close="deleteFilter(index)" label
          v-for="(item, index) in labelFilter" :key="item">
          {{item}}
        </v-chip>
      </div>
    </div>
    <v-main class="bg-body">
      <div id="content">
        <cards-jobs v-on:filter-label="filterLabel"></cards-jobs>
      </div>
    </v-main>
  </v-app>
</template>


<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

import CardsJobs from './containers/CardsJobs.vue';

@Component({
  components:{
    CardsJobs
  }
})
export default class App extends Vue{
  private labelFilter: string[] = ['vue']

  filterLabel(payload: string){
    if(!this.isInArray(payload))
    this.labelFilter.push(payload);
  }
  deleteFilter(index: number){
    this.labelFilter.splice(index, 1)
  }
  isInArray(newItem: string): boolean{
    const finder = this.labelFilter.find(item => item ===newItem);    
    console.log(finder)
    if(finder !== undefined)
      return  true
    return false
  }
}
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

.filter-box{
  margin: 0 auto;
  width: 90%;
  background-color: #fff;
  border-radius: 5px;
  top: 115px; 
  position: relative;  
  padding: 10px 25px;
  box-shadow: 0 0 25px 0 hsla(180, 29%, 50%, 0.4);

}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');
*{
  font-family: 'Spartan', sans-serif;
}
</style>


