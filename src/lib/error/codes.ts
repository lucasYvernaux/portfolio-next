export class UnauthorizedError extends Error {
  statusCode = 401;
  constructor(
    message = "authentication is required and has failed or has not yet been provided",
  ) {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends Error {
  statusCode = 403;
  constructor(
    message = "The request was valid, but the server refuses action",
  ) {
    super(message);
    this.name = "ForbiddenError";
  }
}
export class NotFoundError extends Error {
  statusCode = 404;
  constructor(
    message = "The requested resource could not be found but may be available in the future",
  ) {
    super(message);
    this.name = "NotFoundError";
  }
}
export class ServerError extends Error {
  statusCode = 500;
  constructor(
    message = "the server detects that an error has occurred or that it is unable to process the request",
  ) {
    super(message);
    this.name = "ServerError";
  }
}
export class UnavailableError extends Error {
  statusCode = 503;
  constructor(message = "The server cannot handle the request") {
    super(message);
    this.name = "UnavailableError";
  }
}
