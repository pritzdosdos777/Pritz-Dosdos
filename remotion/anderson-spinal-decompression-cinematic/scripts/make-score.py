import numpy as np,wave
from pathlib import Path
sr=32000;dur=85.92;out=Path(__file__).resolve().parents[1] / 'public';rng=np.random.default_rng(901)
a=np.zeros((int(dur*sr),2),np.float32)
def add(sig,start,pan=0):
 i=int(start*sr);n=min(len(sig),len(a)-i)
 if n>0: a[i:i+n,0]+=sig[:n]*(.8-pan*.25);a[i:i+n,1]+=sig[:n]*(.8+pan*.25)
def piano(hz,length=3):
 t=np.arange(int(length*sr))/sr
 v=sum(np.sin(2*np.pi*hz*k*t)*np.exp(-t*(.7+k*.45))/(k**2) for k in range(1,6))
 return v*(1-np.exp(-t*90))*.13
chords=[[146.83,174.61,220,293.66],[116.54,174.61,233.08,293.66],[130.81,164.81,196,261.63],[110,164.81,220,261.63]]
for j,start in enumerate(np.arange(0,dur,6)):
 c=chords[j%4];t=np.arange(sr*7)/sr;env=np.minimum(1,t/1.5)*np.minimum(1,np.maximum(0,(7-t)/1.8))
 for k,hz in enumerate(c):
  v=(np.sin(2*np.pi*hz*t+.005*np.sin(2*np.pi*.21*t))+np.sin(2*np.pi*(hz*1.002)*t))*.025*env
  add(v,start,(k-1.5)/1.5)
 add(piano(c[0]/2,5)*.7,start)
 for k in range(4):add(piano(c[[0,2,1,3][k]]*2,3)*(.65 if j<2 else 1),start+k*1.5,(-1)**k*.5)
for start in np.arange(12,dur,1.5):
 t=np.arange(int(.45*sr))/sr
 kick=np.sin(2*np.pi*(48*t+35*.035*(1-np.exp(-t/.035))))*np.exp(-t*12)*.09
 add(kick,start)
for start in np.arange(24,dur,.75):
 t=np.arange(int(.1*sr))/sr;noise=rng.normal(0,1,len(t));v=np.diff(noise,prepend=0)*np.exp(-t*70)*.008;add(v,start,.7)
for delay,gain in [(.18,.12),(.37,.08),(.61,.05)]:
 n=int(delay*sr);a[n:]+=a[:-n]*gain
fade=np.minimum(1,np.arange(len(a))/sr/2)*np.minimum(1,(dur-np.arange(len(a))/sr)/3)
a*=fade[:,None];a=np.tanh(a*1.4)*.65
with wave.open(str(out/'cinematic.wav'),'wb') as f:f.setparams((2,2,sr,0,'NONE','not compressed'));f.writeframes((a*32767).astype('<i2').tobytes())
t=np.arange(int(.6*sr))/sr;noise=rng.normal(0,1,len(t));smooth=np.convolve(noise,np.ones(12)/12,mode='same');env=np.sin(np.pi*np.minimum(t/.6,1))**3
v=smooth*env*.6+np.sin(2*np.pi*(300*t+700*t*t))*env*.025
with wave.open(str(out/'whoosh.wav'),'wb') as f:f.setparams((1,2,sr,0,'NONE','not compressed'));f.writeframes((v*32767).astype('<i2').tobytes())
