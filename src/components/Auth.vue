<script src="./scripts/auth"> </script>
<style scoped>
@import url('./styles/auth.css');
</style>

<template>
    <main>
        <div class="container">
            <div class="header">{{lang === 'rus' ? 'Вход в систему' : lang === 'kz' ? 'Жүйеге кіру' : 'Log in to system'}}</div>
            <div class="form">
                <label for="login">{{lang === 'rus' ? 'Имя пользователя' : lang === 'kz' ? 'Тұтынушы аты' : 'Username'}}</label>
                <input type="text" id="login" placeholder="Логин" v-model="login">
                <label for="password">{{lang === 'rus' ? 'Пароль' : lang === 'kz' ? 'Құпиясөз' : 'Password'}}</label>
                <input type="password" id="password" placeholder="Пароль" v-model="password">
                <button @click="auth()">{{lang === 'rus' ? 'Войти' : lang === 'kz' ? 'Кіру' : 'Log in'}}</button>
            </div>
        </div>
    </main>    
</template>