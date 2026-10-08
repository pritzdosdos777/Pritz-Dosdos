import React from 'react';
import {AbsoluteFill,interpolate,spring,staticFile,useCurrentFrame,useVideoConfig} from 'remotion';
import {Video} from '@remotion/media';
import {theme} from './theme';
export const Brand:React.FC<{dark?:boolean}>=({dark=false})=><div style={{color:dark?theme.black:theme.white,fontFamily:theme.font}}><div style={{fontSize:49,letterSpacing:-1.5}}>LIFETIME</div><div style={{fontFamily:theme.body,fontSize:20,letterSpacing:2.1,marginTop:5}}>CLINICAL WEIGHT CONTROL</div></div>;
export const PunchIn:React.FC<{scale?:number;start?:number;duration?:number}>=({scale=1,start=0,duration=1676})=>{
 const {fps}=useVideoConfig();
 return <Video name="Original speaker · visual framing" src={staticFile('source.mp4')} from={start} trimBefore={start} durationInFrames={duration} muted premountFor={fps} objectFit="cover" style={{width:'100%',height:'100%',transformOrigin:'50% 30%',scale}}/>;
};
export const KeywordCaption:React.FC<{first:string;accent:string;eyebrow?:string}>=({first,accent,eyebrow})=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 return <div style={{position:'absolute',left:88,right:150,top:1090,fontFamily:theme.font,textShadow:'0 5px 20px #0008',translate:`0 ${interpolate(f,[0,5],[40,0],{extrapolateRight:'clamp'})}px`,opacity:interpolate(f,[0,3],[0,1],{extrapolateRight:'clamp'})}}>
 {eyebrow&&<div style={{fontFamily:theme.body,fontSize:23,letterSpacing:3,color:theme.white,marginBottom:22}}>{eyebrow}</div>}
 <div style={{fontSize:110,lineHeight:1.02,letterSpacing:-4,color:theme.white}}>{first}</div>
 <div style={{fontSize:110,lineHeight:1.02,letterSpacing:-4,color:theme.yellow,scale:0.97+0.03*spring({frame:Math.max(0,f-2),fps,config:{damping:18}}),transformOrigin:'left center'}}>{accent}</div>
 </div>;
};
export const GraphicCard:React.FC<{children:React.ReactNode;label?:string}>=({children,label})=>{
 const f=useCurrentFrame();
 return <AbsoluteFill style={{background:'#101214F2',backdropFilter:'blur(18px)',fontFamily:theme.font,color:theme.white,opacity:interpolate(f,[0,3],[0,1],{extrapolateRight:'clamp'})}}>
 <div style={{position:'absolute',left:88,top:170}}><Brand/></div>
 {label&&<div style={{position:'absolute',left:88,top:475,color:theme.muted,fontFamily:theme.body,fontSize:24,letterSpacing:4}}>{label}</div>}
 {children}
 </AbsoluteFill>;
};
export const BlurredBackground:React.FC=()=> <AbsoluteFill style={{background:'linear-gradient(0deg,#111315F0, #11131599)',backdropFilter:'blur(16px)'}}/>;
export const SplitScreen:React.FC<{title:string;detail:string}>=({title,detail})=>{
 const f=useCurrentFrame();
 return <><div style={{position:'absolute',top:975,left:70,right:130,height:460,background:theme.yellow,borderRadius:18,padding:'50px 40px',fontFamily:theme.font,color:theme.black,boxShadow:'0 18px 50px #0005',translate:`0 ${interpolate(f,[0,5],[60,0],{extrapolateRight:'clamp'})}px`}}><div style={{fontSize:92,lineHeight:1.04,letterSpacing:-3}}>{title}</div><div style={{fontFamily:theme.body,fontSize:32,lineHeight:1.4,marginTop:25}}>{detail}</div></div></>;
};
