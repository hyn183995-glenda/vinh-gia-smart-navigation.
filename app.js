(function(){
"use strict";
const D=window.DU_LIEU,$=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const safeUrl=u=>/^https?:\/\//i.test(u)?u:"#";
const byId=id=>D.diem.find(d=>d.id===id);
let sel=null,userPos=null,filter="all",markers={};

$("sub").textContent=D.donVi+" · "+D.xa;
document.title=D.tenHeThong+" – "+D.donVi;

/* ---------- bản đồ ---------- */
const map=L.map("map",{zoomControl:true,attributionControl:true});
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap"}).addTo(map);
const lg=L.layerGroup().addTo(map);

function mk(d){
  const t=D.loai[d.loai];
  return L.divIcon({className:"",iconSize:[0,0],html:`<div class="pw ${sel===d.id?"sel":""}"><div class="pin" style="--c:${esc(t.mau)}"><i>${esc(t.icon)}</i></div><div class="lbl">${esc(d.ngan)}</div></div>`});
}
function draw(list){
  lg.clearLayers();markers={};
  list.forEach(d=>{
    if(d.truc&&list.includes(byId(d.truc))){const p=byId(d.truc);
      L.polyline([[p.lat,p.lng],[d.lat,d.lng]],{color:D.loai[p.loai].mau,weight:3,opacity:.7,dashArray:"4 9"}).addTo(lg)}
  });
  list.forEach(d=>{markers[d.id]=L.marker([d.lat,d.lng],{icon:mk(d),title:d.ten,keyboard:true}).on("click",()=>open(d.id)).addTo(lg)});
}
function fit(list){
  if(list.length>1)map.fitBounds(list.map(d=>[d.lat,d.lng]),{padding:[60,60],maxZoom:15});
  else if(list.length)map.setView([list[0].lat,list[0].lng],16);
}

/* ---------- tiện ích ---------- */
const km=(a,b)=>{const r=x=>x*Math.PI/180,dl=r(b.lat-a.lat),dg=r(b.lng-a.lng);
  const h=Math.sin(dl/2)**2+Math.cos(r(a.lat))*Math.cos(r(b.lat))*Math.sin(dg/2)**2;return 12742*Math.asin(Math.sqrt(h))};
function trangThai(d){
  const n=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Ho_Chi_Minh"}));
  if(!D.ngayHoc.includes(n.getDay()))return{on:false,t:"Hôm nay nghỉ"};
  const m=n.getHours()*60+n.getMinutes(),p=s=>{const[h,i]=s.split(":");return +h*60+ +i};
  const ok=d.khung.some(k=>{const g=D.gio[k];return [g.sang,g.chieu].some(w=>m>=p(w[0])&&m<=p(w[1]))});
  return ok?{on:true,t:"Đang trong giờ học"}:{on:false,t:"Ngoài giờ học"};
}
const distTxt=d=>userPos?` · ≈ ${km(userPos,d).toFixed(1)} km`:"";
const dirUrl=d=>`https://www.google.com/maps/dir/?api=1&destination=${d.lat},${d.lng}&travelmode=driving`;
const thumb=(d,c)=>`<div class="${c}" style="background-image:url('${esc(d.anh)}')"></div>`;

/* ---------- bộ lọc ---------- */
const aps=[...new Set(D.diem.map(d=>d.ap))];
$("ap").innerHTML='<option value="">🎒 Con em học tại ấp…</option>'+aps.map(a=>`<option>${esc(a)}</option>`).join("");
const CH=[["all","Tất cả"],["near","📍 Gần tôi nhất"],...Object.keys(D.loai).map(k=>[k,D.loai[k].ten])];
$("chips").innerHTML=CH.map(([k,t])=>`<button class="chip" data-k="${esc(k)}" aria-pressed="${k==="all"}">${esc(t)}</button>`).join("");
function pressed(k){document.querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed",c.dataset.k===k))}

$("chips").addEventListener("click",e=>{
  const b=e.target.closest(".chip");if(!b)return;
  $("ap").value="";filter=b.dataset.k;pressed(filter);
  if(filter==="near"){locate();return}
  sel=null;history.replaceState(null,"","#");list();
});
$("ap").addEventListener("change",e=>{filter=e.target.value?"ap:"+e.target.value:"all";pressed(e.target.value?"":"all");sel=null;list()});

function locate(){
  const p=$("priv");p.hidden=false;
  p.textContent="Vị trí của bạn chỉ được xử lý ngay trên thiết bị này, không gửi hay lưu ở đâu.";
  if(!navigator.geolocation){p.textContent="Thiết bị không hỗ trợ định vị.";filter="all";pressed("all");return}
  navigator.geolocation.getCurrentPosition(
    pos=>{userPos={lat:pos.coords.latitude,lng:pos.coords.longitude};sel=null;list()},
    ()=>{p.textContent="Không lấy được vị trí. Bạn hãy bật định vị hoặc chọn ấp ở ô bên cạnh.";filter="all";pressed("all");list()},
    {timeout:10000,maximumAge:60000});
}
function current(){
  let r=D.diem.slice();
  if(filter.startsWith("ap:"))r=r.filter(d=>d.ap===filter.slice(3));
  else if(D.loai[filter])r=r.filter(d=>d.loai===filter);
  if(userPos&&filter==="near")r.sort((a,b)=>km(userPos,a)-km(userPos,b));
  return r;
}

/* ---------- danh sách ---------- */
function list(){
  const r=current();draw(r);fit(r);
  const sv=D.dichVu.map(s=>`<div class="sv"><b>${esc(s.ten)}${s.online?'<span class="tagon">Trực tuyến</span>':""}</b><span>${esc(s.mota)}</span></div>`).join("");
  $("view").innerHTML=(r.length?r.map((d,i)=>{const s=trangThai(d),t=D.loai[d.loai];
    return `<div class="card" tabindex="0" data-id="${esc(d.id)}">${thumb(d,"th")}<div><span class="badge" style="background:${esc(t.mau)}">${esc(t.ten)}</span>${filter==="near"&&i===0?' <span class="badge" style="background:#16794f">Gần nhất</span>':""}
    <b>${esc(d.ngan)}</b><div class="meta">Ấp ${esc(d.ap)} · ${esc(d.capHoc)}${distTxt(d)}</div><div class="st ${s.on?"on":"off"}">${s.on?"● ":"○ "}${esc(s.t)}</div></div></div>`}).join(""):'<div class="box">Không có điểm phù hợp.</div>')+
  `<h2 class="sec">Dịch vụ & thủ tục</h2>${sv}
  <div class="box"><h3>Cổng thông tin</h3>🌐 <a href="${esc(safeUrl(D.website))}" target="_blank" rel="noopener noreferrer">${esc(D.website.replace(/^https?:\/\//,""))}</a><br>✉ <a href="mailto:${esc(D.email)}">${esc(D.email)}</a></div>
  <p class="foot">Dữ liệu v${esc(D.phienBan)} · cập nhật ${esc(D.capNhat)}.<br>Đường dây nóng bảo vệ trẻ em: <b>111</b>.<br>Hệ thống không thu thập hay lưu thông tin cá nhân.</p>`;
}
$("view").addEventListener("click",e=>{
  const c=e.target.closest(".card");if(c)open(c.dataset.id);
  const l=e.target.closest("[data-go]");if(l)open(l.dataset.go);
  if(e.target.closest("#back")){sel=null;history.replaceState(null,"","#");list()}
  const sh=e.target.closest("#share");if(sh)share();
});
$("view").addEventListener("keydown",e=>{if(e.key==="Enter"){const c=e.target.closest(".card");if(c)open(c.dataset.id)}});

/* ---------- chi tiết ---------- */
function open(id){
  const d=byId(id);if(!d)return;sel=id;
  history.replaceState(null,"","#"+id);
  const t=D.loai[d.loai],s=trangThai(d),cha=d.truc?byId(d.truc):null,con=D.diem.filter(x=>x.truc===id);
  const gio=d.khung.map(k=>{const g=D.gio[k];return `<tr><th>${esc(g.ten)}</th><td>${esc(g.sang.join(" – "))}</td><td>${esc(g.chieu.join(" – "))}</td></tr>`}).join("");
  const dv=D.dichVu.filter(x=>x.tai==="all"||x.tai.includes(id)).map(x=>`<li>${esc(x.ten)}${x.online?" (trực tuyến)":""}</li>`).join("");
  draw(D.diem);
  map.flyTo([d.lat,d.lng],16,{duration:.8});
  $("view").innerHTML=`<div class="det"><div class="hero" style="background-image:url('${esc(d.anh)}')"><button class="back" id="back">← Tất cả điểm</button></div>
  <span class="badge" style="background:${esc(t.mau)}">${esc(t.ten)}</span> <span class="st ${s.on?"on":"off"}">${s.on?"● ":"○ "}${esc(s.t)}</span>
  <h2>${esc(d.ten)}</h2><div class="meta">Ấp ${esc(d.ap)}, ${esc(D.xa)}${distTxt(d)}</div>
  <div class="chipsrow"><span class="pill">🎓 ${esc(d.capHoc)}</span><span class="pill">👥 ${esc(d.quyMo)}</span>${d.khoangCach?`<span class="pill">🛣 ${esc(d.khoangCach)}</span>`:""}</div>
  <div class="row"><a class="btn go" href="${esc(dirUrl(d))}" target="_blank" rel="noopener noreferrer">➜ Dẫn đường đến đây</a><a class="btn alt" href="${esc(safeUrl(d.maps))}" target="_blank" rel="noopener noreferrer">Mở Google Maps</a><button class="btn alt" id="share">Chia sẻ</button></div>
  <div class="box"><h3>Chức năng & nhiệm vụ</h3><ul>${d.chucNang.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
  ${d.luuY?`<div class="box warn"><h3>Lưu ý</h3>${esc(d.luuY)}</div>`:""}
  ${cha?`<div class="box"><h3>Trực thuộc</h3><button class="link" data-go="${esc(cha.id)}">${esc(cha.ngan)}</button></div>`:""}
  ${con.length?`<div class="box"><h3>Đơn vị trực thuộc</h3>${con.map(x=>`<button class="link" data-go="${esc(x.id)}">${esc(x.ngan)}</button>`).join(" · ")}</div>`:""}
  <div class="box"><h3>Thời gian học</h3><table><tr><th></th><th>Sáng</th><th>Chiều</th></tr>${gio}</table><div class="meta" style="margin-top:6px">Giải lao: ${esc(D.gio[d.khung[d.khung.length-1]].nghi)}</div></div>
  <div class="box"><h3>Có thể làm tại đây</h3><ul>${dv}</ul></div></div>`;
  $("view").scrollTop=0;
}
async function share(){
  const u=location.href.split("#")[0]+"#"+sel,d=byId(sel);
  try{if(navigator.share){await navigator.share({title:d.ten,url:u});return}await navigator.clipboard.writeText(u);$("share").textContent="Đã chép liên kết ✓"}
  catch(_){$("share").textContent="Hãy sao chép địa chỉ trên trình duyệt"}
}

/* ---------- khởi động ---------- */
const h=decodeURIComponent(location.hash.slice(1));
list();
if(h&&byId(h))open(h);
window.addEventListener("hashchange",()=>{const x=decodeURIComponent(location.hash.slice(1));if(x&&byId(x)&&x!==sel)open(x)});
})();
