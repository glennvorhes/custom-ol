export declare type GlobalObject = Object;
export declare module ol {
    /**
 * Function to perform manipulations before rendering. This function is called
 * with the {@link ol.Map} as first and an optional {@link olx.FrameState} as
 * second argument. Return `true` to keep this function for the next frame,
 * `false` to remove it.
 * @typedef {function(ol.Map, ?olx.FrameState): boolean}
 */
    type PreRenderFunction = () => boolean;
    module animation {
        /**
         * Generate an animated transition that will "bounce" the resolution as it
         * approaches the final value.
         * @param {olx.animation.BounceOptions} options Bounce options.
         * @return {ol.PreRenderFunction} Pre-render function.
         * @api
         */
        function bounce(options: olx.animation.BounceOptions): ol.PreRenderFunction;
    }
}
export declare module olx {
    module animation {
        interface BounceOptions {
            resolution: number;
            start?: number;
            duration?: number;
            easing: ((t: number) => number);
        }
    }
}
