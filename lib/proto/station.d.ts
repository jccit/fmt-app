import * as $protobuf from "protobufjs";
/** Namespace fmtproto. */
export namespace fmtproto {

    /** Properties of a Station. */
    interface IStation {

        /** Station crs */
        crs?: (string|null);

        /** Station name */
        name?: (string|null);

        /** Station operator */
        operator?: (string|null);

        /** Station latitude */
        latitude?: (number|null);

        /** Station longitude */
        longitude?: (number|null);
    }

    /** Represents a Station. */
    class Station implements IStation {

        /**
         * Constructs a new Station.
         * @param [properties] Properties to set
         */
        constructor(properties?: fmtproto.IStation);

        /** Station crs. */
        public crs: string;

        /** Station name. */
        public name: string;

        /** Station operator. */
        public operator: string;

        /** Station latitude. */
        public latitude: number;

        /** Station longitude. */
        public longitude: number;

        /**
         * Creates a new Station instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Station instance
         */
        public static create(properties?: fmtproto.IStation): fmtproto.Station;

        /**
         * Encodes the specified Station message. Does not implicitly {@link fmtproto.Station.verify|verify} messages.
         * @param message Station message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fmtproto.IStation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Station message, length delimited. Does not implicitly {@link fmtproto.Station.verify|verify} messages.
         * @param message Station message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fmtproto.IStation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Station message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Station
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fmtproto.Station;

        /**
         * Decodes a Station message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Station
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fmtproto.Station;

        /**
         * Verifies a Station message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Station message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Station
         */
        public static fromObject(object: { [k: string]: any }): fmtproto.Station;

        /**
         * Creates a plain object from a Station message. Also converts values to other types if specified.
         * @param message Station
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fmtproto.Station, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Station to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StationList. */
    interface IStationList {

        /** StationList stations */
        stations?: (fmtproto.IStation[]|null);
    }

    /** Represents a StationList. */
    class StationList implements IStationList {

        /**
         * Constructs a new StationList.
         * @param [properties] Properties to set
         */
        constructor(properties?: fmtproto.IStationList);

        /** StationList stations. */
        public stations: fmtproto.IStation[];

        /**
         * Creates a new StationList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StationList instance
         */
        public static create(properties?: fmtproto.IStationList): fmtproto.StationList;

        /**
         * Encodes the specified StationList message. Does not implicitly {@link fmtproto.StationList.verify|verify} messages.
         * @param message StationList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fmtproto.IStationList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StationList message, length delimited. Does not implicitly {@link fmtproto.StationList.verify|verify} messages.
         * @param message StationList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fmtproto.IStationList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StationList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fmtproto.StationList;

        /**
         * Decodes a StationList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StationList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fmtproto.StationList;

        /**
         * Verifies a StationList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StationList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StationList
         */
        public static fromObject(object: { [k: string]: any }): fmtproto.StationList;

        /**
         * Creates a plain object from a StationList message. Also converts values to other types if specified.
         * @param message StationList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fmtproto.StationList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StationList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
