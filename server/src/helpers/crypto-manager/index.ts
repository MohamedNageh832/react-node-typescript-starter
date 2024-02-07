import { hash, genSalt, compare } from "bcrypt";

class CryptoManager {
  static async genSalt(
    rounds?: number | undefined,
    minor?: "a" | "b" | undefined,
  ) {
    const salt = await genSalt(rounds, minor);
    return salt;
  }

  static async hash(data: string | Buffer, saltOrRounds: string | number) {
    const result = await hash(data, saltOrRounds);

    return result;
  }

  static async compare(data: string | Buffer, encrypted: string) {
    const result = await compare(data, encrypted);

    return result;
  }
}

export default CryptoManager;
