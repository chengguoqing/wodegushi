<!--创建大转盘-->
<template>
	<section class="sd_kj_deeret">
               <section class="ibox-content ">
                <section class="turnplate_content fl mt10">         
<!--
                    <section class="box cen sdf_jh_deerx">
                        <section class="box_a fz14 sz" v-for="(sd,idx) in tahg_s" :class="idx==idx_sd?'act':''" @click="idx_sd=idx">{{sd.name}}</section>
                    </section>
--> 
                    <section class="pr ">
                        <img src="https://mall.cangniaowl.com/static_story/img/wxTitle.png" class="w100 cz">
                        <section class="cji_sjh_sde" @click="$store.state.zp_index=0" :class="$store.state.zp_index==0?'act':''">
                                集故事抽奖
                            
<!--
                             <section class="sd_jh_deertx">
                                <span class="bian_seer" @click="bianji_s(0)">编辑</span>
                                </section>
-->
                        </section>
                    </section>
                    
                    <section class="sd_jh_Ddffx pr">
          
<!--                            <img :src="bjtp" class="fm cz">-->
<!--                        活动首页-->
                        <section class="sd_jh_deef ov" v-if="idx_sd==0">
                      <img src="https://mall.cangniaowl.com/static_story/img/zp_top.jpg" class="w100">
<!--
                            <el-row class="pd mt20">
                                <el-col :span="12" class="cf fz14 sz" >
                <span @click="idx_sd=1">活动说明</span>      
    </el-col>
                                 <el-col :span="12" class="cf fz14 tr sz" @click="idx_sd=2">
                   <span @click="idx_sd=2">  我的奖品</span>   
    </el-col>
                            </el-row>
-->
                        
<!--                            转盘区域-->
                            <section class="zhuan_swer pr " :class="$store.state.zp_index==1?'act':''" @click="$store.state.zp_index=1">
                                <img src="https://mall.cangniaowl.com/static_story/img/turnplate_box.3cb262a.png" class="turnplate_box">
                                
                                <img src="https://mall.cangniaowl.com/static_story/img/yun_a.png" class="yun_asd_dse">
               <img src="https://mall.cangniaowl.com/static_story/img/yun_a.png" class="yun_asd_dse ab">
                                
                                
                                 
                                <section class="sd_kong_dr pr">
                                        <section class="sd_jh_dexr" :class="$store.state.zp_index==2?'act':''" @click.stop="$store.state.zp_index=2">
                                            <img src="https://mall.cangniaowl.com/static/img/story/turnplat_pointer.png?v=6666">
                                            
<!--
                                              <section class="sd_jh_deertx">
                    <span class="bian_seer" @click.stop="dialogVisible=true">编辑</span>
                                </section>
-->
                                            
                                        </section>
                                    
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
    
<!--
                                <section class="sd_jh_deertx">
                    <span class="bian_seer" @click="bianji_s(2)">编辑</span>
                                </section>
-->
                            </section>
                            
    
                            </section>
<!--                        活动说明 /我的奖品-->
                        <section class="sd_jh_deef" v-if="idx_sd==1||idx_sd==2">
                            
                            <section class="sd_jh_ddrx bgff">
                                
                                <el-row>
                                    <el-col :span="12">
                                        <section class="sd_jkjh_der fz14 cen sz" @click="idx_sd=1" :class="idx_sd==1?'act':''" >活动说明</section>
                                    </el-col>
                                    <el-col :span="12">
                                        <section class="sd_jkjh_der fz14 cen sz" @click="idx_sd=2" :class="idx_sd==2?'act':''" >我的奖品</section>
                                    </el-col>
                                </el-row>
                                
                                <section class="pd pt10 pm10 sdf_jh_der" v-if="idx_sd==1">
                                <p class="fz12 z9">活动时间</p>
                                    <section class="fz14">
                                            2019-03-09 15:43:26 至 2019-03-12 15:43:26
                                    </section>
                                    
                                    
                                     <p class="fz12 z9 mt10">主办单位 </p>
                                    <section class="fz14">
                                          主办单位
                                    </section>
                                    
                                    
                                          <p class="fz12 z9 mt10">活动奖品 </p>
                                    <section class="fz14">
                                       奖项一: 保温杯
                                    </section>
                                    
                                    
                                    
                                          <p class="fz12 z9 mt10">活动及兑奖规则说明  </p>
                                    <section class="fz14">
                                          活动规则: 活动期间内, 每个用户只可参与一次
                                    </section>
    
                                </section>
                                
                                <section class="pd pt10 pm10 sdf_jh_der" v-if="idx_sd==2">
                                
                                        <section class="cfg-my-prize fz12 z9"> 
                        中奖奖品: 5000积分 <br>
中奖时间: 2018.07.16 12:34:09 <br>
中奖情况: 已领奖 
    <i class="el-icon-arrow-right d_jh_detx"></i>
                                    </section>
    
                                </section>
                            </section>
    
                        </section>
                   
                        
                        <section class="sd_jh_deef " v-if="idx_sd==3">
    
                                <section class="sd_jh_ddrx bgff">
                                    <p class="fz14 z9 cen mt20">
                                恭喜您! 中奖了! 您将得到
                                    </p>
                                    <p class="cen mt20">
                                    <img src="https://mall.cangniaowl.com/static_story/img/turnplat_git.png" class="turnplat_git_der">
                                        </p>
                                      <p class="fz14 z9 cen mt20">
                                  商品名称:中秋月饼
                                    </p>
                                    
                                    <section class="pd mt20">
                                   
                                        
                                             <el-button type="primary" size="medium"  class="W100 sd_jh_derx">再来一次</el-button>
                                        <el-button type="primary" size="medium"  class="W100 mt10  sd_jh_derx">立即兑换</el-button>
                                    </section>
                                  
                            
                                </section>
                        </section>
    
                        
                        
                        
                             <section class="sd_jh_deef " v-if="idx_sd==4">
    
                                <section class="sd_jh_ddrx bgff">
                                    <p class="fz14 z9 cen mt20">
                               很遗憾, 您没有能够中奖<br>
                                        (听说下次中奖的几率会更大)
                                    </p>
                                    <p class="cen mt10">
                                    <img src="https://mall.cangniaowl.com/static_story/img/meizj.png" class="turnplat_git_der ">
                                        </p>
                                  
                                    
                                    <section class="pd mt40">
                                   
                                        
                                             <el-button type="primary" size="medium"  class="W100 sd_jh_derx">再来一次</el-button>
                                        <el-button type="primary" size="medium"  class="W100 mt10  sd_jh_derx">立即兑换</el-button>
                                    </section>
                                  
                            
                                </section>
                        </section>
    
                </section>
                    
            
                </section>
    
                <section class="ov pd pt10 pm10 df_jhj_derx">
                        <zhuanpan_right ref="zhuang_srt"></zhuanpan_right>
                </section>
                
                
                <p class="qc"></p>
                </section>
            
<!--            编辑图片-->
            <el-dialog class="sddf_drrt" title="提示" :visible.sync="dialogVisible" width="560px">
                        <p class="my-top-title">编辑图片</p>
                <section class="sd_row mt20">
                        <p class="fz14 z6 pm10">编辑背景图片:</p>
                       
                          
                    <p class="fl sdf_jh_er">
                        <img :src="bjtp">
                    </p>
                    <section class="ov pl10 z9 fz14 tl">
            1.图片尺寸建议：250px250px；<br>

2.支持JPG、PNG、JPEG格式的图片，图片不能大于200KB。
                        <p class="mt10">
<!--                        <el-button type="primary" size="medium" >上传图片</el-button>-->
                            
                            
        <el-upload
  class="upload-demo"
    :show-file-list="false"
       :on-success="handleAvatarSuccess"
  action="https://www.easy-mock.com/mock/5c73a0393baee470d9b3e7ea/mock.api/upimg">
                         
  <el-button size="small" type="primary">上传图片</el-button>

   </el-upload>
                            
                            
                            
                        </p>
    
                    </section>
                   
                    <p class="qc"></p>
                    
                </section>
                
                
                <section class="sd_row mt20">
                        <p class="fz14 z6 pm10">编辑指针图片:</p>
                    
                    <p class="fl sdf_jh_er">
                        <img :src="bjzz">
                    </p>
                    <section class="ov pl10 z9 fz14 ">
            1.图片尺寸建议：250px250px；<br>

2.支持JPG、PNG、JPEG格式的图片，图片不能大于200KB。
                        <p class="mt10">
                        <el-upload
  class="upload-demo"
    :show-file-list="false"
       :on-success="handleAvatarSuccess_b"
  action="https://www.easy-mock.com/mock/5c73a0393baee470d9b3e7ea/mock.api/upimg">
                         
  <el-button size="small" type="primary">上传图片</el-button>

   </el-upload>
                        </p>
    
                    </section>
                    
                    <p class="qc"></p>
                    
                </section>
                
                <section class="mt20 tr">
                <el-button type="primary" class="pl40 pr40" @click="dialogVisible=false" size="medium">确定</el-button>
                        <el-button type="primary" plain class="ml20 pl40 pr40" @click="dialogVisible=false" size="medium">取消</el-button>
            
                </section>
                
            </el-dialog>
 
    </section>


</template>
<script>
    import zhuanpan_right from "../components/zhuanpan_right"

    export default {
        data() { 
            return {
                bianji_e:false,
                dialogVisible: false,
                bjtp: "http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_bottom.png",
                bjzz: "http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_pointer.png",
                tahg_s: [{
                    name: "活动首页",
                    cls: "act"
                }],
                idx_sd: 0,
                zhuang_s: '',
                zhuangpan_data: [{
                    title: "奖项一",
                    jpimg: "http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_git.png"
                }, {
                    title: "奖项二",
                    jpimg: "http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_winout.png"
                }, {
                    title: "谢谢参与",
                    jpimg: "http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_winout.png"
                }, {
                    title: "谢谢参与",
                    jpimg: "http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_winout.png"
                }, ]
            }
        },
        components: {
     
            zhuanpan_right
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.bjtp = URL.createObjectURL(file.raw);
            },
            handleAvatarSuccess_b(res, file) {
                this.bjzz = URL.createObjectURL(file.raw);
            },
            bianji_s(data) { //编辑按钮触发
                console.log(data);
                this.$refs.zhuang_srt.gest_sf(data)
            }
        },
        mounted() {

      
        },
    }

</script>
<style lang="scss" scoped>
    .sd_kj_deeret{
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
            top: 30px;
            transform: rotate(45deg)
        }

        .sd_jh_derd:nth-child(4) {
            right: 30px;
            bottom: 30px;
            transform: rotate(135deg)
        }

        .sd_jh_derd:nth-child(3) {
            left: 30px;
            bottom: 30px;
            transform: rotate(-135deg)
        }

        .sd_jh_derd:nth-child(1) {
            left: 30px;
            top: 30px;
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
            bottom: 100px;
            transform: rotate(90deg);

        }



        .sd_jh_derd.act:nth-child(6) {
            left: inherit !important;
            top: inherit !important;
            right: 50px;

            bottom: 20px;
            transform: rotate(145deg) !important;
        }

        .sd_jh_derd.act:nth-child(4) {
            left: 60px;
            top: inherit;
            bottom: 10px;

            transform: rotate(-145deg)
        }

        .sd_jh_derd.act:nth-child(5) {
            left: 10px;
            top: 90px;
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
            bottom: 5px;
            right: 60px;
            top: inherit;
            transform: rotate(160deg)
        }


        .sd_jh_derd.acd:nth-child(6) {
            left: 70px;
            bottom: 8px;
            right: inherit;
            top: inherit;
            transform: rotate(210deg)
        }

        .sd_jh_derd.acd:nth-child(7) {
            left: 10px;
            bottom: 60px;
            right: inherit;
            top: inherit;
            transform: rotate(240deg)
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
          background: #E71C1B;
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
        margin-top: -60px;

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
    background: #fff;
    position: absolute;
    left: 12px;
    top: 12px;
    }

    .sd_jh_dexr {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 0;
        top: 0px;
        right: 0;
        bottom: 0px;
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
        background: #FFD8AE;
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

</style>
