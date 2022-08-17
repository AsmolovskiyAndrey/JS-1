// ? Доступ дать только при подписке pro или top
const sub = "top";
const canAccess = sub === 'top' || sub === "pro";
console.log(`Есть ли доступ к контенту ?`, canAccess);