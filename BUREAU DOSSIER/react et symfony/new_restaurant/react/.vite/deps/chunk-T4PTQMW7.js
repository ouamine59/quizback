import {
  __commonJS
} from "./chunk-DC5AMYBS.js";

// node_modules/react-auth-kit/utils/reducers.js
var require_reducers = __commonJS({
  "node_modules/react-auth-kit/utils/reducers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.doRefresh = doRefresh;
    exports.doSignIn = doSignIn;
    exports.doSignOut = doSignOut;
    function doSignIn(signInParams) {
      const authType = signInParams.auth.type || "Bearer";
      const authToken = signInParams.auth.token;
      return {
        auth: {
          token: authToken,
          type: authType
        },
        refresh: signInParams.refresh,
        userState: signInParams.userState || {}
      };
    }
    function doRefresh(refreshTokenParam) {
      let ret = {
        auth: {
          token: refreshTokenParam.newAuthToken,
          type: refreshTokenParam.newAuthTokenType || "Bearer"
        }
      };
      if (refreshTokenParam.newAuthUserState) {
        ret = {
          ...ret,
          userState: refreshTokenParam.newAuthUserState
        };
      }
      if (refreshTokenParam.newRefreshToken) {
        ret = {
          ...ret,
          refresh: refreshTokenParam.newRefreshToken
        };
      }
      return ret;
    }
    function doSignOut() {
      return {
        auth: null
      };
    }
  }
});

export {
  require_reducers
};
//# sourceMappingURL=chunk-T4PTQMW7.js.map
