

class Singleton {
  private static _instance: Singleton;
  private constructor() { }

  public static get Instance() {
    return this._instance || (this._instance = new this())
  }
}

const myClassInstance = Singleton.Instance