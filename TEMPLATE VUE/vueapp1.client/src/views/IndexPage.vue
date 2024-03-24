<template>
Hello World    
</template>

<script setup>
    import axios from "axios"
    axios.get("http://localhost:5070/Index").then(response => {
        console.log(response)
    })
</script>