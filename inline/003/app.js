const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			lastName: "",
		};
	},
	watch: {
		counter(value) {
			if (value > 50) {
				const that = this;
				setTimeout(() => {
					that.counter = 0;
				}, 2000)
			}
		},
		// name(value) {
		// 	if (value === '') this.fullname = '';
		// 	else this.fullname = value + ' ' + this.lastName;
		// },
		// lastName(value) {
		// 	if (value === '') this.fullname = '';
		// 	else this.fullname = this.name + ' ' + value;
		// },
	},
	computed: {
		fullname() {
			if (this.name === '' || this.lastName === '') {
				return '';
			} else {
				return this.name + ' ' + this.lastName;
			}
		},
	},
	methods: {

		increaseCounter(num) {
			this.counter += num;
		},
		decreaseCounter(num) {
			this.counter -= num;
		},
		resetNameInput() {
			this.name = '';
		},
	},
});

app.mount('#events');
