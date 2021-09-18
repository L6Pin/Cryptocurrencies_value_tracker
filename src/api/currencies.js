export async function getSymbols(){
    const response = await fetch(`http://localhost:3001/v1/symbols`);
    const symbols = await response.json();
    return symbols;
  }

export async function getCurrencyInfo(params){
  const response = await fetch(`https://api-pub.bitfinex.com/v2/tickers?symbols=${params}`);
  const info = await response.json();
  return info;
}