<!--商品-->
<template>
    <div >
        
        
        <el-form :inline="true"  class="demo-form-inline sdf_jh_sewer">
  <el-form-item label=" 关键字:">
    <el-input v-model="keyword" placeholder="关键字"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="sous_ssd">检索</el-button>
  </el-form-item>
</el-form>
        
        
        
        
    <el-table class="fg_d_Dert "  :data="tableData" style="width: 100%"  border highlight-current-row>
        
        
    					<el-table-column  label="产品图片" align="center">
                            	<template slot-scope="scope">
    <img :src="scope.row.goods_thumb" class="fengmiane cz">
                                    	</template>
</el-table-column>
<el-table-column prop="goods_name" width="400" label="产品名称" align="center"></el-table-column>
<!--<el-table-column label="产品状态" align="center"><template slot-scope="scope">上架中</template></el-table-column>-->
<el-table-column prop="" label="操作" align="center">
    <template slot-scope="scope">
    <el-button type="text" size="small"  @click="sd_jghdd(scope.row)" >添加</el-button>
<!--    <el-button type="text" size="small" v-if="scope.row.click_count=='act'" class="z9">已添加</el-button>-->

    						</template>
</el-table-column>
</el-table>


<div class="block cen mt20">
    <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="10" layout="total, prev, pager, next" :total="total">
    </el-pagination>
</div>

</div>
</template>
<script>
    export default {
        data() {
            return {
                page_sd: 1,
                keyword: "",
                d_kh_der: "",
                d_e_err: "",
                sd_deff: [],
                formInline: "",
                tableData: "",
                total: ""
            }
        },
        components: {

        },
        methods: {
            handleCurrentChange(val) {
                this.page_sd = val
                this.get_list()
            },
            get_list() {
                let list = {},
                    th = this
                list.shop_id = this.$route.query.shop_id
                list.mode = 1 
                list.is_all=1
                list.keyword = this.keyword
                list.current_page = this.page_sd
                this.post("product/list", list, function(data) {
                    data=data.data
                    th.total = data.total
                    th.tableData = data.data
                    
                })
            },
            sd_jghdd(sd) {
                sd.click_count = "act"
                this.$emit('sd_hg_drt', sd)
            },
            
            sous_ssd() {//搜索
                this.page_sd = 1
               
                this.get_list()
            }
        },
        mounted() {
            this.get_list()
        },
    }

</script>
<style>
  

</style>
<style scoped>
    .cen {
        text-align: center
    }

    .sdf_jh_deert {
        line-height: 40px;
    }

    .fengmiane {
        width: 50px;
    }

    .cas_sd_der {
        border: 1px solid #1AB394;
        color: #1AB394;
        line-height: 1
    }

    .cas_sd_der.ab {
        background: #999;
        color: #fff;
        border: 1px solid #999
    }

    .sdf_jh_deert td {
        border-right: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
    }

    .df_jhhert_d {
        height: 40px;
        padding: 0px;
        line-height: 40px;
        width: 80px;
        font-size: 16px;
    }

</style>
