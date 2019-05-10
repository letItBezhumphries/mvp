//create an output insult

//create a function that randomly generates an insult



//create schema for mongoose

//create model for storing column of words

//create model for saving favorite insult

function generateRandomInsult(array) {
    let insult = '';
    array.map(function(arr) {
      let index = generateRandomIndex(arr);
      insult += arr[index] + ' ' ;
    });
    return insult;
  }
  
  var generateRandomIndex = function(arr) {
    let max = arr.length - 1;
    let min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
  }
    
  
    var insultPool = [['you', 'ye', 'thee', 'thou', 'yon', 'thy'], 
        ['artless', 'bawdy', 'bawdy', 'base-court', 'base-court','base-court','apple-john','bawdy','bat-fowling',
        'baggage','beslubbering','beef-witted', 'barnacle','bootless','beetle-headed','bladder','churlish','boil-brained','boar-pig','cockered','clapper-clawed','bugbear','clouted',
        'clay-brained','bum-bailey', 'common-kissing', 'canker-blossom', 'currish', 'crook-pated', 'clack-dish', 'dankish,dismal-dreaming', 'clotpole', 'dissembling',
          'dizzy-eyed','coxcomb','droning','doghearted','codpiece','errant','dread-bolted','death-token','fawning','earth-vexing','dewberry','fobbing','elf-skinned','flap-dragon',
          'froward,fat-kidneyed','flax-wench','frothy','fen-sucked,flirt-gill','gleeking','flap-mouthed','foot-licker','goatish','fly-bitten','fustilarian','gorbellied','folly-fallen',
          'giglet','impertinent','fool-born','gudgeon','infectious','full-gorged', 'haggard', 'jarring', 'guts-griping', 'harpy' ], 
        ['loggerheaded','half-faced','hedge-pig','lumpish', 'brazen-faced','poisonous', "bunch-back'd", 'fishified', 'leaden-footed',    
        'Wart-necked','muddy-mettled', 'hasty-witted','horn-beast','mammering','hedge-born','hugger-mugger','mangled','hell-hated','mewling','idle-headed','lewdster','paunchy','ill-breeding','lout',
          'pribbling','ill-nurtured','maggot-pie', 'puking','knotty-pated','malt-worm', 'puny', 'milk-livered','qualling','motley-minded','measle','rank','onion-eyed', 'minnow', 
          'reeky','plume-plucked','roguish',' pottle-deep','moldwarp','ruttish','pox-marked',  'mumble-news','saucy', 'reeling-ripe','spleeny', 'rough-hewn', 'pigeon-egg',
          'spongy', 'rude-growing', 'surly', 'rump-fed', 'tottering', 'shard-borne', 'pumpion', 'unmuzzled', 'sheep-biting', 'ratsbane', 'vain', 'spur-galled', 'scut', 'venomed',
          'swag-bellied','villainous', 'tardy-gaited', 'warped', 'tickle-brained', 'wayward', 'toad-spotted', 'weedy', ' unchin-snouted','whey-face', 'yeasty', 
          'weather-bitten'], ['knave','blind-worm','popinjay','scullian', 'jolt-head', 'malcontent','devil-monk', 'toad', 'rascal','Basket-Cockle','scurvy-companion', 'hobby-horse','strumpet','varlot','fat-guts','wagtail','vassal',
          'apple-john','baggage','barnacle','bladder','boar-pig', 'bugbear', 'bum-bailey','canker-blossom','clack-dish','clotpole', 'foot-licker', 'fustilarian', 'giglet', 'gudgeon', 'haggard', 'harpy',
          'hedge-pig', 'horn-beast','hugger-mugger', 'joithead', 'lewdster','lout', 'maggot-pie','malt-worm', 'mammet', 'measle', 'minnow', 'miscreant', 'moldwarp', 'mumble-news', 'nut-hook',
          'pigeon-egg', 'pignut', 'puttock', 'pumpion', 'whey-face']];
  
       
        
  
      
  console.log(generateRandomInsult(insultPool))
     

