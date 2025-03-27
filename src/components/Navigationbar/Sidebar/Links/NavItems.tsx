interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    // {
    //   label: "aboutUs",
    //   href: "/",
    //   children: [
    //     {
    //       label: "ted",
    //       subLabel: "tedSubLabel",
    //       href: "/",
    //     },
    //     {
    //       label: "tedx",
    //       subLabel: "tedxSubLabel",
    //       href: "/",
    //     },
    //     {
    //       label: "tedxconcordiauniversity",
    //       subLabel: "tedxconcordiauniversitySubLabel",
    //       href: "/",
    //     },
    //   ],
    // },
    {
      label: "event",
      href: "/event/",
      children: [
        {
          label: "dateAndTime",
          subLabel: "dateAndTimeSubLabel",
          href: "/event/",
        },
        // {
        //   label: "Location",
        //   subLabel: "Trending Design to inspire you",
        //   href: "#",
        // },
        {
          label: "ticket",
          subLabel: "ticketSubLabel",
          href: "/event/",
        },
        // {
        //   label: "Registration",
        //   subLabel: "Up-and-coming Designers",
        //   href: "#",
        // },
      ],
    },
    {
      label: "team",
      href: "/team/",
    },
    {
      label: "speakers",
      href: "/speakers/",
    },
    // {
    //   label: "partners",
    //   href: "#",
    // },
    {
      label: "media",
      href: "/photos/",
    },
    // {
    //   label: "joinUs",
    //   href: "/joinus/",
    //   children: [
    //     {
    //       label: "members",
    //       subLabel: "membersSubLabel",
    //       href: "/joinus/team/",
    //     },
    //     {
    //       label: "speakers",
    //       subLabel: "speakersSubLabel",
    //       href: "/joinus/speaker/",
    //     },
    //     {
    //       label: "sponsors",
    //       subLabel: "sponsorsSubLabel",
    //       href: "/joinus/sponsor/",
    //     },
    //   ],
    // },
  ];
  
  export default NAV_ITEMS;
  