function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
var db = null;
try {
  var FC = {
    apiKey: "AIzaSyDxX4bZAfHfnKcKBrCdGaZ-2AQzNyGwiGk",
    authDomain: "pawsociety-3cea3.firebaseapp.com",
    projectId: "pawsociety-3cea3",
    storageBucket: "pawsociety-3cea3.firebasestorage.app",
    messagingSenderId: "1081232430781",
    appId: "1:1081232430781:web:d15ab26e0bf86783b789d4"
  };
  try {
    firebase.app();
  } catch (initErr) {
    firebase.initializeApp(FC);
  }
  db = firebase.firestore();
} catch (e) {
  console.error("Firebase:", e);
}
var WA = "573174699764",
  SESSION_KEY = "paws_crm_v1",
  SESSION_H = 10,
  DEFAULT_PIN = "1234";
var PRODUCT_CATS = ["Concentrados", "Snacks", "Medicamentos", "Juguetería", "Accesorios", "Higiene", "Spa", "Otros"];
var SVCS = ["Baño profundo", "Secado profesional", "Limpieza de oídos", "Corte de uñas", "Corte de pelo", "Deslanado", "Baño medicado", "Perfume"];
var BDOGS = ["Schnauzer", "French Poodle", "Golden Retriever", "Labrador", "Chihuahua", "Bulldog", "Shih Tzu", "Yorkshire", "Beagle", "Bichon Frisé", "Pomerania", "Otra"];
var BCATS = ["Persa", "Siamés", "Maine Coon", "Angora", "Mestizo", "Otra"];
var CDOGS = ["Hills Science Diet Small & Mini Adult 1-6", "Hills Science Diet Small & Mini Adult 7+", "Purina Pro Plan", "Royal Canin Small", "Acana", "Nutre Barf", "Chunky", "Champion", "Otro"];
var CCATS = ["Hills Science Diet Gatos", "Purina Pro Plan Gatos", "Royal Canin Gatos", "Whiskas", "Felix", "Otro"];
var DEF_PRICES = [{
  name: "Baño profundo",
  price: 35000
}, {
  name: "Secado profesional",
  price: 15000
}, {
  name: "Limpieza de oídos",
  price: 10000
}, {
  name: "Corte de uñas",
  price: 8000
}, {
  name: "Corte de pelo",
  price: 25000
}, {
  name: "Deslanado",
  price: 30000
}, {
  name: "Baño medicado",
  price: 45000
}, {
  name: "Perfume y acabado",
  price: 5000
}];
var EXPENSE_CATS = ["Arriendo", "Servicios públicos", "Salario", "Internet", "Insumos spa", "Compra inventario", "Marketing", "Transporte", "Contador", "Otros"];
var NAV = [{
  id: "dashboard",
  icon: "home",
  label: "Inicio"
}, {
  id: "clientes",
  icon: "users",
  label: "Clientes"
}, {
  id: "mascotas",
  icon: "paw",
  label: "Mascotas"
}, {
  id: "spa",
  icon: "bath",
  label: "Spa"
}, {
  id: "tienda",
  icon: "shopping-cart",
  label: "Tienda"
}, {
  id: "catalogo",
  icon: "package",
  label: "Catálogo"
}, {
  id: "finanzas",
  icon: "chart-pie",
  label: "Finanzas"
}, {
  id: "alertas",
  icon: "bell",
  label: "Alertas"
}, {
  id: "campanas",
  icon: "speakerphone",
  label: "Campañas"
}, {
  id: "config",
  icon: "settings",
  label: "Config"
}];
function today() {
  return new Date().toISOString().slice(0, 10);
}
function thisM() {
  return today().slice(0, 7);
}
function fmt(d) {
  if (!d) return "—";
  var p = d.split("-");
  return p[2] + "/" + p[1] + "/" + p[0];
}
function fmtM(v) {
  return v || v === 0 ? "$" + Number(v).toLocaleString("es-CO") : "—";
}
function dBetween(a, b) {
  return Math.floor((new Date(b) - new Date(a)) / 86400000);
}
function ini(n) {
  return n ? n.split(" ").map(function (w) {
    return w[0];
  }).slice(0, 2).join("").toUpperCase() : "?";
}
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}
function getLoyalty(pid, appts) {
  try {
    var d = new Date(Date.now() - 180 * 86400000).toISOString().slice(0, 10);
    var b = appts.filter(function (a) {
      return a.petId === pid && a.status === "completado" && a.date >= d;
    });
    return {
      count: Math.min(b.length, 6),
      hasFree: b.length >= 6
    };
  } catch (e) {
    return {
      count: 0,
      hasFree: false
    };
  }
}
function isBdayToday(b) {
  try {
    if (!b) return false;
    var t = new Date();
    var p = b.split("-");
    return Number(p[1]) === t.getMonth() + 1 && Number(p[2]) === t.getDate();
  } catch (e) {
    return false;
  }
}
function bdayDays(b) {
  try {
    if (!b) return null;
    var t = new Date();
    var p = b.split("-");
    var d = new Date(t.getFullYear(), Number(p[1]) - 1, Number(p[2]));
    if (d < t) d = new Date(t.getFullYear() + 1, Number(p[1]) - 1, Number(p[2]));
    return Math.floor((d - t) / 86400000);
  } catch (e) {
    return null;
  }
}
function fmtBday(b) {
  if (!b) return "—";
  var p = b.split("-");
  return p[2] + "/" + p[1];
}
function getSegment(cid, appts, sales) {
  var d90 = new Date(Date.now() - 90 * 86400000).toISOString().slice(0, 10);
  var v = appts.filter(function (a) {
    return a.clientId === cid && a.status === "completado" && a.date >= d90;
  }).length;
  var bu = sales.filter(function (s) {
    return s.clientId === cid && s.date >= d90;
  }).length;
  var tot = v + bu;
  var sp = appts.filter(function (a) {
    return a.clientId === cid && a.status === "completado";
  }).reduce(function (s, a) {
    return s + Number(a.price || 0);
  }, 0) + sales.filter(function (s) {
    return s.clientId === cid;
  }).reduce(function (s, x) {
    return s + Number(x.total || 0);
  }, 0);
  if (tot >= 5 || sp >= 300000) return {
    label: "VIP",
    color: "#D4945A",
    bg: "#FBE9D6",
    icon: "👑"
  };
  if (tot >= 2) return {
    label: "Frecuente",
    color: "#1A5C47",
    bg: "#E8F5EB",
    icon: "⭐"
  };
  if (tot >= 1) return {
    label: "Ocasional",
    color: "#6B7280",
    bg: "#F3F4F6",
    icon: ""
  };
  return {
    label: "Inactivo",
    color: "#DC2626",
    bg: "#FEE2E2",
    icon: "😴"
  };
}
function calcBE(expenses, spaI, storeI) {
  var fix = expenses.filter(function (e) {
    return e.type === "fijo";
  }).reduce(function (s, e) {
    return s + Number(e.amount || 0);
  }, 0);
  var vari = expenses.filter(function (e) {
    return e.type === "variable";
  }).reduce(function (s, e) {
    return s + Number(e.amount || 0);
  }, 0);
  var total = spaI + storeI;
  var vr = total > 0 ? vari / total : 0.35;
  var be = vr < 1 ? Math.round(fix / (1 - vr)) : fix;
  var prog = be > 0 ? Math.min(Math.round(total / be * 100), 100) : 0;
  return {
    fix: fix,
    vari: vari,
    be: be,
    total: total,
    prog: prog,
    rem: Math.max(be - total, 0)
  };
}
function saveSession() {
  try {
    localStorage.setItem(SESSION_KEY, String(Date.now() + SESSION_H * 3600000));
  } catch (e) {}
}
function checkSession() {
  try {
    var ex = localStorage.getItem(SESSION_KEY);
    if (ex && Date.now() < Number(ex)) return true;
  } catch (e) {}
  return false;
}
function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (e) {}
}
function fadd(_x, _x2) {
  return _fadd.apply(this, arguments);
}
function _fadd() {
  _fadd = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(col, data) {
    var r;
    return _regenerator().w(function (_context26) {
      while (1) switch (_context26.n) {
        case 0:
          if (db) {
            _context26.n = 1;
            break;
          }
          return _context26.a(2, uid());
        case 1:
          _context26.n = 2;
          return db.collection(col).add(_objectSpread(_objectSpread({}, data), {}, {
            _ts: Date.now()
          }));
        case 2:
          r = _context26.v;
          return _context26.a(2, r.id);
      }
    }, _callee23);
  }));
  return _fadd.apply(this, arguments);
}
function fupd(_x3, _x4, _x5) {
  return _fupd.apply(this, arguments);
}
function _fupd() {
  _fupd = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24(col, id, data) {
    return _regenerator().w(function (_context27) {
      while (1) switch (_context27.n) {
        case 0:
          if (db) {
            _context27.n = 1;
            break;
          }
          return _context27.a(2);
        case 1:
          _context27.n = 2;
          return db.collection(col).doc(id).update(_objectSpread(_objectSpread({}, data), {}, {
            _ts: Date.now()
          }));
        case 2:
          return _context27.a(2);
      }
    }, _callee24);
  }));
  return _fupd.apply(this, arguments);
}
function fdel(_x6, _x7) {
  return _fdel.apply(this, arguments);
}
function _fdel() {
  _fdel = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(col, id) {
    return _regenerator().w(function (_context28) {
      while (1) switch (_context28.n) {
        case 0:
          if (db) {
            _context28.n = 1;
            break;
          }
          return _context28.a(2);
        case 1:
          _context28.n = 2;
          return db.collection(col).doc(id).delete();
        case 2:
          return _context28.a(2);
      }
    }, _callee25);
  }));
  return _fdel.apply(this, arguments);
}
function flis(col, set) {
  if (!db) return function () {};
  return db.collection(col).onSnapshot(function (s) {
    return set(s.docs.map(function (d) {
      var _d = d.data();
      if (_d.estado && !_d.status) _d.status = _d.estado;
      if (_d.fecha && !_d.date) _d.date = _d.fecha;
      if (_d.hora && !_d.time) _d.time = _d.hora;
      if (_d.precio && !_d.price) _d.price = _d.precio;
      if (_d.servicios && !_d.services) _d.services = _d.servicios;
      return _objectSpread({ id: d.id }, _d);
    }));
  });
}
function waAppt(cn, pn, date, time, svcs, price) {
  var sl = svcs && svcs.length ? svcs.join(", ") : "Baño";
  var msg = "Hola " + cn + "! 🐾\n\n*Cita confirmada:*\n🐶 " + pn + "\n📅 " + fmt(date) + " · " + time + "\n✂️ " + sl + (price ? "\n💰 " + fmtM(price) : "") + "\n\n📍 Cra 19 #22N-23 · Armenia\n¡Hasta pronto! 🤍";
  return "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);
}
function waReceipt(cn, items, total) {
  var list = items.map(function (i) {
    return i.qty + "x " + i.name + " = " + fmtM(i.qty * i.price);
  }).join("\n");
  var msg = "Hola " + cn + "! 🐾\n\n*Recibo PawSociety*\n\n" + list + "\n\n💰 *Total: " + fmtM(total) + "*\n\n¡Gracias! 🤍 Cra 19 #22N-23";
  return "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);
}
function waReact(cn, days) {
  var msg = "Hola " + cn + "! 🐾 Nos haces falta en PawSociety 😊\nHace " + days + " días que no nos visitas. Tenemos novedades para tu peludo esta semana 🛁\n📍 Cra 19 #22N-23 · 317 469 9764";
  return "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);
}
function exportCSV(appts, sales, expenses, clients, pets) {
  var rows = [];
  rows.push(["Fecha", "Tipo", "Cliente", "Descripcion", "Servicios", "Monto", "Estado"]);
  appts.filter(function (a) {
    return (a.status === "completado" || a.estado === "completado");
  }).forEach(function (a) {
    var cli = clients.find(function (c) {
      return c.id === a.clientId;
    });
    var pet = pets.find(function (p) {
      return p.id === a.petId;
    });
    rows.push([a.date, "Spa", cli ? cli.name : "—", pet ? pet.name : "—", (a.services || []).join("|"), a.price || 0, "completado"]);
  });
  sales.forEach(function (s) {
    var cli = clients.find(function (c) {
      return c.id === s.clientId;
    });
    rows.push([s.date, "Tienda", cli ? cli.name : "Venta directa", (s.items || []).map(function (i) {
      return i.qty + "x " + i.name;
    }).join("|"), "", s.total || 0, "vendido"]);
  });
  expenses.forEach(function (e) {
    rows.push([e.date, "Gasto", "—", e.name, "", "-" + e.amount, e.type]);
  });
  var esc = function esc(v) {
    return String(v).replace(/,/g, " ");
  };
  var csv = rows.map(function (r) {
    return r.map(esc).join(",");
  }).join("\n");
  var blob = new Blob(["﻿" + csv], {
    type: "text/csv;charset=utf-8;"
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "PawSociety_Reporte_" + new Date().toISOString().slice(0, 10) + ".csv";
  a.click();
  URL.revokeObjectURL(url);
}
var IS = {
  width: "100%",
  padding: "11px 14px",
  fontSize: 15,
  border: "1.5px solid #E5E7EB",
  borderRadius: 10,
  outline: "none",
  boxSizing: "border-box",
  background: "#fff"
};
var Av = function Av(_ref) {
  var name = _ref.name,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 38 : _ref$size,
    _ref$bg = _ref.bg,
    bg = _ref$bg === void 0 ? "#1A5C47" : _ref$bg,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#fff" : _ref$color;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: bg,
      color: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      flexShrink: 0,
      fontSize: size * .37
    }
  }, ini(name));
};
var Bdg = function Bdg(_ref2) {
  var label = _ref2.label,
    _ref2$type = _ref2.type,
    type = _ref2$type === void 0 ? "gy" : _ref2$type;
  var m = {
    gr: {
      bg: "#E8F5EB",
      c: "#065F46"
    },
    am: {
      bg: "#FBE9D6",
      c: "#92400E"
    },
    rd: {
      bg: "#FEE2E2",
      c: "#991B1B"
    },
    gy: {
      bg: "#F3F4F6",
      c: "#374151"
    }
  };
  var s = m[type] || m.gy;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: s.bg,
      color: s.c,
      fontSize: 11,
      padding: "4px 10px",
      borderRadius: 12,
      fontWeight: 600,
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, label);
};
var Toast = function Toast(_ref3) {
  var msg = _ref3.msg;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 70,
      left: "50%",
      transform: "translateX(-50%)",
      background: "#0D3D2E",
      color: "#F2C4CE",
      padding: "12px 22px",
      borderRadius: 24,
      fontSize: 13,
      fontWeight: 600,
      zIndex: 9999,
      boxShadow: "0 4px 20px rgba(0,0,0,.3)",
      whiteSpace: "nowrap",
      pointerEvents: "none"
    }
  }, msg);
};
var BtnP = function BtnP(_ref4) {
  var onClick = _ref4.onClick,
    disabled = _ref4.disabled,
    children = _ref4.children,
    _ref4$style = _ref4.style,
    style = _ref4$style === void 0 ? {} : _ref4$style;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: _objectSpread({
      flex: 1,
      padding: 14,
      background: disabled ? "#9CA3AF" : "#1A5C47",
      color: "#fff",
      borderRadius: 12,
      fontSize: 15,
      fontWeight: 700,
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      cursor: disabled ? "default" : "pointer"
    }, style)
  }, children);
};
var BtnS = function BtnS(_ref5) {
  var onClick = _ref5.onClick,
    children = _ref5.children;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      padding: "14px 20px",
      background: "#F3F4F6",
      color: "#4B5563",
      borderRadius: 12,
      fontSize: 14,
      fontWeight: 600,
      border: "none",
      cursor: "pointer"
    }
  }, children);
};
var STit = function STit(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "#9CA3AF",
      textTransform: "uppercase",
      letterSpacing: ".07em",
      margin: "16px 0 10px"
    }
  }, children);
};
var Card = function Card(_ref7) {
  var children = _ref7.children,
    _ref7$style = _ref7.style,
    style = _ref7$style === void 0 ? {} : _ref7$style;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      background: "#fff",
      border: "1px solid #E5E7EB",
      borderRadius: 14,
      padding: 16,
      marginBottom: 12
    }, style)
  }, children);
};
var Rt = function Rt(_ref8) {
  var icon = _ref8.icon,
    _ref8$color = _ref8.color,
    color = _ref8$color === void 0 ? "#1A5C47" : _ref8$color,
    children = _ref8.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      marginBottom: 12,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-" + icon,
    style: {
      color: color
    }
  }), children);
};
var Inp = function Inp(_ref9) {
  var label = _ref9.label,
    children = _ref9.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      color: "#4B5563",
      marginBottom: 6,
      display: "block",
      fontWeight: 500
    }
  }, label), children);
};
var SC = function SC(_ref0) {
  var icon = _ref0.icon,
    label = _ref0.label,
    value = _ref0.value,
    sub = _ref0.sub,
    _ref0$color = _ref0.color,
    color = _ref0$color === void 0 ? "#1A5C47" : _ref0$color,
    accent = _ref0.accent;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 14,
      border: "1px solid #E5E7EB",
      padding: 14,
      borderLeft: "4px solid " + (accent || color)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#9CA3AF",
      marginBottom: 4,
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontWeight: 600,
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-" + icon,
    style: {
      color: color
    }
  }), label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 1.2
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#9CA3AF",
      marginTop: 3
    }
  }, sub));
};
function Modal(_ref1) {
  var title = _ref1.title,
    onClose = _ref1.onClose,
    children = _ref1.children,
    footer = _ref1.footer;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.6)",
      zIndex: 500,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    },
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      width: "100%",
      maxWidth: 640,
      borderRadius: "24px 24px 0 0",
      maxHeight: "93vh",
      overflowY: "auto",
      paddingBottom: "calc(env(safe-area-inset-bottom) + 16px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 4,
      background: "#E5E7EB",
      borderRadius: 2,
      margin: "12px auto 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 20px",
      borderBottom: "1px solid #E5E7EB",
      position: "sticky",
      top: 0,
      background: "#fff",
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 700
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "#F3F4F6",
      border: "none",
      fontSize: 18,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-x"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 20px",
      borderTop: "1px solid #E5E7EB",
      position: "sticky",
      bottom: 0,
      background: "#fff",
      display: "flex",
      gap: 10
    }
  }, footer)));
}
function LoyaltyCircles(_ref10) {
  var petId = _ref10.petId,
    appts = _ref10.appts,
    _ref10$size = _ref10.size,
    size = _ref10$size === void 0 ? 13 : _ref10$size;
  var _getLoyalty = getLoyalty(petId, appts),
    count = _getLoyalty.count,
    hasFree = _getLoyalty.hasFree;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, [0, 1, 2, 3, 4, 5].map(function (i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: size,
        height: size,
        borderRadius: "50%",
        border: "2px solid " + (hasFree ? "#D4945A" : "#1A5C47"),
        background: i < count ? hasFree ? "#D4945A" : "#1A5C47" : "transparent"
      }
    });
  }), hasFree && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: "#D4945A",
      marginLeft: 4
    }
  }, "GRATIS!"));
}
function Sidebar(_ref11) {
  var open = _ref11.open,
    onClose = _ref11.onClose,
    view = _ref11.view,
    setView = _ref11.setView,
    onLogout = _ref11.onLogout,
    alertCount = _ref11.alertCount;
  var go = function go(id) {
    setView(id);
    onClose();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, open && /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.5)",
      zIndex: 200
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      width: 265,
      background: "#0D3D2E",
      zIndex: 300,
      transform: open ? "translateX(0)" : "translateX(-100%)",
      transition: "transform .28s cubic-bezier(.4,0,.2,1)",
      display: "flex",
      flexDirection: "column",
      paddingBottom: "env(safe-area-inset-bottom)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "calc(env(safe-area-inset-top)+20px) 20px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: "#F2C4CE",
      marginBottom: 4
    }
  }, "PawSociety \uD83D\uDC3E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgba(242,196,206,.5)"
    }
  }, "Little kings, big love.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 10px"
    }
  }, NAV.map(function (n) {
    var active = view === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: function onClick() {
        return go(n.id);
      },
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 14px",
        borderRadius: 12,
        border: "none",
        background: active ? "rgba(242,196,206,.15)" : "transparent",
        color: active ? "#F2C4CE" : "rgba(242,196,206,.55)",
        fontSize: 14,
        fontWeight: active ? 700 : 400,
        cursor: "pointer",
        marginBottom: 2,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-" + n.icon,
      style: {
        fontSize: 20,
        flexShrink: 0
      }
    }), n.label, n.id === "alertas" && alertCount > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        background: "#EF4444",
        color: "#fff",
        borderRadius: 8,
        padding: "1px 7px",
        fontSize: 11,
        fontWeight: 700
      }
    }, alertCount), active && n.id !== "alertas" && /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#F2C4CE"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 10px",
      borderTop: "1px solid rgba(242,196,206,.1)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      if (window.confirm("¿Cerrar sesión?")) onLogout();
    },
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "11px 14px",
      borderRadius: 12,
      border: "none",
      background: "rgba(239,68,68,.1)",
      color: "#FCA5A5",
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-logout",
    style: {
      fontSize: 20
    }
  }), "Cerrar sesi\xF3n"))));
}
function Login(_ref12) {
  var onLogin = _ref12.onLogin;
  var _s1=useState(""),_s1a=_slicedToArray(_s1,2),email=_s1a[0],setEmail=_s1a[1];
  var _s2=useState(""),_s2a=_slicedToArray(_s2,2),pass=_s2a[0],setPass=_s2a[1];
  var _s3=useState(""),_s3a=_slicedToArray(_s3,2),err=_s3a[0],setErr=_s3a[1];
  var _s4=useState(false),_s4a=_slicedToArray(_s4,2),loading=_s4a[0],setLoading=_s4a[1];
  var _s5=useState(false),_s5a=_slicedToArray(_s5,2),showPass=_s5a[0],setShowPass=_s5a[1];
  var IS={width:"100%",padding:"13px 16px",border:"1.5px solid #E5E7EB",borderRadius:12,fontSize:15,outline:"none",fontFamily:"inherit",background:"#FAFAFA",boxSizing:"border-box"};
  var doLogin=function(){
    var em=(email||"").trim();
    if(!em||!pass){setErr("Completa correo y contrasena");return;}
    setLoading(true);setErr("");
    try{
      firebase.auth().signInWithEmailAndPassword(em,pass)
        .then(function(uc){onLogin(uc.user);})
        .catch(function(e){setLoading(false);var m={"auth/user-not-found":"Correo no registrado","auth/wrong-password":"Contrasena incorrecta","auth/invalid-credential":"Correo o contrasena incorrectos","auth/invalid-email":"Correo invalido","auth/too-many-requests":"Demasiados intentos"};setErr(m[e.code]||e.message);});
    }catch(ex){setLoading(false);setErr("Error de conexion");}
  };
  return /*#__PURE__*/React.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"linear-gradient(145deg,#071e14,#0D3D2E,#155240)",padding:"24px 20px"}},
    /*#__PURE__*/React.createElement("div",{style:{background:"#fff",borderRadius:28,padding:"40px 32px",width:"100%",maxWidth:380,boxShadow:"0 32px 80px rgba(0,0,0,.45)"}},
      /*#__PURE__*/React.createElement("div",{style:{textAlign:"center",marginBottom:32}},
        /*#__PURE__*/React.createElement("div",{style:{fontSize:48,marginBottom:12}},"\uD83D\uDC3E"),
        /*#__PURE__*/React.createElement("div",{style:{fontSize:28,fontWeight:800,color:"#0D3D2E",fontFamily:"Georgia,serif",letterSpacing:"-0.5px",marginBottom:4}},"PawSociety"),
        /*#__PURE__*/React.createElement("div",{style:{fontSize:11,color:"#9CA3AF",letterSpacing:"2px",textTransform:"uppercase",fontWeight:600}},"Pet Store CRM")
      ),
      /*#__PURE__*/React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:14}},
        /*#__PURE__*/React.createElement("div",null,
          /*#__PURE__*/React.createElement("label",{style:{fontSize:12,fontWeight:700,color:"#374151",marginBottom:6,display:"block"}},"Correo"),
          /*#__PURE__*/React.createElement("input",{type:"email",placeholder:"tu@correo.com",value:email,onChange:function(e){setEmail(e.target.value);setErr("");},onKeyDown:function(e){if(e.key==="Enter")doLogin();},style:IS,autoComplete:"email"})
        ),
        /*#__PURE__*/React.createElement("div",null,
          /*#__PURE__*/React.createElement("label",{style:{fontSize:12,fontWeight:700,color:"#374151",marginBottom:6,display:"block"}},"Contrasena"),
          /*#__PURE__*/React.createElement("div",{style:{position:"relative"}},
            /*#__PURE__*/React.createElement("input",{type:showPass?"text":"password",placeholder:"",value:pass,onChange:function(e){setPass(e.target.value);setErr("");},onKeyDown:function(e){if(e.key==="Enter")doLogin();},style:Object.assign({},IS,{paddingRight:48}),autoComplete:"current-password"}),
            /*#__PURE__*/React.createElement("button",{onClick:function(){setShowPass(!showPass);},style:{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"#9CA3AF",fontSize:20,padding:0}},
              /*#__PURE__*/React.createElement("i",{className:showPass?"ti ti-eye-off":"ti ti-eye"})
            )
          )
        ),
        err?/*#__PURE__*/React.createElement("div",{style:{background:"#FEE2E2",color:"#DC2626",borderRadius:10,padding:"10px 14px",fontSize:13,display:"flex",alignItems:"center",gap:8}},
          /*#__PURE__*/React.createElement("i",{className:"ti ti-alert-circle",style:{fontSize:18,flexShrink:0}}),err
        ):null,
        /*#__PURE__*/React.createElement("button",{onClick:doLogin,disabled:loading,style:{padding:16,marginTop:4,background:loading?"#9CA3AF":"linear-gradient(135deg,#1A5C47,#0D3D2E)",color:"#fff",borderRadius:14,fontSize:16,fontWeight:700,border:"none",cursor:"pointer",boxShadow:loading?"none":"0 4px 16px rgba(13,61,46,.35)"}},loading?"Ingresando...":"Ingresar")
      ),
      /*#__PURE__*/React.createElement("div",{style:{textAlign:"center",marginTop:24,fontSize:11,color:"#D1D5DB",borderTop:"1px solid #F3F4F6",paddingTop:16}},"PawSociety Pet Store - Armenia, Quindio")
    )
  );
}

function PetModal(_ref14) {
  var clientId = _ref14.clientId,
    et = _ref14.et,
    onClose = _ref14.onClose,
    toast = _ref14.toast,
    cBDogs = _ref14.cBDogs,
    cBCats = _ref14.cBCats,
    cCDogs = _ref14.cCDogs,
    cCCats = _ref14.cCCats;
  var ie = !!(et && et.id);
  var _useState9 = useState({
      name: et ? et.name || "" : "",
      species: et ? et.species || "perro" : "perro",
      breed: et ? et.breed || "" : "",
      age: et ? et.age || "" : "",
      weight: et ? et.weight || "" : "",
      concentrado: et ? et.concentrado || "" : "",
      birthday: et ? et.birthday || "" : "",
      notes: et ? et.notes || "" : ""
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    f = _useState0[0],
    sf = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    sv = _useState10[0],
    ssv = _useState10[1];
  var u = function u(k, v) {
    return sf(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, v));
    });
  };
  var breeds = f.species === "gato" ? cBCats || BCATS : cBDogs || BDOGS;
  var concs = f.species === "gato" ? cCCats || CCATS : cCDogs || CDOGS;
  var save = /*#__PURE__*/function () {
    var _save = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (f.name.trim()) {
              _context2.n = 1;
              break;
            }
            alert("Escribe el nombre.");
            return _context2.a(2);
          case 1:
            ssv(true);
            _context2.p = 2;
            if (!ie) {
              _context2.n = 4;
              break;
            }
            _context2.n = 3;
            return fupd("pets", et.id, f);
          case 3:
            toast("Mascota actualizada ✓");
            _context2.n = 6;
            break;
          case 4:
            _context2.n = 5;
            return fadd("pets", _objectSpread(_objectSpread({}, f), {}, {
              clientId: clientId
            }));
          case 5:
            toast("Mascota registrada ✓");
          case 6:
            onClose();
            _context2.n = 8;
            break;
          case 7:
            _context2.p = 7;
            _t2 = _context2.v;
            alert(_t2.message);
          case 8:
            ssv(false);
          case 9:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 7]]);
    }));
    function save() {
      return _save.apply(this, arguments);
    }
    return save;
  }();
  return /*#__PURE__*/React.createElement(Modal, {
    title: ie ? "Editar mascota" : "Nueva mascota",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BtnS, {
      onClick: onClose
    }, "Cancelar"), /*#__PURE__*/React.createElement(BtnP, {
      onClick: save,
      disabled: sv
    }, sv ? "Guardando..." : "Guardar"))
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Nombre *"
  }, /*#__PURE__*/React.createElement("input", {
    value: f.name,
    onChange: function onChange(e) {
      return u("name", e.target.value);
    },
    placeholder: "Ej: Max",
    style: IS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Especie"
  }, /*#__PURE__*/React.createElement("select", {
    value: f.species,
    onChange: function onChange(e) {
      u("species", e.target.value);
      u("breed", "");
      u("concentrado", "");
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: "perro"
  }, "Perro"), /*#__PURE__*/React.createElement("option", {
    value: "gato"
  }, "Gato"))), /*#__PURE__*/React.createElement(Inp, {
    label: "Raza"
  }, /*#__PURE__*/React.createElement("select", {
    value: f.breed,
    onChange: function onChange(e) {
      return u("breed", e.target.value);
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Seleccionar..."), breeds.map(function (b) {
    return /*#__PURE__*/React.createElement("option", {
      key: b
    }, b);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Edad (a\xF1os)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: f.age,
    onChange: function onChange(e) {
      return u("age", e.target.value);
    },
    min: 0,
    style: IS
  })), /*#__PURE__*/React.createElement(Inp, {
    label: "Peso (kg)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: f.weight,
    onChange: function onChange(e) {
      return u("weight", e.target.value);
    },
    step: 0.1,
    style: IS
  }))), /*#__PURE__*/React.createElement(Inp, {
    label: "Concentrado"
  }, /*#__PURE__*/React.createElement("select", {
    value: f.concentrado,
    onChange: function onChange(e) {
      return u("concentrado", e.target.value);
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Sin registrar..."), concs.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c
    }, c);
  }))), /*#__PURE__*/React.createElement(Inp, {
    label: "Fecha de cumplea\xF1os"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: f.birthday || "",
    onChange: function onChange(e) {
      return u("birthday", e.target.value);
    },
    style: IS
  })), /*#__PURE__*/React.createElement(Inp, {
    label: "Notas"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: f.notes,
    onChange: function onChange(e) {
      return u("notes", e.target.value);
    },
    placeholder: "Piel sensible...",
    style: _objectSpread(_objectSpread({}, IS), {}, {
      resize: "vertical",
      minHeight: 70,
      fontFamily: "inherit"
    })
  })));
}
function ClientModal(_ref15) {
  var et = _ref15.et,
    onClose = _ref15.onClose,
    toast = _ref15.toast;
  var ie = !!(et && et.id);
  var _useState11 = useState({
      name: et ? et.name || "" : "",
      phone: et ? et.phone || "" : "",
      email: et ? et.email || "" : "",
      address: et ? et.address || "" : "",
      notes: et ? et.notes || "" : ""
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    f = _useState12[0],
    sf = _useState12[1];
  var _useState13 = useState(!ie),
    _useState14 = _slicedToArray(_useState13, 2),
    addP = _useState14[0],
    sAddP = _useState14[1];
  var _useState15 = useState({
      name: "",
      species: "perro",
      breed: "",
      concentrado: "",
      birthday: "",
      notes: ""
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    pf = _useState16[0],
    spf = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    sv = _useState18[0],
    ssv = _useState18[1];
  var u = function u(k, v) {
    return sf(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, v));
    });
  };
  var pu = function pu(k, v) {
    return spf(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, v));
    });
  };
  var save = /*#__PURE__*/function () {
    var _save2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var cid, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (!(!f.name.trim() || !f.phone.trim())) {
              _context3.n = 1;
              break;
            }
            alert("Nombre y teléfono obligatorios.");
            return _context3.a(2);
          case 1:
            ssv(true);
            _context3.p = 2;
            if (!ie) {
              _context3.n = 4;
              break;
            }
            _context3.n = 3;
            return fupd("clients", et.id, f);
          case 3:
            toast("Cliente actualizado ✓");
            _context3.n = 7;
            break;
          case 4:
            _context3.n = 5;
            return fadd("clients", _objectSpread(_objectSpread({}, f), {}, {
              createdAt: today()
            }));
          case 5:
            cid = _context3.v;
            if (!(addP && pf.name.trim())) {
              _context3.n = 6;
              break;
            }
            _context3.n = 6;
            return fadd("pets", _objectSpread(_objectSpread({}, pf), {}, {
              clientId: cid
            }));
          case 6:
            toast("Cliente creado ✓");
          case 7:
            onClose();
            _context3.n = 9;
            break;
          case 8:
            _context3.p = 8;
            _t3 = _context3.v;
            alert(_t3.message);
          case 9:
            ssv(false);
          case 10:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 8]]);
    }));
    function save() {
      return _save2.apply(this, arguments);
    }
    return save;
  }();
  return /*#__PURE__*/React.createElement(Modal, {
    title: ie ? "Editar cliente" : "Nuevo cliente",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BtnS, {
      onClick: onClose
    }, "Cancelar"), /*#__PURE__*/React.createElement(BtnP, {
      onClick: save,
      disabled: sv
    }, sv ? "Guardando..." : "Guardar"))
  }, /*#__PURE__*/React.createElement(STit, null, "Datos del due\xF1o"), /*#__PURE__*/React.createElement(Inp, {
    label: "Nombre *"
  }, /*#__PURE__*/React.createElement("input", {
    value: f.name,
    onChange: function onChange(e) {
      return u("name", e.target.value);
    },
    placeholder: "Ej: Mar\xEDa Garc\xEDa",
    style: IS
  })), /*#__PURE__*/React.createElement(Inp, {
    label: "Tel\xE9fono / WhatsApp *"
  }, /*#__PURE__*/React.createElement("input", {
    value: f.phone,
    onChange: function onChange(e) {
      return u("phone", e.target.value);
    },
    type: "tel",
    style: IS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Correo"
  }, /*#__PURE__*/React.createElement("input", {
    value: f.email,
    onChange: function onChange(e) {
      return u("email", e.target.value);
    },
    type: "email",
    style: IS
  })), /*#__PURE__*/React.createElement(Inp, {
    label: "Barrio"
  }, /*#__PURE__*/React.createElement("input", {
    value: f.address,
    onChange: function onChange(e) {
      return u("address", e.target.value);
    },
    style: IS
  }))), /*#__PURE__*/React.createElement(Inp, {
    label: "Notas"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: f.notes,
    onChange: function onChange(e) {
      return u("notes", e.target.value);
    },
    style: _objectSpread(_objectSpread({}, IS), {}, {
      resize: "vertical",
      minHeight: 60,
      fontFamily: "inherit"
    })
  })), !ie && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(STit, null, "Mascota"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: "ap2",
    checked: addP,
    onChange: function onChange(e) {
      return sAddP(e.target.checked);
    },
    style: {
      width: 18,
      height: 18,
      accentColor: "#1A5C47"
    }
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "ap2",
    style: {
      fontSize: 14,
      cursor: "pointer"
    }
  }, "Registrar mascota ahora")), addP && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Inp, {
    label: "Nombre mascota *"
  }, /*#__PURE__*/React.createElement("input", {
    value: pf.name,
    onChange: function onChange(e) {
      return pu("name", e.target.value);
    },
    placeholder: "Ej: Max",
    style: IS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Especie"
  }, /*#__PURE__*/React.createElement("select", {
    value: pf.species,
    onChange: function onChange(e) {
      pu("species", e.target.value);
      pu("breed", "");
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: "perro"
  }, "Perro"), /*#__PURE__*/React.createElement("option", {
    value: "gato"
  }, "Gato"))), /*#__PURE__*/React.createElement(Inp, {
    label: "Raza"
  }, /*#__PURE__*/React.createElement("select", {
    value: pf.breed,
    onChange: function onChange(e) {
      return pu("breed", e.target.value);
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Seleccionar..."), (pf.species === "gato" ? BCATS : BDOGS).map(function (b) {
    return /*#__PURE__*/React.createElement("option", {
      key: b
    }, b);
  })))), /*#__PURE__*/React.createElement(Inp, {
    label: "Concentrado"
  }, /*#__PURE__*/React.createElement("select", {
    value: pf.concentrado,
    onChange: function onChange(e) {
      return pu("concentrado", e.target.value);
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Sin registrar..."), (pf.species === "gato" ? CCATS : CDOGS).map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c
    }, c);
  }))), /*#__PURE__*/React.createElement(Inp, {
    label: "Cumplea\xF1os"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: pf.birthday || "",
    onChange: function onChange(e) {
      return pu("birthday", e.target.value);
    },
    style: IS
  })))));
}
function ApptModal(_ref16) {
  var et = _ref16.et,
    clients = _ref16.clients,
    pets = _ref16.pets,
    spaprices = _ref16.spaprices,
    cSvcs = _ref16.cSvcs,
    onClose = _ref16.onClose,
    toast = _ref16.toast;
  var ie = !!(et && et.date);
  var _useState19 = useState({
      clientId: et ? et.clientId || "" : "",
      petId: et ? et.petId || "" : "",
      date: et ? et.date || today() : today(),
      time: et ? et.time || "09:00" : "09:00",
      services: et ? et.services || [] : [],
      status: et ? et.status || "pendiente" : "pendiente",
      price: et ? et.price || "" : "",
      notes: et ? et.notes || "" : ""
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    f = _useState20[0],
    sf = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    sv = _useState22[0],
    ssv = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    waUrl = _useState24[0],
    swu = _useState24[1];
  var u = function u(k, v) {
    return sf(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, v));
    });
  };
  var cpts = pets.filter(function (p) {
    return p.clientId === f.clientId;
  });
  var sp = spaprices || [];
  var togSvc = function togSvc(s) {
    return sf(function (prev) {
      var nx = prev.services.includes(s) ? prev.services.filter(function (x) {
        return x !== s;
      }) : [].concat(_toConsumableArray(prev.services), [s]);
      var tot = nx.reduce(function (sm, sn) {
        var pr = sp.find(function (p) {
          return p.name === sn;
        });
        return sm + (pr ? Number(pr.price) : 0);
      }, 0);
      return _objectSpread(_objectSpread({}, prev), {}, {
        services: nx,
        price: tot || prev.price
      });
    });
  };
  var tot = f.services.reduce(function (sm, sn) {
    var pr = sp.find(function (p) {
      return p.name === sn;
    });
    return sm + (pr ? Number(pr.price) : 0);
  }, 0);
  var save = /*#__PURE__*/function () {
    var _save3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var cli, pet, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (!(!f.clientId || !f.petId || !f.date || !f.time)) {
              _context4.n = 1;
              break;
            }
            alert("Completa todos los campos.");
            return _context4.a(2);
          case 1:
            ssv(true);
            _context4.p = 2;
            if (!ie) {
              _context4.n = 4;
              break;
            }
            _context4.n = 3;
            return fupd("appts", et.id, f);
          case 3:
            toast("Cita actualizada ✓");
            _context4.n = 6;
            break;
          case 4:
            _context4.n = 5;
            return fadd("appts", f);
          case 5:
            toast("Cita agendada ✓");
          case 6:
            cli = clients.find(function (c) {
              return c.id === f.clientId;
            });
            pet = pets.find(function (p) {
              return p.id === f.petId;
            });
            if (cli && pet) swu(waAppt(cli.name, pet.name, f.date, f.time, f.services, f.price));else onClose();
            _context4.n = 8;
            break;
          case 7:
            _context4.p = 7;
            _t4 = _context4.v;
            alert(_t4.message);
          case 8:
            ssv(false);
          case 9:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 7]]);
    }));
    function save() {
      return _save3.apply(this, arguments);
    }
    return save;
  }();
  if (waUrl) {
    var cli = clients.find(function (c) {
      return c.id === f.clientId;
    });
    var pet = pets.find(function (p) {
      return p.id === f.petId;
    });
    return /*#__PURE__*/React.createElement(Modal, {
      title: "Cita guardada!",
      onClose: onClose,
      footer: /*#__PURE__*/React.createElement(BtnP, {
        onClick: onClose
      }, "Listo")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#F0FDF4",
        border: "1.5px solid #86EFAC",
        borderRadius: 12,
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "#15803D",
        marginBottom: 8
      }
    }, "Enviar confirmaci\xF3n al cliente"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#16A34A",
        marginBottom: 10
      }
    }, pet && pet.name, " \xB7 ", fmt(f.date), " \xB7 ", f.time, f.price ? " · " + fmtM(f.price) : ""), /*#__PURE__*/React.createElement("a", {
      href: waUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        background: "#22C55E",
        color: "#fff",
        borderRadius: 12,
        padding: 14,
        fontSize: 14,
        fontWeight: 700,
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-brand-whatsapp",
      style: {
        fontSize: 20
      }
    }), "WhatsApp a ", cli && cli.name)));
  }
  return /*#__PURE__*/React.createElement(Modal, {
    title: ie ? "Editar cita" : "Nueva cita",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BtnS, {
      onClick: onClose
    }, "Cancelar"), /*#__PURE__*/React.createElement(BtnP, {
      onClick: save,
      disabled: sv
    }, sv ? "Guardando..." : "Guardar"))
  }, /*#__PURE__*/React.createElement(STit, null, "Cliente y mascota"), /*#__PURE__*/React.createElement(Inp, {
    label: "Cliente *"
  }, /*#__PURE__*/React.createElement("select", {
    value: f.clientId,
    onChange: function onChange(e) {
      u("clientId", e.target.value);
      u("petId", "");
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Seleccionar..."), clients.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id,
      value: c.id
    }, c.name, " \xB7 ", c.phone);
  }))), /*#__PURE__*/React.createElement(Inp, {
    label: "Mascota *"
  }, /*#__PURE__*/React.createElement("select", {
    value: f.petId,
    onChange: function onChange(e) {
      return u("petId", e.target.value);
    },
    disabled: !f.clientId,
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Seleccionar..."), cpts.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.id,
      value: p.id
    }, p.name);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Fecha *"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: f.date,
    onChange: function onChange(e) {
      return u("date", e.target.value);
    },
    style: IS
  })), /*#__PURE__*/React.createElement(Inp, {
    label: "Hora *"
  }, /*#__PURE__*/React.createElement("input", {
    type: "time",
    value: f.time,
    onChange: function onChange(e) {
      return u("time", e.target.value);
    },
    style: IS
  }))), f.petId && function () {
    var pet = pets.find(function (p) {
      return p.id === f.petId;
    });
    return pet && pet.concentrado ? /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#FBE9D6",
        border: "1.5px solid #D4945A",
        borderRadius: 10,
        padding: "10px 14px",
        marginBottom: 12,
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20
      }
    }, "\uD83E\uDDB4"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "#92400E"
      }
    }, "Cross-selling: ", pet.name, " consume"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#B45309"
      }
    }, pet.concentrado)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        background: "#D4945A",
        color: "#fff",
        borderRadius: 8,
        padding: "3px 8px",
        fontWeight: 700
      }
    }, "\xBFOfrecer?")) : null;
  }(), /*#__PURE__*/React.createElement(STit, null, "Servicios ", tot > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#1A5C47"
    }
  }, " ", "Total: ", fmtM(tot))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginBottom: 4
    }
  }, (cSvcs || SVCS).map(function (sn) {
    var pr = sp.find(function (p) {
      return p.name === sn;
    });
    return /*#__PURE__*/React.createElement("span", {
      key: sn,
      onClick: function onClick() {
        return togSvc(sn);
      },
      style: {
        padding: "8px 14px",
        borderRadius: 20,
        fontSize: 12,
        border: "1.5px solid " + (f.services.includes(sn) ? "#1A5C47" : "#E5E7EB"),
        background: f.services.includes(sn) ? "#1A5C47" : "#fff",
        color: f.services.includes(sn) ? "#fff" : "#4B5563",
        cursor: "pointer",
        fontWeight: 500
      }
    }, sn, pr ? " · $" + Math.round(Number(pr.price) / 1000) + "k" : "");
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Estado"
  }, /*#__PURE__*/React.createElement("select", {
    value: f.status,
    onChange: function onChange(e) {
      return u("status", e.target.value);
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: "pendiente"
  }, "Pendiente"), /*#__PURE__*/React.createElement("option", {
    value: "completado"
  }, "Completado"), /*#__PURE__*/React.createElement("option", {
    value: "cancelado"
  }, "Cancelado"))), /*#__PURE__*/React.createElement(Inp, {
    label: "Precio"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: f.price,
    onChange: function onChange(e) {
      return u("price", e.target.value);
    },
    placeholder: "Auto",
    style: IS
  }))), /*#__PURE__*/React.createElement(Inp, {
    label: "Notas"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: f.notes,
    onChange: function onChange(e) {
      return u("notes", e.target.value);
    },
    style: _objectSpread(_objectSpread({}, IS), {}, {
      resize: "vertical",
      minHeight: 60,
      fontFamily: "inherit"
    })
  })));
}
function ProductModal(_ref17) {
  var et = _ref17.et,
    onClose = _ref17.onClose,
    toast = _ref17.toast;
  var ie = !!(et && et.id);
  var _useState25 = useState({
      name: et ? et.name || "" : "",
      brand: et ? et.brand || "" : "",
      category: et ? et.category || "Concentrados" : "Concentrados",
      salePrice: et ? et.salePrice || "" : "",
      costPrice: et ? et.costPrice || "" : "",
      stock: et ? et.stock || 0 : 0,
      minStock: et ? et.minStock || 3 : 3,
      unit: et ? et.unit || "unidad" : "unidad",
      notes: et ? et.notes || "" : ""
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    f = _useState26[0],
    sf = _useState26[1];
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    sv = _useState28[0],
    ssv = _useState28[1];
  var u = function u(k, v) {
    return sf(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, v));
    });
  };
  var margin = f.salePrice && f.costPrice ? Math.round((1 - Number(f.costPrice) / Number(f.salePrice)) * 100) : null;
  var save = /*#__PURE__*/function () {
    var _save4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            if (!(!f.name.trim() || !f.salePrice)) {
              _context5.n = 1;
              break;
            }
            alert("Nombre y precio son obligatorios.");
            return _context5.a(2);
          case 1:
            ssv(true);
            _context5.p = 2;
            if (!ie) {
              _context5.n = 4;
              break;
            }
            _context5.n = 3;
            return fupd("products", et.id, f);
          case 3:
            toast("Producto actualizado ✓");
            _context5.n = 6;
            break;
          case 4:
            _context5.n = 5;
            return fadd("products", _objectSpread(_objectSpread({}, f), {}, {
              active: true
            }));
          case 5:
            toast("Producto creado ✓");
          case 6:
            onClose();
            _context5.n = 8;
            break;
          case 7:
            _context5.p = 7;
            _t5 = _context5.v;
            alert(_t5.message);
          case 8:
            ssv(false);
          case 9:
            return _context5.a(2);
        }
      }, _callee5, null, [[2, 7]]);
    }));
    function save() {
      return _save4.apply(this, arguments);
    }
    return save;
  }();
  return /*#__PURE__*/React.createElement(Modal, {
    title: ie ? "Editar producto" : "Nuevo producto",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BtnS, {
      onClick: onClose
    }, "Cancelar"), /*#__PURE__*/React.createElement(BtnP, {
      onClick: save,
      disabled: sv
    }, sv ? "Guardando..." : "Guardar"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Nombre *"
  }, /*#__PURE__*/React.createElement("input", {
    value: f.name,
    onChange: function onChange(e) {
      return u("name", e.target.value);
    },
    placeholder: "Ej: Hills 3kg",
    style: IS
  })), /*#__PURE__*/React.createElement(Inp, {
    label: "Marca"
  }, /*#__PURE__*/React.createElement("input", {
    value: f.brand,
    onChange: function onChange(e) {
      return u("brand", e.target.value);
    },
    placeholder: "Ej: Hills",
    style: IS
  }))), /*#__PURE__*/React.createElement(Inp, {
    label: "Categor\xEDa"
  }, /*#__PURE__*/React.createElement("select", {
    value: f.category,
    onChange: function onChange(e) {
      return u("category", e.target.value);
    },
    style: IS
  }, PRODUCT_CATS.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c
    }, c);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Precio de venta *"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: f.salePrice,
    onChange: function onChange(e) {
      return u("salePrice", e.target.value);
    },
    style: IS
  })), /*#__PURE__*/React.createElement(Inp, {
    label: "Costo (compra)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: f.costPrice,
    onChange: function onChange(e) {
      return u("costPrice", e.target.value);
    },
    style: IS
  }))), margin !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#E8F5EB",
      borderRadius: 8,
      padding: "8px 12px",
      marginBottom: 12,
      fontSize: 13,
      color: "#065F46",
      fontWeight: 600
    }
  }, "Margen: ", margin, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Stock actual"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: f.stock,
    onChange: function onChange(e) {
      return u("stock", Number(e.target.value));
    },
    min: 0,
    style: IS
  })), /*#__PURE__*/React.createElement(Inp, {
    label: "Stock m\xEDnimo"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: f.minStock,
    onChange: function onChange(e) {
      return u("minStock", Number(e.target.value));
    },
    min: 0,
    style: IS
  })), /*#__PURE__*/React.createElement(Inp, {
    label: "Unidad"
  }, /*#__PURE__*/React.createElement("select", {
    value: f.unit,
    onChange: function onChange(e) {
      return u("unit", e.target.value);
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", null, "unidad"), /*#__PURE__*/React.createElement("option", null, "kg"), /*#__PURE__*/React.createElement("option", null, "litro"), /*#__PURE__*/React.createElement("option", null, "caja")))));
}
function SaleModal(_ref18) {
  var clients = _ref18.clients,
    products = _ref18.products,
    onClose = _ref18.onClose,
    toast = _ref18.toast;
  var _useState29 = useState(""),
    _useState30 = _slicedToArray(_useState29, 2),
    clientId = _useState30[0],
    setClientId = _useState30[1];
  var _useState31 = useState([]),
    _useState32 = _slicedToArray(_useState31, 2),
    items = _useState32[0],
    setItems = _useState32[1];
  var _useState33 = useState(""),
    _useState34 = _slicedToArray(_useState33, 2),
    search = _useState34[0],
    setSearch = _useState34[1];
  var _useState35 = useState(false),
    _useState36 = _slicedToArray(_useState35, 2),
    sv = _useState36[0],
    ssv = _useState36[1];
  var _useState37 = useState(null),
    _useState38 = _slicedToArray(_useState37, 2),
    done = _useState38[0],
    setDone = _useState38[1];
  var _useState39 = useState(0),
    _useState40 = _slicedToArray(_useState39, 2),
    discount = _useState40[0],
    setDiscount = _useState40[1];
  var total = items.reduce(function (s, i) {
    return s + i.qty * i.price;
  }, 0);
  var finalTotal = Math.round(total * (1 - discount / 100));
  var filtP = products.filter(function (p) {
    return p.active !== false && (p.name.toLowerCase().includes(search.toLowerCase()) || (p.brand || "").toLowerCase().includes(search.toLowerCase()));
  });
  var addItem = function addItem(prod) {
    var ex = items.find(function (i) {
      return i.productId === prod.id;
    });
    if (ex) {
      setItems(items.map(function (i) {
        return i.productId === prod.id ? _objectSpread(_objectSpread({}, i), {}, {
          qty: i.qty + 1
        }) : i;
      }));
    } else {
      setItems([].concat(_toConsumableArray(items), [{
        productId: prod.id,
        name: prod.name,
        price: Number(prod.salePrice),
        qty: 1
      }]));
    }
    setSearch("");
  };
  var updQty = function updQty(pid, qty) {
    if (qty < 1) {
      setItems(items.filter(function (i) {
        return i.productId !== pid;
      }));
      return;
    }
    setItems(items.map(function (i) {
      return i.productId === pid ? _objectSpread(_objectSpread({}, i), {}, {
        qty: qty
      }) : i;
    }));
  };
  var save = /*#__PURE__*/function () {
    var _save5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var sid, _iterator, _step, _loop, cli, _t6, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            if (items.length) {
              _context7.n = 1;
              break;
            }
            alert("Agrega al menos un producto.");
            return _context7.a(2);
          case 1:
            ssv(true);
            _context7.p = 2;
            _context7.n = 3;
            return fadd("sales", {
              clientId: clientId || null,
              items: items,
              total: finalTotal,
              subtotal: total,
              discount: discount,
              date: today(),
              time: new Date().toTimeString().slice(0, 5)
            });
          case 3:
            sid = _context7.v;
            _iterator = _createForOfIteratorHelper(items);
            _context7.p = 4;
            _loop = /*#__PURE__*/_regenerator().m(function _loop() {
              var item, prod;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    item = _step.value;
                    prod = products.find(function (p) {
                      return p.id === item.productId;
                    });
                    if (!prod) {
                      _context6.n = 1;
                      break;
                    }
                    _context6.n = 1;
                    return fupd("products", item.productId, {
                      stock: Math.max(0, Number(prod.stock || 0) - item.qty)
                    });
                  case 1:
                    _context6.n = 2;
                    return fadd("stockMovements", {
                      productId: item.productId,
                      type: "salida",
                      qty: item.qty,
                      date: today(),
                      saleId: sid
                    });
                  case 2:
                    return _context6.a(2);
                }
              }, _loop);
            });
            _iterator.s();
          case 5:
            if ((_step = _iterator.n()).done) {
              _context7.n = 7;
              break;
            }
            return _context7.d(_regeneratorValues(_loop()), 6);
          case 6:
            _context7.n = 5;
            break;
          case 7:
            _context7.n = 9;
            break;
          case 8:
            _context7.p = 8;
            _t6 = _context7.v;
            _iterator.e(_t6);
          case 9:
            _context7.p = 9;
            _iterator.f();
            return _context7.f(9);
          case 10:
            cli = clients.find(function (c) {
              return c.id === clientId;
            });
            setDone({
              total: finalTotal,
              cli: cli,
              items: items
            });
            toast("Venta registrada ✓");
            _context7.n = 12;
            break;
          case 11:
            _context7.p = 11;
            _t7 = _context7.v;
            alert(_t7.message);
          case 12:
            ssv(false);
          case 13:
            return _context7.a(2);
        }
      }, _callee6, null, [[4, 8, 9, 10], [2, 11]]);
    }));
    function save() {
      return _save5.apply(this, arguments);
    }
    return save;
  }();
  if (done) {
    return /*#__PURE__*/React.createElement(Modal, {
      title: "Venta completada!",
      onClose: onClose,
      footer: /*#__PURE__*/React.createElement(BtnP, {
        onClick: onClose
      }, "Listo")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 36,
        marginBottom: 8
      }
    }, "\u2705"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 700,
        color: "#1A5C47"
      }
    }, fmtM(done.total)), done.cli && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#6B7280",
        marginTop: 4
      }
    }, done.cli.name)), done.cli && /*#__PURE__*/React.createElement("a", {
      href: waReceipt(done.cli.name, done.items, done.total),
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        background: "#22C55E",
        color: "#fff",
        borderRadius: 12,
        padding: 14,
        fontSize: 14,
        fontWeight: 700,
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-brand-whatsapp",
      style: {
        fontSize: 20
      }
    }), "Enviar recibo a ", done.cli.name));
  }
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Nueva venta",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BtnS, {
      onClick: onClose
    }, "Cancelar"), /*#__PURE__*/React.createElement(BtnP, {
      onClick: save,
      disabled: sv || !items.length
    }, sv ? "Guardando..." : "Completar " + fmtM(finalTotal)))
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Cliente (opcional)"
  }, /*#__PURE__*/React.createElement("select", {
    value: clientId,
    onChange: function onChange(e) {
      return setClientId(e.target.value);
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Venta sin cliente registrado"), clients.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id,
      value: c.id
    }, c.name, " \xB7 ", c.phone);
  }))), /*#__PURE__*/React.createElement(STit, null, "Agregar productos"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-search",
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9CA3AF",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "Buscar producto...",
    style: _objectSpread(_objectSpread({}, IS), {}, {
      paddingLeft: 36
    })
  })), search && filtP.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid #E5E7EB",
      borderRadius: 10,
      marginBottom: 12,
      maxHeight: 200,
      overflowY: "auto"
    }
  }, filtP.slice(0, 8).map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      onClick: function onClick() {
        return addItem(p);
      },
      style: {
        padding: "10px 14px",
        borderBottom: "1px solid #F3F4F6",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#9CA3AF"
      }
    }, p.brand, " \xB7 Stock: ", p.stock || 0)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "#1A5C47"
      }
    }, fmtM(p.salePrice)));
  })), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid #E5E7EB",
      borderRadius: 10,
      marginBottom: 12,
      overflow: "hidden"
    }
  }, items.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.productId,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 14px",
        borderBottom: "1px solid #F3F4F6"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, item.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#6B7280"
      }
    }, fmtM(item.price), " c/u")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return updQty(item.productId, item.qty - 1);
      },
      style: {
        width: 28,
        height: 28,
        borderRadius: 6,
        border: "1px solid #E5E7EB",
        background: "#fff",
        cursor: "pointer",
        fontSize: 16
      }
    }, "-"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        minWidth: 24,
        textAlign: "center"
      }
    }, item.qty), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return updQty(item.productId, item.qty + 1);
      },
      style: {
        width: 28,
        height: 28,
        borderRadius: 6,
        border: "1px solid #E5E7EB",
        background: "#fff",
        cursor: "pointer",
        fontSize: 16
      }
    }, "+")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "#1A5C47",
        minWidth: 70,
        textAlign: "right"
      }
    }, fmtM(item.qty * item.price)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      borderBottom: "1px solid #F3F4F6",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#6B7280",
      flexShrink: 0
    }
  }, "Descuento %"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: discount,
    onChange: function onChange(e) {
      return setDiscount(Math.min(100, Math.max(0, Number(e.target.value))));
    },
    min: 0,
    max: 100,
    style: _objectSpread(_objectSpread({}, IS), {}, {
      width: 80,
      textAlign: "center",
      padding: "6px 10px",
      flexShrink: 0
    })
  }), discount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "#DC2626",
      fontWeight: 600
    }
  }, "-", fmtM(Math.round(total * discount / 100)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      background: "#F0FDF4",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "#065F46"
    }
  }, "Total", discount > 0 ? " (con descuento)" : ""), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: "#065F46"
    }
  }, fmtM(Math.round(total * (1 - discount / 100)))))), !items.length && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 24,
      color: "#9CA3AF",
      fontSize: 13
    }
  }, "Busca y agrega productos arriba"));
}
function EditSaleModal(_ref19) {
  var sale = _ref19.sale,
    clients = _ref19.clients,
    onClose = _ref19.onClose,
    toast = _ref19.toast;
  var _useState41 = useState(sale.clientId || ""),
    _useState42 = _slicedToArray(_useState41, 2),
    clientId = _useState42[0],
    setClientId = _useState42[1];
  var _useState43 = useState(sale.notes || ""),
    _useState44 = _slicedToArray(_useState43, 2),
    notes = _useState44[0],
    setNotes = _useState44[1];
  var _useState45 = useState(false),
    _useState46 = _slicedToArray(_useState45, 2),
    sv = _useState46[0],
    ssv = _useState46[1];
  var save = /*#__PURE__*/function () {
    var _save6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var _t8;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            ssv(true);
            _context8.p = 1;
            _context8.n = 2;
            return fupd("sales", sale.id, {
              clientId: clientId || null,
              notes: notes
            });
          case 2:
            toast("Venta actualizada ✓");
            onClose();
            _context8.n = 4;
            break;
          case 3:
            _context8.p = 3;
            _t8 = _context8.v;
            alert(_t8.message);
          case 4:
            ssv(false);
          case 5:
            return _context8.a(2);
        }
      }, _callee7, null, [[1, 3]]);
    }));
    function save() {
      return _save6.apply(this, arguments);
    }
    return save;
  }();
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Editar venta",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BtnS, {
      onClick: onClose
    }, "Cancelar"), /*#__PURE__*/React.createElement(BtnP, {
      onClick: save,
      disabled: sv
    }, sv ? "Guardando..." : "Guardar"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#F0FDF4",
      borderRadius: 10,
      padding: "10px 14px",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#065F46",
      fontWeight: 700
    }
  }, fmtM(sale.total), " \xB7 ", fmt(sale.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#6B7280",
      marginTop: 2
    }
  }, (sale.items || []).map(function (i) {
    return i.qty + "x " + i.name;
  }).join(", "))), /*#__PURE__*/React.createElement(Inp, {
    label: "Cliente"
  }, /*#__PURE__*/React.createElement("select", {
    value: clientId,
    onChange: function onChange(e) {
      return setClientId(e.target.value);
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Sin cliente registrado"), clients.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id,
      value: c.id
    }, c.name, " \xB7 ", c.phone);
  }))), /*#__PURE__*/React.createElement(Inp, {
    label: "Notas"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: "Observaciones...",
    style: _objectSpread(_objectSpread({}, IS), {}, {
      resize: "vertical",
      minHeight: 60,
      fontFamily: "inherit"
    })
  })));
}
function ExpenseModal(_ref20) {
  var et = _ref20.et,
    onClose = _ref20.onClose,
    toast = _ref20.toast;
  var ie = !!(et && et.id);
  var _useState47 = useState({
      name: et ? et.name || "" : "",
      amount: et ? et.amount || "" : "",
      type: et ? et.type || "fijo" : "fijo",
      category: et ? et.category || "Arriendo" : "Arriendo",
      date: et ? et.date || today() : today(),
      notes: et ? et.notes || "" : ""
    }),
    _useState48 = _slicedToArray(_useState47, 2),
    f = _useState48[0],
    sf = _useState48[1];
  var _useState49 = useState(false),
    _useState50 = _slicedToArray(_useState49, 2),
    sv = _useState50[0],
    ssv = _useState50[1];
  var u = function u(k, v) {
    return sf(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, v));
    });
  };
  var save = /*#__PURE__*/function () {
    var _save7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var _t9;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            if (!(!f.name.trim() || !f.amount)) {
              _context9.n = 1;
              break;
            }
            alert("Nombre y monto obligatorios.");
            return _context9.a(2);
          case 1:
            ssv(true);
            _context9.p = 2;
            if (!ie) {
              _context9.n = 4;
              break;
            }
            _context9.n = 3;
            return fupd("expenses", et.id, f);
          case 3:
            toast("Gasto actualizado ✓");
            _context9.n = 6;
            break;
          case 4:
            _context9.n = 5;
            return fadd("expenses", f);
          case 5:
            toast("Gasto registrado ✓");
          case 6:
            onClose();
            _context9.n = 8;
            break;
          case 7:
            _context9.p = 7;
            _t9 = _context9.v;
            alert(_t9.message);
          case 8:
            ssv(false);
          case 9:
            return _context9.a(2);
        }
      }, _callee8, null, [[2, 7]]);
    }));
    function save() {
      return _save7.apply(this, arguments);
    }
    return save;
  }();
  return /*#__PURE__*/React.createElement(Modal, {
    title: ie ? "Editar gasto" : "Registrar gasto",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BtnS, {
      onClick: onClose
    }, "Cancelar"), /*#__PURE__*/React.createElement(BtnP, {
      onClick: save,
      disabled: sv
    }, sv ? "Guardando..." : "Guardar"))
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Descripci\xF3n *"
  }, /*#__PURE__*/React.createElement("input", {
    value: f.name,
    onChange: function onChange(e) {
      return u("name", e.target.value);
    },
    placeholder: "Ej: Arriendo julio",
    style: IS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Monto (COP) *"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: f.amount,
    onChange: function onChange(e) {
      return u("amount", e.target.value);
    },
    style: IS
  })), /*#__PURE__*/React.createElement(Inp, {
    label: "Fecha"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: f.date,
    onChange: function onChange(e) {
      return u("date", e.target.value);
    },
    style: IS
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Tipo"
  }, /*#__PURE__*/React.createElement("select", {
    value: f.type,
    onChange: function onChange(e) {
      return u("type", e.target.value);
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: "fijo"
  }, "Gasto fijo"), /*#__PURE__*/React.createElement("option", {
    value: "variable"
  }, "Gasto variable"))), /*#__PURE__*/React.createElement(Inp, {
    label: "Categor\xEDa"
  }, /*#__PURE__*/React.createElement("select", {
    value: f.category,
    onChange: function onChange(e) {
      return u("category", e.target.value);
    },
    style: IS
  }, EXPENSE_CATS.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c
    }, c);
  })))));
}
function PhotoShare(_ref21) {
  var client = _ref21.client,
    pet = _ref21.pet,
    onClose = _ref21.onClose;
  var _useState51 = useState(null),
    _useState52 = _slicedToArray(_useState51, 2),
    raw = _useState52[0],
    setRaw = _useState52[1];
  var _useState53 = useState(null),
    _useState54 = _slicedToArray(_useState53, 2),
    prev = _useState54[0],
    setPrev = _useState54[1];
  var _useState55 = useState(null),
    _useState56 = _slicedToArray(_useState55, 2),
    blob = _useState56[0],
    setBlob = _useState56[1];
  var _useState57 = useState(null),
    _useState58 = _slicedToArray(_useState57, 2),
    bUrl = _useState58[0],
    setBUrl = _useState58[1];
  var _useState59 = useState(true),
    _useState60 = _slicedToArray(_useState59, 2),
    useBrand = _useState60[0],
    setUseBrand = _useState60[1];
  var _useState61 = useState(false),
    _useState62 = _slicedToArray(_useState61, 2),
    proc = _useState62[0],
    setProc = _useState62[1];
  var _useState63 = useState(false),
    _useState64 = _slicedToArray(_useState63, 2),
    shr = _useState64[0],
    setShr = _useState64[1];
  var msg = "Hola " + client.name + "! 🐾\n\n*" + pet.name + "* ya está listo y quedó hermoso! ✨🛁\n\nGracias por confiar en PawSociety 🤍\nCra 19 #22N-23 · Armenia";
  var handleFile = function handleFile(e) {
    var f = e.target.files && e.target.files[0];
    if (!f) return;
    setRaw(f);
    setPrev(URL.createObjectURL(f));
    setBlob(null);
    setBUrl(null);
    doWM(f);
  };
  var doWM = function doWM(file) {
    setProc(true);
    var img = new Image();
    var url = URL.createObjectURL(file);
    img.onload = function () {
      try {
        var c = document.createElement("canvas");
        var W = img.width,
          H = img.height;
        c.width = W;
        c.height = H;
        var ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, W, H);
        var bh = Math.round(H * 0.2),
          by = H - bh;
        var gr = ctx.createLinearGradient(0, by - Math.round(bh * 0.4), 0, H);
        gr.addColorStop(0, "rgba(13,61,46,0)");
        gr.addColorStop(0.3, "rgba(13,61,46,0.9)");
        gr.addColorStop(1, "rgba(13,61,46,0.98)");
        ctx.fillStyle = gr;
        ctx.fillRect(0, by - Math.round(bh * 0.4), W, bh + Math.round(bh * 0.4));
        var lImg = new Image();
        lImg.onload = function () {
          try {
            var ls = Math.round(bh * 0.75),
              lx = Math.round(W * 0.04),
              ly = by + Math.round((bh - ls) / 2);
            ctx.save();
            ctx.beginPath();
            ctx.arc(lx + ls / 2, ly + ls / 2, ls / 2, 0, Math.PI * 2);
            ctx.clip();
            ctx.drawImage(lImg, lx, ly, ls, ls);
            ctx.restore();
            var tx = lx + ls + Math.round(W * 0.03);
            ctx.fillStyle = "#F2C4CE";
            ctx.font = "700 " + Math.round(W * 0.052) + "px Arial,sans-serif";
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillText("@pawsociety_store", tx, by + bh * 0.36);
            ctx.fillStyle = "rgba(242,196,206,0.75)";
            ctx.font = "400 " + Math.round(W * 0.032) + "px Arial,sans-serif";
            ctx.fillText("PawSociety Pet Store · Armenia", tx, by + bh * 0.66);
            URL.revokeObjectURL(url);
            c.toBlob(function (b) {
              setProc(false);
              if (b) {
                setBlob(b);
                setBUrl(URL.createObjectURL(b));
              }
            }, "image/jpeg", 0.92);
          } catch (e2) {
            setProc(false);
          }
        };
        lImg.onerror = function () {
          ctx.fillStyle = "#F2C4CE";
          ctx.font = "700 " + Math.round(W * 0.056) + "px Arial";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("@pawsociety_store", W / 2, by + bh * 0.4);
          c.toBlob(function (b) {
            setProc(false);
            if (b) {
              setBlob(b);
              setBUrl(URL.createObjectURL(b));
            }
          }, "image/jpeg", 0.92);
        };
        lImg.src = window.PAWS_LOGO || "";
      } catch (err) {
        setProc(false);
      }
    };
    img.onerror = function () {
      return setProc(false);
    };
    img.src = url;
  };
  var dispUrl = useBrand ? bUrl || prev : prev;
  var fileToShare = useBrand ? blob || raw : raw;
  var share = /*#__PURE__*/function () {
    var _share = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var fn, sd, _t0;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            if (fileToShare) {
              _context0.n = 1;
              break;
            }
            return _context0.a(2);
          case 1:
            setShr(true);
            fn = new File([fileToShare], "pawsociety_" + pet.name + ".jpg", {
              type: "image/jpeg"
            });
            _context0.p = 2;
            if (!navigator.share) {
              _context0.n = 6;
              break;
            }
            sd = {
              files: [fn],
              text: msg
            };
            if (!(navigator.canShare && navigator.canShare(sd))) {
              _context0.n = 4;
              break;
            }
            _context0.n = 3;
            return navigator.share(sd);
          case 3:
            _context0.n = 5;
            break;
          case 4:
            _context0.n = 5;
            return navigator.share({
              files: [fn]
            });
          case 5:
            _context0.n = 7;
            break;
          case 6:
            window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(msg), "_blank");
          case 7:
            _context0.n = 9;
            break;
          case 8:
            _context0.p = 8;
            _t0 = _context0.v;
            if (_t0.name !== "AbortError") window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(msg), "_blank");
          case 9:
            setShr(false);
          case 10:
            return _context0.a(2);
        }
      }, _callee9, null, [[2, 8]]);
    }));
    function share() {
      return _share.apply(this, arguments);
    }
    return share;
  }();
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Foto — " + pet.name,
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(BtnS, {
      onClick: onClose
    }, "Cerrar")
  }, !prev ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      cursor: "pointer",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    capture: "environment",
    onChange: handleFile,
    style: {
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0D3D2E",
      borderRadius: 14,
      padding: "24px 20px",
      textAlign: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 10
    }
  }, "\uD83D\uDCF7"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700
    }
  }, "Tomar foto de ", pet.name))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(msg), "_blank");
    },
    style: {
      width: "100%",
      padding: 14,
      background: "#22C55E",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Solo enviar mensaje de texto")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "#F3F4F6",
      borderRadius: 12,
      padding: 4,
      marginBottom: 14,
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setUseBrand(true);
    },
    style: {
      flex: 1,
      padding: 10,
      borderRadius: 9,
      border: "none",
      fontSize: 12,
      fontWeight: 700,
      background: useBrand ? "#0D3D2E" : "transparent",
      color: useBrand ? "#F2C4CE" : "#6B7280",
      cursor: "pointer"
    }
  }, "Con marca"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setUseBrand(false);
    },
    style: {
      flex: 1,
      padding: 10,
      borderRadius: 9,
      border: "none",
      fontSize: 12,
      fontWeight: 700,
      background: !useBrand ? "#374151" : "transparent",
      color: !useBrand ? "#fff" : "#6B7280",
      cursor: "pointer"
    }
  }, "Original")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 14,
      overflow: "hidden",
      marginBottom: 12,
      border: "2px solid #E5E7EB",
      minHeight: 160,
      background: "#F3F4F6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }
  }, proc && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(13,61,46,.7)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2,
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      marginBottom: 8
    }
  }, "\u23F3"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#F2C4CE",
      fontSize: 13,
      fontWeight: 600
    }
  }, "Aplicando marca...")), dispUrl && /*#__PURE__*/React.createElement("img", {
    src: dispUrl,
    style: {
      width: "100%",
      display: "block",
      maxHeight: 280,
      objectFit: "contain"
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("button", {
    onClick: share,
    disabled: shr || proc,
    style: {
      width: "100%",
      padding: 15,
      background: "#22C55E",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      marginBottom: 10,
      opacity: shr || proc ? 0.7 : 1
    }
  }, shr ? "Abriendo..." : proc ? "Procesando..." : "Enviar a " + client.name), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setRaw(null);
      setPrev(null);
      setBlob(null);
      setBUrl(null);
    },
    style: {
      width: "100%",
      padding: 12,
      background: "#F3F4F6",
      color: "#374151",
      border: "none",
      borderRadius: 12,
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Tomar otra foto")));
}
function DashboardScreen(_ref22) {
  var clients = _ref22.clients,
    pets = _ref22.pets,
    appts = _ref22.appts,
    sales = _ref22.sales,
    products = _ref22.products,
    expenses = _ref22.expenses,
    lastBath = _ref22.lastBath,
    setView = _ref22.setView,
    openSale = _ref22.openSale,
    openAppt = _ref22.openAppt,
    commission = _ref22.commission;
  var _useState65 = useState(10),
    _useState66 = _slicedToArray(_useState65, 2),
    weekGoalBaths = _useState66[0],
    setWeekGoalBaths = _useState66[1];
  var _useState67 = useState(500000),
    _useState68 = _slicedToArray(_useState67, 2),
    weekGoalSales = _useState68[0],
    setWeekGoalSales = _useState68[1];
  var _useState69 = useState(false),
    _useState70 = _slicedToArray(_useState69, 2),
    showGoalEdit = _useState70[0],
    setShowGoalEdit = _useState70[1];
  useEffect(function () {
    if (db) {
      db.collection("config").doc("weekGoals").get().then(function (d) {
        if (d.exists) {
          if (d.data().baths) setWeekGoalBaths(Number(d.data().baths));
          if (d.data().sales) setWeekGoalSales(Number(d.data().sales));
        }
      }).catch(function () {});
    }
  }, []);
  var ta = appts.filter(function (a) {
    return a.date === today();
  }).sort(function (a, b) {
    return a.time.localeCompare(b.time);
  });
  var spaI = appts.filter(function (a) {
    return a.status === "completado" && a.date && a.date.startsWith(thisM());
  }).reduce(function (s, a) {
    return s + Number(a.price || 0);
  }, 0);
  var storeI = sales.filter(function (s) {
    return s.date && s.date.startsWith(thisM());
  }).reduce(function (s, x) {
    return s + Number(x.total || 0);
  }, 0);
  var todayI = appts.filter(function (a) {
    return a.date === today() && a.status === "completado";
  }).reduce(function (s, a) {
    return s + Number(a.price || 0);
  }, 0) + sales.filter(function (s) {
    return s.date === today();
  }).reduce(function (s, x) {
    return s + Number(x.total || 0);
  }, 0);
  var mExp = expenses.filter(function (e) {
    return e.date && e.date.startsWith(thisM());
  });
  var be = calcBE(mExp, spaI, storeI);
  var due = pets.filter(function (p) {
    var lb = lastBath(p.id);
    return !lb || dBetween(lb, today()) >= 28;
  });
  var preSoon = pets.filter(function (p) {
    var lb = lastBath(p.id);
    if (!lb) return false;
    var d = dBetween(lb, today());
    return d >= 22 && d < 28;
  });
  var lowStock = products.filter(function (p) {
    return p.active !== false && Number(p.stock || 0) <= Number(p.minStock || 3);
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#0D3D2E,#1A5C47)",
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .7,
      marginBottom: 4
    }
  }, fmt(today())), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      marginBottom: 6
    }
  }, "PawSociety CRM"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .75
    }
  }, "Ventas hoy"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800
    }
  }, fmtM(todayI))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .75
    }
  }, "Punto de equilibrio"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700
    }
  }, be.prog, "%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,.2)",
      borderRadius: 8,
      height: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: be.prog + "%",
      height: "100%",
      background: "#F2C4CE",
      borderRadius: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .7,
      marginTop: 4
    }
  }, be.prog < 100 ? "Faltan " + fmtM(be.rem) + " para cubrir costos" : "Punto de equilibrio superado!")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: openSale,
    style: {
      padding: "14px",
      background: "#1A5C47",
      color: "#fff",
      borderRadius: 12,
      border: "none",
      fontSize: 13,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-shopping-cart",
    style: {
      fontSize: 18
    }
  }), "Nueva venta"), /*#__PURE__*/React.createElement("button", {
    onClick: openAppt,
    style: {
      padding: "14px",
      background: "#E8F5EB",
      color: "#065F46",
      borderRadius: 12,
      border: "2px solid #1A5C47",
      fontSize: 13,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-calendar-plus",
    style: {
      fontSize: 18
    }
  }), "Nueva cita")), function () {
    var now = new Date();
    var dayOfWeek = now.getDay();
    var monday = new Date(now);
    monday.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    monday.setHours(0, 0, 0, 0);
    var mondayStr = monday.toISOString().slice(0, 10);
    var weekBaths = appts.filter(function (a) {
      return a.status === "completado" && a.date >= mondayStr && a.date <= today();
    }).length;
    var weekSales = sales.filter(function (s) {
      return s.date >= mondayStr && s.date <= today();
    }).reduce(function (s, x) {
      return s + Number(x.total || 0);
    }, 0);
    var weekSpaIncome = appts.filter(function (a) {
      return a.status === "completado" && a.date >= mondayStr && a.date <= today();
    }).reduce(function (s, a) {
      return s + Number(a.price || 0);
    }, 0);
    var goalBaths = weekGoalBaths || 10;
    var goalSales = weekGoalSales || 500000;
    var bathPct = Math.min(Math.round(weekBaths / goalBaths * 100), 100);
    var salesPct = Math.min(Math.round((weekSales + weekSpaIncome) / goalSales * 100), 100);
    return /*#__PURE__*/React.createElement(Card, {
      style: {
        background: "#0D3D2E",
        border: "none",
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "#F2C4CE"
      }
    }, "Meta semanal"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowGoalEdit(true);
      },
      style: {
        background: "rgba(242,196,206,.15)",
        border: "none",
        color: "#F2C4CE",
        borderRadius: 8,
        padding: "4px 10px",
        fontSize: 11,
        cursor: "pointer",
        fontWeight: 600
      }
    }, "Editar metas")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "rgba(242,196,206,.6)",
        marginBottom: 4
      }
    }, "Ba\xF1os"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 800,
        color: "#fff"
      }
    }, weekBaths, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "rgba(242,196,206,.5)",
        fontWeight: 400
      }
    }, "/", goalBaths)), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,.15)",
        borderRadius: 6,
        height: 6,
        marginTop: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: bathPct + "%",
        height: "100%",
        background: bathPct >= 100 ? "#86EFAC" : "#F2C4CE",
        borderRadius: 6,
        transition: "width .4s"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: bathPct >= 100 ? "#86EFAC" : "rgba(242,196,206,.6)",
        marginTop: 3
      }
    }, bathPct >= 100 ? "Meta lograda!" : bathPct + "%")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "rgba(242,196,206,.6)",
        marginBottom: 4
      }
    }, "Ingresos semana"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 800,
        color: "#fff"
      }
    }, fmtM(weekSales + weekSpaIncome)), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,.15)",
        borderRadius: 6,
        height: 6,
        marginTop: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: salesPct + "%",
        height: "100%",
        background: salesPct >= 100 ? "#86EFAC" : "#F2C4CE",
        borderRadius: 6,
        transition: "width .4s"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: salesPct >= 100 ? "#86EFAC" : "rgba(242,196,206,.6)",
        marginTop: 3
      }
    }, salesPct >= 100 ? "Meta lograda!" : "Meta: " + fmtM(goalSales)))));
  }(), showGoalEdit && /*#__PURE__*/React.createElement(Modal, {
    title: "Metas semanales",
    onClose: function onClose() {
      return setShowGoalEdit(false);
    },
    footer: /*#__PURE__*/React.createElement(BtnP, {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              if (!db) {
                _context1.n = 1;
                break;
              }
              _context1.n = 1;
              return db.collection("config").doc("weekGoals").set({
                baths: weekGoalBaths,
                sales: weekGoalSales
              });
            case 1:
              setShowGoalEdit(false);
              toast("Metas guardadas ✓");
            case 2:
              return _context1.a(2);
          }
        }, _callee0);
      }))
    }, "Guardar metas")
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Meta de ba\xF1os por semana"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: weekGoalBaths,
    onChange: function onChange(e) {
      return setWeekGoalBaths(Number(e.target.value));
    },
    min: 1,
    style: IS
  })), /*#__PURE__*/React.createElement(Inp, {
    label: "Meta de ingresos semanales (COP)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: weekGoalSales,
    onChange: function onChange(e) {
      return setWeekGoalSales(Number(e.target.value));
    },
    min: 0,
    style: IS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#F0FDF4",
      borderRadius: 10,
      padding: "10px 14px",
      fontSize: 12,
      color: "#065F46"
    }
  }, "Estas metas aparecen en el dashboard cada semana para que puedas hacer seguimiento diario.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(SC, {
    icon: "users",
    label: "Clientes",
    value: clients.length,
    color: "#1A5C47"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "paw",
    label: "Mascotas",
    value: pets.length,
    color: "#D4945A"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "currency-dollar",
    label: "Ingresos mes",
    value: fmtM(spaI + storeI),
    sub: "Spa: " + fmtM(spaI) + " · Tienda: " + fmtM(storeI),
    color: "#059669"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "receipt",
    label: "Gastos mes",
    value: fmtM(be.fix + be.vari),
    sub: "Utilidad: " + fmtM(spaI + storeI - (be.fix + be.vari)),
    color: "#DC2626",
    accent: spaI + storeI > be.fix + be.vari ? "#059669" : "#DC2626"
  })), (due.length > 0 || lowStock.length > 0) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 14
    }
  }, due.length > 0 && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setView("alertas");
    },
    style: {
      background: "#FBE9D6",
      border: "1px solid #D4945A",
      borderRadius: 12,
      padding: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      marginBottom: 4
    }
  }, "\uD83D\uDEC1"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "#92400E"
    }
  }, due.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#B45309"
    }
  }, "Sin ba\xF1o")), lowStock.length > 0 && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setView("catalogo");
    },
    style: {
      background: "#FEE2E2",
      border: "1px solid #EF4444",
      borderRadius: 12,
      padding: 12,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      marginBottom: 4
    }
  }, "\uD83D\uDCE6"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "#991B1B"
    }
  }, lowStock.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#B91C1C"
    }
  }, "Poco stock"))), clients.length > 0 && function () {
    var d30 = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10);
    var actClients = new Set([].concat(_toConsumableArray(appts.filter(function (a) {
      return a.status === "completado" && a.date >= d30;
    }).map(function (a) {
      return a.clientId;
    })), _toConsumableArray(sales.filter(function (s) {
      return s.date >= d30;
    }).map(function (s) {
      return s.clientId;
    }))).filter(Boolean));
    var retRate = clients.length > 0 ? Math.round(actClients.size / clients.length * 100) : 0;
    var allSpend = appts.filter(function (a) {
      return (a.status === "completado" || a.estado === "completado");
    }).reduce(function (s, a) {
      return s + Number(a.price || 0);
    }, 0) + sales.reduce(function (s, x) {
      return s + Number(x.total || 0);
    }, 0);
    var ticketProm = clients.length > 0 ? Math.round(allSpend / clients.length) : 0;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(SC, {
      icon: "repeat",
      label: "Tasa retorno 30d",
      value: retRate + "%",
      sub: actClients.size + " clientes activos",
      color: retRate >= 50 ? "#059669" : "#F59E0B",
      accent: retRate >= 50 ? "#059669" : "#F59E0B"
    }), /*#__PURE__*/React.createElement(SC, {
      icon: "receipt",
      label: "Ticket promedio",
      value: fmtM(ticketProm),
      sub: "por cliente",
      color: "#1A5C47"
    }));
  }(), ta.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(STit, null, "Citas de hoy (", ta.length, ")"), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, ta.map(function (a) {
    var pet = pets.find(function (p) {
      return p.id === a.petId;
    });
    var cli = clients.find(function (c) {
      return c.id === a.clientId;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        borderBottom: "1px solid #F3F4F6"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#E8F5EB",
        color: "#065F46",
        fontWeight: 700,
        fontSize: 11,
        borderRadius: 8,
        padding: "5px 8px",
        minWidth: 48,
        textAlign: "center",
        flexShrink: 0
      }
    }, a.time), /*#__PURE__*/React.createElement(Av, {
      name: pet ? pet.name : "?",
      size: 34,
      bg: "#FAD9E0",
      color: "#0D3D2E"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700
      }
    }, pet ? pet.name : ""), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#6B7280"
      }
    }, cli ? cli.name : "")), /*#__PURE__*/React.createElement(Bdg, {
      label: a.status,
      type: a.status === "completado" ? "gr" : a.status === "cancelado" ? "rd" : "am"
    }));
  }))));
}
function ClientsScreen(_ref24) {
  var clients = _ref24.clients,
    pets = _ref24.pets,
    appts = _ref24.appts,
    sales = _ref24.sales,
    lastBath = _ref24.lastBath,
    toast = _ref24.toast;
  var _useState71 = useState(""),
    _useState72 = _slicedToArray(_useState71, 2),
    search = _useState72[0],
    setSearch = _useState72[1];
  var _useState73 = useState(null),
    _useState74 = _slicedToArray(_useState73, 2),
    sel = _useState74[0],
    setSel = _useState74[1];
  var _useState75 = useState(false),
    _useState76 = _slicedToArray(_useState75, 2),
    petMod = _useState76[0],
    setPetMod = _useState76[1];
  var _useState77 = useState(null),
    _useState78 = _slicedToArray(_useState77, 2),
    editPet = _useState78[0],
    setEditPet = _useState78[1];
  var _useState79 = useState("todos"),
    _useState80 = _slicedToArray(_useState79, 2),
    segF = _useState80[0],
    setSegF = _useState80[1];
  var _useState81 = useState(null),
    _useState82 = _slicedToArray(_useState81, 2),
    etCli = _useState82[0],
    setEtCli = _useState82[1];
  var _useState83 = useState(false),
    _useState84 = _slicedToArray(_useState83, 2),
    showCM = _useState84[0],
    setShowCM = _useState84[1];
  var all = clients.map(function (c) {
    return _objectSpread(_objectSpread({}, c), {}, {
      seg: getSegment(c.id, appts, sales)
    });
  });
  var fil = all.filter(function (c) {
    var q = search.toLowerCase();
    var ms = c.name.toLowerCase().includes(q) || c.phone.includes(q);
    var fs = segF === "todos" || c.seg.label.toLowerCase() === segF;
    return ms && fs;
  });
  var delCli = /*#__PURE__*/function () {
    var _delCli = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(c) {
      var _iterator2, _step2, _loop2, _iterator3, _step3, s, _t10, _t11;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            if (window.confirm("Eliminar a " + c.name + "?")) {
              _context11.n = 1;
              break;
            }
            return _context11.a(2);
          case 1:
            _context11.n = 2;
            return fdel("clients", c.id);
          case 2:
            _iterator2 = _createForOfIteratorHelper(pets.filter(function (x) {
              return x.clientId === c.id;
            }));
            _context11.p = 3;
            _loop2 = /*#__PURE__*/_regenerator().m(function _loop2() {
              var p, _iterator4, _step4, a, _t1;
              return _regenerator().w(function (_context10) {
                while (1) switch (_context10.p = _context10.n) {
                  case 0:
                    p = _step2.value;
                    _context10.n = 1;
                    return fdel("pets", p.id);
                  case 1:
                    _iterator4 = _createForOfIteratorHelper(appts.filter(function (x) {
                      return x.petId === p.id;
                    }));
                    _context10.p = 2;
                    _iterator4.s();
                  case 3:
                    if ((_step4 = _iterator4.n()).done) {
                      _context10.n = 5;
                      break;
                    }
                    a = _step4.value;
                    _context10.n = 4;
                    return fdel("appts", a.id);
                  case 4:
                    _context10.n = 3;
                    break;
                  case 5:
                    _context10.n = 7;
                    break;
                  case 6:
                    _context10.p = 6;
                    _t1 = _context10.v;
                    _iterator4.e(_t1);
                  case 7:
                    _context10.p = 7;
                    _iterator4.f();
                    return _context10.f(7);
                  case 8:
                    return _context10.a(2);
                }
              }, _loop2, null, [[2, 6, 7, 8]]);
            });
            _iterator2.s();
          case 4:
            if ((_step2 = _iterator2.n()).done) {
              _context11.n = 6;
              break;
            }
            return _context11.d(_regeneratorValues(_loop2()), 5);
          case 5:
            _context11.n = 4;
            break;
          case 6:
            _context11.n = 8;
            break;
          case 7:
            _context11.p = 7;
            _t10 = _context11.v;
            _iterator2.e(_t10);
          case 8:
            _context11.p = 8;
            _iterator2.f();
            return _context11.f(8);
          case 9:
            _iterator3 = _createForOfIteratorHelper(sales.filter(function (x) {
              return x.clientId === c.id;
            }));
            _context11.p = 10;
            _iterator3.s();
          case 11:
            if ((_step3 = _iterator3.n()).done) {
              _context11.n = 13;
              break;
            }
            s = _step3.value;
            _context11.n = 12;
            return fdel("sales", s.id);
          case 12:
            _context11.n = 11;
            break;
          case 13:
            _context11.n = 15;
            break;
          case 14:
            _context11.p = 14;
            _t11 = _context11.v;
            _iterator3.e(_t11);
          case 15:
            _context11.p = 15;
            _iterator3.f();
            return _context11.f(15);
          case 16:
            toast("Cliente eliminado");
            setSel(null);
          case 17:
            return _context11.a(2);
        }
      }, _callee1, null, [[10, 14, 15, 16], [3, 7, 8, 9]]);
    }));
    function delCli(_x8) {
      return _delCli.apply(this, arguments);
    }
    return delCli;
  }();
  var tabS = function tabS(a) {
    return {
      padding: "6px 14px",
      borderRadius: 20,
      fontSize: 12,
      border: "1.5px solid " + (a ? "#1A5C47" : "#E5E7EB"),
      background: a ? "#1A5C47" : "#fff",
      color: a ? "#fff" : "#4B5563",
      cursor: "pointer",
      fontWeight: a ? 700 : 500,
      whiteSpace: "nowrap",
      flexShrink: 0
    };
  };
  if (sel) {
    var cp = pets.filter(function (p) {
      return p.clientId === sel.id;
    });
    var ca = appts.filter(function (a) {
      return a.clientId === sel.id;
    }).sort(function (a, b) {
      return (b.date||b.fecha||"").localeCompare(a.date||a.fecha||"");
    });
    var cs = sales.filter(function (s) {
      return s.clientId === sel.id;
    }).sort(function (a, b) {
      return (b.date||b.fecha||"").localeCompare(a.date||a.fecha||"");
    });
    var totalSp = ca.filter(function (a) {
      return (a.status === "completado" || a.estado === "completado");
    }).reduce(function (s, a) {
      return s + Number(a.price || 0);
    }, 0) + cs.reduce(function (s, x) {
      return s + Number(x.total || 0);
    }, 0);
    var seg = getSegment(sel.id, appts, sales);
    var lastAct = [].concat(_toConsumableArray(ca.filter(function (a) {
      return (a.status === "completado" || a.estado === "completado");
    })), _toConsumableArray(cs)).sort(function (a, b) {
      return (b.date||b.fecha||"").localeCompare(a.date||a.fecha||"");
    })[0];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSel(null);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        color: "#1A5C47",
        background: "none",
        border: "none",
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 14,
        padding: 0,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-arrow-left"
    }), "Volver"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Av, {
      name: sel.name,
      size: 52
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 800
      }
    }, sel.name), /*#__PURE__*/React.createElement("span", {
      style: {
        background: seg.bg,
        color: seg.color,
        fontSize: 11,
        padding: "3px 9px",
        borderRadius: 10,
        fontWeight: 700
      }
    }, seg.icon, " ", seg.label)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "#6B7280"
      }
    }, sel.phone), sel.email && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#9CA3AF"
      }
    }, sel.email), sel.address && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#9CA3AF"
      }
    }, sel.address))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 8,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#F0FDF4",
        borderRadius: 10,
        padding: 10,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        color: "#065F46"
      }
    }, fmtM(totalSp)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#6B7280",
        marginTop: 2
      }
    }, "Total gastado")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#EFF6FF",
        borderRadius: 10,
        padding: 10,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 700,
        color: "#1D4ED8"
      }
    }, ca.length + cs.length), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#6B7280",
        marginTop: 2
      }
    }, "Visitas totales")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#FBE9D6",
        borderRadius: 10,
        padding: 10,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "#92400E"
      }
    }, lastAct ? fmt(lastAct.date) : "—"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#6B7280",
        marginTop: 2
      }
    }, "\xDAltima visita"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setEtCli(sel);
        setShowCM(true);
      },
      style: {
        flex: 1,
        padding: 10,
        background: "#EFF6FF",
        color: "#1D4ED8",
        border: "none",
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-edit"
    }), "Editar"), /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/57" + sel.phone.replace(/[^0-9]/g, ""),
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        flex: 1,
        padding: 10,
        background: "#F0FDF4",
        color: "#15803D",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-brand-whatsapp"
    }), "WhatsApp"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return delCli(sel);
      },
      style: {
        padding: 10,
        background: "#FEE2E2",
        color: "#DC2626",
        border: "none",
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-trash"
    }), "Eliminar"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(STit, null, "Mascotas (", cp.length, ")"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setEditPet(null);
        setPetMod(true);
      },
      style: {
        padding: "7px 12px",
        background: "#E8F5EB",
        color: "#1A5C47",
        border: "none",
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-plus"
    }), "Agregar")), cp.map(function (p) {
      var lb = lastBath(p.id);
      var days = lb ? dBetween(lb, today()) : null;
      return /*#__PURE__*/React.createElement(Card, {
        key: p.id,
        style: {
          marginBottom: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12
        }
      }, /*#__PURE__*/React.createElement(Av, {
        name: p.name,
        size: 40,
        bg: "#FAD9E0",
        color: "#0D3D2E"
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14,
          fontWeight: 700
        }
      }, p.name, " ", /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          color: "#9CA3AF",
          fontWeight: 400
        }
      }, p.breed)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: "#9CA3AF"
        }
      }, p.species === "gato" ? "🐱" : "🐶", p.weight ? " · " + p.weight + "kg" : "", p.age ? " · " + p.age + "a" : ""), p.concentrado && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          background: "#E8F5EB",
          color: "#065F46",
          fontWeight: 600,
          marginTop: 4,
          padding: "3px 8px",
          borderRadius: 6,
          display: "inline-block"
        }
      }, "\uD83E\uDDB4 ", p.concentrado), p.birthday && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: isBdayToday(p.birthday) ? "#EC4899" : "#9CA3AF",
          marginTop: 4
        }
      }, "\uD83C\uDF82 ", fmtBday(p.birthday), isBdayToday(p.birthday) ? " ¡Hoy! 🎉" : ""), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 6
        }
      }, /*#__PURE__*/React.createElement(LoyaltyCircles, {
        petId: p.id,
        appts: appts
      }))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 5,
          alignItems: "flex-end"
        }
      }, /*#__PURE__*/React.createElement(Bdg, {
        label: lb ? fmt(lb) : "Sin historial",
        type: !days || days >= 28 ? "rd" : "gr"
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 5
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          setEditPet(p);
          setPetMod(true);
        },
        style: {
          padding: "5px 10px",
          background: "#EFF6FF",
          color: "#1D4ED8",
          border: "none",
          borderRadius: 8,
          fontSize: 11,
          fontWeight: 700,
          cursor: "pointer"
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "ti ti-edit"
      })), /*#__PURE__*/React.createElement("button", {
        onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
          var _iterator5, _step5, a, _t12;
          return _regenerator().w(function (_context12) {
            while (1) switch (_context12.p = _context12.n) {
              case 0:
                if (window.confirm("Eliminar a " + p.name + "?")) {
                  _context12.n = 1;
                  break;
                }
                return _context12.a(2);
              case 1:
                _context12.n = 2;
                return fdel("pets", p.id);
              case 2:
                _iterator5 = _createForOfIteratorHelper(appts.filter(function (x) {
                  return x.petId === p.id;
                }));
                _context12.p = 3;
                _iterator5.s();
              case 4:
                if ((_step5 = _iterator5.n()).done) {
                  _context12.n = 6;
                  break;
                }
                a = _step5.value;
                _context12.n = 5;
                return fdel("appts", a.id);
              case 5:
                _context12.n = 4;
                break;
              case 6:
                _context12.n = 8;
                break;
              case 7:
                _context12.p = 7;
                _t12 = _context12.v;
                _iterator5.e(_t12);
              case 8:
                _context12.p = 8;
                _iterator5.f();
                return _context12.f(8);
              case 9:
                toast("Eliminada");
              case 10:
                return _context12.a(2);
            }
          }, _callee10, null, [[3, 7, 8, 9]]);
        })),
        style: {
          padding: "5px 10px",
          background: "#FEE2E2",
          color: "#DC2626",
          border: "none",
          borderRadius: 8,
          fontSize: 11,
          fontWeight: 700,
          cursor: "pointer"
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "ti ti-trash"
      }))))));
    }), /*#__PURE__*/React.createElement(STit, null, "Compras en tienda (", cs.length, ")"), cs.length === 0 ? /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "#9CA3AF",
        textAlign: "center",
        padding: 16
      }
    }, "Sin compras.") : /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: 0
      }
    }, cs.slice(0, 5).map(function (s) {
      return /*#__PURE__*/React.createElement("div", {
        key: s.id,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 16px",
          borderBottom: "1px solid #F3F4F6"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 10,
          fontWeight: 700,
          background: "#F3F4F6",
          color: "#374151",
          borderRadius: 8,
          padding: "4px 6px",
          minWidth: 48,
          textAlign: "center"
        }
      }, fmt(s.date)), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          fontSize: 12,
          color: "#6B7280"
        }
      }, s.items ? s.items.map(function (i) {
        return i.name;
      }).join(", ") : ""), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: 700,
          color: "#1A5C47"
        }
      }, fmtM(s.total)));
    })), /*#__PURE__*/React.createElement(STit, null, "Historial spa (", ca.length, ")"), ca.length === 0 ? /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "#9CA3AF",
        textAlign: "center",
        padding: 16
      }
    }, "Sin citas.") : /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: 0
      }
    }, ca.slice(0, 5).map(function (a) {
      var pet = pets.find(function (p) {
        return p.id === a.petId;
      });
      return /*#__PURE__*/React.createElement("div", {
        key: a.id,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 16px",
          borderBottom: "1px solid #F3F4F6"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 10,
          fontWeight: 700,
          background: "#F3F4F6",
          color: "#374151",
          borderRadius: 8,
          padding: "4px 6px",
          minWidth: 48,
          textAlign: "center"
        }
      }, fmt(a.date)), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          fontWeight: 600
        }
      }, pet ? pet.name : ""), a.services && a.services.length > 0 && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          color: "#9CA3AF"
        }
      }, a.services.join(", "))), a.price && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: 700,
          color: "#1A5C47"
        }
      }, fmtM(a.price)), /*#__PURE__*/React.createElement(Bdg, {
        label: a.status,
        type: a.status === "completado" ? "gr" : a.status === "cancelado" ? "rd" : "am"
      }));
    })), petMod && /*#__PURE__*/React.createElement(PetModal, {
      clientId: sel.id,
      et: editPet,
      onClose: function onClose() {
        setPetMod(false);
        setEditPet(null);
      },
      toast: toast
    }), showCM && /*#__PURE__*/React.createElement(ClientModal, {
      et: etCli,
      onClose: function onClose() {
        setShowCM(false);
        setEtCli(null);
      },
      toast: toast
    }));
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-search",
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9CA3AF",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "Buscar nombre o tel\xE9fono...",
    style: _objectSpread(_objectSpread({}, IS), {}, {
      paddingLeft: 36
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12,
      overflowX: "auto",
      paddingBottom: 4
    }
  }, ["todos", "VIP", "Frecuente", "Ocasional", "Inactivo"].map(function (s) {
    return /*#__PURE__*/React.createElement("span", {
      key: s,
      onClick: function onClick() {
        return setSegF(s === "todos" ? "todos" : s.toLowerCase());
      },
      style: tabS(segF === (s === "todos" ? "todos" : s.toLowerCase()))
    }, s, s !== "todos" ? " (" + all.filter(function (c) {
      return c.seg.label.toLowerCase() === s.toLowerCase();
    }).length + ")" : "");
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#9CA3AF",
      marginBottom: 12
    }
  }, fil.length, " cliente", fil.length !== 1 ? "s" : ""), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setEtCli(null);
      setShowCM(true);
    },
    style: {
      width: "100%",
      padding: 14,
      background: "#1A5C47",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-user-plus",
    style: {
      fontSize: 20
    }
  }), "Nuevo cliente"), fil.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "48px 20px",
      color: "#9CA3AF"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-users",
    style: {
      fontSize: 44,
      display: "block",
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Sin resultados.")) : /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, fil.map(function (c) {
    var cp = pets.filter(function (p) {
      return p.clientId === c.id;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      onClick: function onClick() {
        return setSel(c);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "13px 16px",
        borderBottom: "1px solid #F3F4F6",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Av, {
      name: c.name,
      size: 40
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#6B7280"
      }
    }, c.phone)), /*#__PURE__*/React.createElement("span", {
      style: {
        background: c.seg.bg,
        color: c.seg.color,
        fontSize: 10,
        padding: "3px 8px",
        borderRadius: 8,
        fontWeight: 600,
        flexShrink: 0
      }
    }, c.seg.icon, " ", c.seg.label), /*#__PURE__*/React.createElement(Bdg, {
      label: cp.length + " mascotas",
      type: "gy"
    }), /*#__PURE__*/React.createElement("i", {
      className: "ti ti-chevron-right",
      style: {
        color: "#D1D5DB"
      }
    }));
  })), showCM && /*#__PURE__*/React.createElement(ClientModal, {
    et: etCli,
    onClose: function onClose() {
      setShowCM(false);
      setEtCli(null);
    },
    toast: toast
  }));
}
function MascotasScreen(_ref26) {
  var pets = _ref26.pets,
    clients = _ref26.clients,
    appts = _ref26.appts,
    lastBath = _ref26.lastBath,
    toast = _ref26.toast;
  var _useState85 = useState(""),
    _useState86 = _slicedToArray(_useState85, 2),
    search = _useState86[0],
    setSearch = _useState86[1];
  var _useState87 = useState("todos"),
    _useState88 = _slicedToArray(_useState87, 2),
    filter = _useState88[0],
    setFilter = _useState88[1];
  var _useState89 = useState(null),
    _useState90 = _slicedToArray(_useState89, 2),
    editPet = _useState90[0],
    setEditPet = _useState90[1];
  var _useState91 = useState(false),
    _useState92 = _slicedToArray(_useState91, 2),
    petMod = _useState92[0],
    setPetMod = _useState92[1];
  var _useState93 = useState(null),
    _useState94 = _slicedToArray(_useState93, 2),
    newPetCli = _useState94[0],
    setNewPetCli = _useState94[1];
  var _useState95 = useState(false),
    _useState96 = _slicedToArray(_useState95, 2),
    showNewPet = _useState96[0],
    setShowNewPet = _useState96[1];
  var _useState97 = useState("lista"),
    _useState98 = _slicedToArray(_useState97, 2),
    mainTab = _useState98[0],
    setMainTab = _useState98[1];
  var fil = pets.filter(function (p) {
    var cli = clients.find(function (c) {
      return c.id === p.clientId;
    });
    var q = search.toLowerCase();
    return (p.name.toLowerCase().includes(q) || (p.breed || "").toLowerCase().includes(q) || (cli ? cli.name.toLowerCase().includes(q) : false)) && (filter === "todos" || filter === "perros" && p.species !== "gato" || filter === "gatos" && p.species === "gato");
  }).sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  // Concentrado stats
  var concStats = {};
  pets.forEach(function (p) {
    if (p.concentrado && p.concentrado.trim()) {
      var k = p.concentrado.trim();
      concStats[k] = (concStats[k] || 0) + 1;
    }
  });
  var concList = Object.entries(concStats).sort(function (a, b) {
    return b[1] - a[1];
  });
  var tabS = function tabS(a) {
    return {
      padding: "7px 14px",
      borderRadius: 20,
      fontSize: 12,
      border: "1.5px solid " + (a ? "#1A5C47" : "#E5E7EB"),
      background: a ? "#1A5C47" : "#fff",
      color: a ? "#fff" : "#4B5563",
      cursor: "pointer",
      fontWeight: a ? 700 : 500,
      whiteSpace: "nowrap",
      flexShrink: 0
    };
  };
  var mTabS = function mTabS(a) {
    return {
      padding: "9px 16px",
      borderRadius: 20,
      fontSize: 13,
      border: "1.5px solid " + (a ? "#1A5C47" : "#E5E7EB"),
      background: a ? "#1A5C47" : "#fff",
      color: a ? "#fff" : "#4B5563",
      cursor: "pointer",
      fontWeight: a ? 700 : 500,
      whiteSpace: "nowrap",
      flexShrink: 0
    };
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 14,
      overflowX: "auto",
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: mTabS(mainTab === "lista"),
    onClick: function onClick() {
      return setMainTab("lista");
    }
  }, "Lista de mascotas"), /*#__PURE__*/React.createElement("span", {
    style: mTabS(mainTab === "concentrados"),
    onClick: function onClick() {
      return setMainTab("concentrados");
    }
  }, "Concentrados (", concList.length, ")")), mainTab === "concentrados" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#E8F5EB",
      border: "1px solid #86EFAC",
      borderRadius: 12,
      padding: "12px 14px",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#065F46",
      marginBottom: 4
    }
  }, "Concentrados registrados \u2014 ", pets.filter(function (p) {
    return p.concentrado && p.concentrado.trim();
  }).length, " mascotas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#6B7280"
    }
  }, "Resumen de qu\xE9 marcas consumen tus clientes")), concList.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px",
      color: "#9CA3AF"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Sin concentrados registrados a\xFAn.")) : concList.map(function (_ref27) {
    var _ref28 = _slicedToArray(_ref27, 2),
      name = _ref28[0],
      qty = _ref28[1];
    return /*#__PURE__*/React.createElement(Card, {
      key: name,
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22
      }
    }, "\uD83E\uDDB4"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#6B7280"
      }
    }, qty, " mascota", qty !== 1 ? "s" : "")), /*#__PURE__*/React.createElement("span", {
      style: {
        background: "#E8F5EB",
        color: "#065F46",
        fontWeight: 700,
        fontSize: 13,
        padding: "4px 12px",
        borderRadius: 10
      }
    }, qty)), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#F3F4F6",
        borderRadius: 6,
        height: 8,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: Math.round(qty / pets.length * 100) + "%",
        height: "100%",
        background: "#1A5C47",
        borderRadius: 6
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, pets.filter(function (p) {
      return p.concentrado === name;
    }).slice(0, 3).map(function (p) {
      var cli = clients.find(function (c) {
        return c.id === p.clientId;
      });
      return /*#__PURE__*/React.createElement("span", {
        key: p.id,
        style: {
          display: "inline-block",
          background: "#F3F4F6",
          borderRadius: 8,
          padding: "3px 8px",
          fontSize: 11,
          color: "#374151",
          marginRight: 5,
          marginBottom: 4
        }
      }, p.name, cli ? " · " + cli.name.split(" ")[0] : "");
    }), pets.filter(function (p) {
      return p.concentrado === name;
    }).length > 3 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "#9CA3AF"
      }
    }, "+", pets.filter(function (p) {
      return p.concentrado === name;
    }).length - 3, " m\xE1s")));
  })), mainTab === "lista" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setNewPetCli(null);
      setShowNewPet(true);
    },
    style: {
      width: "100%",
      padding: 14,
      background: "#1A5C47",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-paw",
    style: {
      fontSize: 20
    }
  }), "Nueva mascota"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-search",
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9CA3AF",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "Buscar mascota, raza o due\xF1o...",
    style: _objectSpread(_objectSpread({}, IS), {}, {
      paddingLeft: 36
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12,
      overflowX: "auto",
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tabS(filter === "todos"),
    onClick: function onClick() {
      return setFilter("todos");
    }
  }, "Todas (", pets.length, ")"), /*#__PURE__*/React.createElement("span", {
    style: tabS(filter === "perros"),
    onClick: function onClick() {
      return setFilter("perros");
    }
  }, "Perros (", pets.filter(function (p) {
    return p.species !== "gato";
  }).length, ")"), /*#__PURE__*/React.createElement("span", {
    style: tabS(filter === "gatos"),
    onClick: function onClick() {
      return setFilter("gatos");
    }
  }, "Gatos (", pets.filter(function (p) {
    return p.species === "gato";
  }).length, ")")), fil.map(function (p) {
    var cli = clients.find(function (c) {
      return c.id === p.clientId;
    });
    var lb = lastBath(p.id);
    var days = lb ? dBetween(lb, today()) : null;
    return /*#__PURE__*/React.createElement(Card, {
      key: p.id,
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: p.species === "gato" ? "#F3F0FF" : "#FAD9E0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22,
        flexShrink: 0
      }
    }, p.species === "gato" ? "🐱" : "🐶"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 700
      }
    }, p.name, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "#9CA3AF",
        fontWeight: 400
      }
    }, p.breed)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#6B7280"
      }
    }, p.age ? p.age + "a" : "", p.weight ? " · " + p.weight + "kg" : ""), p.concentrado && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        background: "#E8F5EB",
        color: "#065F46",
        fontWeight: 600,
        marginTop: 4,
        padding: "3px 8px",
        borderRadius: 6,
        display: "inline-block"
      }
    }, "\uD83E\uDDB4 ", p.concentrado), p.birthday && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: isBdayToday(p.birthday) ? "#EC4899" : "#9CA3AF",
        marginTop: 4
      }
    }, "\uD83C\uDF82 ", fmtBday(p.birthday), isBdayToday(p.birthday) ? " ¡HOY! 🎉" : ""), cli && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#9CA3AF",
        marginTop: 4
      }
    }, cli.name, " \xB7 ", cli.phone), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 5
      }
    }, /*#__PURE__*/React.createElement(LoyaltyCircles, {
      petId: p.id,
      appts: appts
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement(Bdg, {
      label: lb ? days + "d sin baño" : "Sin historial",
      type: !days || days >= 28 ? "rd" : "gr"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setEditPet(p);
        setPetMod(true);
      },
      style: {
        padding: "6px 10px",
        background: "#EFF6FF",
        color: "#1D4ED8",
        border: "none",
        borderRadius: 8,
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-edit"
    }), "Editar"), /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
        var _iterator6, _step6, a, _t13;
        return _regenerator().w(function (_context13) {
          while (1) switch (_context13.p = _context13.n) {
            case 0:
              if (window.confirm("Eliminar a " + p.name + "?")) {
                _context13.n = 1;
                break;
              }
              return _context13.a(2);
            case 1:
              _context13.n = 2;
              return fdel("pets", p.id);
            case 2:
              _iterator6 = _createForOfIteratorHelper(appts.filter(function (x) {
                return x.petId === p.id;
              }));
              _context13.p = 3;
              _iterator6.s();
            case 4:
              if ((_step6 = _iterator6.n()).done) {
                _context13.n = 6;
                break;
              }
              a = _step6.value;
              _context13.n = 5;
              return fdel("appts", a.id);
            case 5:
              _context13.n = 4;
              break;
            case 6:
              _context13.n = 8;
              break;
            case 7:
              _context13.p = 7;
              _t13 = _context13.v;
              _iterator6.e(_t13);
            case 8:
              _context13.p = 8;
              _iterator6.f();
              return _context13.f(8);
            case 9:
              toast("Eliminada");
            case 10:
              return _context13.a(2);
          }
        }, _callee11, null, [[3, 7, 8, 9]]);
      })),
      style: {
        padding: "6px 10px",
        background: "#FEE2E2",
        color: "#DC2626",
        border: "none",
        borderRadius: 8,
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-trash"
    }))))));
  }), petMod && editPet && /*#__PURE__*/React.createElement(PetModal, {
    clientId: editPet.clientId,
    et: editPet,
    onClose: function onClose() {
      setPetMod(false);
      setEditPet(null);
    },
    toast: toast
  }), showNewPet && /*#__PURE__*/React.createElement(PetModalNew, {
    clients: clients,
    onClose: function onClose() {
      return setShowNewPet(false);
    },
    toast: toast
  })));
}
function PetModalNew(_ref30) {
  var clients = _ref30.clients,
    onClose = _ref30.onClose,
    toast = _ref30.toast;
  var _useState99 = useState(""),
    _useState100 = _slicedToArray(_useState99, 2),
    clientId = _useState100[0],
    setClientId = _useState100[1];
  var _useState101 = useState({
      name: "",
      species: "perro",
      breed: "",
      age: "",
      weight: "",
      concentrado: "",
      birthday: "",
      notes: ""
    }),
    _useState102 = _slicedToArray(_useState101, 2),
    f = _useState102[0],
    sf = _useState102[1];
  var _useState103 = useState(false),
    _useState104 = _slicedToArray(_useState103, 2),
    sv = _useState104[0],
    ssv = _useState104[1];
  var u = function u(k, v) {
    return sf(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, v));
    });
  };
  var breeds = f.species === "gato" ? BCATS : BDOGS;
  var concs = f.species === "gato" ? CCATS : CDOGS;
  var save = /*#__PURE__*/function () {
    var _save8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
      var _t14;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            if (!(!f.name.trim() || !clientId)) {
              _context14.n = 1;
              break;
            }
            alert("Selecciona el cliente y escribe el nombre.");
            return _context14.a(2);
          case 1:
            ssv(true);
            _context14.p = 2;
            _context14.n = 3;
            return fadd("pets", _objectSpread(_objectSpread({}, f), {}, {
              clientId: clientId
            }));
          case 3:
            toast("Mascota registrada ✓");
            onClose();
            _context14.n = 5;
            break;
          case 4:
            _context14.p = 4;
            _t14 = _context14.v;
            alert(_t14.message);
          case 5:
            ssv(false);
          case 6:
            return _context14.a(2);
        }
      }, _callee12, null, [[2, 4]]);
    }));
    function save() {
      return _save8.apply(this, arguments);
    }
    return save;
  }();
  return /*#__PURE__*/React.createElement(Modal, {
    title: "Nueva mascota",
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BtnS, {
      onClick: onClose
    }, "Cancelar"), /*#__PURE__*/React.createElement(BtnP, {
      onClick: save,
      disabled: sv
    }, sv ? "Guardando..." : "Guardar"))
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Cliente due\xF1o *"
  }, /*#__PURE__*/React.createElement("select", {
    value: clientId,
    onChange: function onChange(e) {
      return setClientId(e.target.value);
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Seleccionar cliente..."), clients.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id,
      value: c.id
    }, c.name, " \xB7 ", c.phone);
  }))), /*#__PURE__*/React.createElement(Inp, {
    label: "Nombre mascota *"
  }, /*#__PURE__*/React.createElement("input", {
    value: f.name,
    onChange: function onChange(e) {
      return u("name", e.target.value);
    },
    placeholder: "Ej: Max",
    style: IS
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Especie"
  }, /*#__PURE__*/React.createElement("select", {
    value: f.species,
    onChange: function onChange(e) {
      u("species", e.target.value);
      u("breed", "");
      u("concentrado", "");
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: "perro"
  }, "\uD83D\uDC36 Perro"), /*#__PURE__*/React.createElement("option", {
    value: "gato"
  }, "\uD83D\uDC31 Gato"))), /*#__PURE__*/React.createElement(Inp, {
    label: "Raza"
  }, /*#__PURE__*/React.createElement("select", {
    value: f.breed,
    onChange: function onChange(e) {
      return u("breed", e.target.value);
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Seleccionar..."), breeds.map(function (b) {
    return /*#__PURE__*/React.createElement("option", {
      key: b
    }, b);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Inp, {
    label: "Edad (a\xF1os)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: f.age,
    onChange: function onChange(e) {
      return u("age", e.target.value);
    },
    min: 0,
    style: IS
  })), /*#__PURE__*/React.createElement(Inp, {
    label: "Peso (kg)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: f.weight,
    onChange: function onChange(e) {
      return u("weight", e.target.value);
    },
    step: 0.1,
    style: IS
  }))), /*#__PURE__*/React.createElement(Inp, {
    label: "\uD83E\uDDB4 Concentrado"
  }, /*#__PURE__*/React.createElement("select", {
    value: f.concentrado,
    onChange: function onChange(e) {
      return u("concentrado", e.target.value);
    },
    style: IS
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Sin registrar..."), concs.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c
    }, c);
  }))), /*#__PURE__*/React.createElement(Inp, {
    label: "\uD83C\uDF82 Fecha de cumplea\xF1os"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: f.birthday || "",
    onChange: function onChange(e) {
      return u("birthday", e.target.value);
    },
    style: IS
  })), /*#__PURE__*/React.createElement(Inp, {
    label: "Notas"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: f.notes,
    onChange: function onChange(e) {
      return u("notes", e.target.value);
    },
    placeholder: "Piel sensible, cuidados...",
    style: _objectSpread(_objectSpread({}, IS), {}, {
      resize: "vertical",
      minHeight: 60,
      fontFamily: "inherit"
    })
  })));
}
function SpaScreen(_ref31) {
  var appts = _ref31.appts,
    clients = _ref31.clients,
    pets = _ref31.pets,
    spaprices = _ref31.spaprices,
    cSvcs = _ref31.cSvcs,
    commission = _ref31.commission,
    toast = _ref31.toast;
  var _useState105 = useState("proximas"),
    _useState106 = _slicedToArray(_useState105, 2),
    filter = _useState106[0],
    setFilter = _useState106[1];
  var _useState107 = useState(""),
    _useState108 = _slicedToArray(_useState107, 2),
    dateF = _useState108[0],
    setDateF = _useState108[1];
  var _useState109 = useState(null),
    _useState110 = _slicedToArray(_useState109, 2),
    etA = _useState110[0],
    setEtA = _useState110[1];
  var _useState111 = useState(null),
    _useState112 = _slicedToArray(_useState111, 2),
    photoTgt = _useState112[0],
    setPhotoTgt = _useState112[1];
  var upd = /*#__PURE__*/function () {
    var _upd = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(id, status) {
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.n) {
          case 0:
            _context15.n = 1;
            return fupd("appts", id, {
              status: status
            });
          case 1:
            toast("Marcada como " + status + " ✓");
          case 2:
            return _context15.a(2);
        }
      }, _callee13);
    }));
    function upd(_x9, _x0) {
      return _upd.apply(this, arguments);
    }
    return upd;
  }();
  var prox = appts.filter(function (a) {
    return (a.status === "pendiente" || a.estado === "pendiente") && a.date >= today();
  }).sort(function (a, b) {
    return a.date.localeCompare(b.date) || a.time.localeCompare(b.time);
  });
  var hoyL = prox.filter(function (a) {
    return a.date === today();
  });
  var semL = prox.filter(function (a) {
    return a.date > today() && dBetween(today(), a.date) < 7;
  });
  var masL = prox.filter(function (a) {
    return dBetween(today(), a.date) >= 7;
  });
  var list = filter === "proximas" ? prox : filter === "completado" ? appts.filter(function (a) {
    return (a.status === "completado" || a.estado === "completado");
  }).sort(function (a, b) {
    return (b.date||b.fecha||"").localeCompare(a.date||a.fecha||"");
  }) : filter === "cancelado" ? appts.filter(function (a) {
    return (a.status === "cancelado" || a.estado === "cancelado");
  }).sort(function (a, b) {
    return (b.date||b.fecha||"").localeCompare(a.date||a.fecha||"");
  }) : appts.filter(function (a) {
    return !dateF || (a.date||a.fecha||"") === dateF;
  }).sort(function (a, b) {
    return b.date.localeCompare(a.date) || a.time.localeCompare(b.time);
  });
  var tabS = function tabS(a) {
    return {
      padding: "8px 14px",
      borderRadius: 20,
      fontSize: 12,
      border: "1.5px solid " + (a ? "#1A5C47" : "#E5E7EB"),
      background: a ? "#1A5C47" : "#fff",
      color: a ? "#fff" : "#4B5563",
      cursor: "pointer",
      fontWeight: a ? 700 : 500,
      whiteSpace: "nowrap",
      flexShrink: 0
    };
  };
  var ACard = function ACard(_ref32) {
    var a = _ref32.a;
    var pet = pets.find(function (p) {
      return p.id === a.petId;
    });
    var cli = clients.find(function (c) {
      return c.id === a.clientId;
    });
    var isHoy = a.date === today();
    var du = dBetween(today(), a.date);
    var comm = commission > 0 && a.price ? {
      comm: Math.round(Number(a.price) * commission / 100)
    } : null;
    return /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 10,
        borderLeft: isHoy ? "4px solid #1A5C47" : "1px solid #E5E7EB"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: isHoy ? "#1A5C47" : "#E8F5EB",
        borderRadius: 10,
        padding: "6px 8px",
        textAlign: "center",
        minWidth: 52,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: isHoy ? "#F2C4CE" : "#065F46",
        fontWeight: 700
      }
    }, isHoy ? "HOY" : a.date.slice(8) + "/" + a.date.slice(5, 7)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: isHoy ? "#fff" : "#0D3D2E",
        fontWeight: 800
      }
    }, a.time), !isHoy && du > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: "#9CA3AF"
      }
    }, "en ", du, "d")), /*#__PURE__*/React.createElement(Av, {
      name: pet ? pet.name : "?",
      size: 36,
      bg: "#FAD9E0",
      color: "#0D3D2E"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700
      }
    }, pet ? pet.name : "", " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "#9CA3AF",
        fontWeight: 400
      }
    }, pet ? pet.breed : "")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#6B7280"
      }
    }, cli ? cli.name : "", " \xB7 ", cli ? cli.phone : ""), a.services && a.services.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#9CA3AF",
        marginTop: 2
      }
    }, a.services.join(", "))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right",
        flexShrink: 0
      }
    }, a.price && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "#1A5C47"
      }
    }, fmtM(a.price)), comm && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: "#9CA3AF"
      }
    }, "Com: ", fmtM(comm.comm)), /*#__PURE__*/React.createElement(Bdg, {
      label: a.status,
      type: a.status === "completado" ? "gr" : a.status === "cancelado" ? "rd" : "am"
    }))), a.notes && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#6B7280",
        marginBottom: 10,
        background: "#F9FAFB",
        padding: "7px 10px",
        borderRadius: 8
      }
    }, a.notes), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 7,
        flexWrap: "wrap"
      }
    }, a.status === "pendiente" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return upd(a.id, "completado");
      },
      style: {
        padding: "8px 14px",
        borderRadius: 10,
        border: "none",
        fontSize: 12,
        fontWeight: 700,
        background: "#E8F5EB",
        color: "#065F46",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-check"
    }), "Completar"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return upd(a.id, "cancelado");
      },
      style: {
        padding: "8px 14px",
        borderRadius: 10,
        border: "none",
        fontSize: 12,
        fontWeight: 700,
        background: "#FEE2E2",
        color: "#DC2626",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-x"
    }), "Cancelar")), a.status === "completado" && cli && pet && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setPhotoTgt({
          client: cli,
          pet: pet
        });
      },
      style: {
        padding: "8px 14px",
        borderRadius: 10,
        border: "none",
        fontSize: 12,
        fontWeight: 700,
        background: "#0D3D2E",
        color: "#F2C4CE",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-camera"
    }), "Foto"), cli && pet && /*#__PURE__*/React.createElement("a", {
      href: waAppt(cli.name, pet.name, a.date, a.time, a.services, a.price),
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        padding: "8px 14px",
        borderRadius: 10,
        background: "#22C55E",
        color: "#fff",
        textDecoration: "none",
        fontSize: 12,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-brand-whatsapp"
    }), "WA"), cli && a.status === "pendiente" && /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/57" + cli.phone.replace(/[^0-9]/g, "") + "?text=" + encodeURIComponent("Hola " + cli.name + "! Recordatorio cita PawSociety: " + (pet ? pet.name : "") + " - " + fmt(a.date) + " " + a.time + (a.price ? " - " + fmtM(a.price) : "") + ". Cra 19 #22N-23 Armenia. Hasta pronto!"),
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        padding: "8px 14px",
        borderRadius: 10,
        background: "#F59E0B",
        color: "#fff",
        textDecoration: "none",
        fontSize: 12,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-bell"
    }), "Recordar"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setEtA(a);
      },
      style: {
        padding: "8px 14px",
        borderRadius: 10,
        border: "none",
        fontSize: 12,
        fontWeight: 700,
        background: "#EFF6FF",
        color: "#1D4ED8",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-edit"
    }), "Editar")));
  };
  return /*#__PURE__*/React.createElement("div", null, filter === "proximas" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#1A5C47",
      borderRadius: 12,
      padding: "12px 8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: "#fff"
    }
  }, hoyL.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#F2C4CE",
      marginTop: 2,
      fontWeight: 600
    }
  }, "Hoy")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#E8F5EB",
      borderRadius: 12,
      padding: "12px 8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: "#1A5C47"
    }
  }, semL.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#6B7280",
      marginTop: 2,
      fontWeight: 600
    }
  }, "Esta semana")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FBE9D6",
      borderRadius: 12,
      padding: "12px 8px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: "#D4945A"
    }
  }, masL.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#6B7280",
      marginTop: 2,
      fontWeight: 600
    }
  }, "M\xE1s adelante"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 10,
      overflowX: "auto",
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tabS(filter === "proximas"),
    onClick: function onClick() {
      return setFilter("proximas");
    }
  }, "Pr\xF3ximas", prox.length > 0 ? " (" + prox.length + ")" : ""), /*#__PURE__*/React.createElement("span", {
    style: tabS(filter === "completado"),
    onClick: function onClick() {
      return setFilter("completado");
    }
  }, "Completadas"), /*#__PURE__*/React.createElement("span", {
    style: tabS(filter === "cancelado"),
    onClick: function onClick() {
      return setFilter("cancelado");
    }
  }, "Canceladas"), /*#__PURE__*/React.createElement("span", {
    style: tabS(filter === "fecha"),
    onClick: function onClick() {
      return setFilter("fecha");
    }
  }, "Por fecha")), filter === "fecha" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: dateF,
    onChange: function onChange(e) {
      return setDateF(e.target.value);
    },
    style: IS,
    placeholder: "Desde"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setDateF("");
    },
    style: {
      padding: 11,
      background: "#F3F4F6",
      color: "#374151",
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Limpiar filtro")), filter === "proximas" ? list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "48px",
      color: "#9CA3AF"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-calendar-check",
    style: {
      fontSize: 44,
      display: "block",
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "No hay citas pendientes.")) : /*#__PURE__*/React.createElement(React.Fragment, null, hoyL.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(STit, null, "Hoy \u2014 ", fmt(today())), hoyL.map(function (a) {
    return /*#__PURE__*/React.createElement(ACard, {
      key: a.id,
      a: a
    });
  })), semL.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(STit, null, "Esta semana"), semL.map(function (a) {
    return /*#__PURE__*/React.createElement(ACard, {
      key: a.id,
      a: a
    });
  })), masL.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(STit, null, "M\xE1s adelante"), masL.map(function (a) {
    return /*#__PURE__*/React.createElement(ACard, {
      key: a.id,
      a: a
    });
  }))) : list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "48px",
      color: "#9CA3AF"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-calendar",
    style: {
      fontSize: 44,
      display: "block",
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Sin citas.")) : list.map(function (a) {
    return /*#__PURE__*/React.createElement(ACard, {
      key: a.id,
      a: a
    });
  }), etA && /*#__PURE__*/React.createElement(ApptModal, {
    et: etA,
    clients: clients,
    pets: pets,
    spaprices: spaprices,
    cSvcs: cSvcs,
    onClose: function onClose() {
      return setEtA(null);
    },
    toast: toast
  }), photoTgt && /*#__PURE__*/React.createElement(PhotoShare, {
    client: photoTgt.client,
    pet: photoTgt.pet,
    onClose: function onClose() {
      return setPhotoTgt(null);
    }
  }));
}
function TiendaScreen(_ref33) {
  var sales = _ref33.sales,
    clients = _ref33.clients,
    products = _ref33.products,
    toast = _ref33.toast;
  var _useState113 = useState(false),
    _useState114 = _slicedToArray(_useState113, 2),
    showSale = _useState114[0],
    setShowSale = _useState114[1];
  var _useState115 = useState(null),
    _useState116 = _slicedToArray(_useState115, 2),
    editSale = _useState116[0],
    setEditSale = _useState116[1];
  var _useState117 = useState(thisM()),
    _useState118 = _slicedToArray(_useState117, 2),
    mth = _useState118[0],
    setMth = _useState118[1];
  var mS = sales.filter(function (s) {
    return s.date && s.date.startsWith(mth);
  });
  var mT = mS.reduce(function (s, x) {
    return s + Number(x.total || 0);
  }, 0);
  var topP = {};
  mS.forEach(function (s) {
    return (s.items || []).forEach(function (i) {
      topP[i.name] = (topP[i.name] || 0) + i.qty;
    });
  });
  var top = Object.entries(topP).sort(function (a, b) {
    return b[1] - a[1];
  }).slice(0, 5);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(SC, {
    icon: "currency-dollar",
    label: "Ventas per\xEDodo",
    value: fmtM(mT),
    color: "#1A5C47"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "receipt",
    label: "Transacciones",
    value: mS.length,
    color: "#D4945A"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowSale(true);
    },
    style: {
      width: "100%",
      padding: 15,
      background: "#1A5C47",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-shopping-cart",
    style: {
      fontSize: 20
    }
  }), "Registrar nueva venta"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 10,
      marginBottom: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "month",
    value: mth,
    onChange: function onChange(e) {
      return setMth(e.target.value);
    },
    style: IS
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setMth(thisM());
    },
    style: {
      padding: "11px 14px",
      background: "#E8F5EB",
      color: "#1A5C47",
      border: "none",
      borderRadius: 10,
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer",
      whiteSpace: "nowrap"
    }
  }, "Este mes")), top.length > 0 && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Rt, {
    icon: "chart-bar"
  }, "M\xE1s vendidos"), top.map(function (_ref34) {
    var _ref35 = _slicedToArray(_ref34, 2),
      name = _ref35[0],
      qty = _ref35[1];
    return /*#__PURE__*/React.createElement("div", {
      key: name,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#4B5563",
        flex: 1,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 8,
        background: "#F3F4F6",
        borderRadius: 5,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        background: "#1A5C47",
        borderRadius: 5,
        width: Math.round(qty / top[0][1] * 100) + "%"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#9CA3AF",
        minWidth: 28,
        textAlign: "right",
        fontWeight: 600
      }
    }, qty));
  })), /*#__PURE__*/React.createElement(STit, null, "\xDAltimas ventas"), mS.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px",
      color: "#9CA3AF"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-shopping-bag",
    style: {
      fontSize: 40,
      display: "block",
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Sin ventas en este per\xEDodo.")) : /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, mS.sort(function (a, b) {
    return (b.date||b.fecha||"").localeCompare(a.date||a.fecha||"");
  }).map(function (s) {
    var cli = clients.find(function (c) {
      return c.id === s.clientId;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        borderBottom: "1px solid #F3F4F6"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        background: "#F3F4F6",
        color: "#374151",
        borderRadius: 8,
        padding: "4px 6px",
        textAlign: "center",
        flexShrink: 0
      }
    }, fmt(s.date), /*#__PURE__*/React.createElement("br", null), s.time || ""), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, cli ? cli.name : "Venta directa"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#9CA3AF"
      }
    }, s.items ? s.items.map(function (i) {
      return i.qty + "x " + i.name;
    }).join(", ") : ""), s.discount > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#D4945A",
        fontWeight: 600
      }
    }, "Descuento: ", s.discount, "%")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "#1A5C47",
        flexShrink: 0
      }
    }, fmtM(s.total))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        padding: "0 16px 10px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setEditSale(s);
      },
      style: {
        padding: "5px 10px",
        background: "#EFF6FF",
        color: "#1D4ED8",
        border: "none",
        borderRadius: 8,
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-edit"
    }), "Editar"), /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
        var _iterator7, _step7, _loop3, _t15;
        return _regenerator().w(function (_context17) {
          while (1) switch (_context17.p = _context17.n) {
            case 0:
              if (window.confirm("Eliminar esta venta de " + fmtM(s.total) + "?")) {
                _context17.n = 1;
                break;
              }
              return _context17.a(2);
            case 1:
              _context17.n = 2;
              return fdel("sales", s.id);
            case 2:
              _iterator7 = _createForOfIteratorHelper(s.items || []);
              _context17.p = 3;
              _loop3 = /*#__PURE__*/_regenerator().m(function _loop3() {
                var item, prod;
                return _regenerator().w(function (_context16) {
                  while (1) switch (_context16.n) {
                    case 0:
                      item = _step7.value;
                      prod = products.find(function (p) {
                        return p.id === item.productId;
                      });
                      if (!prod) {
                        _context16.n = 1;
                        break;
                      }
                      _context16.n = 1;
                      return fupd("products", item.productId, {
                        stock: Number(prod.stock || 0) + item.qty
                      });
                    case 1:
                      return _context16.a(2);
                  }
                }, _loop3);
              });
              _iterator7.s();
            case 4:
              if ((_step7 = _iterator7.n()).done) {
                _context17.n = 6;
                break;
              }
              return _context17.d(_regeneratorValues(_loop3()), 5);
            case 5:
              _context17.n = 4;
              break;
            case 6:
              _context17.n = 8;
              break;
            case 7:
              _context17.p = 7;
              _t15 = _context17.v;
              _iterator7.e(_t15);
            case 8:
              _context17.p = 8;
              _iterator7.f();
              return _context17.f(8);
            case 9:
              toast("Venta eliminada");
            case 10:
              return _context17.a(2);
          }
        }, _callee14, null, [[3, 7, 8, 9]]);
      })),
      style: {
        padding: "5px 10px",
        background: "#FEE2E2",
        color: "#DC2626",
        border: "none",
        borderRadius: 8,
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-trash"
    }), "Eliminar"), cli && /*#__PURE__*/React.createElement("a", {
      href: waReceipt(cli.name, s.items || [], s.total),
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        padding: "5px 10px",
        background: "#E8F5EB",
        color: "#065F46",
        textDecoration: "none",
        borderRadius: 8,
        fontSize: 11,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-brand-whatsapp"
    }), "Recibo")));
  })), showSale && /*#__PURE__*/React.createElement(SaleModal, {
    clients: clients,
    products: products,
    onClose: function onClose() {
      return setShowSale(false);
    },
    toast: toast
  }), editSale && /*#__PURE__*/React.createElement(EditSaleModal, {
    sale: editSale,
    clients: clients,
    onClose: function onClose() {
      return setEditSale(null);
    },
    toast: toast
  }));
}
function CatalogoScreen(_ref37) {
  var products = _ref37.products,
    toast = _ref37.toast;
  var _useState119 = useState("todos"),
    _useState120 = _slicedToArray(_useState119, 2),
    catF = _useState120[0],
    setCatF = _useState120[1];
  var _useState121 = useState(""),
    _useState122 = _slicedToArray(_useState121, 2),
    search = _useState122[0],
    setSearch = _useState122[1];
  var _useState123 = useState(false),
    _useState124 = _slicedToArray(_useState123, 2),
    showP = _useState124[0],
    setShowP = _useState124[1];
  var _useState125 = useState(null),
    _useState126 = _slicedToArray(_useState125, 2),
    editP = _useState126[0],
    setEditP = _useState126[1];
  var fil = products.filter(function (p) {
    return p.active !== false && (catF === "todos" || p.category === catF) && (p.name.toLowerCase().includes(search.toLowerCase()) || (p.brand || "").toLowerCase().includes(search.toLowerCase()));
  });
  var low = products.filter(function (p) {
    return p.active !== false && Number(p.stock || 0) <= Number(p.minStock || 3);
  });
  var tabS = function tabS(a) {
    return {
      padding: "6px 12px",
      borderRadius: 20,
      fontSize: 11,
      border: "1.5px solid " + (a ? "#1A5C47" : "#E5E7EB"),
      background: a ? "#1A5C47" : "#fff",
      color: a ? "#fff" : "#4B5563",
      cursor: "pointer",
      fontWeight: a ? 700 : 500,
      whiteSpace: "nowrap",
      flexShrink: 0
    };
  };
  var catIcon = {
    Concentrados: "🦴",
    Snacks: "🍖",
    Medicamentos: "💊",
    "Juguetería": "🎾",
    Accesorios: "🎀",
    Higiene: "🧴",
    Spa: "🛁",
    Otros: "📦"
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(SC, {
    icon: "package",
    label: "Productos activos",
    value: products.filter(function (p) {
      return p.active !== false;
    }).length,
    color: "#1A5C47"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "alert-triangle",
    label: "Stock bajo",
    value: low.length,
    color: low.length > 0 ? "#DC2626" : "#059669",
    accent: low.length > 0 ? "#DC2626" : "#059669"
  })), low.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FEE2E2",
      border: "1px solid #EF4444",
      borderRadius: 12,
      padding: "12px 14px",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "#991B1B",
      marginBottom: 6
    }
  }, "Stock bajo"), low.map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        fontSize: 12,
        color: "#B91C1C",
        marginBottom: 2
      }
    }, "\u2022 ", p.name, " \u2014 ", p.stock || 0, " ", p.unit || "ud", " (m\xEDn: ", p.minStock || 3, ")");
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setEditP(null);
      setShowP(true);
    },
    style: {
      width: "100%",
      padding: 13,
      background: "#1A5C47",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-plus"
  }), "Agregar producto"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-search",
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9CA3AF",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "Buscar producto...",
    style: _objectSpread(_objectSpread({}, IS), {}, {
      paddingLeft: 36
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 12,
      overflowX: "auto",
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tabS(catF === "todos"),
    onClick: function onClick() {
      return setCatF("todos");
    }
  }, "Todos"), PRODUCT_CATS.map(function (c) {
    return /*#__PURE__*/React.createElement("span", {
      key: c,
      style: tabS(catF === c),
      onClick: function onClick() {
        return setCatF(c);
      }
    }, c);
  })), fil.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px",
      color: "#9CA3AF"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-package",
    style: {
      fontSize: 40,
      display: "block",
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Sin productos.")) : /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, fil.map(function (p) {
    var lo = Number(p.stock || 0) <= Number(p.minStock || 3);
    var mg = p.salePrice && p.costPrice ? Math.round((1 - Number(p.costPrice) / Number(p.salePrice)) * 100) : null;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        borderBottom: "1px solid #F3F4F6",
        borderLeft: lo ? "3px solid #EF4444" : "3px solid transparent"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 10,
        background: lo ? "#FEE2E2" : "#E8F5EB",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        flexShrink: 0
      }
    }, catIcon[p.category] || "📦"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: "#9CA3AF"
      }
    }, p.brand, " \xB7 ", p.category), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 3,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: "#1A5C47"
      }
    }, fmtM(p.salePrice)), mg !== null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "#6B7280"
      }
    }, "Margen ", mg, "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: lo ? "#DC2626" : "#6B7280",
        fontWeight: lo ? 700 : 400
      }
    }, "Stock: ", p.stock || 0, lo ? " ⚠️" : ""))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15() {
        var qty, ns;
        return _regenerator().w(function (_context18) {
          while (1) switch (_context18.n) {
            case 0:
              qty = Number(window.prompt("Cuántas unidades agregar al stock de " + p.name + "?", ""));
              if (!(!qty || qty < 1)) {
                _context18.n = 1;
                break;
              }
              return _context18.a(2);
            case 1:
              ns = Number(p.stock || 0) + qty;
              _context18.n = 2;
              return fupd("products", p.id, {
                stock: ns
              });
            case 2:
              _context18.n = 3;
              return fadd("stockMovements", {
                productId: p.id,
                type: "entrada",
                qty: qty,
                date: today(),
                ref: "Entrada manual"
              });
            case 3:
              toast("+" + qty + " al stock ✓");
            case 4:
              return _context18.a(2);
          }
        }, _callee15);
      })),
      style: {
        padding: "6px 10px",
        background: "#E8F5EB",
        color: "#065F46",
        border: "none",
        borderRadius: 8,
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer",
        whiteSpace: "nowrap"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-plus"
    }), "Stock"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setEditP(p);
        setShowP(true);
      },
      style: {
        padding: "6px 10px",
        background: "#EFF6FF",
        color: "#1D4ED8",
        border: "none",
        borderRadius: 8,
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-edit"
    })), /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
        return _regenerator().w(function (_context19) {
          while (1) switch (_context19.n) {
            case 0:
              if (window.confirm("Eliminar?")) {
                _context19.n = 1;
                break;
              }
              return _context19.a(2);
            case 1:
              _context19.n = 2;
              return fdel("products", p.id);
            case 2:
              toast("Eliminado");
            case 3:
              return _context19.a(2);
          }
        }, _callee16);
      })),
      style: {
        padding: "6px 10px",
        background: "#FEE2E2",
        color: "#DC2626",
        border: "none",
        borderRadius: 8,
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-trash"
    }))));
  })), showP && /*#__PURE__*/React.createElement(ProductModal, {
    et: editP,
    onClose: function onClose() {
      setShowP(false);
      setEditP(null);
    },
    toast: toast
  }));
}
function FinanzasScreen(_ref40) {
  var expenses = _ref40.expenses,
    appts = _ref40.appts,
    sales = _ref40.sales,
    toast = _ref40.toast,
    _ref40$clients = _ref40.clients,
    clients = _ref40$clients === void 0 ? [] : _ref40$clients,
    _ref40$pets = _ref40.pets,
    pets = _ref40$pets === void 0 ? [] : _ref40$pets;
  var _useState127 = useState("gastos"),
    _useState128 = _slicedToArray(_useState127, 2),
    tab = _useState128[0],
    setTab = _useState128[1];
  var _useState129 = useState(false),
    _useState130 = _slicedToArray(_useState129, 2),
    showE = _useState130[0],
    setShowE = _useState130[1];
  var _useState131 = useState(null),
    _useState132 = _slicedToArray(_useState131, 2),
    editE = _useState132[0],
    setEditE = _useState132[1];
  var _useState133 = useState(0),
    _useState134 = _slicedToArray(_useState133, 2),
    meta = _useState134[0],
    setMeta = _useState134[1];
  var mExp = expenses.filter(function (e) {
    return e.date && e.date.startsWith(thisM());
  });
  var spaI = appts.filter(function (a) {
    return a.status === "completado" && a.date && a.date.startsWith(thisM());
  }).reduce(function (s, a) {
    return s + Number(a.price || 0);
  }, 0);
  var storeI = sales.filter(function (s) {
    return s.date && s.date.startsWith(thisM());
  }).reduce(function (s, x) {
    return s + Number(x.total || 0);
  }, 0);
  var be = calcBE(mExp, spaI, storeI);
  var tabS = function tabS(a) {
    return {
      padding: "8px 16px",
      borderRadius: 20,
      fontSize: 12,
      border: "1.5px solid " + (a ? "#1A5C47" : "#E5E7EB"),
      background: a ? "#1A5C47" : "#fff",
      color: a ? "#fff" : "#4B5563",
      cursor: "pointer",
      fontWeight: a ? 700 : 500,
      whiteSpace: "nowrap",
      flexShrink: 0
    };
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 14,
      overflowX: "auto",
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tabS(tab === "caja"),
    onClick: function onClick() {
      return setTab("caja");
    }
  }, "Caja del d\xEDa"), /*#__PURE__*/React.createElement("span", {
    style: tabS(tab === "gastos"),
    onClick: function onClick() {
      return setTab("gastos");
    }
  }, "Gastos"), /*#__PURE__*/React.createElement("span", {
    style: tabS(tab === "equilibrio"),
    onClick: function onClick() {
      return setTab("equilibrio");
    }
  }, "Punto de equilibrio"), /*#__PURE__*/React.createElement("span", {
    style: tabS(tab === "pyl"),
    onClick: function onClick() {
      return setTab("pyl");
    }
  }, "P&L del mes"), /*#__PURE__*/React.createElement("span", {
    style: tabS(tab === "exportar"),
    onClick: function onClick() {
      return setTab("exportar");
    }
  }, "Exportar")), tab === "caja" && function () {
    var todaySpa = appts.filter(function (a) {
      return a.date === today() && a.status === "completado";
    });
    var todayStore = sales.filter(function (s) {
      return s.date === today();
    });
    var todayExp = expenses.filter(function (e) {
      return e.date === today();
    });
    var spaT = todaySpa.reduce(function (s, a) {
      return s + Number(a.price || 0);
    }, 0);
    var storeT = todayStore.reduce(function (s, x) {
      return s + Number(x.total || 0);
    }, 0);
    var expT = todayExp.reduce(function (s, e) {
      return s + Number(e.amount || 0);
    }, 0);
    var total = spaT + storeT;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "linear-gradient(135deg,#0D3D2E,#1A5C47)",
        borderRadius: 16,
        padding: 20,
        color: "#fff",
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        opacity: .75,
        marginBottom: 4
      }
    }, "Caja del d\xEDa \u2014 ", fmt(today())), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 36,
        fontWeight: 800
      }
    }, fmtM(total)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        opacity: .75,
        marginTop: 4
      }
    }, "Gastos del d\xEDa: ", fmtM(expT), " \xB7 Neto: ", fmtM(total - expT))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(SC, {
      icon: "bath",
      label: "Spa hoy",
      value: fmtM(spaT),
      sub: todaySpa.length + " servicios",
      color: "#1A5C47"
    }), /*#__PURE__*/React.createElement(SC, {
      icon: "shopping-bag",
      label: "Tienda hoy",
      value: fmtM(storeT),
      sub: todayStore.length + " ventas",
      color: "#059669"
    })), todaySpa.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement(STit, null, "Spa hoy (" + todaySpa.length + ")"), todaySpa.map(function (a) {
      var cli = clients.find(function (c) {
        return c.id === a.clientId;
      });
      var pet = pets.find(function (p) {
        return p.id === a.petId;
      });
      return /*#__PURE__*/React.createElement("div", {
        key: a.id,
        style: {
          display: "flex",
          justifyContent: "space-between",
          padding: "8px 0",
          borderBottom: "1px solid #F3F4F6"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13
        }
      }, pet ? pet.name : "", " \xB7 ", cli ? cli.name : ""), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: 700,
          color: "#1A5C47"
        }
      }, fmtM(a.price)));
    })), todayStore.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement(STit, null, "Tienda hoy (" + todayStore.length + ")"), todayStore.map(function (s) {
      var cli = clients.find(function (c) {
        return c.id === s.clientId;
      });
      return /*#__PURE__*/React.createElement("div", {
        key: s.id,
        style: {
          display: "flex",
          justifyContent: "space-between",
          padding: "8px 0",
          borderBottom: "1px solid #F3F4F6"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13
        }
      }, cli ? cli.name : "Directa"), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: 700,
          color: "#1A5C47"
        }
      }, fmtM(s.total)));
    })));
  }(), tab === "exportar" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#E8F5EB",
      border: "1px solid #86EFAC",
      borderRadius: 12,
      padding: "14px 16px",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#065F46",
      marginBottom: 4
    }
  }, "Exportar datos para el contador"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#6B7280"
    }
  }, "Descarga un archivo CSV con todos los ingresos (spa + tienda) y gastos registrados.")), /*#__PURE__*/React.createElement(SC, {
    icon: "currency-dollar",
    label: "Total ingresos registrados",
    value: fmtM(appts.filter(function (a) {
      return (a.status === "completado" || a.estado === "completado");
    }).reduce(function (s, a) {
      return s + Number(a.price || 0);
    }, 0) + sales.reduce(function (s, x) {
      return s + Number(x.total || 0);
    }, 0)),
    color: "#059669"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(SC, {
    icon: "receipt",
    label: "Total gastos registrados",
    value: fmtM(expenses.reduce(function (s, e) {
      return s + Number(e.amount || 0);
    }, 0)),
    color: "#DC2626"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return exportCSV(appts, sales, expenses, clients, pets);
    },
    style: {
      width: "100%",
      padding: 15,
      background: "#1A5C47",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-download",
    style: {
      fontSize: 20
    }
  }), "Descargar CSV completo"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return exportCSV(appts.filter(function (a) {
        return a.status === "completado" && a.date && a.date.startsWith(thisM());
      }), sales.filter(function (s) {
        return s.date && s.date.startsWith(thisM());
      }), expenses.filter(function (e) {
        return e.date && e.date.startsWith(thisM());
      }), clients, pets);
    },
    style: {
      padding: 13,
      background: "#E8F5EB",
      color: "#065F46",
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "CSV este mes"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return exportCSV(appts.filter(function (a) {
        return (a.status === "completado" || a.estado === "completado");
      }), sales, expenses, clients, pets);
    },
    style: {
      padding: 13,
      background: "#EFF6FF",
      color: "#1D4ED8",
      border: "none",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "CSV completo")))), tab === "gastos" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setEditE(null);
      setShowE(true);
    },
    style: {
      width: "100%",
      padding: 13,
      background: "#1A5C47",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-plus"
  }), "Registrar gasto"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(SC, {
    icon: "lock",
    label: "Gastos fijos",
    value: fmtM(be.fix),
    color: "#DC2626"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "arrows-shuffle",
    label: "Gastos variables",
    value: fmtM(be.vari),
    color: "#F59E0B"
  })), mExp.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px",
      color: "#9CA3AF"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-receipt",
    style: {
      fontSize: 40,
      display: "block",
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Sin gastos registrados este mes.")) : /*#__PURE__*/React.createElement(React.Fragment, null, ["fijo", "variable"].map(function (tipo) {
    var g = mExp.filter(function (e) {
      return e.type === tipo;
    });
    if (!g.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: tipo
    }, /*#__PURE__*/React.createElement(STit, null, tipo === "fijo" ? "Gastos fijos" : "Gastos variables", " \u2014 ", fmtM(g.reduce(function (s, e) {
      return s + Number(e.amount || 0);
    }, 0))), /*#__PURE__*/React.createElement(Card, {
      style: {
        padding: 0
      }
    }, g.map(function (e) {
      return /*#__PURE__*/React.createElement("div", {
        key: e.id,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "11px 16px",
          borderBottom: "1px solid #F3F4F6"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          fontWeight: 600
        }
      }, e.name), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          color: "#9CA3AF"
        }
      }, e.category, " \xB7 ", fmt(e.date))), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14,
          fontWeight: 700,
          color: "#DC2626"
        }
      }, fmtM(e.amount)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 5
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          setEditE(e);
          setShowE(true);
        },
        style: {
          padding: "5px 9px",
          background: "#EFF6FF",
          color: "#1D4ED8",
          border: "none",
          borderRadius: 7,
          fontSize: 11,
          cursor: "pointer"
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "ti ti-edit"
      })), /*#__PURE__*/React.createElement("button", {
        onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17() {
          return _regenerator().w(function (_context20) {
            while (1) switch (_context20.n) {
              case 0:
                if (window.confirm("Eliminar?")) {
                  _context20.n = 1;
                  break;
                }
                return _context20.a(2);
              case 1:
                _context20.n = 2;
                return fdel("expenses", e.id);
              case 2:
                toast("Eliminado");
              case 3:
                return _context20.a(2);
            }
          }, _callee17);
        })),
        style: {
          padding: "5px 9px",
          background: "#FEE2E2",
          color: "#DC2626",
          border: "none",
          borderRadius: 7,
          fontSize: 11,
          cursor: "pointer"
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "ti ti-trash"
      }))));
    })));
  })), showE && /*#__PURE__*/React.createElement(ExpenseModal, {
    et: editE,
    onClose: function onClose() {
      setShowE(false);
      setEditE(null);
    },
    toast: toast
  })), tab === "equilibrio" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#0D3D2E,#1A5C47)",
      borderRadius: 16,
      padding: 20,
      color: "#fff",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: .75,
      marginBottom: 4
    }
  }, "Punto de equilibrio mensual"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      marginBottom: 8
    }
  }, fmtM(be.be)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,.15)",
      borderRadius: 8,
      height: 12,
      marginBottom: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: be.prog + "%",
      height: "100%",
      background: "#F2C4CE",
      borderRadius: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      opacity: .85
    }
  }, /*#__PURE__*/React.createElement("span", null, "Llevas: ", fmtM(be.total), " (", be.prog, "%)"), /*#__PURE__*/React.createElement("span", null, be.prog < 100 ? "Faltan: " + fmtM(be.rem) : "Superado!"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(SC, {
    icon: "lock",
    label: "Gastos fijos",
    value: fmtM(be.fix),
    color: "#DC2626"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "arrows-shuffle",
    label: "Gastos variables",
    value: fmtM(be.vari),
    color: "#F59E0B"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "bath",
    label: "Ingresos spa",
    value: fmtM(spaI),
    color: "#1A5C47"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "shopping-bag",
    label: "Ingresos tienda",
    value: fmtM(storeI),
    color: "#059669"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Rt, {
    icon: "target"
  }, "Meta mensual de ventas"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "#6B7280",
      marginBottom: 10
    }
  }, "Define cu\xE1nto quieres ganar por encima del punto de equilibrio:"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: meta,
    onChange: function onChange(e) {
      return setMeta(Number(e.target.value));
    },
    placeholder: "Ej: 3000000",
    style: _objectSpread(_objectSpread({}, IS), {}, {
      marginBottom: 12
    })
  }), meta > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#E8F5EB",
      borderRadius: 10,
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#065F46",
      marginBottom: 4
    }
  }, "Meta: ", fmtM(meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#065F46"
    }
  }, "Punto equilibrio: ", fmtM(be.be)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#065F46"
    }
  }, "Utilidad esperada: ", fmtM(meta - be.be)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#D1FAE5",
      borderRadius: 6,
      height: 8,
      marginTop: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.min(Math.round(be.total / meta * 100), 100) + "%",
      height: "100%",
      background: "#1A5C47",
      borderRadius: 6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#065F46",
      marginTop: 4,
      fontWeight: 600
    }
  }, "Progreso: ", Math.min(Math.round(be.total / meta * 100), 100), "%")))), tab === "pyl" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,#0D3D2E,#1A5C47)",
      borderRadius: 16,
      padding: 20,
      color: "#fff",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      opacity: .75,
      marginBottom: 4
    }
  }, "Resultado del mes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 800,
      color: be.total - be.fix - be.vari >= 0 ? "#86EFAC" : "#FCA5A5"
    }
  }, fmtM(be.total - be.fix - be.vari)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: .75,
      marginTop: 4
    }
  }, be.total - be.fix - be.vari >= 0 ? "Utilidad" : "Pérdida")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SC, {
    icon: "arrow-up-circle",
    label: "Total ingresos",
    value: fmtM(be.total),
    color: "#059669"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "arrow-down-circle",
    label: "Total gastos",
    value: fmtM(be.fix + be.vari),
    color: "#DC2626"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "bath",
    label: "Spa",
    value: fmtM(spaI),
    color: "#1A5C47"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "shopping-bag",
    label: "Tienda",
    value: fmtM(storeI),
    color: "#1A5C47"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "lock",
    label: "Gastos fijos",
    value: fmtM(be.fix),
    color: "#DC2626"
  }), /*#__PURE__*/React.createElement(SC, {
    icon: "arrows-shuffle",
    label: "Gastos variables",
    value: fmtM(be.vari),
    color: "#F59E0B"
  }))));
}
function AlertasScreen(_ref42) {
  var pets = _ref42.pets,
    clients = _ref42.clients,
    appts = _ref42.appts,
    lastBath = _ref42.lastBath,
    toast = _ref42.toast;
  var _useState135 = useState(null),
    _useState136 = _slicedToArray(_useState135, 2),
    etA = _useState136[0],
    setEtA = _useState136[1];
  var due = pets.filter(function (p) {
    var lb = lastBath(p.id);
    return !lb || dBetween(lb, today()) >= 28;
  });
  var loyal = pets.filter(function (p) {
    try {
      return getLoyalty(p.id, appts).hasFree;
    } catch (e) {
      return false;
    }
  });
  var bdayToday = pets.filter(function (p) {
    try {
      return p.birthday && isBdayToday(p.birthday);
    } catch (e) {
      return false;
    }
  });
  var bdaySoon = pets.filter(function (p) {
    try {
      var d = bdayDays(p.birthday);
      return p.birthday && !isBdayToday(p.birthday) && d !== null && d <= 7;
    } catch (e) {
      return false;
    }
  });
  var preSoon = [];
  try {
    preSoon = pets.filter(function(p) {
      try {
        var _lb = lastBath(p.id);
        if (!_lb) return false;
        var _d2 = dBetween(_lb, today());
        return _d2 >= 22 && _d2 < 28;
      } catch(e) { return false; }
    });
  } catch(e) { preSoon = []; }
  return /*#__PURE__*/React.createElement("div", null, loyal.length > 0 && /*#__PURE__*/React.createElement(Card, {
    style: {
      background: "#FBE9D6",
      border: "1.5px solid #D4945A",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Rt, {
    icon: "trophy",
    color: "#D4945A"
  }, "Ba\xF1os gratis ganados (", loyal.length, ")"), loyal.map(function (p) {
    var cli = clients.find(function (c) {
      return c.id === p.clientId;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "7px 0",
        borderBottom: "1px solid rgba(212,148,90,.2)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, "\uD83D\uDEC1"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700
      }
    }, p.name, " \u2014 6 ba\xF1os completados"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#92400E"
      }
    }, cli ? cli.name + " · " + cli.phone : "")), /*#__PURE__*/React.createElement("span", {
      style: {
        background: "#D4945A",
        color: "#fff",
        fontSize: 11,
        padding: "3px 9px",
        borderRadius: 10,
        fontWeight: 700
      }
    }, "GRATIS"));
  })), (bdayToday.length > 0 || bdaySoon.length > 0) && /*#__PURE__*/React.createElement(Card, {
    style: {
      background: "#FDF2F8",
      border: "1.5px solid #EC4899",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Rt, {
    icon: "cake",
    color: "#EC4899"
  }, "Cumplea\xF1os \u2014 Ba\xF1o gratis"), [].concat(_toConsumableArray(bdayToday), _toConsumableArray(bdaySoon)).map(function (p) {
    var cli = clients.find(function (c) {
      return c.id === p.clientId;
    });
    var d = bdayDays(p.birthday);
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "7px 0",
        borderBottom: "1px solid rgba(236,72,153,.2)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, isBdayToday(p.birthday) ? "🎉" : "🎂"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700
      }
    }, p.name, " ", isBdayToday(p.birthday) ? "— HOY!" : "— en " + d + "d"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#9D174D"
      }
    }, cli ? cli.name : "")), /*#__PURE__*/React.createElement("span", {
      style: {
        background: "#EC4899",
        color: "#fff",
        fontSize: 11,
        padding: "3px 9px",
        borderRadius: 10,
        fontWeight: 700
      }
    }, "Gratis"));
  })), preSoon.length > 0 && /*#__PURE__*/React.createElement(Card, {
    style: {
      background: "#FFFBEB",
      border: "1.5px solid #F59E0B",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Rt, {
    icon: "clock",
    color: "#F59E0B"
  }, "Pr\xF3ximos a vencer \u2014 Reagenda ahora (", preSoon.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#92400E",
      marginBottom: 10
    }
  }, "Llevan 22-27 d\xEDas sin ba\xF1o. Cont\xE1ctalos antes de que lleguen a 28."), preSoon.map(function (p) {
    var lb = lastBath(p.id);
    var days = lb ? dBetween(lb, today()) : null;
    var cli = clients.find(function (c) {
      return c.id === p.clientId;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 0",
        borderBottom: "1px solid rgba(245,158,11,.2)"
      }
    }, /*#__PURE__*/React.createElement(Av, {
      name: p.name,
      size: 36,
      bg: "#FFFBEB",
      color: "#D4945A"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#6B7280"
      }
    }, cli ? cli.name + " · " + cli.phone : "")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: "#D97706",
        marginRight: 6
      }
    }, days, "d"), cli && /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/57" + cli.phone.replace(/[^0-9]/g, "") + "?text=" + encodeURIComponent("Hola " + cli.name + "! Ya es momento de agendar el baño de " + p.name + " en PawSociety. Nos quedan horarios disponibles esta semana. Lo agendamos? 317 469 9764"),
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        padding: "7px 12px",
        background: "#F59E0B",
        color: "#fff",
        textDecoration: "none",
        borderRadius: 8,
        fontSize: 11,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        gap: 4,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-brand-whatsapp"
    }), "WA"));
  })), due.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FBE9D6",
      border: "1.5px solid #D4945A",
      borderRadius: 12,
      padding: "12px 14px",
      marginBottom: 14,
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-bell",
    style: {
      fontSize: 20,
      color: "#D4945A",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "#92400E"
    }
  }, due.length, " mascota", due.length !== 1 ? "s necesitan" : " necesita", " ba\xF1o"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#B45309"
    }
  }, "Sin ba\xF1o en m\xE1s de 28 d\xEDas"))), due.length === 0 && loyal.length === 0 && bdayToday.length === 0 && bdaySoon.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "48px",
      color: "#9CA3AF"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-check",
    style: {
      fontSize: 44,
      color: "#22C55E",
      display: "block",
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Todo al d\xEDa! Sin alertas.")) : due.map(function (p) {
    var lb = lastBath(p.id);
    var days = lb ? dBetween(lb, today()) : null;
    var cli = clients.find(function (c) {
      return c.id === p.clientId;
    });
    return /*#__PURE__*/React.createElement(Card, {
      key: p.id,
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Av, {
      name: p.name,
      size: 42,
      bg: "#FBE9D6",
      color: "#D4945A"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700
      }
    }, p.name, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "#9CA3AF"
      }
    }, p.breed)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "#6B7280"
      }
    }, cli ? cli.name + " · " + cli.phone : ""), p.concentrado && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#1A5C47",
        fontWeight: 600
      }
    }, "\uD83E\uDDB4 ", p.concentrado), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#9CA3AF"
      }
    }, lb ? "Último: " + fmt(lb) : "Sin historial")), /*#__PURE__*/React.createElement(Bdg, {
      label: !days ? "Sin historial" : days + "d",
      type: !days || days > 60 ? "rd" : "am"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setEtA({
          clientId: p.clientId,
          petId: p.id
        });
      },
      style: {
        flex: 1,
        padding: "11px",
        background: "#1A5C47",
        color: "#fff",
        border: "none",
        borderRadius: 12,
        fontSize: 13,
        fontWeight: 700,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-calendar-plus"
    }), "Agendar"), cli && /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/57" + cli.phone.replace(/[^0-9]/g, "") + "?text=" + encodeURIComponent("Hola " + cli.name + "! 🐾 " + p.name + " lleva " + (days || "varios") + " días sin baño. Lo agendamos? 📍 Cra 19 #22N-23 · 317 469 9764"),
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        padding: "11px 14px",
        background: "#22C55E",
        color: "#fff",
        textDecoration: "none",
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-brand-whatsapp"
    }), "WA")));
  }), etA && /*#__PURE__*/React.createElement(ApptModal, {
    et: etA,
    clients: clients,
    pets: pets,
    spaprices: [],
    cSvcs: SVCS,
    onClose: function onClose() {
      return setEtA(null);
    },
    toast: toast
  }));
}
function CampanasScreen(_ref43) {
  var clients = _ref43.clients,
    pets = _ref43.pets,
    appts = _ref43.appts,
    sales = _ref43.sales;
  var _useState137 = useState("inact30"),
    _useState138 = _slicedToArray(_useState137, 2),
    tab = _useState138[0],
    setTab = _useState138[1];
  var d30 = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10);
  var d60 = new Date(Date.now() - 60 * 86400000).toISOString().slice(0, 10);
  var lastAct = function lastAct(cid) {
    var acts = [].concat(_toConsumableArray(appts.filter(function (a) {
      return a.clientId === cid && a.status === "completado";
    })), _toConsumableArray(sales.filter(function (s) {
      return s.clientId === cid;
    }))).sort(function (a, b) {
      return (b.date||b.fecha||"").localeCompare(a.date||a.fecha||"");
    });
    return acts[0] ? acts[0].date : null;
  };
  var i30 = clients.filter(function (c) {
    var la = lastAct(c.id);
    return !la || la < d30;
  });
  var i60 = clients.filter(function (c) {
    var la = lastAct(c.id);
    return !la || la < d60;
  });
  var bdayM = pets.filter(function (p) {
    if (!p.birthday) return false;
    var m = p.birthday.split("-")[1];
    return m === thisM().slice(5, 7);
  });
  var tabS = function tabS(a) {
    return {
      padding: "8px 14px",
      borderRadius: 20,
      fontSize: 12,
      border: "1.5px solid " + (a ? "#1A5C47" : "#E5E7EB"),
      background: a ? "#1A5C47" : "#fff",
      color: a ? "#fff" : "#4B5563",
      cursor: "pointer",
      fontWeight: a ? 700 : 500,
      whiteSpace: "nowrap",
      flexShrink: 0
    };
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 14,
      overflowX: "auto",
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tabS(tab === "inact30"),
    onClick: function onClick() {
      return setTab("inact30");
    }
  }, "+30 d\xEDas (", i30.length, ")"), /*#__PURE__*/React.createElement("span", {
    style: tabS(tab === "inact60"),
    onClick: function onClick() {
      return setTab("inact60");
    }
  }, "+60 d\xEDas (", i60.length, ")"), /*#__PURE__*/React.createElement("span", {
    style: tabS(tab === "bdays"),
    onClick: function onClick() {
      return setTab("bdays");
    }
  }, "Cumplea\xF1os (", bdayM.length, ")")), tab === "inact30" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FBE9D6",
      border: "1px solid #D4945A",
      borderRadius: 12,
      padding: "12px 14px",
      marginBottom: 14,
      fontSize: 13,
      color: "#92400E"
    }
  }, /*#__PURE__*/React.createElement("strong", null, i30.length, " clientes"), " sin visita en m\xE1s de 30 d\xEDas."), i30.map(function (c) {
    var la = lastAct(c.id);
    var days = la ? dBetween(la, today()) : null;
    return /*#__PURE__*/React.createElement(Card, {
      key: c.id,
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Av, {
      name: c.name,
      size: 40
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#6B7280"
      }
    }, c.phone), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#9CA3AF"
      }
    }, la ? "Última visita: " + fmt(la) : "Sin visitas")), /*#__PURE__*/React.createElement("a", {
      href: waReact(c.name, days || "varios"),
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        padding: "10px 14px",
        background: "#22C55E",
        color: "#fff",
        textDecoration: "none",
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        gap: 5,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-brand-whatsapp"
    }), "Reactivar")));
  })), tab === "inact60" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FEE2E2",
      border: "1px solid #EF4444",
      borderRadius: 12,
      padding: "12px 14px",
      marginBottom: 14,
      fontSize: 13,
      color: "#991B1B"
    }
  }, /*#__PURE__*/React.createElement("strong", null, i60.length, " clientes"), " sin visita en m\xE1s de 60 d\xEDas \u2014 prioridad alta."), i60.map(function (c) {
    var la = lastAct(c.id);
    var days = la ? dBetween(la, today()) : null;
    return /*#__PURE__*/React.createElement(Card, {
      key: c.id,
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Av, {
      name: c.name,
      size: 40
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#6B7280"
      }
    }, c.phone), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#DC2626",
        fontWeight: 600
      }
    }, days ? "Hace " + days + " días" : "Sin visitas")), /*#__PURE__*/React.createElement("a", {
      href: waReact(c.name, days || "muchos"),
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        padding: "10px 14px",
        background: "#22C55E",
        color: "#fff",
        textDecoration: "none",
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        gap: 5,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-brand-whatsapp"
    }), "Contactar")));
  })), tab === "bdays" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FDF2F8",
      border: "1px solid #EC4899",
      borderRadius: 12,
      padding: "12px 14px",
      marginBottom: 14,
      fontSize: 13,
      color: "#9D174D"
    }
  }, /*#__PURE__*/React.createElement("strong", null, bdayM.length, " mascotas"), " cumplen a\xF1os este mes \u2014 ofr\xE9celes ba\xF1o gratis."), bdayM.map(function (p) {
    var cli = clients.find(function (c) {
      return c.id === p.clientId;
    });
    var msg = "Hola " + (cli ? cli.name : "") + "! 🎂 Este mes " + p.name + " cumple años! En PawSociety queremos celebrarlo con un *baño gratis* de regalo. Lo agendamos? 📲 317 469 9764";
    return /*#__PURE__*/React.createElement(Card, {
      key: p.id,
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Av, {
      name: p.name,
      size: 40,
      bg: "#FDF2F8",
      color: "#EC4899"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700
      }
    }, p.name, " \uD83C\uDF82"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#6B7280"
      }
    }, cli ? cli.name + " · " + cli.phone : ""), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "#EC4899"
      }
    }, "Cumplea\xF1os: ", fmtBday(p.birthday))), cli && /*#__PURE__*/React.createElement("a", {
      href: "https://wa.me/57" + cli.phone.replace(/[^0-9]/g, "") + "?text=" + encodeURIComponent(msg),
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        padding: "10px 14px",
        background: "#EC4899",
        color: "#fff",
        textDecoration: "none",
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        gap: 5,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-brand-whatsapp"
    }), "Felicitar")));
  })));
}
function ConfigScreen(_ref44) {
  var toast = _ref44.toast,
    commission = _ref44.commission,
    setCommission = _ref44.setCommission,
    onLogout = _ref44.onLogout,
    cSvcs = _ref44.cSvcs,
    setCsvcs = _ref44.setCsvcs,
    cBDogs = _ref44.cBDogs,
    setCBDogs = _ref44.setCBDogs,
    cBCats = _ref44.cBCats,
    setCBCats = _ref44.setCBCats,
    cCDogs = _ref44.cCDogs,
    setCCDogs = _ref44.setCCDogs,
    cCCats = _ref44.cCCats,
    setCCCats = _ref44.setCCCats,
    spaprices = _ref44.spaprices,
    setSpaprices = _ref44.setSpaprices;
  var _useState139 = useState("general"),
    _useState140 = _slicedToArray(_useState139, 2),
    tab = _useState140[0],
    setTab = _useState140[1];
  var _useState141 = useState(""),
    _useState142 = _slicedToArray(_useState141, 2),
    curPin = _useState142[0],
    setCurPin = _useState142[1];
  var _useState143 = useState(""),
    _useState144 = _slicedToArray(_useState143, 2),
    newPin = _useState144[0],
    setNewPin = _useState144[1];
  var _useState145 = useState(""),
    _useState146 = _slicedToArray(_useState145, 2),
    pinMsg = _useState146[0],
    setPinMsg = _useState146[1];
  var _useState147 = useState(commission),
    _useState148 = _slicedToArray(_useState147, 2),
    lComm = _useState148[0],
    setLComm = _useState148[1];
  var _useState149 = useState("svcs"),
    _useState150 = _slicedToArray(_useState149, 2),
    activeL = _useState150[0],
    setActiveL = _useState150[1];
  var _useState151 = useState(""),
    _useState152 = _slicedToArray(_useState151, 2),
    newItem = _useState152[0],
    setNewItem = _useState152[1];
  var listMap = {
    svcs: {
      label: "Servicios spa",
      items: cSvcs,
      set: setCsvcs
    },
    bDogs: {
      label: "Razas perro",
      items: cBDogs,
      set: setCBDogs
    },
    bCats: {
      label: "Razas gato",
      items: cBCats,
      set: setCBCats
    },
    cDogs: {
      label: "Conc. perro",
      items: cCDogs,
      set: setCCDogs
    },
    cCats: {
      label: "Conc. gato",
      items: cCCats,
      set: setCCCats
    }
  };
  var cur = listMap[activeL];
  var tabS = function tabS(a) {
    return {
      padding: "7px 14px",
      borderRadius: 20,
      fontSize: 12,
      border: "1.5px solid " + (a ? "#1A5C47" : "#E5E7EB"),
      background: a ? "#1A5C47" : "#fff",
      color: a ? "#fff" : "#4B5563",
      cursor: "pointer",
      fontWeight: a ? 700 : 500,
      whiteSpace: "nowrap",
      flexShrink: 0
    };
  };
  var savePin = /*#__PURE__*/function () {
    var _savePin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
      var d, st, _t16;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.p = _context21.n) {
          case 0:
            if (curPin) {
              _context21.n = 1;
              break;
            }
            setPinMsg("Escribe PIN actual.");
            return _context21.a(2);
          case 1:
            if (!(newPin.length !== 4 || isNaN(Number(newPin)))) {
              _context21.n = 2;
              break;
            }
            setPinMsg("Nuevo PIN debe ser 4 dígitos.");
            return _context21.a(2);
          case 2:
            _context21.p = 2;
            if (!db) {
              _context21.n = 5;
              break;
            }
            _context21.n = 3;
            return db.collection("config").doc("pin").get();
          case 3:
            d = _context21.v;
            st = d.exists && d.data().value ? d.data().value : DEFAULT_PIN;
            if (!(curPin !== st)) {
              _context21.n = 4;
              break;
            }
            setPinMsg("PIN actual incorrecto.");
            return _context21.a(2);
          case 4:
            _context21.n = 5;
            return db.collection("config").doc("pin").set({
              value: newPin
            });
          case 5:
            toast("PIN cambiado ✓");
            setPinMsg("");
            setCurPin("");
            setNewPin("");
            _context21.n = 7;
            break;
          case 6:
            _context21.p = 6;
            _t16 = _context21.v;
            alert(_t16.message);
          case 7:
            return _context21.a(2);
        }
      }, _callee18, null, [[2, 6]]);
    }));
    function savePin() {
      return _savePin.apply(this, arguments);
    }
    return savePin;
  }();
  var saveComm = /*#__PURE__*/function () {
    var _saveComm = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
      var _t17;
      return _regenerator().w(function (_context22) {
        while (1) switch (_context22.p = _context22.n) {
          case 0:
            _context22.p = 0;
            if (!db) {
              _context22.n = 1;
              break;
            }
            _context22.n = 1;
            return db.collection("config").doc("commission").set({
              value: lComm
            });
          case 1:
            setCommission(lComm);
            toast("Comisión guardada ✓");
            _context22.n = 3;
            break;
          case 2:
            _context22.p = 2;
            _t17 = _context22.v;
            alert(_t17.message);
          case 3:
            return _context22.a(2);
        }
      }, _callee19, null, [[0, 2]]);
    }));
    function saveComm() {
      return _saveComm.apply(this, arguments);
    }
    return saveComm;
  }();
  var saveListsDB = /*#__PURE__*/function () {
    var _saveListsDB = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(updated) {
      var _t18;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.p = _context23.n) {
          case 0:
            _context23.p = 0;
            if (!db) {
              _context23.n = 1;
              break;
            }
            _context23.n = 1;
            return db.collection("config").doc("lists").set(updated);
          case 1:
            toast("Guardado ✓");
            _context23.n = 3;
            break;
          case 2:
            _context23.p = 2;
            _t18 = _context23.v;
            toast("Error al guardar");
          case 3:
            return _context23.a(2);
        }
      }, _callee20, null, [[0, 2]]);
    }));
    function saveListsDB(_x1) {
      return _saveListsDB.apply(this, arguments);
    }
    return saveListsDB;
  }();
  var saveLists = /*#__PURE__*/function () {
    var _saveLists = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21() {
      return _regenerator().w(function (_context24) {
        while (1) switch (_context24.n) {
          case 0:
            return _context24.a(2, saveListsDB({
              svcs: cSvcs,
              bDogs: cBDogs,
              bCats: cBCats,
              cDogs: cCDogs,
              cCats: cCCats
            }));
        }
      }, _callee21);
    }));
    function saveLists() {
      return _saveLists.apply(this, arguments);
    }
    return saveLists;
  }();
  var addItem = function addItem() {
    var t = newItem.trim();
    if (!t) return;
    if (cur.items.includes(t)) {
      toast("Ya existe");
      return;
    }
    var updated = [].concat(_toConsumableArray(cur.items), [t]);
    cur.set(updated);
    setNewItem("");
    var lists = {
      svcs: cSvcs,
      bDogs: cBDogs,
      bCats: cBCats,
      cDogs: cCDogs,
      cCats: cCCats
    };
    lists[activeL] = updated;
    saveListsDB(lists);
  };
  var removeItem = function removeItem(item) {
    if (!window.confirm("Eliminar '" + item + "'?")) return;
    var updated = cur.items.filter(function (i) {
      return i !== item;
    });
    cur.set(updated);
    var lists = {
      svcs: cSvcs,
      bDogs: cBDogs,
      bCats: cBCats,
      cDogs: cCDogs,
      cCats: cCCats
    };
    lists[activeL] = updated;
    saveListsDB(lists);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 14,
      overflowX: "auto",
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tabS(tab === "general"),
    onClick: function onClick() {
      return setTab("general");
    }
  }, "General"), /*#__PURE__*/React.createElement("span", {
    style: tabS(tab === "listas"),
    onClick: function onClick() {
      return setTab("listas");
    }
  }, "Listas"), /*#__PURE__*/React.createElement("span", {
    style: tabS(tab === "precios"),
    onClick: function onClick() {
      return setTab("precios");
    }
  }, "Precios spa")), tab === "general" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Rt, {
    icon: "percentage"
  }, "Comisi\xF3n por ventas"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: lComm,
    min: 0,
    max: 100,
    onChange: function onChange(e) {
      return setLComm(Number(e.target.value));
    },
    style: _objectSpread(_objectSpread({}, IS), {}, {
      flex: 1,
      fontSize: 22,
      fontWeight: 700,
      textAlign: "center"
    })
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: "#1A5C47"
    }
  }, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 8,
      marginBottom: 12
    }
  }, [10, 20, 30].map(function (p) {
    return /*#__PURE__*/React.createElement("button", {
      key: p,
      onClick: function onClick() {
        return setLComm(p);
      },
      style: {
        padding: 10,
        borderRadius: 10,
        border: "1.5px solid " + (lComm === p ? "#1A5C47" : "#E5E7EB"),
        background: lComm === p ? "#1A5C47" : "#fff",
        color: lComm === p ? "#fff" : "#374151",
        fontSize: 14,
        fontWeight: 700,
        cursor: "pointer"
      }
    }, p, "%");
  })), /*#__PURE__*/React.createElement("button", {
    onClick: saveComm,
    style: {
      width: "100%",
      padding: 13,
      background: "#1A5C47",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Guardar comisi\xF3n")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Rt, {
    icon: "lock"
  }, "Cambiar PIN"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: curPin,
    onChange: function onChange(e) {
      setCurPin(e.target.value);
      setPinMsg("");
    },
    maxLength: 4,
    placeholder: "PIN actual",
    style: _objectSpread(_objectSpread({}, IS), {}, {
      marginBottom: 10
    })
  }), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: newPin,
    onChange: function onChange(e) {
      setNewPin(e.target.value);
      setPinMsg("");
    },
    maxLength: 4,
    placeholder: "Nuevo PIN (4 d\xEDgitos)",
    style: _objectSpread(_objectSpread({}, IS), {}, {
      marginBottom: 10
    })
  }), pinMsg && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "#DC2626",
      marginBottom: 10,
      fontWeight: 600
    }
  }, pinMsg), /*#__PURE__*/React.createElement("button", {
    onClick: savePin,
    style: {
      width: "100%",
      padding: 13,
      background: "#1A5C47",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "Cambiar PIN")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Rt, {
    icon: "logout",
    color: "#DC2626"
  }, "Sesi\xF3n"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      if (window.confirm("Cerrar sesión?")) onLogout();
    },
    style: {
      width: "100%",
      padding: 14,
      background: "#FEE2E2",
      color: "#DC2626",
      border: "none",
      borderRadius: 12,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-logout"
  }), "Cerrar sesi\xF3n"))), tab === "listas" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 14,
      overflowX: "auto",
      paddingBottom: 4
    }
  }, Object.entries(listMap).map(function (_ref45) {
    var _ref46 = _slicedToArray(_ref45, 2),
      key = _ref46[0],
      label = _ref46[1].label;
    return /*#__PURE__*/React.createElement("span", {
      key: key,
      style: tabS(activeL === key),
      onClick: function onClick() {
        setActiveL(key);
        setNewItem("");
      }
    }, label);
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      marginBottom: 12
    }
  }, cur.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: newItem,
    onChange: function onChange(e) {
      return setNewItem(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Enter") addItem();
    },
    placeholder: "Nuevo item...",
    style: _objectSpread(_objectSpread({}, IS), {}, {
      flex: 1
    })
  }), /*#__PURE__*/React.createElement("button", {
    onClick: addItem,
    style: {
      padding: "11px 16px",
      background: "#1A5C47",
      color: "#fff",
      border: "none",
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 700,
      cursor: "pointer",
      flexShrink: 0
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 280,
      overflowY: "auto"
    }
  }, cur.items.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 0",
        borderBottom: "1px solid #F3F4F6"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#1A5C47",
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 13
      }
    }, item), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeItem(item);
      },
      style: {
        padding: "4px 10px",
        background: "#FEE2E2",
        color: "#DC2626",
        border: "none",
        borderRadius: 8,
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer"
      }
    }, "Eliminar"));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#E8F5EB",
      borderRadius: 10,
      padding: "10px 14px",
      fontSize: 12,
      color: "#065F46",
      marginTop: 4
    }
  }, "Los cambios se guardan autom\xE1ticamente en Firebase. Si hay alg\xFAn problema, usa el bot\xF3n:"), /*#__PURE__*/React.createElement("button", {
    onClick: saveLists,
    style: {
      width: "100%",
      padding: 13,
      background: "#F3F4F6",
      color: "#374151",
      border: "none",
      borderRadius: 12,
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-refresh"
  }), "Forzar sincronizaci\xF3n")), tab === "precios" && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Rt, {
    icon: "tag"
  }, "Precios del spa"), (spaprices || []).map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "11px 0",
        borderBottom: "1px solid #E5E7EB"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14,
        fontWeight: 500
      }
    }, s.name), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#9CA3AF",
        marginRight: 4
      }
    }, "$"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: s.price,
      onChange: function onChange(e) {
        return setSpaprices(function (prev) {
          return prev.map(function (p, j) {
            return j === i ? _objectSpread(_objectSpread({}, p), {}, {
              price: Number(e.target.value)
            }) : p;
          });
        });
      },
      style: {
        width: 100,
        textAlign: "right",
        padding: "7px 10px",
        fontSize: 14,
        border: "1.5px solid #E5E7EB",
        borderRadius: 8,
        outline: "none"
      }
    }));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22() {
      var ex, _iterator8, _step8, d, _iterator9, _step9, _p, _t19, _t20, _t21;
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.p = _context25.n) {
          case 0:
            _context25.p = 0;
            if (!db) {
              _context25.n = 15;
              break;
            }
            _context25.n = 1;
            return db.collection("prices").get();
          case 1:
            ex = _context25.v;
            if (!(ex && !ex.empty)) {
              _context25.n = 8;
              break;
            }
            _iterator8 = _createForOfIteratorHelper(ex.docs);
            _context25.p = 2;
            _iterator8.s();
          case 3:
            if ((_step8 = _iterator8.n()).done) {
              _context25.n = 5;
              break;
            }
            d = _step8.value;
            _context25.n = 4;
            return fdel("prices", d.id);
          case 4:
            _context25.n = 3;
            break;
          case 5:
            _context25.n = 7;
            break;
          case 6:
            _context25.p = 6;
            _t19 = _context25.v;
            _iterator8.e(_t19);
          case 7:
            _context25.p = 7;
            _iterator8.f();
            return _context25.f(7);
          case 8:
            _iterator9 = _createForOfIteratorHelper(spaprices);
            _context25.p = 9;
            _iterator9.s();
          case 10:
            if ((_step9 = _iterator9.n()).done) {
              _context25.n = 12;
              break;
            }
            _p = _step9.value;
            _context25.n = 11;
            return fadd("prices", _p);
          case 11:
            _context25.n = 10;
            break;
          case 12:
            _context25.n = 14;
            break;
          case 13:
            _context25.p = 13;
            _t20 = _context25.v;
            _iterator9.e(_t20);
          case 14:
            _context25.p = 14;
            _iterator9.f();
            return _context25.f(14);
          case 15:
            toast("Precios guardados ✓");
            _context25.n = 17;
            break;
          case 16:
            _context25.p = 16;
            _t21 = _context25.v;
            alert(_t21.message);
          case 17:
            return _context25.a(2);
        }
      }, _callee22, null, [[9, 13, 14, 15], [2, 6, 7, 8], [0, 16]]);
    })),
    style: {
      width: "100%",
      padding: 14,
      background: "#1A5C47",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 14,
      fontWeight: 700,
      marginTop: 14,
      cursor: "pointer"
    }
  }, "Guardar precios")));
}
function App() {
  var _useState153 = useState(false),
    _useState154 = _slicedToArray(_useState153, 2),
    logged = _useState154[0],
    setLogged = _useState154[1];
  var _uCU=useState(null),_uCUa=_slicedToArray(_uCU,2),currentUser=_uCUa[0],setCurrentUser=_uCUa[1];
  var _useState155 = useState("dashboard"),
    _useState156 = _slicedToArray(_useState155, 2),
    view = _useState156[0],
    setView = _useState156[1];
  var _useState157 = useState(false),
    _useState158 = _slicedToArray(_useState157, 2),
    sideOpen = _useState158[0],
    setSideOpen = _useState158[1];
  var _useState159 = useState([]),
    _useState160 = _slicedToArray(_useState159, 2),
    clients = _useState160[0],
    setClients = _useState160[1];
  var _useState161 = useState([]),
    _useState162 = _slicedToArray(_useState161, 2),
    pets = _useState162[0],
    setPets = _useState162[1];
  var _useState163 = useState([]),
    _useState164 = _slicedToArray(_useState163, 2),
    appts = _useState164[0],
    setAppts = _useState164[1];
  var _useState165 = useState([]),
    _useState166 = _slicedToArray(_useState165, 2),
    sales = _useState166[0],
    setSales = _useState166[1];
  var _useState167 = useState([]),
    _useState168 = _slicedToArray(_useState167, 2),
    products = _useState168[0],
    setProducts = _useState168[1];
  var _useState169 = useState([]),
    _useState170 = _slicedToArray(_useState169, 2),
    expenses = _useState170[0],
    setExpenses = _useState170[1];
  var _useState171 = useState(DEF_PRICES),
    _useState172 = _slicedToArray(_useState171, 2),
    spaprices = _useState172[0],
    setSpaprices = _useState172[1];
  var _useState173 = useState(30),
    _useState174 = _slicedToArray(_useState173, 2),
    commission = _useState174[0],
    setCommission = _useState174[1];
  var _useState175 = useState(SVCS),
    _useState176 = _slicedToArray(_useState175, 2),
    cSvcs = _useState176[0],
    setCsvcs = _useState176[1];
  var _useState177 = useState(BDOGS),
    _useState178 = _slicedToArray(_useState177, 2),
    cBDogs = _useState178[0],
    setCBDogs = _useState178[1];
  var _useState179 = useState(BCATS),
    _useState180 = _slicedToArray(_useState179, 2),
    cBCats = _useState180[0],
    setCBCats = _useState180[1];
  var _useState181 = useState(CDOGS),
    _useState182 = _slicedToArray(_useState181, 2),
    cCDogs = _useState182[0],
    setCCDogs = _useState182[1];
  var _useState183 = useState(CCATS),
    _useState184 = _slicedToArray(_useState183, 2),
    cCCats = _useState184[0],
    setCCCats = _useState184[1];
  var _useState185 = useState(false),
    _useState186 = _slicedToArray(_useState185, 2),
    loaded = _useState186[0],
    setLoaded = _useState186[1];
  var _useState187 = useState(null),
    _useState188 = _slicedToArray(_useState187, 2),
    mod = _useState188[0],
    setMod = _useState188[1];
  var _useState189 = useState(null),
    _useState190 = _slicedToArray(_useState189, 2),
    toast = _useState190[0],
    setToast = _useState190[1];
  useEffect(function () {
    var unsub=firebase.auth().onAuthStateChanged(function(user){if(user){setCurrentUser(user);setLogged(true);}else{setCurrentUser(null);setLogged(false);}});
    return unsub;
  }, []);
  useEffect(function () {
    if (!logged) return;
    if (!db) {
      setLoaded(true);
      return;
    }
    var n = 0;
    var _t = setTimeout(function(){ setLoaded(true); }, 10000);
    var ck = function ck() {
      n++;
      if (n >= 4) { clearTimeout(_t); setLoaded(true); }
    };
    var u1 = flis("clients", function (d) {
      setClients(d);
      ck();
    });
    var u2 = flis("pets", function (d) {
      setPets(d);
      ck();
    });
    var u3 = flis("appts", function (d) {
      setAppts(d);
      ck();
    });
    var u4 = flis("prices", function (d) {
      if (d.length > 0) setSpaprices(d);
      ck();
    });
    var u5 = flis("products", function (d) {
      setProducts(d);
      ck();
    });
    var u6 = flis("expenses", function (d) {
      setExpenses(d);
      ck();
    });
    var u7 = flis("sales", function (d) {
      setSales(d);
    });
    db.collection("config").doc("commission").get().then(function (d) {
      if (d.exists && d.data().value != null) setCommission(Number(d.data().value));
    }).catch(function () {});
    db.collection("config").doc("lists").get().then(function (d) {
      if (d.exists) {
        var x = d.data();
        if (x.svcs && x.svcs.length) setCsvcs(x.svcs);
        if (x.bDogs && x.bDogs.length) setCBDogs(x.bDogs);
        if (x.bCats && x.bCats.length) setCBCats(x.bCats);
        if (x.cDogs && x.cDogs.length) setCCDogs(x.cDogs);
        if (x.cCats && x.cCats.length) setCCCats(x.cCats);
      }
    }).catch(function () {});
    return function () {
      u1();
      u2();
      u3();
      u4();
      u5();
      u6();
      u7();
    };
  }, [logged]);
  var showToast = function showToast(msg) {
    setToast(msg);
    setTimeout(function () {
      return setToast(null);
    }, 2600);
  };
  var lastBath = function lastBath(petId) {
    try {
      var _done = appts.filter(function (a) {
        return a.petId === petId && (a.status === "completado" || a.estado === "completado");
      }).sort(function (a, b) {
        return (b.date||b.fecha||"").localeCompare(a.date||a.fecha||"");
      });
      return _done.length > 0 ? (_done[0].date || _done[0].fecha || null) : null;
    } catch(e) { return null; }
  };
  var alertCount = function () {
    try {
      return pets.filter(function (p) {
        var lb = lastBath(p.id);
        return !lb || dBetween(lb, today()) >= 28;
      }).length + pets.filter(function (p) {
        try {
          return getLoyalty(p.id, appts).hasFree;
        } catch (e) {
          return false;
        }
      }).length + pets.filter(function (p) {
        try {
          return p.birthday && isBdayToday(p.birthday);
        } catch (e) {
          return false;
        }
      }).length;
    } catch (e) {
      return 0;
    }
  }();
  var handleLogin = function handleLogin(user) {
    setCurrentUser(user);
    setLogged(true);
  };
  var handleLogout = function handleLogout() {
    try{firebase.auth().signOut();}catch(e){}
    setCurrentUser(null);
    setLogged(false);
    setView("dashboard");
    setLoaded(false);
    setClients([]);
    setPets([]);
    setAppts([]);
    setSales([]);
    setProducts([]);
    setExpenses([]);
  };
  if (!logged) return /*#__PURE__*/React.createElement(Login, {
    onLogin: handleLogin
  });
  if (!loaded) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44
    }
  }, "\uD83D\uDC3E"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "#0D3D2E"
    }
  }, "Cargando PawSociety CRM..."));
  var curNav = NAV.find(function (n) {
    return n.id === view;
  }) || NAV[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "#f0f2f5"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    open: sideOpen,
    onClose: function onClose() {
      return setSideOpen(false);
    },
    view: view,
    setView: setView,
    onLogout: handleLogout,
    alertCount: alertCount
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#0D3D2E",
      padding: "calc(env(safe-area-inset-top)+10px) 16px 10px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      position: "sticky",
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSideOpen(true);
    },
    style: {
      background: "rgba(242,196,206,.2)",
      border: "1px solid rgba(242,196,206,.4)",
      color: "#F2C4CE",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer",
      padding: "8px 12px",
      display: "flex",
      alignItems: "center",
      gap: 6,
      borderRadius: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-menu-2",
    style: {
      fontSize: 18
    }
  }), "Men\xFA"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#F2C4CE",
      fontSize: 15,
      fontWeight: 700,
      flex: 1
    }
  }, curNav.label), alertCount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#EF4444",
      color: "#fff",
      borderRadius: 12,
      padding: "3px 10px",
      fontSize: 12,
      fontWeight: 700
    }
  }, alertCount), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setMod("sale");
    },
    style: {
      background: "#1A5C47",
      border: "none",
      color: "#fff",
      borderRadius: 10,
      padding: "8px 12px",
      fontSize: 12,
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "ti ti-shopping-cart"
  }), "Venta")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 32px",
      maxWidth: 680,
      margin: "0 auto"
    }
  }, view === "dashboard" && /*#__PURE__*/React.createElement(DashboardScreen, {
    clients: clients,
    pets: pets,
    appts: appts,
    sales: sales,
    products: products,
    expenses: expenses,
    lastBath: lastBath,
    setView: setView,
    openSale: function openSale() {
      return setMod("sale");
    },
    openAppt: function openAppt() {
      return setMod("appt");
    },
    commission: commission
  }), view === "clientes" && /*#__PURE__*/React.createElement(ClientsScreen, {
    clients: clients,
    pets: pets,
    appts: appts,
    sales: sales,
    lastBath: lastBath,
    toast: showToast
  }), view === "mascotas" && /*#__PURE__*/React.createElement(MascotasScreen, {
    pets: pets,
    clients: clients,
    appts: appts,
    lastBath: lastBath,
    toast: showToast
  }), view === "spa" && /*#__PURE__*/React.createElement(SpaScreen, {
    appts: appts,
    clients: clients,
    pets: pets,
    spaprices: spaprices,
    cSvcs: cSvcs,
    commission: commission,
    toast: showToast
  }), view === "tienda" && /*#__PURE__*/React.createElement(TiendaScreen, {
    sales: sales,
    clients: clients,
    products: products,
    toast: showToast
  }), view === "catalogo" && /*#__PURE__*/React.createElement(CatalogoScreen, {
    products: products,
    toast: showToast
  }), view === "finanzas" && /*#__PURE__*/React.createElement(FinanzasScreen, {
    expenses: expenses,
    appts: appts,
    sales: sales,
    toast: showToast,
    clients: clients,
    pets: pets
  }), view === "alertas" && /*#__PURE__*/React.createElement(AlertasScreen, {
    pets: pets,
    clients: clients,
    appts: appts,
    lastBath: lastBath,
    toast: showToast
  }), view === "campanas" && /*#__PURE__*/React.createElement(CampanasScreen, {
    clients: clients,
    pets: pets,
    appts: appts,
    sales: sales
  }), view === "config" && /*#__PURE__*/React.createElement(ConfigScreen, {
    toast: showToast,
    commission: commission,
    setCommission: setCommission,
    onLogout: handleLogout,
    cSvcs: cSvcs,
    setCsvcs: setCsvcs,
    cBDogs: cBDogs,
    setCBDogs: setCBDogs,
    cBCats: cBCats,
    setCBCats: setCBCats,
    cCDogs: cCDogs,
    setCCDogs: setCCDogs,
    cCCats: cCCats,
    setCCCats: setCCCats,
    spaprices: spaprices,
    setSpaprices: setSpaprices
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "#0D3D2E",
      borderTop: "1px solid rgba(242,196,206,.15)",
      display: "flex",
      zIndex: 150,
      paddingBottom: "env(safe-area-inset-bottom)"
    }
  }, [{
    id: "dashboard",
    icon: "home",
    label: "Inicio"
  }, {
    id: "clientes",
    icon: "users",
    label: "Clientes"
  }, {
    id: "spa",
    icon: "bath",
    label: "Spa"
  }, {
    id: "tienda",
    icon: "shopping-cart",
    label: "Tienda"
  }, {
    id: "finanzas",
    icon: "chart-pie",
    label: "Finanzas"
  }].map(function (n) {
    var active = view === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: function onClick() {
        return setView(n.id);
      },
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 4px 8px",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: active ? "#F2C4CE" : "rgba(242,196,206,.45)",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "ti ti-" + n.icon,
      style: {
        fontSize: 22
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: active ? 700 : 400,
        letterSpacing: .3
      }
    }, n.label), active && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 18,
        height: 2,
        background: "#F2C4CE",
        borderRadius: 2
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "calc(60px + env(safe-area-inset-bottom))"
    }
  }), toast && /*#__PURE__*/React.createElement(Toast, {
    msg: toast
  }), mod === "client" && /*#__PURE__*/React.createElement(ClientModal, {
    et: null,
    onClose: function onClose() {
      return setMod(null);
    },
    toast: showToast
  }), mod === "appt" && /*#__PURE__*/React.createElement(ApptModal, {
    et: null,
    clients: clients,
    pets: pets,
    spaprices: spaprices,
    cSvcs: cSvcs,
    onClose: function onClose() {
      return setMod(null);
    },
    toast: showToast
  }), mod === "sale" && /*#__PURE__*/React.createElement(SaleModal, {
    clients: clients,
    products: products,
    onClose: function onClose() {
      return setMod(null);
    },
    toast: showToast
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));