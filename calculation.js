function yarn_left(){
  var yarn_type = document.getElementById('얀종류').value;
  var density = document.getElementById('밀도').value;
  var weight = document.getElementById('측정중량').value;
  var net_weigth = 0;
  if(density<4000){net_weight=weight-0.34;}else{net_weight=weight-0.5;};
  if(weight == null || weight =="" ){
  var length = 0;
  }else{
  var length = net_weight / (density / yarn_type) *1000;
  document.getElementById('result').innerHTML = formatNumber(Math.round(length));
  }
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
