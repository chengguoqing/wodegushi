<!--选择时间段-->
<template>
<div >

    <p class="cen pr fz14 pt10 pm10">
    请选择预约时间段 <van-icon name="cross" class="z9 sdf_jj_derr" @click="$emit('close')"/>
    </p>
    
    <van-row gutter="" class="btm">
        <van-col span="12">
                
            <section  class="sd_sdfx" :class="idx==xz_sd?'act':''" v-for="(sd,idx) in skh_df" @click="xz_sd=idx">
        {{sd.title}}
            </section>
            
            </van-col>
        <van-col span="12">
            <section class="sd_ddercc">
            <section class="sd_sdfx act" :class="sd.cls" v-for="(sd,idx) in sd_df" @click="swerd_sdf(sd)">
                {{sd.time}}
            </section>
                </section>
            
        </van-col>
    </van-row>

</div>
</template>
<script>
    export default {
        data() {
            return {
                skh_df: [],
                xz_sd: 0,
                sd_df:[]
                
            }
        },
        components: {

        },
        methods: {
            swerd_sdf(sd){
                  this.sd_df.map(a=>{
                      a.cls=""
                  })
                sd.cls="yellow"
                this.$emit('close')
            },
            sdd_er(num) {
                var date_e = new Date()
                date_e.setTime(date_e.getTime() + (24 * 60 * 60 * 1000) * num)
                var week = date_e.getDay(),
                    str = ""
                if (week == 0) {
                    str = "周日";
                } else if (week == 1) {
                    str = "周一";
                } else if (week == 2) {
                    str = "周二";
                } else if (week == 3) {
                    str = "周三";
                } else if (week == 4) {
                    str = "周四";
                } else if (week == 5) {
                    str = "周五";
                } else if (week == 6) {
                    str = "周六";
                }
                if (num == 0) {
                    str = "今天";
                }
                str += (date_e.getMonth() - (-1)) + "." + date_e.getDate()



                return str
            }
        },
        mounted() {
            for (var i = 0; i < 8; i++) {
                let sd_derr = {}
                sd_derr.title = this.sdd_er(i)
                this.skh_df.push(sd_derr)
            }

            let time_er = 0,
                startime=8
            for (var i = 0; i < 30; i++) {
                let sd_derr = {}
                if (time_er >= 60) {
                    time_er = 0
                    startime++
                    
                }
                sd_derr.time = startime + ":" + (time_er == 0 ? '00' : time_er)
                sd_derr.cls = ""
                this.sd_df.push(sd_derr)
                time_er += 30
            }

        },
    }

</script>
<style scoped>
    .sdf_jj_derr {
        position: absolute;
        right: 10px;
        top: 15px;
    }

    .sd_sdfx {
        background: #F1F1F1;
        text-align: center;
        line-height: 40px;
        font-size: 13px;
    }

    .sd_sdfx.act {
        background: #fff;
    }
    .sd_ddercc{
        height: 320px;
        overflow: auto;
    }

</style>
