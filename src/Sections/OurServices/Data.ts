// interface IiconsData {
//   iconImageUrl: string;
//   title: string;
// }

// interface ImodalContent {
//   id: number;
//   triggerData: IiconsData;
//   title: string;
//   description: string;
//   secondDesc?: string;
//   list?: string[];
//   imageUrls?: string[];
// }

// interface IfireFighting {
//   id: number;
//   title: string;
//   description?: string;
//   list?: string[];
//   img: string;
// }

export const iconsData = [
  {
    id: 0,
    iconImageUrl: "/images/services/firefighting.png",
    title: "Fire Fighting",
  },
  {
    id: 1,
    iconImageUrl: "/images/services/hvac.png",
    title: "HVAC",
  },
  {
    id: 2,
    iconImageUrl: "/images/services/plumbing.svg",
    title: "Plumbing",
  },
  {
    id: 3,
    iconImageUrl: "/images/services/lowvoltage.png",
    title: "Low Voltage",
  },
  {
    id: 4,
    iconImageUrl: "/images/services/lowcurrent2.png",
    title: "Low Current",
  },
  {
    id: 5,
    iconImageUrl: "/images/services/cctv.png",
    title: "CCTV & IP",
  },
  {
    id: 6,
    iconImageUrl: "/images/services/attendance.png",
    title: "Time Attendance",
  },
  {
    id: 7,
    iconImageUrl: "/images/services/parking.png",
    title: "parking System",
  },
  {
    id: 8,
    iconImageUrl: "/images/services/accesscontrol.png",
    title: "Access Control",
  },
  {
    id: 9,
    iconImageUrl: "/images/services/network.png",
    title: "Network and data",
  },
  {
    id: 10,
    iconImageUrl: "/images/services/firealarm.png",
    title: "Fire alarm",
  },
];
export const modalContentv2 = [
  { iconImage: "", images: [""], title: "", des: "", list: ["", ""] },
  { iconImage: "", images: ["", ""], title: "", des: "", list: ["", ""] },
  { iconImage: "", images: ["", ""], title: "", des: "" },
];
export const fireFightingv2 = [
  { img: "", title: "", des: "" },
  { img: "", title: "", des: "" },
  { img: "", title: "", des: "" },
  { img: "", title: "", des: "" },
];
export const modalContent = [
  {
    id: 0,
    iconImageUrl: "/images/services/firefighting.png",
    title: "Fire fighting",
  },
  {
    id: 1,
    iconImageUrl: "/images/services/hvac.png",
    title: "HVAC",
    description:
      "We install, maintain and repair climate-control systems in homes, schools, hospitals, factories,  hotels, offices providing thermal comfort and maintaining good indoor air quality is our main purpose.",
    secondDesc:
      "AWA strives to install systems with the perfect quality-cost balance that successfully provides superior air quality while incurring low energy costs and allowing easy maintenance. We follow blueprints and specifications for installation, inspect and maintain systems, install controls, test individual parts, and replace worn-out components.",
    list: [
      "• Ventilation(extract and fresh air fans).",
      "• Air filtration systems.",
      "• Chilled water systems.",
      "• DX / VRV systems.",
      "• Package units.",
      "• Fan coil units and air Handling Units.",
      "• Ecology Units.",
      "• Fabrication and installation of Gl sheet ducting.",
    ],
    imageUrls: ["/images/services/hvac/hvac-1.png"],
  },
  {
    id: 2,
    iconImageUrl: "/images/services/plumbing.svg",
    title: "Plumbing",
    description:
      "AWA puts lots of emphasis to ensure that every plumbing system installed is equipped with well sized and securely connected pipes, drains, fittings, valves, valve assemblies and devices for the proper distribution of water. Our Designers always assure to implement global and Egyptian regulations. and standards to guarantee delivering best quality. ",
    list: [
      "-Sanitary and drainage systems.",
      "-Water distribution.",
      "-Water treatment Pumping stations",
      "-Swimming pools.",
      "-Solar Heaters.",
      "- Kitchen and laundry plumbing .",
      "- Irrigation systems and controls.",
      "-Sand traps and grease traps .",
    ],
    imageUrls: ["/images/services/plumbing/plumbing-1.png"],
  },
  {
    id: 3,
    iconImageUrl: "/images/services/lowvoltage.png",
    title: "Low Voltage",
    description:
      "AWA engineers low voltage systems that distributes power where is needed, safely and reliably, while providing optimal protection for personnel and equipment .Our range of low voltage distribution elements includes:",
    list: [
      "-Grounding.",
      "- Main Distribution Boards(MDB).",
      "- Secondary Main Distribution Boards(SMDB).",
      "- Final Distribution Boards(FDB).",
      "- Cables.",
      "- Lighting fixtures.",
      "- Sockets.",
      "- Emergency power systems(Generators, UPS).",
    ],
    imageUrls: ["/images/services/lowvoltage/lowvoltage-1.png"],
  },
  {
    id: 4,
    iconImageUrl: "/images/services/lowcurrent2.png",
    title: "Low Current",
    description:
      "Arc sine engineers’ low voltage systems that distribute power where is needed, safely and reliably, while providing  optimal protection for personnel and equipment.",
    secondDesc: "Our range of low voltage distribution elements includes :",
    list: [
      "• Data and Communication.",
      "• Fire Alarm.",
      "• Access Control.",
      "• Queue Management System.",
      "• BMS(Building Management System).",
      "• Audio Visual.",
      "• Lighting Control System.",
      "• Video and Audio Intercom System",
      "• Ai - CCTV",
      "• SD WAN",
    ],
    imageUrls: ["/images/services/lowcurrent/lowcurrent-1.png"],
  },
  {
    id: 5,
    iconImageUrl: "/images/services/cctv.png",
    title: "CCTV&IP SECURITY CAMERA",
    description:
      "The Company’s policy is to select only the highest quality equipment for any specific requirements. AWA are accredited partners with the suppliers of the most advanced Closed Circuit Camera equipment in the world and install, supply and commission CCTV Systems for a wide variety of clients.",
    imageUrls: ["/images/services/cctv/cctv-1.png"],
  },
  {
    id: 6,
    iconImageUrl: "/images/services/attendance.png",
    title: "Time Attendance",
    description:
      "Still tracking employee time and attendance on spread sheets or paper punch cards streamline your payroll processes and ensure policy compliance track time for any employee type with our highly configurable and intuitive time sheet.",
    imageUrls: ["/images/services/attendance/attendance-1.png"],
  },
  {
    id: 7,
    iconImageUrl: "/images/services/parking.png",
    title: "PARKING GATES",
    description:
      "Parking gates system allows cars to enter and exit lots within a scheduled time range.  Parking gates access system allow you to reserve parking for intended vehicles by keeping the general public out.  Parking barrier Gates. Also known as barrier gates allow or deny access to vehicles on a given property at fast access security.",
    imageUrls: ["/images/services/parking/parking-1.png"],
  },
  {
    id: 8,
    iconImageUrl: "/images/services/accesscontrol.png",
    title: "Access Control",
    description:
      "Access control decisions are made by comparing the credential to an access control panel, Or by a reader.  The development of access control system has seen a steady bush of the look-up out from a central host to the edge of the system or the reader.",
    imageUrls: ["/images/services/accesscontrol/accesscontrol-1.png"],
  },
  {
    id: 9,
    iconImageUrl: "/images/services/network.png",
    title: "Network and data",
    description:
      "Data communication refers to the transmission of this digital data between two or more computes ans a computer network or data network is a telecommunication network that allows computer to exchange data .The physical connection between networked computing devices is established using either cable media or wireless media.",
    imageUrls: ["/images/services/networking/networking.png"],
  },
  {
    id: 10,
    iconImageUrl: "/images/services/firealarm.png",
    title: "Fire alarm",
    description:
      "Addressable fire alarm system conventional fire alarm system releasing & special hazard system voice evacuation system addressable devices &detectors convection device special hazard detectors notification appliances remote annunciations accessories open graphic navigator.",
    imageUrls: ["/images/services/firealarm/firealarm.png"],
  },
];

export const fireFighting: IfireFighting[] = [
  {
    id: 1,
    title: "FIRE FIGHTING",
    description:
      "AWA, provides intruder detection systems for Commercial or Government Organizations and has many years of Experience in installing and servicing all types of Security Alarm systems. and firefightImagel  product s fireFighting e fireFighting d  by the company, are thoroughly tested by our technicians with regard to their features and in particular, to reliability. AWA, systems range from simple and easy to use general security systems, to some of the most complex system in Australia.  The addition of Back-to-Base central monitoring for offices and factories means your premises is always being watched. AWA, also install major systems utilizing various technologies such as Video Motion Detection, Perimeter Protection and Closed Circuit television equipment.",
    img: "/images/services/firefighting/firefighting-1.png",
  },
  {
    id: 2,
    title: "UL / FM – Fire Pump Skid as per NFPA 20 Consists of:",
    list: [
      "•500 gpm-8 bars. UL/FM Electric driven fire pump.",
      "•500 gpm-8 bars. UL/FM diesel driven fire pump.",
      "•25 gpm-9 bars. Vertical turbine jockey pump.",
      "•UL/FM – star/delta electric fire pump controller.",
      "•UL/FM diesel fire pump controller.",
      "•UL – jockey pump controller.",
      "•UL – single diesel tank.",
      "•FM – water flow meter.",
      "•SS- sensing lines for 3-pumps.",
      "•UL/FM – pressure relief valve.",
      "•UL/FM – 6 O.S. &Y. gate valves.",
      "•UL/FM – 6 non return valves.",
      "• Suction and discharge manifolds.250 G PM– 1250 GPM available.UL / FM.",
    ],
    img: "/images/services/firefighting/firefighting-2.png",
  },
  {
    id: 3,
    title: "Fire suppression clean agent system: FM200",
    description:
      "The CO2 extinguisher system FM 200 is a non-conductive carbon dioxide fire extinguisher that is commonly used to put out Class A, B, and C fires.  The system is effective against various types of Fuels, Oils, Greases, and Electrical fires.  CO2 extinguishers are an effective way to extinguish fires because they cool the fuel, rendering it unignitable . They are lightweight and easy to use, making them ideal for various applications, including high-risk environments. CO2 extinguisher systems also have a long lifespan, require minimal maintenance, and are easily recharged",
    img: "/images/services/firefighting/firefighting-3.png",
  },
  {
    id: 4,
    title: "Fire suppression system: Co2",
    description:
      "CO2 extinguisher system is a fire suppression system designed to put out Class A and Class B fires, as well as electrical fires. It works by discharging carbon dioxide,  a non-conductive and non-flammable gas, which suffocates the fire and removes the oxygen needed for combustion.  CO2 extinguishers are commonly found in areas where electrical equipment and flammable materials are present, such as computer rooms, laboratories, and industrial settings.",
    img: "/images/services/firefighting/firefighting-4.png",
  },
  {
    id: 5,
    title: "Fire suppression clean agent system : NOVEC",
    description:
      "Novec 1230 fluid is known as a fluorinated ketone and is manufactured by 3M.  Novec 1230 fluid has low toxicity and has a boiling point of 49 degrees C and therefore exists as a liquid at room temperature.It is therefore available to protect most hazards traditionally protected with halon 1301 and will be particularly important in Marine applications and others where high margins of safety and long-term sustainability are considered to be important features.Despite having a low boiling point, Novec 1230 fluid is able to be effectively vaporized over a wide range of hazard temperatures.Features:Zero ozone depleting potentialNegligible global warming potentialAtmospheric lifetime of less than 5 daysSafe for use in occupied areasRequires minimal storage space",
    img: "/images/services/firefighting/firefighting-5.png",
  },
];
