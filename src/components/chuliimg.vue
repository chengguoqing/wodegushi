<!--我的故事-->
<template>
<div > 
    
 <canvas ref="mycads_dr" :width="W" :height="H" class="sd_dert"></canvas>
<!--    <button @click="sd_ghgd"></button>-->
</div>
</template>
<script>
    import base from "../base.js" 
    var ctx = ""
    export default {
        props: {
            src: "",
            W: "",
            H: "",
            rgba: "", 
            sd_jhsd: ""

        },
        data() {
            return {}
        },
        components: {
 
        },
        methods: {
            sd_ghgd() {
                this.$emit('get_sds',this.$refs.mycads_dr.toDataURL("image/png"))
                console.log();
            },
            
            gaibian() {
                var c = this.$refs.mycads_dr
                ctx = c.getContext("2d");
                //指定图片的URL
                //浏览器加载图片完毕后再绘制图片 
                let th = this
                var img_s = new Image()
                img_s.src = this.sd_jhsd
                img_s.onload = function() {
                  ctx.clearRect(0,0,th.W, th.H);
                    ctx.drawImage(img_s, 0, 0, th.W, th.H);
                    var imageData = ctx.getImageData(0, 0, th.W, th.H),
                        data = imageData.data,
                        sd_Ddf = th.rgba.split(",")
                    for (var i = 0, len = data.length; i < len; i += 4) {
                        data[i] = sd_Ddf[0]
                        data[i + 1] = sd_Ddf[1]
                        data[i + 2] = sd_Ddf[2]
                    }
                    ctx.putImageData(imageData, 0, 0)
                }
            }

        },
        mounted() {
         
        },
        watch: {
            sd_jhsd: {
                handler: function() {
                      this.gaibian()
                },
                deep: true
            }
        }
    }

</script>
<style scoped>


</style>
