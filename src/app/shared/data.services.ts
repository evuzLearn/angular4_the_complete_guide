export class DataService {
  getDetails(): Promise<string> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res('Data');
      }, 1500);
    });
  }
}
