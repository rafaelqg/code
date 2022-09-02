//Number.prototype.toLocaleString()
let cost = 5300.65
let localesExample = [
    {locate: "de-DE", currency: "EUR"},
    {locate: "pt-BR", currency: "BRL"},
    {locate: "en-IN", currency: "GBP"},
    {locate: "en-US", currency: "USD"},
];
localesExample.forEach(el => {
    let costFormated = (cost).toLocaleString(el.locale, {
        style: 'currency',
        currency: el.currency,
    });
    console.log(costFormated);
});
