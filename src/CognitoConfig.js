import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_3Ms1eFrei", // replace with your User Pool ID
  ClientId: "12gd95t82qp31uf8a5vgo0fkmb", // replace with your Client ID
};

export default new CognitoUserPool(poolData);
