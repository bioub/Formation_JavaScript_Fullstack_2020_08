function loop() {
  setTimeout(() => {
    console.log('1s');
    loop();
  }, 1000);
}

loop();

// pile d'appels
// ^
// |
// |
// |                 st               st
// |st          lg - loop        lg - loop
// |loop ..⟳.. cb         ..⟳.. cb        ..⟳..
// 0------------1000-----------------------------------------> temps
//              1s

// file d'attente (999ms) : cb
// file d'attente (1000ms) :
// file d'attente (1999ms) : cb
// file d'attente (2000ms) :
