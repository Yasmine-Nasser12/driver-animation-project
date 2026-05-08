import svgPaths from "./svg-ptngosblbk";

function Heading1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[106.063px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[30px] left-0 text-[18px] text-white top-[0.8px]">John Michael</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[106.063px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(203,251,241,0.5)] top-[0.2px]">Driver</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[80px] top-[5px] w-[106.063px]" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[19.563px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[0.2px]">JD</p>
      </div>
    </div>
  );
}

function ProfilePicture() {
  return (
    <div className="relative rounded-[26843500px] shrink-0 size-[56px]" data-name="ProfilePicture" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 137, 4) 0%, rgb(152, 16, 250) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.013px] relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#192c3d] relative rounded-[26843500px] shrink-0 size-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <ProfilePicture />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#009689] items-center justify-center left-0 rounded-[26843500px] size-[64px] to-[#00b8db] top-0 via-1/2 via-[#00bba7]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container5() {
  return <div className="bg-white rounded-[26843500px] shrink-0 size-[14px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#009689] items-center justify-center left-[47.8px] rounded-[26843500px] size-[17.2px] to-[#00b8db] top-[48.8px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function ProfileWithBorder() {
  return (
    <div className="absolute left-0 size-[64px] top-0" data-name="ProfileWithBorder">
      <Container2 />
      <Container4 />
    </div>
  );
}

function DriverInfo() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="DriverInfo">
      <Container1 />
      <ProfileWithBorder />
    </div>
  );
}

function StarIcon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="StarIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="StarIcon">
          <path d={svgPaths.p28ea7070} fill="var(--fill-0, #00D5BE)" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[72px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[72px] left-0 text-[48px] text-white top-[-0.2px]">4.8</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[106.738px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <StarIcon />
        <Text />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[157.438px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(203,251,241,0.5)] top-[0.2px]">Based on 124 reviews</p>
      </div>
    </div>
  );
}

function RatingDisplay() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[152px] items-center py-[24px] relative shrink-0 w-full" data-name="RatingDisplay">
      <Container6 />
      <Paragraph2 />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[20px] w-[311px]" data-name="Container" style={{ backgroundImage: "linear-gradient(179.892deg, rgb(15, 42, 58) 21.672%, rgb(10, 31, 47) 99.913%)" }}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative size-full">
        <DriverInfo />
        <RatingDisplay />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[0.2px]">Ratings Breakdown</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[8.9px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[0.2px]">5</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#00d5be] text-[16px] top-[-2.2px]">★</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Container10() {
  return <div className="bg-gradient-to-b from-[#009689] h-[8px] rounded-[26843500px] shrink-0 to-[#00b8db] w-full" data-name="Container" />;
}

function Container9() {
  return (
    <div className="bg-[#0a1a24] flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[31.85px] relative size-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-[50.97px] text-[14px] text-[rgba(203,251,241,0.5)] text-right top-[0.4px] w-[29px] whitespace-pre-wrap">75%</p>
      </div>
    </div>
  );
}

function RatingBar() {
  return (
    <div className="h-[24px] relative shrink-0 w-[261.4px]" data-name="RatingBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container8 />
        <Container9 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[8.9px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[0.2px]">4</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#00d5be] text-[16px] top-[-2.2px]">★</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Container13() {
  return <div className="bg-gradient-to-b from-[#009689] h-[8px] rounded-[26843500px] shrink-0 to-[#00b8db] w-full" data-name="Container" />;
}

function Container12() {
  return (
    <div className="bg-[#0a1a24] flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[108.3px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-[50.97px] text-[14px] text-[rgba(203,251,241,0.5)] text-right top-[0.4px] w-[29px] whitespace-pre-wrap">15%</p>
      </div>
    </div>
  );
}

function RatingBar1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[261.4px]" data-name="RatingBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container11 />
        <Container12 />
        <Text6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[8.9px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[0.2px]">3</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#00d5be] text-[16px] top-[-2.2px]">★</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text7 />
        <Text8 />
      </div>
    </div>
  );
}

function Container16() {
  return <div className="bg-gradient-to-b from-[#009689] h-[8px] rounded-[26843500px] shrink-0 to-[#00b8db] w-full" data-name="Container" />;
}

function Container15() {
  return (
    <div className="bg-[#0a1a24] flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[119.763px] relative size-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-[50.76px] text-[14px] text-[rgba(203,251,241,0.5)] text-right top-[0.4px] w-[21px] whitespace-pre-wrap">6%</p>
      </div>
    </div>
  );
}

function RatingBar2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[261.4px]" data-name="RatingBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container14 />
        <Container15 />
        <Text9 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[8.9px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[0.2px]">2</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#00d5be] text-[16px] top-[-2.2px]">★</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text10 />
        <Text11 />
      </div>
    </div>
  );
}

function Container19() {
  return <div className="bg-gradient-to-b from-[#009689] h-[8px] rounded-[26843500px] shrink-0 to-[#00b8db] w-full" data-name="Container" />;
}

function Container18() {
  return (
    <div className="bg-[#0a1a24] flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[123.588px] relative size-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-[50.76px] text-[14px] text-[rgba(203,251,241,0.5)] text-right top-[0.4px] w-[21px] whitespace-pre-wrap">3%</p>
      </div>
    </div>
  );
}

function RatingBar3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[261.4px]" data-name="RatingBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container17 />
        <Container18 />
        <Text12 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[8.9px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[0.2px]">1</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#00d5be] text-[16px] top-[-2.2px]">★</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text13 />
        <Text14 />
      </div>
    </div>
  );
}

function Container22() {
  return <div className="bg-gradient-to-b from-[#009689] h-[8px] rounded-[26843500px] shrink-0 to-[#00b8db] w-full" data-name="Container" />;
}

function Container21() {
  return (
    <div className="bg-[#0a1a24] flex-[1_0_0] h-[8px] min-h-px min-w-px relative rounded-[26843500px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[126.138px] relative size-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[21px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['Arimo:Regular',sans-serif] font-normal leading-[21px] left-[50.76px] text-[14px] text-[rgba(203,251,241,0.5)] text-right top-[0.4px] w-[21px] whitespace-pre-wrap">1%</p>
      </div>
    </div>
  );
}

function RatingBar4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[261.4px]" data-name="RatingBar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container20 />
        <Container21 />
        <Text15 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="Container">
      <RatingBar />
      <RatingBar1 />
      <RatingBar2 />
      <RatingBar3 />
      <RatingBar4 />
    </div>
  );
}

function RatingsBreakdown() {
  return (
    <div className="bg-gradient-to-b from-[#0f2a3a] h-[257.6px] relative rounded-[20px] shrink-0 to-[#0a1f2f] w-[311px]" data-name="RatingsBreakdown">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.2)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative size-full">
        <Heading2 />
        <Container7 />
      </div>
    </div>
  );
}

function Container23() {
  return <div className="absolute bg-gradient-to-r from-[#00d5be] h-[48px] left-0 opacity-0 to-[#00d3f2] top-0 w-[316.4px]" data-name="Container" />;
}

function Container24() {
  return (
    <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[48px] left-[91.52px] to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(255,255,255,0.2)] w-[316.4px]" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[25.5px] left-[2.48px] text-[17px] text-white top-[11px]" dir="auto">
        View All Reviews
      </p>
    </div>
  );
}

function App() {
  return <div className="absolute h-[20px] left-[140.46px] top-[14px] w-[35.475px]" data-name="App" />;
}

function Button() {
  return (
    <div className="bg-gradient-to-r from-[#009689] h-[48px] relative rounded-[14px] shadow-[0px_6px_9.3px_-3px_rgba(0,187,167,0.25),0px_4px_6px_-4px_rgba(0,187,167,0.25)] shrink-0 to-[#00b8db] via-1/2 via-[#00bba7] w-[316px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container23 />
        <Container24 />
        <App />
      </div>
    </div>
  );
}

function RatingsOverviewOld() {
  return (
    <div className="absolute bg-[#0a1a24] content-stretch flex flex-col gap-[24px] h-[739.2px] items-start left-0 pl-[24px] py-[24px] top-[49px] w-[359px]" data-name="RatingsOverviewOld">
      <Container />
      <RatingsBreakdown />
      <Button />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(10,22,40,0.7)] relative rounded-[26843500px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.2)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[129.575px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-white top-[-2.2px]">{`Reviews & Ratings`}</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[40px] items-center left-[9px] top-[17px] w-[340.4px]" data-name="Container">
      <Button1 />
      <Heading />
    </div>
  );
}

export default function DriverRatingsOverview() {
  return (
    <div className="bg-[#0a1b25] relative size-full" data-name="Driver Ratings Overview">
      <RatingsOverviewOld />
      <Container25 />
    </div>
  );
}