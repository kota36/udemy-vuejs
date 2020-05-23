<template>
  <div>
    <LikeHeader>
      <h3>hi</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponents = 'Home'">Home</button>
    <button @click="currentComponents = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponents"></component>
    </keep-alive>
    <div style="padding: 10rem">
      <h2>Ivent Form</h2>
      <EventTitle :value="eventData.title" @input="eventData.title=$event"></EventTitle>


      <lavel for="maxNumber">最大人数</lavel>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <p> {{typeof eventData.maxNumber}}</p>

      <lavel for="host">主催者</lavel>
      <input id="host" type="text" v-model.trim="eventData.host">
      <pre> {{eventData.host}}</pre>

      <label for="detail">イベントの内容</label>
      <textarea id ="detail" clos="30" rows="10" v-model="eventData.detail"></textarea>
      <p style="white-space :pre"> {{eventData.detail}}</p>

      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <lavel for="isPrivate">非公開</lavel>
      <p> {{eventData.isPrivate}} </p>

      <p> 参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <lavel for="10">10代</lavel>

      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <lavel for="20">20代</lavel>

      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <lavel for="30">30代</lavel>
      
      <p>{{eventData.target}} </p>

      <p> 参加費用</p>
      <input type="radio" id="free" value = "無料" v-model="eventData.price">
      <label for="free">無料</label>
      
      <input type="radio" id="paid" value = "有料" v-model="eventData.price">
      <label for="paid">有料</label>

      <p>開催場所</p>
      <select v-model="eventData.location" mulitiple>
        <option v-for="location in locations" :key="location" >{{location}}</option>
      </select>
      <p>{{eventData.location}} </p>




    </div>
  </div>
</template>

<script>
  import LikeHeader from './components/LikeHeader.vue';
  import About from './components/About.vue';
  import Home from './components/Home.vue';
  import EventTitle from "./components/EventTitle.vue"
  export default {
    data() {
      return {
        number: 14,
        currentComponents: "Home",
        locations: [ "東京", "大阪", "名古屋"],
        eventData: {
          title: "",
          maxNumber: 0,
          host: "",
          detail: "",
          isPrivate: false,
          target: [],
          price: "無料",
          location: "東京"
        }
      };
    },
    components: {
      LikeHeader,
      About,
      Home,
      EventTitle
    },
    methods: {
      incrementNumber(value) {
        this.number = value;
      }
    }  
  }
</script>


