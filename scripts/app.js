
function Xhr(){ /* returns cross-browser XMLHttpRequest, or null if unable */
    try {
        return new XMLHttpRequest();
    }catch(e){}
    try {
        return new ActiveXObject("Msxml3.XMLHTTP");
    }catch(e){}
    try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
    }catch(e){}
    try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
    }catch(e){}
    try {
        return new ActiveXObject("Msxml2.XMLHTTP");
    }catch(e){}
    try {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }catch(e){}
    return null;
}

var origin = window.location.origin;
var path = window.location.pathname;

var url = origin+path+'content/content.json';

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
			var xhr = Xhr();
			var self = this;
			xhr.open('GET', url);
			xhr.onload = function () {
				self.content = JSON.parse(xhr.responseText);
			};
			xhr.send();
		}
	}
});