<template>
     <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1" class="mintui mintui-icon_workmore">授权管理</mt-tab-item>
        <mt-tab-item id="tab2" class="mintui mintui-icon_QRcode">面对面授权</mt-tab-item>
        <mt-tab-item id="tab3" class="mintui mintui-icon_compile">出入记录</mt-tab-item>
        <mt-tab-item id="tab4" class="mintui mintui-icon_group">好友</mt-tab-item>
      </mt-tabbar>
</template>


<script>
export default {
    data(){
        return{
        //选中的tabbar值message为外面页面传入的值selected
            message:this.selected,
        //这里使用的icon图标为图片，所以需要加图片改变的传入，若使用阿里图标，则不用加
            atabs:this.tabs,
        }
    },
    watch: {
        message: function (val, oldVal) {
            // 这里就可以通过 val 的值变更来确定去向
            switch(val){
                case 'MainPage':
                    this.$router.push('/mainpage');
                break;
                case 'ShoppingList':
                    this.$router.push('/shoppinglist');
                break;
                case 'GroupList':
                    this.$router.push('/grouplist');
                break;
                case 'UserCenter':
                    this.$router.push('/usercenter');
                break;
            }
        }
    }
}
</script>
