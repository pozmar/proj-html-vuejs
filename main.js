const mySite = new Vue({
  el: "#root",
  data: {
    items: [
      {
        text: 'HOME',
        link: '#'
      },
      {
        text: 'ABOUT',
        link: '#',
      },
      {
        text: 'PRICES',
        link: '#',
      },
      {
        text: 'COURSES',
        link: '#',
      },
      {
        text: 'LOCATIONS',
        link: '#',
      },
      {
        text: 'BLOG',
        link: '#',
      },
    ],
    profiles: [
      {
        img:'img/testimonial-sophia.png',
        text: 'Avada driving School really helped build my confidence behind the wheel and with driving in general, and they got a first time pass! Highly recommended',
        name: 'Sophia Jones',
      },
      {
        img:'img/testimonial-harold.png',
        text: 'Avada driving School really helped build my confidence behind the wheel and with driving in general, and they got a first time pass! Highly recommended',
        name: 'Harold Friedman',
      },
      {
        img:'img/testimonial-kelly.png',
        text: 'Avada driving School really helped build my confidence behind the wheel and with driving in general, and they got a first time pass! Highly recommended',
        name: 'Kelly Mayne',
      },
      {
        img:'img/testimonial-grant.png',
        text: 'Avada driving School really helped build my confidence behind the wheel and with driving in general, and they got a first time pass! Highly recommended',
        name: 'Grant Pool',
      },
      {
        img:'img/testimonial-kate.png',
        text: 'Avada driving School really helped build my confidence behind the wheel and with driving in general, and they got a first time pass! Highly recommended',
        name: 'Kate Willis',
      },
    ],
    index: 0,
  },
  methods: {
  prev: function() {

    if(this.index === 0){
      this.index = this.profiles.length -1;
    }
    else{
      this.index--;
    }
  },
  next: function() {
    if(this.index === this.profiles.length -1){
      this.index = 0;
    }
    else{
      this.index++;
    }
  }
}
})
