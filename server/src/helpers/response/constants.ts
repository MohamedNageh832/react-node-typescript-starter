const STATUS_CODE_MSG = {
  OK: { message: "Ok", code: 200 },
  CREATED_SUCCESSFULLY: { message: "Created successfully", code: 201 },
  MOVED_PERMENANTLY: { message: "Moved permenantly", code: 301 },
  BAD_REQUEST: { message: "Bad request", code: 400 },
  UNAUTHORIZED_REQUEST: { message: "Unauthorized request", code: 401 },
  FORBIDDEN_REQUEST: { message: "Forbidden request", code: 403 },
  NOT_FOUND: { message: "Not found", code: 404 },
  METHOD_NOT_ALLOWED: { message: "Method not allowed", code: 405 },
  REQUEST_TIMEOUT: { message: "Request timeout", code: 408 },
  TOO_MANY_REQUESTS: { message: "Too many requests", code: 429 },
  INTERNAL_SERVER_ERROR: { message: "Internal server error", code: 500 },
  BAD_GATEWAY: { message: "Bad Gateway", code: 502 },
  SERVICE_UNAVAILABLE: { message: "Service unavailable", code: 503 },
  INSUFFICIENT_STORAGE: { message: "Insufficient Storage", code: 507 },
};

export { STATUS_CODE_MSG };
