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
  const age = parseInt(document.getElementById("age").value)
}

  // process
  if (age > == 17) {
    document.getElementById("option-1").innerHTML = "You can watch an R Rated movie"
  } else if (age > == 13) {
    document.getElementById("option-2").innerHTML = "You can see a PG-13 movie alone."
  } else if (age > == 5) {
    document.getElementById("option-3").innerHTML = "You can see a G or PG movie alone."
  }