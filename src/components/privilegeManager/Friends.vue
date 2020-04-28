<template>
  <!-- 三槽标题 -->
  <div>
    <div>
      <div class="ConnectTheManager">
        <div class="header">
          <!-- <router-link to="/MainApp/"> -->
          <div class="one">
            <div class="goBack">
              <van-button type="default" @click="onBack">
                <van-icon name="arrow-left" size="32" />
              </van-button>
            </div>
          </div>
          <!-- </router-link> -->
          <div class="two">
            <div class="info">好友列表</div>
          </div>
          <div class="three">
            <div class="setting"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 联系人卡片 -->
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="showList = true"
    />

    <!-- 联系人列表 -->

    <van-contact-list
      v-model="chosenContactId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />

    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: true,
      showEdit: false,
      isEdit: false,
      list: [
        {
          name: "张三",
          tel: "13000000000",
          id: 0
        }
      ]
    };
  },

  computed: {
    cardType() {
      return this.chosenContactId !== null ? "edit" : "add";
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },

  methods: {
    // 添加联系人
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = true;

      if (this.isEdit) {
        this.list = this.list.map(item => (item.id === info.id ? info : item));
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    },
    onBack() {
      this.$emit('func1','Mana')
    },
  }
   
};
</script>

<style scoped>
.m-header {
  height: 50px;
  line-height: 50px;
  background: #245fd7;
  color: #fff;
}

.m-header-icon {
  position: absolute;
  top: 16px;
  left: 6px;
  font-size: 18px;
}
.ConnectTheManager {
  width: 100% ;
  height: 50px;
}
.header {
  justify-content: space-between;
  display: flex;
  background-color: rgb(243, 245, 243);
  height: 3em;
}
.header .one {
  display: flex;
  justify-content: flex-start;
  align-content: center;
}
.header .two {
  display: flex;
  justify-content: center;
  align-content: center;
}
.header .three {
  display: flex;
  justify-content: flex-end;
  align-content: center;
}
.header .one,
.two,
.three {
  width: 100px; 
}

.header .one * {
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .info {
  font-size: larger;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>