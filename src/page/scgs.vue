<template>
<div >
    <p class="sd_ng_der"></p>
     <img src="https://mall.cangniaowl.com/static/img/story/mask.png" class="mask_eert">
    <section class="pr dsf_jh_cwer pt10 ov" :class="is_clasdd?'':'act'">
        <img :src="moren_s" class="sd_jh_deeret" ref="swed_jh_deer">
        <p class="sd_jh_deeret ac"></p>
       
        <section class="sd_jh_deert" :class="is_clasdd_b?'act':''">
           <chuliimg :sd_jhsd="sd_jhsd" :W="w_idth" :H="h_eight" :rgba="shezhi_s" class="sd_jh_deeret ab" ref="gaib_sr" @get_sds="get_sds"></chuliimg>
</section>
        <section class="sd_jh_cdeert">
        <section class="sd_bnblun_d h100">
    
            <section class="pr SDf_dfreyy" ref="mySwiper">
            <swiper :options="swiperOption" class=""  ref="mySwiper_e">
    <!-- slides -->
    <swiper-slide v-for="sd in story_idx" class="w100 h100" >
       <img :src="sd.background_img">
    </swiper-slide>
    
      
        
       
  </swiper>
                
                 <i class="f_i sd_kjhj_e dxswiper-button-prev"></i>    
                 <i class="f_i sd_kjhj_e ab dxswiper-button-next"></i> 
                
                
              <div class="swiper-pagination dsf_eertert"></div>
            
              </section>
        </section>
            </section>
        
        <section class="mt40 cen sdf_deert" >
    
            
<!--              <van-uploader :after-read="onRead"   class=" sdf_jh_dert yj4 pr " ref="sd_jjh_der">-->

<section @click.stop="up_img_er"  class=" sdf_jh_dert yj4 pr ">
            
            <i class="f_i xiangoser"></i>
            <span class="cf fz14  cz f_b  ml5"> {{is_sc_s?'修改':'上传'}}你的照片</span>
    </section>
<!--                </van-uploader>-->
            
            
        </section>
        
        <p class="qc"></p> 
        
        
    <section class=" mt15 cf ov  sf_jh_detx cen" >
      
          
     
        <section class="sd_kj_deertt cf  cen">
            <section class=" f_b  bk_e" v-for="(sd,idx) in shesd" >
     <section class="sd_kjj_def_w f_b" :class="sd_idx==idx?'act':''">
                <section class="sd_kjj_def yj4 pr f_b cz"  :style="{background:'rgba('+sd.rgba+',1)'}"  @click="bianhse_d(sd,idx)">
</section>
         </section> 
        </section>
        </section>
        <p class="qc"></p>
    </section>
        
<!--
        <section class="mt10 cen">
                <van-button type="danger" class="sd_hgh_der fz12" @click="scimg">
                就这张了！<br>
                <span class="fz15">生成“我的故事”</span>
                    
                </van-button>
        </section>
-->
        <section class="mt20 cen">
            <i class="f_i shengcwdgs" @click="scimg"></i>
        </section>
        
            <section class="cf cen mt20">
                 <img src="https://mall.cangniaowl.com/static/img/story/dibu_er.png?v=534" class="dibu_er" v-if="shop_id==261">
    <img src="https://mall.cangniaowl.com/static/img/story/dibu_er.png?v=534" class="dibu_er" v-if="shop_id==230">
                    <img src="https://mall.cangniaowl.com/static/img/story/dibu_san.png?v=534" class="dibu_er" v-if="shop_id==229">
    </section>
    </section>
    

    
 
    <mf_bottom idx="1"></mf_bottom>
    <bjtp :img_dd="img_dd" v-if="sc_sdfg" @close_s="sc_sdfg=false" @get_img="get_img"></bjtp>
    
    <mygs_pup :fx_img_e="fx_img_e" v-if="is_clo_s" @close_sd="is_clo_s=false"></mygs_pup>
   
  <section class="sd_kj_dert" v-if="is_jiaza">
      <van-loading color="white" class="cz dfs_jjh_dser"/>
    </section>

    

    <van-dialog
  v-model="show_ert"
   confirmButtonText="确定生成"
    cancelButtonText="我再看看"
    @confirm="querne_er"
  show-cancel-button
>
    <section class="pr">
        <img src="https://mall.cangniaowl.com/static/img/story/bg_jh_s.jpg" class="w100 cz bg_jh_s">
        <section class="sd_jhj_ert">
                <p class="cf cen fz17 pt10 b">
                    提 &nbsp;示
                </p>
            <p class="fz14 cf df_ertjh_der">
               每天您可从10句故事语录选中1个<br>
                并生成【我的故事】
            </p>
              <p class="cf cen fz14 pt10 b">
                    确认就是这张了?
                </p>
        </section>
    </section>
</van-dialog>
    
    
    
    
    
        <van-dialog
  v-model="show_sanmt "
                    
>
    <section class="pr">
        <img src="https://mall.cangniaowl.com/static/img/story/bg_jh_s.jpg" class="w100 cz bg_jh_s">
        <section class="sd_jhj_ert">
                <p class="cf cen fz17 pt10 b">
                       提 &nbsp;示
                </p>
            <p class="fz14 cf df_ertjh_der" v-html="bian_sd">   
            </p>
        </section>
    </section>
</van-dialog>
    
    
         <van-dialog
  v-model="show_simt"
            confirmButtonText="修改最近一张"
    cancelButtonText="放弃修改"
    @confirm="querne_san"
  show-cancel-button
>
    <section class="pr">
        <img src="https://mall.cangniaowl.com/static/img/story/bg_jh_s.jpg" class="w100 cz bg_jh_s">
        <section class="sd_jhj_ert">
                <p class="cf cen fz17 pt10 b">
                       提 &nbsp;示
                </p>
            <p class="fz14 cf df_ertjh_der" v-html="bian_sd">   
            </p>
        </section>
    </section>
</van-dialog>
    
    <section class="loado_derrt cen" v-if="is_ddfg">
        <img src="../assets/img/load_gif.gif" >
        <p class="cf fz12 mt2">生成中 请稍后</p>
    </section>
    
</div>
</template>
<script>
    //    
    import 'swiper/dist/css/swiper.css'
    import mf_bottom from "../components/mf_bottom"
    import chuliimg from "../components/chuliimg"
    import bjtp from "../components/bjtp"
    import mygs_pup from "../components/mygs_pup"
    import base from "../base.js"
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    var wx = require('weixin-js-sdk')
    export default {
        data() {
            return {
                is_ddfg:false,
                show_ert: false,
                show_rrt: true,
                show_sanmt: false,
                show_simt: false,
                bian_sd: "",
                sd_idx: 0,
                xiuyga_s: "", //修改的id
                w_idth: "",
                h_eight: "",
                sd_jhsd: "",
                sc_sdfg: false,
                shezhi_s: "255,255,255",
                moren_s: '',
                is_sc_s: false, //是否是修改
                is_clasdd: false,
                is_clasdd_b: true,
                is_jiaza: false,
                fx_img_e: "", //s生成的分享图片
                is_clo_s: false,
                img_dd: "", //上传的图片
                is_sdf: "",
                is_xc_d: false,
                swiperOption: {
                    autoHeight: true,
                    slidesPerView: 3, //'一页显示4个'
                    centeredSlides: true,
                    spaceBetween: 10, //间隔空隙
                    onSlideChangeEnd: (swiper) => {
                        console.log(swiper.activeIndex)
                    },
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    navigation: {
                        nextEl: '.dxswiper-button-prev',
                        prevEl: '.dxswiper-button-next'
                    },
                },
                shesd: [{
                    name: "默认色",
                    rgba: "255,255,255"
                }, {
                    name: "纯黑色",
                    rgba: "0,0,0"
                }, {
                    name: "茶白色",
                    rgba: "12,54,106"
                }, {
                    name: "栀子色",
                    rgba: "255,191,4"
                }, {
                    name: "栀子色",
                    rgba: "0,74,44"
                }, {
                    name: "栀子色",
                    rgba: "155,18,42"
                }, {
                    name: "栀子色",
                    rgba: "22,161,163"
                }, {
                    name: "栀子色",
                    rgba: "154,63,18"
                }],
                story_idx: "",
                shop_id:""
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            },
        },
        components: {
            swiper,
            swiperSlide,
            mf_bottom,
            chuliimg,
            bjtp,
            mygs_pup
        },
        methods: {
            bianhse_d(sd, idx) {
                this.sd_idx = idx
                this.shezhi_s = sd.rgba
                this.$refs.gaib_sr.gaibian()
            },
            onRead(file) {
                this.sc_sdfg = true
                this.is_xc_d = true
                this.img_dd = file.content
            },

            up_img_er() { //上传图片按钮触发
                let th = this
                wx.chooseImage({
                    count: 1,
                    success: function(res) {
                        var localIds = res.localIds;
                        wx.getLocalImgData({
                            localId: localIds[0], // 图片的localID
                            success: function(res) {
                                var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                                th.sc_sdfg = true
                                th.is_xc_d = true
                                th.img_dd = localData
                            }
                        });
                    }
                });
            },
            get_img(ing_url) {
                this.sc_sdfg = false
                this.moren_s = ing_url
                this.is_sc_s = true
            },
            getbase(img, call) {
                this.post("images/base64", {
                    img: img
                }, function(data) {
                    call(data.data.img_base64)
                })
            },
            scimg() {
                if (!this.is_xc_d) {
                    this.show_sanmt = true
                    this.bian_sd = '请从相册上传背景图'
                    return
                }
                this.show_ert = true
                return
            },
            querne_er() {
                this.is_ddfg = true
                this.$refs.gaib_sr.sd_ghgd()
            },
            querne_san() { //修改最近一张图片
                this.$refs.gaib_sr.sd_ghgd()
            },
            get_sds(data) {
//                111
                let create = {},
                    th = this
                create.user_image = this.moren_s
                create.story_id = this.story_id
                create.sys_image = data
                create.id = this.xiuyga_s 
                create.pikjh_d='aa'
                this.post("story/create", create, function(data) {
                    th.is_ddfg = false
                    th.show_simt = false
                    th.xiuyga_s = ""
                    if (data.return_code == "FAIL") {
                        if (data.err_code == "600023") {
                            th.show_simt = true
                            th.xiuyga_s = data.data.id
                        } else {
                            th.show_sanmt = true
                        }
                        th.bian_sd = data.return_msg
                        return
                    }

                    th.fx_img_e = data.data
                    th.is_clo_s = true
                })
            }
        },
        mounted() {
            this.w_idth = 660
            this.h_eight = 1116
            let th = this
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
                if (window.orientation === 90 || window.orientation === -90) {
                    th.show_sanmt = true
                    th.bian_sd = '为了更好的体验请将手机竖屏！'
                } else {
                    th.show_sanmt = false
                }
            }, false);

            this.xiuyga_s = this.$route.query.is_id
            this.post("story/index", {}, function(data) {
                th.story_idx = data.data
                th.story_id = th.story_idx[0].id
                th.shop_id=th.story_idx[0].shop_id
               
                th.fenxiang('上传你的照片，记录分享人生每一时刻精彩',window.location.href,'https://mall.cangniaowl.com/static_story/img/fenxiang.jpg','上传你的照片，记录分享人生每一时刻精彩' )
                
                th.getbase(th.story_idx[0].background_img, function(data) {
                    th.sd_jhsd = data

                })
            })
            th.moren_s = base.sd_dett


            this.$refs.mySwiper_e.swiper.on('touchStart', function() {
                th.is_clasdd = true
                th.is_clasdd_b = false
            })
            this.$refs.mySwiper_e.swiper.on('touchEnd', function() {
                th.is_clasdd_b = true
                th.is_clasdd = false
            })

            this.$refs.mySwiper_e.swiper.on('slideChangeTransitionStart', function() {
            
                th.story_id = th.story_idx[this.activeIndex].id
                th.getbase(th.story_idx[this.activeIndex].background_img, function(data) {
                    th.sd_jhsd = data
                })
            });

        },
    }

</script>
<style>
    .dsf_jh_cwer.act .w100.h100.swiper-slide.swiper-slide-active img {
        opacity: 0
    }

    .SDf_dfreyy .swiper-wrapper,
    .w100.h100.swiper-slide {
        height: 100% !important;
    }
.swiper-container.swiper-container-initialized.swiper-container-horizontal.swiper-container-autoheight.swiper-container-ios{
     height: 100% !important;
    }
    .dfs_jjh_dser {
        display: inline-block
    }

    .SDf_dfreyy .swiper-wrapper,
    .w100.h100.swiper-slide {
/*
        height: 350px !important;
        padding-top: 8px;
*/
    }

    .van-dialog__confirm,
    .van-dialog__confirm:active {
        color: #ce2d2b !important
    }

</style>
<style>
    .sd_jh_deert canvas {
        width: 100% !important;
        height: 100% !important;
    }

    .sd_jh_deert {
        opacity: 0
    }

    .sd_jh_deert.act {
        opacity: 1
    }

    button.van-button.van-button--default.van-button--large.van-dialog__confirm.van-hairline--left {
        color: #a61219
    }

    .swiper-container {
        overflow: inherit;
    }

    .swiper-pagination.swiper-pagination-bullets {
        position: absolute;
        width: 200px;
        left: 0px;
        right: 0;
        margin: auto;
        bottom: -28px;

    }

    .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet {
        background: #fff;
        opacity: 0.5;
        margin-left: 4px;
        margin-right: 4px;
    }

    .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet-active {
        opacity: 1
    }

    i.f_i.sd_kjhj_e.dxswiper-button-prev.swiper-button-disabled,
    i.f_i.sd_kjhj_e.ab.dxswiper-button-next.swiper-button-disabled {
        opacity: 0.4;
        animation-play-state: paused;
        -webkit-animation-play-state: paused;
        /* Safari 和 Chrome */
    }

</style>
<style scoped>
    .SDf_dfreyy {
        height: 100%;
    }

    .sd_ng_der {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: #272727;
        z-index: 1;
    }



    .sd_jh_deeret {
        width: 15rem;
        position: absolute;
        left: 0;
        right: 0px;
        margin: auto;
        top: 8px;

    }

    .sd_jh_deeret.ab {
        left: 5px;
        top: 10px;
        z-index: 10
    }

    .sd_jh_deeret.ac {

        background: rgba(0, 0, 0, 0.5);
        z-index: 1
    }



    .sd_jh_cdeert {
        height: 100%;
        width: 45rem;
        margin-left: -10.8rem;
        position: relative;
        z-index: 1000
    }

    .sf_jh_detx {
        height: 45px;
        background: #3B3B3B;
        position: relative;
        z-index: 100000
    }

    .sd_kj_deertt {
/*        overflow: auto;*/
        padding-bottom: 20px;
/*        white-space: nowrap;*/
        padding-top: 9px;

        width: 100%;
        display: block !important;

    }

    .sd_kj_deertt .bk_e {
        margin-left: 2px;

    }

    .sd_kjj_def {
        width: 30px;
        height: 23px;
        background: #D73941;

    }

    .sd_kjj_def_w {
        padding: 3px;

    }

    .sd_kjj_def_w.act {
        padding: 2px;
        border: 1px solid #fff;
    }

    .xiangoser {
        width: 18px;
        height: 18px;
        background-position: -15px -55px;

    }

    .xc_deert {
        position: absolute;
        bottom: 2px;
        right: -0px;
        transform: scale(0.75)
    }

    .sd_hgh_der {
        line-height: 1.4;
        background: #A61118;
        padding-left: 40px;
        padding-right: 40px;
        border: 1px solid #A61118
    }

    @media screen and (max-width:330px) {
        .sd_jh_cdeert {
            margin-left: -9.2rem;

        }
    }

    .sd_kj_dert {
        position: fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        margin: auto;
        width: 60px;
        height: 60px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        z-index: 1000;
        text-align: center;
        line-height: 60px;
    }

    .sd_bnblun_d,
    .sd_jh_deeret {
        height: 23.5rem;
    }

    .mask_eert {
        position: fixed;
        left: 0px;
        width: 100%;
        top: 0px;
        height: 100%;
        z-index: 1000;
        pointer-events: none;
    }

    .sdf_jh_dert {
        border: 1px solid #fff;
        display: inline-block;
        padding-left: 8px;
        padding-right: 6px;
        height: 32px;
        line-height: 28px;

    }

    .shengcwdgs {
        width: 203px;
        height: 46px;
        background-position: -15px -173px;
    }

    .sd_kjhj_e {
        width: 30px;
        height: 30px;
        background-position: -80px -430px;
        position: absolute;
        bottom: -70px;
        left: 14rem;
        margin: auto;
        z-index: 100;
        -webkit-animation: breath 3s infinite ease-in-out alternate;
        animation: breath 3s infinite ease-in-out alternate;
    }

    .sd_kjhj_e.ab {
        left: inherit;
        right: 13.5rem;
        background-position: -131px -430px;
    }

    .dibu_er {
        width: 160px;
    }

    .sd_jhj_ert {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }




    @-webkit-keyframes breath {
        0% {
            transform: scale(0.9)
        }
        70% {
            transform: scale(1)
        }
        to {
            transform: scale(0.9)
        }
    }


    @keyframes breath {
        0% {
            transform: scale(0.9)
        }
        70% {
            transform: scale(1)
        }
        to {
            transform: scale(0.9)
        }
    }


    @media screen and (min-height: 750px) {
        .w100.h100.swiper-slide.swiper-slide-prev {
            padding-right: 15px;
        }

        .sd_bnblun_d,
        .sd_jh_deeret {
            height: 29rem;
        }
        .sd_jh_deeret {
            width: 17rem;
        }
        .sd_jh_cdeert {
            width: 46.5rem;
        }
/*
        .sd_jh_cdeert img {
            height: 25rem;
            position: relative;
            top: 2rem;
        }
*/


    .sd_kjhj_e.ab {
        left: inherit;
        right: 15rem;
        background-position: -131px -430px;
    }
        .dsf_eertert{
           bottom: -27px;
        }    
        .sdf_deert{
            margin-top: 40px !important
        }
        
    }
    .bg_jh_s{
        height: 140px !important;
    }
    @media screen and (min-width: 400px) {}

</style>
