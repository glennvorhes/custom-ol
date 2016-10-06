// export const ol = require('../ol/ol-build')
"use strict";
var ol;
(function (ol) {
    var animation;
    (function (animation) {
        /**
         * Generate an animated transition that will "bounce" the resolution as it
         * approaches the final value.
         * @param {olx.animation.BounceOptions} options Bounce options.
         * @return {ol.PreRenderFunction} Pre-render function.
         * @api
         */
        function bounce(options) {
            return function () { return true; };
        }
        animation.bounce = bounce;
    })(animation = ol.animation || (ol.animation = {}));
})(ol = exports.ol || (exports.ol = {}));
