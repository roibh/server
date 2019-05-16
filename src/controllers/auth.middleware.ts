import * as jwt from 'jsonwebtoken';
export async function AuthMiddleware(req, res, next) {
    if (req.headers.authorization) {
        const decoded = jwt.decode(req.headers.authorization.replace('Bearer ', ''), { complete: true });
        if (decoded) {
            req.security_context = decoded.payload;
            return next();
        }
    }

    await res.end('access denied');
}
