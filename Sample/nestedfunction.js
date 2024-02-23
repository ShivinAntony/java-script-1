 var num =10

 function hello(){
    var num =20
    function hey(){
      num =30
    }
    hey()
    console.log(num)
 }
 hello()
 console.log(num)