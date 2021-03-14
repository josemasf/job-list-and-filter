<template>
<div>
  <div class="job-card" v-for="job in jobInfo"
      :key="job.id">
    <v-card outlined class="job-info ma-5 pa-3" :class="job.featured ? 'featured-job': ''" >
      <v-list-item three-line>
        <v-list-item-avatar size="80" :class="$vuetify.breakpoint.mobile ? 'avatar-mobile' : ''">
          <v-img :src="logoImage(job)"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-row>
            <v-col :cols=12 :md=6 class="content-mobile">
              <div class="primary--text job-company ">
                {{job.company}}
                <v-chip x-small color="primary white--text ma-2 chip" v-show="job.new">NEW!</v-chip>
                <v-chip x-small color="black white--text text-uppercase chip" v-show="job.featured">Featured</v-chip>
              </div>
              <v-list-item-title class="mt-2 mb-1 job-position">
                <router-link to="#">{{job.position}}</router-link>
              </v-list-item-title>
              <v-list-item-subtitle>
                <ul class="extra-data">
                  <li>{{job.postedAt}}</li>
                  <li>{{job.contract}}</li>
                  <li>{{job.location}}</li>
                </ul>
              </v-list-item-subtitle>
            </v-col>
            <v-col :cols=12 :md=6 v-show="!$vuetify.breakpoint.mobile">
              <div class="mt-3" :class="!$vuetify.breakpoint.mobile ? 'text-right' : ''">
                <v-chip class="primary--text font-weight-bold ma-2" color="filterbg" @click="selectLabel(item)" label
                  v-for="item in labelInfo(job)" :key="item">
                  {{item}}
                </v-chip>
              </div>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>
      <v-col :cols=12 :md=6 v-show="$vuetify.breakpoint.mobile">
        <v-divider></v-divider>
        <div class="mt-3" :class="!$vuetify.breakpoint.mobile ? 'text-right' : ''">
          <v-chip class="primary--text font-weight-bold ma-2" color="filterbg" @click="selectLabel(item)" label
            v-for="item in labelInfo(job)" :key="item">
            {{item}}
          </v-chip>
        </div>
      </v-col>
    </v-card>
  </div>
  </div>
</template>

<script lang="ts">

import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component({
    components:{        
    }
    })
export default class Card extends Vue{
@Prop() readonly jobInfo!: Job[]

private selectedLabels: string[] = [];

    logoImage (jobInfo: Job) {      
      const fileName = jobInfo.logo.toLowerCase()

      return require(`../assets/${fileName}`) // the module request
    }

    labelInfo(jobInfo: Job) {      
      const info: string[] = [];

      info.push(jobInfo.role);
      info.push(jobInfo.level);
      jobInfo.languages.forEach(element => {
        info.push(element)
      });
      jobInfo.tools.forEach(element => {
        info.push(element)
      });

      return info;
    }

    @Emit()
    selectLabel(item: string){
      this.selectedLabels.push(item);
    }

}

interface Job{
      id: number;company: string;logo: string;new: boolean;featured: boolean;position: string;role: string;level: string;postedAt: string;contract: string;location: string;languages: string[];tools: string[];
    }
</script>
<style lang="scss" scoped>
.job-info {
  box-shadow: 0 0 25px 0 hsla(180, 29%, 50%, 0.4);
}

.extra-data {
  padding-left: 0;

  li {
    display: inline;

  }

  li:after {
    content: '.';
    margin: 0 15px;
    position: relative;
    top: -5px;
    font-size: 20px;
  }

  li:last-child:after {
    content: '';
  }

}

.featured-job{
  border-left: hsl(180, 29%, 50%) 5px solid !important;
}
.job-position{
  font-weight: 700;
  font-size: 18px;  
}
.job-company{
  font-weight: 700;
  font-size: 13px;  
}
.chip{
  padding-top: 2.5px;
}

a{
  color: #000 !important;
  text-decoration: none;
}
a:hover{
  color: #5BA4A4 !important;
  text-decoration: none;
}

.avatar-mobile{
  float: right;
  position: relative;
  top: -70px;
}

@media (max-width: 600px) {
  .content-mobile{
      align-self: stretch;
      position: absolute;
      top: 15px;
      left: 10px;            
  }
  .job-card{
    height: 325px;
  }
 
}

</style>