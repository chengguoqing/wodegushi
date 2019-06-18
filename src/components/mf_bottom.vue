<template>
<div class="box df_jkjh_detr">
   
    <section class="box_a sd_jh_dfdf" v-for="(sd,idxe) in sd_sdf" :class="[idxe==idx?'act':'',sd.class_d] " @click="hf(sd.url)">
   
        <p class="sd_jh_der">
           <i class="f_i sdf_sdfg" ></i>
        </p>
        <p class="z9 fz12 sdf_dert">{{sd.name}}</p>
    </section>
    
</div>
</template>
<script>
    export default {
        props: {
            idx: ""
        },
        data() {
            return {
                sd_sdf: [{
                    name: "集故事抽奖",
                    url:"choujiang",
                    class_d: "aa"
                }, {
                    name: "生成故事",
                    url:'',
                    class_d: "ab"
                }, {
                    name: "已有故事",
                      url:"has_story",
                    class_d: "ac"
                }]
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .df_jkjh_detr {
        position: fixed;
        left: 0px;
        bottom: 0px;
        z-index: 1000;
        width: 100%;
        background: #fff;
        height: 50px;
        text-align: center;

    }

    .sd_jh_der {
        height: 25px;
        line-height: 25px;
    }

    .sdf_sdfg {
        width: 26px;
        height: 26px;
        background-position: -74px -48px
    }

    .sd_jh_dfdf {
        padding-top: 4px;
    }

    .sd_jh_dfdf.ab .sdf_sdfg {
        height: 26px;
        width: 25px;
        background-position: -119px -49px;
    }

    .sd_jh_dfdf.ac .sdf_sdfg {
        height: 25px;
        width: 27px;
        background-position: -172px -48px;
    }



    .sdf_dert {
        margin-top: 4px;
    }

    .sd_jh_dfdf.aa.act .sdf_sdfg{
          background-position: -74px -115px;
    }
     .sd_jh_dfdf.act .z9{
      color: #a61219 !important
    }
    
       .sd_jh_dfdf.ab.act .sdf_sdfg{
        background-position: -119px -115px !important;
    }
         .sd_jh_dfdf.ac.act .sdf_sdfg{
        background-position: -172px -115px !important;
    }
    
           .sd_jh_dfdf.ad.act .sdf_sdfg{
        background-position: -210px -89px !important;
    }
    
           .sd_jh_dfdf.ae.act .sdf_sdfg{
        background-position: -256px -91px !important;
    }
</style>
