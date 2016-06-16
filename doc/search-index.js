var searchIndex = {};
searchIndex["multipart"] = {"doc":"Client- and server-side abstractions for HTTP `multipart/form-data` requests.","items":[[0,"client","multipart","The client-side abstraction for multipart requests. Enabled with the `client` feature (on by\ndefault).",null,null],[3,"SizedRequest","multipart::client","A wrapper around a request object that measures the request body and sets the `Content-Length`\nheader to its size in bytes.",null,null],[3,"Multipart","","The entry point of the client-side multipart API.",null,null],[0,"hyper","","Client-side integration with [Hyper](https://github.com/hyperium/hyper).\nEnabled with the `hyper` feature (on by default).",null,null],[5,"content_type","multipart::client::hyper","Create a `Content-Type: multipart/form-data;boundary={bound}`",null,{"inputs":[{"name":"str"}],"output":{"name":"contenttype"}}],[11,"apply_headers","hyper::client::request","#Panics\nIf `self.method() != Method::Post`.",0,{"inputs":[{"name":"request"},{"name":"str"},{"name":"option"}],"output":{"name":"bool"}}],[11,"open_stream","","",0,{"inputs":[{"name":"request"}],"output":{"name":"result"}}],[11,"finish","","",0,{"inputs":[{"name":"request"}],"output":{"name":"result"}}],[0,"lazy","multipart::client","Multipart requests which write out their data in one fell swoop.",null,null],[3,"LazyError","multipart::client::lazy","An error for lazily written multipart requests, including the original error as well\nas the field which caused the error, if applicable.",null,null],[12,"field_name","","The field that caused the error.\nIf `None`, there was a problem opening the stream to write or finalizing the stream.",1,null],[12,"error","","The inner error.",1,null],[3,"Multipart","","A multipart request which writes all fields at once upon being provided an output stream.",null,null],[3,"PreparedFields","","The result of [`Multipart::prepare()`](struct.Multipart.html#method.prepare) or\n`Multipart::prepare_threshold()`. Implements `Read`, contains the entire request body.",null,null],[11,"client_request","","#### Feature: `hyper`\nComplete a POST request with the given `hyper::client::Client` and URL.",2,{"inputs":[{"name":"multipart"},{"name":"client"},{"name":"u"}],"output":{"name":"hyperresult"}}],[11,"client_request_mut","","#### Feature: `hyper`\nComplete a POST request with the given `hyper::client::Client` and URL;\nallows mutating the `hyper::client::RequestBuilder` via the passed closure.",2,{"inputs":[{"name":"multipart"},{"name":"client"},{"name":"u"},{"name":"f"}],"output":{"name":"hyperresult"}}],[11,"to_body","","#### Feature: `hyper`\nConvert `self` to `hyper::client::Body`.",3,{"inputs":[{"name":"preparedfields"}],"output":{"name":"body"}}],[6,"LazyIoError","","A `LazyError` wrapping `std::io::Error`.",null,null],[11,"into","","",1,{"inputs":[{"name":"lazyerror"}],"output":{"name":"error"}}],[11,"description","","",1,{"inputs":[{"name":"lazyerror"}],"output":{"name":"str"}}],[11,"cause","","",1,{"inputs":[{"name":"lazyerror"}],"output":{"name":"option"}}],[11,"fmt","","",1,{"inputs":[{"name":"lazyerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"lazyerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",2,{"inputs":[],"output":{"name":"multipart"}}],[11,"fmt","","",2,{"inputs":[{"name":"multipart"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Initialize a new lazy dynamic request.",2,{"inputs":[],"output":{"name":"self"}}],[11,"add_text","","Add a text field to this request.",2,{"inputs":[{"name":"multipart"},{"name":"n"},{"name":"t"}],"output":{"name":"self"}}],[11,"add_file","","Add a file field to this request.",2,{"inputs":[{"name":"multipart"},{"name":"n"},{"name":"p"}],"output":{"name":"self"}}],[11,"add_stream","","Add a generic stream field to this request,",2,{"inputs":[{"name":"multipart"},{"name":"n"},{"name":"r"},{"name":"option"},{"name":"option"}],"output":{"name":"self"}}],[11,"send","","Convert `req` to `HttpStream`, write out the fields in this request, and finish the\nrequest, returning the response if successful, or the first error encountered.",2,{"inputs":[{"name":"multipart"},{"name":"r"}],"output":{"name":"result"}}],[11,"prepare","","Export the multipart data contained in this lazy request as an adaptor which implements `Read`.",2,{"inputs":[{"name":"multipart"}],"output":{"name":"result"}}],[11,"prepare_threshold","","Export the multipart data contained in this lazy request to an adaptor which implements `Read`.",2,{"inputs":[{"name":"multipart"},{"name":"option"}],"output":{"name":"result"}}],[11,"content_len","","Get the content-length value for this set of fields, if applicable (all fields are sized,\ni.e. not generic streams).",3,{"inputs":[{"name":"preparedfields"}],"output":{"name":"option"}}],[11,"read","","",3,null],[11,"write","multipart::client","",4,null],[11,"flush","","",4,{"inputs":[{"name":"sizedrequest"}],"output":{"name":"result"}}],[11,"apply_headers","","`SizedRequest` ignores `_content_len` because it sets its own later.",4,{"inputs":[{"name":"sizedrequest"},{"name":"str"},{"name":"option"}],"output":{"name":"bool"}}],[11,"open_stream","","",4,{"inputs":[{"name":"sizedrequest"}],"output":{"name":"result"}}],[11,"finish","","",4,{"inputs":[{"name":"sizedrequest"}],"output":{"name":"result"}}],[8,"HttpRequest","","A trait describing an HTTP request that can be used to send multipart data.",null,null],[16,"Stream","","The HTTP stream type that can be opend by this request, to which the multipart data will be\nwritten.",5,null],[16,"Error","","The error type for this request.\nMust be compatible with `io::Error` as well as `Self::HttpStream::Error`",5,null],[10,"apply_headers","","Set the `Content-Type` header to `multipart/form-data` and supply the `boundary` value.\nIf `content_len` is given, set the `Content-Length` header to its value.",5,{"inputs":[{"name":"httprequest"},{"name":"str"},{"name":"option"}],"output":{"name":"bool"}}],[10,"open_stream","","Open the request stream and return it or any error otherwise.",5,{"inputs":[{"name":"httprequest"}],"output":{"name":"result"}}],[8,"HttpStream","","A trait describing an open HTTP stream that can be written to.",null,null],[16,"Request","","The request type that opened this stream.",6,null],[16,"Response","","The response type that will be returned after the request is completed.",6,null],[16,"Error","","The error type for this stream.\nMust be compatible with `io::Error` as well as `Self::Request::Error`.",6,null],[10,"finish","","Finalize and close the stream and return the response object, or any error otherwise.",6,{"inputs":[{"name":"httpstream"}],"output":{"name":"result"}}],[11,"from_request","","Create a new `Multipart` to wrap a request.",7,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"write_text","","Write a text field to this multipart request.\n`name` and `val` can be either owned `String` or `&amp;str`.",7,{"inputs":[{"name":"multipart"},{"name":"n"},{"name":"v"}],"output":{"name":"result"}}],[11,"write_file","","Open a file pointed to by `path` and write its contents to the multipart request,\nsupplying its filename and guessing its `Content-Type` from its extension.",7,{"inputs":[{"name":"multipart"},{"name":"n"},{"name":"p"}],"output":{"name":"result"}}],[11,"write_stream","","Write a byte stream to the multipart request as a file field, supplying `filename` if given,\nand `content_type` if given or `&quot;application/octet-stream&quot;` if not.",7,{"inputs":[{"name":"multipart"},{"name":"n"},{"name":"st"},{"name":"option"},{"name":"option"}],"output":{"name":"result"}}],[11,"send","","Finalize the request and return the response from the server, or the last error if set.",7,{"inputs":[{"name":"multipart"}],"output":{"name":"result"}}],[11,"from_request_sized","","Create a new `Multipart` using the `SizedRequest` wrapper around `req`.",7,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"finish","std::io::util","",8,{"inputs":[{"name":"sink"}],"output":{"name":"result"}}],[0,"server","multipart","The server-side abstraction for multipart requests. Enabled with the `server` feature (on by\ndefault).",null,null],[3,"Multipart","multipart::server","The server-side implementation of `multipart/form-data` requests.",null,null],[3,"MultipartField","","A field in a multipart request. May be either text or a binary stream (file).",null,null],[12,"name","","The field&#39;s name from the form",9,null],[12,"data","","The data of the field. Can be text or binary.",9,null],[3,"MultipartFile","","A representation of a file in HTTP `multipart/form-data`.",null,null],[3,"Entries","","A result of `Multipart::save_all()`.",null,null],[12,"fields","","The text fields of the multipart request, mapped by field name -&gt; value.",10,null],[12,"files","","A map of file field names to their contents saved on the filesystem.",10,null],[12,"dir","","The directory the files in this request were saved under; may be temporary or permanent.",10,null],[3,"SavedFile","","A file saved to the local filesystem from a multipart request.",null,null],[12,"path","","The complete path this file was saved at.",11,null],[12,"filename","","The original filename of this file, if one was provided in the request.",11,null],[12,"size","","The number of bytes written to the disk; may be truncated.",11,null],[4,"SaveResult","","The result of [`Multipart::save_all()`](struct.multipart.html#method.save_all).",null,null],[13,"Full","","The operation was a total success. Contained are all entries of the request.",12,null],[13,"Partial","","The operation errored partway through. Contained are the entries gathered thus far,\nas well as the error that ended the process.",12,null],[13,"Error","","The `TempDir` for `Entries` could not be constructed. Contained is the error detailing the\nproblem.",12,null],[4,"MultipartData","","The data of a field in a `multipart/form-data` request.",null,null],[13,"Text","","The field&#39;s payload is a text string.",13,null],[13,"File","","The field&#39;s payload is a binary stream (file).",13,null],[4,"SaveDir","","The save directory for `Entries`. May be temporary (delete-on-drop) or permanent.",null,null],[13,"Temp","","This directory is temporary and will be deleted, along with its contents, when this wrapper\nis dropped.",14,null],[13,"Perm","","This directory is permanent and will be left on the filesystem when this wrapper is dropped.",14,null],[0,"hyper","","Server-side integration with [Hyper](https://github.com/hyperium/hyper).\nEnabled with the `hyper` feature (on by default).",null,null],[11,"new","hyper::server::request","Create a new Request, reading the StartLine and Headers so they are\nimmediately useful.",15,{"inputs":[{"name":"bufreader"},{"name":"socketaddr"}],"output":{"name":"result"}}],[11,"set_read_timeout","","Set the read timeout of the underlying NetworkStream.",15,{"inputs":[{"name":"request"},{"name":"option"}],"output":{"name":"result"}}],[11,"downcast_ref","","Get a reference to the underlying `NetworkStream`.",15,{"inputs":[{"name":"request"}],"output":{"name":"option"}}],[11,"ssl","","Get a reference to the underlying Ssl stream, if connected\nover HTTPS.",15,{"inputs":[{"name":"request"}],"output":{"name":"option"}}],[11,"deconstruct","","Deconstruct a Request into its constituent parts.",15,null],[3,"HyperRequest","multipart::server::hyper","A request bundles several parts of an incoming `NetworkStream`, given to a `Handler`.",null,null],[12,"remote_addr","","The IP address of the remote connection.",15,null],[12,"method","","The `Method`, such as `Get`, `Post`, etc.",15,null],[12,"headers","","The headers of the incoming request.",15,null],[12,"uri","","The target request-uri for this request.",15,null],[12,"version","","The version of HTTP for this request.",15,null],[3,"Switch","","A container that implements `hyper::server::Handler` which will switch\nthe handler implementation depending on if the incoming request is multipart or not.",null,null],[8,"MultipartHandler","","A trait defining a type that can handle an incoming multipart request.",null,null],[10,"handle_multipart","","Generate a response from this multipart request.",16,{"inputs":[{"name":"multiparthandler"},{"name":"multipart"},{"name":"response"}],"output":null}],[11,"new","","Create a new `Switch` instance where\n`normal` handles normal Hyper requests and `multipart` handles Multipart requests",17,{"inputs":[{"name":"h"},{"name":"m"}],"output":{"name":"switch"}}],[11,"handle","","",17,{"inputs":[{"name":"switch"},{"name":"request"},{"name":"response"}],"output":null}],[11,"multipart_boundary","","",15,{"inputs":[{"name":"hyperrequest"}],"output":{"name":"option"}}],[11,"body","","",15,{"inputs":[{"name":"hyperrequest"}],"output":{"name":"self"}}],[0,"iron","multipart::server","Integration with the [Iron](https://ironframework.io) framework, enabled with the `iron` feature (optional). Includes a `BeforeMiddleware` implementation.",null,null],[3,"Intercept","multipart::server::iron","A `BeforeMiddleware` for Iron which will intercept and read-out multipart requests and store\nthe result in the request.",null,null],[12,"temp_dir_path","","The parent directory for all temporary directories created by this middleware.\nWill be created if it doesn&#39;t exist (lazy).",18,null],[12,"file_size_limit","","The size limit of uploaded files, in bytes.",18,null],[12,"file_count_limit","","The limit on the number of files which will be saved from\nthe request. Requests which exceed this count will be rejected.",18,null],[12,"limit_behavior","","What to do when a file count or size limit has been exceeded.",18,null],[3,"FileSizeLimitError","","An error returned from `Intercept` when the size limit\nfor an individual file is exceeded.",null,null],[12,"field","","The field where the error occurred.",19,null],[12,"filename","","The filename of the oversize file, if it was provided.",19,null],[3,"FileCountLimitError","","An error returned from `Intercept` when the file count limit\nfor a single request was exceeded.",null,null],[4,"LimitBehavior","","The behavior of `Intercept` when a file size or count limit is exceeded.",null,null],[13,"ThrowError","","Return an error from the middleware describing the issue.",20,null],[13,"Continue","","Ignore the limit.",20,null],[17,"DEFAULT_FILE_SIZE_LIMIT","","The default file size limit for [`Intercept`](struct.Intercept.html), in bytes.",null,null],[17,"DEFAULT_FILE_COUNT_LIMIT","","The default file count limit for [`Intercept`](struct.Intercept.html).",null,null],[11,"fmt","","",18,{"inputs":[{"name":"intercept"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"temp_dir_path","","Set the `temp_dir_path` for this middleware.",18,{"inputs":[{"name":"intercept"},{"name":"p"}],"output":{"name":"self"}}],[11,"file_size_limit","","Set the `file_size_limit` for this middleware.",18,{"inputs":[{"name":"intercept"},{"name":"u64"}],"output":{"name":"self"}}],[11,"file_count_limit","","Set the `file_count_limit` for this middleware.",18,{"inputs":[{"name":"intercept"},{"name":"u32"}],"output":{"name":"self"}}],[11,"limit_behavior","","Set the `limit_behavior` for this middleware.",18,{"inputs":[{"name":"intercept"},{"name":"limitbehavior"}],"output":{"name":"self"}}],[11,"default","","",18,{"inputs":[],"output":{"name":"self"}}],[11,"before","","",18,{"inputs":[{"name":"intercept"},{"name":"ironrequest"}],"output":{"name":"ironresult"}}],[11,"fmt","","",20,{"inputs":[{"name":"limitbehavior"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",20,{"inputs":[{"name":"limitbehavior"}],"output":{"name":"limitbehavior"}}],[11,"fmt","","",19,{"inputs":[{"name":"filesizelimiterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",19,{"inputs":[{"name":"filesizelimiterror"}],"output":{"name":"str"}}],[11,"fmt","","",19,{"inputs":[{"name":"filesizelimiterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"into","","",19,{"inputs":[{"name":"filesizelimiterror"}],"output":{"name":"ironerror"}}],[11,"fmt","","",21,{"inputs":[{"name":"filecountlimiterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",21,{"inputs":[{"name":"filecountlimiterror"}],"output":{"name":"str"}}],[11,"fmt","","",21,{"inputs":[{"name":"filecountlimiterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"into","","",21,{"inputs":[{"name":"filecountlimiterror"}],"output":{"name":"ironerror"}}],[0,"nickel","multipart::server","Server-side integration with [Nickel](http://nickel.rs/) via the `nickel_` feature\n(optional, enables `hyper` feature).",null,null],[0,"tiny_http","","Integration with [tiny_http](https://github.com/frewsxcv/tiny-http) with the `tiny_http`\nfeature (optional).",null,null],[11,"secure","tiny_http::request","Returns true if the request was made through HTTPS.",22,{"inputs":[{"name":"request"}],"output":{"name":"bool"}}],[11,"method","","Returns the method requested by the client (eg. `GET`, `POST`, etc.).",22,{"inputs":[{"name":"request"}],"output":{"name":"method"}}],[11,"url","","Returns the resource requested by the client.",22,{"inputs":[{"name":"request"}],"output":{"name":"str"}}],[11,"headers","","Returns a list of all headers sent by the client.",22,null],[11,"http_version","","Returns the HTTP version of the request.",22,{"inputs":[{"name":"request"}],"output":{"name":"httpversion"}}],[11,"body_length","","Returns the length of the body in bytes.",22,{"inputs":[{"name":"request"}],"output":{"name":"option"}}],[11,"remote_addr","","Returns the length of the body in bytes.",22,{"inputs":[{"name":"request"}],"output":{"name":"socketaddr"}}],[11,"as_reader","","Allows to read the body of the request.",22,{"inputs":[{"name":"request"}],"output":{"name":"read"}}],[11,"into_writer","","Turns the `Request` into a writer.",22,{"inputs":[{"name":"request"}],"output":{"name":"box"}}],[11,"respond","","Sends a response to this request.",22,{"inputs":[{"name":"request"},{"name":"response"}],"output":{"name":"result"}}],[11,"drop","","",22,null],[11,"fmt","","",22,{"inputs":[{"name":"request"},{"name":"formatter"}],"output":{"name":"result"}}],[3,"TinyHttpRequest","multipart::server::tiny_http","Represents an HTTP request made by a client.",null,null],[8,"HttpRequest","multipart::server","A server-side HTTP request that may or may not be multipart.",null,null],[16,"Body","","The body of this request.",23,null],[10,"multipart_boundary","","Get the boundary string of this request if it is a POST request\nwith the `Content-Type` header set to `multipart/form-data`.",23,{"inputs":[{"name":"httprequest"}],"output":{"name":"option"}}],[10,"body","","Return the request body for reading.",23,{"inputs":[{"name":"httprequest"}],"output":{"name":"body"}}],[11,"from_request","","If the given `HttpRequest` is a multipart/form-data POST request,\nreturn the request body wrapped in the multipart reader. Otherwise,\nreturns the original request.",24,{"inputs":[{"name":"r"}],"output":{"name":"result"}}],[11,"with_body","","Construct a new `Multipart` with the given body reader and boundary.\nThis will prepend the requisite `&quot;--&quot;` to the boundary.",24,{"inputs":[{"name":"b"},{"name":"bnd"}],"output":{"name":"self"}}],[11,"read_entry","","Read the next entry from this multipart request, returning a struct with the field&#39;s name and\ndata. See `MultipartField` for more info.",24,{"inputs":[{"name":"multipart"}],"output":{"name":"result"}}],[11,"foreach_entry","","Call `f` for each entry in the multipart request.",24,{"inputs":[{"name":"multipart"},{"name":"f"}],"output":{"name":"result"}}],[11,"save_all","","Read the request fully, parsing all fields and saving all files in a new temporary\ndirectory under the OS temporary directory. ",24,{"inputs":[{"name":"multipart"}],"output":{"name":"saveresult"}}],[11,"save_all_under","","Read the request fully, parsing all fields and saving all files in a new temporary\ndirectory under `dir`. ",24,{"inputs":[{"name":"multipart"},{"name":"p"}],"output":{"name":"saveresult"}}],[11,"save_all_limited","","Read the request fully, parsing all fields and saving all fields in a new temporary\ndirectory under the OS temporary directory.",24,{"inputs":[{"name":"multipart"},{"name":"u64"}],"output":{"name":"saveresult"}}],[11,"save_all_under_limited","","Read the request fully, parsing all fields and saving all files in a new temporary\ndirectory under `dir`. ",24,{"inputs":[{"name":"multipart"},{"name":"p"},{"name":"u64"}],"output":{"name":"saveresult"}}],[11,"borrow","","",24,{"inputs":[{"name":"multipart"}],"output":{"name":"b"}}],[11,"fmt","","",12,{"inputs":[{"name":"saveresult"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"to_entries","","Take the `Entries` from `self`, if applicable, and discarding\nthe error, if any.",12,{"inputs":[{"name":"saveresult"}],"output":{"name":"option"}}],[11,"to_opt","","Decompose `self` to `(Option&lt;Entries&gt;, Option&lt;io::Error&gt;)`",12,null],[11,"to_result","","Map `self` to an `io::Result`, discarding the error in the `Partial` case.",12,{"inputs":[{"name":"saveresult"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"multipartfield"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",13,{"inputs":[{"name":"multipartdata"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"as_text","","Borrow this payload as a text field, if possible.",13,{"inputs":[{"name":"multipartdata"}],"output":{"name":"option"}}],[11,"as_file","","Borrow this payload as a file field, if possible.\nMutably borrows so the contents can be read.",13,{"inputs":[{"name":"multipartdata"}],"output":{"name":"option"}}],[11,"fmt","","",25,{"inputs":[{"name":"multipartfile"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"save_to","","Save this file to the given output stream.",25,{"inputs":[{"name":"multipartfile"},{"name":"w"}],"output":{"name":"result"}}],[11,"save_to_limited","","Save this file to the given output stream, **truncated** to `limit`\n(no more than `limit` bytes will be written out).",25,{"inputs":[{"name":"multipartfile"},{"name":"w"},{"name":"u64"}],"output":{"name":"result"}}],[11,"save_as","","Save this file to `path`.",25,{"inputs":[{"name":"multipartfile"},{"name":"p"}],"output":{"name":"result"}}],[11,"save_in","","Save this file in the directory pointed at by `dir`,\nusing a random alphanumeric string as the filename.",25,{"inputs":[{"name":"multipartfile"},{"name":"p"}],"output":{"name":"result"}}],[11,"save_as_limited","","Save this file to `path`, **truncated** to `limit` (no more than `limit` bytes will be written out).",25,{"inputs":[{"name":"multipartfile"},{"name":"p"},{"name":"u64"}],"output":{"name":"result"}}],[11,"save_in_limited","","Save this file in the directory pointed at by `dir`,\nusing a random alphanumeric string as the filename.",25,{"inputs":[{"name":"multipartfile"},{"name":"p"},{"name":"u64"}],"output":{"name":"result"}}],[11,"filename","","Get the filename of this entry, if supplied.",25,{"inputs":[{"name":"multipartfile"}],"output":{"name":"option"}}],[11,"content_type","","Get the MIME type (`Content-Type` value) of this file, if supplied by the client,\nor `&quot;applicaton/octet-stream&quot;` otherwise.",25,{"inputs":[{"name":"multipartfile"}],"output":{"name":"mime"}}],[11,"read","","",25,null],[11,"fill_buf","","",25,{"inputs":[{"name":"multipartfile"}],"output":{"name":"result"}}],[11,"consume","","",25,{"inputs":[{"name":"multipartfile"},{"name":"usize"}],"output":null}],[11,"fmt","","",10,{"inputs":[{"name":"entries"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"as_path","","Get the path of this directory, either temporary or permanent.",14,{"inputs":[{"name":"savedir"}],"output":{"name":"path"}}],[11,"is_temporary","","Returns `true` if this is a temporary directory which will be deleted on-drop.",14,{"inputs":[{"name":"savedir"}],"output":{"name":"bool"}}],[11,"into_path","","Unwrap the `PathBuf` from `self`; if this is a temporary directory,\nit will be converted to a permanent one.",14,{"inputs":[{"name":"savedir"}],"output":{"name":"pathbuf"}}],[11,"keep","","If this `SaveDir` is temporary, convert it to permanent.\nThis is a no-op if it already is permanent.",14,{"inputs":[{"name":"savedir"}],"output":null}],[11,"delete","","Delete this directory and its contents, regardless of its permanence.",14,{"inputs":[{"name":"savedir"}],"output":{"name":"result"}}],[11,"as_ref","","",14,{"inputs":[{"name":"savedir"}],"output":{"name":"path"}}],[11,"fmt","","",14,{"inputs":[{"name":"savedir"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",11,{"inputs":[{"name":"savedfile"},{"name":"formatter"}],"output":{"name":"result"}}],[14,"chain_result!","multipart","Chain a series of results together, with or without previous results.",null,null]],"paths":[[3,"Request"],[3,"LazyError"],[3,"Multipart"],[3,"PreparedFields"],[3,"SizedRequest"],[8,"HttpRequest"],[8,"HttpStream"],[3,"Multipart"],[3,"Sink"],[3,"MultipartField"],[3,"Entries"],[3,"SavedFile"],[4,"SaveResult"],[4,"MultipartData"],[4,"SaveDir"],[3,"HyperRequest"],[8,"MultipartHandler"],[3,"Switch"],[3,"Intercept"],[3,"FileSizeLimitError"],[4,"LimitBehavior"],[3,"FileCountLimitError"],[3,"TinyHttpRequest"],[8,"HttpRequest"],[3,"Multipart"],[3,"MultipartFile"]]};
initSearch(searchIndex);
