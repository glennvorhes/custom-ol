// Type definitions for OpenLayers v3.18.2
// Project: http://openlayers.org/
// Definitions by: Wouter Goedhart <https://github.com/woutergd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace olx {
    interface StaticImageOptions {

        /** Attributions */
        attributions?: Array<ol.Attribution>

        /*** The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you are using the WebGL renderer or if you want to access pixel data with the Canvas renderer. See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail. */
        crossOrigin?: string

        /*** Extent of the image in map coordinates. This is the [left, bottom, right, top] map coordinates of your image.*/
        imageExtent: ol.Extent;

        /*** Size of the image in pixels.*/
        imageSize?: ol.Size;

        /*** experimental Optional function to load an image given a URL.*/
        imageLoadFunction?: ol.TileLoadFunctionType;

        /*** Optional logo.*/
        logo?: olx.LogoOptions;

        /*** experimental Projection.*/
        projection: ol.proj.Projection;

        /*** Image URL.*/
        url: string;
    }

    interface ZoomToExtentOptions {
        /*** Class name. Default is ol-zoom-extent.*/
        className?: string;

        /*** Target.*/
        target?: Element;

        /*** Text label to use for the button. Default is E. Instead of text, also a Node (e.g. a span element) can be used.*/
        label?: string | Node;

        /*** Text label to use for the button tip. Default is Zoom to extent.*/
        tipLabel?: string;

        /*** The extent to zoom to. If undefined the validity extent of the view projection is used.*/
        extent: ol.Extent;
    }

    interface OverviewMapOptions {
        /*** Whether the control should start collapsed or not (expanded). Default to true.*/
        collapsed?: boolean;
        /*** Text label to use for the expanded overviewmap button. Default is «. Instead of text, also a Node (e.g. a span element) can be used.*/
        collapseLabel? :string | Node;
        /*** Whether the control can be collapsed or not. Default to true.*/
        collapsible?: boolean;
        /*** Text label to use for the collapsed overviewmap button. Default is ». Instead of text, also a Node (e.g. a span element) can be used.*/
        label?: string | Node;
        /*** Layers for the overview map. If not set, then all main map layers are used instead.*/
        layers?: ol.layer.Layer[] | ol.Collection<ol.layer.Layer>;
        /*** Function called when the control should be re-rendered. This is called in a requestAnimationFrame callback.*/
        render?: Function;
        /*** Specify a target if you want the control to be rendered outside of the map's viewport.*/
        target?: Element;
        /*** Text label to use for the button tip. Default is Overview map*/
        tipLabel?: string;
        /*** Custom view for the overview map. If not provided, a default view with an EPSG:3857 projection will be used.*/
        view?: ol.View;
    }

    interface RotateOptions {
        /*** CSS class name. Default is ol-rotate.*/
        className?: string;
        /*** Text label to use for the rotate button. Default is ⇧. Instead of text, also a Node (e.g. a span element) can be used.*/
        label?: string | Element;
        /*** Text label to use for the rotate tip. Default is Reset rotation.*/
        tipLabel?: string;
        /*** Animation duration in milliseconds. Default is 250.*/
        duration?: number;
        /*** Hide the control when rotation is 0. Default is true.*/
        autoHide?: boolean;
        /*** Function called when the control should be re-rendered. This is called in a requestAnimationFrame callback.*/
        render?: Function;
        /*** Function called when the control is clicked. This will override the default resetNorth.*/
        resetNorth?: Function;
        /*** Target.*/
        target?: Element;
    }

    interface AttributionControlOptions {
        /*** CSS class name. Default is ol-attribution.*/
        className?: string;
        /*** Target.*/
        target?: Element;
        /**
         * Specify if attributions can be collapsed. If you use an OSM source,
         * should be set to false — see OSM Copyright — Default is true.
         */
        collapsible?: boolean;
        /*** Specify if attributions should be collapsed at startup. Default is true.*/
        collapsed?: boolean;
        /*** Text label to use for the button tip. Default is "Attributions".*/
        tipLabel?: Array<ol.layer.Layer> | ol.Collection<ol.layer.Layer>;
        /**
         * Text label to use for the collapsed attributions button. Default is i.
         * Instead of text, also a Node (e.g. a span element) can be used.
         */
        label?: string | Node;
        /**
         * Text label to use for the expanded attributions button. Default is ».
         * Instead of text, also a Node (e.g. a span element) can be used.
         */
        collapseLabel?: string | Node;
        /*** Function called when the control should be re-rendered. This is called in a requestAnimationFrame callback.*/
        render?: Function;
    }

    interface AttributionOptions {

        /** HTML markup for this attribution. */
        html: string;
    }

    interface DeviceOrientationOptions {

        /**
         * Start tracking. Default is false.
         */
        tracking?: boolean;
    }

    interface FrameState {

        /**
         *
         */
        pixelRatio: number;

        /**
         *
         */
        time: number;

        /**
         *
         */
        viewState: olx.ViewState;
    }

    interface FeatureOverlayOptions {

        /**
         * Features
         */
        features?: Array<ol.Feature> | ol.Collection<ol.Feature> | ol.style.StyleFunction;

        /**
         * Map
         */
        map: ol.Map;

        /**
         * Style
         */
        style: ol.style.Style | Array<ol.style.Style>;
    }

    interface GeolocationOptions {

        /**
         * Start Tracking. Default is false.
         */
        tracking?: boolean;

        /**
         * Tracking options. See http://www.w3.org/TR/geolocation-API/#position_options_interface.
         */
        trackingOptions?: PositionOptions;

        /**
         * The projection the position is reported in.
         */
        projection?: ol.proj.ProjectionLike | ol.proj.Projection;
    }

    interface GraticuleOptions {

        /** Reference to an ol.Map object. */
        map?: ol.Map;

        /** The maximum number of meridians and parallels from the center of the map. The default value is 100, which means that at most 200 meridians and 200 parallels will be displayed. The default value is appropriate for conformal projections like Spherical Mercator. If you increase the value more lines will be drawn and the drawing performance will decrease. */
        maxLines?: number;

        /** The stroke style to use for drawing the graticule. If not provided, the lines will be drawn with rgba(0,0,0,0.2), a not fully opaque black. */
        strokeStyle?: ol.style.Stroke;

        /** The target size of the graticule cells, in pixels. Default value is 100 pixels. */
        targetSize?: number;
    }

    interface BaseWMSOptions {

        /** Attributions. */
        attributions?: Array<ol.Attribution>;

        /** WMS request parameters. At least a LAYERS param is required. STYLES is '' by default. VERSION is 1.3.0 by default. WIDTH, HEIGHT, BBOX and CRS (SRS for WMS version < 1.3.0) will be set dynamically. */
        params?: any;

        /** The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you are using the WebGL renderer or if you want to access pixel data with the Canvas renderer. See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail. */
        crossOrigin?: string;

        /** experimental Use the ol.Map#pixelRatio value when requesting the image from the remote server. Default is true. */
        hidpi?: boolean;

        /** experimental The type of the remote WMS server: mapserver, geoserver or qgis. Only needed if hidpi is true. Default is undefined. */
        serverType?: ol.source.wms.ServerType;

        /** WMS service URL. */
        url?: string;

        /** Logo. */
        logo?: olx.LogoOptions;

        /** experimental Projection. */
        projection?: ol.proj.ProjectionLike;
    }

    interface ImageWMSOptions extends BaseWMSOptions {

        /** experimental Optional function to load an image given a URL. */
        imageLoadFunction?: ol.ImageLoadFunctionType;

        /** Ratio. 1 means image requests are the size of the map viewport, 2 means twice the width and height of the map viewport, and so on. Must be 1 or higher. Default is 1.5. */
        ratio?: number;

        /** Resolutions. If specified, requests will be made for these resolutions only. */
        resolutions?: Array<number>;
    }

    interface TileWMSOptions {

        attributions?: Array<ol.Attribution>;

        /**WMS request parameters. At least a LAYERS param is required. STYLES is '' by default. VERSION is 1.3.0 by default. WIDTH, HEIGHT, BBOX and CRS (SRS for WMS version < 1.3.0) will be set dynamically. Required.*/
        params: Object;
        /**The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you are using the WebGL renderer or if you want to access pixel data with the Canvas renderer. See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail.*/
        crossOrigin?: string;

        /** The size in pixels of the gutter around image tiles to ignore. By setting this property to a non-zero value, images will be requested that are wider and taller than the tile size by a value of 2 x gutter. Defaults to zero. Using a non-zero value allows artifacts of rendering at tile edges to be ignored. If you control the WMS service it is recommended to address "artifacts at tile edges" issues by properly configuring the WMS service. For example, MapServer has a tile_map_edge_buffer configuration parameter for this. See http://mapserver.org/output/tile_mode.html. */
        gutter?: number;

        /** Use the ol.Map#pixelRatio value when requesting the image from the remote server. Default is true.*/
        hidpi?: boolean;

        logo?: string | olx.LogoOptions;

        /** Tile grid. Base this on the resolutions, tilesize and extent supported by the server. If this is not defined, a default grid will be used: if there is a projection extent, the grid will be based on that; if not, a grid based on a global extent with origin at 0,0 will be used. */
        tileGrid?: ol.tilegrid.TileGrid;

        /** experimental Maximum zoom. */
        maxZoom?: number;

        projection?: ol.proj.ProjectionLike;
        reprojectionErrorThreshold?: number;

        /** experimental Optional function to load a tile given a URL. */
        tileLoadFunction?: ol.TileLoadFunctionType;

        /** WMS service URL. */
        url?: string;

        /** WMS service urls. Use this instead of url when the WMS supports multiple urls for GetMap requests. */
        urls?: Array<string>;

        /** experimental The type of the remote WMS server. Currently only used when hidpi is true. Default is undefined. */
        serverType?: ol.source.wms.ServerType;

        /** experimental Whether to wrap the world horizontally. When set to false, only one world will be rendered. When true, tiles will be requested for one world only, but they will be wrapped horizontally to render multiple worlds. The default is true. */
        wrapX?: boolean;
    }
    interface OSMOptions {
        /** Attributions */
        attributions?: ol.AttributionLike;
        /** Cache size. Default is 2048. */
        cacheSize?: number;
        /**
         * The crossOrigin attribute for loaded images. Note that you must provide a crossOrigin value if you are using the WebGL
         * renderer or if you want to access pixel data with the Canvas renderer.
         * See https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image for more detail. Default is anonymous.
         */
        crossOrigin?: string;
        /** Max zoom. Default is 19. */
        maxZoom?: number;
        /** Whether the layer is opaque. Default is true. */
        opaque?: boolean;
        /** Maximum allowed reprojection error (in pixels). Default is 0.5. Higher values can increase reprojection performance, but decrease precision. */
        reprojectionErrorThreshold?: number;
        /** Optional function to load a tile given a URL. */
        tileLoadFunction?: ol.TileLoadFunctionType;
        /** URL template. Must include {x}, {y} or {-y}, and {z} placeholders. Default is https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png. */
        url?: string;
        /** Whether to wrap the world horizontally. Default is true. */
        wrapX?: boolean;
    }
    /**
     * Object literal with config options for the map logo.
     */
    interface LogoOptions {
		/**
		* Link url for the logo. Will be followed when the logo is clicked.
		*/
		href: string;

		/**
		* Image src for the logo
		*/
		src: string;

    }

    interface MapOptions {

        /** Controls initially added to the map. If not specified, ol.control.defaults() is used. */
        controls?: any;

        /** The ratio between physical pixels and device-independent pixels (dips) on the device. If undefined then it gets set by using window.devicePixelRatio. */
        pixelRatio?: number;

        /** Interactions that are initially added to the map. If not specified, ol.interaction.defaults() is used. */
        interactions?: any;

        /** The element to listen to keyboard events on. This determines when the KeyboardPan and KeyboardZoom interactions trigger. For example, if this option is set to document the keyboard interactions will always trigger. If this option is not specified, the element the library listens to keyboard events on is the map target (i.e. the user-provided div for the map). If this is not document the target element needs to be focused for key events to be emitted, requiring that the target element has a tabindex attribute. */
        keyboardEventTarget?: any;

        /** Layers. If this is not defined, a map with no layers will be rendered. Note that layers are rendered in the order supplied, so if you want, for example, a vector layer to appear on top of a tile layer, it must come after the tile layer. */
        layers?: Array<any>

        /** When set to true, tiles will be loaded during animations. This may improve the user experience, but can also make animations stutter on devices with slow memory. Default is false. */
        loadTilesWhileAnimating?: boolean;

        /** When set to true, tiles will be loaded while interacting with the map. This may improve the user experience, but can also make map panning and zooming choppy on devices with slow memory. Default is false. */
        loadTilesWhileInteracting?: boolean;

        /** The map logo. A logo to be displayed on the map at all times. If a string is provided, it will be set as the image source of the logo. If an object is provided, the src property should be the URL for an image and the href property should be a URL for creating a link. To disable the map logo, set the option to false. By default, the OpenLayers 3 logo is shown. */
        logo?: any;

        /** Overlays initially added to the map. By default, no overlays are added. */
        overlays?: any;

        /** Renderer. By default, Canvas, DOM and WebGL renderers are tested for support in that order, and the first supported used. Specify a ol.RendererType here to use a specific renderer. Note that at present only the Canvas renderer supports vector data. */
        renderer?: any;

        /** The container for the map, either the element itself or the id of the element. If not specified at construction time, ol.Map#setTarget must be called for the map to be rendered. */
        target?: any;

        /** The map's view. No layer sources will be fetched unless this is specified at construction time or through ol.Map#setView. */
        view?: ViewOptions;
    }

    interface OverlayOptions {

        /**
         * The overlay element.
         */
        element?: Element;

        /**
         * Offsets in pixels used when positioning the overlay. The fist element in the array is the horizontal offset. A positive value shifts the overlay right. The second element in the array is the vertical offset. A positive value shifts the overlay down. Default is [0, 0].
         */
        offset?: Array<number>;

        /**
         * The overlay position in map projection.
         */
        position?: ol.Coordinate;

        /**
         * Defines how the overlay is actually positioned with respect to its position property. Possible values are 'bottom-left', 'bottom-center', 'bottom-right', 'center-left', 'center-center', 'center-right', 'top-left', 'top-center', and 'top-right'. Default is 'top-left'.
         */
        positioning?: ol.OverlayPositioning;

        /**
         * Whether event propagation to the map viewport should be stopped. Default is true. If true the overlay is placed in the same container as that of the controls (CSS class name ol-overlaycontainer-stopevent); if false it is placed in the container with CSS class name ol-overlaycontainer.
         */
        stopEvent?: boolean;

        /**
         * Whether the overlay is inserted first in the overlay container, or appended. Default is true. If the overlay is placed in the same container as that of the controls (see the stopEvent option) you will probably set insertFirst to true so the overlay is displayed below the controls.
         */
        insertFirst?: boolean;

        /**
         * If set to true the map is panned when calling setPosition, so that the overlay is entirely visible in the current viewport. The default is false.
         */
        autoPan?: boolean;

        /**
         * The options used to create a ol.animation.pan animation. This animation is only used when autoPan is enabled. By default the default options for ol.animation.pan are used. If set to null the panning is not animated.
         */
        autoPanAnimation?: olx.animation.PanOptions;

        /**
         * The margin (in pixels) between the overlay and the borders of the map when autopanning. The default is 20.
         */
        autoPanMargin?: number;
    }

    interface ViewOptions {

        /** The initial center for the view. The coordinate system for the center is specified with the projection option. Default is undefined, and layer sources will not be fetched if this is not set. */
        center?: ol.Coordinate;

        /** Rotation constraint. false means no constraint. true means no constraint, but snap to zero near zero. A number constrains the rotation to that number of values. For example, 4 will constrain the rotation to 0, 90, 180, and 270 degrees. The default is true. */
        constrainRotation?: boolean;

        /** Enable rotation. Default is true. If false a rotation constraint that always sets the rotation to zero is used. The constrainRotation option has no effect if enableRotation is false. */
        enableRotation?: boolean;

        /**The extent that constrains the center, in other words, center cannot be set outside this extent. Default is undefined. */
        extent?: ol.Extent;

        /** The maximum resolution used to determine the resolution constraint. It is used together with minResolution (or maxZoom) and zoomFactor. If unspecified it is calculated in such a way that the projection's validity extent fits in a 256x256 px tile. If the projection is Spherical Mercator (the default) then maxResolution defaults to 40075016.68557849 / 256 = 156543.03392804097. */
        maxResolution?: number;

        /** The minimum resolution used to determine the resolution constraint. It is used together with maxResolution (or minZoom) and zoomFactor. If unspecified it is calculated assuming 29 zoom levels (with a factor of 2). If the projection is Spherical Mercator (the default) then minResolution defaults to 40075016.68557849 / 256 / Math.pow(2, 28) = 0.0005831682455839253. */
        minResolution?: number;

        /** The maximum zoom level used to determine the resolution constraint. It is used together with minZoom (or maxResolution) and zoomFactor. Default is 28. Note that if minResolution is also provided, it is given precedence over maxZoom. */
        maxZoom?: number;

        /** The minimum zoom level used to determine the resolution constraint. It is used together with maxZoom (or minResolution) and zoomFactor. Default is 0. Note that if maxResolution is also provided, it is given precedence over minZoom. */
        minZoom?: number;

        /** The projection. Default is EPSG:3857 (Spherical Mercator). */
        projection?: ol.proj.ProjectionLike | ol.proj.Projection;

        /** The initial resolution for the view. The units are projection units per pixel (e.g. meters per pixel). An alternative to setting this is to set zoom. Default is undefined, and layer sources will not be fetched if neither this nor zoom are defined. */
        resolution?: number;

        /** Resolutions to determine the resolution constraint. If set the maxResolution, minResolution, minZoom, maxZoom, and zoomFactor options are ignored. */
        resolutions?: Array<number>;

        /** The initial rotation for the view in radians (positive rotation clockwise). Default is 0. */
        rotation?: number;

        /** Only used if resolution is not defined. Zoom level used to calculate the initial resolution for the view. The initial resolution is determined using the ol.View#constrainResolution method. */
        zoom?: number;

        /** The zoom factor used to determine the resolution constraint. Default is 2. */
        zoomFactor?: number;
    }

    interface ViewState {

        /**
         *
         */
        center: ol.Coordinate;

        /**
         *
         */
        projection: ol.proj.Projection;

        /**
         *
         */
        resolution: number;

        /**
         *
         */
        rotation: number;
    }

    interface Projection {
        /**
         * The SRS identifier code, e.g. EPSG:4326.
         */
        code: string;

        /**
        * Units. Required unless a proj4 projection is defined for code.
        */
        units?: ol.proj.Units;

        /**
        * The validity extent for the SRS.
        */
        extent?: Array<number>;

        /**
        * The axis orientation as specified in Proj4. The default is enu.
        */
        axisOrientation?: string;

        /**
        * Whether the projection is valid for the whole globe. Default is false.
        */
        global?: boolean;

        /**
        * experimental The world extent for the SRS.
        */
        worldExtent?: ol.Extent;

        /**
        *  experimental Function to determine resolution at a point. The function is called with
        *  a {number} view resolution and an {ol.Coordinate} as arguments, and returns the {number}
        *  resolution at the passed coordinate.
        */
        getPointResolution?: (resolution: number, coordinate: ol.Coordinate) => number;
    }

    namespace animation {

        interface BounceOptions {

            /**
             * The resolution to start the bounce from, typically map.getView().getResolution().
             */
            resolution: number;

            /**
             * The start time of the animation. Default is immediately.
             */
            start?: number;

            /**
             * The duration of the animation in milliseconds. Default is 1000.
             */
            duration?: number;

            /**
             * The easing function to use. Can be an ol.easing or a custom function. Default is ol.easing.upAndDown.
             */
            easing?: (t: number) => number;
        }

        interface PanOptions {

            /**
             * The resolution to start the bounce from, typically map.getView().getResolution().
             */
            source: ol.Coordinate;

            /**
             * The start time of the animation. Default is immediately.
             */
            start?: number;

            /**
             * The duration of the animation in milliseconds. Default is 1000.
             */
            duration?: number;

            /**
             * The easing function to use. Can be an ol.easing or a custom function. Default is ol.easing.upAndDown.
             */
            easing?: (t: number) => number;
        }

        interface RotateOptions {

            /**
             * The rotation value (in radians) to begin rotating from, typically map.getView().getRotation(). If undefined then 0 is assumed.
             */
            rotation?: number;

            /**
             * The rotation center/anchor. The map rotates around the center of the view if unspecified.
             */
            anchor?: ol.Coordinate;

            /**
             * The start time of the animation. Default is immediately.
             */
            start?: number;

            /**
             * The duration of the animation in milliseconds. Default is 1000.
             */
            duration?: number;

            /**
             * The easing function to use. Can be an ol.easing or a custom function. Default is ol.easing.upAndDown.
             */
            easing?: (t: number) => number
        }

        interface ZoomOptions {

            /**
             * The resolution to begin zooming from, typically map.getView().getResolution().
             */
            resolution: number;

            /**
             * The start time of the animation. Default is immediately.
             */
            start?: number;

            /**
             * The duration of the animation in milliseconds. Default is 1000.
             */
            duration?: number;

            /**
             * The easing function to use. Can be an ol.easing or a custom function. Default is ol.easing.upAndDown.
             */
            easing?: (t: number) => number
        }
    }

    namespace control {

        interface DefaultsOptions {

            /**
             * Attribution. Default is true.
             */
            attribution?: boolean;

            /**
             * Attribution options.
             */
            //TODO: Replace with olx.control.AttributionOptions
            attributionOptions?: any;

            /**
             * Rotate. Default is true;
             */
            rotate?: boolean;

            /**
             * Rotate options
             */
            //TODO: Replace with olx.control.RotateOptions
            rotateOptions?: any;

            /**
             * Zoom. Default is true
             */
            zoom?: boolean;

            /**
             *
             */
            //TODO: Replace with olx.control.ZoomOptions
            zoomOptions?: any;
        }
    }

    namespace interaction {
        interface DefaultsOptions {
            /*** Whether Alt-Shift-drag rotate is desired. Default is true.*/
            altShiftDragRotate?: boolean;
            /*** Whether double click zoom is desired. Default is true.*/
            doubleClickZoom?: boolean;
            /*** Whether keyboard interaction is desired. Default is true.*/
            keyboard?: boolean;
            /*** Whether mousewheel zoom is desired. Default is true.*/
            mouseWheelZoom?: boolean;
            /*** Whether Shift-drag zoom is desired. Default is true.*/
            shiftDragZoom?: boolean;
            /*** Whether drag pan is desired. Default is true.*/
            dragPan?: boolean;
            /*** Whether pinch rotate is desired. Default is true.*/
            pinchRotate?: boolean;
            /*** Whether pinch zoom is desired. Default is true.*/
            pinchZoom?: boolean;
            /*** Zoom delta*/
            zoomDelta?: number;
            /*** Zoom duration*/
            zoomDuration?: number;
        }
        interface InteractionOptions {
            /**
             * Method called by the map to notify the interaction that a browser event was dispatched to the map.
             * The function may return false to prevent the propagation of the event to other interactions in
             * the map's interactions chain. Required.
             */
            handleEvent: Function;
        }
        interface ModifyOptions {
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event will
             * be considered to add or move a vertex to the sketch. Default is ol.events.condition.primaryAction.
             */
            condition?: ol.events.ConditionType;
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event should
             * be handled. By default, ol.events.condition.singleClick with ol.events.condition.noModifierKeys results
             * in a vertex deletion.
             */
            deleteCondition?: ol.events.ConditionType;
            /*** Pixel tolerance for considering the pointer close enough to a segment or vertex for editing. Default is 10.*/
            pixelTolerance?: number;
            /*** Style used for the features being modified. By default the default edit style is used (see ol.style).*/
            style?: ol.style.Style | Array<ol.style.Style> | ol.style.StyleFunction;
            /*** The features the interaction works on. Required.*/
            features: ol.Collection<ol.Feature>;
            /*** Wrap the world horizontally on the sketch overlay. Default is false.*/
            wrapX?: boolean;
        }
        interface DragBoxOptions {
            /*** CSS class name for styling the box. The default is ol-dragbox.*/
            className?: string;
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event should be handled.
             * Default is ol.events.condition.always.
             */
            condition?: ol.events.ConditionType;
            /*** A function that takes a ol.MapBrowserEvent and two ol.Pixels to indicate whether a boxend event should be fired.*/
            boxEndCondition?: ol.interaction.DragBoxEndConditionType;
        }
        interface DrawOptions {
            /**
             * The maximum distance in pixels between "down" and "up" for a "up" event to be considered a "click" event and actually
             * add a point/vertex to the geometry being drawn. Default is 6 pixels. That value was chosen for the draw interaction
             * to behave correctly on mouse as well as on touch devices.
             */
            clickTolerance?: number;
            /**
             * Destination collection for the drawn features.
             */
            features?: ol.Collection<ol.Feature>;
            /**
             * Destination source for the drawn features.
             */
            source?: ol.source.Vector;
            /**
             * Pixel distance for snapping to the drawing finish. Default is 12.
             */
            snapTolerance?: number;
            /**
             * Drawing type ('Point', 'LineString', 'Polygon', 'MultiPoint', 'MultiLineString', 'MultiPolygon' or 'Circle'). Required.
             */
            type: ol.geom.GeometryType;
            /**
             * The number of points that can be drawn before a polygon ring or line string is finished. The default is no restriction.
             */
            maxPoints?: number;
            /**
             * The number of points that must be drawn before a polygon ring or line string can be finished. Default is 3 for polygon
             * rings and 2 for line strings.
             */
            minPoints?: number;
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether the drawing can be finished.
             */
            finishCondition?: ol.events.ConditionType;
            /**
             * Style for sketch features.
             */
            style?: ol.style.Style | Array<ol.style.Style> | ol.style.StyleFunction;
            /**
             * Function that is called when a geometry's coordinates are updated.
             */
            geometryFunction?: ol.interaction.DrawGeometryFunctionType;
            /**
             * Geometry name to use for features created by the draw interaction.
             */
            geometryName?: string;
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event should be handled.
             * By default ol.events.condition.noModifierKeys, i.e. a click, adds a vertex or deactivates freehand drawing.
             */
            condition?: ol.events.ConditionType;
            /**
             * Condition that activates freehand drawing for lines and polygons. This function takes an ol.MapBrowserEvent and returns
             * a boolean to indicate whether that event should be handled. The default is ol.events.condition.shiftKeyOnly, meaning that
             *  the Shift key activates freehand drawing.
             */
            freehandCondition?: ol.events.ConditionType;
            /**
             * Wrap the world horizontally on the sketch overlay. Default is false.
             */
            wrapX?: boolean;
        }
        interface DoubleClickZoomOptions {
            /**
             * Animation duration in milliseconds. Default is 250.
             */
            duration?: number;
            /**
             * The zoom delta applied on each double click, default is 1.
             */
            delta?: number;
        }
        interface DragAndDropOptions {
            /**
             * Format constructors.
             */
            formatConstructors?: Array<ol.format.Feature>;
            /**
             * Target projection. By default, the map's view's projection is used.
             */
            projection: ol.proj.ProjectionLike;
            /**
             * The element that is used as the drop target, default is the viewport element.
             */
            target?: Element;
        }
        interface DragPanOptions {
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event should be handled.
             * Default is ol.events.condition.noModifierKeys.
             */
            condition?: ol.events.ConditionType;
            /**
             * Kinetic inertia to apply to the pan.
             */
            kinetic?: ol.Kinetic;
        }
        interface DragRotateOptions {
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event should be handled.
             * Default is ol.events.condition.altShiftKeysOnly.
             */
            condition?: ol.events.ConditionType;
            /**
             * Animation duration in milliseconds. Default is 250.
             */
            duration?: number;
        }
        interface DragRotateAndZoomOptions {
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event should be handled.
             * Default is ol.events.condition.shiftKeyOnly.
             */
            condition?: ol.events.ConditionType;
            /**
             * Animation duration in milliseconds. Default is 400.
             */
            duration?: number;
        }
        interface DragZoomOptions {
            /**
             * CSS class name for styling the box. The default is ol-dragzoom.
             */
            className?: string;
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event should be handled.
             * Default is ol.events.condition.shiftKeyOnly.
             */
            condition?: ol.events.ConditionType;
            /**
             * Animation duration in milliseconds. Default is 200.
             */
            duration?: number;
            /**
             * Use interaction for zooming out. Default is false.
             */
            out?: boolean;
        }
        interface KeyboardPanOptions {
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event should be handled.
             * Default is ol.events.condition.noModifierKeys and ol.events.condition.targetNotEditable.
             */
            condition?: ol.events.ConditionType;
            /**
             * Animation duration in milliseconds. Default is 100.
             */
            duration?: number;
            /**
             * Pixel The amount to pan on each key press. Default is 128 pixels.
             */
            pixelDelta?: number;
        }
        interface KeyboardZoomOptions {
            /**
             * Animation duration in milliseconds. Default is 100.
             */
            duration?: number;
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event should be handled.
             * Default is ol.events.condition.targetNotEditable.
             */
            condition?: ol.events.ConditionType;
            /**
             * The amount to zoom on each key press. Default is 1.
             */
            delta?: number;
        }
        interface MouseWheelZoomOptions {
            /**
             * Animation duration in milliseconds. Default is 250.
             */
            duration?: number;
            /**
             * Enable zooming using the mouse's location as the anchor. Default is true.
             * When set to false, zooming in and out will zoom to the center of the screen instead of zooming on the mouse's location.
             */
            useAnchor?: boolean;
        }
        interface PinchRotateOptions {
            /**
             * The duration of the animation in milliseconds. Default is 250.
             */
            duration?: number;
            /**
             * Minimal angle in radians to start a rotation. Default is 0.3.
             */
            threshold?: number;
        }
        interface PinchZoomOptions {
            /**
             * Animation duration in milliseconds. Default is 400.
             */
            duration?: number;
        }
        interface PointerOptions {
            /**
             * Function handling "down" events. If the function returns true then a drag sequence is started.
             */
            handleDownEvent?: Function;
            /**
             * Function handling "drag" events. This function is called on "move" events during a drag sequence.
             */
            handleDragEvent?: Function;
            /**
             * Method called by the map to notify the interaction that a browser event was dispatched to the map.
             * The function may return false to prevent the propagation of the event to other interactions in the map's interactions chain.
             */
            handleEvent?: Function;
            /**
             * Function handling "move" events. This function is called on "move" events, also during a drag sequence
             * (so during a drag sequence both the handleDragEvent function and this function are called).
             */
            handleMoveEvent?: Function;
            /**
             * Function handling "up" events. If the function returns false then the current drag sequence is stopped.
             */
            handleUpEvent?: Function;
        }
        interface SnapOptions {
            /**
             * Snap to these features. Either this option or source should be provided.
             */
            features?: ol.Collection<ol.Feature>;
            /**
             * Snap to edges. Default is true.
             */
            edge?: boolean;
            /**
             * Snap to vertices. Default is true.
             */
            vertex?: boolean;
            /**
             * Pixel tolerance for considering the pointer close enough to a segment or vertex for snapping. Default is 10 pixels.
             */
            pixelTolerance?: number;
            /**
             * Snap to features from this source. Either this option or features should be provided.
             */
            source?: ol.source.Vector;
        }
        interface SelectOptions {
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event should be handled.
             * By default, this is ol.events.condition.never.
             * Use this if you want to use different events for add and remove instead of toggle.
             */
            addCondition?: ol.events.ConditionType;
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event should be handled.
             * This is the event for the selected features as a whole. By default, this is ol.events.condition.singleClick.
             * Clicking on a feature selects that feature and removes any that were in the selection.
             * Clicking outside any feature removes all from the selection.
             * See toggle, add, remove options for adding/removing extra features to/ from the selection.
             */
            condition?: ol.events.ConditionType;
            /**
             * A list of layers from which features should be selected. Alternatively, a filter function can be provided.
             * The function will be called for each layer in the map and should return true for layers that you want to be selectable.
             * If the option is absent, all visible layers will be considered selectable.
             */
            layers?: Array<ol.layer.Layer> | ((layer: ol.layer.Layer) => boolean);
            /**
             * Style for the selected features. By default the default edit style is used (see ol.style).
             */
            style?: ol.style.Style | Array<ol.style.Style> | ol.style.StyleFunction;
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event should be handled.
             * By default, this is ol.events.condition.never.
             * Use this if you want to use different events for add and remove instead of toggle.
             */
            removeCondition?: ol.events.ConditionType;
            /**
             * A function that takes an ol.MapBrowserEvent and returns a boolean to indicate whether that event should be handled.
             * This is in addition to the condition event. By default, ol.events.condition.shiftKeyOnly,
             * i.e. pressing shift as well as the condition event, adds that feature to the current selection if it is not currently
             * selected, and removes it if it is. See add and remove if you want to use different events instead of a toggle.
             */
            toggleCondition?: ol.events.ConditionType;
            /**
             * A boolean that determines if the default behaviour should select only single features or all (overlapping)
             * features at the clicked map position. Default is false i.e single select
             */
            multi?: boolean;
            /**
             * Collection where the interaction will place selected features. Optional. If not set the interaction will create a collection.
             * In any case the collection used by the interaction is returned by ol.interaction.Select#getFeatures.
             */
            features?: ol.Collection<ol.Feature>;
            /**
             * A function that takes an ol.Feature and an ol.layer.Layer and returns true if the feature may be selected or false otherwise.
             */
            filter?: ol.interaction.SelectFilterFunction;
            /**
             * Wrap the world horizontally on the selection overlay. Default is true.
             */
            wrapX?: boolean;
        }
    }

    namespace layer {

        interface BaseOptions {
            /**
             * Opacity (0, 1). Default is 1.
             */
            opacity?: number;

            /**
             * Visibility. Default is true.
             */
            visible?: boolean;

            /**
             * The bounding extent for layer rendering. The layer will not be rendered outside of this extent.
             */
            extent?: ol.Extent;

            zIndex?: number;
            /**
             * The minimum resolution (inclusive) at which this layer will be visible.
             */
            minResolution?: number;

            /**
             * The maximum resolution (exclusive) below which this layer will be visible.
             */
            maxResolution?: number;
        }

        interface GroupOptions extends BaseOptions {

            /**
             * Child layers
             */
            layers?: Array<ol.layer.Base> | ol.Collection<ol.layer.Base>;
        }

        interface HeatmapOptions extends VectorOptions {

            /**
             * The color gradient of the heatmap, specified as an array of CSS color strings. Default is ['#00f', '#0ff', '#0f0', '#ff0', '#f00'].
             */
            gradient?: Array<String>;

            /**
             * Radius size in pixels. Default is 8.
             */
            radius?: number;

            /**
             * Blur size in pixels. Default is 15.
             */
            blur?: number;

            /**
             * Shadow size in pixels. Default is 250.
             */
            shadow?: number;
        }

        interface ImageOptions extends LayerOptions {
        }

        interface LayerOptions extends BaseOptions {

            /**
             * The layer source (or null if not yet set).
             */
            source?: ol.source.Source;
        }

        interface TileOptions extends LayerOptions {

            /**
             * Preload. Load low-resolution tiles up to preload levels. By default preload is 0, which means no preloading.
             */
            preload?: number;

            /**
             * Source for this layer.
             */
            source?: ol.source.Tile;

            /**
             * Use interim tiles on error. Default is true.
             */
            useInterimTilesOnError?: boolean;
        }

        interface VectorOptions extends LayerOptions {

            /**
             * When set to true, feature batches will be recreated during animations. This means that no vectors will be shown clipped, but the setting will have a performance impact for large amounts of vector data. When set to false, batches will be recreated when no animation is active. Default is false.
             */
            updateWhileAnimating?: boolean;

            /**
             * When set to true, feature batches will be recreated during interactions. See also updateWhileInteracting. Default is false.
             */
            updateWhileInteracting?: boolean;

            /**
             * Render order. Function to be used when sorting features before rendering. By default features are drawn in the order that they are created. Use null to avoid the sort, but get an undefined draw order.
             */
            // TODO: replace any with the expected function, unclear in documentation what the parameters are
            renderOrder?: any;

            /**
             * The buffer around the viewport extent used by the renderer when getting features from the vector source for the rendering or hit-detection. Recommended value: the size of the largest symbol, line width or label. Default is 100 pixels.
             */
            renderBuffer?: number;

            /**
             * Source.
             */
            source?: ol.source.Vector;

            /**
             * Layer style. See ol.style for default style which will be used if this is not defined.
             */
            style?: ol.style.Style | Array<ol.style.Style> | any;
        }
    }

    namespace source {

        interface VectorOptions {
            /**
             * Attributions.
             */
            attributions?: Array<ol.Attribution>;

            /**
             * Features. If provided as {@link ol.Collection}, the features in the source
             * and the collection will stay in sync.
             */
            features?: Array<ol.Feature> | ol.Collection<ol.Feature>;

            /**
             * The feature format used by the XHR feature loader when `url` is set.
             * Required if `url` is set, otherwise ignored. Default is `undefined`.
             */
            format?: ol.format.Feature;

            /**
             * The loader function used to load features, from a remote source for example.
             * Note that the source will create and use an XHR feature loader when `url` is
             * set.
             */
            loader?: ol.FeatureLoader;

            /**
             * Logo.
             */
            logo?: string | olx.LogoOptions;

            /**
             * The loading strategy to use. By default an {@link ol.loadingstrategy.all}
             * strategy is used, a one-off strategy which loads all features at once.
             */
            strategy?: ol.LoadingStrategy;

            /**
             * Setting this option instructs the source to use an XHR loader (see
             * {@link ol.featureloader.xhr}) and an {@link ol.loadingstrategy.all} for a
             * one-off download of all features from that URL.
             * Requires `format` to be set as well.
             */
            url?: string;

            /**
             * By default, an RTree is used as spatial index. When features are removed and
             * added frequently, and the total number of features is low, setting this to
             * `false` may improve performance.
             */
            useSpatialIndex?: boolean;

            /**
             * Wrap the world horizontally. Default is `true`. For vector editing across the
             * -180° and 180° meridians to work properly, this should be set to `false`. The
             * resulting geometry coordinates will then exceed the world bounds.
             */
            wrapX?: boolean;
        }

        interface ClusterOptions extends VectorOptions{

            /**
             * Minimum distance in pixels between clusters. Default is 20.
             */
            distance?: number;

            extent?: ol.Extent;

            geometryFunction?: any;

            projection?: ol.proj.ProjectionLike;

            source: ol.source.Vector;

        }

        interface WMTSOptions {
            attributions?: Array<ol.Attribution>;
            crossOrigin?: string;
            logo?: string | olx.LogoOptions;
            tileGrid: ol.tilegrid.WMTS;     // REQUIRED !
            projection?: ol.proj.ProjectionLike;
            reprojectionErrorThreshold?: number;
            requestEncoding?: ol.source.WMTSRequestEncoding;
            layer: string;      //REQUIRED
            style: string;      //REQUIRED
            tileClass?: Function;
            tilePixelRatio?: number;
            version?: string;
            format?: string;
            matrixSet: string;  //REQUIRED
            dimensions?: Object;
            url?: string;
            maxZoom?: number;
            tileLoadFunction?: ol.TileLoadFunctionType;
            urls?: Array<string>;
            wrapX: boolean;
        }
    }

    namespace style {

        interface FillOptions {
            color?: ol.Color | string;
        }

        interface StyleOptions {
            geometry?: string | ol.geom.Geometry | ol.style.GeometryFunction;
            fill?: ol.style.Fill;
            image?: ol.style.Image;
            stroke?: ol.style.Stroke;
            text?: ol.style.Text;
            zIndex?: number;
        }

        interface TextOptions {
            font?: string;
            offsetX?: number;
            offsetY?: number;
            scale?: number;
            rotation?: number;
            text?: string;
            textAlign?: string;
            textBaseline?: string;
            fill?: ol.style.Fill;
            stroke?: ol.style.Stroke;
        }
        interface StrokeOptions {
            color?: ol.Color | string;
            lineCap?: string;
            lineJoin?: string;
            lineDash?: Array<number>;
            miterLimit?: number;
            width?: number;
        }
        interface IconOptions {
            anchor?: Array<number>;
            anchorOrigin?: string;
            anchorXUnits?: string;
            anchorYUnits?: string;
            crossOrigin?: string;
            img?: ol.Image | HTMLCanvasElement;
            offset?: Array<number>;
            offsetOrigin?: string;
            opacity?: number;
            scale?: number;
            snapToPixel?: boolean;
            rotateWithView?: boolean;
            rotation?: number;
            size?: ol.Size;
            imgSize?: ol.Size;
            src?: string;
        }
        interface CircleOptions {
            fill?: ol.style.Fill;
            radius: number;
            snapToPixel?: boolean;
            stroke?: ol.style.Stroke;
        }
    }

    namespace tilegrid {

        interface TileGridOptions {

            /**
             * Extent for the tile grid. No tiles outside this extent will be requested by ol.source.Tile sources. When no origin or origins are configured, the origin will be set to the bottom-left corner of the extent. When no sizes are configured, they will be calculated from the extent.
             */
            extent?: ol.Extent;

            /**
             * Minimum zoom. Default is 0.
             */
            minZoom?: number;

            /**
             * Origin, i.e. the bottom-left corner of the grid. Default is null.
             */
            origin?: ol.Coordinate;

            /**
             * Origins, i.e. the bottom-left corners of the grid for each zoom level. If given, the array length should match the length of the resolutions array, i.e. each resolution can have a different origin.
             */
            origins?: Array<ol.Coordinate>;

            /**
             * Resolutions. The array index of each resolution needs to match the zoom level. This means that even if a minZoom is configured, the resolutions array will have a length of maxZoom + 1.
             */
            resolutions?: Array<number>;

            /**
             * Tile size. Default is [256, 256].
             */
            tileSize?: number | ol.Size;

            /**
             * Tile sizes. If given, the array length should match the length of the resolutions array, i.e. each resolution can have a different tile size.
             */
            tileSizes?: Array<number | ol.Size>;
        }

        interface WMTSOptions {

            /**
             * Extent for the tile grid. No tiles outside this extent will be requested by ol.source.WMTS sources. When no origin or origins are configured, the origin will be calculated from the extent. When no sizes are configured, they will be calculated from the extent.
             */
            extent?: ol.Extent;

            /**
             * Origin, i.e. the top-left corner of the grid.
             */
            origin?: ol.Coordinate;

            /**
             * Origins, i.e. the top-left corners of the grid for each zoom level. The length of this array needs to match the length of the resolutions array.
             */
            origins?: Array<ol.Coordinate>;

            /**
             * Resolutions. The array index of each resolution needs to match the zoom level. This means that even if a minZoom is configured, the resolutions array will have a length of maxZoom + 1
             */
            resolutions?: Array<number>;

            /**
             * matrix IDs. The length of this array needs to match the length of the resolutions array.
             */
            matrixIds?: Array<string>;

            /**
             * Number of tile rows and columns of the grid for each zoom level. The values here are the TileMatrixWidth and TileMatrixHeight advertised in the GetCapabilities response of the WMTS, and define the grid's extent together with the origin. An extent can be configured in addition, and will further limit the extent for which tile requests are made by sources.
             */
            sizes?: Array<ol.Size>;

            /**
             * Tile size.
             */
            tileSize?: number | ol.Size;

            /**
             * Tile sizes. The length of this array needs to match the length of the resolutions array.
             */
            tileSizes?: Array<number | ol.Size>;

            /**
             * Number of tile columns that cover the grid's extent for each zoom level. Only required when used with a source that has wrapX set to true, and only when the grid's origin differs from the one of the projection's extent. The array length has to match the length of the resolutions array, i.e. each resolution will have a matching entry here.
             */
            widths?: Array<number>;
        }

        interface XYZOptions {

            /**
             * Extent for the tile grid. The origin for an XYZ tile grid is the top-left corner of the extent. The zero level of the grid is defined by the resolution at which one tile fits in the provided extent. If not provided, the extent of the EPSG:3857 projection is used.
             */
            extent?: ol.Extent;

            /**
             * Maximum zoom. The default is ol.DEFAULT_MAX_ZOOM. This determines the number of levels in the grid set. For example, a maxZoom of 21 means there are 22 levels in the grid set.
             */
            maxZoom?: number;

            /**
             * Minimum zoom. Default is 0.
             */
            minZoom?: number;

            /**
             * Tile size in pixels. Default is [256, 256].
             */
            tileSize?: number | ol.Size;
        }

        interface ZoomifyOptions {

            /**
             * Resolutions
             */
            resolutions: Array<number>;
        }
    }

    namespace view {

        interface FitGeometryOptions {

            /**
             * Padding (in pixels) to be cleared inside the view. Values in the array are top, right, bottom and left padding. Default is [0, 0, 0, 0].
             */
            padding?: Array<number>;

            /**
             * Constrain the resolution. Default is true.
             */
            constrainResolution?: boolean;

            /**
             * Get the nearest extent. Default is false.
             */
            nearest?: boolean;

            /**
             * Minimum resolution that we zoom to. Default is 0.
             */
            minResolution?: number;

            /**
             * Maximum zoom level that we zoom to. If minResolution is given, this property is ignored.
             */
            maxZoom?: number;
        }
    }

    namespace format {
        interface WKTOptions {
            /**
             * Whether to split GeometryCollections into multiple features on reading. Default is false.
             */
            splitCollection?: boolean;
        }

        interface GeoJSONOptions {

            /**
             * Default data projection.
             */
            defaultDataProjection?: ol.proj.ProjectionLike | ol.proj.Projection;

            /**
             * Geometry name to use when creating features
             */
            geometryName?: string;
        }

        interface ReadOptions {

            /**
             * Projection of the data we are reading. If not provided, the projection will be derived from the data (where possible) or the defaultDataProjection of the format is assigned (where set). If the projection can not be derived from the data and if no defaultDataProjection is set for a format, the features will not be reprojected.
             */
            dataProjection?: ol.proj.ProjectionLike | ol.proj.Projection;

            /**
             * Projection of the feature geometries created by the format reader. If not provided, features will be returned in the dataProjection.
             */
            featureProjection?: ol.proj.ProjectionLike | ol.proj.Projection;
        }

        interface WriteOptions {

            /**
             * Projection of the data we are writing. If not provided, the defaultDataProjection of the format is assigned (where set). If no defaultDataProjection is set for a format, the features will be returned in the featureProjection.
             */
            dataProjection?: ol.proj.ProjectionLike | ol.proj.Projection;

            /**
             * Projection of the feature geometries that will be serialized by the format writer.
             */
            featureProjection?: ol.proj.ProjectionLike | ol.proj.Projection;

            /**
             * When writing geometries, follow the right-hand rule for linear ring orientation. This means that polygons will have counter-clockwise exterior rings and clockwise interior rings. By default, coordinates are serialized as they are provided at construction. If true, the right-hand rule will be applied. If false, the left-hand rule will be applied (clockwise for exterior and counter-clockwise for interior rings). Note that not all formats support this. The GeoJSON format does use this property when writing geometries.
             */
            rightHanded?: boolean;
        }
    }

    namespace control {
        interface ControlOptions {
            /**
             * The element is the control's container element. This only needs to be specified if you're developing a custom control.
             */
            element?: Element;

            /**
             * Function called when the control should be re-rendered. This is called in a requestAnimationFrame callback.
             */
            render?: any;

            /**
             * Specify a target if you want the control to be rendered outside of the map's viewport.
             */
            target?: Element | string;
        }
    }
}

/**
 * A high-performance, feature-packed library for all your mapping needs.
 */
declare module "openlayers" {
    export = olx;
}
