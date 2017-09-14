<template>
  <div class="list">
    <div class="list_box">
      <div class="head">
        {{getDate[count].subjectCh}} 第{{count+1}}题/共{{getDate.length}}题
      </div>
      <div class="subject_b">
        {{getDate[count].title}}
      </div>
      <div class="base"></div>
      <div class="answer">
        <div class="answer_slide" :class="ind === index ? 'answer_slide_bg' : ''"  v-for="(item,ind) in getDate[count].answers" @click="bgF(ind)">
          <span></span><p>{{item}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      id: this.$route.params.id,
      getDate:null,
      count:0,
      index:""
    }
  },
  watch:{
    count(){
      this.index = "";
    }
  },
  methods:{
    bgF(ind){
      this.index = ind;
      if(this.count < this.getDate.length-1){
        setTimeout(() => {
          this.count += 1;
        },200)
      }else{
        this.$router.replace("/noticeLoad")
      }
    }
  },
  created(){
    this.$store.commit("get_data",this.id);
    this.getDate = this.$store.state.datalist;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.list_box {
  width: 100%;
  height: 100%;
  padding: 0.45rem 0.38rem; }

.head {
  width: 100%;
  height: 1.02rem;
  background: url(../assets/bg-qustion-top.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  line-height: 0.65rem;
  color: #22c485;
  font-size: 0.32rem; }

.subject_b {
  width: 100%;
  padding: 0 0.64rem;
  line-height: 0.46rem;
  font-size: 0.3rem;
  color: #333;
  background: url(../assets/bg-question-center1.png);
  background-size: 100%; }

.base {
  width: 100%;
  height: 0.45rem;
  background: url(../assets/bg-question-center2.png) no-repeat;
  background-size: 100% 100%; }

.answer {
  width: 100%;
  height: 6.9rem;
  background: url(../assets/bg-question-bottom.png) no-repeat;
  background-size: 100% 100%;
  padding: 0.33rem; }

.answer_slide {
  width: 100%;
  height: 1rem;
  background: url(../assets/btn-bg-select.png) no-repeat;
  background-size: 100%;
  margin-bottom: 0.26rem;
  display: flex;
  align-items: center;
  padding-right: 0.45rem;
  padding-left: 0.22rem; }
  .answer_slide span {
    display: block;
    width: 0.76rem;
    height: 100%;
    background: url(../assets/a.png) no-repeat left center;
    background-size: 0.58rem 0.5rem;
    margin-right: 0.2rem; }
  .answer_slide p {
    flex:1;
    font-size: 0.32rem;
    color: #fafefd;
    font-weight: bold;
    line-height: 0.38rem; }

.answer_slide_bg {
  background-position: 0 -1rem; }

.answer_slide:nth-child(2) span {
  background: url(../assets/b.png) no-repeat left center;
  background-size: 0.44rem 0.61rem; }

.answer_slide:nth-child(3) span {
  background: url(../assets/c.png) no-repeat left center;
  background-size: 0.43rem 0.58rem; }
</style>
