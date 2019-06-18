<template>
<div class="df_deeett" >
    <p class="sd_hg_bg"></p>
    <section class="pr w100 ov page"> 
         <img src="https://mall.cangniaowl.com/static/img/story/zp_top.jpg?v=1000" class="w100 cz">
        
        <section class="pr"> 
    <img src="https://mall.cangniaowl.com/static/img/story/yun_a.png" class="yun_asd_dse">
               <img src="https://mall.cangniaowl.com/static/img/story/yun_a.png" class="yun_asd_dse ab">
    <zp_sj class="zp_kj_der pr" ref="zp_kj_der" @zhuhg_sr="zhuhg_sr" @kaishi="kaishi"></zp_sj>
            
            <section class="pd ad_kjk_der">
        <section class="pr"> 
            <section class="sd_kjj_uuer cen">
                <p class="fz12">
        共获得 <span class="red fz14">{{$store.state.prizedrawInfo.total_times}}</span> 次抽奖机会
                    </p>
                <p class="fz12 mt5"> 
        <span class="fz12 red">已抽：{{$store.state.prizedrawInfo.useed_times}}</span>
                 <span class="fz12 red ml20 ">剩余：{{$store.state.prizedrawInfo.unuse_times}}</span>
                </p>
<!--
                <p class="mt20 sdf_jh_dert">
                    <i class="f_i ouh_douj_e" @click="kaishi"></i>
                </p>
-->
            </section>
            <img src="https://mall.cangniaowl.com/static/img/story/yuin_sd_ert.png" class="w100">
            
        </section>
                
        </section>
            
            
            
             <section class="pr ad_kjk_der ab pd">
            <img src="https://mall.cangniaowl.com/static/img/story/huodsm_ut.png" class="w100 cz">
                   
            <section class=" cz   sdf_kj_det">
    <section class="bgff pr df_jj_dedet">
            <img src="https://mall.cangniaowl.com/static/img/story/sdf_c.png" class="sd_jj_det ab">
        
                <section class="sdf_jj_drt">{{$store.state.cjsz}}</section>
        
         
        
    </section>
                
                
    </section>
       <img src="https://mall.cangniaowl.com/static/img/story/sdf_b.png" class="w100 cz sdf_jjh_de">
    </section>
            
            
            
            
                        
 <section class="pr ad_kjk_der ab pd">
            <img src="https://mall.cangniaowl.com/static/img/story/huodsm.png" class="w100 cz">
                   
            <section class=" cz   sdf_kj_det">
    <section class="bgff pr df_jj_dedet">
            <img src="https://mall.cangniaowl.com/static/img/story/sdf_c.png" class="sd_jj_det ab">
        
                <section class="sdf_jj_drt">{{$store.state.huodsm}}</section>
        
         
        
    </section>
                
                
    </section>
       <img src="https://mall.cangniaowl.com/static/img/story/sdf_b.png" class="w100 cz sdf_jjh_de">
    </section>
            

            
            
            
            
            <section class="pr ad_kjk_der ab pd">
            <img src="https://mall.cangniaowl.com/static/img/story/sdf_a.png" class="w100 cz">
                
              
                <section class=" cz pr10 pm10">
    <section class="bgff pr">
            <img src="https://mall.cangniaowl.com/static/img/story/sdf_c.png" class="sd_jj_det">
        
        
          <p class="cen pt20 pm20" v-if="$store.state.prizedrawInfo.prize_list.length<=0">
    <img src="https://mall.cangniaowl.com/static/img/story/weikong.png" class="weikong">
        </p>
        
        <section v-else>
        <section class="gi_rowx" v-for="sd in $store.state.prizedrawInfo.prize_list" @click="tiaozi(sd)">
            <img src="https://mall.cangniaowl.com/static/img/story/jiangxiang.png?v=4" class="w100">
            <section class="sd_ertjjh_d">
                <section class="sd_jh_drtx fl" >
                    <img :src="sd.jpimg" class="cz">
                </section>
                <section class="ov  pt5 pm5 pl10 ">
                    
                    <section class="sd_jh_drfv pl10  fz15">
                        <span>{{sd.prize_name}}</span> <br>
                        <span class="z9 fz12">{{sd.jpgl_text}}</span>
                    </section>
    
                </section>
      
                <span v-if="sd.jpgl_type != 3">
                   <span  class="sd_kj_Deert" v-if="sd.status!=4">立即领取</span> 
                      <span  class="sd_kj_Deert ab" v-else>已领取</span> 
                   
                </span>
                <span v-else>
                
                    
                      <span  class="sd_kj_Deert "  v-if="!sd.mobiphone">
                    申请领奖
                </span>
                    
                    
                        <span v-else>
                        <span class="sd_kj_Deert ab" v-if="sd.status==1">
                    奖品已发放
                </span>
                        <span class="sd_kj_Deert ab" v-else>
                    已提交申请
                </span>
                    </span>
                    
                    
                    </span>
                    
                
                <p class="qc"></p>
            </section>
        </section>
        </section>
        </section>
        </section>
                
                <img src="https://mall.cangniaowl.com/static/img/story/sdf_b.png" class="w100 cz sdf_jjh_de abm" :class="$store.state.prizedrawInfo.prize_list.length<=0?'act':''">
                
    </section>

            
            
            
    </section>
                            
        
        
    </section> 
   
    <mf_bottom idx="0"></mf_bottom>
    
    
    
    
<!--
        <van-dialog
  v-model="show_eeer"
  show-cancel-button
  class="sd_jh_deet"
  :beforeClose="beforeClose"
>
 
      <van-cell-group>
          <van-field
              v-model="url_kh_dr.consignee"
              clearable
              label="联系人："
              placeholder="请输入联系人"
          />
      <van-field
              v-model="url_kh_dr.mobile_phone"
              clearable
              label="电话号码："
              placeholder="请输入电话号码"
              type="tel"
          /> 
              </van-cell-group>
</van-dialog>
-->
    
    
        <section class="sd_kjddf" v-if="is_zj_s">
                <section class="pt20">
               <section class="pr">
                     <img src="https://mall.cangniaowl.com/static_story/img/zhongjiang.png" class="w100">
                    <section class="sd_jhj_pup pr">
                        <p class="fz24 b cen dian sd_jj_eert">{{jxmc_sd}}</p>
                        
                        <section class="sd_jkjh_dert">
                                <p class="mt20"> 
                                    <input type="text" placeholder="请输入联系人："  v-model="url_kh_dr.consignee">
                                </p>
                             <p class="mt10"> 
                                   <input placeholder="电话号码："   v-model="url_kh_dr.mobile_phone">
                                </p>
                            
                            <section class="sd_jhj_der" @click="beforeClose">
                            <span>我知道了</span>
                            </section>
                        </section>
                        <p class="cen sdf_drexerrt">
                            <i class="f_i close_dr" @click="is_zj_s=false"></i>
                        </p>
                    </section>
                   
                </section>
            </section>
    
    </section>
<!--    -->
            <section class="sd_kjddf"  v-if="is_ssffg">
                <section class="pt20">
               <section class="pr">
                     <img src="https://mall.cangniaowl.com/static_story/img/zhongjiang_san.png" class="w100">
                    <section class="sd_jhj_pup pr ab">
                      <p class="fz24 b cen dian sd_jj_eert">{{jxmc_sd}}</p>
                        <p class="cen mt10">
                    <img :src="fengmian" class="dajia_dert">
                    </p>
                           <section class="sd_jhj_der ab"  @click="tiaozi(sd_ert,1)">
                            <span>查看礼包</span>
                            </section>
                        
                        
                        
    </section>
                   
                 <p class="cen sdf_drexerrt ab">
                            <i class="f_i close_dr" @click="is_ssffg=false"></i>
                        </p>       
    </section>
    </section>
    </section>
    
    
    
    
    
               <section class="sd_kjddf" v-if="is_ssffg_c">
                <section class="pt20">
               <section class="pr">
                     <img src="https://mall.cangniaowl.com/static_story/img/zhongjiang_er.png" class="w100">
                    <section class="sd_jhj_pup pr ">
                      <p class="fz24 b cen dian sd_jj_eert mt50">{{jxmc_sd}}</p>

                           <section class="sd_jhj_der ab"  @click="is_ssffg_c=false">
                            <span>知道了</span>
                            </section>
                        
                        
                        
    </section>
                   
                 <p class="cen sdf_drexerrt ab">
                            <i class="f_i close_dr" @click="is_ssffg_c=false"></i>
                        </p>       
    </section>
    </section>
    </section>
    
    
    
    
        <p class="mt60 cen pr dsfs_dert ab" v-if="$store.state.shopinfo.shop_id==230">
        <img src="https://mall.cangniaowl.com/static_story/img/anluo.png" class="dfs_d_eert">
    </p>
          <p class="mt60 cen pr dsfs_dert ab" v-if="$store.state.shopinfo.shop_id==229">
        <img src="https://mall.cangniaowl.com/static_story/img/weixingting.png" class="dfs_d_eert">
    </p>
    
    
    
     <p class="cen pr mt10">
        <img src="https://mall.cangniaowl.com/static_story/img/cn_dibu.png" class="cn_dibu">
    </p>
</div>
</template>
<script>
    import {
        Notify
    } from 'vant';
    import zp_sj from "../components/zp_sj"
    import mf_bottom from "../components/mf_bottom"
    export default {
        data() {
            return {
                is_zj_s: false,
                is_ssffg: false,
                is_ssffg_c: "",
                jxmc_sd: "",
                fengmian: "",
                sd_ert: "",
                story_prize: "",
                show_eeer: false,
                url_kh_dr: {
                    consignee: "",
                    mobile_phone: ""
                },
                tijiao_sD: ""
            }
        },
        components: {
            zp_sj,
            mf_bottom
        },
        methods: {
            zhuhg_sr(data) {
                setTimeout(a => {
                    this.jxmc_sd = data.prize
                    if (data.jpgl_type == 1) {
                        this.fengmian = data.jpimg
                        this.sd_ert = data
                    }

                    if (data.jpgl_type == 3) {
                        if (!data.mobiphone) {
                            this.is_zj_s = true
                            this.tijiao_sD = data.id
                        }
                    } else if (data.jpgl_type == 1) {
                        this.is_ssffg = true
                    } else if (data.jpgl_type == 2) {
                        this.is_ssffg_c = true
                    }


                }, 9000);

                //                Notify('恭喜你获得' + data.prize)

            },
            beforeClose(action, done) {
                if (!this.url_kh_dr.consignee) {
                    Notify('请输入联系人');
                    return
                }
                if (!this.url_kh_dr.mobile_phone) {
                    Notify('请输入电话号码');
                    return
                }
                if (!this.yanza.phone(this.url_kh_dr.mobile_phone)) {
                    Notify('电话号码格式错误');
                    return
                }
                this.tijiao_yz()



            },
            kaishi() {
                this.$refs.zp_kj_der.hg_sdf()
            },
            tijiao_yz() {
                let addprizeinfo = {},
                    th = this
                addprizeinfo.story_prize_log_id = this.tijiao_sD
                addprizeinfo.name = this.url_kh_dr.consignee
                addprizeinfo.mobiphone = this.url_kh_dr.mobile_phone
                this.post("story/addprizeinfo", addprizeinfo, function(data) {
                    th.is_zj_s = false
                    Notify({
                        message: '提交成功',
                        duration: 1000,
                        background: '#1989fa'
                    });
                })
            },
            tiaozi(sd, ty) {

                if (sd.status == 4) {
                    return
                }
                if (sd.jpgl_type == 1) {
                    var sd_dffge = ""
                    if (ty == 1) {
                        sd_dffge = sd.story_prize_log_id
                    } else {
                        sd_dffge = sd.id
                    }

                    window.location.href = `https://api.cangniaowl.com/shop/${sd.shop_id}.html#/commodity_details?goods_id=${sd.jpgl_text}&cj_m=1&story_goods=` + sd_dffge
                }
                if (sd.jpgl_type == 2) {
                    window.location.href = "https://api.cangniaowl.com/shop/" + sd.shop_id + ".html?router=yhq#/yhq"
                }


                if (sd.jpgl_type == 3) { //其他
                    if (!sd.mobiphone) {
                        this.tijiao_sD = sd.id
                        this.is_zj_s = true
                    } else {

                    }
                }

            }
        },
        mounted() {

            this.fenxiang('上传你的照片，记录分享人生每一时刻精彩', window.location.href, 'https://mall.cangniaowl.com/static_story/img/fenxiang.jpg', '上传你的照片，记录分享人生每一时刻精彩')
        },
    }

</script>
<style>
    @media screen and (max-width:330px) {

        .sdf_jh_dert {
            transform: scale(0.8);
            margin-top: 10px !important;
        }
    }

    @media screen and (min-width:400px) {

        .sdf_jh_dert {
            margin-top: 15px!important
        }
    }

</style>
<style scoped>
    .df_deeett {}

    .sd_kjddf {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000
    }


    .sd_hg_bg {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background: #E71C1B
    }

    .zp_kj_der {
        margin-top: -50px;
        position: relative;
        z-index: 100
    }

    .yun_asd_dse {
        width: 35%;
        position: absolute;
        left: -12%;
        top: 35px;
        z-index: 1000
    }

    .yun_asd_dse.ab {
        left: inherit;
        right: -12%;

    }

    .ad_kjk_der {
        padding-left: 15px;
        position: relative;
        /*        top: -40px;*/
        margin-top: -45px;
    }

    .ad_kjk_der.ab {
        margin-top: 5px;
    }

    .sd_kjj_uuer {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 100;
        padding-top: 85px;
    }

    .red {
        color: #a61219 !important
    }

    .sd_jj_det {
        position: absolute;
        height: 100%;
        width: 10px;
        right: -10px;
        top: 0px;
    }

    .sd_jj_det.ab {
        width: 11px;
        right: -11px;
    }

    .sdf_kj_det {
        padding-right: 10px;
    }

    .sdf_jjh_de {
        margin-top: -11px;

    }

    .sdf_jjh_de.act {
        margin-top: -30px!important;

    }

    .sdf_jjh_de.abm {
        margin-top: 9px;
    }

    .gi_rowx {
        width: 101.5%;
        position: relative;
        margin-bottom: -20px
    }

    .sd_ertjjh_d {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        padding-left: 18px;
        padding-top: 18px;
    }

    .sd_jh_drtx {
        width: 52px;
        height: 40px;
        text-align: center;
        line-height: 60px;
    }

    .sd_jh_drtx img {
        max-height: 100%;
        max-width: 100%;
    }

    .sd_jh_drfv {
        border-left: 1px solid #DCDCDC;
        height: 50px;
        line-height: 1.5;
        padding-top: 5px;
    }

    .df_jj_dedet {
        color: #a61219;
        font-size: 12px;
        line-height: 1.6
    }

    .sdf_jj_drt {
        padding: 10px;
        white-space: pre-wrap
    }

    .ouh_douj_e {
        width: 165px;
        height: 62px;
        background-position: -22px -254px;
        position: relative;
    }

    .ouh_douj_e:active {
        background-position: -22px -333px;
        top: 3px;
    }

    .weikong {
        width: 150px;
    }

    .sd_kj_Deert {
        position: absolute;
        right: 7%;
        top: 35%;
        background: #A61219;
        color: #fff;
        font-size: 12px;
        border-radius: 20px;
        padding: 5px 8px;
    }

    .sd_kj_Deert.ab {
        background: #999
    }

    i.f_i.ouh_douj_e {
        transform: scale(0.85);
        position: relative;
        top: -8px
    }

    .sd_jhj_pup {
        position: absolute;
        left: 5px;
        top: 47%;
        right: 0px;
        width: 72%;
        margin-left: 10px;
        height: 10rem;
        margin: auto;
    }

    .sd_jhj_pup.ab {
        height: 7rem;
        top: 49%;
    }

    .sd_jj_eert {
        color: #ffd694
    }

    .sd_jkjh_dert input,
    .sd_jkjh_dert textarea {
        width: 100%;
        height: 38px;
        text-indent: 10px;
        border: 1px solid #ffd694;
        border-radius: 4px;
        font-size: 15px;
    }

    .sd_jkjh_dert textarea {
        padding-top: 5px;
        height: auto;
    }

    .sd_jhj_der {
        height: 45px;
        margin-top: 65px;
    }

    .sd_jhj_der span {
        display: none
    }

    .sd_jhj_der.ab {
        position: relative;
        top: -6px;
    }

    .close_dr {
        width: 35px;
        height: 36px;
        background-position: -15px -424px;
    }

    .sdf_drexerrt {
        position: absolute;
        left: 0px;
        width: 100%;
        bottom: -140px;
    }

    .sdf_drexerrt.ab {
        bottom: -60px;
    }

    .dajia_dert {
        width: 75px;
        height: 75px;
    }

    @media screen and (max-width:330px) {

        .sd_jj_det {
            right: -11px;
        }
        .sdf_jjh_de {
            margin-top: -7px;
        }
    }

    @media screen and (min-width:400px) {
        .sd_kjj_uuer {
            padding-top: 90px;
        }
        .sdf_jjh_de {
            margin-top: -10px;
        }
        .ad_kjk_der {
            margin-top: -44px;
        }
        .sdf_jjh_de {
            margin-top: -15px;

        }
        .sdf_jjh_de.abm {
            margin-top: 5px;
        }
        i.f_i.ouh_douj_e {
            transform: scale(1);
            top: 0px;
        }

    }

</style>
