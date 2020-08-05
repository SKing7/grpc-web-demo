/**
 * @fileoverview gRPC-Web generated client stub for impl
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.impl = require('./impl_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.impl.LBSClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.impl.LBSPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.impl.Point,
 *   !proto.impl.Place>}
 */
const methodDescriptor_LBS_locate = new grpc.web.MethodDescriptor(
  '/impl.LBS/locate',
  grpc.web.MethodType.UNARY,
  proto.impl.Point,
  proto.impl.Place,
  /**
   * @param {!proto.impl.Point} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.impl.Place.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.impl.Point,
 *   !proto.impl.Place>}
 */
const methodInfo_LBS_locate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.impl.Place,
  /**
   * @param {!proto.impl.Point} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.impl.Place.deserializeBinary
);


/**
 * @param {!proto.impl.Point} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.impl.Place)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.impl.Place>|undefined}
 *     The XHR Node Readable Stream
 */
proto.impl.LBSClient.prototype.locate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/impl.LBS/locate',
      request,
      metadata || {},
      methodDescriptor_LBS_locate,
      callback);
};


/**
 * @param {!proto.impl.Point} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.impl.Place>}
 *     A native promise that resolves to the response
 */
proto.impl.LBSPromiseClient.prototype.locate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/impl.LBS/locate',
      request,
      metadata || {},
      methodDescriptor_LBS_locate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.impl.Size,
 *   !proto.impl.Point>}
 */
const methodDescriptor_LBS_list = new grpc.web.MethodDescriptor(
  '/impl.LBS/list',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.impl.Size,
  proto.impl.Point,
  /**
   * @param {!proto.impl.Size} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.impl.Point.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.impl.Size,
 *   !proto.impl.Point>}
 */
const methodInfo_LBS_list = new grpc.web.AbstractClientBase.MethodInfo(
  proto.impl.Point,
  /**
   * @param {!proto.impl.Size} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.impl.Point.deserializeBinary
);


/**
 * @param {!proto.impl.Size} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.impl.Point>}
 *     The XHR Node Readable Stream
 */
proto.impl.LBSClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/impl.LBS/list',
      request,
      metadata || {},
      methodDescriptor_LBS_list);
};


/**
 * @param {!proto.impl.Size} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.impl.Point>}
 *     The XHR Node Readable Stream
 */
proto.impl.LBSPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/impl.LBS/list',
      request,
      metadata || {},
      methodDescriptor_LBS_list);
};


module.exports = proto.impl;

