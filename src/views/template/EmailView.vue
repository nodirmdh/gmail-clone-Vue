<template>
  <div id="EmailView" class="bg-gray-50 h-screen">
    <div class="flex items-center p-2">
      <div class="logo-section flex justify-start items-center px-3.5">
        <IconComponent
          icon-string="menu"
          icon-color="#636363"
          :icon-size="19"
          hover-color="hover:bg-gray-200"
          text="Main menu"
          class="-ml-2 mr-2"
        />
        <img width="107" src="../../../public/img/GmailLogo.png" alt="" />
      </div>
      <div class="flex w-full justify-between">
        <div
          class="input-width w-full bg-gray-200 flex items-center p-1 px-2 rounded-lg"
        >
          <IconComponent
            icon-string="magnify"
            icon-color="#636363"
            :icon-size="19"
            hover-color="hover:bg-gray-200"
            text="Search"
          />
          <input
            type="text"
            placeholder="Search Mail"
            class="w-full h-10 bg-gray-200 border-transparent border-none focus:ring-0 outline-none placeholder-gray-900"
          />
          <IconComponent
            icon-string="tune"
            icon-color="#636363"
            :icon-size="19"
            hover-color="hover:bg-gray-200"
            text="Show search options"
          />
        </div>
        <div class="flex w-32 justify-between items-center ml-6">
          <IconComponent
            icon-string="cog"
            icon-color="#636363"
            :icon-size="19"
            hover-color="hover:bg-gray-200"
            text="Settings"
          />
          <IconComponent
            icon-string="apps"
            icon-color="#636363"
            :icon-size="19"
            hover-color="hover:bg-gray-200"
            text="Google apps"
          />
          <UserComponent />
        </div>
      </div>
    </div>
    <div class="flex w-full justify-between">
      <div id="SideMenu" class="side-menu">
        <div
          @click="newMessageOpen = !newMessageOpen"
          class="flex items-center justify-center bg-sky-200 w-36 h-8 mt-2 rounded-2xl ml-2 p-7 cursor-pointer"
        >
          <PencilOutlineIcon :size="25" class="mr-4" />
          <span class="text-sm">Compose</span>
        </div>
        <div class="my-5"></div>
        <router-link to="/email">
          <div
            class="side-menu-item flex justify-between px-6 py-1.5 bg-blue-100 rounded-r-full"
          >
            <div class="flex items-center">
              <InboxIcon :size="17" />
              <div class="text-sm pl-4 font-semibold">Inbox</div>
            </div>
            <div class="text-xs font-semibold">{{ userStore.emails.length }}</div>
          </div>
        </router-link>
        <div class="flex justify-between px-6 py-1.5">
          <div class="flex items-center">
            <StarOutlineIcon :size="17" />
            <div class="text-sm pl-4">Starred</div>
          </div>
        </div>
        <div class="flex justify-between px-6 py-1.5">
          <div class="flex items-center">
            <ClockOutlineIcon :size="17" />
            <div class="text-sm pl-4">Snoozed</div>
          </div>
        </div>
        <div class="flex justify-between px-6 py-1.5">
          <div class="flex items-center">
            <SendOutlineIcon :size="17" />
            <div class="text-sm pl-4">Sent</div>
          </div>
        </div>
        <div class="flex justify-between px-6 py-1.5">
          <div class="flex items-center">
            <FileOutlineIcon :size="17" />
            <div class="text-sm pl-4">Drafts</div>
          </div>
        </div>
      </div>
      <!-- page -->
      <router-view />
      <!-- page -->
      <div class="m-4">
        <div class="w-6 h-6 flex justify-center mb-7">
          <img class="object-center" src="img/GoogleCalendar.png" alt="" />
        </div>
        <div class="w-6 h-6 flex justify-center mb-7">
          <img class="object-center" src="img/GoogleKeep.png" alt="" />
        </div>
        <div class="w-6 h-6 flex justify-center mb-7">
          <img class="object-center" src="img/GoogleTasks.png" alt="" />
        </div>
        <div class="w-6 h-6 flex justify-center mb-7">
          <img class="object-center" src="img/GoogleContacts.png" alt="" />
        </div>
        <div class="w-6 flex mb-7 border border-gray-300"></div>
        <div class="w-6 h-6 flex justify-center mb-7">
          <PlusIcon />
        </div>
      </div>
    </div>
    <div
      v-if="newMessageOpen"
      id="NewMessageSection"
      class="absolute bottom-0 right-0 mr-20 rounded-t-lg shadow-2xl bg-white"
    >
      <div
        class="flex items-center justify-between rounded-t-lg w-full text-sm px-3.5 py-2.5 bg-gray-200"
      >
        <div>New Message</div>
        <CloseIcon
          @click="newMessageOpen = false"
          class="cursor-pointer"
          :size="19"
        />
      </div>
      <div>
        <div class="relative flex items-center px-3.5 py-2">
          <div class="text-sm text-gray-700">To</div>
          <input
            v-model="toEmail"
            class="w-full h-6 border-transparent border-none focus:ring-0 outline-none"
            type="text"
          />
          <div class="absolute border-b w-[calc(100%-30px)] bottom-0"></div>
        </div>
        <div class="relative flex items-center px-3.5 py-2">
          <div class="text-sm text-gray-700">Subject</div>
          <input
            v-model="subject"
            class="w-full h-6 border-transparent border-none focus:ring-0 outline-none"
            type="text"
          />
          <div class="absolute border-b w-[calc(100%-30px)] bottom-0"></div>
        </div>
      </div>
      <div class="m-3">
        <textarea
          v-model="body"
          style="resize: none"
          class="w-full border-transparent border-none focus:ring-0 outline-none"
          rows="14"
        ></textarea>
      </div>
      <div class="p-4 mt-5">
        <button
          @click="sendEmail"
          class="bg-blue-700 hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full"
        >
          Send Message
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconComponent from "@/components/IconComponent.vue";
import UserComponent from "@/components/UserComponent.vue";
import PencilOutlineIcon from "vue-material-design-icons/PencilOutline.vue";
import InboxIcon from "vue-material-design-icons/Inbox.vue";
import StarOutlineIcon from "vue-material-design-icons/StarOutline.vue";
import ClockOutlineIcon from "vue-material-design-icons/ClockOutline.vue";
import SendOutlineIcon from "vue-material-design-icons/SendOutline.vue";
import FileOutlineIcon from "vue-material-design-icons/FileOutline.vue";
import PlusIcon from "vue-material-design-icons/Plus.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
import { ref } from "@vue/reactivity";
import { useUserStore } from "@/store/user-store";

const userStore = useUserStore();

let newMessageOpen = ref(false);
let toEmail = ref("");
let subject = ref("");
let body = ref("");

const sendEmail = async () => {
  await userStore.sendEmail({
    toEmail: toEmail.value,
    subject: subject.value,
    body: body.value,
  });
};
</script>

<style lang="scss" scoped>
#EmailView {
  .logo-section {
    min-width: 250px;
  }
  .input-width {
    max-width: 700px;
  }

  .side-menu {
    width: px;
  }
  .side-menu-item {
    width: 250px;
  }
}
#NewMessageSection {
  width: 560px;
  height: 570px;
}
</style>
