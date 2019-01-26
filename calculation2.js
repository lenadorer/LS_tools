function 얀잔량(){
  var density = document.getElementById('타입').value.split(" ");
  var weight = document.getElementById('중량').value;
  var net_weigth = 0;
  if(density[0]<4000){net_weight=weight-0.34;}else{net_weight=weight-0.5;};
  var unit = 9000;
  if (density[1]=="den"){unit=9000;}else if(density[1]=="dtex"){unit=10000;}else if(density[1]=="tex"){unit=1000;}
  if(weight == null || weight =="" || weight == 0 ){
  var length = 0;
  }else{
  var length = net_weight / (density[0] / unit) *1000;
  if(length<0){length = 0}
  document.getElementById('결과').innerHTML = formatNumber(Math.round(length));
  document.getElementById('밀도').innerHTML = density[0];
  document.getElementById('유닛').innerHTML = unit;
  }
}

function 연입율(){
  var core = document.getElementById('코어').value;
  var unit = document.getElementById('유닛').value;
  var pitch = document.getElementById('피치').value;
  var 원주 = 0;
  원주 = (core*1 + unit*1) * Math.PI;
  var excess_len = (Math.sqrt(원주**2+pitch**2)/pitch-1)*100;
  document.getElementById('결과').innerHTML = excess_len.toFixed(3);
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
