<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate';

    const sendform = {
    }

    const ValidateName = (value) => {
        if (!value) {
            return 'Name is required.';
        }

        return true;
    }

    const ValidateEmail = (value) => {
        if (!value) {
            return 'Email is required.';
        }

        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!regex.test(value)) {
            return 'Invalid email address.';
        }

        return true;
    }

    const ValidateMessage = (value) => {
        if (!value) {
            return 'Message is required.';
        }

        return true;
    }
</script>

<template>
    <h1>Contact</h1>
    <Form @submit="sendForm">
        <div class="form-control">
            <label for="name">Your name</label>
            <Field type="text"
                    id="name"
                    name="name"
                    :rules="ValidateName"/>
            <ErrorMessage class="text-red" name="name"/>
        </div>
        <div class="form-control">
            <label for="email">Your email</label>
            <Field type="email"
                    id="email"
                    name="email"
                    :rules="ValidateEmail"/>
            <ErrorMessage class="text-red" name="email"/>
        </div>
        <div class="form-control">
            <label for="message">Your message</label>
            <Field cols="30" rows="10"
                    name="message"
                    id="message"
                    as="textarea"
                    :rules="ValidateMessage"/>
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