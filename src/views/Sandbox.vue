<template>
	<Test/>
</template>

<script>
import Test from '@/components/assessmentPages/test'
import api from '@/api'
export default {
	name: "Sandbox",
	components: {
		Test
	},
	props: {

	},
	data: () => ({
		evaluations: []
  })
}

	// new Vue({
	// 	el: '#app',
	// 	data: {
	// 		form: {
	// 			name: '',
	// 		}
	// 	}
	// })
</script>
