<script type="module" src="./scripts/main.js"></script>
<style scoped>
@import "./styles/main.css";
</style>

<template>
   <main>
        <header>
            <h1>{{main_page}}</h1>
        </header>
        <div class="cont">
        <div class="container">
            <div class="top">
                <div class="title"><h2>{{title1}}</h2> 
                <h2>{{title2}}</h2>
                </div>
                <div class="lang">
                    <div class="kz" @click="changeLang('kz')">
                        <div class="icon"></div>
                        <div class="txt">каз</div>
                    </div>
                    <div class="rus" @click="changeLang('ru')">
                        <div class="icon"></div>
                        <div class="txt">рус</div>
                    </div>
                    <div class="eng" @click="changeLang('en')">
                        <div class="icon"></div>
                        <div class="txt">eng</div>
                    </div>
                </div>
            </div>

            <div class="menu">
                
                <div class="menu1">
                    <a href="https://dv.iac.kz/tipo-verify/">
                    <div class="icon">
                        <img src="../assets/1.png" alt="">
                    </div>
                    <div class="txt">
                       <h3> {{menu1txt}}</h3>
                    </div>
                   </a>
                        
                </div>
                <div class="menu2">
                    <router-link :to="{name:'CheckValid'}">
                    <div class="icon">
                        <img src="../assets/2.png" alt="">
                    </div>
                    <div class="txt">
                        <h3>{{menu2txt}}</h3>
                    </div>
                </router-link>
                        
                </div>
                <div class="menu3">
                    <a href="https://dv.iac.kz/login/?returnurl=%2Fgenerate-tipo%2F">
                    <div class="icon">
                        <img src="../assets/3.png" alt="">
                    </div>
                    <div class="txt">
                        <h3> {{menu3txt}}</h3>
                    </div>
                 </a>
                        
                </div>
                <div class="menu4">
                    <a href="https://dv.iac.kz/login/?returnurl=%2Fgenerate-tipo%2F">
                    <div class="icon">
                        <img src="../assets/4.png" alt="">
                    </div>
                    <div class="txt">
                        <h3> {{menu4txt}}</h3>
                    </div>
                    </a>
                        
                </div>
            </div>
            
        </div>
        <footer>
            АО ИАЦ, 2023
        </footer>
    </div>
   </main>
</template>