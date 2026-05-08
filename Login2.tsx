import svgPaths from "./svg-f7a255rtj8";

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(240,253,250,0.7)] top-[-2.2px]">Email</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[rgba(10,22,40,0.7)] h-[48px] left-0 rounded-[14px] top-0 w-[316.4px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[44px] pr-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(203,251,241,0.25)]">driver@truckmate.com</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Icon />
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[80px] items-start left-0 top-0 w-[316.4px]" data-name="App">
      <Label />
      <Container1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(240,253,250,0.7)] top-[-2.2px]">Password</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[rgba(10,22,40,0.7)] h-[48px] left-0 rounded-[14px] top-0 w-[316.4px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[44px] pr-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(203,251,241,0.25)]">Enter your password</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2566d000} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66667" />
          <path d={svgPaths.p1bf79e00} id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Icon1 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[80px] items-start left-0 top-[100px] w-[316.4px]" data-name="App">
      <Label1 />
      <Container2 />
    </div>
  );
}

function App2() {
  return (
    <div className="absolute h-[24px] left-[187.93px] top-[200px] w-[128.475px]" data-name="App">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(0,213,190,0.8)] top-[-2.2px]">Forgot password?</p>
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-gradient-to-r from-[#00d5be] h-[48px] left-0 opacity-0 to-[#00d3f2] top-0 w-[316.4px]" data-name="Container" />;
}

function Container4() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[48px] left-[91.52px] to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(255,255,255,0.2)] w-[316.4px]" data-name="Container" />;
}

function App3() {
  return (
    <div className="absolute h-[20px] left-[140.46px] top-[14px] w-[35.475px]" data-name="App">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[18px] text-white top-[-1.2px]">Login</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-gradient-to-r from-[#009689] h-[48px] left-0 overflow-clip rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,187,167,0.25),0px_4px_6px_-4px_rgba(0,187,167,0.25)] to-[#00b8db] top-[248px] via-1/2 via-[#00bba7] w-[316.4px]" data-name="Button">
      <Container3 />
      <Container4 />
      <App3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.02)] border-[0.8px] border-[rgba(0,213,190,0.25)] border-solid h-[48px] left-0 rounded-[14px] top-[368px] w-[316.4px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[101.85px] not-italic text-[#f0fdfa] text-[16px] top-[13px]">Create Account</p>
    </div>
  );
}

function Container5() {
  return <div className="absolute border-[rgba(0,213,190,0.1)] border-solid border-t-[0.8px] h-[0.8px] left-0 top-[11.6px] w-[316.4px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute h-[24px] left-[134.73px] top-0 w-[46.938px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[16px] text-[rgba(203,251,241,0.3)] top-[-2.2px]">or</p>
    </div>
  );
}

function App4() {
  return (
    <div className="absolute h-[24px] left-0 top-[320px] w-[316.4px]" data-name="App">
      <Container5 />
      <Text />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[416px] left-[12px] top-[192px] w-[316.4px]" data-name="Form">
      <App />
      <App1 />
      <App2 />
      <Button />
      <Button1 />
      <App4 />
    </div>
  );
}

function App5() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[640px] w-[316.4px]" data-name="App">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[157.81px] not-italic text-[16px] text-[rgba(203,251,241,0.25)] text-center top-[-2.2px]">© 2025 TruckMate</p>
    </div>
  );
}

function Container7() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[2px] shrink-0 to-[rgba(0,0,0,0)] via-1/2 via-[#00d5be] w-full" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2px] items-start left-0 overflow-clip pl-[-53.446px] pr-[53.446px] rounded-tl-[32px] rounded-tr-[32px] top-0 w-[380.4px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function App6() {
  return <div className="absolute bg-[rgba(0,213,190,0.3)] left-[12px] rounded-[26843500px] size-[8px] top-[12px]" data-name="App" />;
}

function App7() {
  return <div className="absolute bg-[rgba(255,137,4,0.3)] left-[360.4px] rounded-[26843500px] size-[8px] top-[12px]" data-name="App" />;
}

function App8() {
  return <div className="absolute bg-[rgba(255,137,4,0.2)] left-[12px] rounded-[26843500px] size-[8px] top-[676px]" data-name="App" />;
}

function App9() {
  return <div className="absolute bg-[rgba(0,213,190,0.2)] left-[360.4px] rounded-[26843500px] size-[8px] top-[676px]" data-name="App" />;
}

function Container9() {
  return <div className="absolute bg-[rgba(0,213,190,0.6)] blur-[24px] left-[-0.34px] opacity-41 size-[48.685px] top-[-0.34px]" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[48px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.pace3600} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d="M30 36H18" id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p34cd3180} id="Vector_3" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p24c8c580} id="Vector_4" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.pd661e00} id="Vector_5" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function App10() {
  return (
    <div className="absolute left-[134.2px] size-[48px] top-0" data-name="App">
      <Container9 />
      <Icon2 />
    </div>
  );
}

function App11() {
  return (
    <div className="absolute h-[24px] left-0 top-[64px] w-[316.4px]" data-name="App">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[158.38px] not-italic text-[16px] text-center text-white top-[-2.2px] tracking-[-0.4px]">TruckMate</p>
    </div>
  );
}

function App12() {
  return (
    <div className="absolute h-[24px] left-0 top-[96px] w-[316.4px]" data-name="App">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[157.81px] not-italic text-[16px] text-[rgba(203,251,241,0.5)] text-center top-[-2.2px]" dir="auto">
        Smart Logistics App
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[120px] left-[12px] top-[32px] w-[316.4px]" data-name="Container">
      <App10 />
      <App11 />
      <App12 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[rgba(0,213,190,0.2)] left-[319.2px] rounded-[26843500px] size-[8px] top-[676.2px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="absolute bg-[#192c3d] border-[0.8px] border-[rgba(0,213,190,0.2)] border-solid h-[698px] left-[18px] rounded-[32px] shadow-[0px_8px_32px_0px_rgba(20,184,166,0.1),0px_0px_0px_0px_rgba(20,184,166,0.1)] top-[57px] w-[339px]" data-name="Container">
      <Form />
      <App5 />
      <Container6 />
      <App6 />
      <App7 />
      <App8 />
      <App9 />
      <Container8 />
      <Container10 />
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-[#0f2334] relative size-full" data-name="login 2">
      <Container />
    </div>
  );
}