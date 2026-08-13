import { DistrictData, SentimentAlert, PortfolioProperty } from '../types';

export const SINGAPORE_DISTRICTS: DistrictData[] = [
  {
    id: 'D9',
    numId: 9,
    name: 'District 9',
    shortName: 'Orchard',
    subregions: 'Orchard, Cairnhill, River Valley',
    region: 'CCR',
    score: 8.4,
    avgRentalYield: 3.8,
    yieldYoy: 0.2,
    transactionVolume30d: 142,
    volumeMom: -12,
    medianPsf: 2450,
    affordabilityIndex: 14.2,
    priceTrend20y: [
      { year: 2004, psf: 1200 },
      { year: 2006, psf: 1350 },
      { year: 2008, psf: 1520 },
      { year: 2010, psf: 1680 },
      { year: 2012, psf: 1820 },
      { year: 2014, psf: 1950 },
      { year: 2016, psf: 2050 },
      { year: 2018, psf: 2200 },
      { year: 2020, psf: 2180 },
      { year: 2022, psf: 2350 },
      { year: 2024, psf: 2450 },
    ],
    topDevelopments: [
      { name: 'Boulevard Vue', tenure: 'Freehold', avgPsf: 4100, units: 28, yield: 3.2, completionYear: 2014 },
      { name: '3 Cuscaden', tenure: 'Freehold', avgPsf: 3550, units: 96, yield: 3.6, completionYear: 2022 },
      { name: 'The Marq on Paterson', tenure: 'Freehold', avgPsf: 4600, units: 66, yield: 2.9, completionYear: 2011 },
      { name: 'Riviere', tenure: '99-year', avgPsf: 2780, units: 455, yield: 4.1, completionYear: 2023 }
    ],
    svgPathD: 'M 380,260 L 430,250 L 460,285 L 420,310 L 375,290 Z',
    labelPos: { x: 415, y: 280 },
    recentCaveats: [
      { id: 'C-901', project: 'Riviere', district: 'D9', type: 'Condo', sizeSqft: 1173, priceSgd: 3260000, psf: 2779, date: '10 Aug 2026', floorLevel: '18 to 20' },
      { id: 'C-902', project: '3 Cuscaden', district: 'D9', type: 'Condo', sizeSqft: 764, priceSgd: 2712000, psf: 3549, date: '08 Aug 2026', floorLevel: '12 to 14' },
      { id: 'C-903', project: 'Martin Modern', district: 'D9', type: 'Condo', sizeSqft: 883, priceSgd: 2480000, psf: 2808, date: '04 Aug 2026', floorLevel: '22 to 24' }
    ],
    schoolProximity1kmCount: 5,
    foreignBuyerRatio: 18.5
  },
  {
    id: 'D10',
    numId: 10,
    name: 'District 10',
    shortName: 'Tanglin / Holland',
    subregions: 'Tanglin, Holland, Bukit Timah, Ardmore',
    region: 'CCR',
    score: 8.9,
    avgRentalYield: 3.5,
    yieldYoy: 0.1,
    transactionVolume30d: 118,
    volumeMom: 4,
    medianPsf: 2680,
    affordabilityIndex: 16.5,
    priceTrend20y: [
      { year: 2004, psf: 1300 },
      { year: 2008, psf: 1650 },
      { year: 2012, psf: 1980 },
      { year: 2016, psf: 2150 },
      { year: 2020, psf: 2400 },
      { year: 2024, psf: 2680 }
    ],
    topDevelopments: [
      { name: 'Leedon Green', tenure: 'Freehold', avgPsf: 2850, units: 638, yield: 3.4, completionYear: 2023 },
      { name: 'Hyll on Holland', tenure: 'Freehold', avgPsf: 2720, units: 319, yield: 3.7, completionYear: 2024 },
      { name: 'Nassim Park Residences', tenure: 'Freehold', avgPsf: 3950, units: 100, yield: 2.8, completionYear: 2011 }
    ],
    svgPathD: 'M 300,240 L 380,260 L 375,290 L 330,320 L 280,280 Z',
    labelPos: { x: 330, y: 270 },
    recentCaveats: [
      { id: 'C-1001', project: 'Leedon Green', district: 'D10', type: 'Condo', sizeSqft: 1044, priceSgd: 2975000, psf: 2849, date: '11 Aug 2026', floorLevel: '08 to 10' }
    ],
    schoolProximity1kmCount: 7,
    foreignBuyerRatio: 22.1
  },
  {
    id: 'D15',
    numId: 15,
    name: 'District 15',
    shortName: 'East Coast',
    subregions: 'Katong, Marine Parade, Tanjong Rhu, Siglap',
    region: 'RCR',
    score: 8.1,
    avgRentalYield: 4.2,
    yieldYoy: 0.4,
    transactionVolume30d: 186,
    volumeMom: 18,
    medianPsf: 2150,
    affordabilityIndex: 11.8,
    priceTrend20y: [
      { year: 2004, psf: 850 },
      { year: 2008, psf: 1100 },
      { year: 2012, psf: 1450 },
      { year: 2016, psf: 1620 },
      { year: 2020, psf: 1850 },
      { year: 2024, psf: 2150 }
    ],
    topDevelopments: [
      { name: 'Meyer Mansion', tenure: 'Freehold', avgPsf: 2620, units: 200, yield: 3.8, completionYear: 2024 },
      { name: 'Liv@MB', tenure: '99-year', avgPsf: 2410, units: 298, yield: 4.3, completionYear: 2024 },
      { name: 'Grand Dunman', tenure: '99-year', avgPsf: 2530, units: 1008, yield: 4.1, completionYear: 2027 }
    ],
    svgPathD: 'M 540,290 L 630,270 L 680,330 L 590,340 Z',
    labelPos: { x: 610, y: 310 },
    recentCaveats: [
      { id: 'C-1501', project: 'Grand Dunman', district: 'D15', type: 'Condo', sizeSqft: 958, priceSgd: 2423800, psf: 2530, date: '09 Aug 2026', floorLevel: '15 to 17' }
    ],
    schoolProximity1kmCount: 8,
    foreignBuyerRatio: 9.4
  },
  {
    id: 'D19',
    numId: 19,
    name: 'District 19',
    shortName: 'Hougang / Punggol',
    subregions: 'Serangoon Garden, Hougang, Punggol, Sengkang',
    region: 'OCR',
    score: 6.8,
    avgRentalYield: 4.6,
    yieldYoy: -0.1,
    transactionVolume30d: 210,
    volumeMom: -8,
    medianPsf: 1720,
    affordabilityIndex: 8.9,
    priceTrend20y: [
      { year: 2004, psf: 550 },
      { year: 2008, psf: 720 },
      { year: 2012, psf: 1020 },
      { year: 2016, psf: 1250 },
      { year: 2020, psf: 1480 },
      { year: 2024, psf: 1720 }
    ],
    topDevelopments: [
      { name: 'The Florence Residences', tenure: '99-year', avgPsf: 1780, units: 1410, yield: 4.5, completionYear: 2023 },
      { name: 'Sengkang Grand Residences', tenure: '99-year', avgPsf: 1850, units: 680, yield: 4.7, completionYear: 2023 }
    ],
    svgPathD: 'M 520,160 L 610,150 L 640,210 L 540,230 Z',
    labelPos: { x: 570, y: 195 },
    recentCaveats: [
      { id: 'C-1901', project: 'Sengkang Grand', district: 'D19', type: 'Condo', sizeSqft: 764, priceSgd: 1413400, psf: 1850, date: '07 Aug 2026', floorLevel: '09 to 11' }
    ],
    schoolProximity1kmCount: 12,
    foreignBuyerRatio: 3.2
  },
  {
    id: 'D1',
    numId: 1,
    name: 'District 1',
    shortName: 'CBD / Raffles Place',
    subregions: 'Raffles Place, Boat Quay, Marina Bay',
    region: 'CCR',
    score: 8.7,
    avgRentalYield: 4.1,
    yieldYoy: 0.3,
    transactionVolume30d: 95,
    volumeMom: 6,
    medianPsf: 2580,
    affordabilityIndex: 15.1,
    priceTrend20y: [
      { year: 2004, psf: 1100 },
      { year: 2008, psf: 1580 },
      { year: 2012, psf: 1950 },
      { year: 2016, psf: 2180 },
      { year: 2020, psf: 2350 },
      { year: 2024, psf: 2580 }
    ],
    topDevelopments: [
      { name: 'Marina One Residences', tenure: '99-year', avgPsf: 2520, units: 1042, yield: 4.2, completionYear: 2018 },
      { name: 'V on Shenton', tenure: '99-year', avgPsf: 2380, units: 510, yield: 4.0, completionYear: 2017 },
      { name: 'One Bernam', tenure: '99-year', avgPsf: 2650, units: 351, yield: 4.1, completionYear: 2025 }
    ],
    svgPathD: 'M 430,310 L 480,300 L 490,340 L 440,350 Z',
    labelPos: { x: 460, y: 325 },
    recentCaveats: [
      { id: 'C-101', project: 'Marina One Residences', district: 'D1', type: 'Condo', sizeSqft: 1023, priceSgd: 2577960, psf: 2520, date: '05 Aug 2026', floorLevel: '28 to 30' }
    ],
    schoolProximity1kmCount: 2,
    foreignBuyerRatio: 26.4
  },
  {
    id: 'D2',
    numId: 2,
    name: 'District 2',
    shortName: 'Tanjong Pagar',
    subregions: 'Anson Road, Tanjong Pagar, Chinatown',
    region: 'CCR',
    score: 8.5,
    avgRentalYield: 4.3,
    yieldYoy: 0.2,
    transactionVolume30d: 88,
    volumeMom: 2,
    medianPsf: 2620,
    affordabilityIndex: 14.8,
    priceTrend20y: [
      { year: 2004, psf: 1050 },
      { year: 2008, psf: 1500 },
      { year: 2012, psf: 1880 },
      { year: 2016, psf: 2100 },
      { year: 2020, psf: 2380 },
      { year: 2024, psf: 2620 }
    ],
    topDevelopments: [
      { name: 'Wallich Residence', tenure: '99-year', avgPsf: 3350, units: 181, yield: 3.5, completionYear: 2017 },
      { name: 'Sky Everton', tenure: 'Freehold', avgPsf: 2780, units: 262, yield: 3.9, completionYear: 2023 }
    ],
    svgPathD: 'M 390,320 L 430,310 L 440,350 L 400,360 Z',
    labelPos: { x: 415, y: 335 },
    recentCaveats: [
      { id: 'C-201', project: 'Sky Everton', district: 'D2', type: 'Condo', sizeSqft: 678, priceSgd: 1884840, psf: 2780, date: '03 Aug 2026', floorLevel: '14 to 16' }
    ],
    schoolProximity1kmCount: 3,
    foreignBuyerRatio: 21.0
  },
  {
    id: 'D11',
    numId: 11,
    name: 'District 11',
    shortName: 'Novena / Newton',
    subregions: 'Watten Estate, Novena, Newton, Thomson',
    region: 'CCR',
    score: 8.3,
    avgRentalYield: 3.6,
    yieldYoy: 0.1,
    transactionVolume30d: 105,
    volumeMom: 5,
    medianPsf: 2480,
    affordabilityIndex: 13.9,
    priceTrend20y: [
      { year: 2004, psf: 1150 },
      { year: 2008, psf: 1480 },
      { year: 2012, psf: 1800 },
      { year: 2016, psf: 2000 },
      { year: 2020, psf: 2220 },
      { year: 2024, psf: 2480 }
    ],
    topDevelopments: [
      { name: 'Neu at Novena', tenure: 'Freehold', avgPsf: 2680, units: 87, yield: 3.7, completionYear: 2023 },
      { name: 'Pullman Residences', tenure: 'Freehold', avgPsf: 2950, units: 340, yield: 3.5, completionYear: 2023 }
    ],
    svgPathD: 'M 380,210 L 450,200 L 460,250 L 380,260 Z',
    labelPos: { x: 415, y: 230 },
    recentCaveats: [],
    schoolProximity1kmCount: 6,
    foreignBuyerRatio: 16.2
  },
  {
    id: 'D12',
    numId: 12,
    name: 'District 12',
    shortName: 'Toa Payoh / Balestier',
    subregions: 'Balestier, Toa Payoh, Serangoon',
    region: 'RCR',
    score: 7.6,
    avgRentalYield: 4.1,
    yieldYoy: 0.3,
    transactionVolume30d: 125,
    volumeMom: 8,
    medianPsf: 1890,
    affordabilityIndex: 10.4,
    priceTrend20y: [
      { year: 2004, psf: 700 },
      { year: 2008, psf: 950 },
      { year: 2012, psf: 1280 },
      { year: 2016, psf: 1450 },
      { year: 2020, psf: 1650 },
      { year: 2024, psf: 1890 }
    ],
    topDevelopments: [
      { name: 'Verticus', tenure: 'Freehold', avgPsf: 2080, units: 162, yield: 4.1, completionYear: 2024 }
    ],
    svgPathD: 'M 450,200 L 510,190 L 520,240 L 460,250 Z',
    labelPos: { x: 485, y: 220 },
    recentCaveats: [],
    schoolProximity1kmCount: 5,
    foreignBuyerRatio: 7.8
  },
  {
    id: 'D20',
    numId: 20,
    name: 'District 20',
    shortName: 'Bishan / Ang Mo Kio',
    subregions: 'Bishan, Ang Mo Kio, Thomson',
    region: 'OCR',
    score: 7.5,
    avgRentalYield: 4.0,
    yieldYoy: 0.2,
    transactionVolume30d: 160,
    volumeMom: 3,
    medianPsf: 1820,
    affordabilityIndex: 9.8,
    priceTrend20y: [
      { year: 2004, psf: 650 },
      { year: 2008, psf: 880 },
      { year: 2012, psf: 1180 },
      { year: 2016, psf: 1380 },
      { year: 2020, psf: 1580 },
      { year: 2024, psf: 1820 }
    ],
    topDevelopments: [
      { name: 'AMO Residence', tenure: '99-year', avgPsf: 2110, units: 372, yield: 3.9, completionYear: 2026 },
      { name: 'Jadescape', tenure: '99-year', avgPsf: 1820, units: 1206, yield: 4.2, completionYear: 2022 }
    ],
    svgPathD: 'M 400,140 L 520,130 L 520,190 L 400,210 Z',
    labelPos: { x: 460, y: 165 },
    recentCaveats: [],
    schoolProximity1kmCount: 9,
    foreignBuyerRatio: 4.1
  },
  {
    id: 'D21',
    numId: 21,
    name: 'District 21',
    shortName: 'Clementi / Upper Bukit Timah',
    subregions: 'Upper Bukit Timah, Clementi Park, Ulu Pandan',
    region: 'RCR',
    score: 7.8,
    avgRentalYield: 3.9,
    yieldYoy: 0.2,
    transactionVolume30d: 134,
    volumeMom: 7,
    medianPsf: 2050,
    affordabilityIndex: 11.2,
    priceTrend20y: [
      { year: 2004, psf: 780 },
      { year: 2008, psf: 1020 },
      { year: 2012, psf: 1350 },
      { year: 2016, psf: 1550 },
      { year: 2020, psf: 1780 },
      { year: 2024, psf: 2050 }
    ],
    topDevelopments: [
      { name: 'The Reserve Residences', tenure: '99-year', avgPsf: 2480, units: 732, yield: 3.8, completionYear: 2028 },
      { name: 'Linq at Beauty World', tenure: 'Freehold', avgPsf: 2250, units: 120, yield: 4.0, completionYear: 2025 }
    ],
    svgPathD: 'M 220,200 L 300,190 L 300,250 L 220,260 Z',
    labelPos: { x: 260, y: 225 },
    recentCaveats: [],
    schoolProximity1kmCount: 8,
    foreignBuyerRatio: 6.5
  },
  {
    id: 'D22',
    numId: 22,
    name: 'District 22',
    shortName: 'Jurong / Boon Lay',
    subregions: 'Jurong, Boon Lay, Tuas',
    region: 'OCR',
    score: 7.2,
    avgRentalYield: 4.5,
    yieldYoy: 0.5,
    transactionVolume30d: 195,
    volumeMom: 14,
    medianPsf: 1650,
    affordabilityIndex: 8.2,
    priceTrend20y: [
      { year: 2004, psf: 500 },
      { year: 2008, psf: 680 },
      { year: 2012, psf: 980 },
      { year: 2016, psf: 1180 },
      { year: 2020, psf: 1380 },
      { year: 2024, psf: 1650 }
    ],
    topDevelopments: [
      { name: "J'den", tenure: '99-year', avgPsf: 2450, units: 368, yield: 4.0, completionYear: 2028 },
      { name: 'The LakeGarden Residences', tenure: '99-year', avgPsf: 2120, units: 306, yield: 4.3, completionYear: 2027 }
    ],
    svgPathD: 'M 100,210 L 220,200 L 220,300 L 100,280 Z',
    labelPos: { x: 160, y: 250 },
    recentCaveats: [],
    schoolProximity1kmCount: 10,
    foreignBuyerRatio: 2.8
  }
];

export const INITIAL_SENTIMENT_ALERTS: SentimentAlert[] = [
  {
    id: 'alt-1',
    districtId: 'D15',
    districtName: 'D15 (East Coast)',
    subTitle: 'Unusually high launch interest',
    type: 'positive',
    message: 'Grand Dunman & Continuation buyer inquiries surged +28% following Thomson-East Coast Line opening.',
    timestamp: '10 mins ago'
  },
  {
    id: 'alt-2',
    districtId: 'D19',
    districtName: 'D19 (Hougang/Punggol)',
    subTitle: 'Resale volume drop',
    type: 'warning',
    message: 'Resale transaction volume decreased 8% MoM as buyer resistance met peak PSF expectations.',
    timestamp: '1 hour ago'
  },
  {
    id: 'alt-3',
    districtId: 'D9',
    districtName: 'D9 (Orchard)',
    subTitle: 'Institutional buying rebound',
    type: 'positive',
    message: 'Family office inquiries for ultra-luxury units above $3,500 PSF rose +15% QoQ.',
    timestamp: '3 hours ago'
  }
];

export const PORTFOLIO_MOCK_PROPERTIES: PortfolioProperty[] = [
  {
    id: 'port-1',
    propertyName: 'Boulevard Vue #14-02',
    districtId: 'D9',
    propertyType: 'Condo',
    purchasePrice: 11800000,
    currentValue: 14200000,
    monthlyRent: 38500,
    tenure: 'Freehold',
    sqft: 4467,
    purchaseYear: 2018,
    occupancyStatus: 'Rented'
  },
  {
    id: 'port-2',
    propertyName: 'Meyer Mansion #18-05',
    districtId: 'D15',
    propertyType: 'Condo',
    purchasePrice: 2850000,
    currentValue: 3450000,
    monthlyRent: 10200,
    tenure: 'Freehold',
    sqft: 1109,
    purchaseYear: 2021,
    occupancyStatus: 'Rented'
  },
  {
    id: 'port-3',
    propertyName: 'Marina One Residences #29-11',
    districtId: 'D1',
    propertyType: 'Condo',
    purchasePrice: 2200000,
    currentValue: 2580000,
    monthlyRent: 8800,
    tenure: '99-year',
    sqft: 1023,
    purchaseYear: 2020,
    occupancyStatus: 'Rented'
  }
];
