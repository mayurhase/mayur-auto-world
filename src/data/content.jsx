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
    title: 'Car Cover',
    desc: 'Breathable, paint-safe covers for indoor/outdoor storage.',
    icon: <RiSparkling2Fill className="text-text" />,
    image: '/assets/car-cover-service.jpeg',
    inclusions: ['Custom sizing', 'Soft liner', 'UV + dust protection', 'Tie-downs', 'Logo placement'],
  },
  {
    title: 'Body Shop Denting & Painting',
    desc: 'Color-matched repairs with OEM-grade finish and glossy clear.',
    icon: <RiPaintFill className="text-text" />,
    image: '/assets/gallery/gallery8.jpeg',
    inclusions: ['Panel prep + filling', 'Color matching', 'Baked clear coat', 'Insurance-friendly estimates', 'Post-paint polish'],
  },
]

export const servicesPageServices = [
  ...homeServices,
  {
    title: 'Full Body Painting',
    desc: 'Complete respray with matched primer, base, and deep clear for a factory reset.',
    icon: <RiPaintFill className="text-text" />,
    image: '/assets/full-body-painting.jpeg',
    inclusions: ['Surface prep + masking', 'Color-match mixing', 'Primer + base + clear', 'Baked finish', 'Final polish & inspection'],
  },
  {
    title: 'Car Wash',
    desc: 'Two-bucket wash, foam pre-soak, and microfiber dry.',
    icon: <RiCarFill className="text-text" />,
    image: '/assets/car-wash.jpeg',
    inclusions: ['pH-balanced shampoo', 'Wheel + tire clean', 'Microfiber dry', 'Streak-free glass', 'Quick interior tidy'],
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
  { src: '/assets/gallery/gallery12.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery13.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery14.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery7.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery2.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery16.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery17.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery6.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery1.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery4.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery18.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery15.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery11.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery8.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery9.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery19.jpeg', category: 'Gallery' },
  { src: '/assets/gallery/gallery3.jpeg', category: 'Gallery' },
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



export const social = [
  { platform: 'Instagram', handle: '@mayur_autoworld', icon: <RiInstagramFill />, link: 'https://www.instagram.com/mayur_autoworld' },
  { platform: 'YouTube', handle: 'Build diaries & walkthroughs', icon: <RiYoutubeFill />, link: 'https://youtube.com/@mayurautoworld' },
  { platform: 'Facebook', handle: 'Connect on Facebook', icon: <RiInstagramFill />, link: 'https://www.facebook.com/share/1BacWgQEg8/?mibextid=wwXIfr' },
]

export const beforeAfter = {
  before: 'https://images.pexels.com/photos/171964/pexels-photo-171964.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop',
  after: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop',
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Car Cover', path: '/body-cover' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
]
