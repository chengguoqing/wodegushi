<template>
<div class="dfd_dsdf" :class="finished?'act':''">
    <p class="sd_jh_der"></p>
    <section class="pr pd pt10 sdf_jh_dert">
        
        <van-list
  v-model="loading"
  :finished="finished"
  finished-text=""
  @load="onLoad"
>
            
            
        <van-row gutter="10">
            <van-col span="8" v-for="sd in storylist">
                <img :src="sd.img_url" class="w100" @click="sd_SDfdf(sd)">
                <p v-html="time_c(sd.add_time)" class="cf fz14 pm10 pt5">
              
                </p>
            </van-col>
        </van-row>
            
    </van-list>

    <p class="mt60 cen dsfs_dert" v-if="$store.state.shopinfo.shop_id==230">
        <img src="https://mall.cangniaowl.com/static_story/img/anluo.png" class="dfs_d_eert">
    </p>
          <p class="mt60 cen dsfs_dert" v-if="$store.state.shopinfo.shop_id==229">
        <img src="https://mall.cangniaowl.com/static_story/img/weixingting.png" class="dfs_d_eert">
    </p>
        
        
    </section>

    
        <p class="cen pr mt10">
        <img src="https://mall.cangniaowl.com/static_story/img/cn_dibu.png" class="cn_dibu">
    </p>
        <mygs_pup :fx_img_e="fx_img_e" v-if="is_clo_s" @close_sd="close_sd"></mygs_pup>
     <mf_bottom idx="2"></mf_bottom>
    
    
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
    
    
   
</div>
</template>
<script>
    import mf_bottom from "../components/mf_bottom"
    import mygs_pup from "../components/mygs_pup"
    export default {
        data() {
            return {
                show_sanmt: false,
                storylist: [],
                is_clo_s: false,
                fx_img_e: "",
                loading: false,
                finished: false,
                current_page: 1,
                bian_sd: "",
                shop_id:""
            }
        },
        components: {
            mf_bottom,
            mygs_pup
        },
        methods: {
            close_sd(dtaa) {
                this.is_clo_s = false
//                this.show_sanmt = true
                this.bian_sd = dtaa
            },
            onLoad() {
                this.get_sdf()
            },
            sd_SDfdf(sd) {
                this.is_clo_s = true
                this.fx_img_e = sd
            },
            async get_sdf() {
                var data = await this.post_d('story/storylist', {
                    current_page: this.current_page,
                    per_page: 9
                })
                data.data.data.map(a => {
                    this.storylist.push(a)
                })
                if (data.data.last_page <= this.current_page++) {
                    this.loading = true
                    this.finished = true
                } else {
                    this.loading = false
                }
            }
        },
        mounted() {
            let th=this
            this.post("home/shopinfo",{},function(data){
                th.shop_id=data.data.shop_id
            })
        },
    }

</script>

<style>
    /*
    .dsf_jh_cwer .w100.h100.swiper-slide.swiper-slide-active img {
        opacity: 0
    }

    .SDf_dfreyy .swiper-wrapper,
    .w100.h100.swiper-slide {
        height: 100% !important;
    }

    .dfs_jjh_dser {
        display: inline-block
    }
*/

</style>
<style>
    .sd_jh_deert canvas {
        width: 100% !important;
        height: 100% !important;
    }

    button.van-button.van-button--default.van-button--large.van-dialog__confirm.van-hairline--left {
        color: #a61219
    }

    .dfd_dsdf.act .van-list__loading {
        display: none
    }

</style>


<style scoped>
    .sd_jh_der {
        background: #272727;
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 1
    }

    .sdf_jh_dert {
        min-height: 75vh;
    }

    .sd_jhj_ert {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }

    .sd_df_derr {
        width: 85px;
        height: 85px;
    }

    .sd_kjrtrt_de {
        height: 100px;
        padding-top: 20px;
        text-align: center;
    }

    .Sdf_Dertt {
        background: #CE2F2D;
        border: 1px solid #CE2F2D;
        color: #fff;
        border-radius: 40px;
        height: 32px;
        line-height: 32px;
        width: 102px;
        margin-top: 15px;
    }

</style>
