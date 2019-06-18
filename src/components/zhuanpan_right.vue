<!--转盘右边的编辑-->
<template>
<section>
<div class="sad_jh_sderr">

    <section class="sd_jj_d_dr">
        <section class="sd_jhj_sdf fz14 sz" @click="xz_sd=idx" :class="idx==xz_sd?'act':''" v-for="(sd,idx) in kh_sdf">{{sd}}</section>
        <p class="qc"></p>
    </section>
<!--    基础设置-->
    <section v-if="xz_sd==0" class="pt20 pr40 btm">
        
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"  class="demo-ruleForm sad_sd_derts">
               <el-form-item label="抽奖资格"  prop="">
                   <section class="fz14">
                       每集齐 
                       <span class="f_b sd_jh_ddfg">
        <el-input  placeholder="" v-model="cjzg" ref="cjzg"></el-input>
        </span> <span class="z9 fz12"> 张“我的故事”获得一次抽奖机会</span>
                </section>
                   
             </el-form-item> 
            
                  
                        <el-form-item label="抽奖限制"  prop="">
                   <section class="fz14">
                       每月最多 
                       <span class="f_b sd_jh_ddfg">
        <el-input  placeholder="" v-model="mei_yue" ref="mei_yue"></el-input>
        </span> <span class="z9 fz12"> 次</span>
                </section>
                   
             </el-form-item> 
                         <el-form-item label="奖品设置"  prop="">
                        <el-input v-model="cjsz" ref="cjsz"  type="textarea" rows="4" placeholder="请输入400个字以内的字符"></el-input>
             </el-form-item> 
           
            
             <el-form-item label="抽奖说明"  prop="">
                        <el-input v-model="cjsm" ref="cjsm"  type="textarea" rows="4" placeholder="请输入400个字以内的字符"></el-input>
             </el-form-item> 
            
            
            
       </el-form>
    
    </section>
<!--   奖项设置-->
    <section v-if="xz_sd==1" class="pt20 pr40 btm pd"> 
        
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit" @tab-click="sd_sfer">
  <el-tab-pane
    v-for="(item, index) in editableTabs"
    :label="item.title"
    :name="item.name" 
  >

      
    <section >
            
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"  class="demo-ruleForm">
            
      <el-form-item label="奖品名称"  prop="">
             <el-input  placeholder="长度不超过15个汉字或字母" v-model="item.title" ></el-input> 
    </el-form-item>
            
             <el-form-item label="奖品图片"  prop="">
                          <section class="df_jh_Ddfx br yj4 fl">
                            <img src="https://mall.cangniaowl.com/static/img/story/turnplat_git.png" v-if="!item.jpimg">
                              <img :src="item.jpimg" v-else>
                    </section>
                <section class="ov pl10 fz12 z6 sdf_jh_dex">
                       1.图片尺寸建议：250px250px；<br>
                        2.支持JPG、PNG、JPEG格式的图片，图片不能大于200KB。
                    <p @click="jptp_idx=index">
                        
      <el-upload
  :action="up_img_url"
  name="file_data"
  :show-file-list="false"
  :on-success="handleAvatarSuccess">
        <el-button type="primary"  size="medium" class="mt10">上传图片</el-button>
</el-upload>
                        
                        
            
                        
                </p>
                </section>
                
                <p class="qc"></p>
             </el-form-item>
            
      
            
                <el-form-item label="奖品关联至"  prop="" >
                    <section class="mt15">
                      <el-radio v-model="item.jpgl_type" label="1">
    <section class="f_b dsf_jjh_deer dian">
        <span @click="bianji_e=true">{{item.jpgl_text||'点击选择商品'}} </span>
    
    </section>
                          <span class="ml10 fz12 z3">商品购买资格1次</span>
                          <p class="fz12 red mt10 pl20">
<!--                    创建后，本商品将自动变更为限购商品，仅限抽奖获得1次购买资格-->
                        </p>
                </el-radio>
                        </section>
                    <section>
    <section  class="sd_jkj_der">
    <el-radio v-model="item.jpgl_type" label="2">
    
        <section class="f_b dsf_jjh_deer">
                <el-select v-model="item.jpgl_yhq"   placeholder="请选择店内优惠券" class="w100">
                    <el-option :label="sd.type_name" :value="sd.type_id" v-for="sd in youhuiyqa"></el-option>
                                       
                             </el-select> 
        
        
    
    </section>
        
        
    </el-radio>
           </section>             
                        
<section>
                            
  <el-radio v-model="item.jpgl_type" label="3">
    
        其他非商城内商品 
        
        
    </el-radio>
                     
    </section>   
                        
                </section>
                       
                      
    </el-form-item>
            
     
            
            
                   <el-form-item label="奖品数量"  prop="">
                           <el-input  placeholder="为0, 则中奖概率为0" v-model="item.jpsl" :autofocus="item.j_focu"></el-input>
                       
    </el-form-item>
            
            
            
             <el-form-item label="中奖概率"  prop="">
                    <span class="f_b gailv_der">
                    <el-input  placeholder="为0, 则中奖概率为0" v-model="item.zjgl" :autofocus="item.g_focu"></el-input>
                </span>
                 
                 % <span class="fz12 z9">所有奖项总中奖率不可超过100%</span>

                       
    </el-form-item>
            
            
            
        </el-form>
    </section>
      
  
  </el-tab-pane>
</el-tabs>
    </section>
    

</div>
    
     <p class="mt40 sdf_kj_dert">
        <el-button type="primary"  @click="bcll">保存并预览</el-button>
    
    </p>
    
    
                      <el-dialog class="sddf_drrt" title="添加商品" :visible.sync="bianji_e"  :modal="false" width="800px">
        <shangping  @sd_hg_drt="sd_hg_drt"></shangping>
             </el-dialog>
    
    

    </section>
</template>
<script>
    import shangping from "@/components/shangping"
    import {
        Dialog
    } from 'vant';
    export default {
        data() {
            return {
                jptp_idx: 0, //jiangp
                bianji_e: false,
                dialogVisible: false,
                kh_sdf: ["基础设置", "奖项设置"],
                xz_sd: 0,
                ruleForm: "",
                huo_sdf: '1',
                ruleForm: {

                },
                rules: {},
                editableTabsValue: '1',
                cjzg: "", //抽奖资格
                cjsm: "", //抽奖说明
                cjsz:"",//奖品设置
                mei_yue: "", //每月最多抽奖次数
                editableTabs: [{
                    title: '奖项一',
                    jpimg: "http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_git.png", //奖品图片
                    name: '1',
                    type_s: 2,
                    jpgl_type: "1", //1商品 2优惠券  3其他商品
                    jpgl_text: "", //选中的内容/奖品关联
                    jpgl_id: "", //商品id
                    jpgl_yhq: "", //优惠券 id
                    jpsl: "", //奖品数量
                    j_focu: false, //选中奖品数量
                    g_focu: false, //选中中奖概率
                    zjgl: "", //中奖概率
                }, {
                    title: '奖项二',
                    jpimg: "http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_git.png", //奖品图片
                    name: '2',
                    type_s: 2,
                    jpgl_type: "1", //1商品 2优惠券  3其他商品
                    jpgl_text: "", //选中的内容/奖品关联
                    jpgl_id: "", //商品id

                    jpgl_yhq: "", //优惠券 id
                    j_focu: false, //选中奖品数量
                    g_focu: false, //选中中奖概率
                    jpsl: "", //奖品数量
                    zjgl: "", //中奖概率
                }],
                df_dfg:0,
                tabIndex: 2,
                zp_data: "",
                is_b_t: true, //自提地点是否为添加状态
                youhuiyqa: "", //优惠券列表

            }
        },
        components: {
            shangping
        },
        methods: {
            handleAvatarSuccess(e) {
                this.editableTabs[this.jptp_idx].jpimg = e.url
            },
            gest_sf(idx) {
                this.xz_sd = idx
            },
            tianjia_s() { //添加自提确认按钮触发
                this.$refs.ziti_from.validate((valid) => {
                    if (valid) {
                        this.dialogVisible = false
                        if (this.is_b_t) { //添加状态
                            this.tianjia_list.push(this.tianjia)
                        } else { //编辑状态

                        }
                    }
                });

            },
            bianji_ziti(sd) { //编辑自提按钮触发
                this.is_b_t = false
                this.dialogVisible = true
                this.tianjia = sd

            },
            dele_de(idx) {
                this.tianjia_list.splice(idx, 1);
            },
            handleTabsEdit(targetName, action) {
                this.df_dfg=this.editableTabs.length-1
                if (action === 'add' && this.editableTabs.length < 8) {
                            ++this.df_dfg
                    let newTabName = ++this.tabIndex + ''+new Date().getTime();
                    this.editableTabs.push({
                        title: '新奖项',
                        jpimg: "http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_git.png", //奖品图片
                        name: newTabName,
                        type_s: 2,
                        jpgl_type: "1", //1商品 2优惠券  3其他商品
                        jpgl_text: "", //选中的内容/奖品关联
                        jpgl_id: "", //商品id
                        jpgl_yhq: "", //优惠券 id
                        jpsl: "", //奖品数量
                        j_focu: false, //选中奖品数量
                        g_focu: false, //选中中奖概率
                        zjgl: "", //中奖概率
                    });
                    this.$store.state.is_dsr = this.editableTabs

                    this.editableTabsValue = newTabName;
                }
                if (action === 'remove' && this.editableTabs.length > 2) {
                    let tabs = this.editableTabs;
                    let activeName = this.editableTabsValue;
                    --this.df_dfg
                    if (activeName === targetName) {
                        tabs.forEach((tab, index) => {
                            if (tab.name === targetName) {
                                let nextTab = tabs[index + 1] || tabs[index - 1];
                                if (nextTab) {
                                    activeName = nextTab.name;
                                }
                            }
                        });
                    }

                    this.editableTabsValue = activeName;
                    this.editableTabs = tabs.filter(tab => tab.name !== targetName);
                }
            },
            bcll() {
                if (!this.cjzg) {
                    this.xz_sd = 0
                    setTimeout(a => {
                        this.$refs.cjzg.focus()
                    }, 10);
                    this.$message.error('请输入抽奖资格');
                    return
                }
                
                 if (!this.cjsz) {
                    this.xz_sd = 0
                    setTimeout(a => {
                        this.$refs.cjsz.focus()
                    }, 10);
                    this.$message.error('请输入奖品设置');
                    return
                }
                if (!this.cjsm) {
                    this.xz_sd = 0
                    setTimeout(a => {
                        this.$refs.cjsm.focus()
                    }, 10);
                    this.$message.error('请输入抽奖说明');
                    return
                }
                if (!this.mei_yue) {
                    this.xz_sd = 0
                    setTimeout(a => {
                        this.$refs.mei_yue.focus()
                    }, 10);
                    this.$message.error('请输入抽奖限制');
                    return
                }



                for (var i = 0; i < this.editableTabs.length; i++) {
                    let zjbd = this.editableTabs[i]
                    if (!zjbd.title) {
                        this.$message.error('请输入奖品名称');
                        return
                    }
                    if (!zjbd.jpgl_text &&zjbd.jpgl_type==1&& zjbd.jpgl_type != 3) {
                        this.$message.error('请选择关联奖品');
                        this.editableTabsValue = zjbd.name;
                        return
                    }
                    if (!zjbd.jpgl_yhq &&zjbd.jpgl_type==2&& zjbd.jpgl_type != 3) {
                        this.$message.error('请选择优惠券');
                        this.editableTabsValue = zjbd.name;
                        return
                    }
//                    if(jpgl_yhq){
//                       
//                       }
                    if (!zjbd.jpsl) {
                        this.$message.error('请输入奖品数量');
                        this.editableTabsValue = zjbd.name;
                        zjbd.j_focu = true
                        return
                    }
                    if (!zjbd.zjgl) {
                        this.$message.error('请输入中奖概率');
                        this.editableTabsValue = zjbd.name;
                        zjbd.g_focu = true
                        return
                    }
                }
                let jg_sdf = {}
                jg_sdf.cjzg = this.cjzg
                jg_sdf.cjsm = this.cjsm
                jg_sdf.cjsz=this.cjsz
                jg_sdf.mei_yue = this.mei_yue
                jg_sdf.editableTabs = this.editableTabs
                let sd_sdf = JSON.stringify(jg_sdf)
                this.post_t("zhuangxiu/prizeadd", {
                    data: sd_sdf
                }, function(data) {
                    Dialog.alert({
                        message: '操作成功'
                    })
                })
            },
            sd_sfer(e){
                this.df_dfg=e.index
            },
            sd_hg_drt(data) {
                this.bianji_e = false
                console.log(this.df_dfg);
                this.editableTabs[this.df_dfg].jpgl_text = data.goods_name
                this.editableTabs[this.df_dfg].jpgl_id = data.goods_id
            }

        },
        mounted() {
            let th = this
            this.ge_t("zhuangxiu/couponList", {}, function(data) {
                th.youhuiyqa = data 
            })

            this.ge_t("zhuangxiu/prizelists", {}, function(data) {
                var sd_sdf = ""
                 sd_sdf = data.data
                try {
                   
                    var sd_ddrfg = sd_sdf.editableTabs.length
                    th.$store.state.is_dsr = sd_sdf.editableTabs
                    th.editableTabs = sd_sdf.editableTabs
                    th.cjzg = sd_sdf.cjzg
                    th.cjsz=sd_sdf.cjsz
                    th.cjsm = sd_sdf.cjsm
                    th.mei_yue = sd_sdf.mei_yue
                    th.tabIndex = sd_ddrfg
                    if (sd_ddrfg == 7) {
                        th.$store.state.is_dsr_lenth = 'acb'
                    } else if (sd_ddrfg == 8) {
                        th.$store.state.is_dsr_lenth = 'acd'
                    } else if (sd_ddrfg > 4) {
                        th.$store.state.is_dsr_lenth = 'act'
                    } else if (sd_ddrfg < 5) {
                        th.$store.state.is_dsr_lenth = ''
                    }
                } catch (e) {
                    th.tabIndex = 2
                }

            })


        },
        watch: {
            editableTabs: {
                handler: function() {
                    this.$store.state.is_dsr = this.editableTabs
                    if (this.editableTabs.length == 7) {
                        this.$store.state.is_dsr_lenth = 'acb'
                    } else if (this.editableTabs.length == 8) {
                        this.$store.state.is_dsr_lenth = 'acd'
                    } else if (this.editableTabs.length > 4) {
                        this.$store.state.is_dsr_lenth = 'act'
                    } else if (this.editableTabs.length < 5) {
                        this.$store.state.is_dsr_lenth = ''
                    }

                },
                deep: true
            }
        }
    }

</script>
<style>
    .sddf_drrt .el-dialog {
        margin-top: 2vh !important;
    }

    .sddf_drrt .el-table td {
        padding: 5px 0;
    }

</style>
<style lang="scss" scoped>
    .dsf_jjh_deer {
        width: 180px;
    }

    .sad_jh_sderr {
        background: #fff;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, .2);
        display: inline-block;

    }

    .sd_jhj_sdf {
        padding-left: 20px;
        padding-right: 20px;
        line-height: 40px;
        text-align: center;
        float: left;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
        background: #fff;
        position: relative;
    }

    .sd_jhj_sdf.act {
        border-color: #dcdfe6;
        color: #4386f4;
    }

    .sd_jhj_sdf.act:after {
        content: ' ';
        position: absolute;
        left: 0px;
        width: 100%;
        height: 2px;
        background: #fff;
        bottom: -1px;
    }

    .sad_sd_derts {
        width: 550px;
        min-height: 500px;
    }

    .sd_jh_ddfg {
        width: 100px;
    }

    .sdf_kj_dert {
        padding-left: 100px
    }

    .sdf_kj_dert button {
        width: 200px;
    }

    .df_jh_Ddfx {
        width: 100px;
        height: 100px;
        padding: 5px;

    }

    .df_jh_Ddfx img {
        width: 100%;
        height: 100%;
        background: #f6f6f6
    }

    .sdf_jh_dex {
        line-height: 2
    }

    .gailv_der {
        width: 130px;
    }

    .sdf_jh_drer {
        background: #F6F6F6;
        line-height: 1.6
    }

    .sdf_jh_der {
        line-height: 2;
        margin-top: 20px;
    }

    .sd_jkj_der {
        margin-top: -10px !important;
    }

</style>
