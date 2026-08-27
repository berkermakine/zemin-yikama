'use client';

import {FormEvent,useEffect,useMemo,useState} from 'react';

type Product={id:number;slug:string;name:string;sku:string;category:string;compatibility:string;price:number;stock:number;image:number;active:boolean;description:string};
type CartLine={id:number;qty:number};
type Order={id:string;customer:string;contact:string;address:string;total:number;status:string;createdAt:string};

const defaults:Product[]=[
 {id:1,slug:'firca-diski-17-orta-sert',name:'Fırça Diski – 17” Orta Sert',sku:'FD17-OS',category:'Fırçalar',compatibility:'Nilfisk SC500 / SC550',price:1250,stock:34,image:0,active:true,description:'Günlük zemin temizliği için orta sertlikte profesyonel fırça diski.'},
 {id:2,slug:'silecek-lastigi-on-890mm',name:'Silecek Lastiği – Ön 890 mm',sku:'SL-890-O',category:'Silecek Lastikleri',compatibility:'Tennant T300 / T500',price:620,stock:12,image:1,active:true,description:'Temiz ve iz bırakmayan su toplama performansı için dayanıklı ön lastik.'},
 {id:3,slug:'vakum-motoru-36v-550w',name:'Vakum Motoru – 36V 550W',sku:'VM-36V-550',category:'Vakum Motorları',compatibility:'Nilfisk BA / CA Serisi',price:3750,stock:8,image:2,active:true,description:'Profesyonel zemin yıkama makineleri için kompakt vakum motoru.'},
 {id:4,slug:'aku-sarj-cihazi-24v-15a',name:'Akü Şarj Cihazı – 24V 15A',sku:'SC-24V-15A',category:'Aküler & Şarj',compatibility:'Tüm 24V akü grupları',price:4950,stock:15,image:3,active:true,description:'Makine akülerinin düzenli şarj döngüsü için endüstriyel şarj cihazı.'},
 {id:5,slug:'emis-hortumu-38mm',name:'Emiş Hortumu – 38 mm',sku:'EH-38',category:'Hortumlar',compatibility:'Nilfisk / Tennant / Hako',price:480,stock:22,image:4,active:true,description:'Esnek, dayanıklı ve profesyonel kullanıma uygun emiş hortumu.'},
 {id:6,slug:'vakum-filtresi-polyester',name:'Vakum Filtresi – Polyester',sku:'VF-POL',category:'Filtreler',compatibility:'Nilfisk BA 551 / BA 611',price:350,stock:19,image:5,active:true,description:'Toz ve kir tutma verimini destekleyen değiştirilebilir polyester filtre.'},
 {id:7,slug:'jel-aku-12v-105ah',name:'Jel Akü – 12V 105Ah',sku:'AKU-12-105',category:'Aküler & Şarj',compatibility:'Uyumluluk teklif sırasında teyit edilir',price:6800,stock:6,image:6,active:true,description:'Zemin temizleme makineleri için bakım gereksinimi düşük jel akü.'},
 {id:8,slug:'pad-tutucu-17',name:'Pad Tutucu – 17”',sku:'PT-17',category:'Pad Tutucular',compatibility:'Nilfisk / Tennant',price:950,stock:27,image:7,active:true,description:'Profesyonel yüzey bakım pedleriyle kullanılabilen sağlam pad tutucu.'},
];

const money=(n:number)=>new Intl.NumberFormat('tr-TR',{style:'currency',currency:'TRY'}).format(n);
const load=<T,>(key:string,fallback:T):T=>{if(typeof window==='undefined')return fallback;try{return JSON.parse(localStorage.getItem(key)||'null')||fallback}catch{return fallback}};
const save=(key:string,value:unknown)=>{if(typeof window!=='undefined')localStorage.setItem(key,JSON.stringify(value))};
const partClass=(image:number)=>`partPhoto part${Math.abs(image)%8}`;

function useShopData(){
 const [products,setProducts]=useState<Product[]>(defaults);
 const [cart,setCart]=useState<CartLine[]>([]);
 const [orders,setOrders]=useState<Order[]>([]);
 useEffect(()=>{setProducts(load('zy-shop-products',defaults));setCart(load('zy-shop-cart',[]));setOrders(load('zy-shop-orders',[]))},[]);
 const updateProducts=(v:Product[])=>{setProducts(v);save('zy-shop-products',v)};
 const updateCart=(v:CartLine[])=>{setCart(v);save('zy-shop-cart',v)};
 const updateOrders=(v:Order[])=>{setOrders(v);save('zy-shop-orders',v)};
 return{products,cart,orders,updateProducts,updateCart,updateOrders};
}

export default function ShopSystem({page,slug}:{page:'shop'|'product'|'cart'|'checkout'|'admin';slug?:string}){
 const data=useShopData();
 const cartCount=data.cart.reduce((s,x)=>s+x.qty,0);
 const add=(id:number)=>{const old=data.cart.find(x=>x.id===id);data.updateCart(old?data.cart.map(x=>x.id===id?{...x,qty:x.qty+1}:x):[...data.cart,{id,qty:1}])};
 if(page==='admin')return <Admin {...data}/>;
 if(page==='cart'||page==='checkout')return <CartCheckout checkout={page==='checkout'} {...data}/>;
 if(page==='product')return <ProductDetail product={data.products.find(x=>x.slug===slug)||data.products[0]} add={add} cartCount={cartCount}/>;
 return <Shop products={data.products.filter(x=>x.active)} add={add} cart={data.cart} cartCount={cartCount}/>;
}

function Shop({products,add,cart,cartCount}:{products:Product[];add:(id:number)=>void;cart:CartLine[];cartCount:number}){
 const [category,setCategory]=useState('Tümü');const [query,setQuery]=useState('');
 const categories=['Tümü',...Array.from(new Set(products.map(x=>x.category)))];
 const shown=products.filter(x=>(category==='Tümü'||x.category===category)&&(`${x.name} ${x.sku}`.toLowerCase().includes(query.toLowerCase())));
 const cartProducts=cart.map(x=>({line:x,p:products.find(p=>p.id===x.id)})).filter(x=>x.p);
 const total=cartProducts.reduce((s,x)=>s+(x.p?.price||0)*x.line.qty,0);
 return <div className="shopPage">
  <section className="shopHero"><div><small>ORİJİNAL VE UYUMLU PARÇA ÇÖZÜMLERİ</small><h1>YEDEK PARÇA SHOP</h1><p>Zemin yıkama makineleriniz için güvenilir yedek parçaları keşfedin.</p><div className="shopSearch"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Ürün adı veya koduyla ara"/><button>ARA</button></div></div><div className="heroPart"><span/></div></section>
  <div className="shopBar"><b>{shown.length} ürün listeleniyor</b><a href="/sepet">Sepetim <span>{cartCount}</span></a></div>
  <section className="shopBody"><main><div className="categoryChips">{categories.map(x=><button className={category===x?'active':''} onClick={()=>setCategory(x)} key={x}>{x}</button>)}</div><div className="productGrid">{shown.map(p=><ProductCard key={p.id} p={p} add={add}/>)}</div></main><aside className="cartPreview"><div className="cartHead"><h2>Sepetim ({cartCount})</h2><a href="/sepet">Görüntüle →</a></div>{cartProducts.length?cartProducts.slice(0,4).map(({line,p})=><div className="miniCart" key={line.id}><div className={partClass(p!.image)}/><div><b>{p!.name}</b><span>{line.qty} × {money(p!.price)}</span></div></div>):<p>Sepetiniz henüz boş.</p>}<div className="cartTotal"><span>Ara toplam</span><b>{money(total)}</b></div><a className="shopPrimary" href="/sepet">SEPETİ GÖRÜNTÜLE</a></aside></section>
 </div>
}

function ProductCard({p,add}:{p:Product;add:(id:number)=>void}){return <article className="shopCard"><a href={`/shop/urun/${p.slug}`} className={partClass(p.image)}/><small>{p.category}</small><h2><a href={`/shop/urun/${p.slug}`}>{p.name}</a></h2><p>Uyumlu: {p.compatibility}</p><span className={p.stock>0?'stock in':'stock out'}>{p.stock>0?'Stokta':'Tükendi'}</span><strong>{money(p.price)}</strong><button disabled={!p.stock} onClick={()=>add(p.id)}>🛒 SEPETE EKLE</button></article>}

function ProductDetail({product:p,add,cartCount}:{product:Product;add:(id:number)=>void;cartCount:number}){return <section className="productDetail"><div className={partClass(p.image)}/><article><small>{p.category} · {p.sku}</small><h1>{p.name}</h1><p>{p.description}</p><dl><div><dt>Uyumluluk</dt><dd>{p.compatibility}</dd></div><div><dt>Stok</dt><dd>{p.stock} adet</dd></div></dl><strong>{money(p.price)}</strong><button className="shopPrimary" onClick={()=>add(p.id)}>SEPETE EKLE</button><a href="/sepet">Sepete git ({cartCount}) →</a><em>Kesin uyumluluk sipariş öncesinde makine modeli üzerinden doğrulanmalıdır.</em></article></section>}

function CartCheckout({checkout,products,cart,orders,updateCart,updateOrders}:{checkout:boolean;products:Product[];cart:CartLine[];orders:Order[];updateCart:(v:CartLine[])=>void;updateOrders:(v:Order[])=>void}){
 const lines=cart.map(x=>({line:x,p:products.find(p=>p.id===x.id)})).filter(x=>x.p);const total=lines.reduce((s,x)=>s+x.p!.price*x.line.qty,0);const [done,setDone]=useState('');
 const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();const f=new FormData(e.currentTarget);const id=`ZY-${Date.now().toString().slice(-7)}`;updateOrders([{id,customer:String(f.get('customer')),contact:String(f.get('contact')),address:String(f.get('address')),total,status:'Yeni sipariş',createdAt:new Date().toISOString()},...orders]);updateCart([]);setDone(id)};
 if(done)return <section className="orderDone"><b>✓</b><h1>Siparişiniz oluşturuldu.</h1><p>Sipariş numaranız: <strong>{done}</strong></p><a href="/shop">SHOP’A DÖN</a></section>;
 return <section className="cartPage"><div><small>{checkout?'TESLİMAT VE SİPARİŞ':'ALIŞVERİŞ SEPETİ'}</small><h1>{checkout?'Siparişinizi tamamlayın':'Sepetiniz'}</h1>{!checkout?lines.map(({line,p})=><article className="cartRow" key={line.id}><div className={partClass(p!.image)}/><div><h2>{p!.name}</h2><p>{p!.sku}</p></div><input type="number" min="1" value={line.qty} onChange={e=>updateCart(cart.map(x=>x.id===line.id?{...x,qty:Number(e.target.value)}:x))}/><strong>{money(p!.price*line.qty)}</strong><button onClick={()=>updateCart(cart.filter(x=>x.id!==line.id))}>×</button></article>):<form className="checkoutForm" onSubmit={submit}><label>Ad Soyad / Firma<input name="customer" required/></label><label>Telefon veya e-posta<input name="contact" required/></label><label className="wide">Teslimat adresi<textarea name="address" rows={4} required/></label><label className="wide">Ödeme yöntemi<select><option>Havale / EFT</option><option>Sipariş sonrası iletişim</option></select></label><button className="shopPrimary" type="submit">SİPARİŞİ OLUŞTUR</button></form>}</div><aside><h2>Sipariş Özeti</h2>{lines.map(x=><p key={x.line.id}><span>{x.p!.name} × {x.line.qty}</span><b>{money(x.p!.price*x.line.qty)}</b></p>)}<div><span>Toplam</span><strong>{money(total)}</strong></div>{!checkout&&<a className="shopPrimary" href="/odeme">SİPARİŞİ TAMAMLA</a>}</aside></section>
}

function Admin({products,orders,updateProducts}:{products:Product[];orders:Order[];updateProducts:(v:Product[])=>void}){
 const empty:Product={id:0,slug:'',name:'',sku:'',category:'Fırçalar',compatibility:'',price:0,stock:0,image:0,active:true,description:''};
 const [draft,setDraft]=useState<Product>(empty);const [editing,setEditing]=useState(false);const active=products.filter(x=>x.active).length;const low=products.filter(x=>x.stock<10).length;
 const submit=(e:FormEvent)=>{e.preventDefault();const item={...draft,id:draft.id||Date.now(),slug:draft.slug||draft.name.toLocaleLowerCase('tr-TR').replace(/[^a-z0-9çğıöşü]+/g,'-').replace(/^-|-$/g,'')};updateProducts(draft.id?products.map(x=>x.id===draft.id?item:x):[item,...products]);setDraft(empty);setEditing(false)};
 return <div className="adminApp"><aside className="adminSide"><div className="adminBrand">zemin<span>yıkama.com</span></div>{['Kontrol Paneli','Siparişler','Ürünler','Kategoriler','Stok','Ayarlar'].map((x,i)=><a className={i===2?'active':''} href={`#${x}`} key={x}>{['⌂','▣','▤','◇','▦','⚙'][i]} {x}</a>)}<a href="/shop">← Shop’a dön</a></aside><main className="adminMain"><header><div><small>KONTROL PANELİ / ÜRÜNLER</small><h1>SHOP YÖNETİMİ</h1></div><button onClick={()=>{setDraft(empty);setEditing(true)}}>＋ YENİ ÜRÜN EKLE</button></header><section className="adminStats"><article><span>Toplam Ürün</span><b>{products.length}</b></article><article><span>Düşük Stoklu</span><b>{low}</b></article><article><span>Yeni Sipariş</span><b>{orders.filter(x=>x.status==='Yeni sipariş').length}</b></article><article><span>Aktif Ürün</span><b>{active}</b></article></section><section className="adminWorkspace"><div className="adminTable"><div className="tableTitle"><h2>Ürünler</h2><span>{products.length} kayıt</span></div>{products.map(p=><article key={p.id}><div className={partClass(p.image)}/><div><b>{p.name}</b><small>{p.sku}</small></div><span>{p.category}</span><strong className={p.stock<10?'low':''}>{p.stock}</strong><b>{money(p.price)}</b><em className={p.active?'on':'off'}>{p.active?'Aktif':'Pasif'}</em><button onClick={()=>{setDraft(p);setEditing(true)}}>✎</button><button onClick={()=>updateProducts(products.filter(x=>x.id!==p.id))}>×</button></article>)}</div>{editing&&<form className="adminEdit" onSubmit={submit}><h2>{draft.id?'Ürün Düzenle':'Yeni Ürün Ekle'}</h2><label>Ürün adı<input value={draft.name} onChange={e=>setDraft({...draft,name:e.target.value})} required/></label><label>SKU<input value={draft.sku} onChange={e=>setDraft({...draft,sku:e.target.value})} required/></label><label>Kategori<input value={draft.category} onChange={e=>setDraft({...draft,category:e.target.value})} required/></label><div><label>Stok<input type="number" value={draft.stock} onChange={e=>setDraft({...draft,stock:Number(e.target.value)})}/></label><label>Fiyat<input type="number" value={draft.price} onChange={e=>setDraft({...draft,price:Number(e.target.value)})}/></label></div><label>Uyumluluk<input value={draft.compatibility} onChange={e=>setDraft({...draft,compatibility:e.target.value})}/></label><label>Görsel<select value={draft.image} onChange={e=>setDraft({...draft,image:Number(e.target.value)})}>{defaults.map((x,i)=><option value={i} key={i}>Yedek parça görseli {i+1}</option>)}</select></label><label>Açıklama<textarea rows={4} value={draft.description} onChange={e=>setDraft({...draft,description:e.target.value})}/></label><label className="adminCheck"><input type="checkbox" checked={draft.active} onChange={e=>setDraft({...draft,active:e.target.checked})}/> Ürün yayında</label><div className="editActions"><button type="button" onClick={()=>setEditing(false)}>İptal</button><button type="submit">Kaydet</button></div></form>}</section></main></div>
}
