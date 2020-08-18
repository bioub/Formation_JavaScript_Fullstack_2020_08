setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);
console.log('FIN');

// pile d'appels
// ^
// |
// |
// |
// |                             lg            lg  lg                lg
// |st - st - st - st - lg ..⟳.. cbB ..⟳..    cbA cbD ..⟳..        cbC
// 0-----------------------------10------------500-501---------------1000--------------------------> temps
//                      FIN      B             A   D                 C


// file d'attente (0ms) : cbB
// file d'attente (10ms) :
// file d'attente (499ms) : cbA - cbD
// file d'attente (500ms) : cbD
// file d'attente (501ms) :
// file d'attente (999ms) : cbC
// file d'attente (1000ms) :

// JSConf Asia 2018
// Jake Archibald : In the loop
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
