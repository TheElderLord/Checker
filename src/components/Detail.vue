<script type="module" src="./scripts/detail"></script>
<style scoped>
@import "./styles/detail.css";
</style>

<template>

   <main>
    <div class="container">Detail
       <h1> {{ data.fullname }}</h1>
       <h1> {{ data.iin }}</h1>
       <h1> {{ data.birthday }}</h1>
       <h1> {{ data.organ_title }}</h1>
       <h1> {{ data.studying_period }}</h1>
       <h1> {{ data.type }}</h1>
       <h1> {{ data.serialNumber }}</h1>
       <h1> {{ data.number }}</h1>
    </div>
   </main>
</template>