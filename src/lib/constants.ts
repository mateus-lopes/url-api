export const ERROR_MESSAGES = {
  REQUIRED_FIELDS: "Todos os campos são obrigatórios.",
  INTERNAL_SERVER_ERROR: "Erro interno do servidor.",
  NOT_FOUND: "url não foi encontrado"
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
} as const;
