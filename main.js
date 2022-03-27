window.onload = function(){

/* test point  */
var testPoint = document.getElementById('test');
//testPoint.innerHTML = 'test';
   
   
/* neon effect */

   const eventAOff = new Event('AOff');
   var speedAOff = 20;
   document.getElementById('A').addEventListener('AOff', functionAOff());
   document.getElementById('A').dispatchEvent(eventAOff);

   function functionAOff() {
   if (speedAOff  > 0) {
   speedAOff--;
   setTimeout(functionAOff, 003);}
   else {
   document.getElementById('A').style.display = 'none';
//Starting block
   const eventAOff1 = new Event('AOff1');
   var speedAOff1 = 20;
   document.getElementById('A').addEventListener('AOff1', functionAOff1());
   document.getElementById('A').dispatchEvent(eventAOff1);

   function functionAOff1() {
   if (speedAOff1  > 0) {
   speedAOff1--;
   setTimeout(functionAOff1, 030);}
   else {
   document.getElementById('A').style.display = 'block';
//Starting block
   const eventAOff2 = new Event('AOff2');
   var speedAOff2 = 20;
   document.getElementById('A').addEventListener('AOff2', functionAOff2());
   document.getElementById('A').dispatchEvent(eventAOff2);

   function functionAOff2() {
   if (speedAOff2  > 0) {
   speedAOff2--;
   setTimeout(functionAOff2, 003);}
   else {
   document.getElementById('A').style.display = 'none';
//Starting block
   const eventAOff3 = new Event('AOff3');
   var speedAOff3 = 20;
   document.getElementById('A').addEventListener('AOff3', functionAOff3());
   document.getElementById('A').dispatchEvent(eventAOff3);

   function functionAOff3() {
   if (speedAOff3  > 0) {
   speedAOff3--;
   setTimeout(functionAOff3, 003);}
   else {
   document.getElementById('A').style.display = 'block';
//Starting block
   const eventAOff4 = new Event('AOff4');
   var speedAOff4 = 20;
   document.getElementById('A').addEventListener('AOff4', functionAOff4());
   document.getElementById('A').dispatchEvent(eventAOff4);

   function functionAOff4() {
   if (speedAOff4  > 0) {
   speedAOff4--;
   setTimeout(functionAOff4, 120);}
   else {
   document.getElementById('A').style.display = 'none';
//Starting block
   const eventAOff5 = new Event('AOff5');
   var speedAOff5 = 0;
   document.getElementById('B').addEventListener('AOff5', functionAOff5());
   document.getElementById('B').dispatchEvent(eventAOff5);
   function functionAOff5() {
   if (speedAOff5  > 0) {
   speedAOff5--;
   setTimeout(functionAOff5, 0);}
   else {
   document.getElementById('B').style.display = 'block';
      }
      }
      }
      }
      }
      }
      }

  }
      }
      }

  }

 }

   }

/*
    else {
    const eventcombName = new Event('combName');
    var idcombName = 'CombName';
    var textcombName = 'Target: Comb-0.';
    var icombName = 0;
    document.getElementById(idcombName).addEventListener('combName', typeWritercombName());
    document.getElementById(idcombName).dispatchEvent(eventcombName);

    function typeWritercombName () {
    if (icombName < textcombName.length) {
    document.getElementById(idcombName).innerHTML += textcombName.charAt(icombName);
    icombName++;
    setTimeout(typeWritercombName, speed);}
    else {
    const eventLocation = new Event('Location');
    var idLocation = 'Location';
    var textLocation = 'Location: Next house.';
    var iLocation = 0;
    document.getElementById(idLocation).addEventListener('Location', typeWriterLocation());
    document.getElementById(idLocation).dispatchEvent(eventLocation);

    function typeWriterLocation () {
     if (iLocation < textLocation.length) {
     document.getElementById(idLocation).innerHTML += textLocation.charAt(iLocation);
     iLocation++;
     setTimeout(typeWriterLocation, speed);}
     else {

     // Starting block
     const eventLogingStart = new Event('LogingStart');
     var idLogingStart = 'LogingStart';
     var textLogingStart = 'Loging start: March 24, 2022.';
     var iLogingStart = 0;
     document.getElementById(idLogingStart).addEventListener('LogingStart', typeWriterLogingStart());
     document.getElementById(idLogingStart).dispatchEvent(eventLogingStart);

     function typeWriterLogingStart () {

      if (iLogingStart < textLogingStart.length) {
      document.getElementById(idLogingStart).innerHTML += textLogingStart.charAt(iLogingStart);
      iLogingStart++;
      setTimeout(typeWriterLogingStart, speed);}
      else {
  
      // Starting block
     const eventNotes = new Event('Notes');
     var idNotes = 'Notes';
     var textNotes = 'Notes: March 24, 2022 .- Feed with a half of 50% mix of dark honey.';
     var iNotes = 0;
     document.getElementById(idNotes).addEventListener('Notes', typeWriterNotes());
     document.getElementById(idNotes).dispatchEvent(eventNotes);

     function typeWriterNotes () {
      if (iNotes < textNotes.length) {
      document.getElementById(idNotes).innerHTML += textNotes.charAt(iNotes);
      iNotes++;
      setTimeout(typeWriterNotes, speed);}
     else {

     // Starting block
     const eventCursor = new Event('Cursor');
     var idCursor = 'Cursor';
     var textCursor = '▊'; //U+258A
     var iCursor = 0;
     document.getElementById(idCursor).addEventListener('Cursor', typeWriterCursor());
     document.getElementById(idCursor).dispatchEvent(eventCursor);

     function typeWriterCursor () {

      if (iCursor < textCursor.length) {
      document.getElementById(idCursor).innerHTML += textCursor.charAt(iCursor);
      iCursor++;
      setTimeout(typeWriterCursor, speed);}
      else {
 
 
     
       }
   
                        }
     // Ending block.
     
       }
   
                        }
     // Ending block.

     
       }
   
                        }
     // Ending block.
     
       }
    
                        }


     
       }
    
                        }


       }
    
                        }
};

*/
