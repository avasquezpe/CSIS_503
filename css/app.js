let cart=[];
const productsDiv=document.getElementById('products');
CONFIG.products.forEach(p=>{
let div=document.createElement('div');div.className='product';
div.innerHTML=`<h3>${p.name}</h3><p>${p.origin}</p><b>$${p.price}</b><br><button onclick="add(${p.id})">Agregar</button>`;
productsDiv.appendChild(div);
});
function add(id){let p=CONFIG.products.find(x=>x.id===id);cart.push(p);document.getElementById('cartTotal').innerText='Total: $'+cart.reduce((s,x)=>s+x.price,0).toFixed(2);}
