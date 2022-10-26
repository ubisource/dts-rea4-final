import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_REACT_APP_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCOhMsDjI7VVD7sIKvbbI0qycdzA3puphY",
  authDomain: "dts4c-25-final.firebaseapp.com",
  projectId: "dts4c-25-final",
  storageBucket: "dts4c-25-final.appspot.com",
  messagingSenderId: "146993798521",
  appId: "1:146993798521:web:125347b6f683ec687423a8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);