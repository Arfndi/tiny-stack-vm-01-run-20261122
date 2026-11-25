let{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env
let F=require("fs"),o="",Y=F.readFileSync,W=F.writeFileSync,H="a+b#a-b#Math.imul(a,b)#a/b#a%b#A/B#A%B#-b#a&b#a|b#a^b#~b#a<<b#a>>b#a>>>b#0#a==b#a<b#A<B".split("#"),V=d=>{o="";
let P=Y(I+"/"+d+"/program.bin"),N=Y(I+"/"+d+"/input.bin"),D=new Int32Array(512),C=[],s=0,c=0,p=0,t=0,j=0,k,q,u,b,a,A,B
for(;t++-1e6;){if(k=P[p],k==null)return 9;if(!(q=`!2b%'+,0        *******&***&*** ***             AEEA!           &)              %%"%`.charCodeAt(k)-32))return 5;if(!k)return 0;q--;u=q/4&3;if((p+=1+(q>>4))>P.length)return 9;if(s<u|s-u+(q&3)>256)return s<u?2:3
if(k<3)D[s++]=k-1?P.readInt32LE(p-4):P.readInt8(p-1)
else if(k==3)s--
else if(k==4||k==6)D[s]=D[s-k/2+1],s++
else if(k==5)b=D[s-1],D[s-1]=D[s-2],D[s-2]=b
else if(k==7)a=D[s-3],D.copyWithin(s-3,s-2,s),D[s-1]=a
else if(k<35){b=D[s-1],a=D[s-2],A=a>>>0,B=b>>>0;if(k-19>>>0<4&&!b)return 4;D[s-u]=eval(H[k-16]);s-=u-1}
else if(k<53){if(k==51){if(c>>6)return 7;C[c++]=p;p=P[p-2]|P[p-1]<<8}else if(k==52){if(!c)return 8;p=C[--c]}else p+=P.readInt16LE(p-2)*(k<49||(k==49)==!D[--s])}
else if(k<66){a=D[s-1];if(a>>8)return 6;a|=256;k==64?D[s-1]=D[a]:(s-=2,D[a]=D[s])}
else if(k<82){a=D[--s];if(k==80)a=""+a;if(o.length+(a.length||1)>65536)return 11;o+=k==80?a:String.fromCharCode(a)}
else if(k==82)D[s++]=N[j++]??-1
else return D[--s]&255}return 10}
F.readdirSync(I).map(d=>{let y=O+"/"+d+"/";F.mkdirSync(y,{recursive:!0});W(y+"exit.txt",""+V(d));W(y+"stdout.bin",o,"latin1")})
