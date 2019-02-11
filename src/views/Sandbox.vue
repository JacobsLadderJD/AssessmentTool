<template>
<!-- <head>
	<title>Fun with Forms</title>
	<link rel="stylesheet" href="https://cdnjs.cloudfare.com/ajax/libs/bulma/0.4.4/css/bulma.min.css">
</head> -->
	<div>
		<div class="columns" id="app">
			<div class="column is-two-thirds">
				<section class="section">
					<h1 class="title">Fun with forms in Vue</h1>
					<p class="subtitle">Learn how to work with forms, including <strong>validation</strong>!
					</p>
					<hr>

					<!-- form starts here -->
					<section class="form">
						<!-- text field -->
						<div class="field">
							<label class="label">Name</label>
							<div class="control">
								<input v-model="form.name" class="input" type="text" placeholder="Text input">
								<div>
									<input v-model="form.change" class="input" type="text" placeholder="Text input">
								</div>
							</div>
						</div>
						<!-- select box -->
						<div class="field">
							<label class="label">Select Box</label>
							<div class="control">
								<div class="select">
									<select v-model="form.select_box">
										<option disabled value="">Nothing Selected</option>
										<option v-for="option in options.select" :value="option.value">
											{{ option.text }}
										</option>
									</select>
								</div>
							</div>
						</div>
						<!-- Multi-select box -->
						<div class="field">
							<label class="label">Multi-Select Box</label>
							<div class="control">
								<div class="select is-multiple">
									<select multiple v-model="form.multi_select_box">
										<option>Option 1</option>
										<option>Option 2</option>
										<option>Option 3</option>
									</select>
								</div>
							</div>
						</div>
						<!-- Checkboxes -->
						<div class="field">
							<div class="control">
								<label class="checkbox">
									<input type="checkbox" v-model="form.terms">
									I agree to the <a href="#">terms and conditions</a>
								</label>
							</div>
						</div>
						<!-- Multiple Checkboxes -->
						<div class="field">
							<label>
								<strong>Check some boxes!</strong>
							</label>
							<div class="control">
								<label class="checkbox">
									<input type="checkbox" v-model="form.multiple_checkboxes" value="promises">
									Options
								</label>
								<label class="checkbox">
									<input type="checkbox" v-model="form.multiple_checkboxes" value="testing">
									Testing
								</label>
							</div>
						</div>
						<!-- Radio Buttons -->
						<div class="field">
							<label> <strong> Yes or No? </strong> </label>
							<div class="control">
								<label class="radio">
									<input v-model="form.radio" type="radio" value="Yes">
									Yes
								</label>
								<label class="radio">
									<input v-model="form.radio" type="radio" value="No">
								</label>
							</div>
						</div>
					</section>
				</section>
			</div>

			<div class="column">
				<!-- form results -->
				<section class="section" id="results">
					<div class="box">
						<ul>
							<li v-for="(item, k) in form">
								<strong>{{ k }}:</strong> {{ item }}
							</li>
						</ul>
					</div>
				</section>
			</div>

		</div>

	</div>

</template>

<script>
export default {
	props: {

	},
	data: () => ({
    form : {
      name: 'tim',
	  change: 'obama',
	  message: 'default',
	  select_box: 'default',
	  multi_select_box: [],
	  terms: false,
	  multiple_checkboxes: [],
	  radio: '',
    },
    options: {
		select: [
			{ value: 'feature', text: "Feature Request" },
			{ value: 'bug', text: "Bug Report" },
			{ value: 'support', text: "Support" }
		]
	}
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
