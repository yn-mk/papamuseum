Vue.component('Header1',{
  template: `<div><h1>パパの<br>フリマ博物館<span>Papa's Museum<br>everything from flea markets</span></h1><div class="lang-menu"><ul><li>JP</li><li>DE</li></ul></div></div>`
})

var app = new Vue({
    el: '#app',
    data: {
      preview: [],
        items: [
          {
            id: 1,
            categories: ['plate'],
            name: 'Sunflower plate',
            date: 'June 1, 2022',
            img: 'img/1.png',
            description: '',
            display: true
        },
        {
            id: 2,
            categories: ['plate'],
            name: 'Flower plate',
            date: '',
            img: 'img/2.png',
            description: '',
            display: true
        },
        {
            id: 3,
            categories: ['ornament'],
            name: 'Couple of Ducks',
            date: '',
            img: 'img/3.png',
            description: '',
            display: true
        },
        {
            id: 4,
            categories: ['beermug'],
            name: 'Beer Mug',
            date: '',
            img: 'img/4.png',
            description: '',
            display: true
        },
        {
          id: 5,
          categories: ['plate'],
          name: 'Sunflower plate',
          date: 'June 1, 2022',
          img: 'img/5.png',
          description: '',
            display: true
      },
      {
          id: 6,
          categories: ['beermug'],
          name: 'Flower plate',
          date: '',
          img: 'img/6.png',
          description: '',
            display: true
      },
      {
          id: 7,
          categories: ['ornament'],
          name: 'Couple of Ducks',
          date: '',
          img: 'img/7.png',
          description: '',
            display: true
      },
      {
          id: 8,
          categories: ['beermug'],
          name: 'Beer Mug',
          date: '',
          img: 'img/8.png',
          description: '',
          display: true
      },
      {
        id: 9,
        categories: ['beermug'],
        name: 'Sunflower plate',
        date: 'June 1, 2022',
        img: 'img/9.png',
        description: '',
            display: true
      },
      {
          id: 10,
          categories: ['beermug'],
          name: 'Flower plate',
          date: '',
          img: 'img/10.png',
          description: '',
            display: true
      },
      {
          id: 11,
          categories: ['plate'],
          name: 'Couple of Ducks',
          date: '',
          img: 'img/11.png',
          description: '',
            display: true
      },
      {
          id: 12,
          categories: ['plate'],
          name: 'Beer Mug',
          date: '',
          img: 'img/12.png',
          description: '',
            display: true
      },
      {
        id: 13,
        categories: ['plate'],
        name: 'Sunflower plate',
        date: 'June 1, 2022',
        img: 'img/13.png',
        description: '',
            display: true
      },
      {
          id: 14,
          categories: ['plate'],
          name: 'Flower plate',
          date: '',
          img: 'img/14.png',
          description: '',
            display: true
      },
      {
          id: 15,
          categories: ['plate'],
          name: 'Couple of Ducks',
          date: '',
          img: 'img/15.png',
          description: '',
            display: true
      },
      {
          id:16,
          categories: ['plate'],
          name: 'Beer Mug',
          date: '',
          img: 'img/16.png',
          description: '',
          display: true
      }
        ],
      category_lists: ['plate','beermug','cup','glass','ornament']
    },
    methods: {
      find_categories: function(){
        var items = this.items;
        this.$nextTick(() => {
        var preview = this.preview;
        if(preview.length > 0) {

          for (var i = 0; i < items.length; i++) {
            var categories = items[i].categories;
            for (var j = 0; j < preview.length; j++) {
              if(categories.indexOf(preview[j]) >= 0){
                items[i].display = true;
                break;
              } else {
                items[i].display = false;
              }
            }
            
          }
        } else {
          for (var i = 0; i < items.length; i++) {
            var categories = items[i].categories;
            items[i].display = true;
          }
        }
      });
      }
    }
    
  })
  

