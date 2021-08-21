import {businesses, customers} from "./data.js";

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
}

const outEl = document.querySelector("#output")
// outEl.innerHTML = "<h1>Active Businesses</h1>"

// businesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//       ${business.addressCity}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false
  
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
  
//     return inNewYork
//   })

// const manufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing")

// manufacturingBusinesses.forEach(business => {
//       outEl.innerHTML += `
//         <h2>${business.companyName}</h2>
//         <section>
//           ${business.addressFullStreet}
//         </section>
//         <section>
//           ${business.addressCity}
//         </section>
//       `
//       outEl.innerHTML += "<hr/>"
//     });

// outEl.innerHTML += "<h1>Purchasing Agents</h1>";

// /*
//     Using map(), you extract the purchasing agent object
//     from each business and store it in a new array
// */
// const agents = businesses.map(business => {
//     return {
//      fullName: business.purchasingAgent,
//      company: business.companyName,
//      phoneNumber: business.phoneWork
//     }
// })

// console.table(agents)

// agents.forEach(agent => {
//   outEl.innerHTML += `<h2>${agent.fullName.nameFirst} ${agent.fullName.nameLast}</h2><h3>${agent.company}</h3><h4>${agent.phoneNumber}</h4>`;
//   outEl.innerHTML += "<hr/>";
// });

// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) || business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
//                 </h2>
//                 <section>
//                 ${foundBusiness.companyName}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//             `;
//         }
//     });

// businesses.forEach(business => {
//     /* CALCULATE ORDER SUMMARY */
//     let totalOrders = business.orders.reduce(
//         (currentTotal, nextValue) => currentTotal += nextValue,
//         0
//     )


//     outEl.innerHTML += `
//         <h2>
//             ${business.companyName}
//             ($${totalOrders})
//         </h2>
//         <section>
//             ${business.addressFullStreet}
//         </section>
//         <section>
//             ${business.addressCity},
//             ${business.addressStateCode}
//             ${business.addressZipCode}
//         </section>
//     `;
//     outEl.innerHTML += "<hr/>";
// });

// const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

// const totalRainfall = monthlyRainfall.reduce((currentRain, nextValue) => currentRain += nextValue,
// 0)

// console.log(totalRainfall)

// const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

// const sentence = words.reduce((currentSentence, nextValue) => currentSentence += `${nextValue} `, "")

// console.log(sentence)

// const bigSpenders = businesses.filter(business => business.orders.find(order => order >= 9000)
// )

// console.log(bigSpenders)

//const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

// const renderPlanets = (arr) => {
//     let domstring = ""
//     arr.forEach(planet => domstring += `${planet} `)
//     renderToDom("#planets", domstring)
// }

// const planets2 = planets.map(planet => planet.charAt(0).toUpperCase() + planet.slice(1))

// renderPlanets(planets2)

// const ePlanets = planets.filter(planet => planet.includes("e"))

// console.log(ePlanets)

// const customerEmails = [] 
// customers.forEach(customer => customerEmails.push(customer.contacts.email))

// console.log(customerEmails)


const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const sortedInt = integers.sort((a, b) => b - a);
console.log(sortedInt)

const filteredInt = integers.filter(int => int < 19)
console.log(filteredInt)

const multipliedInt = filteredInt.map(int => int * 1.5)
console.log(multipliedInt)
