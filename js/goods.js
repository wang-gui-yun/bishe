let datas = [
	{
		id:1,
		tit: '国家自然博物馆文创地质冰箱贴万年历怀表摆件',
		jia:80,
		quan:80,
		src:'images/g1.jpg',
		num:1
	},{
		id:2,
		tit: '高颜值敦煌风金属黄铜书签礼盒',
		jia:40,
		quan:40,
		src:'images/g2.jpg',
		num:1
	},{
		id:3,
		tit: '【西安博物院官版】双凤逐影流沙折叠便携随身镜',
		jia:74,
		quan:74,
		src:'images/g3.jpg',
		num:1
	},{
		id:4,
		tit: '熊猫文创伴手礼成都周边纪念品',
		jia:56,
		quan:56,
		src:'images/g4.jpg',
		num:1
	},{
		id:5,
		tit: '博物馆文创葡萄花鸟纹香囊精致礼盒礼品',
		jia:29,
		quan:29,
		src:'images/g5.jpg',
		num:1
	},
]
xuanran();
function xuanran(){
	let dom = document.querySelector('.goodsBox');
	dom.innerHTML=''
	for(let i =0;i<datas.length;i++){
		dom.innerHTML+=`
			<div class="item">
				<img src="${datas[i].src}" alt="" />
				<h3>${datas[i].tit}</h3>
				<div class="jia">${datas[i].jia}￥</div>
				<button class="car" idd='${datas[i].id}'>加入购物车</button>
			</div>
		`
	}
	init()
}
init()
function init(){
	let car = document.querySelectorAll('.car');
	for(let i =0;i<car.length;i++){
		car[i].onclick=function(){
			let idd = car[i].getAttribute('idd');
			for(let j =0;j<datas.length;j++){
				if(datas[j].id==idd){
					let cars = JSON.parse(localStorage.getItem('car'));
					if(cars !=null){
						cars.push(datas[j]);
						localStorage.setItem('car',JSON.stringify(cars))
					}else{
						localStorage.setItem('car',JSON.stringify([datas[j]]))
					}
					location.href='car.html'
				}
			}
		}
	}
}

// let linshi=[];
// let iss =document.querySelector('.iss');
// iss.onclick=function(){
// 	linshi=[];
// 	let issVal = document.querySelector('.issVal').value;
// 	if(issVal == ''){
// 		xuanran();
// 		return;
// 	}
// 	for(let i =0;i<datas.length;i++){
// 		if(datas[i].tit.indexOf(issVal) != -1){
// 			linshi.push(datas[i]);
// 		}
// 	}
// 	linshiinit()
// }

function linshiinit(){
	let dom = document.querySelector('.goodsBox');
	dom.innerHTML=''
	for(let i =0;i<linshi.length;i++){
		dom.innerHTML+=`
			<li>
				<a href="item1.html"><img src="${linshi[i].src}" ></a>
				<div class="nr">
					<h3>${linshi[i].tit}</h3>
					<p>${linshi[i].nr}</p>
					<div class="biaoQian">
						<div class="l"><img src="images/user.png" >${linshi[i].zz}</div>
						<div class="r">${linshi[i].class}</div>
					</div>
					<button class="car" idd='${linshi[i].id}'>加入购物车</button>
				</div>
			</li>
		`
	}
	init()
}