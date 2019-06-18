import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dx_rxrt: 0,
        sd_dert: "asdf_a", //业务员管理切换
        is_bjyewuyuan: 0, // 1编辑业务员状态 2审批关系设置
        is_tianjiaywy: true, //是否为添加业务员
        spr_gl: 0, //1.导入审批人
        is_dsr: [{
            title: '奖项一',
            name: '2',
            type_s: 2,
            jplx: '1', //奖品类型
            fangsi: '1', //派送方式
            jpimg: "http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_git.png", //奖品图片
            jpsl: "", //奖品数量
                }, {
            title: '奖项二',
            name: '2',
            type_s: 2,
            jplx: '1', //奖品类型
            fangsi: '1', //派送方式
            jpimg: "http://dkd-oss-image.oss-cn-hangzhou.aliyuncs.com/turnplate/turnplat_git.png", //奖品图片
            jpsl: "", //奖品数量
                }], //
        is_dsr_lenth: "", //转盘数据长度
        zp_index: '-1', //0标题 1转盘外面 2转盘里面
        prizedrawInfo: {prize_list:[]},
        huodsm: "",//活动说明
        cjsz:"",//奖品设置
        shopinfo:""
    },
    mutations: {

    },
    actions: {

    }
})
