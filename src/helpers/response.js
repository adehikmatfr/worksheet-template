// ===========response function==========
const response = (res, status, error = false, data, pagination) => {
  const result = {};
  result.message = error ? "failed" : "succes";
  result.status = status;
  error ? (result.error = { message: data }) : (result.data = data);
  pagination ? (result.pagination = pagination) : null;
  return res.status(status).json(result);
};

// ===========export function=============
module.exports = response;
