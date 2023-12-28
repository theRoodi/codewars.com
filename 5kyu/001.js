// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function extractDomain(url) {
    const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i);
    if (match) {
      const domain = match[1];
      return domain.split('.').shift();
    }
    return null;
  }
  
  console.log(extractDomain("http://github.com/carbonfive/raygun")); // "github"
  console.log(extractDomain("http://www.zombie-bites.com")); // "zombie"
  console.log(extractDomain("https://www.cnet.com")); // "cnet"
  console.log(extractDomain("https://www.cnet.co.jp")); // "cnet"