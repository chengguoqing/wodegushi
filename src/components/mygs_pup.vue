<!--我的故事弹出层-->
<template>
<div class="sd_kjj_deer">
    
    <section class="sd_jh_derc cen">
           <img :src="fx_img_e.img_url" class="imgh_sd_d">
        <p class="mt10 pd">
            <van-button type="danger" class="fa_dere w100" @click="fagzh">从公众号推送给我</van-button>
        </p>
        <p class="mt5 fz12 cf">
    长按图片保存或发送给朋友
    </p>
        
         <p class="mt10 pd" v-if="fx_img_e.id&&fx_img_e.is_today==1">
           
            <van-button type="danger" class="fa_dere ab w100" @click="tiaozsd"> 更改该故事</van-button>
        </p>
        <p class="mt15">
            <i class="f_i close_icon_e" @click="$emit('close_sd')"></i>
        </p>
    </section>
    
    
    <section class="sd_kj_dert" v-if="is_jiaza">
        <van-loading color="white" class="cz dfs_jjh_dser"/>
    </section>
    
    
    
           <van-dialog
  v-model="show_simt"
                       :show-confirm-button="false"
>
    <section class="pr">
        <img src="https://mall.cangniaowl.com/static/img/story/bg_jh_s.jpg" class="w100 cz bg_jh_s">
        <section class="sd_jhj_ert">
                <p class="cf cen fz17 pt10 b">
                       关注公众号
                </p>
            <p class="fz14 cf df_ertjh_der" v-html="bian_sd">   
            </p>
            
           <section class="cen">
                <img class="sd_df_derr" :src="wei_qr_code2">
              
    </section>
        </section>
    </section>
               
               <section class="sd_kjrtrt_de">
                    <p class="z9 fz12">长按识别二维码</p>   
                <van-button type="default" class="Sdf_Dertt" @click="show_simt=flase">关闭</van-button>
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
            <p class="fz14 cf df_ertjh_der" v-html="bian_sd_er">   
            </p>
        </section>
    </section>
</van-dialog>
    
    
</div>
</template>
<script>
    export default {
        props: {
            fx_img_e: "",
            is_id: ""
        },
        data() {
            return {
                is_jiaza: false,
                show_simt: false,
                bian_sd: "",
                show_sanmt: false,
                bian_sd_er: "",
                wei_qr_code2: ""
            }
        },
        components: {

        },
        methods: {
            async fagzh() {
                this.is_jiaza = true

                var sd_dd = await this.post_d('story/sendimgtowx', {
                    image: this.fx_img_e.img_url
                })
                this.is_jiaza = false
                if (sd_dd.err_code == "600022") {
                    this.show_simt = true
                    this.bian_sd = sd_dd.return_msg
                    this.wei_qr_code2 = sd_dd.data.wei_qr_code2
                    return
                }
                this.$emit('close_sd','发送成功')
            },
            tiaozsd() {
                this.hf('?is_id=' + this.fx_img_e.id)
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_kjj_deer {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 10000
    }

    .sd_jh_derc {
        width: 14rem;
        margin: auto;
        padding-top: 20px;
    }

    .imgh_sd_d {
        width: 100%;
        height: 26rem;
    }

    .fa_dere {
        background: #A61118 !important;
        border: 1px solid #A61118;
        height: 38px !important;
        line-height: 38px;
    }

    .fa_dere.ab {
        background: #fff !important;
        color: #333!important;
        border: 1px solid #fff
    }

    .close_icon_e {
        width: 25px;
        height: 25px;
        background-position: -224px -48px;
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

    .bg_jh_s {
        height: 140px !important;
    }

    @media screen and (min-width: 375px) {
        .sd_jh_derc {
            width: 13rem;
        }
        .imgh_sd_d {
            height: 23rem;
        }
    }

    @media screen and (min-height: 750px) {
        .sd_jh_derc {
            width: 15.5rem;
        }
        .imgh_sd_d {
            height: 28rem;
        }
    }

    @media screen and (min-width: 400px) {
        .sd_jh_derc {
            width: 14.5rem;
        }
        .imgh_sd_d {
            height: 27rem;
        }
    }

</style>
