<template>
	 <div class="ssd_kjjh_deer">
        
    
            <section id="my-node">
          
    <vueCropper
           
  class="DSf_sdret"
  ref="cropper"
                :info="true"
                mode="220px"
                :img="option.img"
                :outputSize="option.size"
                :outputType="option.outputType"
                :fixedBox="true"
                :canScale="true"
                :canMoveBox="false"
                enlarge="3"
                 :auto-crop="option.autoCrop" 
                :auto-crop-width="option.autoCropWidth" 
                :auto-crop-height="option.autoCropHeight" 
                
> </vueCropper>
           </section> 
            
            <van-row gutter="" class="pd cf fz14 sdfrthh_de">
                <van-col span="12">取消</van-col>
                <van-col span="12" class="tr" >
                  <span @click="get_base"> 确定</span> 
                </van-col>
            </van-row>
       
  
<!--
         <section class="cen mt40">
         <van-uploader :after-read="onRead">
  <van-icon name="photograph" class="fz30"/>
           
</van-uploader>
           </section>
-->
    
  </div>
</template>
<script>
    import {
        VueCropper
    } from 'vue-cropper'
    export default {
        data() {
            return {
                option: {
                    img: "",
                    size: 1,
                    full: false,
                    canMoveBox: false,
                    outputType: 'png',
                    autoCrop: true,
                    // 只有自动截图开启 宽度高度才生效
                    autoCropWidth: "220",
                    autoCropHeight: "372",
                    centerBox: false,
                    fixedNumber:[2,2],
                    high: true
                }
            }
        },
        components: {
            VueCropper
        },
        methods: {
            onRead(file) {
                this.option.img = file.content
            },
            get_base() {
                this.$refs.cropper.getCropData((data) => {
                    // do something
                    console.log(data)
                })
            }


        },
        mounted() {

        },
    }

</script>
<style>
    .crop-info {
        display: none
    }

</style>
<style scoped>
    .ssd_kjjh_deer{
        margin-top: -80px;
        position: relative;
        top: 80px;
    }
    .DSf_sdret {
        background: #000;
        height: 100vh;
        width: 100%;
    }

    .sd_deertx {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 1000;
        pointer-events: none;
    }

    .sd_jh_dert {
        position: fixed;
        left: 0;
        right: 0px;
        bottom: 20px;
        margin: auto;
        z-index: 10000
    }

    #my-node {
        width: 100%;
        height: 100%;
        overflow: hidden
    }

    .sdfrthh_de{
        position: fixed;
        left: 0px;
        bottom: 10px;
        width: 100%;
        z-index: 1000;
    }
</style>
