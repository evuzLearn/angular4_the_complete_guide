import * as firebase from 'firebase';

export class AuthService {
  token: string;

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then()
      .catch((err) => console.log(err));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
          });
      })
      .catch((err) => console.log(err));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => this.token = token);
    return this.token;
  }
}
