import React from 'react';
import {interpolate,spring,useCurrentFrame,useVideoConfig} from 'remotion';
import type {Caption} from '@remotion/captions';
import {theme} from './theme';
import captions from '../public/captions.json';
const important=new Set(['diet','different','exercising','calorie','motivated','busy','stressed','tired','started','strict','strategy','personalized','individual','scale','composition','metabolism','lifestyle','goals','progress','real','guidance','track','stop','over','step','discovery']);
export type Phrase={words:Caption[];start:number;end:number};
const phrases:Phrase[]=[];
let words:Caption[]=[];
for(const word of captions as Caption[]){
 words.push(word);
 if(words.length>=4||/[,.?!]$/.test(word.text)||word.pageBreakAfter){phrases.push({words,start:words[0].startMs,end:word.endMs});words=[];}
}
if(words.length)phrases.push({words,start:words[0].startMs,end:words[words.length-1].endMs});
export const DynamicCaption:React.FC<{bottom?:number;maxTime?:number}>=({bottom=360,maxTime=57000})=>{
 const frame=useCurrentFrame();const {fps}=useVideoConfig();const ms=frame/fps*1000;
 if(ms>=maxTime)return null;
 const phrase=phrases.find((p,i)=>ms>=p.start&&ms<Math.min((phrases[i+1]?.start??p.end+100),p.end+220));
 if(!phrase)return null;
 const local=(ms-phrase.start)/1000*fps;
 return <div style={{position:'absolute',left:88,right:150,bottom,textAlign:'center',fontFamily:theme.font,fontSize:74,lineHeight:1.12,letterSpacing:-1.6,color:theme.white,textTransform:'uppercase',textShadow:'0 4px 2px #000, 0 8px 30px #000B',opacity:interpolate(local,[0,2],[0,1],{extrapolateRight:'clamp'}),scale:0.94+0.06*spring({frame:local,fps,config:{damping:18,stiffness:260}}),translate:`0 ${interpolate(local,[0,4],[14,0],{extrapolateRight:'clamp'})}px`}}>
 {phrase.words.map((w,i)=>{const key=w.text.trim().toLowerCase().replace(/[^a-z]/g,'');return <span key={i} style={{color:important.has(key)&&ms>=w.startMs?theme.yellow:theme.white}}>{w.text}</span>;})}
 </div>;
};
