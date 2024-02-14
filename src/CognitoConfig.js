import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  // UserPoolId: "us-east-2_3Ms1eFrei",
  // ClientId: "12gd95t82qp31uf8a5vgo0fkmb",
  UserPoolId: process.env.REACT_APP_USER_POOL_ID,
  ClientId: process.env.REACT_APP_CLIENT_ID,
};

const userPool = new CognitoUserPool(poolData);

export default userPool;
