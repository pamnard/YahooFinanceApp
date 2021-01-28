function yahooApi_(symbol, module) {
  Utilities.sleep(1000);

  const baseUrl = 'https://query2.finance.yahoo.com/v10/finance/quoteSummary/',
    options = {
      'muteHttpExceptions': true,
      'headers': get_headers(),
      'method': 'GET',
      'contentType': 'application/json; charset=utf-8',
    },
    fullUrl = `${baseUrl}${symbol}?modules=${module}`;
  var response = UrlFetchApp.fetch(fullUrl, options);
  var json = JSON.parse(response);
  if (!!json.quoteSummary) {
    if (json.quoteSummary.error != null) {
      return json.quoteSummary
    } else {
      return json.quoteSummary.result[0]
    }
    
  } else {
    throw new Error('Обращение заблокировано');
  }

  function get_headers() {
    return {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-GB,en;q=0.9,en-US;q=0.8,ml;q=0.7',
      'cache-control': 'max-age=0',
      'dnt': '1',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36'
    }
  }
}