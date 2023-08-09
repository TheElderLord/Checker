<script type="module" src="./scripts/valid.js"></script>
<style scoped>
@import "./styles/valid.css";
</style>

<template>
<main>
    <div id="contents">

        <div id="userforms">
          
          <div id="guide" class="bordered-container">
  
            <div class="collapse-header">
              
            </div>
  
            <div class="collapse-content">
  
              <div class="info-block" data-localized="i1">Құрметті жүйені пайдаланушылар, бұл функционал жоғары немесе жоғары оқу орнынан кейінгі білім беру ұйымдары берген дипломдардың жарамдылығын тексеруге арналған.</div>
              <div class="info-block" data-localized="i2">Бұл жүйе дипломдардың түпнұсқалығын тексеруге мүмкіндік береді.</div>
              <div class="info-block" data-localized="i3">Дипломдардың жарамдылығын тексеру ЖСН, дипломның сериясы мен нөмірі негізінде жүргізіледі. Бұл бөлім жеке басты куәландыратын құжат пен жоғары немесе жоғары оқу орнынан кейінгі білім беру ұйымы берген диплом негізінде толтырылады.</div>
  
              <div class="info-block" data-localized="i4">Тексеру алгоритмі:</div>
  
              <div class="info-block" style="font-weight: bold;" data-localized="i5">1. «ЖСН» бөліміне ЖСН енгізіңіз</div>
              <div class="info-block" data-localized="i6">«ЖСН» бөлімі Қазақстан Республикасының резиденттеріне немесе уақытша ЖСН алған резидент еместерге берілген дипломдарды тексеру кезінде ғана толтырылады. ЖСН болмаған жағдайда, бұл бөлім толтырылмайды.</div>
  
              <div class="info-block" style="font-weight: bold;" data-localized="i7">2. «Диплом сериясы» бөліміне дипломның сериясын енгізіңіз.</div>
              <div class="info-block" data-localized="i8">Дипломдар сериясы міндетті болып табылады және әріптік код түрінде ұсынылады (BD, BQ, MD, ZhB-B, ZhB, ZHOOK-M және т.б.).</div>
  
              <div class="info-block" style="font-weight: bold;" data-localized="i9">3. «Диплом нөмірі» бөліміне дипломның нөмірін енгізіңіз.</div>
              <div class="info-block" data-localized="i10">Диплом нөмірі міндетті болып табылады және 7-11 цифрдан тұратын цифрлық код түрінде ұсынылады.</div>
  
              <div class="info-block" data-localized="i11">Қазіргі уақытта жүйеде 2020-2021 оқу жылында берілген дипломдар туралы ақпарат бар. Жоғары және жоғары оқу орнынан кейінгі білім беру ұйымдары өткен жылдардағы дипломдарды цифрландыру бойынша жұмыс жүргізуде. Осыған байланысты, қазіргі уақытта жүйеде өткен жылдардағы дипломдар туралы ақпарат болмауы мүмкін. 2020-2021 оқу жылынан бұрын берілген диплом туралы ақпарат болмаған жағдайда қосымша растау үшін жоғары немесе жоғары оқу орнынан кейінгі білім беру ұйымына хабарласыуңыз қажет.</div>
             
            </div>
  
          </div>
  
          <div id="form" class="bordered-container">
  
            <div class="form-section">
              <label data-localized="iin-field">ЖСН</label>
              <input type="text" class="form-control" id="iin-field" v-model="IIN">
             
              <div class="help-block with-errors"></div>
            </div>
  
            <div class="form-section">
              <label data-localized="diploma-series-field">Диплом сериясы</label><span style="margin-left: 2px; color: red;">*</span>
              <input type="text" class="form-control" id="diploma-series-field" v-model="serialNumber">
              <div class="help-block with-errors"></div>
            </div>
  
            <div class="form-section">
              <label data-localized="diploma-number-field">Диплом нөмірі</label><span style="margin-left: 2px; color: red;">*</span>
              <input type="text" class="form-control" id="diploma-number-field" v-model="diplomNumber">
              <div class="help-block with-errors"></div>
            </div>
            
            <div class="form-buttons">
              <button type="button" class="btn btn-success" id="verify-btn" data-localized="verify-btn" @click="checkDiploma()">Тексеру</button>
            </div>
  
          </div>
  
        </div>

        <div class="cards">
          <div class="card">
            
          </div>
        </div>
  
      </div>
</main>
    
</template>

