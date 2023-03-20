require("./libs/randoms")
// webgl operations
require("./libs/webglRenderingContextOperations.js");
// webgl2 operations
require("./libs/webgl2RenderingContextOperations.js");
// const close = require('close');
const process = require('process');
var parseArgs = require('minimist')(process.argv.slice(2));
var fs = require('fs');
const crypto = require('crypto');
const path = require('path');
var webidl = require("./libs/webidl1.js");

var webgl2file = fs.readFileSync(path.resolve(__dirname, 'libs/webgl2.idl')).toString()
var webgl1file = fs.readFileSync(path.resolve(__dirname, 'libs/webgl.idl')).toString()

checkIfSequence = function (arg) {

    if (arg["idlType"]["sequence"])
        return true
    return false
}


fidentifier = function () {
    var N = 8;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < N; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

}

bind_variable_to_gl = function (type, iden) {
    return `gl.bind${type}(${iden});`
}


// array_buffers
create_array_buffers = function () {
    var iden = fidentifier()
    var iden2 = fidentifier()
    array_buffers.push(iden)
    // var array_buffer_types = [`Uint8Array(${iden2})`, `Uint8ClampedArray(${iden2})`, `Int16Array(${iden2})`, `Uint16Array(${iden2})`, `Int32Array(${iden2})`, `Uint32Array(${iden2})`, `Float32Array(${iden2})`, `Float64Array(${iden2})`]
    var array_buffer_types = [`Uint8Array(${iden2})`,`Uint8Array(${iden2})`,`Uint8Array(${iden2})`,`Uint8Array(${iden2})`]
    // shuffle2(array_buffer_types)
    // return `var ${iden} = new ${Or(array_buffer_types)};\ngl.bufferData(gl.ARRAY_BUFFER, ${iden}, gl.STATIC_DRAW);\n`
    return `var ${iden2} = new ArrayBuffer(${number_Uint8Array()});\nvar ${iden} = new ${Or(array_buffer_types)};\n`
}

// bindings = [];
create_bindings = function () {
    var iden = fidentifier();
    bindings.push(iden);

    var targets = ["gl.TRANSFORM_FEEDBACK_BUFFER_BINDING",//: Returns a WebGLBuffer.
        "gl.TRANSFORM_FEEDBACK_BUFFER_SIZE",//: Returns a GLsizeiptr.
        "gl.TRANSFORM_FEEDBACK_BUFFER_START",//: Returns a GLintptr.
        "gl.UNIFORM_BUFFER_BINDING",//: Returns a WebGLBuffer.
        "gl.UNIFORM_BUFFER_SIZE",//: Returns a GLsizeiptr.
        "gl.UNIFORM_BUFFER_START"//: Returns a GLintptr.
    ]

    var targets2 = ["gl.COPY_READ_BUFFER_BINDING",
        "gl.COPY_WRITE_BUFFER_BINDING",
        "gl.DRAW_BUFFERi",
        "gl.DRAW_FRAMEBUFFER_BINDING",
        "gl.FRAGMENT_SHADER_DERIVATIVE_HINT",
        "gl.MAX_3D_TEXTURE_SIZE",
        "gl.MAX_ARRAY_TEXTURE_LAYERS",
        "gl.MAX_CLIENT_WAIT_TIMEOUT_WEBGL",
        "gl.MAX_COLOR_ATTACHMENTS",
        "gl.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS",
        "gl.MAX_COMBINED_UNIFORM_BLOCKS",
        "gl.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS",
        "gl.MAX_DRAW_BUFFERS",
        "gl.MAX_ELEMENT_INDEX",
        "gl.MAX_ELEMENTS_INDICES",
        "gl.MAX_ELEMENTS_VERTICES",
        "gl.MAX_FRAGMENT_INPUT_COMPONENTS",
        "gl.MAX_FRAGMENT_UNIFORM_BLOCKS",
        "gl.MAX_FRAGMENT_UNIFORM_COMPONENTS",
        "gl.MAX_PROGRAM_TEXEL_OFFSET",
        "gl.MAX_SAMPLES",
        "gl.MAX_SERVER_WAIT_TIMEOUT",
        "gl.MAX_TEXTURE_LOD_BIAS",
        "gl.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS",
        "gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS",
        "gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS",
        "gl.MAX_UNIFORM_BLOCK_SIZE",
        "gl.MAX_UNIFORM_BUFFER_BINDINGS",
        "gl.MAX_VARYING_COMPONENTS",
        "gl.MAX_VERTEX_OUTPUT_COMPONENTS",
        "gl.MAX_VERTEX_UNIFORM_BLOCKS",
        "gl.MAX_VERTEX_UNIFORM_COMPONENTS",
        "gl.MIN_PROGRAM_TEXEL_OFFSET",
        "gl.PACK_ROW_LENGTH",
        "gl.PACK_SKIP_PIXELS",
        "gl.PACK_SKIP_ROWS",
        "gl.PIXEL_PACK_BUFFER_BINDING",
        "gl.PIXEL_UNPACK_BUFFER_BINDING",
        "gl.RASTERIZER_DISCARD",
        "gl.READ_BUFFER",
        "gl.READ_FRAMEBUFFER_BINDING",
        "gl.SAMPLE_ALPHA_TO_COVERAGE",
        "gl.SAMPLE_COVERAGE",
        "gl.SAMPLER_BINDING",
        "gl.TEXTURE_BINDING_2D_ARRAY",
        "gl.TEXTURE_BINDING_3D",
        "gl.TRANSFORM_FEEDBACK_ACTIVE",
        "gl.TRANSFORM_FEEDBACK_BINDING",
        "gl.TRANSFORM_FEEDBACK_BUFFER_BINDING",
        "gl.TRANSFORM_FEEDBACK_PAUSED",
        "gl.UNIFORM_BUFFER_BINDING",
        "gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT",
        "gl.UNPACK_IMAGE_HEIGHT",
        "gl.UNPACK_ROW_LENGTH",
        "gl.UNPACK_SKIP_IMAGES",
        "gl.UNPACK_SKIP_PIXELS",
        "gl.UNPACK_SKIP_ROWS",
        "gl.VERTEX_ARRAY_BINDING"]

    if (rint(2))
        return `var ${iden} = gl.getIndexedParameter(${Or(targets)}, ${rint(3)});\n`
    else
        return `var ${iden} = gl.getParameter(${Or(targets2)});\n`

}

// buffers = [];
create_buffers = function () {
    var iden = fidentifier()
    buffers.push(iden)
    // return `var ${iden} = gl.createBuffer();\ngl.bindBuffer(gl.ARRAY_BUFFER, ${iden});\n`
    return `var ${iden} = gl.createBuffer();\n`
}

// framebuffers = [];
create_frame_buffers = function () {
    var iden = fidentifier()
    buffers.push(iden)
    return `var ${iden} = gl.createFramebuffer();\n`
}

// renderbuffers = [];
create_render_buffers = function () {
    var iden = fidentifier();
    renderbuffers.push(iden);
    return `var ${iden} = gl.createRenderbuffer();\ngl.bindRenderbuffer(gl.RENDERBUFFER, ${iden});\n`
}

// locations = [];
create_locations = function () {
    var iden = fidentifier();
    locations.push(iden);
    return `var ${iden} = gl.getAttribLocation(program, "a_position");\n`
}

// programs = ['program'];
create_programs = function () {
    var iden = fidentifier()
    programs.push(iden)
    return `var ${iden} = gl.createProgram(gl, vs, fs);\n`
}

// queries = [];
create_queries = function () {
    var iden = fidentifier()
    queries.push(iden);
    return `var ${iden} = gl.createQuery();\n`
}

// samplers = [];
create_samplers = function () {
    var iden = fidentifier()
    samplers.push(iden);
    samplers.push("null");
    return `var ${iden} = gl.createSampler();\ngl.bindSampler(0, ${iden});\n`
}

// syncs = [];
create_syncs = function () {
    var iden = fidentifier()
    syncs.push(iden)
    syncs.push("null")
    return `var ${iden} = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);\n`
}

// textures = []
create_textures = function () {
    var iden = fidentifier()
    textures.push(iden)
    textures.push("null")
    return `var ${iden} = gl.createTexture();\ngl.bindTexture(gl.TEXTURE_2D, ${iden});\n`
}

// transform_feedbacks = [];
create_transform_feedbacks = function () {
    var iden = fidentifier()
    transform_feedbacks.push(iden)
    transform_feedbacks.push("null")
    return `var ${iden} = gl.createTransformFeedback();\ngl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK,${iden});\n`
}

// create_begin_query = function () {
//     var iden = fidentifier()
//     begin_query.push(iden)
//     var targets = ["gl.ANY_SAMPLES_PASSED","gl.ANY_SAMPLES_PASSED_CONSERVATIVE","gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN"]
//     return `var ${iden} = gl.beginQuery();\ngl.beginQuery(${Or(targets)}, ${iden});\n`
// }

create_vertex_array = function (){
    var iden = fidentifier()
    vertex_array.push(iden)
    return `var ${iden} = gl.createVertexArray();\n`
}

create_fence_sync = function(){
    var iden = fidentifier()
    fence_sync.push(iden)
    return `var ${iden} = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);\n`
}
// initialise
init = function () {
    var ret = ``
    return ret

}

// fuzz based on webgl
generateCall = function (name, argsList, idlTypes) {
    var poc = "("
    for (var j = 0; j < argsList.length; j++) {

        arg = argsList[j]

        var sequence = checkIfSequence(arg)

        if (sequence) {
            // use random number 
            // for(var i=0;i<rint(10);i++){
            type = arg["idlType"]["idlType"]
            if (j == argsList.length - 1) {
                // poc+=")"
                // console.log(arg["name"])
                poc += [number()]
            } else {
                poc += number() + ","
            }
            // }
        } else {
            if (j == argsList.length - 1) {
                // poc+=")"
                // console.log(arg["name"])
                poc += number()
            } else
                poc += number() + ","
        }
    }
    return poc + ")"
}

fuzzwebgl1 = function () {

    var webgl1 = []

    // var tree = webidl.parse(webglfile)
    idlTypes = {}
    constants = {}

    var count = 0
    var tree = webidl.parse(webgl1file)
    for (var i in tree) {
        if (tree[i]['name'] == 'WebGLRenderingContextBase')
            WebGLRenderingContextBase = tree[i]
    }
    members = WebGLRenderingContextBase["members"]

    operations = []
    for (i in members) {
        op = members[i]
        if (op['type'] == 'operation')
            operations.push(op)
    }
    while (count < fuzz_count) {

        mem = ra(operations)

        var name = mem["name"];
        var args = mem["arguments"]
        var retType = mem["idlType"]

        if (checkIfSequence(mem["idlType"])) {
            sequence = true
            retType = mem["idlType"]["idlType"]["idlType"]
        } else {
            retType = mem["idlType"]["idlType"]
        }
        for (var k = 0; k < rint(5); k++) {


            try {
                method_args = eval(`${name}()`)
                try {
                    method_args = method_args.join()
                    method_poc = `${name}(${method_args})`
                } catch (e) {
                }
            } catch (e) {
                method_poc = undefined
            }

            if (method_poc)
                webgl1.push("try{gl." + method_poc + "}catch(e){}\n")
            else
                webgl1.push("try{gl." + name + generateCall(name, args, idlTypes) + "}catch(e){}\n")
        }

        tree = raObject(tree)
        count += 1
    }
    // webgl1.push(getFuzzwebgl2)
    return webgl1.shuffle().join(" ")

}

fuzzwebgl2 = function () {

    var webgl2 = []

    // var tree = webidl.parse(webglfile)
    idlTypes = {}
    constants = {}

    var count = 0
    var tree = webidl.parse(webgl2file)
    for (var i in tree) {
        if (tree[i]['name'] == 'WebGL2RenderingContextBase')
            WebGL2RenderingContextBase = tree[i]
    }
    members = WebGL2RenderingContextBase["members"]

    operations = []
    for (i in members) {
        op = members[i]
        if (op['type'] == 'operation')
            operations.push(op)
    }
    while (count < fuzz_count) {

        mem = ra(operations)

        var name = mem["name"];
        var args = mem["arguments"]
        var retType = mem["idlType"]

        if (checkIfSequence(mem["idlType"])) {
            sequence = true
            retType = mem["idlType"]["idlType"]["idlType"]
        } else {
            retType = mem["idlType"]["idlType"]
        }
        for (var k = 0; k < rint(5); k++) {


            try {
                method_args = eval(`${name}()`)
                try {
                    method_args = method_args.join()
                    method_poc = `${name}(${method_args})`
                } catch (e) {
                }
            } catch (e) {
                method_poc = undefined
            }

            if (method_poc)
                webgl2.push("try{gl." + method_poc + "}catch(e){}\n")
            else
                webgl2.push("try{gl." + name + generateCall(name, args, idlTypes) + "}catch(e){}\n")
        }

        tree = raObject(tree)
        count += 1
    }
    // console.log(webgl2)
    // return webgl2.shuffle().join(" ")
    return webgl2.shuffle().join(" ")

}

generate = function () {
    var poc = init();
    for (var i = 0; i < 5; i++){
        // poc += (create_array_buffers())
        poc += (create_buffers());
        poc += (create_frame_buffers())
        poc += (create_array_buffers())
        poc +=(create_bindings()); // comment
        poc +=(create_render_buffers()) // comment
        // poc += (create_locations());
        // poc +=(create_queries()); // comment
        poc +=(create_samplers()); // comment
        poc +=(create_syncs()); // comment
        poc += (create_textures());
        // poc +=(create_transform_feedbacks()); // comment
        // poc +=(create_begin_query());
        poc +=(create_fence_sync());
        poc +=(create_vertex_array());
    }
    poc += (create_programs());

    // poc += (create_array_buffers())
    // poc +=(create_bindings()); // comment
    // poc += (create_buffers());
    // poc += (create_frame_buffers())
    // poc +=(create_render_buffers()) // comment
    // poc += (create_locations());
    // poc += (create_programs());
    // poc +=(create_queries()); // comment
    // poc +=(create_samplers()); // comment
    // poc +=(create_syncs()); // comment
    // poc += (create_textures());
    // poc +=(create_transform_feedbacks()); // comment
    // poc +=(create_begin_query());
    // poc +=(create_fence_sync());
    // poc +=(create_vertex_array());
    poc += "\n";
    poc += fuzzwebgl1();
    poc += "//================batas nya dari sini(1)===================\n";
    poc += fuzzwebgl2();
    poc += "//================batas nya dari sini(2)===================\n";
    poc += fuzzwebgl1();
    poc += "//================batas nya dari sini(1-1)===================\n";
    poc += fuzzwebgl2();
    return poc
}

fuzz_count = 100

shaders = ["vshader", "fshader"]
array_buffers = ["array_buffer"];
buffers = ["positionBuffer"];
framebuffers = [];
renderbuffers = [];
locations = ["positionAttributeLocation"];
programs = ['program'];
vertex_arrays = ['vertexArray'];
bindings = [];
queries = [];
samplers = [];
syncs = [];
textures = []
transform_feedbacks = [];
begin_query = [];
vertex_array = [];
fence_sync = [];

// for(var i=0;i<5;i++){
// create_array_buffers()
// create_bindings()
// create_buffers()
// create_locations()
// create_programs()
// create_queries()
// create_samplers()
// create_syncs()
// create_textures()
// create_transform_feedbacks()
// create_begin_query()
// create_vertex_array()
// create_fence_sync()
// }

// console.log(array_buffers)
// console.log(buffers)
// console.log(locations)
// console.log(programs)
// console.log(vertex_arrays)
// console.log(bindings)
// console.log(queries)
// console.log(samplers)
// console.log(syncs)
// console.log(textures)
// console.log(transform_feedbacks)
// console.log(generate())
// var tree = webidl.parse(webgl1file)
// generate()
fuzz = function(){
    var poc = `
    <html><head><script>
    function createShader(gl, type, source)
    {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source.replace(/^\s+|\s+$/g, ''));
        gl.compileShader(shader);
        return shader;
    }
    function createProgram(gl, vertexShader, fragmentShader)
    {
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program); 
        return program;
    }
    </script>
    <script type="shader" id="vs">
    #version 300 es
    precision highp float;

    void main()
    {
        gl_Position = vec4(1.0, 0.0, 0.0, 0.0);
    }
    </script>
    <script type="shader" id="fs">
    #version 300 es
    precision highp float;
    out vec4 color;

    void main()
    {
        color = vec4(1.0, 0.0, 0.0, 1.0);
    }
    </script>
    <script>
    function corrupt()
    {
        let c = document.createElement("canvas");
        document.body.appendChild(c);
        let gl = c.getContext("webgl2");
        let vs = createShader(gl, gl.VERTEX_SHADER, document.querySelector("#vs").text);
        let fs = createShader(gl, gl.FRAGMENT_SHADER, document.querySelector("#fs").text);
        // let program = createProgram(gl, vs, fs);
        // gl.useProgram(program);

        // const PRE_QUERY_CNT = 62;

        // let qry = gl.createQuery();
        // let tex = gl.createTexture();
        // let fb = gl.createFramebuffer();
        // let fb2 = gl.createFramebuffer();
        // gl.beginQuery(gl.ANY_SAMPLES_PASSED, qry);
        // for( let i = 0; i < PRE_QUERY_CNT; i++ ){
        //     gl.drawArrays(gl.POINTS, 0, 1);
        //     gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4));
        // }
        // gl.endQuery(gl.ANY_SAMPLES_PASSED);
        // gl.colorMask(true, false, false, false);
        // gl.bindTexture(gl.TEXTURE_2D_ARRAY, tex);
        // gl.texStorage3D(gl.TEXTURE_2D_ARRAY, 1, gl.RGBA8, 2, 2, 2);
        // gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
        // gl.getExtension("OVR_multiview2").framebufferTextureMultiviewOVR(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, tex, 0, 0, 2);
        // gl.clear(gl.COLOR_BUFFER_BIT);
        // gl.bindFramebuffer(gl.FRAMEBUFFER, fb2);
        // gl.beginQuery(gl.ANY_SAMPLES_PASSED, qry);
        ${generate()}
    }
    </script></head>
    <body onload=corrupt()>
    </body></html>
    `
    return poc
}

// console.log(poc)

random_names = function() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
// console.log(random_names());
generate_files = function(how_many,folder){
    // var file_generate = 5
    filenames = ''
    poc = ''
    for (var i = 0; i < how_many; i++){
        poc = fuzz()
        filenames = path.join(folder, random_names() + ".html")
        fs.writeFileSync(filenames, poc, (err) => {
            if (err)
            console.log(err);
            else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
            }
        });
    }
}


run = function(){
    // console.log(parseArgs);
    const working_path = path.resolve(__dirname);
    const args2 = Object.values(parseArgs);
    // console.log(args2)
    var how_many = args2[1]
    var folder = args2[2]
    // console.log(working_path);
    if (typeof how_many != "number" && typeof folder != "string") {
        return false // if not number, return
    }
    if (!fs.existsSync(path.resolve(__dirname,folder))){
        fs.mkdirSync(path.resolve(__dirname),folder);
        // console.log('Folder created ' + working_path + folder +' ')
    }
    generate_files(how_many,folder)
    // console.log('generated '+ how_many +' of files')
    // console.log('file are saved on '+ folder +' name')
}

run()