<template>
	 <div class="ssd_kjjh_deer" v-if="is_Ssddf">
        
    
            <section id="my-node">
            
    <vueCropper
           
  class="DSf_sdret"
  ref="cropper"
                :info="true"
                mode="100%"
                :img="option.img"
                :outputSize="option.size"
                :outputType="option.outputType"

                :canScale="true"
                :canMoveBox="false"
                enlarge="3"
                 :auto-crop="option.autoCrop" 
                :auto-crop-width="option.autoCropWidth" 
                :auto-crop-height="option.autoCropHeight" 
                
> </vueCropper>
           </section> 
            
            <van-row gutter="" class="pd cf fz14 sdfrthh_de">
                
                <section class="cen pm20">
            <i class="f_i shouji_e cz"></i>
                    <span class="fz12 cf ml10">图片可缩放裁剪</span>
            </section>
                
                <van-col span="12">
<!--                <span @click="$emit('close_s')">取消</span>   -->
    <i class="f_i ddfd_kjj_der" @click="$emit('close_s')"></i>
                </van-col>
                <van-col span="12" class="tr" >
<!--                  <span @click="get_base"> 确定</span> -->
                      <i class="f_i ddfd_kjj_der ab" @click="get_base"></i>
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
        props: {
            img_dd: null
        },
        data() {
            return {
                is_Ssddf: false,
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
                    fixedNumber: [2, 2],
                    high: true
                }
            }
        }, 
        components: {
            VueCropper
        },
        methods: {
            get_base() {
                this.$refs.cropper.getCropData((data) => {

                    this.$emit('get_img', data)
                })
            }


        },
        mounted() {
            if (this.img_dd.indexOf("data") < 0) {
                var localData = this.img_dd
                localData = 'data:image/jpeg;base64,' + localData
                localData = localData.replace(/\r|\n/g, '').replace('data:image/jgp', 'data:image/jpeg')
                this.option.img = localData
                this.is_Ssddf = true
            } else {
                this.option.img = this.img_dd
                this.is_Ssddf = true
            }



        },
        watch: {
            img_dd: {
                handler: function() {
                    if (this.img_dd.indexOf("data") < 0) {
                        var localData = this.img_dd
                        localData = 'data:image/jpeg;base64,' + localData
                        localData = localData.replace(/\r|\n/g, '').replace('data:image/jgp', 'data:image/jpeg')
                        this.option.img = localData
                        this.is_Ssddf = true
                    } else {
                        this.option.img = this.img_dd
                        this.is_Ssddf = true
                    }

                },
                deep: true
            }
        }
    }

</script>
<style>
    .crop-info {
        display: none
    }

    .crop-point {
        background: url("https://mall.cangniaowl.com/static_story/img/xbt.png?v=20")!important;
        background-size: 360px !important;
        vertical-align: middle !important;
        display: inline-block;
        width: 20px !important;
        height: 25px !important;
        opacity: 1 !important;
    }

    .crop-point.point1,
    .crop-point.point3,
    .crop-point.point6,
    .crop-point.point8 {
        background-position: -196px -440px!important;
    }

    .crop-point.point3 {
        transform: rotate(90deg);
        top: -12px;
    }

    .crop-point.point6 {
        transform: rotate(90deg);
    }

</style>
<style scoped>
    .sd_jh_dert {}

    .ssd_kjjh_deer {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 1000
    }

    .DSf_sdret {
        background: #000 !important;
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

    .sdfrthh_de {
        position: fixed;
        left: 0px;
        bottom: 30px;
        width: 250px;
        right: 0;
        margin: auto;
        z-index: 1000;
    }

    .ddfd_kjj_der {
        width: 47px;
        height: 15px;
        background-position: -224px -381px;
    }

    .ddfd_kjj_der.ab {
        width: 53px;
        height: 16px;
        background-position: -297px -375px;
    }

    .shouji_e {
        width: 27px;
        height: 32px;
        background-position: -248px -424px;
        position: relative;
        bottom: 4px;
    }

    @media screen and (min-height: 750px) {
        .sdfrthh_de {
            bottom: 120px;
        }
    }

</style>
