function 얀잔량(){
  var density = document.getElementById('타입').value.split(" ");
  var weight = document.getElementById('중량').value;
  var papertube = document.getElementById('지관').value;
  var pack_weight = document.getElementById('포장').value;
  var net_weigth = 0;
  if(density[0]<4000){net_weight=weight-0.34*papertube-pack_weight;}else{net_weight=weight-0.46*papertube-pack-weight;};
  var unit = 9000;
  if (density[1]=="den"){unit=9000;}else if(density[1]=="dtex"){unit=10000;}else if(density[1]=="tex"){unit=1000;}
  if (weight == null || weight =="" || weight == 0 ){
    var length = 0;
  }else{
    var length = net_weight / (density[0] / unit) *1000;
    if(length<0){length = 0}
    document.getElementById('결과').innerHTML = formatNumber(Math.round(length));
    if(net_weight<0){
      document.getElementById('순준량').innerHTML = "포장 중량 및 지관 수 점검요";
    }else{
    document.getElementById('순준량').innerHTML = net_weight.toFixed(2);
    }
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
