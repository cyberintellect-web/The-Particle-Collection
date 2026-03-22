self.__uv$config = {
    prefix: '/core/',
    bare: 'https://vault-bare.vercel.app/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv.sw.js', // This points to the one you moved to the root
};