<template>
    <div class="inline-block px-4 py-2 tracking-widest leading-5 rounded-md cursor-pointer bg-gray-600 text-white hover:bg-gray-700">
        {{ title }}
    </div>
</template>

<script>
export default {
    name: "ActionButton",
    props: {
        title: {
            type: String,
            default: 'Action'
        }
    }
}
</script>

<style>

</style>