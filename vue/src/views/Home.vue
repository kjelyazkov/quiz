<template>
    <div>
		<Quiz />
    </div>
</template>

<script>
import Quiz from "../components/Quiz"
import api from '../services/api'
export default {
	name: 'Home',
	components: {
		Quiz
	},
	data() {
		return {
			//
		}
	},
}
</script>
