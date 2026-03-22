self.__uv$config = {
    prefix: '/service/',
    bare: 'https://vault-bare.vercel.app/', // Updated to your server
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv.sw.js',
};