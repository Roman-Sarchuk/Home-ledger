class APIError extends Error {
  constructor(code, detail, error) {
    const message = detail + (error ? `: ${error}` : '');
    super(message);

    this.code = code;
    this.detail = detail;
    this.error = error;
    
    this.name = 'APIError';
  }
}

module.exports = APIError;