
const { createApp } = Vue

createApp({
    data() {
        return {
            darkTheme: true,
            books: [
                {
                    title: "Meditations",
                    author: "Marcus Aurelius"
                },
                {
                    title: "The Gay Science",
                    author: "Friedrich Nietzsche"
                },
                {
                    title: "The Cat in the Hat",
                    author: "Dr. Seuss"
                }
            ],
            newBook: {
                title: "",
                author: ""
            },
            newBookError: {
                title: false,
                author: false
            },
            filter: ""
        }
    },
    methods: {
        add: function() {
            this.newBookError = {
                title: false,
                author: false
            }
            let nbErrors = 0
            if (this.newBook.title == "") {
                nbErrors++
                this.newBookError.title = true
            }
            if (this.newBook.author == "") {
                nbErrors++
                this.newBookError.author = true
            }
            if (nbErrors == 0) {
                this.books.push(this.newBook)
                this.newBook = {
                    title: "",
                    author: ""
                }
            }
        },

        remove: function() {
            this.books.pop()
        }
    },
    computed: {
        selectedBooks: function() {
            return this.books.filter(
                book => book.title.indexOf(this.filter) != -1
            )
        }
    },
    mounted() {
    }
}).mount('#app')