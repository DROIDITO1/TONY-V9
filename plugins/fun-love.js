let handler = async (_0x5cd231, { conn: _0xf3b60e, command: _0x596798, text: _0x2dafe2 }) => {
  let _0x2cec4d = ('❤️❤️ LOVE METER ❤️❤️\x20\x0aEl amor de ' + _0x2dafe2 + ' por ti es del ' + Math['floor'](Math['random']() * 0x64) + '% de un 100%\x0a¿Deberías preguntarle si quiere ser tu novia?')['trim']();
  _0x5cd231['reply'](_0x2cec4d, null, { 'mentions': _0xf3b60e['parseMention'](_0x2cec4d) });
};

handler['help'] = ['love'];
handler['tags'] = ['diversión'];
handler['command'] = /^(love)$/i;
handler['register'] = !![];

export default handler;