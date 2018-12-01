import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';

// const enum SignOptions {
//     Issuer = 'SignNature inc.',
//     Subject = 'info@signnature.com',
//     Audience = 'https://signnature.herokuapps.com',
// }
// // SIGNING OPTIONS
// const signOptions = {
//     algorithm: 'RS256',
//     audience: SignOptions.Audience,
//     expiresIn: '12h',
//     issuer: SignOptions.Issuer,
//     subject: SignOptions.Subject,
// };

export function AuthMiddleware(req, res, next) {
    req.security_context = jwt.decode(req.headers.authorization.replace('Bearer ', ''), { complete: true });
    next();
}
