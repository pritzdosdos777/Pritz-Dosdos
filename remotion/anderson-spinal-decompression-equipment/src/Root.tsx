import {AbsoluteFill,Composition,Sequence,staticFile,useCurrentFrame,useVideoConfig,interpolate} from 'remotion';
import {Video,Audio} from '@remotion/media';
import {BasicCaptions} from './basic-captions';
import {Point,EndCard,mint,Rise} from './Graphics';
import {Brand} from './Brand';
import {DiscBroll,PressureBroll,StretchBroll,PhotoBroll} from './Broll';
import {EquipmentBroll} from './Equipment';
import './style.css';
const Narration=()=>{const f=useCurrentFrame();const zoom=1+.022*Math.sin(f/140)**2;return <><Video src={staticFile('presenter.mp4')} objectFit="cover" style={{width:'100%',height:'100%',transform:`scale(${zoom})`}} volume={1}/><AbsoluteFill style={{background:'linear-gradient(180deg,rgba(6,36,43,.15),transparent 24%,transparent 52%,rgba(6,25,32,.78) 100%)'}}/><div style={{position:'absolute',left:84,top:85}}><Brand/></div><Sequence durationInFrames={128} name="Opening question"><Rise style={{position:'absolute',left:80,right:80,top:1090,color:'#fff'}}><div style={{fontSize:29,letterSpacing:5,color:mint,fontWeight:700}}>EXPLAINED BY DR. ANDERSON</div><div style={{fontSize:90,fontWeight:700,lineHeight:1.02,letterSpacing:-4,marginTop:25}}>What is spinal<br/><span style={{color:mint}}>decompression?</span></div></Rise></Sequence><Sequence from={130} durationInFrames={108} name="Your spine over time" premountFor={25}><Point number="01" label="The basics" title="Your spine, over time." detail="A simple way to understand it."/></Sequence><Sequence from={246} durationInFrames={92} name="Discs cushion the spine" premountFor={25}><Point number="02" label="Spinal discs" title="Built to cushion." graphic="spine"/></Sequence><Sequence from={344} durationInFrames={129} name="Aging, injuries and daily wear" premountFor={25}><Point number="03" label="Everyday stress" title="Aging. Injuries. Daily wear."/></Sequence><Sequence from={477} durationInFrames={80} name="Compression and irritation" premountFor={25}><Point number="04" label="Pressure builds" title="Compressed & irritated." graphic="spine"/></Sequence><Sequence from={568} durationInFrames={255} name="Symptoms and nerve pressure" premountFor={25}><Point number="05" label="Possible symptoms" title={f<627?'Back pain.':f<670?'Disc bulges & herniations.':f<752?'Nerve pressure.':'Numbness. Tingling. Sciatica.'}/></Sequence><Sequence from={836} durationInFrames={179} name="Gentle, non-surgical treatment" premountFor={25}><Point number="06" label="Decompression" title="Gently stretch & mobilize." detail="A non-surgical approach." graphic="stretch"/></Sequence><Sequence from={1022} durationInFrames={191} name="Back-on-Trac system" premountFor={25}><Point number="07" label="Our technology" title="Back-on-Trac®" detail="Spinal decompression at Anderson Chiropractic."/></Sequence><Sequence from={1215} durationInFrames={130} name="Comfortably seated" premountFor={25}><Point number="08" label="The experience" title="Comfortably seated." graphic="seated"/></Sequence><Sequence from={1353} durationInFrames={77} name="Comfortable and relaxing" premountFor={25}><Point number="09" label="Patient experience" title="Comfortable. Relaxing." graphic="check"/></Sequence><Sequence from={1438} durationInFrames={210} name="Evaluation and suitability" premountFor={25}><Point number="10" label="Personalized care" title="An evaluation comes first." detail="Treatment isn't right for everyone."/></Sequence><Sequence from={1655} durationInFrames={243} name="Speak to our team" premountFor={25}><Point number="11" label="Let's talk" title="Explore your options." detail="Call Anderson Chiropractic."/></Sequence><Sequence from={130} durationInFrames={213} name="Full-screen disc anatomy B-roll" premountFor={25}><DiscBroll/></Sequence>
<Sequence from={344} durationInFrames={133} name="AI daily-life B-roll" premountFor={25}><PhotoBroll src="daily-wear.png" tag="Everyday stress" title="Daily life adds up." detail="Aging. Injuries. Repetitive work. Everyday wear." duration={133}/></Sequence>
<Sequence from={669} durationInFrames={155} name="Full-screen nerve pressure B-roll" premountFor={25}><PressureBroll/></Sequence>
<Sequence from={836} durationInFrames={178} name="Full-screen decompression motion B-roll" premountFor={25}><StretchBroll/></Sequence>
<Sequence from={1022} durationInFrames={402} name="Supplied Back-on-Trac equipment demonstration" premountFor={25}><EquipmentBroll/></Sequence>
<Sequence from={1515} durationInFrames={133} name="AI consultation B-roll" premountFor={25}><PhotoBroll src="consultation.png" tag="Personalized care" title="Care starts with you." detail="An evaluation comes first. Treatment isn't right for everyone." duration={133}/></Sequence>
<div className="captions"><BasicCaptions name="Full speech captions" width={890} combineTokensWithinMilliseconds={1100} style={{bottom:210}} captions={[
  {
    "text": " One",
    "startMs": 310,
    "endMs": 450,
    "timestampMs": 310,
    "confidence": null
  },
  {
    "text": " of",
    "startMs": 450,
    "endMs": 510,
    "timestampMs": 450,
    "confidence": null
  },
  {
    "text": " the",
    "startMs": 510,
    "endMs": 590,
    "timestampMs": 510,
    "confidence": null
  },
  {
    "text": " questions",
    "startMs": 590,
    "endMs": 1070,
    "timestampMs": 590,
    "confidence": null
  },
  {
    "text": " we",
    "startMs": 1070,
    "endMs": 1210,
    "timestampMs": 1070,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " hear",
    "startMs": 1210,
    "endMs": 1500,
    "timestampMs": 1210,
    "confidence": null
  },
  {
    "text": " all",
    "startMs": 1500,
    "endMs": 1710,
    "timestampMs": 1500,
    "confidence": null
  },
  {
    "text": " the",
    "startMs": 1710,
    "endMs": 1790,
    "timestampMs": 1710,
    "confidence": null
  },
  {
    "text": " time",
    "startMs": 1790,
    "endMs": 2150,
    "timestampMs": 1790,
    "confidence": null
  },
  {
    "text": " is,",
    "startMs": 2150,
    "endMs": 2380,
    "timestampMs": 2150,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " what",
    "startMs": 2610,
    "endMs": 2780,
    "timestampMs": 2610,
    "confidence": null
  },
  {
    "text": " exactly",
    "startMs": 2780,
    "endMs": 3530,
    "timestampMs": 2780,
    "confidence": null
  },
  {
    "text": " is",
    "startMs": 3530,
    "endMs": 3640,
    "timestampMs": 3530,
    "confidence": null
  },
  {
    "text": " spinal",
    "startMs": 3640,
    "endMs": 4090,
    "timestampMs": 3640,
    "confidence": null
  },
  {
    "text": " decompression?",
    "startMs": 4090,
    "endMs": 4740,
    "timestampMs": 4090,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " The",
    "startMs": 5210,
    "endMs": 5350,
    "timestampMs": 5210,
    "confidence": null
  },
  {
    "text": " easiest",
    "startMs": 5350,
    "endMs": 5730,
    "timestampMs": 5350,
    "confidence": null
  },
  {
    "text": " way",
    "startMs": 5730,
    "endMs": 5870,
    "timestampMs": 5730,
    "confidence": null
  },
  {
    "text": " to",
    "startMs": 5870,
    "endMs": 5930,
    "timestampMs": 5870,
    "confidence": null
  },
  {
    "text": " understand",
    "startMs": 5930,
    "endMs": 6530,
    "timestampMs": 5930,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " it",
    "startMs": 6530,
    "endMs": 6800,
    "timestampMs": 6530,
    "confidence": null
  },
  {
    "text": " is",
    "startMs": 6800,
    "endMs": 6960,
    "timestampMs": 6800,
    "confidence": null
  },
  {
    "text": " to",
    "startMs": 6960,
    "endMs": 7040,
    "timestampMs": 6960,
    "confidence": null
  },
  {
    "text": " think",
    "startMs": 7040,
    "endMs": 7260,
    "timestampMs": 7040,
    "confidence": null
  },
  {
    "text": " about",
    "startMs": 7260,
    "endMs": 7520,
    "timestampMs": 7260,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " what",
    "startMs": 7520,
    "endMs": 7670,
    "timestampMs": 7520,
    "confidence": null
  },
  {
    "text": " happens",
    "startMs": 7670,
    "endMs": 8070,
    "timestampMs": 7670,
    "confidence": null
  },
  {
    "text": " to",
    "startMs": 8070,
    "endMs": 8170,
    "timestampMs": 8070,
    "confidence": null
  },
  {
    "text": " your",
    "startMs": 8170,
    "endMs": 8300,
    "timestampMs": 8170,
    "confidence": null
  },
  {
    "text": " spine",
    "startMs": 8300,
    "endMs": 8720,
    "timestampMs": 8300,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " over",
    "startMs": 8720,
    "endMs": 8920,
    "timestampMs": 8720,
    "confidence": null
  },
  {
    "text": " time.",
    "startMs": 8920,
    "endMs": 9310,
    "timestampMs": 8920,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " Between",
    "startMs": 9850,
    "endMs": 10200,
    "timestampMs": 9850,
    "confidence": null
  },
  {
    "text": " the",
    "startMs": 10200,
    "endMs": 10270,
    "timestampMs": 10200,
    "confidence": null
  },
  {
    "text": " bones",
    "startMs": 10270,
    "endMs": 10630,
    "timestampMs": 10270,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " of",
    "startMs": 10630,
    "endMs": 10710,
    "timestampMs": 10630,
    "confidence": null
  },
  {
    "text": " your",
    "startMs": 10710,
    "endMs": 10840,
    "timestampMs": 10710,
    "confidence": null
  },
  {
    "text": " spine",
    "startMs": 10840,
    "endMs": 11330,
    "timestampMs": 10840,
    "confidence": null
  },
  {
    "text": " are",
    "startMs": 11330,
    "endMs": 11450,
    "timestampMs": 11330,
    "confidence": null
  },
  {
    "text": " discs",
    "startMs": 11450,
    "endMs": 12010,
    "timestampMs": 11450,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " that",
    "startMs": 12010,
    "endMs": 12210,
    "timestampMs": 12010,
    "confidence": null
  },
  {
    "text": " act",
    "startMs": 12210,
    "endMs": 12450,
    "timestampMs": 12210,
    "confidence": null
  },
  {
    "text": " like",
    "startMs": 12450,
    "endMs": 12630,
    "timestampMs": 12450,
    "confidence": null
  },
  {
    "text": " cushions.",
    "startMs": 12630,
    "endMs": 13180,
    "timestampMs": 12630,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " Over",
    "startMs": 13740,
    "endMs": 13920,
    "timestampMs": 13740,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " the",
    "startMs": 13920,
    "endMs": 14060,
    "timestampMs": 13920,
    "confidence": null
  },
  {
    "text": " years,",
    "startMs": 14060,
    "endMs": 14430,
    "timestampMs": 14060,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " because",
    "startMs": 14630,
    "endMs": 14910,
    "timestampMs": 14630,
    "confidence": null
  },
  {
    "text": " of",
    "startMs": 14910,
    "endMs": 14980,
    "timestampMs": 14910,
    "confidence": null
  },
  {
    "text": " aging,",
    "startMs": 14980,
    "endMs": 15690,
    "timestampMs": 14980,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " injuries,",
    "startMs": 15690,
    "endMs": 16340,
    "timestampMs": 15690,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " repetitive",
    "startMs": 16340,
    "endMs": 16840,
    "timestampMs": 16340,
    "confidence": null
  },
  {
    "text": " work,",
    "startMs": 16840,
    "endMs": 17380,
    "timestampMs": 16840,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " or",
    "startMs": 17380,
    "endMs": 17460,
    "timestampMs": 17380,
    "confidence": null
  },
  {
    "text": " just",
    "startMs": 17460,
    "endMs": 17690,
    "timestampMs": 17460,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " everyday",
    "startMs": 17690,
    "endMs": 18070,
    "timestampMs": 17690,
    "confidence": null
  },
  {
    "text": " wear",
    "startMs": 18070,
    "endMs": 18370,
    "timestampMs": 18070,
    "confidence": null
  },
  {
    "text": " and",
    "startMs": 18370,
    "endMs": 18470,
    "timestampMs": 18370,
    "confidence": null
  },
  {
    "text": " tear,",
    "startMs": 18470,
    "endMs": 18850,
    "timestampMs": 18470,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " those",
    "startMs": 19110,
    "endMs": 19360,
    "timestampMs": 19110,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " discs",
    "startMs": 19360,
    "endMs": 19760,
    "timestampMs": 19360,
    "confidence": null
  },
  {
    "text": " and",
    "startMs": 19760,
    "endMs": 19930,
    "timestampMs": 19760,
    "confidence": null
  },
  {
    "text": " joints",
    "startMs": 19930,
    "endMs": 20340,
    "timestampMs": 19930,
    "confidence": null
  },
  {
    "text": " can",
    "startMs": 20340,
    "endMs": 20490,
    "timestampMs": 20340,
    "confidence": null
  },
  {
    "text": " become",
    "startMs": 20490,
    "endMs": 20790,
    "timestampMs": 20490,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " compressed",
    "startMs": 20790,
    "endMs": 21490,
    "timestampMs": 20790,
    "confidence": null
  },
  {
    "text": " and",
    "startMs": 21490,
    "endMs": 21710,
    "timestampMs": 21490,
    "confidence": null
  },
  {
    "text": " irritated.",
    "startMs": 21710,
    "endMs": 22260,
    "timestampMs": 21710,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " That",
    "startMs": 22740,
    "endMs": 22940,
    "timestampMs": 22740,
    "confidence": null
  },
  {
    "text": " can",
    "startMs": 22940,
    "endMs": 23090,
    "timestampMs": 22940,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " contribute",
    "startMs": 23090,
    "endMs": 23540,
    "timestampMs": 23090,
    "confidence": null
  },
  {
    "text": " to",
    "startMs": 23540,
    "endMs": 23630,
    "timestampMs": 23540,
    "confidence": null
  },
  {
    "text": " problems",
    "startMs": 23630,
    "endMs": 24010,
    "timestampMs": 23630,
    "confidence": null
  },
  {
    "text": " like",
    "startMs": 24010,
    "endMs": 24230,
    "timestampMs": 24010,
    "confidence": null
  },
  {
    "text": " back",
    "startMs": 24230,
    "endMs": 24490,
    "timestampMs": 24230,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " pain,",
    "startMs": 24490,
    "endMs": 24870,
    "timestampMs": 24490,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " disc",
    "startMs": 25100,
    "endMs": 25340,
    "timestampMs": 25100,
    "confidence": null
  },
  {
    "text": " bulges",
    "startMs": 25340,
    "endMs": 25820,
    "timestampMs": 25340,
    "confidence": null
  },
  {
    "text": " or",
    "startMs": 25820,
    "endMs": 25950,
    "timestampMs": 25820,
    "confidence": null
  },
  {
    "text": " herniations,",
    "startMs": 25950,
    "endMs": 26640,
    "timestampMs": 25950,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " and",
    "startMs": 26810,
    "endMs": 26970,
    "timestampMs": 26810,
    "confidence": null
  },
  {
    "text": " sometimes",
    "startMs": 26970,
    "endMs": 27510,
    "timestampMs": 26970,
    "confidence": null
  },
  {
    "text": " pressure",
    "startMs": 27510,
    "endMs": 28080,
    "timestampMs": 27510,
    "confidence": null
  },
  {
    "text": " or",
    "startMs": 28080,
    "endMs": 28240,
    "timestampMs": 28080,
    "confidence": null
  },
  {
    "text": " irritation",
    "startMs": 28240,
    "endMs": 28810,
    "timestampMs": 28240,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " around",
    "startMs": 28810,
    "endMs": 29070,
    "timestampMs": 28810,
    "confidence": null
  },
  {
    "text": " the",
    "startMs": 29070,
    "endMs": 29130,
    "timestampMs": 29070,
    "confidence": null
  },
  {
    "text": " nerves,",
    "startMs": 29130,
    "endMs": 29520,
    "timestampMs": 29130,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " which",
    "startMs": 29520,
    "endMs": 29760,
    "timestampMs": 29520,
    "confidence": null
  },
  {
    "text": " may",
    "startMs": 29760,
    "endMs": 29880,
    "timestampMs": 29760,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " cause",
    "startMs": 29880,
    "endMs": 30160,
    "timestampMs": 29880,
    "confidence": null
  },
  {
    "text": " pain,",
    "startMs": 30160,
    "endMs": 30670,
    "timestampMs": 30160,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " numbness,",
    "startMs": 30880,
    "endMs": 31640,
    "timestampMs": 30880,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " tingling,",
    "startMs": 31640,
    "endMs": 32180,
    "timestampMs": 31640,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " or",
    "startMs": 32330,
    "endMs": 32430,
    "timestampMs": 32330,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " sciatica.",
    "startMs": 32430,
    "endMs": 33000,
    "timestampMs": 32430,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " Spinal",
    "startMs": 33460,
    "endMs": 33840,
    "timestampMs": 33460,
    "confidence": null
  },
  {
    "text": " decompression",
    "startMs": 33840,
    "endMs": 34550,
    "timestampMs": 33840,
    "confidence": null
  },
  {
    "text": " is",
    "startMs": 34550,
    "endMs": 34660,
    "timestampMs": 34550,
    "confidence": null
  },
  {
    "text": " a",
    "startMs": 34660,
    "endMs": 34710,
    "timestampMs": 34660,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " non-surgical",
    "startMs": 34710,
    "endMs": 35670,
    "timestampMs": 34710,
    "confidence": null
  },
  {
    "text": " treatment",
    "startMs": 35670,
    "endMs": 36110,
    "timestampMs": 35670,
    "confidence": null
  },
  {
    "text": " designed",
    "startMs": 36110,
    "endMs": 36540,
    "timestampMs": 36110,
    "confidence": null
  },
  {
    "text": " to",
    "startMs": 36540,
    "endMs": 36630,
    "timestampMs": 36540,
    "confidence": null
  },
  {
    "text": " gently",
    "startMs": 36630,
    "endMs": 37140,
    "timestampMs": 36630,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " stretch",
    "startMs": 37140,
    "endMs": 37580,
    "timestampMs": 37140,
    "confidence": null
  },
  {
    "text": " and",
    "startMs": 37580,
    "endMs": 37750,
    "timestampMs": 37580,
    "confidence": null
  },
  {
    "text": " mobilize",
    "startMs": 37750,
    "endMs": 38320,
    "timestampMs": 37750,
    "confidence": null
  },
  {
    "text": " the",
    "startMs": 38320,
    "endMs": 38400,
    "timestampMs": 38320,
    "confidence": null
  },
  {
    "text": " spine",
    "startMs": 38400,
    "endMs": 38880,
    "timestampMs": 38400,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " and",
    "startMs": 38880,
    "endMs": 39160,
    "timestampMs": 38880,
    "confidence": null
  },
  {
    "text": " reduce",
    "startMs": 39160,
    "endMs": 39590,
    "timestampMs": 39160,
    "confidence": null
  },
  {
    "text": " some",
    "startMs": 39590,
    "endMs": 39740,
    "timestampMs": 39590,
    "confidence": null
  },
  {
    "text": " of",
    "startMs": 39740,
    "endMs": 39800,
    "timestampMs": 39740,
    "confidence": null
  },
  {
    "text": " that",
    "startMs": 39800,
    "endMs": 39960,
    "timestampMs": 39800,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " pressure.",
    "startMs": 39960,
    "endMs": 40400,
    "timestampMs": 39960,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " Here",
    "startMs": 40860,
    "endMs": 41020,
    "timestampMs": 40860,
    "confidence": null
  },
  {
    "text": " at",
    "startMs": 41020,
    "endMs": 41110,
    "timestampMs": 41020,
    "confidence": null
  },
  {
    "text": " Anderson",
    "startMs": 41110,
    "endMs": 41470,
    "timestampMs": 41110,
    "confidence": null
  },
  {
    "text": " Chiropractic,",
    "startMs": 41470,
    "endMs": 42370,
    "timestampMs": 41470,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " we",
    "startMs": 42370,
    "endMs": 42500,
    "timestampMs": 42370,
    "confidence": null
  },
  {
    "text": " use",
    "startMs": 42500,
    "endMs": 42690,
    "timestampMs": 42500,
    "confidence": null
  },
  {
    "text": " a",
    "startMs": 42690,
    "endMs": 42730,
    "timestampMs": 42690,
    "confidence": null
  },
  {
    "text": " system",
    "startMs": 42730,
    "endMs": 43160,
    "timestampMs": 42730,
    "confidence": null
  },
  {
    "text": " called",
    "startMs": 43160,
    "endMs": 43480,
    "timestampMs": 43160,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " Back-on-Trac.",
    "startMs": 43480,
    "endMs": 44430,
    "timestampMs": 43480,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " Instead",
    "startMs": 44850,
    "endMs": 45130,
    "timestampMs": 44850,
    "confidence": null
  },
  {
    "text": " of",
    "startMs": 45130,
    "endMs": 45240,
    "timestampMs": 45130,
    "confidence": null
  },
  {
    "text": " lying",
    "startMs": 45240,
    "endMs": 45600,
    "timestampMs": 45240,
    "confidence": null
  },
  {
    "text": " down",
    "startMs": 45600,
    "endMs": 45960,
    "timestampMs": 45600,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " and",
    "startMs": 45960,
    "endMs": 46080,
    "timestampMs": 45960,
    "confidence": null
  },
  {
    "text": " being",
    "startMs": 46080,
    "endMs": 46280,
    "timestampMs": 46080,
    "confidence": null
  },
  {
    "text": " strapped",
    "startMs": 46280,
    "endMs": 46760,
    "timestampMs": 46280,
    "confidence": null
  },
  {
    "text": " into",
    "startMs": 46760,
    "endMs": 47000,
    "timestampMs": 46760,
    "confidence": null
  },
  {
    "text": " a",
    "startMs": 47000,
    "endMs": 47050,
    "timestampMs": 47000,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " traditional",
    "startMs": 47050,
    "endMs": 47560,
    "timestampMs": 47050,
    "confidence": null
  },
  {
    "text": " traction",
    "startMs": 47560,
    "endMs": 48010,
    "timestampMs": 47560,
    "confidence": null
  },
  {
    "text": " table,",
    "startMs": 48010,
    "endMs": 48380,
    "timestampMs": 48010,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " you're",
    "startMs": 48580,
    "endMs": 48700,
    "timestampMs": 48580,
    "confidence": null
  },
  {
    "text": " comfortably",
    "startMs": 48700,
    "endMs": 49260,
    "timestampMs": 48700,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " seated",
    "startMs": 49260,
    "endMs": 49700,
    "timestampMs": 49260,
    "confidence": null
  },
  {
    "text": " while",
    "startMs": 49700,
    "endMs": 49920,
    "timestampMs": 49700,
    "confidence": null
  },
  {
    "text": " the",
    "startMs": 49920,
    "endMs": 49980,
    "timestampMs": 49920,
    "confidence": null
  },
  {
    "text": " system",
    "startMs": 49980,
    "endMs": 50430,
    "timestampMs": 49980,
    "confidence": null
  },
  {
    "text": " gently",
    "startMs": 50430,
    "endMs": 50830,
    "timestampMs": 50430,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " stretches",
    "startMs": 50830,
    "endMs": 51340,
    "timestampMs": 50830,
    "confidence": null
  },
  {
    "text": " and",
    "startMs": 51340,
    "endMs": 51440,
    "timestampMs": 51340,
    "confidence": null
  },
  {
    "text": " mobilizes",
    "startMs": 51440,
    "endMs": 52210,
    "timestampMs": 51440,
    "confidence": null
  },
  {
    "text": " different",
    "startMs": 52210,
    "endMs": 52560,
    "timestampMs": 52210,
    "confidence": null
  },
  {
    "text": " areas",
    "startMs": 52560,
    "endMs": 52930,
    "timestampMs": 52560,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " of",
    "startMs": 52930,
    "endMs": 53020,
    "timestampMs": 52930,
    "confidence": null
  },
  {
    "text": " your",
    "startMs": 53020,
    "endMs": 53120,
    "timestampMs": 53020,
    "confidence": null
  },
  {
    "text": " spine.",
    "startMs": 53120,
    "endMs": 53570,
    "timestampMs": 53120,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " Most",
    "startMs": 54120,
    "endMs": 54360,
    "timestampMs": 54120,
    "confidence": null
  },
  {
    "text": " patients",
    "startMs": 54360,
    "endMs": 54800,
    "timestampMs": 54360,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " actually",
    "startMs": 54800,
    "endMs": 55150,
    "timestampMs": 54800,
    "confidence": null
  },
  {
    "text": " find",
    "startMs": 55150,
    "endMs": 55420,
    "timestampMs": 55150,
    "confidence": null
  },
  {
    "text": " it",
    "startMs": 55420,
    "endMs": 55570,
    "timestampMs": 55420,
    "confidence": null
  },
  {
    "text": " very",
    "startMs": 55570,
    "endMs": 55870,
    "timestampMs": 55570,
    "confidence": null
  },
  {
    "text": " comfortable",
    "startMs": 55870,
    "endMs": 56390,
    "timestampMs": 55870,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " and",
    "startMs": 56390,
    "endMs": 56480,
    "timestampMs": 56390,
    "confidence": null
  },
  {
    "text": " relaxing.",
    "startMs": 56480,
    "endMs": 57010,
    "timestampMs": 56480,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " Now,",
    "startMs": 57550,
    "endMs": 57730,
    "timestampMs": 57550,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " spinal",
    "startMs": 57910,
    "endMs": 58370,
    "timestampMs": 57910,
    "confidence": null
  },
  {
    "text": " decompression",
    "startMs": 58370,
    "endMs": 59080,
    "timestampMs": 58370,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " isn't",
    "startMs": 59080,
    "endMs": 59570,
    "timestampMs": 59080,
    "confidence": null
  },
  {
    "text": " a",
    "startMs": 59570,
    "endMs": 59610,
    "timestampMs": 59570,
    "confidence": null
  },
  {
    "text": " miracle",
    "startMs": 59610,
    "endMs": 60090,
    "timestampMs": 59610,
    "confidence": null
  },
  {
    "text": " cure,",
    "startMs": 60090,
    "endMs": 60450,
    "timestampMs": 60090,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " and",
    "startMs": 60450,
    "endMs": 60660,
    "timestampMs": 60450,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " it",
    "startMs": 60660,
    "endMs": 60880,
    "timestampMs": 60660,
    "confidence": null
  },
  {
    "text": " isn't",
    "startMs": 60880,
    "endMs": 61150,
    "timestampMs": 60880,
    "confidence": null
  },
  {
    "text": " right",
    "startMs": 61150,
    "endMs": 61390,
    "timestampMs": 61150,
    "confidence": null
  },
  {
    "text": " for",
    "startMs": 61390,
    "endMs": 61560,
    "timestampMs": 61390,
    "confidence": null
  },
  {
    "text": " everyone.",
    "startMs": 61560,
    "endMs": 62020,
    "timestampMs": 61560,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " That's",
    "startMs": 62410,
    "endMs": 62630,
    "timestampMs": 62410,
    "confidence": null
  },
  {
    "text": " why",
    "startMs": 62630,
    "endMs": 62750,
    "timestampMs": 62630,
    "confidence": null
  },
  {
    "text": " we",
    "startMs": 62750,
    "endMs": 62920,
    "timestampMs": 62750,
    "confidence": null
  },
  {
    "text": " first",
    "startMs": 62920,
    "endMs": 63320,
    "timestampMs": 62920,
    "confidence": null
  },
  {
    "text": " evaluate",
    "startMs": 63320,
    "endMs": 63940,
    "timestampMs": 63320,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " what's",
    "startMs": 63940,
    "endMs": 64210,
    "timestampMs": 63940,
    "confidence": null
  },
  {
    "text": " actually",
    "startMs": 64210,
    "endMs": 64720,
    "timestampMs": 64210,
    "confidence": null
  },
  {
    "text": " causing",
    "startMs": 64720,
    "endMs": 65130,
    "timestampMs": 64720,
    "confidence": null
  },
  {
    "text": " your",
    "startMs": 65130,
    "endMs": 65240,
    "timestampMs": 65130,
    "confidence": null
  },
  {
    "text": " problem.",
    "startMs": 65240,
    "endMs": 65730,
    "timestampMs": 65240,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " If",
    "startMs": 66230,
    "endMs": 66340,
    "timestampMs": 66230,
    "confidence": null
  },
  {
    "text": " you're",
    "startMs": 66340,
    "endMs": 66490,
    "timestampMs": 66340,
    "confidence": null
  },
  {
    "text": " dealing",
    "startMs": 66490,
    "endMs": 66820,
    "timestampMs": 66490,
    "confidence": null
  },
  {
    "text": " with",
    "startMs": 66820,
    "endMs": 66960,
    "timestampMs": 66820,
    "confidence": null
  },
  {
    "text": " chronic",
    "startMs": 66960,
    "endMs": 67380,
    "timestampMs": 66960,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " back",
    "startMs": 67380,
    "endMs": 67700,
    "timestampMs": 67380,
    "confidence": null
  },
  {
    "text": " pain,",
    "startMs": 67700,
    "endMs": 68060,
    "timestampMs": 67700,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " sciatica,",
    "startMs": 68060,
    "endMs": 68830,
    "timestampMs": 68060,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " or",
    "startMs": 68830,
    "endMs": 69020,
    "timestampMs": 68830,
    "confidence": null
  },
  {
    "text": " disc-related",
    "startMs": 69020,
    "endMs": 69750,
    "timestampMs": 69020,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " problems,",
    "startMs": 69750,
    "endMs": 70290,
    "timestampMs": 69750,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " and",
    "startMs": 70560,
    "endMs": 70660,
    "timestampMs": 70560,
    "confidence": null
  },
  {
    "text": " you'd",
    "startMs": 70660,
    "endMs": 70810,
    "timestampMs": 70660,
    "confidence": null
  },
  {
    "text": " like",
    "startMs": 70810,
    "endMs": 71020,
    "timestampMs": 70810,
    "confidence": null
  },
  {
    "text": " to",
    "startMs": 71020,
    "endMs": 71130,
    "timestampMs": 71020,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " know",
    "startMs": 71130,
    "endMs": 71350,
    "timestampMs": 71130,
    "confidence": null
  },
  {
    "text": " whether",
    "startMs": 71350,
    "endMs": 71590,
    "timestampMs": 71350,
    "confidence": null
  },
  {
    "text": " decompression",
    "startMs": 71590,
    "endMs": 72310,
    "timestampMs": 71590,
    "confidence": null
  },
  {
    "text": " might",
    "startMs": 72310,
    "endMs": 72540,
    "timestampMs": 72310,
    "confidence": null
  },
  {
    "text": " be",
    "startMs": 72540,
    "endMs": 72670,
    "timestampMs": 72540,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " an",
    "startMs": 72670,
    "endMs": 72730,
    "timestampMs": 72670,
    "confidence": null
  },
  {
    "text": " option,",
    "startMs": 72730,
    "endMs": 73160,
    "timestampMs": 72730,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " give",
    "startMs": 73480,
    "endMs": 73620,
    "timestampMs": 73480,
    "confidence": null
  },
  {
    "text": " us",
    "startMs": 73620,
    "endMs": 73750,
    "timestampMs": 73620,
    "confidence": null
  },
  {
    "text": " a",
    "startMs": 73750,
    "endMs": 73800,
    "timestampMs": 73750,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " call.",
    "startMs": 73800,
    "endMs": 74410,
    "timestampMs": 73800,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " We'd",
    "startMs": 74410,
    "endMs": 74550,
    "timestampMs": 74410,
    "confidence": null
  },
  {
    "text": " be",
    "startMs": 74550,
    "endMs": 74660,
    "timestampMs": 74550,
    "confidence": null
  },
  {
    "text": " happy",
    "startMs": 74660,
    "endMs": 75010,
    "timestampMs": 74660,
    "confidence": null
  },
  {
    "text": " to",
    "startMs": 75010,
    "endMs": 75110,
    "timestampMs": 75010,
    "confidence": null,
    "pageBreakAfter": true
  },
  {
    "text": " take",
    "startMs": 75110,
    "endMs": 75320,
    "timestampMs": 75110,
    "confidence": null
  },
  {
    "text": " a",
    "startMs": 75320,
    "endMs": 75350,
    "timestampMs": 75320,
    "confidence": null
  },
  {
    "text": " look.",
    "startMs": 75350,
    "endMs": 75690,
    "timestampMs": 75350,
    "confidence": null,
    "pageBreakAfter": true
  }
]}/></div></>};
const Film=()=>{const {fps}=useVideoConfig();return <AbsoluteFill style={{background:'#092a30',fontFamily:'Brand,Arial'}}><Sequence name="Original video with captions" durationInFrames={1898} premountFor={fps}><Narration/></Sequence><Sequence from={1898} durationInFrames={250} name="Contact and consultation CTA" premountFor={fps}><EndCard/></Sequence><Audio name="Original cinematic marketing score" src={staticFile('cinematic.wav')} volume={(f)=>{const fade=Math.min(1,f/50,(2148-f)/65);return (f<1898?.24:.65)*Math.max(0,fade)}}/><Audio name="Opening accent" src={staticFile('whoosh.wav')} from={3} volume={.22}/><Audio name="Disc explanation whoosh" src={staticFile('whoosh.wav')} from={245} volume={.18}/><Audio name="Decompression whoosh" src={staticFile('whoosh.wav')} from={835} volume={.18}/><Audio name="Technology click" src={staticFile('click.ogg')} from={1022} volume={.35}/><Audio name="Seated treatment click" src={staticFile('click.ogg')} from={1215} volume={.28}/><Audio name="Evaluation accent" src={staticFile('whoosh.wav')} from={1438} volume={.14}/><Audio name="Closing transition" src={staticFile('whoosh.wav')} from={1898} volume={.35}/><Audio name="Daily life cutaway" src={staticFile('whoosh.wav')} from={344} volume={.16}/><Audio name="Nerve illustration cutaway" src={staticFile('whoosh.wav')} from={669} volume={.16}/><Audio name="Consultation cutaway" src={staticFile('whoosh.wav')} from={1515} volume={.16}/><Audio name="CTA mouse click" src={staticFile('click.ogg')} from={1978} volume={.45}/><Sequence from={1898} durationInFrames={12} name="Ending scene reveal"><Reveal/></Sequence></AbsoluteFill>};
const Reveal=()=>{const f=useCurrentFrame();return <AbsoluteFill style={{background:mint,opacity:interpolate(f,[0,11],[.9,0]),transform:`translateX(${f*100}px)`}}/>};
export const RemotionRoot=()=> <><Composition id="Anderson-Spinal-Decompression-Equipment" component={Film} width={1080} height={1920} fps={25} durationInFrames={2148}/><Composition id="Branded-Contact-End-Card" component={EndCard} width={1080} height={1920} fps={25} durationInFrames={250}/></>;
