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
   setTimeout(functionAOff4, 90);}
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

