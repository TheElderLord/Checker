<script type="module" src="./scripts/admin"></script>
<style scoped>
@import "./styles/admin.css";
</style>

<template>
    <main class="{}">
        <header>
            <h3>Add a record</h3>
        </header>
        <div class="container">
            <div class="title"><h3>QR Generator</h3></div>
            <div class="form">
                <div>
                <input type="text" v-model="fullname" name="fullname">
                <input type="text" v-model="iin" name="iin">
                <input type="text" v-model="birthday" name="birthday">
                <input type="text" v-model="organ_title" name="organ_title">
                <input type="text" v-model="studying_period" name="studying_period">
                <input type="text" v-model="type" name="type">
                <input type="text" v-model="serialNumber" name="serialNumber">
                <input type="text" v-model="number" name="number">

                <button @click="addRecord()" >Add a record</button>
                <button @click="pops()" >Generate QR</button>
               
            </div>
                
            </div>
            <div class="qrimage" v-if="pop_up">
                <div class="title"><h3>QR Image</h3></div>
                <div class="imageBlock">
                    <img  :src="`${img_link}`" alt="Fetched Image">
                    
                  </div>
                  <div class="butt">
                  <button @click="pops()" >Close</button>
                </div>
            </div>
            
           </div>
    </main>
</template>