
const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = [
  "jogger",
  "withus",
  "agencytech",
  "melonesgrandes",
  "racoon",
  "newbaby"
];
const domainExtensions = ["com", "es", "tech", "us", "baby", "bike"];

console.log(`All posibles domains:`);


adj.forEach(adjElement => {
  pronoun.forEach(pronounElement => {
    noun.forEach(nounElement => {
      console.log(`👉 ${pronounElement}${adjElement}${nounElement}.com`);
      // Replace last word with domain extension
      domainExtensions.forEach(domain => {
        if (nounElement.toLocaleLowerCase().endsWith(domain)) {
          const nounWithoutExtension = nounElement.slice(0, -domain.length);
          console.log(
            `☝️. another option: ${pronounElement}${adjElement}${nounWithoutExtension}.${domain}`
          );
        }
      });
    });
  });
});
