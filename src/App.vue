<template>
  <div id="app">
   

    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        components: {},
        methods: {
            async getshop_info() {
                this.$store.state.shopinfo = await this.post_d("home/shopinfo", {})
                 this.$store.state.shopinfo = this.$store.state.shopinfo.data
            }
        },
        mounted() {
            this.getshop_info()
            if (token != '{$token}') {
                var e = window.location.href,
                    t = {},
                    n = this;
                t.token = n.token,
                    t.url = e,
                    n.post("home/getwxsign", t, function(e) {
                        n.wx_config(e.data)
                    })
            }
        },
    }

</script>


<style>


</style>
