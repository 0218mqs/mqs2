<template>
  <div class="list">
    <dl>
      <dt><img src="../../../assets/log/nav1.png" alt=""></dt>
      <dd>美食</dd>
    </dl>
    <dl>
      <dt><img src="../../../assets/log/nav2.png" alt=""></dt>
      <dd>美食</dd>
    </dl>
    <dl>
      <dt><img src="../../../assets/log/nav3.png" alt=""></dt>
      <dd>美食</dd>
    </dl>
    <dl>
      <dt><img src="../../../assets/log/nav4.png" alt=""></dt>
      <dd>美食</dd>
    </dl>
    <dl>
      <dt><img src="../../../assets/log/nav5.png" alt=""></dt>
      <dd>美食</dd>
    </dl>
    <dl>
      <dt><img src="../../../assets/log/nav6.png" alt=""></dt>
      <dd>美食</dd>
    </dl>
    <dl>
      <dt><img src="../../../assets/log/nav7.png" alt=""></dt>
      <dd>美食</dd>
    </dl>
    <dl>
      <dt><img src="../../../assets/log/nav8.png" alt=""></dt>
      <dd>美食</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.list{
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #fff;
  margin-top:0.14rem;
  dl{
    width:(100%)/4;
    display: flex;
    margin-top:0.14rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width:100%;
      display: block;
    }
  }
  dt{
    width:0.89rem;
    height:0.88rem;
    flex-shrink: 0;
    border-radius:50%;
    overflow:hidden;
  }
  dd{
    font-size:0.26rem;
    color:#666;
    line-height: 0.46rem;
  }
}

</style>
