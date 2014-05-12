  resource = {"fruits": [
        {"url": "img/SYM5.png",'lable':'SYM5'},
        {"url": "img/SYM1.png",'lable':'SYM1'},
        {"url": "img/SYM3.png",'lable':'SYM3'},
        {"url": "img/SYM4.png",'lable':'SYM4'},
        {"url": "img/SYM6.png",'lable':'SYM6'},
        {"url": "img/SYM7.png",'lable':'SYM7'},
    ],
    "bg":'img/BG.png',
    "batton":'img/BTN_Spin.png',
      "battoff":'img/BTN_Spin_d.png',
      "betline":'img/Bet_Line.png',
      "lable":'img/SYM1.png',
  };

  slot_item = resource.fruits;
  slot_len = slot_item.length;
  refresh_butt = document.getElementById('refresh');
  result_bet = document.getElementById('result');

  select_option = document.getElementById("mySelect");
  
  for (var i = 0; i < slot_item.length; i++) {
    var option = document.createElement("option");
    option.text = slot_item[i].lable;
    option.value = i;
    select_option.add(option);
  };


  function changeImg(){
    selected_id = document.start.select.selectedIndex;
    document.getElementById("sowimg").src = slot_item[selected_id].url;
  }

  //style
  refresh_butt.style.background = "url("+resource.batton+") no-repeat";
  document.getElementById("container").style.background = "url("+resource.bg+") no-repeat";
  document.getElementById("sowimg").src = slot_item[0].url;

  
  function run(){
    selected_id = document.start.select.selectedIndex;
    document.getElementById('start').style.display = 'none';
    max_res = 0;
    try_counter = 0;
    roll();

  }
  function agan(mess){
    selected_id = 0;
    document.getElementById('start').style.display = 'block';
    document.getElementById('result').innerHTML = mess;
  }

  function roll() {
    refresh_butt.style.background = "url("+resource.battoff+") no-repeat";
    counter=0;
    spin();
    console.log('roll');
  }

  function spin() {
      slot1 = Math.floor(Math.random()*slot_len);
      document.game.slot1.src=slot_item[slot1].url;
      slot2 = Math.floor(Math.random()*slot_len); 
      document.game.slot2.src=slot_item[slot2].url;
      slot3 = Math.floor(Math.random()*slot_len); 
      document.game.slot3.src=slot_item[slot3].url; 
      
      counter++;
      if (counter<25) {setTimeout("spin();",100);} else {checkMatch(); try_counter++;}
  }

  function checkMatch(){
    //game win logic
    win_res = 0;
    if (selected_id == slot1) {win_res++;};
    if (selected_id == slot2) {win_res++;};
    if (selected_id == slot3) {win_res++;};
    
    if(win_res>max_res){
      max_res = win_res;
    };
    console.log('max '+max_res+' now '+win_res);
    if (try_counter >=2) {
      if (max_res>1) {
        agan('You Won!'); return;  
      }else{
        agan('You Lose :{'); return; 
      }
    };
  
    refresh_butt.style.background = "url("+resource.batton+") no-repeat";
  }