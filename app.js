const pronoun = ['the','our'];
const adj = ['great', 'big' ];
const noun = ['jogger','withus','agencytech','melonesgrandes','racoon','newbaby'];
const domainExtensions = ['com', 'es', 'tech', 'us', 'baby', 'bike'];
let domains = [];

console.log(`All posibles domains:`)

pronoun.forEach(pronounElement =>{
    adj.forEach(adjElement =>{
        noun.forEach(nounElement =>{
            console.log(`👉 ${pronounElement}${adjElement}${nounElement}.com`)
            domainExtensions.forEach(domain => {
                if(nounElement.toLocaleLowerCase().includes(domain)){
                   const extensionPosition = nounElement.toLowerCase().indexOf(domain)
                   const nounWithoutExtension = (nounElement.slice(0,extensionPosition))
                   console.log(`☝️. another option: ${pronounElement}${adjElement}${nounWithoutExtension}.${domain}`)
                }
            })
        })
    })
});
