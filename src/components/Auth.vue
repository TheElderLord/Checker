<script src="./scripts/auth"> </script>
<style scoped>
@import url('./styles/auth.css');
</style>

<template>
    <main>
        <div class="container">
            <div class="header">Вход в систему</div>
            <div class="form">
                <label for="login">Имя пользователя</label>
                <input type="text" id="login" placeholder="Логин" v-model="login">
                <label for="password">Пароль</label>
                <input type="password" id="password" placeholder="Пароль" v-model="password">
                <button @click="auth()">Войти</button>
            </div>
        </div>
    </main>    
</template>