module.exports = (err, req, res, next) => {
  const isAPIError = err.name === "APIError";
  const statusCode = isAPIError ? err.code : 500;

  console.error(`[ERROR] ${err.message}`);

  res.status(statusCode).json(
    isAPIError
      ? err.toJSON()
      : {
          detail: "Internal Server Error",
          ...(process.env.NODE_ENV === "development" && { error: err.message }),
        },
  );
};
