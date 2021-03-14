<template>
  <v-app>
    <div class="bg-header">
      <div class="filter-box" v-show="labelFilter.length > 0">
        <v-chip class="primary--text font-weight-bold ma-2" color="filterbg" close @click:close="deleteFilter(index)" label
          v-for="(item, index) in labelFilter" :key="item">
          {{item}}
        </v-chip>
      </div>
    </div>
    <v-main class="bg-body">
      <div id="content">
        <cards-jobs v-on:filter-label="filterLabel" :items="items"></cards-jobs>
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
  private labelFilter: string[] = []  
  
  private itemsFiltered!: {
      id: number;company: string;logo: string;new: boolean;featured: boolean;position: string;role: string;level: string;postedAt: string;contract: string;location: string;languages: string[];tools: string[];
    } [];

   private items!: {
      id: number;company: string;logo: string;new: boolean;featured: boolean;position: string;role: string;level: string;postedAt: string;contract: string;location: string;languages: string[];tools: string[];
    } [];
created() {
  this.items = [{
      "id": 1,
      "company": "Photosnap",
      "logo": "photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]

  this.itemsFiltered = this.items;
}

  filterLabel(payload: string){
    if(!this.isInArray(payload)){
    this.labelFilter.push(payload);

    this.itemsFiltered = []
    /*this.labelFilter.forEach(item => {
      this.itemsFiltered.push(this.items.find( job ==> job.role === item)); 
    })*/
    }
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


