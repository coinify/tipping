var getRandomQuotes = function() {
    return [{
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
            text: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
            author: 'marek',
            value: 42,
            address: "1CyfVomSMG4FiFW3JvEMr67tx8em5vrR8"
        },{
            title: 'Ethereum xxx',
            text: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
            author: 'adam',
            value: 42,
            address: "1CyfVomSMG4FiFW3OGG9Vr67tx8em5vrR8"
        },{
            title: 'Bitcoin Power!',
            text: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
            author: 'edek',
            value: 42,
            address: "1CyfVomSMG4FiFWPSOD9Vr67tx8em5vrR8"
        },{
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
            text: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
            author: 'marek',
            value: 42,
            address: "1CyfVomSMG4FiERAvD9Vr67tx8em5vrR8"
        },{
            title: 'Ethereum xxx',
            text: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
            author: 'adam',
            value: 42,
            address: "1CyfVomSMG4FiFW3JvJAZ67tx8em5vrR8"
        },{
            title: 'Bitcoin Power!',
            text: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
            author: 'edek',
            value: 42,
            address: "1CyfVomSMG4FZYK3JvD9Vr67tx8em5vrR8"
        },{
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
            text: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
            author: 'marek',
            value: 42,
            address: "1CyfVomSMGmarFW3JvD9Vr67tx8em5vrR8"
        },{
            title: 'Ethereum xxx',
            text: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
            author: 'adam',
            value: 42,
            address: "1CyfVomSMG4FiFW3JvDsup7tx8em5vrR8"
        },{
            title: 'Bitcoin Power!',
            text: "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
            author: 'edek',
            value: 42,
            address: "1CyfVomSMG4FiFW3JvD9Vr67tx8em5vrR8"
        }];
};


angular.module('tipping').factory('Blockchain',function() {

	var Blockchain = {};
        Blockchain.account = "1CyfVomSMG4FiFW3JvD9Vr67tx8em5vrR8";
        Blockchain.balance = 10000;

        Blockchain.quotes = getRandomQuotes();

        Blockchain.transactions = [];
        Blockchain.addOutgoingTransaction = function (quote, value) {
            Blockchain.transactions.splice(0, 0, {
                address: quote.address,
                value: value
            } );    
            quote.value += value;
            Blockchain.balance -= value;
        };

        Blockchain.addQuote = function (title, text) {
            Blockchain.quotes.splice(0, 0, {
                title: title,
                text: text,
                author: 'me',
                value: 0,
                address: "1CyfVomSMG4FiFW3JvD9Vr67tx8em5vrR8"
            });
        };

        Blockchain.quoteFromAddress = function (address) {
            return _.find(Blockchain.quotes, {address: address});
        };

	return Blockchain;
});
