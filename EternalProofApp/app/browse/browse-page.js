const BrowseViewModel = require("./browse-view-model");


// import {default as Web3} from 'web3'; 
// import Web3 from 'web3'; 

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new BrowseViewModel();
    console.log("hier ist browse-page.js"); 
    
  
}

exports.onNavigatingTo = onNavigatingTo;
