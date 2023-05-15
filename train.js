console.log("TRAIN AREA!");

// D-TASK 
class Shop {
    constructor(qoldiq, sotish, qabul){
        this.qoldiq = qoldiq;
        this.sotish = sotish;
        this.qabul = qabul;
    }

    qoldiqniTekshiring(){
        console.log(`Sotilgan tovar qoldigi ${this.qoldiq}`);
    }

    tovarniSoting() {
        console.log(`shuncha tovar: ${this.sotish} sotildi!`);
    }

    tovarQabulqilish() {
        console.log(`shuncha tovar: ${this.qabul} qabul qilindi!`);
    }

}

const shop = new Shop(4, 5, 2);

const dokon = new Shop('a / a', 5, 'qabul qilamiz');

dokon.qoldiqniTekshiring();









// const list = [
//   "yahshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi yoq endi", //50-60
// ];  

// // CALBACK function & async function
// async function maslahatBering(a, callback) {
//   if (typeof a !== "number") throw new Error("insert a number", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(function() {
//         callback( null,list[5]);
//       }, 1000);
//     });
//   }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log(data);
//   }
// });
// console.log("passed here 1");

// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(list[5])
//     }, 5000);
// });

// return list[5];
// setTimeout(function () {
//   return list[5];
// }, 5000);
// // callback(null, list[5]);

// call via then/catch
// console.log("passed here 0");
// maslahatBering(25).then(data => {
//     console.log('javob', data);
// }).catch(err => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");

// maslahatBering(30, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob", data);
// });
// console.log("passed here 1");

// call via asyn/await
// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(71);
//   console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();
