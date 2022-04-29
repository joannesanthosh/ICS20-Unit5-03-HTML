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
 * Input
 */
function myButtonClicked() {
  const age17 = document.getElementById("age17").checked
  const age13 = document.getElementById("age13").checked
  const age5 = document.getElementById("age5").checked


  // process
  if (age17 == true) {
    document.getElementById("answer").innerHTML = "You can watch an R Rated movie alone."
  } else if (age13 == true) {
    document.getElementById("answer").innerHTML = "You can see a PG-13 movie alone."
  } else if (age5 == true) {
    document.getElementById("answer").innerHTML = "You can see a G or PG movie alone."
  } else {
    document.getElementById("answer").innerHTML = "Uh. You're too young for most things"
  }
}