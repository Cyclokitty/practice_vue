var app = new Vue({
  el: '#app',
  data: {
    message: 'hello, fairest world!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
});

// conditionals and loops
// in the console type app3.seen = false
// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// });

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true,
    message: 'Click me and I disappear....',
  },
  methods: {
    removeText: function() {
      this.message = ' ';
    }
  }
});

// displaying items from an array

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: "Learn advanced JS"},
      {text: "Build a webpage with Vue.js"},
      {text: "Finish my CS50 homework"},
      {text: "Take over the world!"}
    ]
  }
});

// using an on click handler
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Cyclokitty is an awesome coder.'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

// grabbing input info and displaying it with v-modal
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Cyclokitty has soulful eyes.'
  }
});

// components are reusable
// first register a component
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      {text: 'Popcorn kernels'},
      {text: 'Red grapefruit'},
      {text: 'Spaghetti fixings'},
      {text: 'Coffee'}
    ]
  }
});
