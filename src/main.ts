import {desk} from "@shared/desk";
import {wrap,rect,label,type Frame} from "@shared/surface";
type S={level:number;path:number[];dir:number;status:string};const boards=[[2,8,13],[4,10,18],[6,12,19],[3,11,17]];
const dx=[1,0,-1,0],dy=[0,1,0,-1];function crossed(a:number[],p:number,q:number){for(let i=1;i<a.length;i++)if((a[i-1]===p&&a[i]===q)||(a[i-1]===q&&a[i]===p))return true;return false;}
desk<S>({name:"Route Stitch",accent:"#A9DA64",motion:{"motif":"turnout","color":"#A9DA64","shine":"#EFFDB9"},initial:()=>({level:0,path:[0],dir:0,status:"Visit every beacon"}),render:s=>{
 const art:Frame=[];const pos=s.path[s.path.length-1],beacons=boards[s.level];for(let cell=0;cell<20;cell++){
 const x=4+(cell%5)*11,y=2+Math.floor(cell/5)*4;art.push(rect("p"+cell,x,y,2,2,cell===pos?"#FFFFFFFF":cell===0?"#77CFC6FF":beacons.includes(cell)?"#FFB868FF":"#38484DFF"));}
 for(let i=1;i<s.path.length;i++){const a=s.path[i-1],b=s.path[i],x1=5+(a%5)*11,y1=3+Math.floor(a/5)*4,x2=5+(b%5)*11,y2=3+Math.floor(b/5)*4;
 art.push(rect("edge"+i,Math.min(x1,x2),Math.min(y1,y2),Math.max(1,Math.abs(x1-x2)),Math.max(1,Math.abs(y1-y2)),"#59AA9AFF"));}
 art.push(label("arrow",["E","S","W","N"][s.dir],62,4,"#FFE3AAFF"));
 return {art,title:"",value:"",lines:["Board "+(s.level+1)+" / "+boards.length,s.status,"Beacons "+beacons.filter(c=>s.path.includes(c)).length+"/3","Wheel: aim / click: step","Start: undo","Hold Start: restart"]};},
 action:(s,k)=>{if(k==="hold-start"){s.path=[0];s.status="Visit every beacon";return;}if(k==="start"){if(s.path.length>1)s.path.pop();s.status="Last step undone";return;}
 if(k==="up"||k==="down")s.dir=wrap(s.dir+(k==="up"?1:-1),4);
 if(k!=="ok")return;if(s.status==="Loop complete"){s.level=wrap(s.level+1,boards.length);s.path=[0];s.status="Visit every beacon";return;}
 const a=s.path[s.path.length-1],x=a%5+dx[s.dir],y=Math.floor(a/5)+dy[s.dir],b=y*5+x;
 if(x<0||x>=5||y<0||y>=4){s.status="Grid edge";return;}if(crossed(s.path,a,b)){s.status="Edge already sewn";return;}
 s.path.push(b);s.status=b===0&&boards[s.level].every(n=>s.path.includes(n))?"Loop complete":"Keep stitching";}});
