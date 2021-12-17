---
layout: layouts/base.njk
pageClass: nft
templateEngineOverride: njk, md
---

<main>

<div class="nft-container">
  <div class="nft-image">
    <img src="{{openSea.image_url}}"/>
  </div>
  <div class="nft-description">
    <h1>{{openSea.name}}</h1>
    <p>{{openSea.description}}</p>
    <a href="{{openSea.permalink}}">Visit OpenSea Entry</a>
  </div>
</div>
  <!-- {{ content | safe }} -->
</main>