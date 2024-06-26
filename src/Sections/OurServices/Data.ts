interface IpopupContent {
  title: string,
  description: string,
  imageUrls: string[]
}

interface IiconsData {
  id: number
  iconImageUrl: string,
  popupContent: IpopupContent
}

export const iconsData: IiconsData[] = [
  {
    id: 1,
    iconImageUrl: '/images/services/firefighting.png',
    popupContent: {
      title: 'Fire Fighting',
      description: 'AWA, provides intruder detection systems for Commercial or Government Organizations and has many years of Experience in installing and servicing all types of Security Alarm systems. and firefighting all products, prior to being supported by the company, are thoroughly tested by our technicians with regard to their features and in particular, to reliability. AWA, systems range from simple and easy to use general security systems, to some of the most complex system in Australia.  The addition of Back-to-Base central monitoring for offices and factories means your premises is always being watched. AWA, also install major systems utilizing various technologies such as Video Motion Detection, Perimeter Protection and Closed Circuit television equipment. ',
      imageUrls: ["/images/services/firefighting/firefighting-1.png", "/images/services/firefighting/firefighting-2.png", "/images/services/firefighting/firefighting-3.png", "/images/services/firefighting/firefighting-4.png", "/images/services/firefighting/firefighting-5.png"],
    },
  },
  {
    id: 2,
    iconImageUrl: '/images/services/hvac.png',
    popupContent: {
      title: 'HVAC',
      description: 'We install, maintain and repair climate-control systems in homes, schools, hospitals, factories,  hotels, offices providing thermal comfort and maintaining good indoor air quality is our main purpose. AWA strives to install systems with the perfect quality-cost balance that successfully provides superior air quality while incurring low energy costs and allowing easy maintenance. We follow blueprints and specifications for installation, inspect and maintain systems, install controls, test individual parts, and replace worn-out components',
      imageUrls: ["/images/services/hvac/hvac-1.png"],
    },
  },
  {
    id: 3,
    iconImageUrl: '/images/services/plumbing.svg',
    popupContent: {
      title: 'Plumbing',
      description: 'AWA puts lots of emphasis to ensure that every plumbing system installed is equipped with well sized and securely connected pipes, drains, fittings, valves, valve assemblies and devices for the proper distribution of water. Our Designers always assure to implement global and Egyptian regulations. and standards to guarantee delivering best quality. ',
      imageUrls: ["/images/services/plumbing/plumbing-1.png"],
    },
  },
  {
    id: 4,
    iconImageUrl: '/images/services/lowvoltage.png',
    popupContent: {
      title: 'Low Voltage',
      description: 'AWA engineers low voltage systems that distributes power where is needed, safely and reliably, while providing optimal protection for personnel and equipment .',
      imageUrls: ["/images/services/lowvoltage/lowvoltage-1.png"],
    },
  },
  {
    id: 5,
    iconImageUrl: '/images/services/lowcurrent2.png',
    popupContent: {
      title: 'Low Current',
      description: 'AWA engineers low voltage systems that distributes power where is needed, safely and reliably, while providing optimal protection for personnel and equipment .',
      imageUrls: ["/images/services/lowvoltage/lowvoltage-1.png"],
    },
  },
];