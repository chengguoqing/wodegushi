<!--转盘手机端-->
<template>
<div >

        
                 <section class="zhuan_swer pr" >
                     
                      <section class="sd_jh_dexr"  >
                                            <img src="https://mall.cangniaowl.com/static/img/story/turnplat_pointer.png?v=6666" @click="$emit('kaishi')">  
                                        </section>
<!--                               gd_er     -->
<!--                     11111-->
                     <section class="sd_jh_deerxer   " :class="[kaishi,is_wza_s]">
                    
                                <img src="https://mall.cangniaowl.com/static_story/img/turnplate_box.3cb262a.png" class="turnplate_box ">
                                
                     
                                <section class="sd_kong_dr pr ">
                                       
<!--                                    奖项-->
                                    <section class="jiang_dderr">
                                    
                                    <section class="sd_jh_derd dian " v-for="sd in $store.state.is_dsr" :class="$store.state.is_dsr_lenth">
                                            <p class="sd_jh_dexc">{{sd.title}}</p>
                                          <img :src="sd.jpimg" class="turnplat_git">
                                    </section>
                                       
                                      <section class="sd_jh_derd dian " :class="$store.state.is_dsr_lenth"  v-if="$store.state.is_dsr.length==2">
                                            <p class="sd_jh_dexc">谢谢参与</p>
                                          <img src="http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_winout.png" class="turnplat_git">
                                    </section>
                                                     <section class="sd_jh_derd dian " :class="$store.state.is_dsr_lenth"  v-if="$store.state.is_dsr.length==2">
                                            <p class="sd_jh_dexc">谢谢参与</p>
                                          <img src="http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_winout.png" class="turnplat_git">
                                    </section>
                                        
                                        
                                        
                                            
                                    <section class="sd_jh_derd dian " :class="$store.state.is_dsr_lenth"  v-if="$store.state.is_dsr.length==3">
                                            <p class="sd_jh_dexc">谢谢参与</p>
                                          <img src="http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_winout.png" class="turnplat_git">
                                    </section>
                                        
                                    <section class="sd_jh_derd dian " :class="$store.state.is_dsr_lenth"  v-if="$store.state.is_dsr.length==5">
                                            <p class="sd_jh_dexc">谢谢参与</p>
                                          <img src="http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_winout.png" class="turnplat_git">
                                    </section>
                                        
                                              <section class="sd_jh_derd dian " :class="$store.state.is_dsr_lenth"  v-if="$store.state.is_dsr.length==7">
                                            <p class="sd_jh_dexc">谢谢参与</p>
                                          <img src="http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_winout.png" class="turnplat_git">
                                    </section>
                                            
                                    
                                       
                                    </section>
                                    
                                    
<!--                                    分割线-->
                                    <section class="feng_deexc">
                                        <p class="sd_jh_sddf" v-for="sd in $store.state.is_dsr" :class="$store.state.is_dsr_lenth"></p>
                                           <p class="sd_jh_sddf"  :class="$store.state.is_dsr_lenth" v-if="$store.state.is_dsr.length==2"></p>
                                           <p class="sd_jh_sddf"  :class="$store.state.is_dsr_lenth" v-if="$store.state.is_dsr.length==2"></p>
                                        
                                           <p class="sd_jh_sddf"  :class="$store.state.is_dsr_lenth" v-if="$store.state.is_dsr.length==3"></p>
                                           <p class="sd_jh_sddf"  :class="$store.state.is_dsr_lenth" v-if="$store.state.is_dsr.length==5"></p>
                                         <p class="sd_jh_sddf"  :class="$store.state.is_dsr_lenth" v-if="$store.state.is_dsr.length==7"></p>
                                </section>
                                     
                                    
                                </section>
    </section>
                             
                            </section>
                            
        
    

</div>
</template>
<script>
    import {
        Dialog
    } from 'vant';
    export default {
        data() {
            return {
                bjzz: "http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_pointer.png?v=5555",
                kaishi: "",
                is_sdf: 0, //0-4个 1-6个 2-8个 
                is_szh_s: true,
                is_wza_s: false
            }
        },
        components: {

        },
        methods: {
            hg_sdf() {
                let th = this
                if (this.is_szh_s) {
                    this.is_szh_s = false

                    //                    if (th.$store.state.prizedrawInfo.unuse_times <= 0) {
                    //                        this.is_szh_s = true
                    //                        Dialog.alert({
                    //                            message: "很抱歉，您的抽奖次数已用完！"
                    //                        })
                    //                        return
                    //                    }
                    th.kaishi = ""
                    //                    this.kaishi = "act"
                    //                    setTimeout(function() {
                    th.post("story/prizedraw", {}, function(data) {
                        if (data.err_code == "600022") {
                            Dialog.alert({
                                message: data.return_msg
                            })
                            th.is_szh_s = true
                            return
                        }
                        let prdr_aw = data.data,
                            as_sdf = []
                        if (th.is_sdf == 0) { //4个
                            as_sdf = ["aa", 'ab', 'ad', 'ac']
                        }
                        if (th.is_sdf == 1) { // 6个
                            as_sdf = ["ba", 'bb', 'bc', 'bd', 'be', 'bf']
                        }
                        if (th.is_sdf == 2) { // 8个
                            as_sdf = ["ca", 'cb', 'cc', 'cd', 'ce', 'cf', 'ch', 'cg']
                        }
                        th.is_szh_s = true
                        th.$store.state.is_dsr.map((a, idx) => {
                            if (a.title == prdr_aw.prize && a.jpimg == prdr_aw.jpimg) {
                                th.kaishi = as_sdf[idx]
                                th.is_wza_s = "plm"
                                console.log(prdr_aw);
                            }
                        })
                        th.$emit('zhuhg_sr', data.data)
                        th.info_sd()
                    })


                    //                    }, 4000);
                }
            },
            info_sd() {
                var th = this
                this.post("story/prizedrawInfo", {}, function(data) {
                    var sd_sdf = data.data.story_prize,
                        sd_ddrfg = sd_sdf.editableTabs.length
                    th.$store.state.is_dsr = sd_sdf.editableTabs
                    th.$store.state.huodsm = sd_sdf.cjsm;
                    th.$store.state.cjsz = sd_sdf.cjsz
                    th.$store.state.prizedrawInfo = data.data
                    if (sd_ddrfg == 7) {
                        th.$store.state.is_dsr_lenth = 'acb'
                        th.is_sdf = 2
                    } else if (sd_ddrfg == 8) {
                        th.is_sdf = 2
                        th.$store.state.is_dsr_lenth = 'acd'
                    } else if (sd_ddrfg > 4) {
                        th.is_sdf = 1
                        th.$store.state.is_dsr_lenth = 'act'
                    } else if (sd_ddrfg < 5) {
                        th.is_sdf = 0
                        th.$store.state.is_dsr_lenth = ''
                    }
                })
            }
        },
        mounted() {
            this.info_sd()


        },
    }

</script>
<style lang="scss" scoped>
    .gd_er {
        transition: all linear 3s;
    }


    .sd_kj_deeret {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        padding: 20px;
        background: #fff;
    }

    .sd_jh_ddrx {
        width: 330px;
        margin: auto;
        margin-top: 20px;
        border-radius: 10px;
        overflow: hidden;
        height: 549px;
        .sd_jkjh_der {
            line-height: 35px;
            background: #F5F5F5;
        }
        .sd_jkjh_der.act {
            color: #4386f4;
            background: #fff;
        }
        .sdf_jh_der {
            line-height: 1.5;
            .cfg-my-prize {
                background-color: #f5f5f5;
                padding: 5px;
                border-radius: 6px;
                position: relative;
                .d_jh_detx {
                    position: absolute;
                    right: 10px;
                    top: 20px;
                    font-size: 18px;
                }
            }
        }
        .turnplat_git_der {
            width: 200px;
            height: 200px;
        }

        .sd_jh_derx {
            background: #FF758F;
            border: 1px solid #FF758F;
            width: 100%;
            display: block;
            margin-left: 0 !important
        }
    }


    .feng_deexc {
        .sd_jh_sddf:nth-child(1) {
            left: 0px;
            right: 0px;
            top: 0px;
            margin: auto;
        }

        .sd_jh_sddf:nth-child(2),
        .sd_jh_sddf:nth-child(4) {
            transform: rotate(90deg)
        }

        .sd_jh_sddf:nth-child(2) {
            top: 0px;
            bottom: 0px;
            right: 67px;
            margin: auto;
        }

        .sd_jh_sddf:nth-child(3) {
            bottom: 0px;
            left: 0px;
            right: 0px;
            margin: auto;
        }

        .sd_jh_sddf:nth-child(4) {
            top: 0px;
            bottom: 0px;
            left: 67px;
            margin: auto;
        }



        .sd_jh_sddf.act:nth-child(2) {
            transform: rotate(60deg);
            bottom: inherit;
            right: 80px;
            top: 30px;
        }

        .sd_jh_sddf.act:nth-child(3) {
            transform: rotate(120deg);
            bottom: 40px;
            left: 120px;
            right: 0px;
        }
        .sd_jh_sddf.act:nth-child(4) {
            transform: rotate(180deg);
            top: inherit;
            bottom: 0px;
            left: 140px;
        }

        .sd_jh_sddf.act:nth-child(5) {
            transform: rotate(240deg);
            top: inherit;
            bottom: 40px;
            left: 70px;
        }
        .sd_jh_sddf.act:nth-child(6) {
            transform: rotate(300deg);
            top: 30px;

            left: 80px;
        }


        .sd_jh_sddf.acb:nth-child(2),
        .sd_jh_sddf.acd:nth-child(2) {
            transform: rotate(45deg);
            bottom: inherit;
            right: 85px;
            top: 20px;
        }
        .sd_jh_sddf.acb:nth-child(3),
        .sd_jh_sddf.acd:nth-child(3) {
            transform: rotate(90deg);
            top: 0px;
            bottom: 0px;
            right: 67px;
            left: inherit;
            margin: auto;
        }

        .sd_jh_sddf.acb:nth-child(4),
        .sd_jh_sddf.acd:nth-child(4) {
            transform: rotate(135deg);
            top: inherit;
            bottom: 20px;
            left: inherit;
            right: 85px;
        }
        .sd_jh_sddf.acb:nth-child(5),
        .sd_jh_sddf.acd:nth-child(5) {
            transform: rotate(180deg);
            top: inherit;
            bottom: 0px;
            left: 140px;
            right: inherit;
        }

        .sd_jh_sddf.acb:nth-child(6),
        .sd_jh_sddf.acd:nth-child(6) {
            transform: rotate(225deg);
            top: inherit;
            bottom: 20px;

            left: 85px;
        }
        .sd_jh_sddf.acb:nth-child(7),
        .sd_jh_sddf.acd:nth-child(7) {
            transform: rotate(270deg);
            top: 0px;
            bottom: 0px;
            right: inherit;
            left: 67px;
            margin: auto;
        }

        .sd_jh_sddf.acb:nth-child(8),
        .sd_jh_sddf.acd:nth-child(8) {
            transform: rotate(315deg);
            bottom: inherit;
            right: inherit;
            left: 85px;
            top: 20px;
            margin: auto
        }
    }

    .jiang_dderr {
        .sd_jh_derd {
            width: 60px;
            text-align: center;
            position: absolute;
        }

        .sd_jh_derd:nth-child(2) {
            right: 30px;
            top: 35px;
            transform: rotate(49deg)
        }

        .sd_jh_derd:nth-child(4) {
            right: 30px;
            bottom: 30px;
            transform: rotate(129deg)
        }

        .sd_jh_derd:nth-child(3) {
            left: 30px;
            bottom: 30px;
            transform: rotate(-133deg)
        }

        .sd_jh_derd:nth-child(1) {
            left: 33px;
            top: 27px;
            transform: rotate(-45deg)
        }



        .sd_jh_derd.act:nth-child(2) {
            left: inherit;
            bottom: inherit;
            right: 55px;
            top: 10px;
            transform: rotate(45deg)
        }


        .sd_jh_derd.act:nth-child(3) {
            left: inherit;
            top: inherit;
            right: 10px;
            bottom: 106px;
            transform: rotate(90deg);

        }



        .sd_jh_derd.act:nth-child(6) {
            left: inherit !important;
            top: inherit !important;
            right: 56px;

            bottom: 14px;
            transform: rotate(145deg) !important;
        }

        .sd_jh_derd.act:nth-child(4) {
            left: 52px;
            top: inherit;
            bottom: 10px;

            transform: rotate(-144deg)
        }

        .sd_jh_derd.act:nth-child(5) {
            left: 10px;
            top: 95px;
            transform: rotate(-90deg);
        }


        .sd_jh_derd.act:nth-child(1) {
            left: 55px;

            top: 15px;
            transform: rotate(-45deg)
        }





        .sd_jh_derd.acb:nth-child(2),
        .sd_jh_derd.acd:nth-child(2) {
            left: inherit;
            bottom: inherit;
            right: 60px;
            top: 5px;
            transform: rotate(30deg)
        }

        .sd_jh_derd.acb:nth-child(3),
        .sd_jh_derd.acd:nth-child(3) {
            left: inherit;
            bottom: inherit;
            right: 10px;
            top: 60px;
            transform: rotate(65deg)
        }

        .sd_jh_derd.acb:nth-child(4),
        .sd_jh_derd.acd:nth-child(4) {
            left: inherit;
            bottom: 60px;
            right: 10px;
            top: inherit;
            transform: rotate(115deg)
        }
        .sd_jh_derd.acd:nth-child(5) {
            left: inherit;
            bottom: -1px;
            right: 69px;
            top: inherit;
            -webkit-transform: rotate(160deg);
            transform: rotate(157deg);
        }


        .sd_jh_derd.acd:nth-child(6) {
            left: 67px;
            bottom: 2px;
            right: inherit;
            top: inherit;
            transform: rotate(202deg);
        }

        .sd_jh_derd.acd:nth-child(7) {
            left: 9px;
            bottom: 65px;
            right: inherit;
            top: inherit;
            transform: rotate(250deg);
        }

        .sd_jh_derd.acb:nth-child(8),
        .sd_jh_derd.acd:nth-child(8) {
            left: 10px;
            bottom: inherit;
            right: inherit;
            top: 60px;
            transform: rotate(-65deg)
        }


        .sd_jh_derd.acb:nth-child(1),
        .sd_jh_derd.acd:nth-child(1) {
            left: 60px;
            bottom: inherit;
            right: inherit;
            top: 5px;
            transform: rotate(-30deg)
        }



        .sd_jh_derd.acb:nth-child(5) {
            left: 70px;
            bottom: 8px;
            right: inherit;
            top: inherit;
            transform: rotate(210deg)
        }
        .sd_jh_derd.acb:nth-child(6) {
            left: 10px;
            bottom: 60px;
            right: inherit;
            top: inherit;
            transform: rotate(240deg)
        }
        .sd_jh_derd.acb:nth-child(7) {
            left: 10px;
            bottom: inherit;
            right: inherit;
            top: 60px;
            transform: rotate(-70deg)
        }
        .sd_jh_derd.acb:nth-child(8) {
            left: inherit;
            bottom: 5px;
            right: 60px;
            top: inherit;
            transform: rotate(155deg)
        }

    }

</style>
<style scoped>
    .sdf_jh_er {
        width: 82px;
        height: 82px;
        border-radius: 4px;
        border: 1px solid #e0e0e0;
        padding: 5px;
    }

    .sdf_jh_er img {
        width: 100%;
        height: 100%;
    }

    .turnplate_content {
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, .2);
        width: 370px;
        height: 650px;
        margin-right: 20px;
    }

    .sdf_jh_deerx {
        line-height: 40px;
    }

    .sdf_jh_deerx .box_a {
        border-right: 1px solid #fff;
        border-left: 1px solid #fff;
    }

    .sdf_jh_deerx .box_a.act {
        color: #4386f4;
        background-color: #fff;
        border-right-color: #dcdfe6;
        border-left-color: #dcdfe6;
    }

    .cji_sjh_sde {
        text-align: center;
        position: absolute;
        top: 32px;
        width: 240px;
        line-height: 32px;
        font-size: 16px;
        height: 32px;
        left: 0;
        right: 0px;
        margin: auto;
        color: #fff;
        z-index: 100;
    }

    .cji_sjh_sde:hover .sd_jh_deertx {
        display: block
    }

    .cji_sjh_sde.act .sd_jh_deertx {
        display: block;
        border-color: #4386F4
    }

    .cji_sjh_sde.act .bian_seer {
        display: block
    }

    .sd_jh_Ddffx {
        height: 583px;
    }

    .sd_jh_Ddffx img.fm {
        width: 100%;
        height: 100%;
    }

    .sd_jh_deef {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 1000
    }

    .zhuan_swer {
        width: 308px;
        height: 308px;
        margin: auto;
        margin-top: 5px;

    }

    .sd_jh_deerxer.act .turnplate_box {
        animation: rotating_tow 10s linear infinite
    }

    .sd_jh_deerxer.act .sd_kong_dr {
        /*        animation: rotating_tow 1s linear infinite*/
    }

    .sd_jh_deerxer.aa {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1485deg);
    }

    .sd_jh_deerxer.ab {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1390deg);
        /*        transform: rotate(-45deg)*/
    }

    .sd_jh_deerxer.ac {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1570deg);
    }

    .sd_jh_deerxer.ad {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1670deg);
    }



    .sd_jh_deerxer.ba {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1466deg)
    }

    .sd_jh_deerxer.bb {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1416deg)
    }

    .sd_jh_deerxer.bc {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1355deg)
    }

    .sd_jh_deerxer.bd {
        -webkit-transition: -webkit-transform 9000ms;
        /*        transform: rotate(1355deg)*/
        transform: rotate(1590deg)
    }

    .sd_jh_deerxer.be {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1526deg)
    }

    .sd_jh_deerxer.bf {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1651deg)
    }


    .sd_jh_deerxer.ca {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1466deg)
    }

    .sd_jh_deerxer.cb {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1416deg)
    }

    .sd_jh_deerxer.cc {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1376deg)
    }

    .sd_jh_deerxer.cd {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1334deg)
    }

    .sd_jh_deerxer.ce {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1285deg)
    }

    .sd_jh_deerxer.cf {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1235deg)
    }

    .sd_jh_deerxer.cg {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1145deg)
    }

    .sd_jh_deerxer.ch {
        -webkit-transition: -webkit-transform 9000ms;
        transform: rotate(1185deg)
    }

    /*
       .sd_jh_deerxer.plm   .jiang_dderr .sd_jh_derd:nth-child(1) {
    left: 35px;
    bottom: 27px;
}
           .sd_jh_deerxer.plm   .jiang_dderr .sd_jh_derd:nth-child(2) {
    left: 32px;
    bottom: 25px;
}
   .sd_jh_deerxer.plm   .jiang_dderr .sd_jh_derd:nth-child(3) {
    left: 33px;
    bottom: 33px;
    transform: rotate(-129deg);
}
    
    
*/

    .sd_jh_deerxer.plm .sd_jh_derd.act:nth-child(1) {
        left: 61px;
        top: 5px;
        transform: rotate(-27deg);
    }

    .sd_jh_deerxer.plm .sd_jh_derd.act:nth-child(2) {
        right: 61px;
        top: 6px;
        transform: rotate(26deg);
    }

    .sd_jh_deerxer.plm .sd_jh_derd.act:nth-child(3) {
        right: 5px;
        bottom: 105px;
        transform: rotate(87deg);
    }

    .sd_jh_deerxer.plm .sd_jh_derd.act:nth-child(4) {
        left: 55px;
        bottom: 8px;
        transform: rotate(-151deg);
    }

    .sd_jh_deerxer.plm .jiang_dderr .sd_jh_derd.act:nth-child(6) {
        right: 57px;
        bottom: 10px;
        transform: rotate(148deg) !important;
    }

    .sd_jh_deerxer.plm .sd_jh_derd.act:nth-child(5) {
        left: 6px;
        top: 95px;
        transform: rotate(-87deg);
    }

    @keyframes rotating {
        from {
            transform: rotate(0)
        }
        to {
            transform: rotate(360deg)
        }
    }

    @keyframes rotating_tow {

        from {
            transform: rotate(360deg)
        }
        to {
            transform: rotate(0)
        }
    }


    .sd_jh_deertx {
        position: absolute;
        left: 0;
        top: 0px;
        width: 100%;
        height: 100%;
        border: 1px dashed #e0e0e0;
        display: none
    }

    .zhuan_swer:hover .sd_jh_deertx {
        display: block
    }

    .zhuan_swer.act .sd_jh_deertx {
        display: block;
        border-color: #4386F4
    }

    .bian_seer {
        background: #4386F4;
        color: #fff;
        font-size: 12px;
        padding: 2px 4px;
        line-height: 1.1;
        position: absolute;
        right: 0;
        top: -18px;
        cursor: pointer;
        display: none
    }

    .zhuan_swer.act .bian_seer {
        display: block;
    }

    .turnplate_box {
        width: 100%;
        height: 100%;
    }


    .sd_kong_dr {
        width: 283px;
        height: 283px;
        border-radius: 50%;
        background: #ffeebe;
        position: absolute;
        left: 12px;
        top: 12px;
        overflow: hidden
    }

    .sd_jh_dexr {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 0;
        top: 0px;
        right: 0;
        bottom: 30px;
        margin: auto;
        z-index: 1000
    }

    .sd_jh_dexr img {
        width: 100%;
        height: 100%;
    }



    .sd_jh_dexr.act .sd_jh_deertx {
        display: block;
        border-color: #4386F4
    }

    .sd_jh_dexr.act .bian_seer {
        display: block
    }

    .sd_jh_sddf {
        height: 50%;
        background: #fff;
        width: 1px;
        position: absolute;

    }



    .sd_jh_dexc {
        padding-top: 10px;
        font-size: 12px;
        color: #f60;
        max-width: 60px;
        white-space: nowrap;
        overflow: hidden;
    }

    .turnplat_git {
        width: 40px;
        height: 40px;
        margin-top: 10px;
    }

    .df_jhj_derx {
        margin-top: -10px;
    }

    @media screen and (min-width: 370px) {
        .zhuan_swer {
            transform: scale(1.1)
        }


    }

    @media screen and (min-width: 400px) {
        .zhuan_swer {
            transform: scale(1.2)
        }


    }

</style>
