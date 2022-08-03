//const fs = require("fs");
let dropdown=document.getElementById('country');
dropdown.length = 0;
let defaultOption = document.createElement('option');
defaultOption.text = 'Select your country';
dropdown.add(defaultOption);
dropdown.selectedIndex = 0;
let option;
let data=[{
    "country":"Algeria",
    "value":"Algeria"
},{
    "country":"Egypt",
    "value":"Egypt"
},
{
    "country":"Iran",
    "value":"Iran"
},
{
    "country":"Iraq",
    "value":"Iraq"
},
{
    "country":"Israel",
    "value":"Israel"
},
{
    "country":"Jordan",
    "value":"Jordan"
},
{
    "country":"Kuwait",
    "value":"Kuwait"
},
{
    "country":"Lebanon",
    "value":"Lebanon"
},
{
    "country":"Libya",
    "value":"Libya"
},
{
    "country":"Morocco",
    "value":"Morocco"
},
{
    "country":"Oman",
    "value":"Oman"
},
{
    "country":"Qatar",
    "value":"Qatar"
},
{
    "country":"Saudi Arabia",
    "value":"Saudi Arabia"
},
{
    "country":"Syria",
    "value":"Syria"
},
{
    "country":"Tunisia",
    "value":"Tunisia"
},
{
    "country":"United Arab Emirates",
    "value":"United Arab Emirates"
},
{
    "country":"Yemen",
    "value":"Yemen"
},
]
  for (let i = 0; i < data.length; i++) {
    option = document.createElement('option');
      option.text = data[i].country;
      option.value = data[i].value;
      dropdown.add(option);
  }


  