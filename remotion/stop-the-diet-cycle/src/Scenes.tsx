import React from 'react';
import {interpolate,spring,useCurrentFrame,useVideoConfig} from 'remotion';
import {theme} from './theme';
import {GraphicCard} from './Components';
const Enter:React.FC<{delay?:number;children:React.ReactNode}>=({delay=0,children})=>{const f=useCurrentFrame();const {fps}=useVideoConfig();return <div style={{opacity:interpolate(f,[delay,delay+3],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'}),translate:`0 ${interpolate(f,[delay,delay+6],[50,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}px`,scale:0.96+0.04*spring({frame:Math.max(0,f-delay),fps,config:{damping:20,stiffness:220}})}}>{children}</div>;};
export const Habits:React.FC=()=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();const active=f<1.26*fps?0:f<2.68*fps?1:2;
 return <GraphicCard label="THE START-OVER ROUTINE"><div style={{position:'absolute',left:88,right:150,top:640}}>
 {['CLEAN THE KITCHEN','START EXERCISING','COUNT EVERY CALORIE'].map((text,i)=><div key={text} style={{marginBottom:25,opacity:f>=i*1.26*fps?1:0}}><Enter delay={i*1.26*fps}><div style={{display:'flex',alignItems:'center',gap:30,padding:'35px 26px',borderRadius:10,background:i===active?theme.yellow:theme.panel,color:i===active?theme.black:theme.white}}><span style={{fontSize:33,opacity:0.65}}>0{i+1}</span><div style={{fontSize:57,lineHeight:1.1,letterSpacing:-1.5}}>{text}</div></div></Enter></div>)}
 <div style={{fontSize:25,fontFamily:theme.body,letterSpacing:2,marginTop:28,color:theme.muted}}>A FAMILIAR BEGINNING.</div></div></GraphicCard>;
};
export const Pressure:React.FC=()=>{
 const {fps}=useVideoConfig();
 return <div style={{position:'absolute',left:88,top:1070,fontFamily:theme.font,fontSize:103,lineHeight:1.02,letterSpacing:-3}}>
 <Enter><div style={{color:theme.white}}>BUSY.</div></Enter>
 <Enter delay={Math.round(.6*fps)}><div style={{color:theme.white}}>STRESSED.</div></Enter>
 <Enter delay={Math.round(1.36*fps)}><div style={{color:theme.yellow}}>TIRED.</div></Enter>
 </div>;
};
export const Cycle:React.FC=()=>{
 const f=useCurrentFrame();
 return <GraphicCard label="THE DIET CYCLE"><div style={{position:'absolute',left:88,right:150,top:590}}>
 <Enter><div style={{fontSize:96,lineHeight:1.04,letterSpacing:-3}}>BACK WHERE<br/>YOU <span style={{color:theme.yellow}}>STARTED.</span></div></Enter>
 <svg viewBox="0 0 840 360" style={{width:800,marginTop:42,opacity:interpolate(f,[6,11],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}><path d="M 190 70 C 520 -50 780 70 725 245 C 650 410 265 335 210 220" fill="none" stroke={theme.yellow} strokeWidth="9" strokeDasharray="1100" strokeDashoffset={interpolate(f,[8,36],[1100,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}/><path d="M180 229 L205 193 L245 213" fill="none" stroke={theme.yellow} strokeWidth="9"/><text x="210" y="132" fill="white" fontSize="52" fontFamily={theme.font}>START</text><text x="380" y="212" fill="white" fontSize="52" fontFamily={theme.font}>RESTRICT</text><text x="420" y="302" fill={theme.yellow} fontSize="52" fontFamily={theme.font}>REPEAT</text></svg>
 </div></GraphicCard>;
};
export const Factors:React.FC=()=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 const cards=[{text:'BODY COMPOSITION',detail:'More than scale weight',at:0},{text:'METABOLISM',detail:'Your individual factors',at:1.3},{text:'LIFESTYLE',detail:'How you live',at:2.35},{text:'GOALS',detail:'What matters to you',at:3.3}];
 return <GraphicCard label="LOOK AT THE INDIVIDUAL"><div style={{position:'absolute',left:88,right:150,top:585}}><div style={{fontSize:83,lineHeight:1.04,letterSpacing:-2.5,marginBottom:52}}>THE <span style={{color:theme.yellow}}>BIGGER</span><br/>PICTURE.</div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:22}}>
 {cards.map((c,i)=><Enter key={c.text} delay={Math.round(c.at*fps)}><div style={{minHeight:240,background:f/fps>=c.at&&f/fps<c.at+1.05?theme.yellow:theme.panel,border:'1px solid #45474B',borderRadius:14,padding:29,color:f/fps>=c.at&&f/fps<c.at+1.05?theme.black:theme.white}}><div style={{fontFamily:theme.body,fontSize:23,marginBottom:20}}>0{i+1}</div><div style={{fontSize:40,lineHeight:1.14,letterSpacing:-.8}}>{c.text}</div><div style={{fontFamily:theme.body,fontSize:22,marginTop:19,lineHeight:1.35,opacity:.8}}>{c.detail}</div></div></Enter>)}
 </div><Enter delay={Math.round(4.4*fps)}><div style={{marginTop:28,fontFamily:theme.body,fontSize:26,color:theme.muted}}>And other factors that may affect your progress.</div></Enter></div></GraphicCard>;
};
export const CTA:React.FC=()=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();const phone=f>=5.48*fps;
 return <GraphicCard><div style={{position:'absolute',left:88,right:150,top:505}}>
 <Enter><div style={{fontSize:95,lineHeight:1.02,letterSpacing:-3}}>STOP<br/>STARTING <span style={{color:theme.yellow}}>OVER.</span></div></Enter>
 <Enter delay={4}><div style={{height:6,width:100,background:theme.yellow,marginTop:37,marginBottom:34}}/></Enter>
 <Enter delay={8}><div style={{fontSize:165,lineHeight:1,color:theme.yellow,letterSpacing:-7}}>$49</div><div style={{fontSize:54,lineHeight:1.15,marginTop:18}}>NEW CLIENT<br/>DISCOVERY VISIT</div></Enter>
 <Enter delay={20}><div style={{fontFamily:theme.body,fontSize:30,color:'#BFC1C4',marginTop:35,lineHeight:1.4}}>Take the first step.</div></Enter>
 <Enter delay={Math.round(5.48*fps)}><div style={{marginTop:65,background:theme.yellow,color:theme.black,borderRadius:10,padding:'30px 24px',fontSize:64,letterSpacing:-1.8,textAlign:'center'}}>844-832-8567</div><div style={{fontFamily:theme.body,fontSize:25,textAlign:'center',marginTop:22,color:theme.white}}>CALL TODAY</div></Enter>
 <div style={{marginTop:phone?50:65,fontFamily:theme.body,fontSize:25,lineHeight:1.4,color:theme.muted}}>lifetimeclinicalweightcontrol.com</div>
 </div></GraphicCard>;
};
