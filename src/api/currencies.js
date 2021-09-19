export async function getSymbols() {
  const response = await fetch(`http://localhost:3001/v1/symbols`);
  const symbols = await response.json();
  return symbols;
}

export async function getDetails(params) {
  const response = await fetch(
    `http://localhost:3001/v1/pubticker/${params}`
  );
  const details = await response.json();
  return details;
}


