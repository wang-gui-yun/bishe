let dataList = JSON.parse(localStorage.getItem('car'));
let zong = 0;
init();

function init() {
	let card = document.querySelector('#dataBox');
	card.innerHTML = '';
	for (let i = 0; i < dataList.length; i++) {
		card.innerHTML += `
							<li class="item">
								<div class="lone"><input type="checkbox"></div>
								<div class="two jimg">
									<img src="${dataList[i].src}">
									<p>${dataList[i].tit}</p>
								</div>
								<div class="three">￥<span>${dataList[i].jia}</span></div>
								<div class="four"><button class="jian" idd='${i}'>-</button><input type="text" value="${dataList[i].num}" min='1' readonly="readonly"><button class="jia" idd='${i}'>+</button></div>
								<div class="five quane">￥<span>${dataList[i].quan}</span></div>
								<div class="ser scl" idd="${i}"><a>删除</a></div>
							</li>
						`
		// zong = zong + dataList[i].quan;
	}
	i();
	// document.querySelector('.zong').innerHTML = ''
	// document.querySelector('.zong').innerHTML = zong
}

function i() {
	let jians = document.querySelectorAll('.jian');
	let jias = document.querySelectorAll('.jia');
	let scl = document.querySelectorAll('.scl');
	for (let i = 0; i < jians.length; i++) {
		jians[i].onclick = function() {
			let id = jians[i].getAttribute('idd');
			if (dataList[id].num == 1) {
				return;
			}
			dataList[id].num = dataList[id].num - 1;
			dataList[id].quan = dataList[id].quan - dataList[id].jia;
			localStorage.setItem('car', JSON.stringify(dataList))
			init();
		}
		jias[i].onclick = function() {
			let id = jias[i].getAttribute('idd');
			dataList[id].num = dataList[id].num + 1;
			dataList[id].quan = dataList[id].quan + dataList[id].jia;
			localStorage.setItem('car', JSON.stringify(dataList))
			init();
		}
		scl[i].onclick = function() {
			let id = scl[i].getAttribute('idd');
			dataList.splice(i, 1);
			localStorage.setItem('car', JSON.stringify(dataList))
			zong = 0;
			init();
		}
	}
}
document.querySelector('.ljjs').onclick = function() {
	alert('结算成功！');
	dataList = [];
	localStorage.setItem('car', JSON.stringify(dataList))
	zong = 0;
	init();
}
