<template>
<div >
    <pre>
      <p  v-html="content" class="text_center">{{this.content}}</p>
    </pre>
</div>

</template>

<script>
import dictionaryApi from "@/api/dictionary";
import authApi from "@/utils/auth";
export default {
    name: 'DictionaryDetail',
    data(){
        return{
            id:1,
            content:'加载中...'
        }
    },
    created(){
        if (authApi.getUser().token === undefined){
            this.$message({
                type:'error',
                message:'请先登录'
            })
            this.$router.push('/login')
            return
        }
        this.id = this.$route.params.id
        this.getDictionary()
    },
    methods:{
        getDictionary(){
            dictionaryApi.getDictionary(this.id).then(res => {
                console.log(res.data)
                this.content=res.data.data.content
            });
        }
    }
}
</script>

<style scoped>
.text_center{
  text-align: left;
  margin-left: 30%;
}
</style>
