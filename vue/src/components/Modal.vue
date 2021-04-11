<template>
    <div class="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 grid place-items-center">
        <div class="bg-gray-100 rounded-md flex flex-col px-16 py-8 border gap-4 relative" :class="type=='success' ? 'border-green-400' : 'border-red-400' ">
            <div v-if="exit" class="absolute top-0 right-0 h-6 w-6 m-2 cursor-pointer" @click="des()">
                <i class="fas fa-times"></i>
            </div>

            <div :class="type=='success' ? 'text-green-500' : 'text-red-500'">
                {{ message }}
            </div>

            <div v-if="action" class="text-center">
                <ActionButton :title="action_title"/>
            </div>
        </div>
    </div>
</template>

<script>
import ActionButton from '../components/ActionButton'

export default {
    name: "Modal",
    components: {
        ActionButton
    },
    props: {
        type: {
            type: String,
            default: 'success'
        },
        message: {
            type: String,
            required: true
        },
        action: {
            type: Boolean,
            default: true
        },
        action_title: {
            type: String,
            default: 'OK!'
        },
        exit: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        des() {
            this.$el.parentNode.remove(this.$el);
        }
    }
}
</script>

<style>

</style>