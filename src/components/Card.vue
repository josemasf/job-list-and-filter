<template>
<div class=" ">
  <v-card outlined class="job-info mb-5" v-for="job in jobInfo" :key="job.id">
  <v-list-item three-line >
    <v-list-item-avatar size="80">
      <v-img :src="logoImage(job)"></v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <div class="overline ">
        {{job.company}}
        <v-chip
          x-small color="primary white--text ma-2" v-show="job.new"
        >NEW!</v-chip>
        <v-chip
          x-small color="black white--text" v-show="job.featured"
        >Featured</v-chip>
      </div>
      <v-list-item-title class="mb-1">
        {{job.position}}
      </v-list-item-title>
      <v-list-item-subtitle>
        <ul class="extra-data">
          <li>{{job.postedAt}}</li>
          <li>{{job.contract}}</li>
          <li>{{job.location}}</li>
        </ul>         
      </v-list-item-subtitle>
    </v-list-item-content>            
  </v-list-item>            
</v-card>
</div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
    components:{        
    }
    })
export default class Card extends Vue{
@Prop() readonly jobInfo!: Job[]

    logoImage (jobInfo: Job) {      
      const fileName = jobInfo.logo.toLowerCase()

      return require(`../assets/${fileName}`) // the module request
    }
}

interface Job{
      id: number;company: string;logo: string;new: boolean;featured: boolean;position: string;role: string;level: string;postedAt: string;contract: string;location: string;languages: string[];tools: string[];
    }
</script>
<style lang="scss" scoped>
.job-info{
  box-shadow: 0 0 25px 0 hsla(180, 29%, 50%, 0.4);
}
.extra-data{  
  padding-left: 0;  
    li {
    display:inline;  
    
  }
    li:after{
      content: '.';
      margin: 0 15px;
      position: relative;
      top: -5px;
      font-size: 20px;
    }
    li:last-child:after{
        content: '';
      }
    
}
</style>