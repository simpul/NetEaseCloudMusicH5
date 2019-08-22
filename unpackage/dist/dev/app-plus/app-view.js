var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[[7],[3,'prefixClass']]],[[2,'+'],[[2,'+'],[[7],[3,'prefixClass']],[1,'-']],[[7],[3,'type']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'$_click']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'setStyle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bar'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'#fff'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'goBack']]]]]]]]])
Z([3,'26'])
Z([3,'chevron-left'])
Z([3,'1'])
Z([3,'text'])
Z([3,'name _p'])
Z([[6],[[7],[3,'$slots']],[3,'songName']])
Z([3,'songName'])
Z([3,'歌名'])
Z([3,'artists _p'])
Z([[6],[[7],[3,'$slots']],[3,'artists']])
Z([3,'artists'])
Z([3,'歌手'])
Z([3,'\x3e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z([3,'popup-layer'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'ableClose']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[7],[3,'ifshow']]])
Z(z[0])
Z([3,'popup-content vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'stopEvent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'popRef'])
Z([[7],[3,'_location']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'menu'])
Z([3,'_ul'])
Z([3,'_li'])
Z([3,'iconfont _i'])
Z([3,''])
Z([3,'每日推荐'])
Z(z[2])
Z(z[3])
Z([3,''])
Z([3,'歌单'])
Z(z[2])
Z(z[3])
Z([3,''])
Z([3,'排行榜'])
Z(z[2])
Z(z[3])
Z([3,''])
Z([3,'电台'])
Z(z[2])
Z(z[3])
Z([3,''])
Z([3,'直播'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'disk'])
Z([3,'title'])
Z([3,'_h4'])
Z([3,'新碟'])
Z([3,'more'])
Z([3,'更多新碟'])
Z([3,'content'])
Z([3,'_ul'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[8])
Z([3,'_li'])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'name']])
Z([3,'_img'])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'picUrl']])
Z([3,'text'])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'name']]])
Z([3,'artists'])
Z([a,[[6],[[7],[3,'item']],[3,'f0']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'songDetail']],[3,'name']])
Z([3,'player'])
Z([3,'__e'])
Z([3,'pic'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toPlayer']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'_img'])
Z([[6],[[6],[[7],[3,'songDetail']],[3,'al']],[3,'picUrl']])
Z(z[2])
Z([3,'detail'])
Z(z[4])
Z([3,'name onerow _p'])
Z([a,[[6],[[7],[3,'songDetail']],[3,'name']]])
Z([3,'artists onerow _p'])
Z([a,[[6],[[7],[3,'$root']],[3,'f0']]])
Z([3,'control'])
Z([3,'__l'])
Z(z[2])
Z([3,'#000'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'switchState']]]]]]]]])
Z([[2,'?:'],[[7],[3,'playState']],[1,'pause'],[1,'play']])
Z([3,'1'])
Z([3,'list'])
Z(z[15])
Z(z[2])
Z(z[17])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'toList']]]]]]]]])
Z([3,'playlist'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'recommend'])
Z([3,'title'])
Z([3,'_h4'])
Z([3,'推荐歌单'])
Z([3,'more'])
Z([3,'歌单广场'])
Z([3,'content'])
Z([3,'_ul'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[8])
Z([3,'_li'])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'name']])
Z([3,'_img'])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'picUrl']])
Z([3,'text'])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'name']]])
Z([3,'playcount'])
Z([3,'__l'])
Z([3,'#fff'])
Z([3,'16'])
Z([3,'play'])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([3,'_span'])
Z([a,[[6],[[7],[3,'item']],[3,'f0']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'swiper'])
Z([1,true])
Z([3,'true'])
Z([1,1000])
Z([3,'red'])
Z([3,'rgba(256, 256, 256, .5)'])
Z(z[1])
Z([1,3000])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'banners']])
Z(z[8])
Z([3,'swiper-item'])
Z([[7],[3,'index']])
Z([3,'_img'])
Z([[6],[[7],[3,'item']],[3,'imageUrl']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([[7],[3,'banners']])
Z([3,'__l'])
Z([3,'1'])
Z(z[2])
Z([3,'2'])
Z(z[2])
Z([[7],[3,'recommend']])
Z([3,'3'])
Z(z[2])
Z([[7],[3,'newdisk']])
Z([3,'4'])
Z(z[2])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^list']],[[4],[[5],[[4],[[5],[1,'goToList']]]]]]]]])
Z([[2,'!'],[[7],[3,'songDetail']]])
Z([3,'5'])
Z(z[2])
Z([3,'vue-ref'])
Z([3,'listRef'])
Z([3,'6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list-mini'])
Z([3,'__l'])
Z([3,'vue-ref'])
Z([3,'popupRef'])
Z([3,'top'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'list-content'])
Z([3,'head'])
Z([3,'__e'])
Z([3,'mode'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchPlayMode']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'iconfont _i'])
Z([[7],[3,'modeIcon']])
Z([a,[[2,'+'],[[6],[[7],[3,'this']],[3,'modeText']],[1,' (4)']]])
Z([3,'trash'])
Z(z[1])
Z([3,'#666'])
Z([3,'24'])
Z(z[15])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
Z([3,'songs'])
Z([3,'_ul'])
Z([3,'_li'])
Z([3,'detail'])
Z([3,'now'])
Z(z[1])
Z([3,'red'])
Z(z[18])
Z([3,'volume-plus'])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'1']])
Z([3,'song-name ht'])
Z([3,'期待爱'])
Z([3,'artists-name ht'])
Z([3,'- 林俊杰/金莎'])
Z([3,'delete _span'])
Z([3,'X'])
Z(z[23])
Z([3,'歌曲'])
Z(z[23])
Z(z[38])
Z(z[23])
Z(z[38])
Z(z[23])
Z(z[38])
Z(z[23])
Z(z[38])
Z(z[23])
Z(z[38])
Z(z[23])
Z(z[38])
Z(z[23])
Z(z[38])
Z(z[23])
Z(z[38])
Z(z[23])
Z(z[38])
Z(z[23])
Z(z[38])
Z(z[23])
Z(z[38])
Z(z[23])
Z(z[38])
Z(z[23])
Z(z[38])
Z(z[23])
Z(z[38])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'control'])
Z([3,'__e'])
Z([3,'iconfont _i'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'switchMode']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'mode']])
Z(z[2])
Z([3,''])
Z([3,'__l'])
Z(z[1])
Z([3,'#ccc'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'switchState']]]]]]]]])
Z([3,'50'])
Z([[2,'?:'],[[7],[3,'playState']],[1,'pause'],[1,'play']])
Z([3,'1'])
Z([3,'iconfont rotate _i'])
Z(z[6])
Z(z[1])
Z([3,'iconfont fs30 _i'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toList']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,''])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'cover'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeBody']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'_img'])
Z([[6],[[6],[[7],[3,'songDetail']],[3,'al']],[3,'picUrl']])
Z([3,'btns'])
Z([3,'iconfont _i'])
Z([3,''])
Z(z[6])
Z([3,''])
Z(z[6])
Z([3,''])
Z(z[6])
Z([3,''])
Z(z[6])
Z([3,''])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'lyrics'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeBody']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'haveLyric']])
Z([3,'havelyric'])
Z([3,'_ul'])
Z([[2,'+'],[[2,'+'],[1,'margin-top: '],[[2,'*'],[[2,'-'],[1,120]],[[7],[3,'lycIndex']]]],[1,'upx']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'lycArr']])
Z(z[7])
Z([[4],[[5],[[5],[1,'_li']],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'lycIndex']]],[1,'active'],[1,'']]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'text']]],[1,'']]])
Z([3,'nolyric'])
Z([3,'该歌曲没有歌词，请您欣赏'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'progress'])
Z([3,'current'])
Z([a,[[7],[3,'currentTime']]])
Z([3,'#eee'])
Z([3,'#999'])
Z([3,'__e'])
Z(z[5])
Z([3,'12'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'drag']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'changing']],[[4],[[5],[[4],[[5],[[5],[1,'dragging']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'value']])
Z([3,'total'])
Z([a,[[7],[3,'totalTime']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'history'])
Z([3,'title'])
Z([3,'_h5'])
Z([3,'历史记录'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'#999'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'deleteHistoryList']]]]]]]]])
Z([3,'18'])
Z([3,'trash'])
Z([3,'1'])
Z([3,'content'])
Z([3,'_ul'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'historyList']])
Z(z[13])
Z(z[5])
Z([3,'_li'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'search']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'historyList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'item']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'hot'])
Z([3,'_h5'])
Z([3,'热搜榜'])
Z([3,'content'])
Z([3,'_ul'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'hotList']])
Z(z[5])
Z([3,'__e'])
Z([3,'_li'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'search']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'hotList']],[1,'']],[[7],[3,'index']]],[1,'searchWord']]]]]]]]]]]]]]])
Z(z[5])
Z([a,[[2,'+'],[[7],[3,'index']],[1,1]]])
Z([3,'detail'])
Z([3,'name _span'])
Z([a,[[6],[[7],[3,'item']],[3,'searchWord']]])
Z([3,'score _span'])
Z([a,[[6],[[7],[3,'item']],[3,'score']]])
Z([3,'_br'])
Z([3,'cont _span'])
Z([a,[[6],[[7],[3,'item']],[3,'content']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'result'])
Z([3,'_h5'])
Z([3,'搜索结果'])
Z([3,'content'])
Z([3,'_ul'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[5])
Z([3,'__e'])
Z([3,'_li'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'play']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'result']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z([3,'name'])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'name']]])
Z([3,'artists'])
Z([a,[[6],[[7],[3,'item']],[3,'f0']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'search'])
Z([3,'__l'])
Z([[2,'!'],[[7],[3,'showHistory']]])
Z([[7],[3,'search']])
Z([3,'1'])
Z(z[1])
Z([[2,'!'],[[7],[3,'showResult']]])
Z([[7],[3,'searchResult']])
Z([3,'2'])
Z(z[1])
Z([[2,'!'],[[7],[3,'showHot']]])
Z(z[3])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/cmd-icon/cmd-icon.wxml','./components/navigation/bar.wxml','./components/popup/popup-layer.wxml','./pages/index/index-menu.wxml','./pages/index/index-newdisk.wxml','./pages/index/index-player.wxml','./pages/index/index-recommend.wxml','./pages/index/index-swiper.wxml','./pages/index/index.wxml','./pages/list/list-mini.wxml','./pages/player/control.wxml','./pages/player/cover.wxml','./pages/player/lyrics.wxml','./pages/player/progress.wxml','./pages/search/history.wxml','./pages/search/hot.wxml','./pages/search/result.wxml','./pages/search/search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'style',2],[],e,s,gg)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oD=_n('view')
_rz(z,oD,'class',0,e,s,gg)
var fE=_mz(z,'cmd-icon',['bind:__l',1,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(oD,fE)
var cF=_n('view')
_rz(z,cF,'class',8,e,s,gg)
var hG=_n('view')
_rz(z,hG,'class',9,e,s,gg)
var oH=_v()
_(hG,oH)
if(_oz(z,10,e,s,gg)){oH.wxVkey=1
var cI=_n('slot')
_rz(z,cI,'name',11,e,s,gg)
_(oH,cI)
}
else{oH.wxVkey=2
var oJ=_oz(z,12,e,s,gg)
_(oH,oJ)
}
oH.wxXCkey=1
_(cF,hG)
var lK=_n('view')
_rz(z,lK,'class',13,e,s,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,14,e,s,gg)){aL.wxVkey=1
var tM=_n('slot')
_rz(z,tM,'name',15,e,s,gg)
_(aL,tM)
}
else{aL.wxVkey=2
var eN=_oz(z,16,e,s,gg)
_(aL,eN)
}
var bO=_oz(z,17,e,s,gg)
_(lK,bO)
aL.wxXCkey=1
_(cF,lK)
_(oD,cF)
_(r,oD)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var xQ=_n('view')
var oR=_mz(z,'view',['bindtap',0,'catchtouchmove',1,'class',1,'data-event-opts',2,'hidden',3],[],e,s,gg)
_(xQ,oR)
var fS=_mz(z,'view',['catchtap',5,'class',1,'data-event-opts',2,'data-ref',3,'style',4],[],e,s,gg)
var cT=_n('slot')
_(fS,cT)
_(xQ,fS)
_(r,xQ)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oV=_n('view')
_rz(z,oV,'class',0,e,s,gg)
var cW=_n('view')
_rz(z,cW,'class',1,e,s,gg)
var oX=_n('view')
_rz(z,oX,'class',2,e,s,gg)
var lY=_n('view')
var aZ=_n('view')
_rz(z,aZ,'class',3,e,s,gg)
var t1=_oz(z,4,e,s,gg)
_(aZ,t1)
_(lY,aZ)
_(oX,lY)
var e2=_n('text')
var b3=_oz(z,5,e,s,gg)
_(e2,b3)
_(oX,e2)
_(cW,oX)
var o4=_n('view')
_rz(z,o4,'class',6,e,s,gg)
var x5=_n('view')
var o6=_n('view')
_rz(z,o6,'class',7,e,s,gg)
var f7=_oz(z,8,e,s,gg)
_(o6,f7)
_(x5,o6)
_(o4,x5)
var c8=_n('text')
var h9=_oz(z,9,e,s,gg)
_(c8,h9)
_(o4,c8)
_(cW,o4)
var o0=_n('view')
_rz(z,o0,'class',10,e,s,gg)
var cAB=_n('view')
var oBB=_n('view')
_rz(z,oBB,'class',11,e,s,gg)
var lCB=_oz(z,12,e,s,gg)
_(oBB,lCB)
_(cAB,oBB)
_(o0,cAB)
var aDB=_n('text')
var tEB=_oz(z,13,e,s,gg)
_(aDB,tEB)
_(o0,aDB)
_(cW,o0)
var eFB=_n('view')
_rz(z,eFB,'class',14,e,s,gg)
var bGB=_n('view')
var oHB=_n('view')
_rz(z,oHB,'class',15,e,s,gg)
var xIB=_oz(z,16,e,s,gg)
_(oHB,xIB)
_(bGB,oHB)
_(eFB,bGB)
var oJB=_n('text')
var fKB=_oz(z,17,e,s,gg)
_(oJB,fKB)
_(eFB,oJB)
_(cW,eFB)
var cLB=_n('view')
_rz(z,cLB,'class',18,e,s,gg)
var hMB=_n('view')
var oNB=_n('view')
_rz(z,oNB,'class',19,e,s,gg)
var cOB=_oz(z,20,e,s,gg)
_(oNB,cOB)
_(hMB,oNB)
_(cLB,hMB)
var oPB=_n('text')
var lQB=_oz(z,21,e,s,gg)
_(oPB,lQB)
_(cLB,oPB)
_(cW,cLB)
_(oV,cW)
_(r,oV)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var tSB=_n('view')
_rz(z,tSB,'class',0,e,s,gg)
var eTB=_n('view')
_rz(z,eTB,'class',1,e,s,gg)
var bUB=_n('view')
_rz(z,bUB,'class',2,e,s,gg)
var oVB=_oz(z,3,e,s,gg)
_(bUB,oVB)
_(eTB,bUB)
var xWB=_n('view')
_rz(z,xWB,'class',4,e,s,gg)
var oXB=_oz(z,5,e,s,gg)
_(xWB,oXB)
_(eTB,xWB)
_(tSB,eTB)
var fYB=_n('view')
_rz(z,fYB,'class',6,e,s,gg)
var cZB=_n('view')
_rz(z,cZB,'class',7,e,s,gg)
var h1B=_v()
_(cZB,h1B)
var o2B=function(o4B,c3B,l5B,gg){
var t7B=_n('view')
_rz(z,t7B,'class',12,o4B,c3B,gg)
var e8B=_mz(z,'image',['alt',13,'class',1,'src',2],[],o4B,c3B,gg)
_(t7B,e8B)
var b9B=_n('view')
_rz(z,b9B,'class',16,o4B,c3B,gg)
var o0B=_oz(z,17,o4B,c3B,gg)
_(b9B,o0B)
_(t7B,b9B)
var xAC=_n('view')
_rz(z,xAC,'class',18,o4B,c3B,gg)
var oBC=_oz(z,19,o4B,c3B,gg)
_(xAC,oBC)
_(t7B,xAC)
_(l5B,t7B)
return l5B
}
h1B.wxXCkey=2
_2z(z,10,o2B,e,s,gg,h1B,'item','index','index')
_(fYB,cZB)
_(tSB,fYB)
_(r,tSB)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var cDC=_v()
_(r,cDC)
if(_oz(z,0,e,s,gg)){cDC.wxVkey=1
var hEC=_n('view')
_rz(z,hEC,'class',1,e,s,gg)
var oFC=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var cGC=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(oFC,cGC)
_(hEC,oFC)
var oHC=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2],[],e,s,gg)
var lIC=_n('view')
_rz(z,lIC,'class',10,e,s,gg)
var aJC=_oz(z,11,e,s,gg)
_(lIC,aJC)
_(oHC,lIC)
var tKC=_n('view')
_rz(z,tKC,'class',12,e,s,gg)
var eLC=_oz(z,13,e,s,gg)
_(tKC,eLC)
_(oHC,tKC)
_(hEC,oHC)
var bMC=_n('view')
_rz(z,bMC,'class',14,e,s,gg)
var oNC=_mz(z,'cmd-icon',['bind:__l',15,'bind:click',1,'color',2,'data-event-opts',3,'type',4,'vueId',5],[],e,s,gg)
_(bMC,oNC)
_(hEC,bMC)
var xOC=_n('view')
_rz(z,xOC,'class',21,e,s,gg)
var oPC=_mz(z,'cmd-icon',['bind:__l',22,'bind:click',1,'color',2,'data-event-opts',3,'type',4,'vueId',5],[],e,s,gg)
_(xOC,oPC)
_(hEC,xOC)
_(cDC,hEC)
}
cDC.wxXCkey=1
cDC.wxXCkey=3
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var cRC=_n('view')
_rz(z,cRC,'class',0,e,s,gg)
var hSC=_n('view')
_rz(z,hSC,'class',1,e,s,gg)
var oTC=_n('view')
_rz(z,oTC,'class',2,e,s,gg)
var cUC=_oz(z,3,e,s,gg)
_(oTC,cUC)
_(hSC,oTC)
var oVC=_n('view')
_rz(z,oVC,'class',4,e,s,gg)
var lWC=_oz(z,5,e,s,gg)
_(oVC,lWC)
_(hSC,oVC)
_(cRC,hSC)
var aXC=_n('view')
_rz(z,aXC,'class',6,e,s,gg)
var tYC=_n('view')
_rz(z,tYC,'class',7,e,s,gg)
var eZC=_v()
_(tYC,eZC)
var b1C=function(x3C,o2C,o4C,gg){
var c6C=_n('view')
_rz(z,c6C,'class',12,x3C,o2C,gg)
var h7C=_mz(z,'image',['alt',13,'class',1,'src',2],[],x3C,o2C,gg)
_(c6C,h7C)
var o8C=_n('view')
_rz(z,o8C,'class',16,x3C,o2C,gg)
var c9C=_oz(z,17,x3C,o2C,gg)
_(o8C,c9C)
_(c6C,o8C)
var o0C=_n('view')
_rz(z,o0C,'class',18,x3C,o2C,gg)
var lAD=_mz(z,'cmd-icon',['bind:__l',19,'color',1,'size',2,'type',3,'vueId',4],[],x3C,o2C,gg)
_(o0C,lAD)
var aBD=_n('label')
_rz(z,aBD,'class',24,x3C,o2C,gg)
var tCD=_oz(z,25,x3C,o2C,gg)
_(aBD,tCD)
_(o0C,aBD)
_(c6C,o0C)
_(o4C,c6C)
return o4C
}
eZC.wxXCkey=4
_2z(z,10,b1C,e,s,gg,eZC,'item','index','index')
_(aXC,tYC)
_(cRC,aXC)
_(r,cRC)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var bED=_n('view')
_rz(z,bED,'class',0,e,s,gg)
var oFD=_mz(z,'swiper',['autoplay',1,'circular',1,'duration',2,'indicatorActiveColor',3,'indicatorColor',4,'indicatorDots',5,'interval',6],[],e,s,gg)
var xGD=_v()
_(oFD,xGD)
var oHD=function(cJD,fID,hKD,gg){
var cMD=_n('swiper-item')
var oND=_n('view')
_rz(z,oND,'class',12,cJD,fID,gg)
var lOD=_mz(z,'image',['alt',13,'class',1,'src',2],[],cJD,fID,gg)
_(oND,lOD)
_(cMD,oND)
_(hKD,cMD)
return hKD
}
xGD.wxXCkey=2
_2z(z,10,oHD,e,s,gg,xGD,'item','index','index')
_(bED,oFD)
_(r,bED)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var tQD=_n('view')
_rz(z,tQD,'class',0,e,s,gg)
var eRD=_mz(z,'index-swiper',['banners',1,'bind:__l',1,'vueId',2],[],e,s,gg)
_(tQD,eRD)
var bSD=_mz(z,'index-menu',['bind:__l',4,'vueId',1],[],e,s,gg)
_(tQD,bSD)
var oTD=_mz(z,'index-recommend',['bind:__l',6,'recommend',1,'vueId',2],[],e,s,gg)
_(tQD,oTD)
var xUD=_mz(z,'index-newdisk',['bind:__l',9,'newdisk',1,'vueId',2],[],e,s,gg)
_(tQD,xUD)
var oVD=_mz(z,'index-player',['bind:__l',12,'bind:list',1,'data-event-opts',2,'hidden',3,'vueId',4],[],e,s,gg)
_(tQD,oVD)
var fWD=_mz(z,'list-mini',['bind:__l',17,'class',1,'data-ref',2,'vueId',3],[],e,s,gg)
_(tQD,fWD)
_(r,tQD)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var hYD=_n('view')
_rz(z,hYD,'class',0,e,s,gg)
var oZD=_mz(z,'popup-layer',['bind:__l',1,'class',1,'data-ref',2,'direction',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var c1D=_n('view')
_rz(z,c1D,'class',7,e,s,gg)
var o2D=_n('view')
_rz(z,o2D,'class',8,e,s,gg)
var l3D=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var a4D=_n('view')
_rz(z,a4D,'class',12,e,s,gg)
var t5D=_n('rich-text')
_rz(z,t5D,'nodes',13,e,s,gg)
_(a4D,t5D)
_(l3D,a4D)
var e6D=_oz(z,14,e,s,gg)
_(l3D,e6D)
_(o2D,l3D)
var b7D=_n('view')
_rz(z,b7D,'class',15,e,s,gg)
var o8D=_mz(z,'cmd-icon',['bind:__l',16,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(b7D,o8D)
_(o2D,b7D)
_(c1D,o2D)
var x9D=_n('view')
_rz(z,x9D,'class',21,e,s,gg)
var o0D=_n('view')
_rz(z,o0D,'class',22,e,s,gg)
var fAE=_n('view')
_rz(z,fAE,'class',23,e,s,gg)
var cBE=_n('view')
_rz(z,cBE,'class',24,e,s,gg)
var hCE=_n('view')
_rz(z,hCE,'class',25,e,s,gg)
var oDE=_mz(z,'cmd-icon',['bind:__l',26,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(hCE,oDE)
_(cBE,hCE)
var cEE=_n('view')
_rz(z,cEE,'class',31,e,s,gg)
var oFE=_oz(z,32,e,s,gg)
_(cEE,oFE)
_(cBE,cEE)
var lGE=_n('view')
_rz(z,lGE,'class',33,e,s,gg)
var aHE=_oz(z,34,e,s,gg)
_(lGE,aHE)
_(cBE,lGE)
_(fAE,cBE)
var tIE=_n('label')
_rz(z,tIE,'class',35,e,s,gg)
var eJE=_oz(z,36,e,s,gg)
_(tIE,eJE)
_(fAE,tIE)
_(o0D,fAE)
var bKE=_n('view')
_rz(z,bKE,'class',37,e,s,gg)
var oLE=_oz(z,38,e,s,gg)
_(bKE,oLE)
_(o0D,bKE)
var xME=_n('view')
_rz(z,xME,'class',39,e,s,gg)
var oNE=_oz(z,40,e,s,gg)
_(xME,oNE)
_(o0D,xME)
var fOE=_n('view')
_rz(z,fOE,'class',41,e,s,gg)
var cPE=_oz(z,42,e,s,gg)
_(fOE,cPE)
_(o0D,fOE)
var hQE=_n('view')
_rz(z,hQE,'class',43,e,s,gg)
var oRE=_oz(z,44,e,s,gg)
_(hQE,oRE)
_(o0D,hQE)
var cSE=_n('view')
_rz(z,cSE,'class',45,e,s,gg)
var oTE=_oz(z,46,e,s,gg)
_(cSE,oTE)
_(o0D,cSE)
var lUE=_n('view')
_rz(z,lUE,'class',47,e,s,gg)
var aVE=_oz(z,48,e,s,gg)
_(lUE,aVE)
_(o0D,lUE)
var tWE=_n('view')
_rz(z,tWE,'class',49,e,s,gg)
var eXE=_oz(z,50,e,s,gg)
_(tWE,eXE)
_(o0D,tWE)
var bYE=_n('view')
_rz(z,bYE,'class',51,e,s,gg)
var oZE=_oz(z,52,e,s,gg)
_(bYE,oZE)
_(o0D,bYE)
var x1E=_n('view')
_rz(z,x1E,'class',53,e,s,gg)
var o2E=_oz(z,54,e,s,gg)
_(x1E,o2E)
_(o0D,x1E)
var f3E=_n('view')
_rz(z,f3E,'class',55,e,s,gg)
var c4E=_oz(z,56,e,s,gg)
_(f3E,c4E)
_(o0D,f3E)
var h5E=_n('view')
_rz(z,h5E,'class',57,e,s,gg)
var o6E=_oz(z,58,e,s,gg)
_(h5E,o6E)
_(o0D,h5E)
var c7E=_n('view')
_rz(z,c7E,'class',59,e,s,gg)
var o8E=_oz(z,60,e,s,gg)
_(c7E,o8E)
_(o0D,c7E)
var l9E=_n('view')
_rz(z,l9E,'class',61,e,s,gg)
var a0E=_oz(z,62,e,s,gg)
_(l9E,a0E)
_(o0D,l9E)
var tAF=_n('view')
_rz(z,tAF,'class',63,e,s,gg)
var eBF=_oz(z,64,e,s,gg)
_(tAF,eBF)
_(o0D,tAF)
var bCF=_n('view')
_rz(z,bCF,'class',65,e,s,gg)
var oDF=_oz(z,66,e,s,gg)
_(bCF,oDF)
_(o0D,bCF)
_(x9D,o0D)
_(c1D,x9D)
_(oZD,c1D)
_(hYD,oZD)
_(r,hYD)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oFF=_n('view')
_rz(z,oFF,'class',0,e,s,gg)
var fGF=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var cHF=_n('rich-text')
_rz(z,cHF,'nodes',4,e,s,gg)
_(fGF,cHF)
_(oFF,fGF)
var hIF=_n('view')
_rz(z,hIF,'class',5,e,s,gg)
var oJF=_oz(z,6,e,s,gg)
_(hIF,oJF)
_(oFF,hIF)
var cKF=_mz(z,'cmd-icon',['bind:__l',7,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(oFF,cKF)
var oLF=_n('view')
_rz(z,oLF,'class',14,e,s,gg)
var lMF=_oz(z,15,e,s,gg)
_(oLF,lMF)
_(oFF,oLF)
var aNF=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],e,s,gg)
var tOF=_oz(z,19,e,s,gg)
_(aNF,tOF)
_(oFF,aNF)
_(r,oFF)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var bQF=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var oRF=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(bQF,oRF)
var xSF=_n('view')
_rz(z,xSF,'class',5,e,s,gg)
var oTF=_n('view')
_rz(z,oTF,'class',6,e,s,gg)
var fUF=_oz(z,7,e,s,gg)
_(oTF,fUF)
_(xSF,oTF)
var cVF=_n('view')
_rz(z,cVF,'class',8,e,s,gg)
var hWF=_oz(z,9,e,s,gg)
_(cVF,hWF)
_(xSF,cVF)
var oXF=_n('view')
_rz(z,oXF,'class',10,e,s,gg)
var cYF=_oz(z,11,e,s,gg)
_(oXF,cYF)
_(xSF,oXF)
var oZF=_n('view')
_rz(z,oZF,'class',12,e,s,gg)
var l1F=_oz(z,13,e,s,gg)
_(oZF,l1F)
_(xSF,oZF)
var a2F=_n('view')
_rz(z,a2F,'class',14,e,s,gg)
var t3F=_oz(z,15,e,s,gg)
_(a2F,t3F)
_(xSF,a2F)
_(bQF,xSF)
_(r,bQF)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var b5F=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1],[],e,s,gg)
var o6F=_v()
_(b5F,o6F)
if(_oz(z,3,e,s,gg)){o6F.wxVkey=1
var x7F=_n('view')
_rz(z,x7F,'class',4,e,s,gg)
var o8F=_mz(z,'view',['class',5,'style',1],[],e,s,gg)
var f9F=_v()
_(o8F,f9F)
var c0F=function(oBG,hAG,cCG,gg){
var lEG=_n('view')
_rz(z,lEG,'class',11,oBG,hAG,gg)
var aFG=_oz(z,12,oBG,hAG,gg)
_(lEG,aFG)
_(cCG,lEG)
return cCG
}
f9F.wxXCkey=2
_2z(z,9,c0F,e,s,gg,f9F,'item','index','index')
_(x7F,o8F)
_(o6F,x7F)
}
else{o6F.wxVkey=2
var tGG=_n('view')
_rz(z,tGG,'class',13,e,s,gg)
var eHG=_oz(z,14,e,s,gg)
_(tGG,eHG)
_(o6F,tGG)
}
o6F.wxXCkey=1
_(r,b5F)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oJG=_n('view')
_rz(z,oJG,'class',0,e,s,gg)
var xKG=_n('view')
_rz(z,xKG,'class',1,e,s,gg)
var oLG=_oz(z,2,e,s,gg)
_(xKG,oLG)
_(oJG,xKG)
var fMG=_mz(z,'slider',['activeColor',3,'backgroundColor',1,'bindchange',2,'bindchanging',3,'blockSize',4,'data-event-opts',5,'value',6],[],e,s,gg)
_(oJG,fMG)
var cNG=_n('view')
_rz(z,cNG,'class',10,e,s,gg)
var hOG=_oz(z,11,e,s,gg)
_(cNG,hOG)
_(oJG,cNG)
_(r,oJG)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var cQG=_n('view')
_rz(z,cQG,'class',0,e,s,gg)
var oRG=_n('view')
_rz(z,oRG,'class',1,e,s,gg)
var lSG=_n('view')
_rz(z,lSG,'class',2,e,s,gg)
var aTG=_oz(z,3,e,s,gg)
_(lSG,aTG)
_(oRG,lSG)
var tUG=_mz(z,'cmd-icon',['bind:__l',4,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(oRG,tUG)
_(cQG,oRG)
var eVG=_n('view')
_rz(z,eVG,'class',11,e,s,gg)
var bWG=_n('view')
_rz(z,bWG,'class',12,e,s,gg)
var oXG=_v()
_(bWG,oXG)
var xYG=function(f1G,oZG,c2G,gg){
var o4G=_mz(z,'view',['bindtap',17,'class',1,'data-event-opts',2],[],f1G,oZG,gg)
var c5G=_oz(z,20,f1G,oZG,gg)
_(o4G,c5G)
_(c2G,o4G)
return c2G
}
oXG.wxXCkey=2
_2z(z,15,xYG,e,s,gg,oXG,'item','index','index')
_(eVG,bWG)
_(cQG,eVG)
_(r,cQG)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var l7G=_n('view')
_rz(z,l7G,'class',0,e,s,gg)
var a8G=_n('view')
_rz(z,a8G,'class',1,e,s,gg)
var t9G=_oz(z,2,e,s,gg)
_(a8G,t9G)
_(l7G,a8G)
var e0G=_n('view')
_rz(z,e0G,'class',3,e,s,gg)
var bAH=_n('view')
_rz(z,bAH,'class',4,e,s,gg)
var oBH=_v()
_(bAH,oBH)
var xCH=function(fEH,oDH,cFH,gg){
var oHH=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],fEH,oDH,gg)
var cIH=_n('view')
_rz(z,cIH,'class',12,fEH,oDH,gg)
var oJH=_oz(z,13,fEH,oDH,gg)
_(cIH,oJH)
_(oHH,cIH)
var lKH=_n('view')
_rz(z,lKH,'class',14,fEH,oDH,gg)
var aLH=_n('label')
_rz(z,aLH,'class',15,fEH,oDH,gg)
var tMH=_oz(z,16,fEH,oDH,gg)
_(aLH,tMH)
_(lKH,aLH)
var eNH=_n('label')
_rz(z,eNH,'class',17,fEH,oDH,gg)
var bOH=_oz(z,18,fEH,oDH,gg)
_(eNH,bOH)
_(lKH,eNH)
var oPH=_n('view')
_rz(z,oPH,'class',19,fEH,oDH,gg)
_(lKH,oPH)
var xQH=_n('label')
_rz(z,xQH,'class',20,fEH,oDH,gg)
var oRH=_oz(z,21,fEH,oDH,gg)
_(xQH,oRH)
_(lKH,xQH)
_(oHH,lKH)
_(cFH,oHH)
return cFH
}
oBH.wxXCkey=2
_2z(z,7,xCH,e,s,gg,oBH,'item','index','index')
_(e0G,bAH)
_(l7G,e0G)
_(r,l7G)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var cTH=_n('view')
_rz(z,cTH,'class',0,e,s,gg)
var hUH=_n('view')
_rz(z,hUH,'class',1,e,s,gg)
var oVH=_oz(z,2,e,s,gg)
_(hUH,oVH)
_(cTH,hUH)
var cWH=_n('view')
_rz(z,cWH,'class',3,e,s,gg)
var oXH=_n('view')
_rz(z,oXH,'class',4,e,s,gg)
var lYH=_v()
_(oXH,lYH)
var aZH=function(e2H,t1H,b3H,gg){
var x5H=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e2H,t1H,gg)
var o6H=_n('view')
_rz(z,o6H,'class',12,e2H,t1H,gg)
var f7H=_oz(z,13,e2H,t1H,gg)
_(o6H,f7H)
_(x5H,o6H)
var c8H=_n('view')
_rz(z,c8H,'class',14,e2H,t1H,gg)
var h9H=_oz(z,15,e2H,t1H,gg)
_(c8H,h9H)
_(x5H,c8H)
_(b3H,x5H)
return b3H
}
lYH.wxXCkey=2
_2z(z,7,aZH,e,s,gg,lYH,'item','index','index')
_(cWH,oXH)
_(cTH,cWH)
_(r,cTH)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var cAI=_n('view')
_rz(z,cAI,'class',0,e,s,gg)
var oBI=_mz(z,'history',['bind:__l',1,'hidden',1,'search',2,'vueId',3],[],e,s,gg)
_(cAI,oBI)
var lCI=_mz(z,'result',['bind:__l',5,'hidden',1,'result',2,'vueId',3],[],e,s,gg)
_(cAI,lCI)
var aDI=_mz(z,'hot',['bind:__l',9,'hidden',1,'search',2,'vueId',3],[],e,s,gg)
_(cAI,aDI)
_(r,cAI)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


undefined

__wxAppCode__['app.wxss']=undefined;    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/cmd-icon/cmd-icon.wxss']=undefined;    
__wxAppCode__['components/cmd-icon/cmd-icon.wxml']=$gwx('./components/cmd-icon/cmd-icon.wxml');

__wxAppCode__['components/navigation/bar.wxss']=undefined;    
__wxAppCode__['components/navigation/bar.wxml']=$gwx('./components/navigation/bar.wxml');

__wxAppCode__['components/popup/popup-layer.wxss']=undefined;    
__wxAppCode__['components/popup/popup-layer.wxml']=$gwx('./components/popup/popup-layer.wxml');

__wxAppCode__['pages/index/index-menu.wxss']=undefined;    
__wxAppCode__['pages/index/index-menu.wxml']=$gwx('./pages/index/index-menu.wxml');

__wxAppCode__['pages/index/index-newdisk.wxss']=undefined;    
__wxAppCode__['pages/index/index-newdisk.wxml']=$gwx('./pages/index/index-newdisk.wxml');

__wxAppCode__['pages/index/index-player.wxss']=undefined;    
__wxAppCode__['pages/index/index-player.wxml']=$gwx('./pages/index/index-player.wxml');

__wxAppCode__['pages/index/index-recommend.wxss']=undefined;    
__wxAppCode__['pages/index/index-recommend.wxml']=$gwx('./pages/index/index-recommend.wxml');

__wxAppCode__['pages/index/index-swiper.wxss']=undefined;    
__wxAppCode__['pages/index/index-swiper.wxml']=$gwx('./pages/index/index-swiper.wxml');

__wxAppCode__['pages/index/index.wxss']=undefined;    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/list/list-mini.wxss']=undefined;    
__wxAppCode__['pages/list/list-mini.wxml']=$gwx('./pages/list/list-mini.wxml');

__wxAppCode__['pages/player/control.wxss']=undefined;    
__wxAppCode__['pages/player/control.wxml']=$gwx('./pages/player/control.wxml');

__wxAppCode__['pages/player/cover.wxss']=undefined;    
__wxAppCode__['pages/player/cover.wxml']=$gwx('./pages/player/cover.wxml');

__wxAppCode__['pages/player/lyrics.wxss']=undefined;    
__wxAppCode__['pages/player/lyrics.wxml']=$gwx('./pages/player/lyrics.wxml');

__wxAppCode__['pages/player/player.wxss']=undefined;    
__wxAppCode__['pages/player/player.wxml']=$gwx('./pages/player/player.wxml');

__wxAppCode__['pages/player/progress.wxss']=undefined;    
__wxAppCode__['pages/player/progress.wxml']=$gwx('./pages/player/progress.wxml');

__wxAppCode__['pages/search/history.wxss']=undefined;    
__wxAppCode__['pages/search/history.wxml']=$gwx('./pages/search/history.wxml');

__wxAppCode__['pages/search/hot.wxss']=undefined;    
__wxAppCode__['pages/search/hot.wxml']=$gwx('./pages/search/hot.wxml');

__wxAppCode__['pages/search/result.wxss']=undefined;    
__wxAppCode__['pages/search/result.wxml']=$gwx('./pages/search/result.wxml');

__wxAppCode__['pages/search/search.wxss']=undefined;    
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
