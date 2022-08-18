const React = require('react')
const Default = require('./layouts/Default')

function error () {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
        <p>
           404 error
        </p>
        <li><a href="/breads">Go home</a></li>
        </Default>
      )
  }
  

module.exports = error