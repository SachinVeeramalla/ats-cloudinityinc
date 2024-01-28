import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_3Ms1eFrei",
  ClientId: "12gd95t82qp31uf8a5vgo0fkmb",
};

const userPool = new CognitoUserPool(poolData);

export default userPool;
