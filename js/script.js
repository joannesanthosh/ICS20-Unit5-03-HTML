/* Created by: Joanne Santhosh
 * Created on: Apr 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-03-HTML/sw.js", {
    scope: "/ICS20-Unit5-03-HTML/",
  })
}

/**
 * This function tells user what movies they can watch
 */
function convert() {
  // input
  var age = parseInt(document.getElementById("How old are you?").value)

  // process
  if (age > == 17) {
    console.log("You can see an R movie alone.");
  } else if (age > == 13) {
    console.log("You can see a PG-13 movie alone.");
  } else if (age > == 5) {
    console.log("You can see a G or PG movie alone.");
  } else {
    console.log("You're too young to watch most things.");
  }
  console.log("Thank you for verifying your age!");
  
