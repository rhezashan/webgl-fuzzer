beginTransformFeedback = function (){
	return [Or("gl.POINTS","gl.LINES","gl.TRIANGLES")]
}

/**
 * @param {GLenum} target
 * @param {number} index
 * @param {mode} buffer 
 */
bindBufferBase = function (){
	return [Or(["gl.TRANSFORM_FEEDBACK_BUFFER", "gl.UNIFORM_BUFFER"]), Or(tiny_values), Or(buffers)]
}

/**
 * @param {GLenum} target
 * @param {index} GLuint
 * @param {buffer} WebGLBuffer
 * @param {offset} GLintptr
 * @param {size} GLsizeiptr
 */
bindBufferRange = function (target, index, buffer, offset, size){
	var target = Or(["gl.ARRAY_BUFFER", "gl.ELEMENT_ARRAY_BUFFER", "gl.COPY_READ_BUFFER", "gl.COPY_WRITE_BUFFER", "gl.TRANSFORM_FEEDBACK_BUFFER", "gl.UNIFORM_BUFFER", "gl.PIXEL_PACK_BUFFER", "gl.PIXEL_UNPACK_BUFFER"])
	var index = Or(tiny_values)
	return [target, index, Or(buffers), Or(tiny_values), Or(tiny_values)] 
}

beginQuery = function(target, query) {
	var targets = Or(["gl.ANY_SAMPLES_PASSED","gl.ANY_SAMPLES_PASSED_CONSERVATIVE","gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN"])
	return [targets,Or(queries)]
}



binSampler = function(unit,sampler){
	return[Or(tiny_values),Or(samplers)]
}

bindTransformFeedback = function(target, transform_feedbacks){
	return[gl.TRANSFORM_FEEDBACK,transform_feedbacks]
}

bindVertexArray = function(){
	return[Or(vertex_array)]
}

blitFramebuffer = function(srcX0, srcY0, srcX1, srcY1,dstX0, dstY0, dstX1, dstY1, mask, filter) {
	var mask = Or("gl.COLOR_BUFFER_BIT", "gl.DEPTH_BUFFER_BIT", "gl.STENCIL_BUFFER_BIT")
	var filter = Or(["gl.NEAREST","gl.LINEAR"])
	return[Or(tiny_values),Or(tiny_values),Or(tiny_values),Or(tiny_values),Or(tiny_values),Or(tiny_values),Or(tiny_values),Or(tiny_values),mask,filter]
}

clearBufferuiv = function(buffer,drawBuffer,values){
	var buffers = Or(["gl.COLOR", "gl.DEPTH", "gl.STENCIL"])
	return[buffers,Or(tiny_values),Or(tiny_values)]
}

clientWaitSync = function(sync, flags, timeout){
	return[fence_sync,Or(tiny_values),Or(tiny_values)]
}

compressedTexSubImage3D = function(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, offset,srcData){
	var target = Or(["gl.TEXTURE_3D", "gl.TEXTURE_2D_ARRAY"])
	var format = Or(["gl.COMPRESSED_R11_EAC", "gl.COMPRESSED_SIGNED_R11_EAC", "gl.COMPRESSED_RG11_EAC", "gl.COMPRESSED_SIGNED_RG11_EAC", "gl.COMPRESSED_RGB8_ETC2", "gl.COMPRESSED_RGBA8_ETC2_EAC", "gl.COMPRESSED_SRGB8_ETC2", "gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", "gl.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", "gl.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"])
	return[target,Or(tiny_values),Or(tiny_values),Or(tiny_values),Or(tiny_values),Or(tiny_values),Or(tiny_values),Or(tiny_values),format,Or(tiny_values),Or(textures)]
}

compressedTexImage2D = function(target, level, internalformat, width, height, border, srcData){
    var target = Or(["gl.TEXTURE_2D", "gl.TEXTURE_CUBE_MAP_POSITIVE_X", "gl.TEXTURE_CUBE_MAP_NEGATIVE_X", "gl.TEXTURE_CUBE_MAP_POSITIVE_Y", "gl.TEXTURE_CUBE_MAP_NEGATIVE_Y", "gl.TEXTURE_CUBE_MAP_POSITIVE_Z", "gl.TEXTURE_CUBE_MAP_NEGATIVE_Z"])
    var internalFormat = Or(["ext.COMPRESSED_RGB_S3TC_DXT1_EXT", "ext.COMPRESSED_RGBA_S3TC_DXT1_EXT", "ext.COMPRESSED_RGBA_S3TC_DXT3_EXT", "ext.COMPRESSED_RGBA_S3TC_DXT5_EXT", "ext.COMPRESSED_SRGB_S3TC_DXT1_EXT", "ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", "ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", "ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", "ext.COMPRESSED_R11_EAC", "ext.COMPRESSED_SIGNED_R11_EAC", "ext.COMPRESSED_RG11_EAC", "ext.COMPRESSED_SIGNED_RG11_EAC", "ext.COMPRESSED_RGB8_ETC2", "ext.COMPRESSED_RGBA8_ETC2_EAC", "ext.COMPRESSED_SRGB8_ETC2", "ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", "ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", "ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", "ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG", "ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", "ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG", "ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", "ext.COMPRESSED_RGB_ETC1_WEBGL", "ext.COMPRESSED_RGBA_ASTC_4x4_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR", "ext.COMPRESSED_RGBA_ASTC_5x4_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR", "ext.COMPRESSED_RGBA_ASTC_5x5_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR", "ext.COMPRESSED_RGBA_ASTC_6x5_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR", "ext.COMPRESSED_RGBA_ASTC_6x6_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR", "ext.COMPRESSED_RGBA_ASTC_8x5_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR", "ext.COMPRESSED_RGBA_ASTC_8x6_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR", "ext.COMPRESSED_RGBA_ASTC_8x8_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR", "ext.COMPRESSED_RGBA_ASTC_10x5_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR", "ext.COMPRESSED_RGBA_ASTC_10x6_KHR" ,"ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR", "ext.COMPRESSED_RGBA_ASTC_10x10_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR", "ext.COMPRESSED_RGBA_ASTC_12x10_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR", "ext.COMPRESSED_RGBA_ASTC_12x12_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR", "ext.COMPRESSED_RGBA_BPTC_UNORM_EXT", "ext.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT", "ext.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", "ext.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", "ext.COMPRESSED_RED_RGTC1_EXT", "ext.COMPRESSED_SIGNED_RED_RGTC1_EXT", "ext.COMPRESSED_RED_GREEN_RGTC2_EXT", "ext.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT"])
    return [target, Or(tiny_values), internalFormat, Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(textures)]
}

compressedTexImage3D = function(target, level, internalformat, width, height, depth, border, srcData){
    var target = Or(["gl.TEXTURE_2D_ARRAY","gl.TEXTURE_3D"])
    var internalFormat = Or(["ext.COMPRESSED_RGB_S3TC_DXT1_EXT", "ext.COMPRESSED_RGBA_S3TC_DXT1_EXT", "ext.COMPRESSED_RGBA_S3TC_DXT3_EXT", "ext.COMPRESSED_RGBA_S3TC_DXT5_EXT", "ext.COMPRESSED_SRGB_S3TC_DXT1_EXT", "ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", "ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", "ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", "ext.COMPRESSED_R11_EAC", "ext.COMPRESSED_SIGNED_R11_EAC", "ext.COMPRESSED_RG11_EAC", "ext.COMPRESSED_SIGNED_RG11_EAC", "ext.COMPRESSED_RGB8_ETC2", "ext.COMPRESSED_RGBA8_ETC2_EAC", "ext.COMPRESSED_SRGB8_ETC2", "ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", "ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", "ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", "ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG", "ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", "ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG", "ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", "ext.COMPRESSED_RGB_ETC1_WEBGL", "ext.COMPRESSED_RGBA_ASTC_4x4_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR", "ext.COMPRESSED_RGBA_ASTC_5x4_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR", "ext.COMPRESSED_RGBA_ASTC_5x5_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR", "ext.COMPRESSED_RGBA_ASTC_6x5_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR", "ext.COMPRESSED_RGBA_ASTC_6x6_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR", "ext.COMPRESSED_RGBA_ASTC_8x5_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR", "ext.COMPRESSED_RGBA_ASTC_8x6_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR", "ext.COMPRESSED_RGBA_ASTC_8x8_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR", "ext.COMPRESSED_RGBA_ASTC_10x5_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR", "ext.COMPRESSED_RGBA_ASTC_10x6_KHR" ,"ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR", "ext.COMPRESSED_RGBA_ASTC_10x10_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR", "ext.COMPRESSED_RGBA_ASTC_12x10_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR", "ext.COMPRESSED_RGBA_ASTC_12x12_KHR", "ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR", "ext.COMPRESSED_RGBA_BPTC_UNORM_EXT", "ext.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT", "ext.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", "ext.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", "ext.COMPRESSED_RED_RGTC1_EXT", "ext.COMPRESSED_SIGNED_RED_RGTC1_EXT", "ext.COMPRESSED_RED_GREEN_RGTC2_EXT", "ext.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT"])
    return [target, Or(tiny_values), internalFormat, Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(textures)]
}

copyBufferSubData = function(readTarget, writeTarget, readOffset, writeOffset, size) {
	var readTarget = Or(["gl.ARRAY_BUFFER", "gl.ELEMENT_ARRAY_BUFFER", "gl.COPY_READ_BUFFER", "gl.COPY_WRITE_BUFFER", "gl.TRANSFORM_FEEDBACK_BUFFER", "gl.UNIFORM_BUFFER", "gl.PIXEL_PACK_BUFFER", "gl.PIXEL_UNPACK_BUFFER"])
	var writeTarget = Or(["gl.ARRAY_BUFFER", "gl.ELEMENT_ARRAY_BUFFER", "gl.COPY_READ_BUFFER", "gl.COPY_WRITE_BUFFER", "gl.TRANSFORM_FEEDBACK_BUFFER", "gl.UNIFORM_BUFFER", "gl.PIXEL_PACK_BUFFER", "gl.PIXEL_UNPACK_BUFFER"])
	return[readTarget, writeTarget, Or(tiny_values), Or(tiny_values), Or(tiny_values)]
}

copyTexSubImage3D  = function(target, level, xoffset, yoffset, zoffset, x, y, width, height){
	var target = Or(["gl.TEXTURE_3D", "gl.TEXTURE_2D_ARRAY"])
	return[target, Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(tiny_values)]
}

deleteQuery = function(queries) {
	return[queries]
}

deleteSampler = function(){
	return[samplers]
}

deleteSync = function(){
	return[fence_sync]
}

deleteTransformFeedback = function(){
	return[transform_feedbacks]
}

deleteVertexArray = function(){
	return[Or(vertex_array)]
}

drawArraysInstanced = function(mode, first, count, instanceCount){
	var mode = Or(["gl.POINTS", "gl.LINE_STRIP", "gl.LINE_LOOP", "gl.LINES", "gl.TRIANGLE_STRIP", "gl.TRIANGLE_FAN", "gl.TRIANGLES"])
	return[mode, Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(tiny_values)]
}

drawBuffers = function(buffers,buffers){
	var buffers = Or(["gl.NONE", "gl.BACK", "gl.COLOR_ATTACHMENT1", "gl.COLOR_ATTACHMENT2", "gl.COLOR_ATTACHMENT3", "gl.COLOR_ATTACHMENT4", "gl.COLOR_ATTACHMENT5", "gl.COLOR_ATTACHMENT6", "gl.COLOR_ATTACHMENT7", "gl.COLOR_ATTACHMENT8", "gl.COLOR_ATTACHMENT9", "gl.COLOR_ATTACHMENT10", "gl.COLOR_ATTACHMENT11", "gl.COLOR_ATTACHMENT12", "gl.COLOR_ATTACHMENT13", "gl.COLOR_ATTACHMENT14", "gl.COLOR_ATTACHMENT15", "gl.DEPTH_ATTACHMENT", "gl.STENCIL_ATTACHMENT", "gl.DEPTH_STENCIL_ATTACHMENT", "ext.COLOR_ATTACHMENT0_WEBGL", "ext.COLOR_ATTACHMENT1_WEBGL", "ext.COLOR_ATTACHMENT2_WEBGL", "ext.COLOR_ATTACHMENT3_WEBGL", "ext.COLOR_ATTACHMENT4_WEBGL", "ext.COLOR_ATTACHMENT5_WEBGL", "ext.COLOR_ATTACHMENT6_WEBGL", "ext.COLOR_ATTACHMENT7_WEBGL", "ext.COLOR_ATTACHMENT8_WEBGL", "ext.COLOR_ATTACHMENT9_WEBGL", "ext.COLOR_ATTACHMENT10_WEBGL", "ext.COLOR_ATTACHMENT11_WEBGL", "ext.COLOR_ATTACHMENT12_WEBGL", "ext.COLOR_ATTACHMENT13_WEBGL", "ext.COLOR_ATTACHMENT14_WEBGL", "ext.COLOR_ATTACHMENT15_WEBGL"])
	return[buffers,buffers]
}

drawElementsInstanced = function(mode, count, type, offset, instanceCount){
	var mode = Or(["gl.POINTS", "gl.LINE_STRIP", "gl.LINE_LOOP", "gl.LINES", "gl.TRIANGLE_STRIP", "gl.TRIANGLE_FAN", "gl.TRIANGLES"])
	var type = Or(["gl.UNSIGNED_BYTE","gl.UNSIGNED_SHORT", "gl.UNSIGNED_INT"])
	return[mode, Or(tiny_values), type, Or(tiny_values), Or(tiny_values)]
}

drawRangeElements = function(mode, start, end, count, type, offset){
	var mode = Or(["gl.POINTS", "gl.LINE_STRIP", "gl.LINE_LOOP", "gl.LINES", "gl.TRIANGLE_STRIP", "gl.TRIANGLE_FAN", "gl.TRIANGLES"])
	var type = Or(["gl.UNSIGNED_BYTE","gl.UNSIGNED_SHORT", "gl.UNSIGNED_INT"])
	return[mode,Or(tiny_values),Or(tiny_values),Or(tiny_values), type, Or(tiny_values)]
}

endQuery = function(target){
	var target = Or(["gl.ANY_SAMPLES_PASSED","gl.ANY_SAMPLES_PASSED_CONSERVATIVE", "gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN"])
	return[target]
}

endTransformFeedback = function(){
	return[]
}

framebufferTextureLayer = function(target, attachment, texture, level, layer){
	var target = Or(["gl.FRAMEBUFFER", "gl.DRAW_FRAMEBUFFER", "gl.READ_FRAMEBUFFER"])
	var attachment = Or(["gl.NONE", "gl.BACK", "gl.COLOR_ATTACHMENT1", "gl.COLOR_ATTACHMENT2", "gl.COLOR_ATTACHMENT3", "gl.COLOR_ATTACHMENT4", "gl.COLOR_ATTACHMENT5", "gl.COLOR_ATTACHMENT6", "gl.COLOR_ATTACHMENT7", "gl.COLOR_ATTACHMENT8", "gl.COLOR_ATTACHMENT9", "gl.COLOR_ATTACHMENT10", "gl.COLOR_ATTACHMENT11", "gl.COLOR_ATTACHMENT12", "gl.COLOR_ATTACHMENT13", "gl.COLOR_ATTACHMENT14", "gl.COLOR_ATTACHMENT15", "gl.DEPTH_ATTACHMENT", "gl.STENCIL_ATTACHMENT", "gl.DEPTH_STENCIL_ATTACHMENT", "ext.COLOR_ATTACHMENT0_WEBGL", "ext.COLOR_ATTACHMENT1_WEBGL", "ext.COLOR_ATTACHMENT2_WEBGL", "ext.COLOR_ATTACHMENT3_WEBGL", "ext.COLOR_ATTACHMENT4_WEBGL", "ext.COLOR_ATTACHMENT5_WEBGL", "ext.COLOR_ATTACHMENT6_WEBGL", "ext.COLOR_ATTACHMENT7_WEBGL", "ext.COLOR_ATTACHMENT8_WEBGL", "ext.COLOR_ATTACHMENT9_WEBGL", "ext.COLOR_ATTACHMENT10_WEBGL", "ext.COLOR_ATTACHMENT11_WEBGL", "ext.COLOR_ATTACHMENT12_WEBGL", "ext.COLOR_ATTACHMENT13_WEBGL", "ext.COLOR_ATTACHMENT14_WEBGL", "ext.COLOR_ATTACHMENT15_WEBGL","gl.DEPTH_ATTACHMENT","gl.STENCIL_ATTACHMENT","gl.DEPTH_STENCIL_ATTACHMENT"])
	return[target,attachment,textures,Or(tiny_values),Or(tiny_values)]
}

invalidateFramebuffer = function(target, attachment){
	var target = Or(["gl.FRAMEBUFFER", "gl.DRAW_FRAMEBUFFER", "gl.READ_FRAMEBUFFER"])
	var attachment = Or(["gl.NONE", "gl.BACK", "gl.COLOR_ATTACHMENT1", "gl.COLOR_ATTACHMENT2", "gl.COLOR_ATTACHMENT3", "gl.COLOR_ATTACHMENT4", "gl.COLOR_ATTACHMENT5", "gl.COLOR_ATTACHMENT6", "gl.COLOR_ATTACHMENT7", "gl.COLOR_ATTACHMENT8", "gl.COLOR_ATTACHMENT9", "gl.COLOR_ATTACHMENT10", "gl.COLOR_ATTACHMENT11", "gl.COLOR_ATTACHMENT12", "gl.COLOR_ATTACHMENT13", "gl.COLOR_ATTACHMENT14", "gl.COLOR_ATTACHMENT15", "gl.DEPTH_ATTACHMENT", "gl.STENCIL_ATTACHMENT", "gl.DEPTH_STENCIL_ATTACHMENT", "ext.COLOR_ATTACHMENT0_WEBGL", "ext.COLOR_ATTACHMENT1_WEBGL", "ext.COLOR_ATTACHMENT2_WEBGL", "ext.COLOR_ATTACHMENT3_WEBGL", "ext.COLOR_ATTACHMENT4_WEBGL", "ext.COLOR_ATTACHMENT5_WEBGL", "ext.COLOR_ATTACHMENT6_WEBGL", "ext.COLOR_ATTACHMENT7_WEBGL", "ext.COLOR_ATTACHMENT8_WEBGL", "ext.COLOR_ATTACHMENT9_WEBGL", "ext.COLOR_ATTACHMENT10_WEBGL", "ext.COLOR_ATTACHMENT11_WEBGL", "ext.COLOR_ATTACHMENT12_WEBGL", "ext.COLOR_ATTACHMENT13_WEBGL", "ext.COLOR_ATTACHMENT14_WEBGL", "ext.COLOR_ATTACHMENT15_WEBGL","gl.DEPTH_ATTACHMENT","gl.STENCIL_ATTACHMENT","gl.DEPTH_STENCIL_ATTACHMENT"])
	return[target,attachment]
}

invalidateSubFramebuffer = function(target, attachments, x, y, width, height){
	var target = Or(["gl.FRAMEBUFFER", "gl.DRAW_FRAMEBUFFER", "gl.READ_FRAMEBUFFER"])
	var attachment = Or(["gl.NONE", "gl.BACK", "gl.COLOR_ATTACHMENT1", "gl.COLOR_ATTACHMENT2", "gl.COLOR_ATTACHMENT3", "gl.COLOR_ATTACHMENT4", "gl.COLOR_ATTACHMENT5", "gl.COLOR_ATTACHMENT6", "gl.COLOR_ATTACHMENT7", "gl.COLOR_ATTACHMENT8", "gl.COLOR_ATTACHMENT9", "gl.COLOR_ATTACHMENT10", "gl.COLOR_ATTACHMENT11", "gl.COLOR_ATTACHMENT12", "gl.COLOR_ATTACHMENT13", "gl.COLOR_ATTACHMENT14", "gl.COLOR_ATTACHMENT15", "gl.DEPTH_ATTACHMENT", "gl.STENCIL_ATTACHMENT", "gl.DEPTH_STENCIL_ATTACHMENT", "ext.COLOR_ATTACHMENT0_WEBGL", "ext.COLOR_ATTACHMENT1_WEBGL", "ext.COLOR_ATTACHMENT2_WEBGL", "ext.COLOR_ATTACHMENT3_WEBGL", "ext.COLOR_ATTACHMENT4_WEBGL", "ext.COLOR_ATTACHMENT5_WEBGL", "ext.COLOR_ATTACHMENT6_WEBGL", "ext.COLOR_ATTACHMENT7_WEBGL", "ext.COLOR_ATTACHMENT8_WEBGL", "ext.COLOR_ATTACHMENT9_WEBGL", "ext.COLOR_ATTACHMENT10_WEBGL", "ext.COLOR_ATTACHMENT11_WEBGL", "ext.COLOR_ATTACHMENT12_WEBGL", "ext.COLOR_ATTACHMENT13_WEBGL", "ext.COLOR_ATTACHMENT14_WEBGL", "ext.COLOR_ATTACHMENT15_WEBGL","gl.DEPTH_ATTACHMENT","gl.STENCIL_ATTACHMENT","gl.DEPTH_STENCIL_ATTACHMENT"])
	return[target,attachment,Or(tiny_values),Or(tiny_values),Or(tiny_values),Or(tiny_values)]
}

pauseTransformFeedback = function(){
	return[]
}

readBuffer = function(source){
	var source = Or(["gl.NONE", "gl.BACK", "gl.COLOR_ATTACHMENT1", "gl.COLOR_ATTACHMENT2", "gl.COLOR_ATTACHMENT3", "gl.COLOR_ATTACHMENT4", "gl.COLOR_ATTACHMENT5", "gl.COLOR_ATTACHMENT6", "gl.COLOR_ATTACHMENT7", "gl.COLOR_ATTACHMENT8", "gl.COLOR_ATTACHMENT9", "gl.COLOR_ATTACHMENT10", "gl.COLOR_ATTACHMENT11", "gl.COLOR_ATTACHMENT12", "gl.COLOR_ATTACHMENT13", "gl.COLOR_ATTACHMENT14", "gl.COLOR_ATTACHMENT15", "gl.DEPTH_ATTACHMENT", "gl.STENCIL_ATTACHMENT", "gl.DEPTH_STENCIL_ATTACHMENT", "ext.COLOR_ATTACHMENT0_WEBGL", "ext.COLOR_ATTACHMENT1_WEBGL", "ext.COLOR_ATTACHMENT2_WEBGL", "ext.COLOR_ATTACHMENT3_WEBGL", "ext.COLOR_ATTACHMENT4_WEBGL", "ext.COLOR_ATTACHMENT5_WEBGL", "ext.COLOR_ATTACHMENT6_WEBGL", "ext.COLOR_ATTACHMENT7_WEBGL", "ext.COLOR_ATTACHMENT8_WEBGL", "ext.COLOR_ATTACHMENT9_WEBGL", "ext.COLOR_ATTACHMENT10_WEBGL", "ext.COLOR_ATTACHMENT11_WEBGL", "ext.COLOR_ATTACHMENT12_WEBGL", "ext.COLOR_ATTACHMENT13_WEBGL", "ext.COLOR_ATTACHMENT14_WEBGL", "ext.COLOR_ATTACHMENT15_WEBGL","gl.DEPTH_ATTACHMENT","gl.STENCIL_ATTACHMENT","gl.DEPTH_STENCIL_ATTACHMENT"])
	return[source]
}

renderbufferStorageMultisample = function(target, samples, internalFormat, width, height){
	var target = "gl.RENDERBUFFER"
	var internalFormat = Or(["ext.RGB32F_EXT", "ext.RGBA32F_EXT", "ext.SRGB8_ALPHA8_EXT", "gl.DEPTH24_STENCIL8", "gl.DEPTH32F_STENCIL8", "gl.DEPTH_COMPONENT16", "gl.DEPTH_COMPONENT24", "gl.DEPTH_COMPONENT32F", "gl.DEPTH_STENCIL", "gl.R11F_G11F_B10F", "gl.R16F", "gl.R16I", "gl.R16UI", "gl.R32F", "gl.R32I", "gl.R32UI", "gl.R8", "gl.R8I", "gl.R8UI", "gl.RG16F", "gl.RG16I", "gl.RG16UI", "gl.RG32F", "gl.RG32I", "gl.RG32UI", "gl.RG8", "gl.RG8I", "gl.RG8UI", "gl.RGB10_A2", "gl.RGB10_A2UI", "gl.RGB565", "gl.RGB5_A1", "gl.RGB8", "gl.RGBA16F", "gl.RGBA16I", "gl.RGBA16UI", "gl.RGBA32F", "gl.RGBA32I", "gl.RGBA32UI", "gl.RGBA4", "gl.RGBA8", "gl.RGBA8I", "gl.RGBA8UI", "gl.SRGB8_ALPHA8", "gl.STENCIL_INDEX8"])
	return[target, Or(tiny_values), internalFormat, Or(tiny_values), Or(tiny_values)]
}

resumeTransformFeedback = function(){
	return[]
}

samplerParameteri = function(sampler, pname, param){
	var pname = Or(["gl.BUFFER_SIZE", "gl.BUFFER_USAGE", "gl.STATIC_DRAW", "gl.DYNAMIC_DRAW", "gl.STREAM_DRAW", "gl.STATIC_READ", "gl.DYNAMIC_READ", "gl.STREAM_READ", "gl.STATIC_COPY", "gl.DYNAMIC_COPY", "gl.STREAM_COPY"])
	var param = Or(["gl.NEAREST", "gl.LINEAR", "gl.NEAREST_MIPMAP_NEAREST","gl.LINEAR_MIPMAP_NEAREST","gl.NEAREST_MIPMAP_LINEAR","gl.LINEAR_MIPMAP_LINEAR"])
	return[samplers,pname,param]
}

texImage3D = function(target, level, internalformat, width, height, depth, border, format, type, data){
	var target = Or(["gl.TEXTURE_3D", "gl.TEXTURE_2D_ARRAY"])
	var internalFormat = Or(["gl.ALPHA", "gl.RGB", "gl.RGBA", "gl.LUMINANCE", "gl.LUMINANCE_ALPHA", "gl.R8", "gl.R16F", "gl.R32F", "gl.R8UI", "gl.RG8", "gl.RG16F", "gl.RG32F", "gl.RGUI", "gl.RGB8", "gl.SRGB8", "gl.RGB565", "gl.R11F_G11F_B10F", "gl.RGB9_E5", "gl.RGB16F", "gl.RGB32F", "gl.RGB8UI", "gl.RGBA8", "gl.SRGB8_ALPHA8", "gl.RGB5_A1", "gl.RGBA4444", "gl.RGBA16F", "gl.RGBA32F", "gl.RGBA8UI"])
	var type = Or(["gl.UNSIGNED_BYTE", "gl.UNSIGNED_SHORT_5_6_5", "gl.UNSIGNED_SHORT_4_4_4_4", "gl.UNSIGNED_SHORT_5_5_5_1", "gl.FLOAT", "gl.BYTE", "gl.UNSIGNED_SHORT", "gl.SHORT", "gl.UNSIGNED_INT", "gl.INT", "gl.HALF_FLOAT", "gl.FLOAT", "gl.UNSIGNED_INT_2_10_10_10_REV", "gl.UNSIGNED_INT_10F_11F_11F_REV", "gl.UNSIGNED_INT_5_9_9_9_REV", "gl.UNSIGNED_INT_24_8"])
	return[target,Or(tiny_values),internalFormat,Or(tiny_values),Or(tiny_values),Or(tiny_values),Or(tiny_values),internalFormat, type, Or(array_buffers)]
}

texStorage2D = function(target, levels, internalformat, width, height){
	var target = Or(["gl.TEXTURE_3D", "gl.TEXTURE_2D_ARRAY"])
	var internalFormat = Or(["gl.DEPTH24_STENCIL8", "gl.DEPTH32F_STENCIL8", "gl.DEPTH_COMPONENT16", "gl.DEPTH_COMPONENT24", "gl.DEPTH_COMPONENT32F", "gl.DEPTH_STENCIL", "gl.R11F_G11F_B10F", "gl.R16F", "gl.R16I", "gl.R16UI", "gl.R32F", "gl.R32I", "gl.R32UI", "gl.R8", "gl.R8I", "gl.R8UI", "gl.RG16F", "gl.RG16I", "gl.RG16UI", "gl.RG32F", "gl.RG32I", "gl.RG32UI", "gl.RG8", "gl.RG8I", "gl.RG8UI", "gl.RGB10_A2", "gl.RGB10_A2UI", "gl.RGB565", "gl.RGB5_A1", "gl.RGB8", "gl.RGBA16F", "gl.RGBA16I", "gl.RGBA16UI", "gl.RGBA32F", "gl.RGBA32I", "gl.RGBA32UI", "gl.RGBA4", "gl.RGBA8", "gl.RGBA8I", "gl.RGBA8UI", "gl.SRGB8_ALPHA8", "gl.STENCIL_INDEX8", "gl.COMPRESSED_R11_EAC", "gl.COMPRESSED_SIGNED_R11_EAC", "gl.COMPRESSED_RG11_EAC", "gl.COMPRESSED_SIGNED_RG11_EAC", "gl.COMPRESSED_RGB8_ETC2", "gl.COMPRESSED_RGBA8_ETC2_EAC", "gl.COMPRESSED_SRGB8_ETC2", "gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", "gl.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", "gl.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"])
	return[target,Or(tiny_values),internalFormat,Or(tiny_values),Or(tiny_values)]
}

texStorage3D = function(target, levels, internalformat, width, height, depth){
	var target = Or(["gl.TEXTURE_3D", "gl.TEXTURE_2D_ARRAY"])
	var internalFormat = Or(["gl.DEPTH24_STENCIL8", "gl.DEPTH32F_STENCIL8", "gl.DEPTH_COMPONENT16", "gl.DEPTH_COMPONENT24", "gl.DEPTH_COMPONENT32F", "gl.DEPTH_STENCIL", "gl.R11F_G11F_B10F", "gl.R16F", "gl.R16I", "gl.R16UI", "gl.R32F", "gl.R32I", "gl.R32UI", "gl.R8", "gl.R8I", "gl.R8UI", "gl.RG16F", "gl.RG16I", "gl.RG16UI", "gl.RG32F", "gl.RG32I", "gl.RG32UI", "gl.RG8", "gl.RG8I", "gl.RG8UI", "gl.RGB10_A2", "gl.RGB10_A2UI", "gl.RGB565", "gl.RGB5_A1", "gl.RGB8", "gl.RGBA16F", "gl.RGBA16I", "gl.RGBA16UI", "gl.RGBA32F", "gl.RGBA32I", "gl.RGBA32UI", "gl.RGBA4", "gl.RGBA8", "gl.RGBA8I", "gl.RGBA8UI", "gl.SRGB8_ALPHA8", "gl.STENCIL_INDEX8", "gl.COMPRESSED_R11_EAC", "gl.COMPRESSED_SIGNED_R11_EAC", "gl.COMPRESSED_RG11_EAC", "gl.COMPRESSED_SIGNED_RG11_EAC", "gl.COMPRESSED_RGB8_ETC2", "gl.COMPRESSED_RGBA8_ETC2_EAC", "gl.COMPRESSED_SRGB8_ETC2", "gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", "gl.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", "gl.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"])
	return[target,Or(tiny_values),internalFormat,Or(tiny_values),Or(tiny_values),Or(tiny_values)]
}

texSubImage3D = function(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
	var target = Or(["gl.TEXTURE_3D", "gl.TEXTURE_2D_ARRAY"])
	var format = Or(["gl.ALPHA", "gl.RGB", "gl.RGBA", "gl.LUMINANCE", "gl.LUMINANCE_ALPHA", "gl.ALPHA", "gl.RGB", "gl.RGBA", "gl.LUMINANCE", "gl.LUMINANCE_ALPHA", "gl.R8", "gl.R16F", "gl.R32F", "gl.R8UI", "gl.RG8", "gl.RG16F", "gl.RG32F", "gl.RGUI", "gl.RGB8", "gl.SRGB8", "gl.RGB565", "gl.R11F_G11F_B10F", "gl.RGB9_E5", "gl.RGB16F", "gl.RGB32F", "gl.RGB8UI", "gl.RGBA8", "gl.SRGB8_ALPHA8", "gl.RGB5_A1", "gl.RGBA4444", "gl.RGBA16F", "gl.RGBA32F", "gl.RGBA8UI"])
	var type = Or(["gl.UNSIGNED_BYTE", "gl.UNSIGNED_SHORT_5_6_5", "gl.UNSIGNED_SHORT_4_4_4_4", "gl.UNSIGNED_SHORT_5_5_5_1", "gl.FLOAT", "gl.BYTE", "gl.UNSIGNED_SHORT", "gl.SHORT", "gl.UNSIGNED_INT", "gl.INT", "gl.HALF_FLOAT", "gl.FLOAT", "gl.UNSIGNED_INT_2_10_10_10_REV", "gl.UNSIGNED_INT_10F_11F_11F_REV", "gl.UNSIGNED_INT_5_9_9_9_REV", "gl.UNSIGNED_INT_24_8"])
	return[target, Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(tiny_values), format, type, Or(array_buffers)]
}

// TODO
// transformFeedbackVaryings = function(program, varyings, bufferMode){
// 	return[program, ]
// }

getUniformLocation = function (program) {
	var program = Or(programs)
	var name =  Or(["vColor", "a_position", "color"])
	return [program]
}

uniformBlockBinding = function(program, uniformBlockIndex, uniformBlockBinding){
	return[Or(programs), Or(tiny_values), Or(tiny_values)]
}

uniformMatrix2fv = function(location, transpose, data){
	return[Or(programs), Or(["true","false"]), '[' +float(),float(),float(),float() + ']' ]
}

uniformMatrix3x2fv = function (location, transpose, data){
	return[Or(programs), Or(["true","false"]), '[' +float(),float(),float(),float() + ']' ]
}

uniformMatrix4x2fv = function(location, transpose, data){
	return[Or(programs), Or(["true","false"]), '[' +float(),float(),float(),float() + ']' ]
}

uniformMatrix2x3fv = function(location, transpose, data){
	return[Or(programs), Or(["true","false"]), '[' +float(),float(),float(),float() + ']' ]
}

uniformMatrix3fv = function(location, transpose, data){
	return[Or(programs), Or(["true","false"]), '[' +float(),float(),float(),float() + ']' ]
}

uniformMatrix4x3fv = function(location, transpose, data){
	return[Or(programs), Or(["true","false"]), '[' +float(),float(),float(),float() + ']' ]
}

uniformMatrix2x4fv = function(location, transpose, data){
	return[Or(programs), Or(["true","false"]), '[' +float(),float(),float(),float() + ']' ]
}

uniformMatrix3x4fv = function(location, transpose, data){
	return[Or(programs), Or(["true","false"]), '[' +float(),float(),float(),float() + ']' ]
}

uniformMatrix4fv = function(location, transpose, data){
	return[Or(programs), Or(["true","false"]), '[' +float(),float(),float(),float() + ']' ]
}

vertexAttribDivisor = function(index, divisor){
	return[Or(tiny_values), Or(tiny_values)]
}

vertexAttribI4i = function(index, v0, v1, v2, v3){
	return[Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(tiny_values)]
}

vertexAttribIPointer = function(index, size, type, stride, offset){
	var type = Or(["gl.UNSIGNED_BYTE", "gl.UNSIGNED_SHORT", "gl.UNSIGNED_INT"])
	return[Or(tiny_values), Or(tiny_values), type, Or(tiny_values), Or(tiny_values)]
}

waitSync = function(sync, flags, timeout){
	var timeout = "gl.TIMEOUT_IGNORED"
	return[fence_sync, Or(tiny_values), timeout]
}

framebufferTextureMultiviewOVR = function(target, attachment, texture, level, baseViewIndex, numViews){
	var target = Or(["gl.FRAMEBUFFER", "gl.DRAW_FRAMEBUFFER", "gl.READ_FRAMEBUFFER"])
	var attachment = Or(["gl.NONE", "gl.BACK", "gl.COLOR_ATTACHMENT1", "gl.COLOR_ATTACHMENT2", "gl.COLOR_ATTACHMENT3", "gl.COLOR_ATTACHMENT4", "gl.COLOR_ATTACHMENT5", "gl.COLOR_ATTACHMENT6", "gl.COLOR_ATTACHMENT7", "gl.COLOR_ATTACHMENT8", "gl.COLOR_ATTACHMENT9", "gl.COLOR_ATTACHMENT10", "gl.COLOR_ATTACHMENT11", "gl.COLOR_ATTACHMENT12", "gl.COLOR_ATTACHMENT13", "gl.COLOR_ATTACHMENT14", "gl.COLOR_ATTACHMENT15", "gl.DEPTH_ATTACHMENT", "gl.STENCIL_ATTACHMENT", "gl.DEPTH_STENCIL_ATTACHMENT", "ext.COLOR_ATTACHMENT0_WEBGL", "ext.COLOR_ATTACHMENT1_WEBGL", "ext.COLOR_ATTACHMENT2_WEBGL", "ext.COLOR_ATTACHMENT3_WEBGL", "ext.COLOR_ATTACHMENT4_WEBGL", "ext.COLOR_ATTACHMENT5_WEBGL", "ext.COLOR_ATTACHMENT6_WEBGL", "ext.COLOR_ATTACHMENT7_WEBGL", "ext.COLOR_ATTACHMENT8_WEBGL", "ext.COLOR_ATTACHMENT9_WEBGL", "ext.COLOR_ATTACHMENT10_WEBGL", "ext.COLOR_ATTACHMENT11_WEBGL", "ext.COLOR_ATTACHMENT12_WEBGL", "ext.COLOR_ATTACHMENT13_WEBGL", "ext.COLOR_ATTACHMENT14_WEBGL", "ext.COLOR_ATTACHMENT15_WEBGL","gl.DEPTH_ATTACHMENT","gl.STENCIL_ATTACHMENT","gl.DEPTH_STENCIL_ATTACHMENT"])
	return [target, attachment, textures, Or(tiny_values), Or(tiny_values), Or(tiny_values), Or(tiny_values)]	
}