<script>
</script>

<template>
    <h1></h1>
    <form action="">
        <div class="form-control">
            <label for="name">Your name</label>
            <input type="text">
        </div>
        <div class="form-control">
            <label for="email">Your email</label>
            <input type="email">
        </div>
        <div class="form-control">
            <label for="message">Your message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">Send</button>
    </form>
</template>

<style scoped>
.form-control {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

input, textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
}
</style>