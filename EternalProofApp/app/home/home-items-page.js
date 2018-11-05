const HomeItemsViewModel = require("./home-items-view-model");

require("nativescript-nodeify");

const Eth = require('ethjs');

//import { default as Web3} from 'web3';

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new HomeItemsViewModel();

    console.log("reached home page"); 
    console.log(Eth); 
    
    //web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/dec23bd2681743f3bed743d5a2b6df2c'))
    // console.log(this.web3); 
}

function onItemTap(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;

    page.frame.navigate({
        moduleName: "home/home-item-detail/home-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;
