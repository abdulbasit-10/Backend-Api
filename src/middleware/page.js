import { ApiError } from '../utils/ApiError.js';
import { verifyJwt } from '../utils/jwt.js';

export function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) throw new ApiError(401, 'Missing Authorization header');
  try {
    const payload = verifyJwt(token);
    req.user = payload; // attach decoded token to request
    next();
  } catch (e) {
    next(new ApiError(401, 'Invalid/expired token'));
  }
}
