import React from 'react'
import {
  RiSparkling2Fill,
  RiShieldStarFill,
  RiFlashlightFill,
  RiBrushFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiPaintFill,
  RiCarFill,
} from 'react-icons/ri'

export const homeServices = [
  {
    title: 'Car Detailing',
    desc: 'Deep interior + exterior revival with dressed trims and glass.',
    icon: <RiFlashlightFill className="text-text" />,
    image: '/assets/car-detailing.jpeg',
    inclusions: ['Foam wash + decon', 'Interior steam', 'Trim dressing', 'Glass clarity', 'Fragrance + protectants'],
  },
  {
    title: 'Ceramic & Graphic Coating',
    desc: 'Long-term gloss, hydrophobic protection, and safe graphics underneath.',
    icon: <RiShieldStarFill className="text-text" />,
    image: '/assets/graphic%20coating.jpeg',
    inclusions: ['Multi-year ceramic', 'Graphic-safe prep', 'Glass + wheels coat', 'UV + chemical resistance', 'Aftercare kit'],
  },
  {
    title: 'Premium Seat Cover',
    desc: 'Tailored seat covers with contrast stitching and factory fit.',
    icon: <RiSparkling2Fill className="text-text" />,
    image: '/assets/seat-cover.png',
    inclusions: ['Custom patterns', 'Contrast stitching', 'Perforation/vent cut-outs', 'Airbag-safe panels', 'Fast turnaround'],
  },
  {
    title: 'Body Shop Denting & Painting',
    desc: 'Color-matched repairs with OEM-grade finish and glossy clear.',
    icon: <RiPaintFill className="text-text" />,
    image: '/assets/denting-and-painting.png',
    inclusions: ['Panel prep + filling', 'Color matching', 'Baked clear coat', 'Insurance-friendly estimates', 'Post-paint polish'],
  },
  {
    title: 'Full Body Painting',
    desc: 'Complete respray with matched primer, base, and deep clear for a factory reset.',
    icon: <RiPaintFill className="text-text" />,
    image: '/assets/full-body-painting.jpeg',
    inclusions: ['Surface prep + masking', 'Color-match mixing', 'Primer + base + clear', 'Baked finish', 'Final polish & inspection'],
  },
]

export const servicesPageServices = [
  ...homeServices,
  {
    title: 'Car Wash',
    desc: 'Two-bucket wash, foam pre-soak, and microfiber dry.',
    icon: <RiCarFill className="text-text" />,
    image: '/assets/car-wash.jpeg',
    inclusions: ['pH-balanced shampoo', 'Wheel + tire clean', 'Microfiber dry', 'Streak-free glass', 'Quick interior tidy'],
  },
  {
    title: 'Car Body Cover',
    desc: 'Breathable, paint-safe covers for indoor/outdoor storage.',
    icon: <RiShieldStarFill className="text-text" />,
    image: '/assets/car-cover-service.jpeg',
    inclusions: ['Custom sizing', 'Soft liner', 'UV + dust protection', 'Tie-downs', 'Logo placement'],
  },
  {
    title: 'Mats',
    desc: '3D mats, lamination, and easy-clean floor protection.',
    icon: <RiBrushFill className="text-text" />,
    image: '/assets/mat.jpeg',
    inclusions: ['3D tray fitment', 'Odor-free materials', 'Stain-resistant', 'Heel pad options', 'Fast install'],
  },
  {
    title: 'Accessories',
    desc: 'From ambient lighting to dash cams, fitted cleanly.',
    icon: <RiSparkling2Fill className="text-text" />,
    image: '/assets/accessories.jpeg',
    inclusions: ['Ambient + footwell lights', 'Dash cams', 'Phone mounts', 'Wire tuck + fuse tap', 'OEM-look finish'],
  },
  {
    title: 'Sun Control Films',
    desc: 'Heat rejection tints installed with clean edges.',
    icon: <RiShieldStarFill className="text-text" />,
    image: '/assets/sun-control-film.jpeg',
    inclusions: ['Heat + UV rejection', 'Edge-to-edge install', 'Rear screen seamless', 'Multiple VLT options', 'Warranty backed'],
  },
]

export const trustBar = [
  { label: '4.9/5 rating', detail: 'Across 5k+ owner reviews' },
  { label: '20,000+', detail: 'Happy Customers' },
  { label: '5-yr PPF warranty', detail: 'Registered & transferable' },
  { label: 'Certified installers', detail: 'Film + coating accredited' },
]

export const processShots = [
  {
    title: 'Lighting inspection',
    text: 'Swirl mapping and edge planning under calibrated lights.',
    image: 'https://images.pexels.com/photos/687308/pexels-photo-687308.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
  },
  {
    title: 'Surface prep',
    text: 'Decon wash, clay, panel wipe, and masked edges before film.',
    image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
  },
  {
    title: 'Finish + cure',
    text: 'Heat-set wraps and ceramic curing in dust-controlled bays.',
    image: 'https://images.pexels.com/photos/687311/pexels-photo-687311.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
  },
]

export const galleryItems = [
  { src: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&fit=crop', category: 'PPF' },
  { src: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1200&fit=crop', category: 'Detailing' },
  { src: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop', category: 'Detailing' },
  { src: 'https://images.pexels.com/photos/105234/pexels-photo-105234.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1100&fit=crop', category: 'Interior' },
  { src: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1400&h=950&fit=crop', category: 'PPF' },
  { src: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1050&fit=crop', category: 'Alloys' },
  { src: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1400&h=980&fit=crop', category: 'Alloys' },
]

export const transformations = [
  {
    car: 'Porsche 911 Carrera',
    work: 'Full-body stealth PPF + wheels ceramic',
    before: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop',
    after: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop',
    notes: 'Stealth film with wrapped edges, badges reinstalled, hydrophobic coat on wheels.',
  },
  {
    car: 'Mercedes GLE 53',
    work: 'Two-step correction + 5-year ceramic',
    before: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop',
    after: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop',
    notes: 'Restored depth on black paint, coated glass and trims, interior detox and leather feed.',
  },
]

export const brands = ['Xpel / SunTek films', 'Gyeon / Gtechniq coatings', 'Koch-Chemie prep', 'Swissvax interiors', '3M Pro tools']

export const faqs = [
  {
    q: 'What services do you offer?',
    a: 'Professional car care and detailing: premium wash, interior cleaning, ceramic/graphene coating, paint protection, scratch removal, alloy & tyre care, headlight restoration, and interior accessories. (Services vary by vehicle and package.)',
  },
  {
    q: 'How do I book a service?',
    a: 'Call or WhatsApp us, submit the website enquiry form, or visit our workshop. We’ll confirm and schedule quickly.',
  },
  {
    q: 'Do you provide warranties?',
    a: 'Yes. Warranty depends on the service or product (e.g., coatings, accessories). Terms are explained upfront—no surprises.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'Cash, UPI, debit/credit cards, and bank transfer.',
  },
  {
    q: 'Can I reschedule or cancel?',
    a: 'Yes. Please inform us at least 24 hours in advance.',
  },
  {
    q: 'Do you offer discounts?',
    a: 'Occasional offers on select services. Check with us or our social pages for current deals.',
  },
  {
    q: 'Can you match my car’s paint color?',
    a: 'Yes. We use manufacturer codes and shade matching. Minor variations can occur due to aging or sun exposure, but the finish is visually seamless.',
  },
  {
    q: 'Can services be customized?',
    a: 'Yes. We tailor services to your car’s condition, usage, and budget—no unnecessary upselling.',
  },
]

export const social = [
  { platform: 'Instagram', handle: '@mayur_autoworld', icon: <RiInstagramFill />, link: 'https://www.instagram.com/mayur_autoworld' },
  { platform: 'YouTube', handle: 'Build diaries & walkthroughs', icon: <RiYoutubeFill />, link: 'https://youtube.com/@mayurautoworld' },
]

export const beforeAfter = {
  before: 'https://images.pexels.com/photos/171964/pexels-photo-171964.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop',
  after: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop',
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Join Us', path: '/join' },
]
