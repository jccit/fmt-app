/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const fmtproto = $root.fmtproto = (() => {

    /**
     * Namespace fmtproto.
     * @exports fmtproto
     * @namespace
     */
    const fmtproto = {};

    fmtproto.Station = (function() {

        /**
         * Properties of a Station.
         * @memberof fmtproto
         * @interface IStation
         * @property {string|null} [crs] Station crs
         * @property {string|null} [name] Station name
         * @property {string|null} [operator] Station operator
         * @property {number|null} [latitude] Station latitude
         * @property {number|null} [longitude] Station longitude
         */

        /**
         * Constructs a new Station.
         * @memberof fmtproto
         * @classdesc Represents a Station.
         * @implements IStation
         * @constructor
         * @param {fmtproto.IStation=} [properties] Properties to set
         */
        function Station(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Station crs.
         * @member {string} crs
         * @memberof fmtproto.Station
         * @instance
         */
        Station.prototype.crs = "";

        /**
         * Station name.
         * @member {string} name
         * @memberof fmtproto.Station
         * @instance
         */
        Station.prototype.name = "";

        /**
         * Station operator.
         * @member {string} operator
         * @memberof fmtproto.Station
         * @instance
         */
        Station.prototype.operator = "";

        /**
         * Station latitude.
         * @member {number} latitude
         * @memberof fmtproto.Station
         * @instance
         */
        Station.prototype.latitude = 0;

        /**
         * Station longitude.
         * @member {number} longitude
         * @memberof fmtproto.Station
         * @instance
         */
        Station.prototype.longitude = 0;

        /**
         * Creates a new Station instance using the specified properties.
         * @function create
         * @memberof fmtproto.Station
         * @static
         * @param {fmtproto.IStation=} [properties] Properties to set
         * @returns {fmtproto.Station} Station instance
         */
        Station.create = function create(properties) {
            return new Station(properties);
        };

        /**
         * Encodes the specified Station message. Does not implicitly {@link fmtproto.Station.verify|verify} messages.
         * @function encode
         * @memberof fmtproto.Station
         * @static
         * @param {fmtproto.IStation} message Station message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Station.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.crs != null && Object.hasOwnProperty.call(message, "crs"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.crs);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.operator != null && Object.hasOwnProperty.call(message, "operator"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.operator);
            if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.latitude);
            if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.longitude);
            return writer;
        };

        /**
         * Encodes the specified Station message, length delimited. Does not implicitly {@link fmtproto.Station.verify|verify} messages.
         * @function encodeDelimited
         * @memberof fmtproto.Station
         * @static
         * @param {fmtproto.IStation} message Station message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Station.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Station message from the specified reader or buffer.
         * @function decode
         * @memberof fmtproto.Station
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {fmtproto.Station} Station
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Station.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.fmtproto.Station();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.crs = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.operator = reader.string();
                    break;
                case 4:
                    message.latitude = reader.float();
                    break;
                case 5:
                    message.longitude = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Station message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof fmtproto.Station
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {fmtproto.Station} Station
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Station.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Station message.
         * @function verify
         * @memberof fmtproto.Station
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Station.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.crs != null && message.hasOwnProperty("crs"))
                if (!$util.isString(message.crs))
                    return "crs: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.operator != null && message.hasOwnProperty("operator"))
                if (!$util.isString(message.operator))
                    return "operator: string expected";
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                if (typeof message.latitude !== "number")
                    return "latitude: number expected";
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                if (typeof message.longitude !== "number")
                    return "longitude: number expected";
            return null;
        };

        /**
         * Creates a Station message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fmtproto.Station
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fmtproto.Station} Station
         */
        Station.fromObject = function fromObject(object) {
            if (object instanceof $root.fmtproto.Station)
                return object;
            let message = new $root.fmtproto.Station();
            if (object.crs != null)
                message.crs = String(object.crs);
            if (object.name != null)
                message.name = String(object.name);
            if (object.operator != null)
                message.operator = String(object.operator);
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            return message;
        };

        /**
         * Creates a plain object from a Station message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fmtproto.Station
         * @static
         * @param {fmtproto.Station} message Station
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Station.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.crs = "";
                object.name = "";
                object.operator = "";
                object.latitude = 0;
                object.longitude = 0;
            }
            if (message.crs != null && message.hasOwnProperty("crs"))
                object.crs = message.crs;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.operator != null && message.hasOwnProperty("operator"))
                object.operator = message.operator;
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            return object;
        };

        /**
         * Converts this Station to JSON.
         * @function toJSON
         * @memberof fmtproto.Station
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Station.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Station;
    })();

    fmtproto.StationList = (function() {

        /**
         * Properties of a StationList.
         * @memberof fmtproto
         * @interface IStationList
         * @property {Array.<fmtproto.IStation>|null} [stations] StationList stations
         */

        /**
         * Constructs a new StationList.
         * @memberof fmtproto
         * @classdesc Represents a StationList.
         * @implements IStationList
         * @constructor
         * @param {fmtproto.IStationList=} [properties] Properties to set
         */
        function StationList(properties) {
            this.stations = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StationList stations.
         * @member {Array.<fmtproto.IStation>} stations
         * @memberof fmtproto.StationList
         * @instance
         */
        StationList.prototype.stations = $util.emptyArray;

        /**
         * Creates a new StationList instance using the specified properties.
         * @function create
         * @memberof fmtproto.StationList
         * @static
         * @param {fmtproto.IStationList=} [properties] Properties to set
         * @returns {fmtproto.StationList} StationList instance
         */
        StationList.create = function create(properties) {
            return new StationList(properties);
        };

        /**
         * Encodes the specified StationList message. Does not implicitly {@link fmtproto.StationList.verify|verify} messages.
         * @function encode
         * @memberof fmtproto.StationList
         * @static
         * @param {fmtproto.IStationList} message StationList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StationList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stations != null && message.stations.length)
                for (let i = 0; i < message.stations.length; ++i)
                    $root.fmtproto.Station.encode(message.stations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StationList message, length delimited. Does not implicitly {@link fmtproto.StationList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof fmtproto.StationList
         * @static
         * @param {fmtproto.IStationList} message StationList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StationList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StationList message from the specified reader or buffer.
         * @function decode
         * @memberof fmtproto.StationList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {fmtproto.StationList} StationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StationList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.fmtproto.StationList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.stations && message.stations.length))
                        message.stations = [];
                    message.stations.push($root.fmtproto.Station.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StationList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof fmtproto.StationList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {fmtproto.StationList} StationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StationList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StationList message.
         * @function verify
         * @memberof fmtproto.StationList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StationList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stations != null && message.hasOwnProperty("stations")) {
                if (!Array.isArray(message.stations))
                    return "stations: array expected";
                for (let i = 0; i < message.stations.length; ++i) {
                    let error = $root.fmtproto.Station.verify(message.stations[i]);
                    if (error)
                        return "stations." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StationList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof fmtproto.StationList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {fmtproto.StationList} StationList
         */
        StationList.fromObject = function fromObject(object) {
            if (object instanceof $root.fmtproto.StationList)
                return object;
            let message = new $root.fmtproto.StationList();
            if (object.stations) {
                if (!Array.isArray(object.stations))
                    throw TypeError(".fmtproto.StationList.stations: array expected");
                message.stations = [];
                for (let i = 0; i < object.stations.length; ++i) {
                    if (typeof object.stations[i] !== "object")
                        throw TypeError(".fmtproto.StationList.stations: object expected");
                    message.stations[i] = $root.fmtproto.Station.fromObject(object.stations[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a StationList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof fmtproto.StationList
         * @static
         * @param {fmtproto.StationList} message StationList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StationList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.stations = [];
            if (message.stations && message.stations.length) {
                object.stations = [];
                for (let j = 0; j < message.stations.length; ++j)
                    object.stations[j] = $root.fmtproto.Station.toObject(message.stations[j], options);
            }
            return object;
        };

        /**
         * Converts this StationList to JSON.
         * @function toJSON
         * @memberof fmtproto.StationList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StationList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StationList;
    })();

    return fmtproto;
})();

export { $root as default };
