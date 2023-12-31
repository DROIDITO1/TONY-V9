let handler = async (m, { conn, args, participants }) => { 
     let users = Object.entries(global.db.data.users).map(([key, value]) => { 
         return { ...value, jid: key } 
     }) 
     let sortedExp = users.map(toNumber('exp')).sort(sort('exp')) 
     let sortedLim = users.map(toNumber('limit')).sort(sort('limit')) 
     let sortedDola = users.map(toNumber('joincount')).sort(sort('joincount')) 
     let sortedLevel = users.map(toNumber('level')).sort(sort('level')) 
     let sortedRole = users.map(toNumber('role')).sort(sort('role')) 
     let sortedRole2 = users.map(toNumber('role2')).sort(sort('role2')) 
     let usersExp = sortedExp.map(enumGetKey) 
     let usersDola = sortedDola.map(enumGetKey) 
     let usersLim = sortedLim.map(enumGetKey) 
     let usersLevel = sortedLevel.map(enumGetKey) 
     let usersRole2 = sortedRole2.map(enumGetKey) 
     let usersRole = sortedRole.map(enumGetKey) 
     let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length) 
  
     let text = `•••••••••••••••••• 
 🧑🏻‍💻 *TABLA DE CLASIFICACION* 
 ╰───────────────╯ 
 ╭「☆ *TOP ${len} DOLARES 💵* ☆」 
 │➯Tú : *${usersDola.indexOf(m.sender) + 1}* de *${usersDola.length}* 
 │➯${sortedDola.slice(0, len).map(({ jid, joincount, name }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : ''}*${name.toUpperCase()}* : ${joincount} dolares`).join`\n`} 
 ─────────────────⋆ 
 ╭「☆ *TOP ${len} XP* ☆」 
 │➯Tú : *${usersExp.indexOf(m.sender) + 1}* de *${usersExp.length}* 
 │➯${sortedExp.slice(0, len).map(({ jid, exp, name }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : ''}*${name.toUpperCase()}* : ${exp} Exp`).join`\n`} 
 ─────────────────⋆ 
 ╭「☆ *TOP ${len} DIAMANTES* 💎 ☆」 
 │➯Tú : *${usersLim.indexOf(m.sender) + 1}* de *${usersLim.length}* 
 │➯${sortedLim.slice(0, len).map(({ jid, limit, name }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : ''}*${name.toUpperCase()}* : ${limit} Diamantes`).join`\n`} 
 ─────────────────⋆ 
 ╭「☆ *TOP ${len} NIVEL* ☆」 
 │➯Tú : *${usersLevel.indexOf(m.sender) + 1}* de *${usersLevel.length}* 
 │➯${sortedLevel.slice(0, len).map(({ jid, level, name }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : ''}*${name.toUpperCase()}* : Nivel ${level}`).join`\n`} 
 ─────────────────⋆`.trim() 
  
     m.reply(text, null, { mentions: conn.parseMention(text) }) 
 } 
 handler.help = ['top'] 
 handler.tags = ['xp'] 
 handler.command = ['top2', 'lb'] 
  
 handler.fail = null 
 handler.exp = 0 
 handler.register = true 
 export default handler 
  
 function sort(property, ascending = true) { 
     if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property] 
     else return (...args) => args[ascending & 1] - args[!ascending & 1] 
 } 
  
 function toNumber(property, _default = 0) { 
     if (property) return (a, i, b) => { 
         return { ...b[i], [property]: a[property] === undefined ? _default : a[property] } 
     } 
     else return a => a === undefined ? _default : a 
 } 
  
 function enumGetKey(a) { 
     return a.jid 
 }