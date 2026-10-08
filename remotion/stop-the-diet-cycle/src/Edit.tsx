import React from 'react';
import {AbsoluteFill,Sequence,staticFile,useVideoConfig} from 'remotion';
import {Audio} from '@remotion/media';
import {Brand,PunchIn,KeywordCaption,SplitScreen} from './Components';
import {CTA,Cycle,Factors,Habits,Pressure} from './Scenes';
import {DynamicCaption} from './DynamicCaption';
import {theme} from './theme';
import {fontCss} from './fonts';
export const Edit:React.FC=()=>{
 const {fps}=useVideoConfig();
 return <AbsoluteFill style={{background:theme.black,color:theme.white,fontFamily:theme.font,overflow:'hidden'}}>
 <style>{fontCss}</style>
 <Audio name="Original voice · complete and unchanged" src={staticFile('source.mp4')} durationInFrames={1676} premountFor={fps}/>
 <PunchIn scale={1} start={0} duration={54}/>
 <PunchIn scale={1.065} start={54} duration={102}/>
 <PunchIn scale={1} start={156} duration={163}/>
 <PunchIn scale={1.075} start={319} duration={88}/>
 <PunchIn scale={1.01} start={407} duration={70}/>
 <PunchIn scale={1.09} start={477} duration={54}/>
 <PunchIn scale={1.01} start={531} duration={40}/>
 <PunchIn scale={1.075} start={571} duration={65}/>
 <PunchIn scale={1} start={636} duration={55}/>
 <PunchIn scale={1.055} start={691} duration={90}/>
 <PunchIn scale={1.09} start={781} duration={48}/>
 <PunchIn scale={1} start={829} duration={79}/>
 <PunchIn scale={1.03} start={908} duration={204}/>
 <PunchIn scale={1.07} start={1112} duration={110}/>
 <PunchIn scale={1} start={1222} duration={54}/>
 <PunchIn scale={1.055} start={1276} duration={71}/>
 <PunchIn scale={1.09} start={1347} duration={87}/>
 <PunchIn scale={1} start={1434} duration={242}/>
 <AbsoluteFill style={{pointerEvents:'none',background:'linear-gradient(180deg,#11131530 0%,transparent 23%,transparent 46%,#11131520 57%,#111315C9 100%)'}}/>
 <Sequence name="Lifetime wordmark" durationInFrames={157} premountFor={fps}><div style={{position:'absolute',left:88,top:160}}><Brand/></div></Sequence>
 <Sequence name="Hook · how many times" from={30} durationInFrames={68} premountFor={fps}><KeywordCaption first="HOW MANY" accent="TIMES?"/></Sequence>
 <Sequence name="Promise of a different result" from={118} durationInFrames={36} premountFor={fps}><KeywordCaption first="THIS TIME." accent="DIFFERENT?"/></Sequence>
 <Sequence name="Three familiar diet routines" from={157} durationInFrames={99} premountFor={fps}><Habits/></Sequence>
 <Sequence name="Reality interrupts motivation" from={326} durationInFrames={24} premountFor={fps}><KeywordCaption first="REAL LIFE" accent="HAPPENS."/></Sequence>
 <Sequence name="Busy · stressed · tired" from={351} durationInFrames={53} premountFor={fps}><Pressure/></Sequence>
 <Sequence name="Cycle diagram" from={484} durationInFrames={47} premountFor={fps}><Cycle/></Sequence>
 <Sequence name="Turning point · strict diet" from={571} durationInFrames={63} premountFor={fps}><KeywordCaption first="ANOTHER" accent="STRICT DIET?"/></Sequence>
 <Sequence name="Turning point · different strategy" from={638} durationInFrames={52} premountFor={fps}><SplitScreen title="A DIFFERENT STRATEGY." detail="An approach built around the individual."/></Sequence>
 <Sequence name="Introduce Lifetime" from={694} durationInFrames={44} premountFor={fps}><div style={{position:'absolute',left:88,top:1130,background:'#111315E8',borderLeft:`7px solid ${theme.yellow}`,padding:'30px 34px'}}><Brand/></div></Sequence>
 <Sequence name="Personalized to the individual" from={781} durationInFrames={48} premountFor={fps}><KeywordCaption first="PERSONALIZED." accent="TO YOU."/></Sequence>
 <Sequence name="Beyond the scale" from={850} durationInFrames={58} premountFor={fps}><KeywordCaption first="MORE THAN" accent="THE SCALE."/></Sequence>
 <Sequence name="The bigger picture · personal factors" from={923} durationInFrames={187} premountFor={fps}><Factors/></Sequence>
 <Sequence name="Diet hopping statement" from={1166} durationInFrames={56} premountFor={fps}><KeywordCaption first="ONE DIET." accent="THEN THE NEXT."/></Sequence>
 <Sequence name="Real life fit" from={1222} durationInFrames={54} premountFor={fps}><SplitScreen title="A PLAN THAT FITS." detail="Your body. Your real life."/></Sequence>
 <Sequence name="Professional guidance" from={1276} durationInFrames={71} premountFor={fps}><KeywordCaption first="GUIDANCE." accent="STAY ON TRACK."/></Sequence>
 <Sequence name="Stop starting over" from={1347} durationInFrames={55} premountFor={fps}><KeywordCaption first="STOP" accent="STARTING OVER."/></Sequence>
 <Sequence name="First step" from={1402} durationInFrames={32} premountFor={fps}><KeywordCaption first="TAKE THE" accent="FIRST STEP."/></Sequence>
 <DynamicCaption bottom={280} maxTime={57350}/>
 <Sequence name="49 dollar Discovery Visit · call today" from={1434} durationInFrames={292} premountFor={fps}><CTA/></Sequence>
 </AbsoluteFill>;
};
