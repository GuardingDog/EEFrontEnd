<template>
  <div>
    <div class="lines">
    <checkbox v-model="single"></checkbox>
    <div style="width: 10px;display:inline-block;text-align: center;line-height: 36px">
      {{number}}
    </div >
    <div style=" width: 25%;display:inline-block; background-color: white; margin-left: 70px;text-align: center">
      {{title}}
    </div>
    <div style="width: 10%;display:inline-block;margin-left: 70px;color: rgba(16, 16, 16, 0.61);text-align: center">
      {{author}}
    </div>
    <div style="width: 20%;display: inline-block;margin-left: 70px;text-align: center">
      {{source}}
    </div>
    <div style="width: 10%;display: inline-block;margin-left: 70px;text-align: center">
      {{date}}
    </div>
    <div style="width: 5%;display: inline-block;margin-left: 70px;text-align: center">
      <a>
        {{operation}}
      </a>
    </div>
    </div>
  </div>
</template>

<script>
    import Checkbox from "iview/src/components/checkbox/checkbox";
    export default {
        name: "LineForProject",
      components: {Checkbox},
      data() {
        return {
          operation:"详情"
        }
      },
      methods:{

      },
      props:{
        number:{
          type:Number,
          required:true
        },
        title:{
          type:String,
          required:true
        },
        author:{
          type:String,
          required:true
        },
        source:{
          type:String,
          required:true
        },
        date:{
          type:String,
          required:true
        }

      }

    }
</script>

<style scoped>
  .lines{
    color: rgba(16, 16, 16, 1);
    font-size: 15px;
    width: 1500px;
    height: 36px;
    margin-left: 100px;
    margin-top: 5px;
    font-family: SourceHanSansSC-regular;
    border-bottom:1px dashed dimgray;
  }
</style>
