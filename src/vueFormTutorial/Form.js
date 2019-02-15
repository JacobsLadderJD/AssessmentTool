new Vue({
  el: '#app',
  data: {
    form : {
      name: '',
      message: '',
      inquiry_type: ''
    },
    options: {
    	inquiry: [
    		{ value: 'feature', text: "Feature Request"},
    		{ value: 'bug', text: "Bug Report"},
    		{ value: 'support', text: "Support"}
    	]
    }
  }
});