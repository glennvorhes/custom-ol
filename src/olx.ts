import {ol, GlobalObject} from './ol-mod';

ol.

/**
 * @namespace olx
 */
export declare module olx {

    /**
     * @namespace olx.animation
     */
    module animation {
        /**
         * @typedef {{resolution: number,
         *     start: (number|undefined),
         *     duration: (number|undefined),
         *     easing: (function(number):number|undefined)}}
         */
        interface BounceOptions {
            resolution: number;
            start?: number;
            duration?: number;
            easing: ((t: number) => number);
        }


        /**
         * @typedef {{source: ol.Coordinate,
         *     start: (number|undefined),
         *     duration: (number|undefined),
         *     easing: (function(number):number|undefined)}}
         */
        interface PanOptions {
            source: ol.Coordinate;
            start?: number;
            duration?: number;
            easing: ((t: number) => number);
        }


        /**
         * @typedef {{rotation: (number|undefined),
         *     anchor: (ol.Coordinate|undefined),
         *     start: (number|undefined),
         *     duration: (number|undefined),
         *     easing: (function(number):number|undefined)}}
         */
        interface RotateOptions {
            rotation?: number;
            anchor?: ol.Coordinate;
            start?: number;
            duration?: number;
            easing: ((t: number) => number);
        }


        /**
         * @typedef {{resolution: number,
         *     start: (number|undefined),
         *     duration: (number|undefined),
         *     easing: (function(number):number|undefined)}}
         */
        interface ZoomOptions {
            resolution: number;
            start?: number;
            duration?: number;
            easing: ((t: number) => number);
        }


    }

    /**
     * @namespace olx.control
     */
    module control {
        /**
         * @typedef {{className: (string|undefined),
         *     collapsible: (boolean|undefined),
         *     collapsed: (boolean|undefined),
         *     tipLabel: (string|undefined),
         *     label: (string|Node|undefined),
         *     collapseLabel: (string|Node|undefined),
         *     render: (function(ol.MapEvent)|undefined),
         *     target: (Element|undefined)}}
         */
        interface AttributionOptions {
            className?: string;
            target?: Element;
            collapsible?: boolean;
            collapsed?: boolean;
            tipLabel?: string;
            label?: (string | Node);
            collapseLabel?: (string | Node);
            render?: ((event: ol.MapEvent) => any);
        }


        /**
         * @typedef {{element: (Element|undefined),
         *     render: (function(ol.MapEvent)|undefined),
         *     target: (Element|string|undefined)}}
         */
        interface ControlOptions {
            element?: Element;
            render?: ((event: ol.MapEvent) => any);
            target?: (Element | string);
        }


        /**
         * @typedef {{attribution: (boolean|undefined),
         *     attributionOptions: (olx.control.AttributionOptions|undefined),
         *     rotate: (boolean|undefined),
         *     rotateOptions: (olx.control.RotateOptions|undefined),
         *     zoom: (boolean|undefined),
         *     zoomOptions: (olx.control.ZoomOptions|undefined)}}
         */
        interface DefaultsOptions {
            attribution?: boolean;
            attributionOptions?: olx.control.AttributionOptions;
            rotate?: boolean;
            rotateOptions?: olx.control.RotateOptions;
            zoom?: boolean;
            zoomOptions?: olx.control.ZoomOptions;
        }


        /**
         * @typedef {{className: (string|undefined),
         *     label: (string|Node|undefined),
         *     labelActive: (string|Node|undefined),
         *     tipLabel: (string|undefined),
         *     keys: (boolean|undefined),
         *     target: (Element|undefined),
         *     source: (Element|string|undefined)}}
         */
        interface FullScreenOptions {
            className?: string;
            label?: (string | Node);
            labelActive?: (string | Node);
            tipLabel?: string;
            keys?: boolean;
            target?: Element;
            source?: (Element | string);
        }


        /**
         * @typedef {{className: (string|undefined),
         *     coordinateFormat: (ol.CoordinateFormatType|undefined),
         *     projection: ol.ProjectionLike,
         *     render: (function(ol.MapEvent)|undefined),
         *     target: (Element|undefined),
         *     undefinedHTML: (string|undefined)}}
         */
        interface MousePositionOptions {
            className?: string;
            coordinateFormat?: ol.CoordinateFormatType;
            projection: ol.ProjectionLike;
            render?: ((event: ol.MapEvent) => any);
            target?: Element;
            undefinedHTML?: string;
        }


        /**
         * @typedef {{collapsed: (boolean|undefined),
         *     collapseLabel: (string|Node|undefined),
         *     collapsible: (boolean|undefined),
         *     label: (string|Node|undefined),
         *     layers: (Array.<ol.layer.Layer>|ol.Collection.<ol.layer.Layer>|undefined),
         *     render: (function(ol.MapEvent)|undefined),
         *     target: (Element|undefined),
         *     tipLabel: (string|undefined),
         *     view: (ol.View|undefined)}}
         */
        interface OverviewMapOptions {
            collapsed?: boolean;
            collapseLabel?: (string | Node);
            collapsible?: boolean;
            label?: (string | Node);
            layers?: (ol.layer.Layer[] | ol.Collection<ol.layer.Layer>);
            render?: ((event: ol.MapEvent) => any);
            target?: Element;
            tipLabel?: string;
            view?: ol.View;
        }


        /**
         * @typedef {{className: (string|undefined),
         *     minWidth: (number|undefined),
         *     render: (function(ol.MapEvent)|undefined),
         *     target: (Element|undefined),
         *     units: (ol.control.ScaleLine.Units|string|undefined)}}
         */
        interface ScaleLineOptions {
            className?: string;
            minWidth?: number;
            render?: ((event: ol.MapEvent) => any);
            target?: Element;
            units?: (ol.control.ScaleLine.Units | string);
        }


        /**
         * @typedef {{duration: (number|undefined),
         *     className: (string|undefined),
         *     label: (string|Element|undefined),
         *     tipLabel: (string|undefined),
         *     target: (Element|undefined),
         *     render: (function(ol.MapEvent)|undefined),
         *     resetNorth: (function()|undefined),
         *     autoHide: (boolean|undefined)}}
         */
        interface RotateOptions {
            className?: string;
            label?: (string | Element);
            tipLabel?: string;
            duration?: number;
            autoHide?: boolean;
            render?: ((event: ol.MapEvent) => any);
            resetNorth?: (() => any);
            target?: Element;
        }


        /**
         * @typedef {{duration: (number|undefined),
         *     className: (string|undefined),
         *     zoomInLabel: (string|Node|undefined),
         *     zoomOutLabel: (string|Node|undefined),
         *     zoomInTipLabel: (string|undefined),
         *     zoomOutTipLabel: (string|undefined),
         *     delta: (number|undefined),
         *     target: (Element|undefined)}}
         */
        interface ZoomOptions {
            duration?: number;
            className?: string;
            zoomInLabel?: (string | Node);
            zoomOutLabel?: (string | Node);
            zoomInTipLabel?: string;
            zoomOutTipLabel?: string;
            delta?: number;
            target?: Element;
        }


        /**
         * @typedef {{className: (string|undefined),
         *     duration: (number|undefined),
         *     maxResolution: (number|undefined),
         *     minResolution: (number|undefined),
         *     render: (function(ol.MapEvent)|undefined)}}
         */
        interface ZoomSliderOptions {
            className?: string;
            duration?: number;
            maxResolution?: number;
            minResolution?: number;
            render?: ((event: ol.MapEvent) => any);
        }


        /**
         * @typedef {{className: (string|undefined),
         *     target: (Element|undefined),
         *     label: (string|Node|undefined),
         *     tipLabel: (string|undefined),
         *     extent: (ol.Extent|undefined)}}
         */
        interface ZoomToExtentOptions {
            className?: string;
            target?: Element;
            label?: (string | Node);
            tipLabel?: string;
            extent?: ol.Extent;
        }


    }

    /**
     * @namespace olx.format
     */
    module format {
        /**
         * @typedef {{dataProjection: ol.ProjectionLike,
         *     featureProjection: ol.ProjectionLike,
         *     rightHanded: (boolean|undefined)}}
         */
        interface ReadOptions {
            dataProjection: ol.ProjectionLike;
            featureProjection: ol.ProjectionLike;
        }


        /**
         * @typedef {{dataProjection: ol.ProjectionLike,
         *     featureProjection: ol.ProjectionLike,
         *     rightHanded: (boolean|undefined),
         *     decimals: (number|undefined)}}
         */
        interface WriteOptions {
            dataProjection: ol.ProjectionLike;
            featureProjection: ol.ProjectionLike;
            rightHanded?: boolean;
            decimals?: number;
        }


        /**
         * @typedef {{defaultDataProjection: ol.ProjectionLike,
         *     geometryName: (string|undefined)}}
         */
        interface GeoJSONOptions {
            defaultDataProjection: ol.ProjectionLike;
            geometryName?: string;
        }


        /**
         * @typedef {{geometryName: (string|undefined)}}
         */
        interface EsriJSONOptions {
            geometryName?: string;
        }

        /**
         * @typedef {{featureClass: (function((ol.geom.Geometry|Object.<string, *>)=)|
         *         function(ol.geom.GeometryType,Array.<number>,
         *             (Array.<number>|Array.<Array.<number>>),Object.<string, *>)|
         *         undefined),
         *     geometryName: (string|undefined),
         *     layers: (Array.<string>|undefined),
         *     layerName: (string|undefined)}}
         */
        interface MVTOptions {
            featureClass?: (((geom: (ol.geom.Geometry | { [k: string]: any })) => any) | ((geom: ol.geom.GeometryType, arg2: number[], arg3: (number[] | number[][]), arg4: { [k: string]: any }) => any));
            geometryName?: string;
            layerName?: string;
            layers?: string[];
        }


        /**
         * @typedef {{factor: (number|undefined),
         *     geometryLayout: (ol.geom.GeometryLayout|undefined)}}
         */
        interface PolylineOptions {
            factor?: number;
            geometryLayout?: ol.geom.GeometryLayout;
        }


        /**
         * @typedef {{defaultDataProjection: ol.ProjectionLike}}
         */
        interface TopoJSONOptions {
            defaultDataProjection: ol.ProjectionLike;
        }


        /**
         * @typedef {{altitudeMode: (ol.format.IGCZ|undefined)}}
         */
        interface IGCOptions {
            altitudeMode?: ol.format.IGCZ;
        }


        /**
         * @typedef {{extractStyles: (boolean|undefined),
         *     defaultStyle: (Array.<ol.style.Style>|undefined),
         *     showPointNames: (boolean|undefined),
         *     writeStyles: (boolean|undefined)}}
         */
        interface KMLOptions {
            extractStyles?: boolean;
            showPointNames?: boolean;
            defaultStyle?: ol.style.Style[];
            writeStyles?: boolean;
        }


        /**
         * @typedef {{featureNS: (Object.<string, string>|string|undefined),
         *     featureType: (Array.<string>|string|undefined),
         *     srsName: string,
         *     surface: (boolean|undefined),
         *     curve: (boolean|undefined),
         *     multiCurve: (boolean|undefined),
         *     multiSurface: (boolean|undefined),
         *     schemaLocation: (string|undefined)}}
         */
        interface GMLOptions {
            featureNS?: ({ [k: string]: string } | string);
            featureType?: (string[] | string);
            srsName: string;
            surface?: boolean;
            curve?: boolean;
            multiCurve?: boolean;
            multiSurface?: boolean;
            schemaLocation?: string;
        }


        /**
         * @typedef {{readExtensions: (function(ol.Feature, Node)|undefined)}}
         */
        interface GPXOptions {
            readExtensions?: ((feature: ol.Feature, node: Node) => any);
        }


        /**
         * @typedef {{featureNS: (Object.<string, string>|string|undefined),
         *     featureType: (Array.<string>|string|undefined),
         *     gmlFormat: (ol.format.GMLBase|undefined),
         *     schemaLocation: (string|undefined)}}
         */
        interface WFSOptions {
            featureNS?: ({ [k: string]: string } | string);
            featureType?: (string[] | string);
            gmlFormat?: ol.format.GMLBase;
            schemaLocation?: string;
        }


        /**
         * @typedef {{featureNS: string,
         *     featurePrefix: string,
         *     featureTypes: Array.<string>,
         *     srsName: (string|undefined),
         *     handle: (string|undefined),
         *     outputFormat: (string|undefined),
         *     maxFeatures: (number|undefined),
         *     geometryName: (string|undefined),
         *     propertyNames: (Array.<string>|undefined),
         *     startIndex: (number|undefined),
         *     count: (number|undefined),
         *     bbox: (ol.Extent|undefined),
         *     filter: (ol.format.ogc.filter.Filter|undefined),
         *     resultType: (string|undefined)}}
         */
        interface WFSWriteGetFeatureOptions {
            featureNS: string;
            featurePrefix: string;
            featureTypes: string[];
            srsName?: string;
            handle?: string;
            outputFormat?: string;
            maxFeatures?: number;
            geometryName?: string;
            propertyNames?: string[];
            startIndex?: number;
            count?: number;
            bbox?: ol.Extent;
            filter?: ol.format.ogc.filter.Filter;
            resultType?: string;
        }


        /**
         * @typedef {{featureNS: string,
         *     featurePrefix: string,
         *     featureType: string,
         *     srsName: (string|undefined),
         *     handle: (string|undefined),
         *     nativeElements: Array.<Object>,
         *     gmlOptions: (olx.format.GMLOptions|undefined)}}
         */
        interface WFSWriteTransactionOptions {
            featureNS: string;
            featurePrefix: string;
            featureType: string;
            srsName?: string;
            handle?: string;
            nativeElements: GlobalObject[];
            gmlOptions?: olx.format.GMLOptions;
        }


        /**
         * @typedef {{splitCollection: (boolean|undefined)}}
         */
        interface WKTOptions {
            splitCollection?: boolean;
        }


        /**
         * @typedef {{
         *     layers: (Array.<string>|undefined)
         * }}
         */
        interface WMSGetFeatureInfoOptions {
            layers?: string[];
        }


    }

    /**
     * @namespace olx.interaction
     */
    module interaction {
        /**
         * Object literal with config options for interactions.
         * @typedef {{handleEvent: function(ol.MapBrowserEvent):boolean}}
         */
        interface InteractionOptions {
            handleEvent: (event: ol.MapBrowserEvent) => boolean;
        }


        /**
         * Interactions for the map. Default is `true` for all options.
         * @typedef {{altShiftDragRotate: (boolean|undefined),
         *     doubleClickZoom: (boolean|undefined),
         *     keyboard: (boolean|undefined),
         *     mouseWheelZoom: (boolean|undefined),
         *     shiftDragZoom: (boolean|undefined),
         *     dragPan: (boolean|undefined),
         *     pinchRotate: (boolean|undefined),
         *     pinchZoom: (boolean|undefined),
         *     zoomDelta: (number|undefined),
         *     zoomDuration: (number|undefined)}}
         */
        interface DefaultsOptions {
            altShiftDragRotate?: boolean;
            doubleClickZoom?: boolean;
            keyboard?: boolean;
            mouseWheelZoom?: boolean;
            shiftDragZoom?: boolean;
            dragPan?: boolean;
            pinchRotate?: boolean;
            pinchZoom?: boolean;
            zoomDelta?: number;
            zoomDuration?: number;
        }


        /**
         * @typedef {{duration: (number|undefined),
         *     delta: (number|undefined)}}
         */
        interface DoubleClickZoomOptions {
            duration?: number;
            delta?: number;
        }


        /**
         * @typedef {{formatConstructors: (Array.<function(new: ol.format.Feature)>|undefined),
         *     projection: ol.ProjectionLike,
         *     target: (Element|undefined)}}
         */
        interface DragAndDropOptions {
            formatConstructors?: ((n: ol.format.Feature) => any)[];
            projection: ol.ProjectionLike;
            target?: Element;
        }


        /**
         * @typedef {{className: (string|undefined),
         *     condition: (ol.EventsConditionType|undefined),
         *     boxEndCondition: (ol.DragBoxEndConditionType|undefined)}}
         */
        interface DragBoxOptions {
            className?: string;
            condition?: ol.EventsConditionType;
            boxEndCondition?: ol.DragBoxEndConditionType;
        }


        /**
         * @typedef {{condition: (ol.EventsConditionType|undefined),
         *     kinetic: (ol.Kinetic|undefined)}}
         */
        interface DragPanOptions {
            condition?: ol.EventsConditionType;
            kinetic?: ol.Kinetic;
        }


        /**
         * @typedef {{condition: (ol.EventsConditionType|undefined),
         *     duration: (number|undefined)}}
         */
        interface DragRotateAndZoomOptions {
            condition?: ol.EventsConditionType;
            duration?: number;
        }


        /**
         * @typedef {{condition: (ol.EventsConditionType|undefined),
         *     duration: (number|undefined)}}
         */
        interface DragRotateOptions {
            condition?: ol.EventsConditionType;
            duration?: number;
        }


        /**
         * @typedef {{className: (string|undefined),
         *     condition: (ol.EventsConditionType|undefined),
         *     duration: (number|undefined),
         *     out: (boolean|undefined)}}
         */
        interface DragZoomOptions {
            className?: string;
            condition?: ol.EventsConditionType;
            duration?: number;
            out?: boolean;
        }


        /**
         * @typedef {{clickTolerance: (number|undefined),
         *     features: (ol.Collection.<ol.Feature>|undefined),
         *     source: (ol.source.Vector|undefined),
         *     snapTolerance: (number|undefined),
         *     type: ol.geom.GeometryType,
         *     maxPoints: (number|undefined),
         *     minPoints: (number|undefined),
         *     finishCondition: (ol.EventsConditionType|undefined),
         *     style: (ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined),
         *     geometryFunction: (ol.DrawGeometryFunctionType|undefined),
         *     geometryName: (string|undefined),
         *     condition: (ol.EventsConditionType|undefined),
         *     freehandCondition: (ol.EventsConditionType|undefined),
         *     wrapX: (boolean|undefined)}}
         */
        interface DrawOptions {
            clickTolerance?: number;
            features?: ol.Collection<ol.Feature>;
            source?: ol.source.Vector;
            snapTolerance?: number;
            type: ol.geom.GeometryType;
            maxPoints?: number;
            minPoints?: number;
            finishCondition?: ol.EventsConditionType;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
            geometryFunction?: ol.DrawGeometryFunctionType;
            geometryName?: string;
            condition?: ol.EventsConditionType;
            freehandCondition?: ol.EventsConditionType;
            wrapX?: boolean;
        }


        /**
         * @typedef {{
         *     features: (ol.Collection.<ol.Feature>|undefined),
         *     layers: (undefined|Array.<ol.layer.Layer>|function(ol.layer.Layer): boolean)
         * }}
         */
        interface TranslateOptions {
            features?: ol.Collection<ol.Feature>;
            layers?: (ol.layer.Layer[] | ((layer: ol.layer.Layer) => boolean));
        }


        /**
         * @typedef {{condition: (ol.EventsConditionType|undefined),
         *     duration: (number|undefined),
         *     pixelDelta: (number|undefined)}}
         */
        interface KeyboardPanOptions {
            condition?: ol.EventsConditionType;
            duration?: number;
            pixelDelta?: number;
        }


        /**
         * @typedef {{duration: (number|undefined),
         *     condition: (ol.EventsConditionType|undefined),
         *     delta: (number|undefined)}}
         */
        interface KeyboardZoomOptions {
            duration?: number;
            condition?: ol.EventsConditionType;
            delta?: number;
        }


        /**
         * @typedef {{condition: (ol.EventsConditionType|undefined),
         *     deleteCondition: (ol.EventsConditionType|undefined),
         *     pixelTolerance: (number|undefined),
         *     style: (ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined),
         *     features: ol.Collection.<ol.Feature>,
         *     wrapX: (boolean|undefined)}}
         */
        interface ModifyOptions {
            condition?: ol.EventsConditionType;
            deleteCondition?: ol.EventsConditionType;
            pixelTolerance?: number;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
            features: ol.Collection<ol.Feature>;
            wrapX?: boolean;
        }


        /**
         * @typedef {{duration: (number|undefined),
         *     useAnchor: (boolean|undefined)}}
         */
        interface MouseWheelZoomOptions {
            duration?: number;
            useAnchor?: boolean;
        }


        /**
         * @typedef {{threshold: (number|undefined),
         *     duration: (number|undefined)}}
         */
        interface PinchRotateOptions {
            duration?: number;
            threshold?: number;
        }


        /**
         * @typedef {{duration: (number|undefined)}}
         */
        interface PinchZoomOptions {
            duration?: number;
        }


        /**
         * @typedef {{handleDownEvent: (function(ol.MapBrowserPointerEvent):boolean|undefined),
         *     handleDragEvent: (function(ol.MapBrowserPointerEvent)|undefined),
         *     handleEvent: (function(ol.MapBrowserEvent):boolean|undefined),
         *     handleMoveEvent: (function(ol.MapBrowserPointerEvent)|undefined),
         *     handleUpEvent: (function(ol.MapBrowserPointerEvent):boolean|undefined)}}
         */
        interface PointerOptions {
            handleDownEvent?: ((event: ol.MapBrowserPointerEvent) => boolean);
            handleDragEvent?: ((event: ol.MapBrowserPointerEvent) => boolean);
            handleEvent?: ((event: ol.MapBrowserPointerEvent) => boolean);
            handleMoveEvent?: ((event: ol.MapBrowserPointerEvent) => boolean);
            handleUpEvent?: ((event: ol.MapBrowserPointerEvent) => boolean);
        }


        /**
         * @typedef {{addCondition: (ol.EventsConditionType|undefined),
         *     condition: (ol.EventsConditionType|undefined),
         *     layers: (undefined|Array.<ol.layer.Layer>|function(ol.layer.Layer): boolean),
         *     style: (ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined),
         *     removeCondition: (ol.EventsConditionType|undefined),
         *     toggleCondition: (ol.EventsConditionType|undefined),
         *     multi: (boolean|undefined),
         *     features: (ol.Collection.<ol.Feature>|undefined),
         *     filter: (ol.SelectFilterFunction|undefined),
         *     wrapX: (boolean|undefined)}}
         */
        interface SelectOptions {
            addCondition?: ol.EventsConditionType;
            condition?: ol.EventsConditionType;
            layers?: (ol.layer.Layer[] | ((layer: ol.layer.Layer) => boolean));
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
            removeCondition?: ol.EventsConditionType;
            toggleCondition?: ol.EventsConditionType;
            multi?: boolean;
            features?: ol.Collection<ol.Feature>;
            filter?: ol.SelectFilterFunction;
            wrapX?: boolean;
        }


        /**
         * Options for snap
         * @typedef {{
         *     features: (ol.Collection.<ol.Feature>|undefined),
         *     pixelTolerance: (number|undefined),
         *     source: (ol.source.Vector|undefined),
         *     edge: (boolean|undefined),
         *     vertex: (boolean|undefined)
         * }}
         */
        interface SnapOptions {
            features?: ol.Collection<ol.Feature>;
            edge?: boolean;
            vertex?: boolean;
            pixelTolerance?: number;
            source?: ol.source.Vector;
        }


    }

    /**
     * @namespace olx.layer
     */
    module layer {
        /**
         * @typedef {{opacity: (number|undefined),
         *     visible: (boolean|undefined),
         *     extent: (ol.Extent|undefined),
         *     zIndex: (number|undefined),
         *     minResolution: (number|undefined),
         *     maxResolution: (number|undefined)}}
         */
        interface BaseOptions {
            opacity?: number;
            visible?: boolean;
            extent?: ol.Extent;
            zIndex?: number;
            minResolution?: number;
            maxResolution?: number;
        }


        /**
         * @typedef {{opacity: (number|undefined),
         *     source: (ol.source.Source|undefined),
         *     visible: (boolean|undefined),
         *     extent: (ol.Extent|undefined),
         *     zIndex: (number|undefined),
         *     minResolution: (number|undefined),
         *     maxResolution: (number|undefined)}}
         */
        interface LayerOptions {
            opacity?: number;
            source?: ol.source.Source;
            visible?: boolean;
            extent?: ol.Extent;
            zIndex?: number;
            minResolution?: number;
            maxResolution?: number;
        }


        /**
         * @typedef {{opacity: (number|undefined),
         *     visible: (boolean|undefined),
         *     extent: (ol.Extent|undefined),
         *     zIndex: (number|undefined),
         *     minResolution: (number|undefined),
         *     maxResolution: (number|undefined),
         *     layers: (Array.<ol.layer.Base>|ol.Collection.<ol.layer.Base>|undefined)}}
         */
        interface GroupOptions {
            opacity?: number;
            visible?: boolean;
            extent?: ol.Extent;
            zIndex?: number;
            minResolution?: number;
            maxResolution?: number;
            layers?: (ol.layer.Base[] | ol.Collection<ol.layer.Base>);
        }


        /**
         * @typedef {{gradient: (Array.<string>|undefined),
         *     radius: (number|undefined),
         *     blur: (number|undefined),
         *     shadow: (number|undefined),
         *     weight: (string|function(ol.Feature):number|undefined),
         *     extent: (ol.Extent|undefined),
         *     minResolution: (number|undefined),
         *     maxResolution: (number|undefined),
         *     opacity: (number|undefined),
         *     source: (ol.source.Vector|undefined),
         *     visible: (boolean|undefined)}}
         */
        interface HeatmapOptions {
            gradient?: string[];
            radius?: number;
            blur?: number;
            shadow?: number;
            weight: (string | ((feature: ol.Feature) => number));
            extent?: ol.Extent;
            minResolution?: number;
            maxResolution?: number;
            opacity?: number;
            source: ol.source.Vector;
            visible?: boolean;
        }


        /**
         * @typedef {{opacity: (number|undefined),
         *     map: (ol.Map|undefined),
         *     source: (ol.source.Image|undefined),
         *     visible: (boolean|undefined),
         *     extent: (ol.Extent|undefined),
         *     minResolution: (number|undefined),
         *     maxResolution: (number|undefined)}}
         */
        interface ImageOptions {
            opacity?: number;
            source: ol.source.Image;
            map?: ol.Map;
            visible?: boolean;
            extent?: ol.Extent;
            minResolution?: number;
            maxResolution?: number;
        }


        /**
         * @typedef {{opacity: (number|undefined),
         *     preload: (number|undefined),
         *     source: (ol.source.Tile|undefined),
         *     map: (ol.Map|undefined),
         *     visible: (boolean|undefined),
         *     extent: (ol.Extent|undefined),
         *     minResolution: (number|undefined),
         *     maxResolution: (number|undefined),
         *     useInterimTilesOnError: (boolean|undefined)}}
         */
        interface TileOptions {
            opacity?: number;
            preload?: number;
            source: ol.source.Tile;
            map?: ol.Map;
            visible?: boolean;
            extent?: ol.Extent;
            minResolution?: number;
            maxResolution?: number;
            useInterimTilesOnError?: boolean;
        }


        /**
         * @typedef {{renderOrder: (function(ol.Feature, ol.Feature):number|null|undefined),
         *     minResolution: (number|undefined),
         *     maxResolution: (number|undefined),
         *     opacity: (number|undefined),
         *     renderBuffer: (number|undefined),
         *     source: (ol.source.Vector|undefined),
         *     map: (ol.Map|undefined),
         *     style: (ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined),
         *     updateWhileAnimating: (boolean|undefined),
         *     updateWhileInteracting: (boolean|undefined),
         *     visible: (boolean|undefined)}}
         */
        interface VectorOptions {
            renderOrder?: (feature1: ol.Feature, feature2: ol.Feature) => number;
            map?: ol.Map;
            extent?: ol.Extent;
            minResolution?: number;
            maxResolution?: number;
            opacity?: number;
            renderBuffer?: number;
            source: ol.source.Vector;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
            updateWhileAnimating?: boolean;
            updateWhileInteracting?: boolean;
            visible?: boolean;
        }


        /**
         * @typedef {{extent: (ol.Extent|undefined),
         *     map: (ol.Map|undefined),
         *     minResolution: (number|undefined),
         *     maxResolution: (number|undefined),
         *     opacity: (number|undefined),
         *     renderBuffer: (number|undefined),
         *     renderMode: (ol.layer.VectorTileRenderType|string|undefined),
         *     renderOrder: (function(ol.Feature, ol.Feature):number|undefined),
         *     source: (ol.source.VectorTile|undefined),
         *     style: (ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined),
         *     updateWhileAnimating: (boolean|undefined),
         *     updateWhileInteracting: (boolean|undefined),
         *     visible: (boolean|undefined)}}
         */
        interface VectorTileOptions {
            renderBuffer?: number;
            renderMode?: (ol.layer.VectorTileRenderType | string);
            renderOrder: (feature1: ol.Feature, feature2: ol.Feature) => number;
            map?: ol.Map;
            extent?: ol.Extent;
            minResolution?: number;
            maxResolution?: number;
            opacity?: number;
            source?: ol.source.VectorTile;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
            updateWhileAnimating?: boolean;
            updateWhileInteracting?: boolean;
            visible?: boolean;
        }


    }

    /**
     * @namespace olx.parser
     */
    module parser {
    }

    /**
     * @namespace olx.render
     */
    module render {
        /**
         * @typedef {{size: (ol.Size|undefined),
         *     pixelRatio: (number|undefined)}}
         */
        interface ToContextOptions {
            size?: ol.Size;
            pixelRatio?: number;
        }


    }

    /**
     * @namespace olx.source
     */
    module source {
        /**
         * @typedef {{cacheSize: (number|undefined),
         *     culture: (string|undefined),
         *     key: string,
         *     imagerySet: string,
         *     maxZoom: (number|undefined),
         *     reprojectionErrorThreshold: (number|undefined),
         *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
         *     wrapX: (boolean|undefined)}}
         */
        interface BingMapsOptions {
            cacheSize?: number;
            culture?: string;
            key: string;
            imagerySet: string;
            maxZoom?: number;
            reprojectionErrorThreshold?: number;
            tileLoadFunction?: ol.TileLoadFunctionType;
            wrapX?: boolean;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     distance: (number|undefined),
         *     extent: (ol.Extent|undefined),
         *     format: (ol.format.Feature|undefined),
         *     geometryFunction: (undefined|function(ol.Feature):ol.geom.Point),
         *     logo: (string|undefined),
         *     projection: ol.ProjectionLike,
         *     source: ol.source.Vector,
         *     wrapX: (boolean|undefined)}}
         */
        interface ClusterOptions {
            attributions?: ol.AttributionLike;
            distance?: number;
            extent?: ol.Extent;
            geometryFunction?: ((feature: ol.Feature) => ol.geom.Point);
            format?: ol.format.Feature;
            logo?: string;
            projection?: ol.ProjectionLike;
            source: ol.source.Vector;
            wrapX?: boolean;
        }

        type TileJSON = JSON;

        /**
         * @typedef {{preemptive: (boolean|undefined),
         *     jsonp: (boolean|undefined),
         *     tileJSON: (TileJSON|undefined),
         *     url: (string|undefined)}}
         */
        interface TileUTFGridOptions {
            jsonp?: boolean;
            preemptive?: boolean;
            tileJSON?: TileJSON;
            url?: string;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *            cacheSize: (number|undefined),
         *            crossOrigin: (null|string|undefined),
         *            logo: (string|olx.LogoOptions|undefined),
         *            opaque: (boolean|undefined),
         *            projection: ol.ProjectionLike,
         *            reprojectionErrorThreshold: (number|undefined),
         *            state: (ol.source.State|undefined),
         *            tileClass: (function(new: ol.ImageTile, ol.TileCoord,
         *                                 ol.Tile.State, string, ?string,
         *                                 ol.TileLoadFunctionType)|undefined),
         *            tileGrid: (ol.tilegrid.TileGrid|undefined),
         *            tileLoadFunction: (ol.TileLoadFunctionType|undefined),
         *            tilePixelRatio: (number|undefined),
         *            tileUrlFunction: (ol.TileUrlFunctionType|undefined),
         *            url: (string|undefined),
         *            urls: (Array.<string>|undefined),
         *            wrapX: (boolean|undefined)}}
         */
        interface TileImageOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            logo?: (string | olx.LogoOptions);
            opaque?: boolean;
            projection: ol.ProjectionLike;
            reprojectionErrorThreshold?: number;
            state?: ol.source.State;
            tileClass?: ((n: ol.ImageTile, coords: ol.TileCoord, state: ol.Tile.State, s1: string, s2: string, type: ol.TileLoadFunctionType) => any);
            tileGrid?: ol.tilegrid.TileGrid;
            tileLoadFunction?: ol.TileLoadFunctionType;
            tilePixelRatio?: number;
            tileUrlFunction?: ol.TileUrlFunctionType;
            url?: string;
            urls?: string[];
            wrapX?: boolean;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *            cacheSize: (number|undefined),
         *            format: (ol.format.Feature|undefined),
         *            logo: (string|olx.LogoOptions|undefined),
         *            overlaps: (boolean|undefined),
         *            projection: ol.ProjectionLike,
         *            state: (ol.source.State|undefined),
         *            tileClass: (function(new: ol.VectorTile, ol.TileCoord,
         *                 ol.Tile.State, string, ol.format.Feature,
         *                 ol.TileLoadFunctionType)|undefined),
         *            tileGrid: (ol.tilegrid.TileGrid|undefined),
         *            tileLoadFunction: (ol.TileLoadFunctionType|undefined),
         *            tilePixelRatio: (number|undefined),
         *            tileUrlFunction: (ol.TileUrlFunctionType|undefined),
         *            url: (string|undefined),
         *            urls: (Array.<string>|undefined),
         *            wrapX: (boolean|undefined)}}
         */
        interface VectorTileOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            format?: ol.format.Feature;
            logo?: (string | olx.LogoOptions);
            overlaps?: boolean;
            projection: ol.ProjectionLike;
            state?: ol.source.State;
            tileClass?: ((n: ol.VectorTile, coords: ol.TileCoord, state: ol.Tile.State, s: string, feature: ol.format.Feature, type: ol.TileLoadFunctionType) => any);
            tileGrid?: ol.tilegrid.TileGrid;
            tileLoadFunction?: ol.TileLoadFunctionType;
            tilePixelRatio?: number;
            tileUrlFunction?: ol.TileUrlFunctionType;
            url?: string;
            urls?: string[];
            wrapX?: boolean;
        }


        /**
         * @typedef {{url: (string|undefined),
         *     displayDpi: (number|undefined),
         *     metersPerUnit: (number|undefined),
         *     hidpi: (boolean|undefined),
         *     useOverlay: (boolean|undefined),
         *     projection: ol.ProjectionLike,
         *     ratio: (number|undefined),
         *     resolutions: (Array.<number>|undefined),
         *     imageLoadFunction: (ol.ImageLoadFunctionType|undefined),
         *     params: (Object|undefined)}}
         */
        interface ImageMapGuideOptions {
            url?: string;
            displayDpi?: number;
            metersPerUnit?: number;
            hidpi?: boolean;
            useOverlay?: boolean;
            projection: ol.ProjectionLike;
            ratio?: number;
            resolutions?: number[];
            imageLoadFunction?: ol.ImageLoadFunctionType;
            params?: GlobalObject;
        }


        /**
         * @typedef {{cacheSize: (number|undefined),
         *     layer: string,
         *     reprojectionErrorThreshold: (number|undefined),
         *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
         *     url: (string|undefined)}}
         */
        interface MapQuestOptions {
            cacheSize?: number;
            layer: string;
            reprojectionErrorThreshold?: number;
            tileLoadFunction?: ol.TileLoadFunctionType;
            url?: string;
        }


        /**
         * @typedef {{projection: ol.ProjectionLike,
         *     tileGrid: (ol.tilegrid.TileGrid|undefined),
         *     wrapX: (boolean|undefined)}}
         */
        interface TileDebugOptions {
            projection: ol.ProjectionLike;
            tileGrid?: ol.tilegrid.TileGrid;
            wrapX?: boolean;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     cacheSize: (number|undefined),
         *     crossOrigin: (null|string|undefined),
         *     maxZoom: (number|undefined),
         *     opaque: (boolean|undefined),
         *     reprojectionErrorThreshold: (number|undefined),
         *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
         *     url: (string|undefined),
         *     wrapX: (boolean|undefined)}}
         */
        interface OSMOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            maxZoom?: number;
            opaque?: boolean;
            reprojectionErrorThreshold?: number;
            tileLoadFunction?: ol.TileLoadFunctionType;
            url?: string;
            wrapX?: boolean;
        }


        /**
         * @typedef {{attributions: (Array.<ol.Attribution>|undefined),
         *     crossOrigin: (null|string|undefined),
         *     logo: (string|olx.LogoOptions|undefined),
         *     imageLoadFunction: (ol.ImageLoadFunctionType|undefined),
         *     params: Object.<string,*>,
         *     projection: ol.ProjectionLike,
         *     ratio: (number|undefined),
         *     resolutions: (Array.<number>|undefined),
         *     url: (string|undefined)}}
         */
        interface ImageArcGISRestOptions {
            attributions?: ol.Attribution[];
            crossOrigin?: (string);
            logo?: (string | olx.LogoOptions);
            imageLoadFunction?: ol.ImageLoadFunctionType;
            params?: { [k: string]: any };
            projection: ol.ProjectionLike;
            ratio?: number;
            resolutions?: number[];
            url?: string;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     canvasFunction: ol.CanvasFunctionType,
         *     logo: (string|olx.LogoOptions|undefined),
         *     projection: ol.ProjectionLike,
         *     ratio: (number|undefined),
         *     resolutions: (Array.<number>|undefined),
         *     state: (ol.source.State|undefined)}}
         */
        interface ImageCanvasOptions {
            attributions?: ol.AttributionLike;
            canvasFunction: ol.CanvasFunctionType;
            logo?: (string | olx.LogoOptions);
            projection: ol.ProjectionLike;
            ratio?: number;
            resolutions?: number[];
            state?: ol.source.State;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     logo: (string|olx.LogoOptions|undefined),
         *     projection: ol.ProjectionLike,
         *     ratio: (number|undefined),
         *     renderBuffer: (number|undefined),
         *     resolutions: (Array.<number>|undefined),
         *     source: ol.source.Vector,
         *     style: (ol.style.Style|Array.<ol.style.Style>|ol.StyleFunction|undefined)}}
         */
        interface ImageVectorOptions {
            attributions?: ol.AttributionLike;
            logo?: (string | olx.LogoOptions);
            projection: ol.ProjectionLike;
            ratio?: number;
            renderBuffer?: number;
            resolutions?: number[];
            source: ol.source.Vector;
            style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
        }


        /**
         * @typedef {{sources: Array.<ol.source.Source>,
         *     operation: (ol.RasterOperation|undefined),
         *     lib: (Object|undefined),
         *     threads: (number|undefined),
         *     operationType: (ol.RasterOperationType|undefined)}}
         * @api
         */
        interface RasterOptions {
            sources: ol.source.Source[];
            operation?: ol.RasterOperation;
            lib?: GlobalObject;
            threads?: number;
            operationType?: ol.RasterOperationType;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     crossOrigin: (null|string|undefined),
         *     hidpi: (boolean|undefined),
         *     serverType: (ol.source.wms.ServerType|string|undefined),
         *     logo: (string|olx.LogoOptions|undefined),
         *     imageLoadFunction: (ol.ImageLoadFunctionType|undefined),
         *     params: Object.<string,*>,
         *     projection: ol.ProjectionLike,
         *     ratio: (number|undefined),
         *     resolutions: (Array.<number>|undefined),
         *     url: (string|undefined)}}
         */
        interface ImageWMSOptions {
            attributions?: ol.AttributionLike;
            crossOrigin?: (string);
            hidpi?: boolean;
            serverType?: (ol.source.wms.ServerType | string);
            imageLoadFunction?: ol.ImageLoadFunctionType;
            logo?: (string | olx.LogoOptions);
            params: { [k: string]: any };
            projection: ol.ProjectionLike;
            ratio?: number;
            resolutions?: number[];
            url?: string;
        }


        /**
         * @typedef {{cacheSize: (number|undefined),
         *     layer: string,
         *     minZoom: (number|undefined),
         *     maxZoom: (number|undefined),
         *     opaque: (boolean|undefined),
         *     reprojectionErrorThreshold: (number|undefined),
         *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
         *     url: (string|undefined)}}
         */
        interface StamenOptions {
            cacheSize?: number;
            layer: string;
            minZoom?: number;
            maxZoom?: number;
            opaque?: boolean;
            reprojectionErrorThreshold?: number;
            tileLoadFunction?: ol.TileLoadFunctionType;
            url?: string;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     crossOrigin: (null|string|undefined),
         *     imageExtent: (ol.Extent),
         *     imageLoadFunction: (ol.ImageLoadFunctionType|undefined),
         *     imageSize: (ol.Size|undefined),
         *     logo: (string|olx.LogoOptions|undefined),
         *     projection: ol.ProjectionLike,
         *     url: string}}
         */
        interface ImageStaticOptions {
            attributions?: ol.AttributionLike;
            crossOrigin?: (string);
            imageExtent: ol.Extent;
            imageLoadFunction?: ol.ImageLoadFunctionType;
            logo?: (string | olx.LogoOptions);
            projection: ol.ProjectionLike;
            imageSize?: ol.Size;
            url: string;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     cacheSize: (number|undefined),
         *     crossOrigin: (null|string|undefined),
         *     params: (Object.<string, *>|undefined),
         *     logo: (string|olx.LogoOptions|undefined),
         *     tileGrid: (ol.tilegrid.TileGrid|undefined),
         *     projection: ol.ProjectionLike,
         *     reprojectionErrorThreshold: (number|undefined),
         *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
         *     url: (string|undefined),
         *     urls: (Array.<string>|undefined),
         *     wrapX: (boolean|undefined)}}
         */
        interface TileArcGISRestOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            params?: { [k: string]: any };
            logo?: (string | olx.LogoOptions);
            tileGrid?: ol.tilegrid.TileGrid;
            projection?: ol.ProjectionLike;
            reprojectionErrorThreshold?: number;
            tileLoadFunction?: ol.TileLoadFunctionType;
            url?: string;
            wrapX?: boolean;
            urls?: string[];
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     cacheSize: (number|undefined),
         *     crossOrigin: (null|string|undefined),
         *     jsonp: (boolean|undefined),
         *     reprojectionErrorThreshold: (number|undefined),
         *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
         *     url: string,
         *     wrapX: (boolean|undefined)}}
         */
        interface TileJSONOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            jsonp?: boolean;
            reprojectionErrorThreshold?: number;
            tileLoadFunction?: ol.TileLoadFunctionType;
            url: string;
            wrapX?: boolean;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     cacheSize: (number|undefined),
         *     params: Object.<string,*>,
         *     crossOrigin: (null|string|undefined),
         *     gutter: (number|undefined),
         *     hidpi: (boolean|undefined),
         *     logo: (string|olx.LogoOptions|undefined),
         *     tileGrid: (ol.tilegrid.TileGrid|undefined),
         *     projection: ol.ProjectionLike,
         *     reprojectionErrorThreshold: (number|undefined),
         *     serverType: (ol.source.wms.ServerType|string|undefined),
         *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
         *     url: (string|undefined),
         *     urls: (Array.<string>|undefined),
         *     wrapX: (boolean|undefined)}}
         */
        interface TileWMSOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            params: { [k: string]: any };
            crossOrigin?: (string);
            gutter?: number;
            hidpi?: boolean;
            logo?: (string | olx.LogoOptions);
            tileGrid?: ol.tilegrid.TileGrid;
            projection: ol.ProjectionLike;
            reprojectionErrorThreshold?: number;
            serverType?: (ol.source.wms.ServerType | string);
            tileLoadFunction?: ol.TileLoadFunctionType;
            url?: string;
            urls?: string[];
            wrapX?: boolean;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     features: (Array.<ol.Feature>|ol.Collection.<ol.Feature>|undefined),
         *     format: (ol.format.Feature|undefined),
         *     loader: (ol.FeatureLoader|undefined),
         *     logo: (string|olx.LogoOptions|undefined),
         *     overlaps: (boolean|undefined),
         *     strategy: (ol.LoadingStrategy|undefined),
         *     url: (string|ol.FeatureUrlFunction|undefined),
         *     useSpatialIndex: (boolean|undefined),
         *     wrapX: (boolean|undefined)}}
         */
        interface VectorOptions {
            attributions?: ol.AttributionLike;
            features?: (ol.Feature[] | ol.Collection<ol.Feature>);
            format?: ol.format.Feature;
            loader?: ol.FeatureLoader;
            logo?: (string | olx.LogoOptions);
            overlaps?: boolean;
            strategy?: ol.LoadingStrategy;
            url?: (string | ol.FeatureUrlFunction);
            useSpatialIndex?: boolean;
            wrapX?: boolean;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     cacheSize: (number|undefined),
         *     crossOrigin: (string|null|undefined),
         *     logo: (string|olx.LogoOptions|undefined),
         *     tileGrid: ol.tilegrid.WMTS,
         *     projection: ol.ProjectionLike,
         *     reprojectionErrorThreshold: (number|undefined),
         *     requestEncoding: (ol.source.WMTSRequestEncoding|string|undefined),
         *     layer: string,
         *     style: string,
         *     tilePixelRatio: (number|undefined),
         *     version: (string|undefined),
         *     format: (string|undefined),
         *     matrixSet: string,
         *     dimensions: (!Object|undefined),
         *     url: (string|undefined),
         *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
         *     urls: (Array.<string>|undefined),
         *     tileClass: (function(new: ol.ImageTile, ol.TileCoord,
         *                          ol.Tile.State, string, ?string,
         *                          ol.TileLoadFunctionType)|undefined),
         *     wrapX: (boolean|undefined)}}
         */
        interface WMTSOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            logo?: (string | olx.LogoOptions);
            tileGrid: ol.tilegrid.WMTS;
            projection: ol.ProjectionLike;
            reprojectionErrorThreshold?: number;
            requestEncoding?: (ol.source.WMTSRequestEncoding | string);
            layer: string;
            style: string;
            tileClass?: ((n: ol.ImageTile, coords: ol.TileCoord, state: ol.Tile.State, s1: string, s2: string, type: ol.TileLoadFunctionType) => any);
            tilePixelRatio?: number;
            version?: string;
            format?: string;
            matrixSet: string;
            dimensions?: GlobalObject;
            url?: string;
            tileLoadFunction?: ol.TileLoadFunctionType;
            urls?: string[];
            wrapX?: boolean;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     cacheSize: (number|undefined),
         *     crossOrigin: (null|string|undefined),
         *     logo: (string|olx.LogoOptions|undefined),
         *     opaque: (boolean|undefined),
         *     projection: ol.ProjectionLike,
         *     reprojectionErrorThreshold: (number|undefined),
         *     maxZoom: (number|undefined),
         *     minZoom: (number|undefined),
         *     tileGrid: (ol.tilegrid.TileGrid|undefined),
         *     tileLoadFunction: (ol.TileLoadFunctionType|undefined),
         *     tilePixelRatio: (number|undefined),
         *     tileSize: (number|ol.Size|undefined),
         *     tileUrlFunction: (ol.TileUrlFunctionType|undefined),
         *     url: (string|undefined),
         *     urls: (Array.<string>|undefined),
         *     wrapX: (boolean|undefined)}}
         */
        interface XYZOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            logo?: (string | olx.LogoOptions);
            opaque?: boolean;
            projection?: ol.ProjectionLike;
            reprojectionErrorThreshold?: number;
            maxZoom?: number;
            minZoom?: number;
            tileGrid?: ol.tilegrid.TileGrid;
            tileLoadFunction?: ol.TileLoadFunctionType;
            tilePixelRatio?: number;
            tileSize?: (number | ol.Size);
            tileUrlFunction?: ol.TileUrlFunctionType;
            url?: string;
            urls?: string[];
            wrapX?: boolean;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     cacheSize: (number|undefined),
         *     crossOrigin: (null|string|undefined),
         *     logo: (string|olx.LogoOptions|undefined),
         *     projection: ol.ProjectionLike,
         *     maxZoom: (number|undefined),
         *     minZoom: (number|undefined),
         *     wrapX: (boolean|undefined),
         *     config: (Object|undefined),
         *     map: (string|undefined),
         *     account: string}}
         */
        interface CartoDBOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            logo?: (string | olx.LogoOptions);
            projection: ol.ProjectionLike;
            maxZoom?: number;
            minZoom?: number;
            wrapX?: boolean;
            config?: GlobalObject;
            map?: string;
            account: string;
        }


        /**
         * @typedef {{attributions: (ol.AttributionLike|undefined),
         *     cacheSize: (number|undefined),
         *     crossOrigin: (null|string|undefined),
         *     logo: (string|olx.LogoOptions|undefined),
         *     reprojectionErrorThreshold: (number|undefined),
         *     url: !string,
         *     tierSizeCalculation: (string|undefined),
         *     size: ol.Size}}
         */
        interface ZoomifyOptions {
            attributions?: ol.AttributionLike;
            cacheSize?: number;
            crossOrigin?: (string);
            logo?: (string | olx.LogoOptions);
            reprojectionErrorThreshold?: number;
            url: string;
            tierSizeCalculation?: string;
            size: ol.Size;
        }


    }

    /**
     * @namespace olx.style
     */
    module style {
        /**
         * @typedef {{fill: (ol.style.Fill|undefined),
         *     radius: number,
         *     snapToPixel: (boolean|undefined),
         *     stroke: (ol.style.Stroke|undefined),
         *     atlasManager: (ol.style.AtlasManager|undefined)}}
         */
        interface CircleOptions {
            fill?: ol.style.Fill;
            radius: number;
            snapToPixel?: boolean;
            stroke?: ol.style.Stroke;
            atlasManager?: ol.style.AtlasManager;
        }


        /**
         * @typedef {{color: (ol.Color|ol.ColorLike|undefined)}}
         */
        interface FillOptions {
            color?: (ol.Color | ol.ColorLike);
        }


        /**
         * @typedef {{anchor: (Array.<number>|undefined),
         *     anchorOrigin: (ol.style.IconOrigin|undefined),
         *     anchorXUnits: (ol.style.IconAnchorUnits|undefined),
         *     anchorYUnits: (ol.style.IconAnchorUnits|undefined),
         *     color: (ol.Color|string|undefined),
         *     crossOrigin: (null|string|undefined),
         *     img: (Image|HTMLCanvasElement|undefined),
         *     offset: (Array.<number>|undefined),
         *     offsetOrigin: (ol.style.IconOrigin|undefined),
         *     opacity: (number|undefined),
         *     scale: (number|undefined),
         *     snapToPixel: (boolean|undefined),
         *     rotateWithView: (boolean|undefined),
         *     rotation: (number|undefined),
         *     size: (ol.Size|undefined),
         *     imgSize: (ol.Size|undefined),
         *     src: (string|undefined)}}
         */
        interface IconOptions {
            anchor?: number[];
            anchorOrigin?: ol.style.IconOrigin;
            anchorXUnits?: ol.style.IconAnchorUnits;
            anchorYUnits?: ol.style.IconAnchorUnits;
            color?: (ol.Color | string);
            crossOrigin?: (string);
            img?: (any | HTMLCanvasElement);
            offset?: number[];
            offsetOrigin?: ol.style.IconOrigin;
            opacity?: number;
            scale?: number;
            snapToPixel?: boolean;
            rotateWithView?: boolean;
            rotation?: number;
            size?: ol.Size;
            imgSize?: ol.Size;
            src: string;
        }


        /**
         * Specify radius for regular polygons, or radius1 and radius2 for stars.
         * @typedef {{fill: (ol.style.Fill|undefined),
         *     points: number,
         *     radius: (number|undefined),
         *     radius1: (number|undefined),
         *     radius2: (number|undefined),
         *     angle: (number|undefined),
         *     snapToPixel: (boolean|undefined),
         *     stroke: (ol.style.Stroke|undefined),
         *     rotation: (number|undefined),
         *     rotateWithView: (boolean|undefined),
         *     atlasManager: (ol.style.AtlasManager|undefined)}}
         */
        interface RegularShapeOptions {
            fill?: ol.style.Fill;
            points: number;
            radius?: number;
            radius1?: number;
            radius2?: number;
            angle?: number;
            snapToPixel?: boolean;
            stroke?: ol.style.Stroke;
        }


        /**
         * @typedef {{color: (ol.Color|string|undefined),
         *     lineCap: (string|undefined),
         *     lineJoin: (string|undefined),
         *     lineDash: (Array.<number>|undefined),
         *     miterLimit: (number|undefined),
         *     width: (number|undefined)}}
         */
        interface StrokeOptions {
            color?: ol.Color | string;
            lineCap?: string;
            lineJoin?: string;
            lineDash?: number[];
            miterLimit?: number;
            width?: number;
        }


        /**
         * @typedef {{font: (string|undefined),
         *     offsetX: (number|undefined),
         *     offsetY: (number|undefined),
         *     scale: (number|undefined),
         *     rotateWithView: (boolean|undefined),
         *     rotation: (number|undefined),
         *     text: (string|undefined),
         *     textAlign: (string|undefined),
         *     textBaseline: (string|undefined),
         *     fill: (ol.style.Fill|undefined),
         *     stroke: (ol.style.Stroke|undefined)}}
         */
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


        /**
         * @typedef {{geometry: (undefined|string|ol.geom.Geometry|ol.StyleGeometryFunction),
         *     fill: (ol.style.Fill|undefined),
         *     image: (ol.style.Image|undefined),
         *     stroke: (ol.style.Stroke|undefined),
         *     text: (ol.style.Text|undefined),
         *     zIndex: (number|undefined)}}
         */
        interface StyleOptions {
            geometry?: (string | ol.geom.Geometry | ol.StyleGeometryFunction);
            fill?: ol.style.Fill;
            image?: ol.style.Image;
            stroke?: ol.style.Stroke;
            text?: ol.style.Text;
            zIndex?: number;
        }


        /**
         * @typedef {{initialSize: (number|undefined),
         *     maxSize: (number|undefined),
         *     space: (number|undefined)}}
         */
        interface AtlasManagerOptions {
            initialSize?: number;
            maxSize?: number;
            space?: number;
        }


    }

    /**
     * @namespace olx.tilegrid
     */
    module tilegrid {
        /**
         * @typedef {{extent: (ol.Extent|undefined),
         *     minZoom: (number|undefined),
         *     origin: (ol.Coordinate|undefined),
         *     origins: (Array.<ol.Coordinate>|undefined),
         *     resolutions: !Array.<number>,
         *     sizes: (Array.<ol.Size>|undefined),
         *     tileSize: (number|ol.Size|undefined),
         *     tileSizes: (Array.<number|ol.Size>|undefined)}}
         */
        interface TileGridOptions {
            extent?: ol.Extent;
            minZoom?: number;
            origin?: ol.Coordinate;
            origins?: ol.Coordinate[];
            resolutions: number[];
            tileSize?: (number | ol.Size);
            tileSizes?: ((number | ol.Size)[]);
        }


        /**
         * @typedef {{extent: (ol.Extent|undefined),
         *     origin: (ol.Coordinate|undefined),
         *     origins: (Array.<ol.Coordinate>|undefined),
         *     resolutions: !Array.<number>,
         *     matrixIds: !Array.<string>,
         *     sizes: (Array.<ol.Size>|undefined),
         *     tileSize: (number|ol.Size|undefined),
         *     tileSizes: (Array.<number|ol.Size>|undefined)}}
         */
        interface WMTSOptions {
            extent?: ol.Extent;
            origin?: ol.Coordinate;
            origins?: ol.Coordinate[];
            resolutions: number[];
            matrixIds: string[];
            sizes?: ol.Size[];
            tileSize?: (number | ol.Size);
            tileSizes?: ((number | ol.Size)[]);
            widths?: number[];
        }


        /**
         * @typedef {{extent: (ol.Extent|undefined),
         *     maxZoom: (number|undefined),
         *     minZoom: (number|undefined),
         *     tileSize: (number|ol.Size|undefined)}}
         */
        interface XYZOptions {
            extent?: ol.Extent;
            maxZoom?: number;
            minZoom?: number;
            tileSize?: (number | ol.Size);
        }


    }

    /**
     * @typedef {{html: string,
     *     tileRanges: (Object.<string, Array.<ol.TileRange>>|undefined)}}
     */
    interface AttributionOptions {
        html: string;
    }


    /**
     * @typedef {{tracking: (boolean|undefined)}}
     */
    interface DeviceOrientationOptions {
        tracking?: boolean;
    }

    /**
     * @typedef {{tracking: (boolean|undefined),
     *     trackingOptions: (PositionOptions|undefined),
     *     projection: ol.ProjectionLike}}
     */
    interface GeolocationOptions {
        tracking?: boolean;
        trackingOptions?: PositionOptions;
        projection: ol.ProjectionLike;
    }


    /**
     * Object literal with config options for the map logo.
     * @typedef {{href: (string), src: (string)}}
     */
    interface LogoOptions {
        href: string;
        src: string;
    }


    /**
     * @typedef {{map: (ol.Map|undefined),
     *     maxLines: (number|undefined),
     *     strokeStyle: (ol.style.Stroke|undefined),
     *     targetSize: (number|undefined)}}
     */
    interface GraticuleOptions {
        map?: ol.Map;
        maxLines?: number;
        strokeStyle?: ol.style.Stroke;
        targetSize?: number;
    }


    /**
     * Object literal with config options for the map.
     * @typedef {{controls: (ol.Collection.<ol.control.Control>|Array.<ol.control.Control>|undefined),
     *     pixelRatio: (number|undefined),
     *     interactions: (ol.Collection.<ol.interaction.Interaction>|Array.<ol.interaction.Interaction>|undefined),
     *     keyboardEventTarget: (Element|Document|string|undefined),
     *     layers: (Array.<ol.layer.Base>|ol.Collection.<ol.layer.Base>|undefined),
     *     loadTilesWhileAnimating: (boolean|undefined),
     *     loadTilesWhileInteracting: (boolean|undefined),
     *     logo: (boolean|string|olx.LogoOptions|Element|undefined),
     *     overlays: (ol.Collection.<ol.Overlay>|Array.<ol.Overlay>|undefined),
     *     renderer: (ol.RendererType|Array.<ol.RendererType|string>|string|undefined),
     *     target: (Element|string|undefined),
     *     view: (ol.View|undefined)}}
     */
    interface MapOptions {
        controls?: (ol.Collection<ol.control.Control> | ol.control.Control[]);
        pixelRatio?: number;
        interactions?: (ol.Collection<ol.interaction.Interaction> | ol.interaction.Interaction[]);
        keyboardEventTarget?: (Element | Document | string);
        layers?: (ol.layer.Base[] | ol.Collection<ol.layer.Base>);
        loadTilesWhileAnimating?: boolean;
        loadTilesWhileInteracting?: boolean;
        logo?: (boolean | string | olx.LogoOptions | Element);
        overlays?: (ol.Collection<ol.Overlay> | ol.Overlay[]);
        renderer?: (ol.RendererType | (ol.RendererType | string)[] | string);
        target?: (Element | string);
        view?: ol.View;
    }


    /**
     * Object literal with config options for the overlay.
     * @typedef {{id: (number|string|undefined),
     *     element: (Element|undefined),
     *     offset: (Array.<number>|undefined),
     *     position: (ol.Coordinate|undefined),
     *     positioning: (ol.OverlayPositioning|string|undefined),
     *     stopEvent: (boolean|undefined),
     *     insertFirst: (boolean|undefined),
     *     autoPan: (boolean|undefined),
     *     autoPanAnimation: (olx.animation.PanOptions|undefined),
     *     autoPanMargin: (number|undefined)}}
     */
    interface OverlayOptions {
        id?: (number | string);
        element?: Element;
        offset?: number[];
        position?: ol.Coordinate;
        positioning?: (ol.OverlayPositioning | string);
        stopEvent?: boolean;
        insertFirst?: boolean;
        autoPan?: boolean;
        autoPanAnimation?: olx.animation.PanOptions;
        autoPanMargin?: number;
    }


    /**
     * Object literal with config options for the projection.
     * @typedef {{code: string,
     *     units: (ol.proj.Units|string|undefined),
     *     extent: (ol.Extent|undefined),
     *     axisOrientation: (string|undefined),
     *     global: (boolean|undefined),
     *     metersPerUnit: (number|undefined),
     *     worldExtent: (ol.Extent|undefined),
     *     getPointResolution: (function(number, ol.Coordinate):number|undefined) }}
     */
    interface ProjectionOptions {
        code: string;
        units?: (ol.proj.Units | string);
        extent?: ol.Extent;
        axisOrientation?: string;
        global?: boolean;
        metersPerUnit?: number;
        worldExtent?: ol.Extent;
        getPointResolution?: ((resolution: number, coords: ol.Coordinate) => number);
    }

    module view {
        /**
         * @typedef {{
         *     padding: (!Array.<number>|undefined),
         *     constrainResolution: (boolean|undefined),
         *     nearest: (boolean|undefined),
         *     maxZoom: (number|undefined),
         *     minResolution: (number|undefined)}}
         */
        interface FitOptions {
            padding?: number[];
            constrainResolution?: boolean;
            nearest?: boolean;
            maxZoom?: number;
            minResolution?: number;
        }
    }

    /**
     * Object literal with config options for the view.
     * @typedef {{center: (ol.Coordinate|undefined),
     *     constrainRotation: (boolean|number|undefined),
     *     enableRotation: (boolean|undefined),
     *     extent: (ol.Extent|undefined),
     *     minResolution: (number|undefined),
     *     maxResolution: (number|undefined),
     *     minZoom: (number|undefined),
     *     maxZoom: (number|undefined),
     *     projection: ol.ProjectionLike,
     *     resolution: (number|undefined),
     *     resolutions: (Array.<number>|undefined),
     *     rotation: (number|undefined),
     *     zoom: (number|undefined),
     *     zoomFactor: (number|undefined)}}
     */
    interface ViewOptions {
        center?: ol.Coordinate;
        constrainRotation?: (boolean | number);
        enableRotation?: boolean;
        extent?: ol.Extent;
        maxResolution?: number;
        minResolution?: number;
        maxZoom?: number;
        minZoom?: number;
        projection?: ol.ProjectionLike;
        resolution?: number;
        resolutions?: number[];
        rotation?: number;
        zoom?: number;
        zoomFactor?: number;
    }


    /**
     * @typedef {{animate: boolean,
     *     attributions: Object.<string, ol.Attribution>,
     *     coordinateToPixelTransform: ol.Transform,
     *     extent: (null|ol.Extent),
     *     focus: ol.Coordinate,
     *     index: number,
     *     layerStates: Object.<number, ol.LayerState>,
     *     layerStatesArray: Array.<ol.LayerState>,
     *     logos: Object.<string, (string|Element)>,
     *     pixelRatio: number,
     *     pixelToCoordinateTransform: ol.Transform,
     *     postRenderFunctions: Array.<ol.PostRenderFunction>,
     *     size: ol.Size,
     *     skippedFeatureUids: Object.<string, boolean>,
     *     tileQueue: ol.TileQueue,
     *     time: number,
     *     usedTiles: Object.<string, Object.<string, ol.TileRange>>,
     *     viewState: olx.ViewState,
     *     viewHints: Array.<number>,
     *     wantedTiles: !Object.<string, Object.<string, boolean>>}}
     */
    interface FrameState {
        pixelRatio: number;
        time: number;
        viewState: olx.ViewState;
    }


    /**
     * @typedef {{center: ol.Coordinate,
     *     projection: ol.proj.Projection,
     *     resolution: number,
     *     rotation: number}}
     */
    interface ViewState {
        center: ol.Coordinate;
        projection: ol.proj.Projection;
        resolution: number;
        rotation: number;
    }

}

