Vue.component('todo-item', {
    props: ["prop"],
    template: '<li>{{prop.value}}</li>'
})

var app7 = new Vue({
    el: '#app7',
    data: {
        arrayList: [
            {id: 0, value: "Ted"},
            {id: 1, value: "Sky"},
            {id: 2, value: "Th000"}
        ]
    }
})