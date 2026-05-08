import svgPaths from "./svg-jjyp7te316";

function Heading() {
  return <div className="h-[36px] shrink-0 w-[70.2px]" data-name="Heading 1" />;
}

function Container1() {
  return <div className="h-0 shrink-0 w-[48px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-between left-[37px] top-[43px] w-[311.8px]" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[36px] left-[193px] top-[31px] w-[78px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-[-101px] not-italic text-[18px] text-white top-[7px]">Notification Preferences</p>
    </div>
  );
}

function NotificationPreferences() {
  return <div className="absolute blur-[100px] h-[400px] left-[43px] opacity-30 rounded-[26843500px] top-[209px] w-[300px]" data-name="NotificationPreferences" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 300 400\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(0 -25 -25 0 150 200)\'><stop stop-color=\'rgba(0,213,190,0.4)\' offset=\'0\'/><stop stop-color=\'rgba(0,184,219,0.2)\' offset=\'0.4\'/><stop stop-color=\'rgba(0,92,110,0.1)\' offset=\'0.55\'/><stop stop-color=\'rgba(0,0,0,0)\' offset=\'0.7\'/></radialGradient></defs></svg>')" }} />;
}

function ProfileScreen() {
  return (
    <div className="absolute bg-[#0a1a24] h-[1564px] left-0 overflow-clip top-0 w-[375px]" data-name="ProfileScreen">
      <Container />
      <Heading1 />
      <NotificationPreferences />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(0,213,190,0.1)] content-stretch flex items-center justify-center left-[20px] rounded-[26843500px] size-[32px] top-[38px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Driver() {
  return (
    <div className="absolute bg-white h-[1557px] left-0 overflow-clip top-0 w-[375px]" data-name="Driver">
      <ProfileScreen />
      <Button />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[14.825px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-white top-[-1.2px]">JD</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#192c3d] h-[48px] relative rounded-[26843500px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-gradient-to-b from-[#009689] relative rounded-[26843500px] shrink-0 size-[52px] to-[#00b8db] via-1/2 via-[#00bba7]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] px-[2px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[222.2px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-0 not-italic text-[16px] text-white top-[-2.2px]">John Michael</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-[8px] top-[2px] w-[33.038px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#00d5be] text-[12px]">Driver</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(0,213,190,0.15)] border-[0.8px] border-[rgba(0,213,190,0.3)] border-solid h-[21.587px] left-0 rounded-[26843500px] top-[28px] w-[50.638px]" data-name="Container">
      <Text1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[49.588px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph />
        <Container6 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(10,22,40,0.7)] content-stretch flex gap-[12px] h-[107.953px] items-center left-[28px] px-[16.8px] py-[0.8px] rounded-[16px] top-[125.36px] w-[319.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container3 />
      <Container5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Driver />
      <Container2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[4px] text-[16px] text-[rgba(203,251,241,0.7)] top-[-2.2px]">Trip Updates</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p3b7be120} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d={svgPaths.p1f3d9f80} id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-[171.488px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">New Shipment Available</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container13 />
      <Label />
    </div>
  );
}

function Container14() {
  return <div className="absolute bg-[#00d5be] blur-[12px] h-[28px] left-0 opacity-50 rounded-[26843500px] top-0 w-[48px]" data-name="Container" />;
}

function Container15() {
  return <div className="absolute bg-white left-[26px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[20px] top-[4px]" data-name="Container" />;
}

function Button1() {
  return (
    <div className="absolute bg-[#00d5be] h-[28px] left-[254.2px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[318.2px]" data-name="Container">
      <Container12 />
      <Button1 />
    </div>
  );
}

function Container16() {
  return <div className="absolute bg-[rgba(0,213,190,0.1)] h-px left-[16px] top-[60px] w-[286.2px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute h-[61px] left-[0.8px] top-[0.8px] w-[318.2px]" data-name="Container">
      <Container11 />
      <Container16 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p33ed6f00} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d="M12.5 15H7.5" id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d={svgPaths.p2f5b2980} id="Vector_3" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d={svgPaths.p76e7200} id="Vector_4" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d={svgPaths.pce04cf0} id="Vector_5" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[185.313px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">Shipment Assigned to You</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container20 />
      <Label1 />
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-[#00d5be] blur-[12px] h-[28px] left-0 opacity-50 rounded-[26843500px] top-0 w-[48px]" data-name="Container" />;
}

function Container22() {
  return <div className="absolute bg-white left-[26px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[20px] top-[4px]" data-name="Container" />;
}

function Button2() {
  return (
    <div className="absolute bg-[#00d5be] h-[28px] left-[254.2px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[318.2px]" data-name="Container">
      <Container19 />
      <Button2 />
    </div>
  );
}

function Container23() {
  return <div className="absolute bg-[rgba(0,213,190,0.1)] h-px left-[16px] top-[60px] w-[286.2px]" data-name="Container" />;
}

function Container17() {
  return (
    <div className="absolute h-[61px] left-[0.8px] top-[61.8px] w-[318.2px]" data-name="Container">
      <Container18 />
      <Container23 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p2fedb580} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d="M10 18.3333V10" id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d={svgPaths.p2eca8c80} id="Vector_3" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d="M6.25 3.55832L13.75 7.84999" id="Vector_4" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[142.6px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">Shipment Picked Up</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container27 />
      <Label2 />
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[#00d5be] blur-[12px] h-[28px] left-0 opacity-50 rounded-[26843500px] top-0 w-[48px]" data-name="Container" />;
}

function Container29() {
  return <div className="absolute bg-white left-[26px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[20px] top-[4px]" data-name="Container" />;
}

function Button3() {
  return (
    <div className="absolute bg-[#00d5be] h-[28px] left-[254.2px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[318.2px]" data-name="Container">
      <Container26 />
      <Button3 />
    </div>
  );
}

function Container30() {
  return <div className="absolute bg-[rgba(0,213,190,0.1)] h-px left-[16px] top-[60px] w-[286.2px]" data-name="Container" />;
}

function Container24() {
  return (
    <div className="absolute h-[61px] left-[0.8px] top-[122.8px] w-[318.2px]" data-name="Container">
      <Container25 />
      <Container30 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_77_735)" id="Icon" opacity="0.8">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d="M12.5 7.5L7.5 12.5" id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d="M7.5 7.5L12.5 12.5" id="Vector_3" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
        <defs>
          <clipPath id="clip0_77_735">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.25px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">Shipment Cancelled</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container34 />
      <Label3 />
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-[#00d5be] blur-[12px] h-[28px] left-0 opacity-50 rounded-[26843500px] top-0 w-[48px]" data-name="Container" />;
}

function Container36() {
  return <div className="absolute bg-white left-[26px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[20px] top-[4px]" data-name="Container" />;
}

function Button4() {
  return (
    <div className="absolute bg-[#00d5be] h-[28px] left-[254.2px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[318.2px]" data-name="Container">
      <Container33 />
      <Button4 />
    </div>
  );
}

function Container37() {
  return <div className="absolute bg-[rgba(0,213,190,0.1)] h-px left-[16px] top-[60px] w-[286.2px]" data-name="Container" />;
}

function Container31() {
  return (
    <div className="absolute h-[61px] left-[0.8px] top-[183.8px] w-[318.2px]" data-name="Container">
      <Container32 />
      <Container37 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[152.463px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">Trip Started Reminder</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container41 />
      <Label4 />
    </div>
  );
}

function Container42() {
  return <div className="bg-white h-[20px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container" />;
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(203,251,241,0.2)] content-stretch flex flex-col h-[28px] items-start left-[254.2px] pl-[4px] pr-[24px] pt-[4px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container42 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[318.2px]" data-name="Container">
      <Container40 />
      <Button5 />
    </div>
  );
}

function Container43() {
  return <div className="absolute bg-[rgba(0,213,190,0.1)] h-px left-[16px] top-[60px] w-[286.2px]" data-name="Container" />;
}

function Container38() {
  return (
    <div className="absolute h-[61px] left-[0.8px] top-[244.8px] w-[318.2px]" data-name="Container">
      <Container39 />
      <Container43 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p1d609380} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px] w-[154px] whitespace-pre-wrap">Delivery Confirmation Required</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-[16px] top-[16px] w-[238.2px]" data-name="Container">
      <Container46 />
      <Label5 />
    </div>
  );
}

function Container47() {
  return <div className="absolute bg-[#00d5be] blur-[12px] h-[28px] left-0 opacity-50 rounded-[26843500px] top-0 w-[48px]" data-name="Container" />;
}

function Container48() {
  return <div className="absolute bg-white left-[26px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[20px] top-[4px]" data-name="Container" />;
}

function Button6() {
  return (
    <div className="absolute bg-[#00d5be] h-[28px] left-[254.2px] rounded-[26843500px] top-[26px] w-[48px]" data-name="Button">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[80px] left-[0.8px] top-[305.8px] w-[318.2px]" data-name="Container">
      <Container45 />
      <Button6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(10,22,40,0.7)] h-[386.6px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container10 />
        <Container17 />
        <Container24 />
        <Container31 />
        <Container38 />
        <Container44 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[422.6px] items-start left-[20px] top-0 w-[319.8px]" data-name="Container">
      <Heading2 />
      <Container9 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[4px] text-[16px] text-[rgba(203,251,241,0.7)] top-[-2.2px]">Communication</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p12dcd500} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[0.2px] text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.4px] w-[147px] whitespace-pre-wrap">Messages / Chat Notifications</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-[16px] top-[16px] w-[238.2px]" data-name="Container">
      <Container54 />
      <Label6 />
    </div>
  );
}

function Container55() {
  return <div className="absolute bg-[#00d5be] blur-[12px] h-[28px] left-0 opacity-50 rounded-[26843500px] top-0 w-[48px]" data-name="Container" />;
}

function Container56() {
  return <div className="absolute bg-white left-[26px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[20px] top-[4px]" data-name="Container" />;
}

function Button7() {
  return (
    <div className="absolute bg-[#00d5be] h-[28px] left-[254.2px] rounded-[26843500px] top-[26px] w-[48px]" data-name="Button">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[318.2px]" data-name="Container">
      <Container53 />
      <Button7 />
    </div>
  );
}

function Container57() {
  return <div className="absolute bg-[rgba(0,213,190,0.1)] h-px left-[16px] top-[80px] w-[286.2px]" data-name="Container" />;
}

function Container51() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container57 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_77_712)" id="Icon" opacity="0.8">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d={svgPaths.p3dfd2600} id="Vector_3" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
        <defs>
          <clipPath id="clip0_77_712">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[147.863px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">Trader Contact Alerts</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container61 />
      <Label7 />
    </div>
  );
}

function Container62() {
  return <div className="absolute bg-[#00d5be] blur-[12px] h-[28px] left-0 opacity-50 rounded-[26843500px] top-0 w-[48px]" data-name="Container" />;
}

function Container63() {
  return <div className="absolute bg-white left-[26px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[20px] top-[4px]" data-name="Container" />;
}

function Button8() {
  return (
    <div className="absolute bg-[#00d5be] h-[28px] left-[254.2px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[318.2px]" data-name="Container">
      <Container60 />
      <Button8 />
    </div>
  );
}

function Container64() {
  return <div className="absolute bg-[rgba(0,213,190,0.1)] h-px left-[16px] top-[60px] w-[286.2px]" data-name="Container" />;
}

function Container58() {
  return (
    <div className="h-[61px] relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container64 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_77_758)" id="Icon" opacity="0.8">
          <path d={svgPaths.p24c7c480} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
        <defs>
          <clipPath id="clip0_77_758">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[119.75px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">Call Notifications</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container67 />
      <Label8 />
    </div>
  );
}

function Container68() {
  return <div className="bg-white h-[20px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container" />;
}

function Button9() {
  return (
    <div className="absolute bg-[rgba(203,251,241,0.2)] content-stretch flex flex-col h-[28px] items-start left-[254.2px] pl-[4px] pr-[24px] pt-[4px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container68 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <Button9 />
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[rgba(10,22,40,0.7)] h-[203.6px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[0.8px] relative size-full">
          <Container51 />
          <Container58 />
          <Container65 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[239.6px] items-start left-[20px] top-[446.6px] w-[319.8px]" data-name="Container">
      <Heading3 />
      <Container50 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[4px] text-[16px] text-[rgba(203,251,241,0.7)] top-[-2.2px]">{`Earnings & Reviews`}</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[148.55px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">New Payment Added</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container74 />
      <Label9 />
    </div>
  );
}

function Container75() {
  return <div className="absolute bg-[#00d5be] blur-[12px] h-[28px] left-0 opacity-50 rounded-[26843500px] top-0 w-[48px]" data-name="Container" />;
}

function Container76() {
  return <div className="absolute bg-white left-[26px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[20px] top-[4px]" data-name="Container" />;
}

function Button10() {
  return (
    <div className="absolute bg-[#00d5be] h-[28px] left-[254.2px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[318.2px]" data-name="Container">
      <Container73 />
      <Button10 />
    </div>
  );
}

function Container77() {
  return <div className="absolute bg-[rgba(0,213,190,0.1)] h-px left-[16px] top-[60px] w-[286.2px]" data-name="Container" />;
}

function Container71() {
  return (
    <div className="absolute h-[61px] left-[0.8px] top-[0.8px] w-[318.2px]" data-name="Container">
      <Container72 />
      <Container77 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p3e8f800} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d={svgPaths.p11d57a00} id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[153.913px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">Withdrawal Approved</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container81 />
      <Label10 />
    </div>
  );
}

function Container82() {
  return <div className="absolute bg-[#00d5be] blur-[12px] h-[28px] left-0 opacity-50 rounded-[26843500px] top-0 w-[48px]" data-name="Container" />;
}

function Container83() {
  return <div className="absolute bg-white left-[26px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[20px] top-[4px]" data-name="Container" />;
}

function Button11() {
  return (
    <div className="absolute bg-[#00d5be] h-[28px] left-[254.2px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[318.2px]" data-name="Container">
      <Container80 />
      <Button11 />
    </div>
  );
}

function Container84() {
  return <div className="absolute bg-[rgba(0,213,190,0.1)] h-px left-[16px] top-[60px] w-[286.2px]" data-name="Container" />;
}

function Container78() {
  return (
    <div className="absolute h-[61px] left-[0.8px] top-[61.8px] w-[318.2px]" data-name="Container">
      <Container79 />
      <Container84 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p5cb4500} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[148.713px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">New Rating Received</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container88 />
      <Label11 />
    </div>
  );
}

function Container89() {
  return <div className="absolute bg-[#00d5be] blur-[12px] h-[28px] left-0 opacity-50 rounded-[26843500px] top-0 w-[48px]" data-name="Container" />;
}

function Container90() {
  return <div className="absolute bg-white left-[26px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[20px] top-[4px]" data-name="Container" />;
}

function Button12() {
  return (
    <div className="absolute bg-[#00d5be] h-[28px] left-[254.2px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container89 />
      <Container90 />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[318.2px]" data-name="Container">
      <Container87 />
      <Button12 />
    </div>
  );
}

function Container91() {
  return <div className="absolute bg-[rgba(0,213,190,0.1)] h-px left-[16px] top-[60px] w-[286.2px]" data-name="Container" />;
}

function Container85() {
  return (
    <div className="absolute h-[61px] left-[0.8px] top-[122.8px] w-[318.2px]" data-name="Container">
      <Container86 />
      <Container91 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.pcfbcf00} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
      </svg>
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[152.163px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">New Review Received</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container94 />
      <Label12 />
    </div>
  );
}

function Container95() {
  return <div className="bg-white h-[20px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container" />;
}

function Button13() {
  return (
    <div className="absolute bg-[rgba(203,251,241,0.2)] content-stretch flex flex-col h-[28px] items-start left-[254.2px] pl-[4px] pr-[24px] pt-[4px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container95 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute h-[60px] left-[0.8px] top-[183.8px] w-[318.2px]" data-name="Container">
      <Container93 />
      <Button13 />
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-[rgba(10,22,40,0.7)] h-[244.6px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container71 />
        <Container78 />
        <Container85 />
        <Container92 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[280.6px] items-start left-[20px] top-[710.2px] w-[319.8px]" data-name="Container">
      <Heading4 />
      <Container70 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[4px] text-[16px] text-[rgba(203,251,241,0.7)] top-[-2.2px]">System Alerts</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.p225b7100} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d={svgPaths.p1cc4d680} id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d="M6.66667 5V11.6667" id="Vector_3" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[148.613px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">App Announcements</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container101 />
      <Label13 />
    </div>
  );
}

function Container102() {
  return <div className="absolute bg-[#00d5be] blur-[12px] h-[28px] left-0 opacity-50 rounded-[26843500px] top-0 w-[48px]" data-name="Container" />;
}

function Container103() {
  return <div className="absolute bg-white left-[26px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[20px] top-[4px]" data-name="Container" />;
}

function Button14() {
  return (
    <div className="absolute bg-[#00d5be] h-[28px] left-[254.2px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container102 />
      <Container103 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[318.2px]" data-name="Container">
      <Container100 />
      <Button14 />
    </div>
  );
}

function Container104() {
  return <div className="absolute bg-[rgba(0,213,190,0.1)] h-px left-[16px] top-[60px] w-[286.2px]" data-name="Container" />;
}

function Container98() {
  return (
    <div className="h-[61px] relative shrink-0 w-full" data-name="Container">
      <Container99 />
      <Container104 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.pe595f00} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
      </svg>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Label14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[135.963px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">Maintenance Alerts</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container108 />
      <Label14 />
    </div>
  );
}

function Container109() {
  return <div className="bg-white h-[20px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container" />;
}

function Button15() {
  return (
    <div className="absolute bg-[rgba(203,251,241,0.2)] content-stretch flex flex-col h-[28px] items-start left-[254.2px] pl-[4px] pr-[24px] pt-[4px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container109 />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[318.2px]" data-name="Container">
      <Container107 />
      <Button15 />
    </div>
  );
}

function Container110() {
  return <div className="absolute bg-[rgba(0,213,190,0.1)] h-px left-[16px] top-[60px] w-[286.2px]" data-name="Container" />;
}

function Container105() {
  return (
    <div className="h-[61px] relative shrink-0 w-full" data-name="Container">
      <Container106 />
      <Container110 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.8">
          <path d={svgPaths.pcfbcf00} id="Vector" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #00D5BE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.39167" />
        </g>
      </svg>
    </div>
  );
}

function Container113() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Label15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[164.8px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(240,253,250,0.9)] top-[-2.2px]">Document Expiry Alerts</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[16px] top-[18px] w-[238.2px]" data-name="Container">
      <Container113 />
      <Label15 />
    </div>
  );
}

function Container114() {
  return <div className="absolute bg-[#00d5be] blur-[12px] h-[28px] left-0 opacity-50 rounded-[26843500px] top-0 w-[48px]" data-name="Container" />;
}

function Container115() {
  return <div className="absolute bg-white left-[26px] rounded-[26843500px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[20px] top-[4px]" data-name="Container" />;
}

function Button16() {
  return (
    <div className="absolute bg-[#00d5be] h-[28px] left-[254.2px] rounded-[26843500px] top-[16px] w-[48px]" data-name="Button">
      <Container114 />
      <Container115 />
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Container112 />
      <Button16 />
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[rgba(10,22,40,0.7)] h-[183.6px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[0.8px] relative size-full">
          <Container98 />
          <Container105 />
          <Container111 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,213,190,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[219.6px] items-start left-[20px] top-[1014.8px] w-[319.8px]" data-name="Container">
      <Heading5 />
      <Container97 />
    </div>
  );
}

function Container116() {
  return <div className="absolute bg-gradient-to-r from-[#00d5be] h-[48px] left-0 opacity-0 to-[#00d3f2] top-0 w-[316.4px]" data-name="Container" />;
}

function Container117() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[48px] left-[91.52px] to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(255,255,255,0.2)] w-[316.4px]" data-name="Container" />;
}

function App() {
  return (
    <div className="absolute h-[20px] left-[140.46px] top-[14px] w-[35.475px]" data-name="App">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[-32.46px] text-[16px] text-white top-[-3px]" dir="auto">
        Save Preferences
      </p>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-gradient-to-r from-[#009689] h-[48px] left-[9px] overflow-clip rounded-[14px] shadow-[0px_6px_9.3px_-3px_rgba(0,187,167,0.25),0px_4px_6px_-4px_rgba(0,187,167,0.25)] to-[#00b8db] top-[1258px] via-1/2 via-[#00bba7] w-[343px]" data-name="Button">
      <Container116 />
      <Container117 />
      <App />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[1315px] left-[7px] top-[251px] w-[360px]" data-name="Container">
      <Container8 />
      <Container49 />
      <Container69 />
      <Container96 />
      <Button17 />
    </div>
  );
}

export default function Group3() {
  return (
    <div className="relative size-full">
      <Group2 />
      <Container7 />
    </div>
  );
}