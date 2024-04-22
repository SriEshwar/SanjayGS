var zlib = require('zlib');

var input = Buffer.from('Hi How are You');
zlib.deflate(input, (err, compressed) => {
    if (err) {
        console.error('Compression error:', err);
        return;
    }
    console.log('Compressed data:', compressed);

    zlib.inflate(compressed, (err, output) => {
        if (err) {
            console.error('Decompression error:', err);
            return;
        }
        console.log('Decompressed data:', output.toString());
    });
});
