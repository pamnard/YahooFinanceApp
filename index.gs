/**
 * Get symbol assetProfile
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function assetProfile(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'assetProfile');
  return data;
}

/**
 * Get symbol incomeStatementHistory
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function incomeStatementHistory(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'incomeStatementHistory');
  return data;
}

/**
 * Get symbol incomeStatementHistoryQuarterly
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function incomeStatementHistoryQuarterly(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'incomeStatementHistoryQuarterly');
  return data;
}

/**
 * Get symbol balanceSheetHistory
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function balanceSheetHistory(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'balanceSheetHistory');
  return data;
}

/**
 * Get symbol balanceSheetHistoryQuarterly
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function balanceSheetHistoryQuarterly(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'balanceSheetHistoryQuarterly');
  return data;
}

/**
 * Get symbol cashflowStatementHistory
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function cashflowStatementHistory(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'cashflowStatementHistory');
  return data;
}

/**
 * Get symbol cashflowStatementHistoryQuarterly
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function cashflowStatementHistoryQuarterly(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'cashflowStatementHistoryQuarterly');
  return data;
}

/**
 * Get symbol defaultKeyStatistics
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function defaultKeyStatistics(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'defaultKeyStatistics');
  return data;
}

/**
 * Get symbol financialData
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function financialData(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'financialData');
  return data;
}

/**
 * Get symbol calendarEvents
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function calendarEvents(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'calendarEvents');
  return data;
}

/**
 * Get symbol secFilings
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function secFilings(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'secFilings');
  return data;
}

/**
 * Get symbol recommendationTrend
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function recommendationTrend(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'recommendationTrend');
  return data;
}

/**
 * Get symbol upgradeDowngradeHistory
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function upgradeDowngradeHistory(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'upgradeDowngradeHistory');
  return data;
}

/**
 * Get symbol institutionOwnership
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function institutionOwnership(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'institutionOwnership');
  return data;
}

/**
 * Get symbol fundOwnership
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function fundOwnership(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'fundOwnership');
  return data;
}

/**
 * Get symbol majorDirectHolders
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function majorDirectHolders(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'majorDirectHolders');
  return data;
}

/**
 * Get symbol majorHoldersBreakdown
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function majorHoldersBreakdown(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'majorHoldersBreakdown');
  return data;
}

/**
 * Get symbol insiderTransactions
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function insiderTransactions(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'insiderTransactions');
  return data;
}

/**
 * Get symbol insiderHolders
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function insiderHolders(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'insiderHolders');
  return data;
}

/**
 * Get symbol netSharePurchaseActivity
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function netSharePurchaseActivity(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'netSharePurchaseActivity');
  return data;
}

/**
 * Get symbol earnings
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function earnings(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'earnings');
  return data;
}

/**
 * Get symbol earningsHistory
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function earningsHistory(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'earningsHistory');
  return data;
}

/**
 * Get symbol earningsTrend
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function earningsTrend(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'earningsTrend');
  return data;
}

/**
 * Get symbol industryTrend
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function industryTrend(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'industryTrend');
  return data;
}

/**
 * Get symbol indexTrend
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function indexTrend(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'indexTrend');
  return data;
}

/**
 * Get symbol sectorTrend
 * @param {String} symbol Instrument ticker
 * @return {object} return an Yahoo Finance API response
 */
function sectorTrend(symbol) {
  if (symbol == null) {
    throw new Error('Не указан тикер');
  }
  var data = yahooApi_(symbol, 'sectorTrend');
  return data;
}
