/* =========================================================
     RECIPE DATABASE — the "real" recipe + pricing data source.
     In a production build this would come from an API; here it's
     realistic demo data so every screen can be fully interactive.
  ========================================================= */
  const recipesDB = {
    'choc-balls':{
      name:"Chocolate Biscuit Balls", icon:"🍫", tags:['nut-free','vegetarian'], time:"35 min",
      saved:true, savedDate:"Sunday, 30 Aug",
      desc:"A no-bake, 3-ingredient family favourite. Crush, mix, chill and roll — completely nut-free, so it's safe for the whole table.",
      ingredients:[
        {id:'ing1', name:"Arnott's Arrowroot biscuits (500g)", icon:"🍪", have:false, options:[{store:"Woolworths Ormeau",price:2.50},{store:"Coles Ormeau",price:2.75},{store:"IGA Ormeau",price:2.95}]},
        {id:'ing2', name:"Condensed milk (320g)", icon:"🥫", have:false, options:[{store:"Woolworths Ormeau",price:2.00},{store:"Coles Ormeau",price:2.20},{store:"Aldi Ormeau",price:1.85}]},
        {id:'ing3', name:"Cocoa powder (2 tbsp)", icon:"🍫", have:true, options:[{store:"Coles Ormeau",price:3.50},{store:"Woolworths Ormeau",price:3.20},{store:"IGA Ormeau",price:3.80}]}
      ],
      steps:[
        {b:"Crush", t:"1.5 packets of biscuits into pea-sized pieces; crush the remaining 0.5 packet fine and add to the bowl."},
        {b:"Mix", t:"stir in the cocoa powder, then pour in the condensed milk and stir until a thick, sticky dough forms."},
        {b:"Chill", t:"rest the dough in the fridge for 15–20 minutes so it's easier to handle."},
        {b:"Roll", t:"shape into tablespoon-sized balls, optionally rolling in extra cocoa or biscuit crumbs."},
        {b:"Set", t:"chill for 30 minutes before serving. Store cold."}
      ],
      dietTips:{"Vegan":"Swap condensed milk for coconut condensed milk to make this vegan.","Dairy-free":"Use dairy-free condensed milk — the rest of the recipe is already dairy-free.","Gluten-free":"Swap in gluten-free arrowroot biscuits — everything else stays the same."}
    },
    'chicken-pesto':{
      name:"Chicken Pesto Pasta", icon:"🍝", tags:['dairy-free','under30'], time:"25 min",
      saved:true, savedDate:"Friday, 28 Aug",
      desc:"A quick weeknight pasta — pan-seared chicken, penne and a bright basil pesto, ready in under 30 minutes.",
      ingredients:[
        {id:'p1', name:"Penne pasta (500g)", icon:"🍝", have:false, options:[{store:"Coles Ormeau",price:2.90},{store:"Woolworths Ormeau",price:2.75},{store:"IGA Ormeau",price:3.10}]},
        {id:'p2', name:"Chicken breast (500g)", icon:"🍗", have:false, options:[{store:"Woolworths Ormeau",price:8.50},{store:"Coles Ormeau",price:8.90},{store:"Aldi Ormeau",price:7.95}]},
        {id:'p3', name:"Basil pesto jar", icon:"🌿", have:true, options:[{store:"Coles Ormeau",price:4.20},{store:"Woolworths Ormeau",price:4.50},{store:"IGA Ormeau",price:4.80}]}
      ],
      steps:[
        {b:"Cook", t:"boil the penne in salted water until al dente, reserving a splash of pasta water."},
        {b:"Sear", t:"pan-fry sliced chicken breast until golden and cooked through."},
        {b:"Combine", t:"toss the drained pasta and chicken through the pesto, loosening with the reserved pasta water."}
      ],
      dietTips:{"Vegan":"Swap chicken for chickpeas and use a dairy-free pesto.","Dairy-free":"Check the pesto label — most jarred pestos contain parmesan, so look for a dairy-free version.","Gluten-free":"Use a gluten-free penne — everything else stays the same."}
    },
    'brown-butter-cookies':{
      name:"Brown Butter Cookies", icon:"🍪", tags:['vegetarian'], time:"40 min",
      saved:true, savedDate:"Wednesday, 12 Aug",
      desc:"Classic cookies with a nutty, caramelised edge from browning the butter before mixing.",
      ingredients:[
        {id:'c1', name:"Butter (250g)", icon:"🧈", have:false, options:[{store:"Woolworths Ormeau",price:5.50},{store:"Coles Ormeau",price:5.80},{store:"Aldi Ormeau",price:4.90}]},
        {id:'c2', name:"Plain flour (1kg)", icon:"🌾", have:true, options:[{store:"Coles Ormeau",price:1.60},{store:"Woolworths Ormeau",price:1.55},{store:"IGA Ormeau",price:1.80}]},
        {id:'c3', name:"Brown sugar (500g)", icon:"🍯", have:false, options:[{store:"Woolworths Ormeau",price:2.20},{store:"Coles Ormeau",price:2.35},{store:"Aldi Ormeau",price:1.95}]}
      ],
      steps:[
        {b:"Brown", t:"melt the butter in a pan until it turns golden and smells nutty, then cool slightly."},
        {b:"Mix", t:"beat the brown butter with sugar, then fold through the flour to form a dough."},
        {b:"Bake", t:"scoop onto a tray and bake at 180°C for 10–12 minutes until edges are golden."}
      ],
      dietTips:{"Vegan":"Use a plant-based butter block — the browning step works the same way.","Dairy-free":"Same swap as vegan — a dairy-free butter alternative browns similarly.","Gluten-free":"Use a 1:1 gluten-free flour blend."}
    },
    'zucchini-slice':{
      name:"Zucchini Slice", icon:"🥒", tags:['nut-free','gluten-free'], time:"45 min",
      saved:true, savedDate:"Sunday, 2 Aug",
      desc:"A savoury baked slice packed with grated zucchini, cheese and egg — great hot or cold in lunchboxes.",
      ingredients:[
        {id:'z1', name:"Zucchini (3 medium)", icon:"🥒", have:true, options:[{store:"Woolworths Ormeau",price:3.00},{store:"Coles Ormeau",price:3.20},{store:"IGA Ormeau",price:3.50}]},
        {id:'z2', name:"Eggs (6 pack)", icon:"🥚", have:false, options:[{store:"Coles Ormeau",price:4.50},{store:"Woolworths Ormeau",price:4.30},{store:"Aldi Ormeau",price:3.95}]},
        {id:'z3', name:"Tasty cheese (250g)", icon:"🧀", have:false, options:[{store:"Woolworths Ormeau",price:5.00},{store:"Coles Ormeau",price:5.30},{store:"Aldi Ormeau",price:4.40}]}
      ],
      steps:[
        {b:"Grate", t:"grate the zucchini and squeeze out excess moisture with a clean tea towel."},
        {b:"Mix", t:"whisk eggs, fold through zucchini and grated cheese."},
        {b:"Bake", t:"pour into a lined tray and bake at 180°C for 30–35 minutes until set and golden."}
      ],
      dietTips:{"Vegan":"This one's tricky to fully veganise — try a chickpea-flour ('besan') version instead of eggs.","Dairy-free":"Use a dairy-free cheese alternative.","Gluten-free":"Already gluten-free as written."}
    },
    'gnocchi':{
      name:"Gnocchi & Sauce", icon:"🥟", tags:['vegetarian'], time:"30 min",
      saved:false, match:"3 of 4 ingredients near you",
      desc:"Soft potato gnocchi tossed through a simple tomato sauce — a cosy, budget-friendly dinner.",
      ingredients:[
        {id:'g1', name:"Potato gnocchi (500g)", icon:"🥟", have:false, options:[{store:"Coles Ormeau",price:3.50},{store:"Woolworths Ormeau",price:3.30},{store:"IGA Ormeau",price:3.80}]},
        {id:'g2', name:"Tomato passata (700g)", icon:"🍅", have:true, options:[{store:"Woolworths Ormeau",price:2.10},{store:"Coles Ormeau",price:2.30},{store:"Aldi Ormeau",price:1.80}]},
        {id:'g3', name:"Parmesan (100g)", icon:"🧀", have:false, options:[{store:"Coles Ormeau",price:4.80},{store:"Woolworths Ormeau",price:5.00},{store:"IGA Ormeau",price:5.30}]}
      ],
      steps:[
        {b:"Boil", t:"cook the gnocchi in salted boiling water until they float to the top."},
        {b:"Simmer", t:"warm the passata with a pinch of salt and pepper."},
        {b:"Toss", t:"combine the gnocchi and sauce, topping with grated parmesan."}
      ],
      dietTips:{"Vegan":"Skip the parmesan or use a plant-based hard cheese.","Dairy-free":"Skip the parmesan topping — the rest is dairy-free.","Gluten-free":"Look for a gluten-free gnocchi (often rice or corn based)."}
    },
    'chocolate-cake':{
      name:"Chocolate Cake", icon:"🎂", tags:['vegetarian'], time:"55 min",
      saved:false, match:"5 of 6 ingredients near you",
      desc:"A rich, moist chocolate cake for birthdays or a Sunday bake — simple pantry ingredients, big result.",
      ingredients:[
        {id:'k1', name:"Self-raising flour (500g)", icon:"🌾", have:true, options:[{store:"Woolworths Ormeau",price:1.70},{store:"Coles Ormeau",price:1.85},{store:"IGA Ormeau",price:2.00}]},
        {id:'k2', name:"Cocoa powder (200g)", icon:"🍫", have:true, options:[{store:"Coles Ormeau",price:3.50},{store:"Woolworths Ormeau",price:3.20},{store:"IGA Ormeau",price:3.80}]},
        {id:'k3', name:"Caster sugar (1kg)", icon:"🍚", have:false, options:[{store:"Woolworths Ormeau",price:1.75},{store:"Coles Ormeau",price:1.90},{store:"Aldi Ormeau",price:1.55}]}
      ],
      steps:[
        {b:"Mix", t:"combine flour, cocoa and sugar, then whisk in eggs, milk and oil until smooth."},
        {b:"Bake", t:"pour into a lined tin and bake at 170°C for about 35 minutes."},
        {b:"Cool", t:"cool completely before icing."}
      ],
      dietTips:{"Vegan":"Replace eggs with flax eggs and milk with a plant-based milk.","Dairy-free":"Swap milk for a dairy-free alternative.","Gluten-free":"Use a 1:1 gluten-free self-raising flour blend."}
    },
    'butterfly-cupcakes':{
      name:"Butterfly Cupcakes", icon:"🧁", tags:['vegetarian'], time:"40 min",
      saved:false, match:"4 of 5 ingredients near you",
      desc:"Classic vanilla cupcakes topped with cream, cut and arranged into 'butterfly wings'.",
      ingredients:[
        {id:'b1', name:"Vanilla cake mix / flour base", icon:"🧁", have:false, options:[{store:"Woolworths Ormeau",price:3.50},{store:"Coles Ormeau",price:3.70},{store:"IGA Ormeau",price:3.90}]},
        {id:'b2', name:"Thickened cream (300ml)", icon:"🍦", have:false, options:[{store:"Coles Ormeau",price:2.80},{store:"Woolworths Ormeau",price:2.70},{store:"Aldi Ormeau",price:2.40}]},
        {id:'b3', name:"Icing sugar (500g)", icon:"🍬", have:true, options:[{store:"Woolworths Ormeau",price:1.90},{store:"Coles Ormeau",price:2.05},{store:"IGA Ormeau",price:2.20}]}
      ],
      steps:[
        {b:"Bake", t:"bake vanilla cupcakes and cool completely."},
        {b:"Cut", t:"slice a small circle from the top of each cupcake and halve it for 'wings'."},
        {b:"Fill & finish", t:"pipe whipped cream into the centre and place the wings on top, dusting with icing sugar."}
      ],
      dietTips:{"Vegan":"Use a plant-based cake mix and coconut whipped cream.","Dairy-free":"Swap thickened cream for a dairy-free whipped alternative.","Gluten-free":"Use a gluten-free cake mix."}
    },
    'spag-bol':{
      name:"Spaghetti Bolognese", icon:"🍝", tags:['dairy-free'], time:"40 min",
      saved:false, match:"Matched from your cupboard scan",
      desc:"A hearty mince and tomato sauce over spaghetti — the ingredients Chef Quest found on your shelf, plus mince.",
      ingredients:[
        {id:'s1', name:"Spaghetti pasta (500g)", icon:"🍝", have:true, options:[{store:"Coles Ormeau",price:2.60},{store:"Woolworths Ormeau",price:2.50},{store:"IGA Ormeau",price:2.90}]},
        {id:'s2', name:"Tomato passata (700g)", icon:"🍅", have:true, options:[{store:"Woolworths Ormeau",price:2.10},{store:"Coles Ormeau",price:2.30},{store:"Aldi Ormeau",price:1.80}]},
        {id:'s3', name:"Beef mince (500g)", icon:"🥩", have:false, options:[{store:"Woolworths Ormeau",price:7.00},{store:"Coles Ormeau",price:7.40},{store:"Aldi Ormeau",price:6.20}]}
      ],
      steps:[
        {b:"Brown", t:"brown the mince in a large pan with garlic and oregano."},
        {b:"Simmer", t:"add the passata and simmer for 15–20 minutes."},
        {b:"Serve", t:"toss through cooked spaghetti or serve the sauce on top."}
      ],
      dietTips:{"Vegan":"Swap mince for a plant-based mince alternative or lentils.","Dairy-free":"Already dairy-free as written.","Gluten-free":"Use a gluten-free spaghetti."}
    }
  };

  /* =========================================================
     GLOBAL STATE
  ========================================================= */
  let currentRecipeId = 'choc-balls';
  let activeSavedFilter = 'all';
  let searchTerm = '';
  let activeMealAllergy = 'all';
  const priceIndex = {}; // per-ingredient selected store index, keyed by recipeId::ingId
  const activeDietChips = new Set();
  let profile = { name:"Mary Morales", location:"Ormeau QLD 4208", allergies:[] };

  /* =========================================================
     NAVIGATION
  ========================================================= */
  function goTo(name){
    document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.dataset.screen === name));
    document.querySelectorAll('#navlist button').forEach(b => b.classList.toggle('active', b.dataset.screen === name));
    window.scrollTo({top:0, behavior:'smooth'});
  }
  document.querySelectorAll('#navlist button').forEach(btn=>{
    btn.addEventListener('click', ()=> goTo(btn.dataset.screen));
  });

  document.querySelectorAll('.tab-pill').forEach(p=>{
    p.addEventListener('click', ()=>{
      p.parentElement.querySelectorAll('.tab-pill').forEach(x=>x.classList.remove('active'));
      p.classList.add('active');
    });
  });

  /* =========================================================
     DASHBOARD — recent recipes table (clickable, from DB)
  ========================================================= */
  function renderDashboard(){
    const recent = ['choc-balls','chicken-pesto','brown-butter-cookies','zucchini-slice'];
    const tbl = document.getElementById('recentTable');
    let rows = '<thead><tr><th>Date</th><th>Item</th></tr></thead><tbody>';
    recent.forEach(id=>{
      const r = recipesDB[id];
      const tagBadge = r.tags.includes('nut-free') ? '<span class="allergy-tag">Nut-free</span>'
        : r.tags.includes('dairy-free') ? '<span class="allergy-tag">Dairy-free</span>'
        : r.tags.includes('gluten-free') ? '<span class="allergy-tag">Gluten-free</span>' : '';
      rows += `<tr onclick="openRecipe('${id}')"><td class="rlog-date">${r.savedDate || ''}</td><td>${r.name}${tagBadge}</td></tr>`;
    });
    rows += '</tbody>';
    tbl.innerHTML = rows;
  }

  /* =========================================================
     SAVED RECIPES — filtered + searchable, from DB
  ========================================================= */
  function renderSavedRecipes(){
    const list = document.getElementById('recipeList');
    const suggestList = document.getElementById('suggestList');
    const emptyNote = document.getElementById('emptyNote');
    const hint = document.getElementById('filterHint');
    list.innerHTML = ''; suggestList.innerHTML = '';

    if(profile.allergies.length && activeSavedFilter === 'all' && !searchTerm){
      hint.style.display = 'block';
      hint.textContent = 'Showing based on your profile: ' + profile.allergies.join(', ');
    } else {
      hint.style.display = 'none';
    }

    let shown = 0;
    Object.keys(recipesDB).forEach(id=>{
      const r = recipesDB[id];
      if(!r.saved) return;
      const matchesFilter = activeSavedFilter === 'all' || r.tags.includes(activeSavedFilter);
      const matchesProfile = !profile.allergies.length || activeSavedFilter !== 'all' || profile.allergies.every(a=>r.tags.includes(a));
      const matchesSearch = !searchTerm || r.name.toLowerCase().includes(searchTerm);
      if(!matchesFilter || !matchesSearch) return;
      if(activeSavedFilter === 'all' && profile.allergies.length && !matchesProfile) return;
      shown++;
      const row = document.createElement('div');
      row.className = 'recipe-row';
      row.onclick = ()=> openRecipe(id);
      row.innerHTML = `
        <div class="recipe-thumb">${r.icon}</div>
        <div class="recipe-info">
          <div class="rname">${r.name}</div>
          <div class="rmeta">Made last on ${r.savedDate} · ${r.time}</div>
        </div>
        <div class="star-btn">★</div>`;
      list.appendChild(row);
    });
    emptyNote.style.display = shown === 0 ? 'block' : 'none';

    Object.keys(recipesDB).forEach(id=>{
      const r = recipesDB[id];
      if(r.saved) return;
      if(searchTerm && !r.name.toLowerCase().includes(searchTerm)) return;
      const row = document.createElement('div');
      row.className = 'suggest-row';
      row.onclick = ()=> openRecipe(id);
      row.innerHTML = `
        <div class="recipe-thumb">${r.icon}</div>
        <div class="recipe-info">
          <div class="rname">${r.name}</div>
          <div class="rmeta">${r.match}</div>
        </div>
        <div class="arrow-ic">→</div>`;
      suggestList.appendChild(row);
    });
  }
  document.querySelectorAll('#filterRow .chip').forEach(c=>{
    c.addEventListener('click', ()=>{
      document.querySelectorAll('#filterRow .chip').forEach(x=>x.classList.remove('active'));
      c.classList.add('active');
      activeSavedFilter = c.dataset.filter;
      renderSavedRecipes();
    });
  });

  /* ---- top search bar: filters Saved Recipes, jumps there if needed ---- */
  const topSearch = document.getElementById('topSearch');
  topSearch.addEventListener('input', ()=>{
    searchTerm = topSearch.value.trim().toLowerCase();
    if(searchTerm) goTo('saved');
    renderSavedRecipes();
  });

  /* =========================================================
     SCANNER (coming soon preview)
  ========================================================= */
  let scanning = false;
  function runScan(){
    if(scanning) return;
    scanning = true;
    const line = document.getElementById('scanLine');
    const hint = document.getElementById('scanHint');
    const btn = document.getElementById('scanBtn');
    const empty = document.getElementById('resultEmpty');
    const body = document.getElementById('resultBody');
    line.classList.add('on');
    hint.textContent = 'Scanning shelf...';
    btn.textContent = 'Scanning...';
    empty.style.display = 'flex';
    body.classList.remove('on');
    setTimeout(()=>{
      line.classList.remove('on');
      hint.textContent = 'Open your cupboard and scan with a clear photo showing the ingredients clearly.';
      btn.textContent = '▶ Preview demo scan';
      empty.style.display = 'none';
      body.classList.add('on');
      scanning = false;
    }, 1700);
  }

  /* =========================================================
     MEAL PLAN — allergy-aware weekly planner, linked to DB where possible
  ========================================================= */
  const mealOptions = {
    Mon:[ {name:"Spaghetti Bolognese", icon:"🍝", tags:["dairy-free"], recipeId:'spag-bol'}, {name:"Veggie Stir-fry", icon:"🥦", tags:["nut-free","dairy-free","gluten-free"]}, {name:"Chicken Wraps", icon:"🌯", tags:["nut-free"]} ],
    Tue:[ {name:"Chicken Pesto Pasta", icon:"🍝", tags:["nut-free"], recipeId:'chicken-pesto'}, {name:"Baked Salmon & Veg", icon:"🐟", tags:["nut-free","dairy-free","gluten-free"]}, {name:"Bean Tacos", icon:"🌮", tags:["nut-free","dairy-free"]} ],
    Wed:[ {name:"Zucchini Slice", icon:"🥒", tags:["nut-free","gluten-free"], recipeId:'zucchini-slice'}, {name:"Butter Chicken", icon:"🍛", tags:["nut-free","gluten-free"]}, {name:"Gnocchi & Sauce", icon:"🥟", tags:["nut-free"], recipeId:'gnocchi'} ],
    Thu:[ {name:"Brown Butter Cookies (snack)", icon:"🍪", tags:["nut-free"], recipeId:'brown-butter-cookies'}, {name:"Veggie Frittata", icon:"🍳", tags:["nut-free","gluten-free"]}, {name:"Beef Stir-fry", icon:"🥘", tags:["dairy-free","gluten-free"]} ],
    Fri:[ {name:"Homemade Pizza Night", icon:"🍕", tags:["nut-free"]}, {name:"Fish Tacos", icon:"🌮", tags:["nut-free","dairy-free"]}, {name:"Chocolate Biscuit Balls (dessert)", icon:"🍫", tags:["nut-free"], recipeId:'choc-balls'} ],
    Sat:[ {name:"Roast Chicken & Veg", icon:"🍗", tags:["nut-free","dairy-free","gluten-free"]}, {name:"Butterfly Cupcakes (dessert)", icon:"🧁", tags:["nut-free"], recipeId:'butterfly-cupcakes'}, {name:"BBQ Skewers", icon:"🍢", tags:["nut-free","dairy-free","gluten-free"]} ],
    Sun:[ {name:"Sunday Roast", icon:"🍖", tags:["nut-free","dairy-free"]}, {name:"Chocolate Cake (dessert)", icon:"🎂", tags:["nut-free"], recipeId:'chocolate-cake'}, {name:"Slow-cooked Curry", icon:"🍛", tags:["nut-free","dairy-free","gluten-free"]} ]
  };
  const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const mealCursor = {Mon:0,Tue:0,Wed:0,Thu:0,Fri:0,Sat:0,Sun:0};
  const weekGrid = document.getElementById('weekGrid');

  function renderWeek(){
    const mpHint = document.getElementById('mealplanHint');
    if(profile.allergies.length && activeMealAllergy === 'all'){
      mpHint.style.display = 'block';
      mpHint.textContent = 'Days that don\u2019t match your profile (' + profile.allergies.join(', ') + ') are dimmed.';
    } else {
      mpHint.style.display = 'none';
    }
    weekGrid.innerHTML = '';
    days.forEach(day=>{
      const meal = mealOptions[day][mealCursor[day]];
      let matches = true;
      if(activeMealAllergy !== 'all'){ matches = meal.tags.includes(activeMealAllergy); }
      else if(profile.allergies.length){ matches = profile.allergies.every(a=>meal.tags.includes(a)); }
      const card = document.createElement('div');
      card.className = 'day-card' + (matches ? '' : ' dim');
      card.innerHTML = `
        <div class="dayname">${day}</div>
        <div class="mealicon">${meal.icon}</div>
        <div class="mealname">${meal.name}</div>
        <div class="mealtags">${meal.tags.map(t=>'<span>'+t+'</span>').join('')}</div>
        <div class="day-actions">
          <button class="swap-btn" onclick="swapMeal('${day}')">Swap meal</button>
          ${meal.recipeId ? `<button class="view-recipe-link" onclick="openRecipe('${meal.recipeId}')">View recipe →</button>` : ''}
        </div>`;
      weekGrid.appendChild(card);
    });
  }
  function swapMeal(day){
    mealCursor[day] = (mealCursor[day] + 1) % mealOptions[day].length;
    renderWeek();
  }
  document.querySelectorAll('#allergyFilterRow .chip').forEach(c=>{
    c.addEventListener('click', ()=>{
      document.querySelectorAll('#allergyFilterRow .chip').forEach(x=>x.classList.remove('active'));
      c.classList.add('active');
      activeMealAllergy = c.dataset.allergy;
      renderWeek();
    });
  });

  /* =========================================================
     RECIPE DETAIL — fully dynamic per recipe
  ========================================================= */
  function openRecipe(id){
    currentRecipeId = id;
    renderRecipeDetail(id);
    goTo('detail');
  }

  const dietTemplates = {
    "Vegan":"See the substitution note below for making this vegan.",
    "Dairy-free":"See the substitution note below for a dairy-free version.",
    "Gluten-free":"See the substitution note below for a gluten-free version."
  };

  function renderRecipeDetail(id){
    const r = recipesDB[id];
    document.getElementById('rdPhoto').textContent = r.icon;
    document.getElementById('rdTitle').textContent = r.name;
    document.getElementById('rdDesc').textContent = r.desc;
    document.getElementById('rdMeta').innerHTML = `<span>${r.time}</span>` + r.tags.map(t=>`<span>${t}</span>`).join('');

    const ingList = document.getElementById('ingList');
    ingList.innerHTML = '';
    r.ingredients.forEach(ing=>{
      const li = document.createElement('li');
      li.innerHTML = `<input type="checkbox" data-ing="${ing.id}" ${ing.have ? 'checked' : ''} onchange="updatePrice()"> ${ing.name} <span class="have-note" data-note="${ing.id}"></span>`;
      ingList.appendChild(li);
    });

    const stepsList = document.getElementById('stepsList');
    stepsList.innerHTML = '';
    r.steps.forEach(s=>{
      const li = document.createElement('li');
      li.innerHTML = `<b>${s.b}</b> — ${s.t}`;
      stepsList.appendChild(li);
    });

    activeDietChips.clear();
    document.querySelectorAll('.diet-chip').forEach(c=>c.classList.remove('active'));
    document.getElementById('dietNote').textContent = '';

    renderPriceItems();
  }

  document.querySelectorAll('.diet-chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      chip.classList.toggle('active');
      const diet = chip.dataset.diet;
      if(chip.classList.contains('active')) activeDietChips.add(diet); else activeDietChips.delete(diet);
      const r = recipesDB[currentRecipeId];
      const notes = [...activeDietChips].map(d => (r.dietTips && r.dietTips[d]) ? r.dietTips[d] : dietTemplates[d]);
      document.getElementById('dietNote').textContent = notes.join(' ');
    });
  });

  /* ---- Price comparison: per-recipe, cycle stores + live total ---- */
  const priceItemsEl = document.getElementById('priceItems');

  function renderPriceItems(){
    const r = recipesDB[currentRecipeId];
    priceItemsEl.innerHTML = '';
    r.ingredients.forEach(ing=>{
      const key = currentRecipeId + '::' + ing.id;
      if(!(key in priceIndex)) priceIndex[key] = 0;
      const box = document.querySelector('.ing-list input[data-ing="'+ing.id+'"]');
      const have = box ? box.checked : ing.have;
      const opt = ing.options[priceIndex[key]];
      const row = document.createElement('div');
      row.className = 'price-item' + (have ? ' crossed' : '');
      row.innerHTML = `
        <div class="piname">${ing.name}</div>
        <div class="picompare">
          <div class="swatch-md">${ing.icon}</div>
          <div class="pinfo">
            <div class="pstore">${have ? 'Already in your household' : 'Cheapest: ' + opt.store}</div>
            <div class="pcost ${have ? 'have' : ''}">${have ? 'On hand' : '$' + opt.price.toFixed(2)}</div>
            ${have ? '<span class="have-tag">DON&#39;T BUY</span>' : ''}
          </div>
          ${have ? '' : `<div class="store-arrows">
            <button onclick="cycleStore('${ing.id}',-1)">◀</button>
            <button onclick="cycleStore('${ing.id}',1)">▶</button>
          </div>`}
        </div>`;
      priceItemsEl.appendChild(row);
    });
    updateTotal();
  }

  function cycleStore(ingId, dir){
    const r = recipesDB[currentRecipeId];
    const ing = r.ingredients.find(i=>i.id === ingId);
    const key = currentRecipeId + '::' + ingId;
    const n = ing.options.length;
    priceIndex[key] = ((priceIndex[key] || 0) + dir + n) % n;
    renderPriceItems();
  }

  function updateTotal(){
    const r = recipesDB[currentRecipeId];
    let total = 0;
    r.ingredients.forEach(ing=>{
      const box = document.querySelector('.ing-list input[data-ing="'+ing.id+'"]');
      const have = box ? box.checked : ing.have;
      const key = currentRecipeId + '::' + ing.id;
      if(!have){ total += ing.options[priceIndex[key] || 0].price; }
    });
    document.getElementById('priceTotal').textContent = '$' + total.toFixed(2);
    r.ingredients.forEach(ing=>{
      const box = document.querySelector('.ing-list input[data-ing="'+ing.id+'"]');
      const note = document.querySelector('.have-note[data-note="'+ing.id+'"]');
      if(box && note) note.textContent = box.checked ? '✓ already have' : '';
    });
  }
  function updatePrice(){ renderPriceItems(); }

  /* =========================================================
     PROFILE — editable, feeds the filters above
  ========================================================= */
  document.querySelectorAll('#profileAllergyRow .chip').forEach(c=>{
    c.addEventListener('click', ()=> c.classList.toggle('active'));
  });

  function saveProfile(){
    profile.name = document.getElementById('profName').value.trim() || 'Mary Morales';
    profile.location = document.getElementById('profLocation').value.trim() || 'Ormeau QLD 4208';
    profile.allergies = [...document.querySelectorAll('#profileAllergyRow .chip.active')].map(c=>c.dataset.diet);

    const initial = profile.name.trim().charAt(0).toUpperCase() || 'M';
    document.getElementById('topName').textContent = profile.name;
    document.getElementById('topAvatar').textContent = initial;
    document.getElementById('profAvatar').textContent = initial;
    document.getElementById('dashGreeting').textContent = 'Welcome back, ' + profile.name.split(' ')[0] + ' 👋';

    // reset filters to "all" so the profile-based default applies
    activeSavedFilter = 'all';
    document.querySelectorAll('#filterRow .chip').forEach(x=>x.classList.toggle('active', x.dataset.filter === 'all'));
    activeMealAllergy = 'all';
    document.querySelectorAll('#allergyFilterRow .chip').forEach(x=>x.classList.toggle('active', x.dataset.allergy === 'all'));

    renderSavedRecipes();
    renderWeek();

    const msg = document.getElementById('saveMsg');
    msg.classList.add('show');
    setTimeout(()=> msg.classList.remove('show'), 2400);
  }

  /* =========================================================
     INIT
  ========================================================= */
  renderDashboard();
  renderSavedRecipes();
  renderWeek();
  renderRecipeDetail(currentRecipeId);
