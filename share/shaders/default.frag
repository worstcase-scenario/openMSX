uniform sampler2D tex;
uniform sampler2D videoTex;

varying vec2 texCoord;
varying vec2 videoCoord;

void main()
{
gl_FragColor = texture2D(tex, texCoord);
}
