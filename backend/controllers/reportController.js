const reportService = require("../services/reportService");

exports.getSummaryCategories = async (req, res) => {
  // Get user input
  const userId = req.user.id;
  const { accountId, dateFrom, dateTo } = req.query;

  // Validate required parameters
  if (!accountId || !dateFrom || !dateTo) {
    return res.status(400).json({
      detail: "Incorrect parameters",
      error: "accountId, dateFrom, and dateTo are required",
    });
  }

  // Perform logic
  const result = await reportService.getSummaryCategoriesReport(
    userId,
    accountId,
    dateFrom,
    dateTo
  );

  // Send response
  res.status(200).json(result);
};

exports.getLiquidityCurve = async (req, res) => {
  // Get user input
  const userId = req.user.id;
  const { accountId, dateFrom, dateTo, pointLimit } = req.query;

  // Validate required parameters
  if (!accountId || !dateFrom || !dateTo || !pointLimit) {
    return res.status(400).json({
      detail: "Incorrect parameters",
      error: "accountId, dateFrom, dateTo, and pointLimit are required",
    });
  }

  // Perform logic
  const result = await reportService.getLiquidityCurveReport(
    userId,
    accountId,
    dateFrom,
    dateTo,
    pointLimit
  );

  // Send response
  res.status(200).json(result);
};

exports.getCashFlow = async (req, res) => {
  // Get user input
  const userId = req.user.id;
  const { accountId, dateFrom, dateTo, pointLimit } = req.query;

  // Validate required parameters
  if (!accountId || !dateFrom || !dateTo || !pointLimit) {
    return res.status(400).json({
      detail: "Incorrect parameters",
      error: "accountId, dateFrom, dateTo, and pointLimit are required",
    });
  }

  // Perform logic
  const result = await reportService.getCashFlowReport(
    userId,
    accountId,
    dateFrom,
    dateTo,
    pointLimit
  );

  // Send response
  res.status(200).json(result);
};
