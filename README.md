# YahooFinanceApp
Обёртка для Yahoo Finance на Google Apps Script

ID библиотеки:

``1kduPhzbFl7ScPM-vCa30ANt23AKApJvDP-BU-ggurDDXSGC7oNWe9b8y``

## Пример использования

```javascript
var data = YahooFinanceApp.defaultKeyStatistics('AAPL');
Logger.log(data);
```

## Методы

Названы по именам соответствующих модулей в исходном API

```javascript
- .assetProfile(symbol)
- .incomeStatementHistory(symbol)
- .incomeStatementHistoryQuarterly(symbol)
- .balanceSheetHistory(symbol)
- .balanceSheetHistoryQuarterly(symbol)
- .cashflowStatementHistory(symbol)
- .cashflowStatementHistoryQuarterly(symbol)
- .defaultKeyStatistics(symbol)
- .financialData(symbol)
- .calendarEvents(symbol)
- .secFilings(symbol)
- .recommendationTrend(symbol)
- .upgradeDowngradeHistory(symbol)
- .institutionOwnership(symbol)
- .fundOwnership(symbol)
- .majorDirectHolders(symbol)
- .majorHoldersBreakdown(symbol)
- .insiderTransactions(symbol)
- .insiderHolders(symbol)
- .netSharePurchaseActivity(symbol)
- .earnings(symbol)
- .earningsHistory(symbol)
- .earningsTrend(symbol)
- .industryTrend(symbol)
- .indexTrend(symbol)
- .sectorTrend(symbol)
```

