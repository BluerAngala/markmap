import{S as t,i as r,s as e,e as a,t as s,g as n,h,j as l,d as o,k as c,l as i,n as f,a as u,b as p,y as g,z as d,A as m,B as b}from"./client.db4b186e.js";function v(t,r,e){const a=t.slice();return a[4]=r[e],a}function E(t){let r,e,u,p,g,d=t[4].name+"";return{c(){r=a("li"),e=a("a"),u=s(d),this.h()},l(t){r=n(t,"LI",{});var a=h(r);e=n(a,"A",{"aria-current":!0,href:!0});var s=h(e);u=l(s,d),s.forEach(o),a.forEach(o),this.h()},h(){c(e,"aria-current",p=t[0]===t[4]?"page":void 0),c(e,"href",g=t[4].path)},m(t,a){i(t,r,a),f(r,e),f(e,u)},p(t,r){1&r&&p!==(p=t[0]===t[4]?"page":void 0)&&c(e,"aria-current",p)},d(t){t&&o(r)}}}function x(t){let r,e,m,b,x,y,A,k,L=t[2],$=[];for(let r=0;r<L.length;r+=1)$[r]=E(v(t,L,r));return{c(){r=a("nav"),e=a("ul");for(let t=0;t<$.length;t+=1)$[t].c();m=u(),b=a("li"),x=u(),y=a("li"),A=a("a"),k=s("GitHub"),this.h()},l(t){r=n(t,"NAV",{});var a=h(r);e=n(a,"UL",{class:!0});var s=h(e);for(let t=0;t<$.length;t+=1)$[t].l(s);m=p(s),b=n(s,"LI",{class:!0}),h(b).forEach(o),x=p(s),y=n(s,"LI",{});var c=h(y);A=n(c,"A",{href:!0,target:!0,rel:!0});var i=h(A);k=l(i,"GitHub"),i.forEach(o),c.forEach(o),s.forEach(o),a.forEach(o),this.h()},h(){c(b,"class","flex-1"),c(A,"href","https://github.com/gera2ld/markmap"),c(A,"target","_blank"),c(A,"rel","noreferrer noopener"),c(e,"class","flex")},m(t,a){i(t,r,a),f(r,e);for(let t=0;t<$.length;t+=1)$[t].m(e,null);f(e,m),f(e,b),f(e,x),f(e,y),f(y,A),f(A,k)},p(t,[r]){if(5&r){let a;for(L=t[2],a=0;a<L.length;a+=1){const s=v(t,L,a);$[a]?$[a].p(s,r):($[a]=E(s),$[a].c(),$[a].m(e,m))}for(;a<$.length;a+=1)$[a].d(1);$.length=L.length}},i:g,o:g,d(t){t&&o(r),d($,t)}}}function y(t,r,e){let a;const{page:s}=m();b(t,s,(t=>e(3,a=t)));const n=[{path:".",name:"home"},{path:"repl",name:"try it out"},{path:"docs",name:"docs"}];let h;return t.$$.update=()=>{if(8&t.$$.dirty){const t=a.path.split("/")[1];e(0,h=n.find((r=>r.path===t))||n[0])}},[h,s,n]}class A extends t{constructor(t){super(),r(this,t,y,x,e,{})}}function k(t){let r,e,u,p;return{c(){r=a("footer"),e=s("Designed with ♥ by "),u=a("a"),p=s("gera2ld"),this.h()},l(t){r=n(t,"FOOTER",{});var a=h(r);e=l(a,"Designed with ♥ by "),u=n(a,"A",{href:!0,target:!0,rel:!0});var s=h(u);p=l(s,"gera2ld"),s.forEach(o),a.forEach(o),this.h()},h(){c(u,"href","https://github.com/gera2ld"),c(u,"target","_blank"),c(u,"rel","noreferrer noopener")},m(t,a){i(t,r,a),f(r,e),f(r,u),f(u,p)},p:g,i:g,o:g,d(t){t&&o(r)}}}class L extends t{constructor(t){super(),r(this,t,null,k,e,{})}}export{L as F,A as H};
