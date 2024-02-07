import jwt from "jsonwebtoken";

class TokenManager {
  static sign(
    payload: string | object | Buffer,
    secretOrPrivateKey: jwt.Secret,
    options?: (jwt.SignOptions & { algorithm: "none" }) | undefined,
  ) {
    return jwt.sign(payload, secretOrPrivateKey, options);
  }

  static verify(
    token: string,
    secretOrPublicKey: jwt.Secret,
    options: jwt.VerifyOptions & { complete: true },
  ) {
    return jwt.verify(token, secretOrPublicKey, options);
  }
}

export default TokenManager;
