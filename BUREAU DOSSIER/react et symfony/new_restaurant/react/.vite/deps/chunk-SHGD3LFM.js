import {
  __commonJS
} from "./chunk-DC5AMYBS.js";

// node_modules/react-auth-kit/utils/utils.js
var require_utils = __commonJS({
  "node_modules/react-auth-kit/utils/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isAuthenticated = isAuthenticated;
    function isAuthenticated(auth) {
      if (auth.auth) {
        return new Date(auth.auth.expiresAt) > /* @__PURE__ */ new Date();
      }
      return false;
    }
  }
});

export {
  require_utils
};
//# sourceMappingURL=chunk-SHGD3LFM.js.map
