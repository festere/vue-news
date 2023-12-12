<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import { object, string } from 'yup';

    const sendform = {
    }

    const schema = object({
        name: string().required(),
        email: string().required().email(),
        message: string().required().min(20),
    })
</script>

<template>
    <h1>Contact</h1>
    <Form @submit="sendForm" :validation-schema="schema">
        <div class="form-control">
            <label for="name">Your name</label>
            <Field type="text"
                    id="name"
                    name="name"/>
            <ErrorMessage class="text-red" name="name"/>
        </div>
        <div class="form-control">
            <label for="email">Your email</label>
            <Field type="email"
                    id="email"
                    name="email"/>
            <ErrorMessage class="text-red" name="email"/>
        </div>
        <div class="form-control">
            <label for="message">Your message</label>
            <Field cols="30" rows="10"
                    name="message"
                    id="message"
                    as="textarea"/>
            <ErrorMessage class="text-red" name="message"/>
        </div>

        <button type="submit">Send</button>
    </Form>
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

    .text-red{
        color: red;
    }
</style>