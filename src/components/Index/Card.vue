<template lang="pug">
#card.container
  //- card(data-image='http://www.tfux.tku.edu.tw/img.php?img=450_83214392.jpg&dir=archive', link="https://www.youtube.com/watch?v=JjMz5HkF_Ls")
  //-   h1(slot='header') 戲劇公演
  //-   p(slot='content') 104學年度第20屆畢業公演
  //- card(data-image='http://www.tfux.tku.edu.tw/img.php?img=416_4e48c74a.jpg&dir=archive')
  //-   h1(slot='header') 戲劇公演
  //-   p(slot='content') 103學年度第19屆畢業公演
  //- card(data-image='http://www.tfux.tku.edu.tw/img.php?img=349_345464a8.jpg&dir=archive')
  //-   h1(slot='header') 戲劇公演
  //-   p(slot='content') 102學年度第18屆畢業公演
  //- card(data-image='http://www.tfux.tku.edu.tw/img.php?img=271_e41914eb.jpg&dir=archive')
  //-   h1(slot='header') 戲劇公演
  //-   p(slot='content') 101學年度第17屆畢業公演
  card(:data-image="`http://59.127.194.172:3030` + video.image.path", v-for="(video, index) in videos", :key="index", :link="video.link")
    h1(slot='header') {{ video.title }}
    p(slot='content') {{ video.content }}

</template>

<script>
import { mapState } from 'vuex'
import Card from './Card_add'

export default {
  name:'Card',
  components: {
    card: Card
  },
  computed: {
    ...mapState({
      videos: state => state.video.slice(-4)
    })
  }
}
</script>


<style>
#card {
  margin-bottom: 50px
}


.title {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #5D4037;
  text-align: center;
}

p {
  line-height: 1.5em;
}

h1 + p, p + p {
  margin-top: 10px;
}

.container {
  /* padding: 40px 80px; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.card-wrap {
  margin: 10px;
  -webkit-transform: perspective(800px);
          transform: perspective(800px);
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  cursor: pointer;
}
.card-wrap:hover .card-info {
  -webkit-transform: translateY(0);
          transform: translateY(0);
}
.card-wrap:hover .card-info p {
  opacity: 1;
}
.card-wrap:hover .card-info, .card-wrap:hover .card-info p {
  -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.card-wrap:hover .card-info:after {
  -webkit-transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
  -webkit-transform: translateY(0);
          transform: translateY(0);
}
.card-wrap:hover .card-bg {
  -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0.8;
}
.card-wrap:hover .card {
  -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, white 0 0 0 1px, rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset white 0 0 0 6px;
}

.card {
  position: relative;
  -webkit-box-flex: 0;
      -ms-flex: 0 0 240px;
          flex: 0 0 240px;
  width: 250px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  -webkit-transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  left:0vh;
  top: 5vh;

}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
}

.card-info {
  padding: 10px;
  position: absolute;
  bottom: 0;
  color: #fff;
  -webkit-transform: translateY(40%);
          transform: translateY(40%);
  -webkit-transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.card-info p {
  opacity: 0;
  text-shadow: black 0 2px 3px;
  -webkit-transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.card-info * {
  position: relative;
  z-index: 1;
}
.card-info:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(top, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
  background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
  background-blend-mode: overlay;
  opacity: 0;
  -webkit-transform: translateY(100%);
          transform: translateY(100%);
  -webkit-transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-info h1 {
  font-family: "Playfair Display";
  font-size: 18px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 0px 10px;
}
</style>
