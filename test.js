// // VARIABLES
// // adition de 2 nombres 
// nbra = 4;
// nbrb = 4;
// console.log (nbra + nbrb)

// // dicision de 2 nombres
// nbra = 100;
// nbrb = 4;
// console.log (nbra/nbrb)

// // modulo de 2 nombre (celui qui reste apres une divisio,)
// nbra = 10;
// nbrb = 3;
// console.log (nbra % nbrb)

// // assembling 2 phrases together
// let a = "Salut"
// let b = "Edouard"
// console.log (a +" "+b)

// // enlever et remettre la TVA (ne pas oublier les virgules pour pouvoir écrire un txt dans la console)
// let prixHTVA = 50;
// let TVA = 1.21;
// console.log ('Le prix HTVA est de',prixHTVA,'€, et le prix TVAC est de',prixHTVA*TVA,'€' )

// // calculer la surface d'un cercle avec une fonction
// function airduCercle (r) {
//     return Math.PI*(r*r)
// }
// console.log ("L'air d'un cercle d un rayon de 3 cm est de " + airduCercle(5)+ "cm carré");

// //indiquer l'heure en heures, minutes et seconde depuis minuit
// ct = new Date
// let hours = ct.getHours ()
// let minutes = ct.getMinutes ()
// let secondes = ct.getSeconds ()

// console.log ("The number of hours, minutes, secondes since midgnight is",hours," : ",minutes," : ",secondes," is ",((hours*3600)+(minutes*60)+secondes))

// // CONDITIONS
// // prix plein ou reduit au cinéma en focntion de l'age
// var age= 18;
// if  (age >= 25) { console.log ('Vous paierez 10€')
// } 
//     else { console.log ('Vous paierez 8€')
// }

// // Trouver le maximum
// a = 9
// b = 8
// c = 4

// if (a > b, a > c){
//     x = a
// } else if (b > c) {
//     x = b
// } else {
//     x = c 
// }
// console.log ("The highest number between the three is",x)

// // dés identique
// dé1 = Math.floor(Math.random()* 5)
// dé2 = Math.floor(Math.random()* 5)
// dé3 = Math.floor(Math.random()* 5)

// if (dé1 == dé2, dé1 == dé3) {
//     x=3
// } else if (dé1 == dé2) {
//     x=2
// } else if (dé2 == dé3) {
//     x=2
// } else if (dé1 == dé3) {
//     x=2
// } else {
//     x=0
// }
// console.log ('Le nombre de dés qui indique la meme valeur apres ce lancé est de ',x)

// // donner le nom du jour en fonction du nombre
// ct = new Date ('October 19, 2022 23:15:30')
// day = ct.getDay()
// console.log (day)

// if (day==0) {
//     x ='Sunday'
// } else if (day==1) {
//     x ='Monday'
// } else if (day==2) {
//     x ='Tuesday'
// } else if (day==3) {
//     x ='Wednesday'
// } else if (day==4) {
//     x ='Thursday'
// } else if (day==5) {
//     x ='Friday'
// } else  {
//     x = 'Saturday'
// }

// console.log ('Today we are',x)

// // calcule par tranche

// copie = 89

// if (copie <= 10) {
//     x = copie*0.12
// } else if (copie <=20) {
//     x = (10*0.12)+(copie - 10)*0.11
// } else {
//     x = (10*0.12)+(10*0.11)+(copie-20)*0.1
// }
// console.log ('Pour ',copie,' copies vous paierez ',x,'€')

// // afficher les nombres de 1 à n
// n=10

// for (var i = 1; i<=n;i++)
// console.log(i)

// // afficher les nombres de n à 1

// for (var i = 1; i<=n; i++)
// console.log(n-i+1)

// n=10

// for (var i =-n; i<=n; i++)
// console.log (i)

// n =10

// for ( var i=1 ; i<=n ; i=i+2)
// console.log (i)

// // afficher des numeros aléatoires d'integrer

// function randomNum () {
//     return Math.floor (Math.random()* 9)
// }
// console.log ('Nombre aléatoire de 0 à 8',randomNum (9))

// // lancé de dés
// n =50
// chiffredé = 3
// y =0
// //dé = Math.floor(Math.random()* 6 +1)

// for ( i = 1 ; i <=n; i++)
// if (dé = Math.floor(Math.random()* 6 +1) == chiffredé){
//     y++}

// console.log ('Avec ',n,' lancés, le face ',chiffredé,' a été obentue ',y,' fois')

// // affiché les chiffres pairs 

// n =10

// for ( var i=0 ; i<=n ; i+=2)

// console.log (i)

// // perfect number voir si le nombre est parfait (dans le console.log avec la formule)
// // console.log ('28 is',isPerfect (28) ? "a perfect number" : "not a perfect number")
// // function isPerfect (n) {
// //     sum = 0;
// //    for ( i=1; i<=n; i++)
// //    if (n % i == 0){
// //     sum += i // sum = sum +i
// //    }
// // } 
// // if (sum == n){
// //     return true}

// //     {return false
// // }
// // console.log ('28 is',isPerfect (28) ? "a perfect number" : "not a perfect number")


// // Arrays
// // Print what's in the array

// let names = ['Ed','Ted','Ned','Led']
// console.log (names)

// // Maximum
// x = 0
// let listeNbr = [9,1,2,40,6,4,5,8,82,54]
// for (var i = 0 ; i <= listeNbr.length -1 ; i++ ) {
//     // console.log(listeNbr[i])
// if (listeNbr[i]>x) {
//     x = listeNbr[i]
// }}
// console.log (x)
// // var x =0
// // if (x<= listeNbr[i]){
// //     x = listeNbr[i] }

// // console.log (x)


// minimum 
// let array = [8,2,3,4,1,5,6];
// let min = Math.min(...array);
// let index = array.indexOf(min);

// console.log (index);

// // maximum 
// let array = [2,3,56,76,34,99,67,10];
// let max = Math.max(...array);
// let index = array.indexOf(max);
// let value = array.length[index];

// console.log (value);

// let array = [1,2,6,4,5,6]

// for (i=0; i<= array.length-2; i++) {
//     if (array[i]< array[i+1]){
//        console.log ('True')
//     } else {
//         console.log ('False')
//     }
// }

// console.log (i)
// y=0

// let array = [1,2,3,4,5,6,7,8]
// let array2 = [2,4,9,8,12]

// for (i=0; i<= array.length-2; i++) {
//     if (array[i]< array[i+1]){
//        y++
//     } else {
//         y--
//     }
// }
// if (y == array.length -1){
//     console.log ('True')
// }else {
//     console.log ('False')
// }

// function ordonateUp (array) {
//     y=0
//     for (i=0; i<= array.length-2; i++) {
//         if (array[i]< array[i+1]){
//            y++
//         } else {
//             y--
//         }
//     }
//     if (y == array.length -1){
//         return ('True')
//     }else {
//         return ('False')
//     }
// }

// console.log (ordonateUp(array2))