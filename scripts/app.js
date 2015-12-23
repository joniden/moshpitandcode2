
/*var content = {
   logo: "images/moshpitandcode_white.svg",
   profilepic: 'images/me.jpg'
};*/

var url = 'http://moshpitandcode.com/content/content.json';

new Vue({
	el: '#app',
	data: {
		content : null
	},
	created: function () {
		this.fetchData();
	},

	filters: {
		p: function (v) {
			if(typeof v != 'undefined'){
				v = v.replace(/\n{2}/g, '</p><p>');
				v = v.replace(/\n/g, '<br />');
				v = '<p>' + v + '</p>';
			}
			return v;
		}
	},
	methods: {
		fetchData: function () {
			var xhr = new XMLHttpRequest();
			var self = this;
			xhr.open('GET', url);
			xhr.onload = function () {
				self.content = JSON.parse(xhr.responseText);
			};
			xhr.send();
		}
	}
});