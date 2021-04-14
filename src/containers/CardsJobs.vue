<template>
    <div id="jobs" class="job-info">
      <card :jobInfo="items" v-on:select-label="filterLabel"></card>
    </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import {Card} from '@/components'

@Component({
    components:{
        Card
    }
    })
export default class CardsJobs extends Vue{  
  private filterLabelEmited!: string

  @Emit()
  filterLabel(payload: string){
    this.filterLabelEmited = payload
  }

  @Prop() items: any

}
</script>

