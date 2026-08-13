import { DistrictData, SentimentAlert, PortfolioProperty } from '../types';

export const SINGAPORE_DISTRICTS: DistrictData[] = [
  {
    id: 'D1',
    numId: 1,
    name: 'District 1',
    shortName: 'Raffles Place / Marina Bay',
    subregions: 'Raffles Place, Boat Quay, Marina Bay, Suntec City',
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
    svgPathD: 'M 430,360 L 480,360 L 480,395 L 430,395 Z',
    labelPos: { x: 455, y: 377 },
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
    shortName: 'Tanjong Pagar / Chinatown',
    subregions: 'Anson Road, Tanjong Pagar, Chinatown, Shenton Way',
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
    svgPathD: 'M 380,360 L 430,360 L 430,395 L 380,395 Z',
    labelPos: { x: 405, y: 377 },
    recentCaveats: [
      { id: 'C-201', project: 'Sky Everton', district: 'D2', type: 'Condo', sizeSqft: 678, priceSgd: 1884840, psf: 2780, date: '03 Aug 2026', floorLevel: '14 to 16' }
    ],
    schoolProximity1kmCount: 3,
    foreignBuyerRatio: 21.0
  },
  {
    id: 'D3',
    numId: 3,
    name: 'District 3',
    shortName: 'Queenstown / Tiong Bahru',
    subregions: 'Queenstown, Tiong Bahru, Alexandra, Commonwealth',
    region: 'RCR',
    score: 8.3,
    avgRentalYield: 4.2,
    yieldYoy: 0.3,
    transactionVolume30d: 172,
    volumeMom: 9,
    medianPsf: 2280,
    affordabilityIndex: 12.1,
    priceTrend20y: [
      { year: 2004, psf: 850 },
      { year: 2008, psf: 1180 },
      { year: 2012, psf: 1520 },
      { year: 2016, psf: 1750 },
      { year: 2020, psf: 2020 },
      { year: 2024, psf: 2280 }
    ],
    topDevelopments: [
      { name: 'Stirling Residences', tenure: '99-year', avgPsf: 2280, units: 1259, yield: 4.1, completionYear: 2022 },
      { name: 'Avenue South Residence', tenure: '99-year', avgPsf: 2350, units: 1074, yield: 4.3, completionYear: 2023 }
    ],
    svgPathD: 'M 310,320 L 380,320 L 380,360 L 310,360 Z',
    labelPos: { x: 345, y: 340 },
    recentCaveats: [
      { id: 'C-301', project: 'Stirling Residences', district: 'D3', type: 'Condo', sizeSqft: 883, priceSgd: 2013240, psf: 2280, date: '02 Aug 2026', floorLevel: '20 to 22' }
    ],
    schoolProximity1kmCount: 7,
    foreignBuyerRatio: 12.4
  },
  {
    id: 'D4',
    numId: 4,
    name: 'District 4',
    shortName: 'Telok Blangah / Sentosa',
    subregions: 'Telok Blangah, Harbourfront, Mount Faber, Sentosa',
    region: 'CCR',
    score: 8.0,
    avgRentalYield: 3.9,
    yieldYoy: 0.1,
    transactionVolume30d: 64,
    volumeMom: -3,
    medianPsf: 2180,
    affordabilityIndex: 13.5,
    priceTrend20y: [
      { year: 2004, psf: 920 },
      { year: 2008, psf: 1450 },
      { year: 2012, psf: 1780 },
      { year: 2016, psf: 1920 },
      { year: 2020, psf: 2050 },
      { year: 2024, psf: 2180 }
    ],
    topDevelopments: [
      { name: 'Corals at Keppel Bay', tenure: '99-year', avgPsf: 2250, units: 366, yield: 3.8, completionYear: 2016 },
      { name: 'Reflections at Keppel Bay', tenure: '99-year', avgPsf: 1980, units: 1129, yield: 4.0, completionYear: 2011 }
    ],
    svgPathD: 'M 320,360 L 430,395 L 410,435 L 320,400 Z',
    labelPos: { x: 365, y: 395 },
    recentCaveats: [],
    schoolProximity1kmCount: 4,
    foreignBuyerRatio: 28.5
  },
  {
    id: 'D5',
    numId: 5,
    name: 'District 5',
    shortName: 'Buona Vista / West Coast',
    subregions: 'Buona Vista, Dover, Pasir Panjang, West Coast, Clementi',
    region: 'RCR',
    score: 8.1,
    avgRentalYield: 4.3,
    yieldYoy: 0.4,
    transactionVolume30d: 165,
    volumeMom: 11,
    medianPsf: 2120,
    affordabilityIndex: 10.9,
    priceTrend20y: [
      { year: 2004, psf: 720 },
      { year: 2008, psf: 980 },
      { year: 2012, psf: 1320 },
      { year: 2016, psf: 1580 },
      { year: 2020, psf: 1850 },
      { year: 2024, psf: 2120 }
    ],
    topDevelopments: [
      { name: 'Blossoms By The Park', tenure: '99-year', avgPsf: 2420, units: 275, yield: 4.2, completionYear: 2026 },
      { name: 'Kent Ridge Hill Residences', tenure: '99-year', avgPsf: 1920, units: 548, yield: 4.4, completionYear: 2024 }
    ],
    svgPathD: 'M 220,290 L 310,290 L 310,360 L 220,360 Z',
    labelPos: { x: 265, y: 325 },
    recentCaveats: [],
    schoolProximity1kmCount: 9,
    foreignBuyerRatio: 11.2
  },
  {
    id: 'D6',
    numId: 6,
    name: 'District 6',
    shortName: 'City Hall / Beach Road',
    subregions: 'City Hall, High Street, Fort Canning, Beach Road',
    region: 'CCR',
    score: 8.6,
    avgRentalYield: 3.7,
    yieldYoy: 0.1,
    transactionVolume30d: 42,
    volumeMom: 1,
    medianPsf: 2850,
    affordabilityIndex: 16.8,
    priceTrend20y: [
      { year: 2004, psf: 1250 },
      { year: 2008, psf: 1720 },
      { year: 2012, psf: 2150 },
      { year: 2016, psf: 2420 },
      { year: 2020, psf: 2650 },
      { year: 2024, psf: 2850 }
    ],
    topDevelopments: [
      { name: 'Canninghill Piers', tenure: '99-year', avgPsf: 2980, units: 696, yield: 3.6, completionYear: 2026 },
      { name: 'Eden Residences Capitol', tenure: '99-year', avgPsf: 3200, units: 39, yield: 3.2, completionYear: 2015 }
    ],
    svgPathD: 'M 430,330 L 480,330 L 480,360 L 430,360 Z',
    labelPos: { x: 455, y: 345 },
    recentCaveats: [],
    schoolProximity1kmCount: 4,
    foreignBuyerRatio: 31.0
  },
  {
    id: 'D7',
    numId: 7,
    name: 'District 7',
    shortName: 'Bugis / Rochor',
    subregions: 'Beach Road, Bencoolen, Bugis, Rochor',
    region: 'CCR',
    score: 8.8,
    avgRentalYield: 4.4,
    yieldYoy: 0.5,
    transactionVolume30d: 112,
    volumeMom: 14,
    medianPsf: 2520,
    affordabilityIndex: 13.9,
    priceTrend20y: [
      { year: 2004, psf: 980 },
      { year: 2008, psf: 1420 },
      { year: 2012, psf: 1820 },
      { year: 2016, psf: 2100 },
      { year: 2020, psf: 2320 },
      { year: 2024, psf: 2520 }
    ],
    topDevelopments: [
      { name: 'Midtown Modern', tenure: '99-year', avgPsf: 2780, units: 558, yield: 4.2, completionYear: 2025 },
      { name: 'Duo Residences', tenure: '99-year', avgPsf: 2280, units: 660, yield: 4.5, completionYear: 2017 }
    ],
    svgPathD: 'M 440,295 L 480,295 L 480,330 L 440,330 Z',
    labelPos: { x: 460, y: 312 },
    recentCaveats: [],
    schoolProximity1kmCount: 5,
    foreignBuyerRatio: 24.2
  },
  {
    id: 'D8',
    numId: 8,
    name: 'District 8',
    shortName: 'Little India / Farrer Park',
    subregions: 'Little India, Farrer Park, Serangoon Road',
    region: 'RCR',
    score: 7.9,
    avgRentalYield: 4.3,
    yieldYoy: 0.3,
    transactionVolume30d: 98,
    volumeMom: 5,
    medianPsf: 2150,
    affordabilityIndex: 11.5,
    priceTrend20y: [
      { year: 2004, psf: 680 },
      { year: 2008, psf: 980 },
      { year: 2012, psf: 1380 },
      { year: 2016, psf: 1620 },
      { year: 2020, psf: 1890 },
      { year: 2024, psf: 2150 }
    ],
    topDevelopments: [
      { name: 'Piccadilly Grand', tenure: '99-year', avgPsf: 2180, units: 407, yield: 4.3, completionYear: 2026 },
      { name: 'Uptown @ Farrer', tenure: '99-year', avgPsf: 1980, units: 116, yield: 4.4, completionYear: 2021 }
    ],
    svgPathD: 'M 440,260 L 490,260 L 490,295 L 440,295 Z',
    labelPos: { x: 465, y: 277 },
    recentCaveats: [],
    schoolProximity1kmCount: 6,
    foreignBuyerRatio: 12.0
  },
  {
    id: 'D9',
    numId: 9,
    name: 'District 9',
    shortName: 'Orchard / River Valley',
    subregions: 'Orchard, Cairnhill, River Valley, Killiney',
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
      { year: 2024, psf: 2450 }
    ],
    topDevelopments: [
      { name: 'Boulevard Vue', tenure: 'Freehold', avgPsf: 4100, units: 28, yield: 3.2, completionYear: 2014 },
      { name: '3 Cuscaden', tenure: 'Freehold', avgPsf: 3550, units: 96, yield: 3.6, completionYear: 2022 },
      { name: 'The Marq on Paterson', tenure: 'Freehold', avgPsf: 4600, units: 66, yield: 2.9, completionYear: 2011 },
      { name: 'Riviere', tenure: '99-year', avgPsf: 2780, units: 455, yield: 4.1, completionYear: 2023 }
    ],
    svgPathD: 'M 380,280 L 440,280 L 440,320 L 380,320 Z',
    labelPos: { x: 410, y: 300 },
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
    shortName: 'Tanglin / Holland / Bukit Timah',
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
    svgPathD: 'M 290,230 L 380,230 L 380,290 L 290,290 Z',
    labelPos: { x: 335, y: 260 },
    recentCaveats: [
      { id: 'C-1001', project: 'Leedon Green', district: 'D10', type: 'Condo', sizeSqft: 1044, priceSgd: 2975000, psf: 2849, date: '11 Aug 2026', floorLevel: '08 to 10' }
    ],
    schoolProximity1kmCount: 7,
    foreignBuyerRatio: 22.1
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
    svgPathD: 'M 380,220 L 440,220 L 440,280 L 380,280 Z',
    labelPos: { x: 410, y: 250 },
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
    svgPathD: 'M 440,210 L 490,210 L 490,260 L 440,260 Z',
    labelPos: { x: 465, y: 235 },
    recentCaveats: [],
    schoolProximity1kmCount: 5,
    foreignBuyerRatio: 7.8
  },
  {
    id: 'D13',
    numId: 13,
    name: 'District 13',
    shortName: 'Macpherson / Potong Pasir',
    subregions: 'Macpherson, Braddell, Potong Pasir, Genting Lane',
    region: 'RCR',
    score: 7.5,
    avgRentalYield: 4.2,
    yieldYoy: 0.3,
    transactionVolume30d: 110,
    volumeMom: 4,
    medianPsf: 1920,
    affordabilityIndex: 10.1,
    priceTrend20y: [
      { year: 2004, psf: 620 },
      { year: 2008, psf: 880 },
      { year: 2012, psf: 1220 },
      { year: 2016, psf: 1420 },
      { year: 2020, psf: 1680 },
      { year: 2024, psf: 1920 }
    ],
    topDevelopments: [
      { name: 'The Tre Ver', tenure: '99-year', avgPsf: 1850, units: 729, yield: 4.3, completionYear: 2022 },
      { name: 'Myra', tenure: 'Freehold', avgPsf: 2100, units: 85, yield: 4.0, completionYear: 2024 }
    ],
    svgPathD: 'M 490,200 L 540,200 L 540,245 L 490,245 Z',
    labelPos: { x: 515, y: 222 },
    recentCaveats: [],
    schoolProximity1kmCount: 6,
    foreignBuyerRatio: 6.8
  },
  {
    id: 'D14',
    numId: 14,
    name: 'District 14',
    shortName: 'Geylang / Paya Lebar',
    subregions: 'Geylang, Eunos, Paya Lebar, Sims, Kembangan',
    region: 'RCR',
    score: 7.7,
    avgRentalYield: 4.5,
    yieldYoy: 0.4,
    transactionVolume30d: 158,
    volumeMom: 12,
    medianPsf: 1980,
    affordabilityIndex: 9.8,
    priceTrend20y: [
      { year: 2004, psf: 640 },
      { year: 2008, psf: 910 },
      { year: 2012, psf: 1290 },
      { year: 2016, psf: 1480 },
      { year: 2020, psf: 1720 },
      { year: 2024, psf: 1980 }
    ],
    topDevelopments: [
      { name: 'Penrose', tenure: '99-year', avgPsf: 1880, units: 566, yield: 4.5, completionYear: 2024 },
      { name: 'Parc Esta', tenure: '99-year', avgPsf: 1920, units: 1399, yield: 4.4, completionYear: 2022 }
    ],
    svgPathD: 'M 490,245 L 610,245 L 610,285 L 490,285 Z',
    labelPos: { x: 550, y: 265 },
    recentCaveats: [],
    schoolProximity1kmCount: 8,
    foreignBuyerRatio: 8.5
  },
  {
    id: 'D15',
    numId: 15,
    name: 'District 15',
    shortName: 'East Coast / Marine Parade',
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
    svgPathD: 'M 530,285 L 630,285 L 630,340 L 530,340 Z',
    labelPos: { x: 580, y: 312 },
    recentCaveats: [
      { id: 'C-1501', project: 'Grand Dunman', district: 'D15', type: 'Condo', sizeSqft: 958, priceSgd: 2423800, psf: 2530, date: '09 Aug 2026', floorLevel: '15 to 17' }
    ],
    schoolProximity1kmCount: 8,
    foreignBuyerRatio: 9.4
  },
  {
    id: 'D16',
    numId: 16,
    name: 'District 16',
    shortName: 'Bedok / Upper East Coast',
    subregions: 'Bedok, Upper East Coast, Eastwood, Kew Drive',
    region: 'OCR',
    score: 7.4,
    avgRentalYield: 4.4,
    yieldYoy: 0.2,
    transactionVolume30d: 148,
    volumeMom: 5,
    medianPsf: 1780,
    affordabilityIndex: 9.1,
    priceTrend20y: [
      { year: 2004, psf: 580 },
      { year: 2008, psf: 820 },
      { year: 2012, psf: 1150 },
      { year: 2016, psf: 1320 },
      { year: 2020, psf: 1550 },
      { year: 2024, psf: 1780 }
    ],
    topDevelopments: [
      { name: 'Sceneca Residence', tenure: '99-year', avgPsf: 2080, units: 268, yield: 4.2, completionYear: 2026 },
      { name: 'Grandeur Park Residences', tenure: '99-year', avgPsf: 1680, units: 720, yield: 4.5, completionYear: 2020 }
    ],
    svgPathD: 'M 630,230 L 730,230 L 730,300 L 630,300 Z',
    labelPos: { x: 680, y: 265 },
    recentCaveats: [],
    schoolProximity1kmCount: 9,
    foreignBuyerRatio: 4.5
  },
  {
    id: 'D17',
    numId: 17,
    name: 'District 17',
    shortName: 'Changi / Loyang',
    subregions: 'Changi, Loyang, Flora Drive, Changi Airport',
    region: 'OCR',
    score: 7.1,
    avgRentalYield: 4.7,
    yieldYoy: 0.3,
    transactionVolume30d: 92,
    volumeMom: 2,
    medianPsf: 1520,
    affordabilityIndex: 7.8,
    priceTrend20y: [
      { year: 2004, psf: 480 },
      { year: 2008, psf: 680 },
      { year: 2012, psf: 950 },
      { year: 2016, psf: 1120 },
      { year: 2020, psf: 1320 },
      { year: 2024, psf: 1520 }
    ],
    topDevelopments: [
      { name: 'The Jovell', tenure: '99-year', avgPsf: 1450, units: 428, yield: 4.8, completionYear: 2021 },
      { name: 'Kassia', tenure: 'Freehold', avgPsf: 1820, units: 280, yield: 4.4, completionYear: 2027 }
    ],
    svgPathD: 'M 720,180 L 790,180 L 790,280 L 720,280 Z',
    labelPos: { x: 755, y: 230 },
    recentCaveats: [],
    schoolProximity1kmCount: 5,
    foreignBuyerRatio: 3.1
  },
  {
    id: 'D18',
    numId: 18,
    name: 'District 18',
    shortName: 'Tampines / Pasir Ris',
    subregions: 'Pasir Ris, Tampines, Simei',
    region: 'OCR',
    score: 7.6,
    avgRentalYield: 4.5,
    yieldYoy: 0.1,
    transactionVolume30d: 220,
    volumeMom: 15,
    medianPsf: 1680,
    affordabilityIndex: 8.5,
    priceTrend20y: [
      { year: 2004, psf: 520 },
      { year: 2008, psf: 740 },
      { year: 2012, psf: 1050 },
      { year: 2016, psf: 1240 },
      { year: 2020, psf: 1450 },
      { year: 2024, psf: 1680 }
    ],
    topDevelopments: [
      { name: 'Tampines Ave 11 Integrated', tenure: '99-year', avgPsf: 1950, units: 1190, yield: 4.3, completionYear: 2028 },
      { name: 'Pasir Ris 8', tenure: '99-year', avgPsf: 1820, units: 487, yield: 4.4, completionYear: 2026 }
    ],
    svgPathD: 'M 640,150 L 750,150 L 750,230 L 640,230 Z',
    labelPos: { x: 695, y: 190 },
    recentCaveats: [],
    schoolProximity1kmCount: 11,
    foreignBuyerRatio: 2.9
  },
  {
    id: 'D19',
    numId: 19,
    name: 'District 19',
    shortName: 'Hougang / Punggol / Sengkang',
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
    svgPathD: 'M 540,130 L 640,130 L 640,200 L 540,200 Z',
    labelPos: { x: 590, y: 165 },
    recentCaveats: [
      { id: 'C-1901', project: 'Sengkang Grand', district: 'D19', type: 'Condo', sizeSqft: 764, priceSgd: 1413400, psf: 1850, date: '07 Aug 2026', floorLevel: '09 to 11' }
    ],
    schoolProximity1kmCount: 12,
    foreignBuyerRatio: 3.2
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
    svgPathD: 'M 440,160 L 540,160 L 540,210 L 440,210 Z',
    labelPos: { x: 490, y: 185 },
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
    svgPathD: 'M 250,220 L 320,220 L 320,280 L 250,280 Z',
    labelPos: { x: 285, y: 250 },
    recentCaveats: [],
    schoolProximity1kmCount: 8,
    foreignBuyerRatio: 6.5
  },
  {
    id: 'D22',
    numId: 22,
    name: 'District 22',
    shortName: 'Jurong / Boon Lay / Tuas',
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
    svgPathD: 'M 60,220 L 190,220 L 190,340 L 60,340 Z',
    labelPos: { x: 125, y: 280 },
    recentCaveats: [],
    schoolProximity1kmCount: 10,
    foreignBuyerRatio: 2.8
  },
  {
    id: 'D23',
    numId: 23,
    name: 'District 23',
    shortName: 'Bukit Batok / Choa Chu Kang',
    subregions: 'Bukit Batok, Bukit Panjang, Choa Chu Kang, Hillview',
    region: 'OCR',
    score: 7.3,
    avgRentalYield: 4.4,
    yieldYoy: 0.2,
    transactionVolume30d: 182,
    volumeMom: 8,
    medianPsf: 1620,
    affordabilityIndex: 8.0,
    priceTrend20y: [
      { year: 2004, psf: 490 },
      { year: 2008, psf: 690 },
      { year: 2012, psf: 970 },
      { year: 2016, psf: 1160 },
      { year: 2020, psf: 1390 },
      { year: 2024, psf: 1620 }
    ],
    topDevelopments: [
      { name: 'The Myst', tenure: '99-year', avgPsf: 2050, units: 408, yield: 4.1, completionYear: 2027 },
      { name: 'Altura EC', tenure: '99-year', avgPsf: 1480, units: 360, yield: 4.6, completionYear: 2027 }
    ],
    svgPathD: 'M 190,150 L 270,150 L 270,220 L 190,220 Z',
    labelPos: { x: 230, y: 185 },
    recentCaveats: [],
    schoolProximity1kmCount: 9,
    foreignBuyerRatio: 2.2
  },
  {
    id: 'D24',
    numId: 24,
    name: 'District 24',
    shortName: 'Lim Chu Kang / Tengah',
    subregions: 'Lim Chu Kang, Tengah, Kranji Farms',
    region: 'OCR',
    score: 6.9,
    avgRentalYield: 4.3,
    yieldYoy: 0.1,
    transactionVolume30d: 45,
    volumeMom: 18,
    medianPsf: 1450,
    affordabilityIndex: 7.2,
    priceTrend20y: [
      { year: 2004, psf: 420 },
      { year: 2008, psf: 580 },
      { year: 2012, psf: 820 },
      { year: 2016, psf: 990 },
      { year: 2020, psf: 1180 },
      { year: 2024, psf: 1450 }
    ],
    topDevelopments: [
      { name: 'Copen Grand EC', tenure: '99-year', avgPsf: 1380, units: 639, yield: 4.5, completionYear: 2026 }
    ],
    svgPathD: 'M 90,80 L 190,80 L 190,170 L 90,170 Z',
    labelPos: { x: 140, y: 125 },
    recentCaveats: [],
    schoolProximity1kmCount: 4,
    foreignBuyerRatio: 1.5
  },
  {
    id: 'D25',
    numId: 25,
    name: 'District 25',
    shortName: 'Woodlands / Admiralty',
    subregions: 'Admiralty, Woodlands, Marsiling',
    region: 'OCR',
    score: 7.1,
    avgRentalYield: 4.6,
    yieldYoy: 0.3,
    transactionVolume30d: 175,
    volumeMom: 10,
    medianPsf: 1550,
    affordabilityIndex: 7.6,
    priceTrend20y: [
      { year: 2004, psf: 440 },
      { year: 2008, psf: 620 },
      { year: 2012, psf: 890 },
      { year: 2016, psf: 1080 },
      { year: 2020, psf: 1280 },
      { year: 2024, psf: 1550 }
    ],
    topDevelopments: [
      { name: 'Norwood Grand', tenure: '99-year', avgPsf: 1980, units: 348, yield: 4.2, completionYear: 2028 }
    ],
    svgPathD: 'M 260,60 L 380,60 L 380,120 L 260,120 Z',
    labelPos: { x: 320, y: 90 },
    recentCaveats: [],
    schoolProximity1kmCount: 11,
    foreignBuyerRatio: 2.1
  },
  {
    id: 'D26',
    numId: 26,
    name: 'District 26',
    shortName: 'Upper Thomson / Mandai',
    subregions: 'Upper Thomson, Mandai, Springleaf',
    region: 'OCR',
    score: 7.4,
    avgRentalYield: 4.1,
    yieldYoy: 0.2,
    transactionVolume30d: 85,
    volumeMom: 4,
    medianPsf: 1750,
    affordabilityIndex: 9.0,
    priceTrend20y: [
      { year: 2004, psf: 580 },
      { year: 2008, psf: 790 },
      { year: 2012, psf: 1120 },
      { year: 2016, psf: 1310 },
      { year: 2020, psf: 1520 },
      { year: 2024, psf: 1750 }
    ],
    topDevelopments: [
      { name: 'Lentor Modern', tenure: '99-year', avgPsf: 2120, units: 605, yield: 4.0, completionYear: 2026 },
      { name: 'Lentor Hills Residences', tenure: '99-year', avgPsf: 2080, units: 598, yield: 4.1, completionYear: 2027 }
    ],
    svgPathD: 'M 340,120 L 440,120 L 440,170 L 340,170 Z',
    labelPos: { x: 390, y: 145 },
    recentCaveats: [],
    schoolProximity1kmCount: 6,
    foreignBuyerRatio: 3.5
  },
  {
    id: 'D27',
    numId: 27,
    name: 'District 27',
    shortName: 'Sembawang / Yishun',
    subregions: 'Sembawang, Yishun, Canberra',
    region: 'OCR',
    score: 7.0,
    avgRentalYield: 4.7,
    yieldYoy: 0.4,
    transactionVolume30d: 190,
    volumeMom: 12,
    medianPsf: 1480,
    affordabilityIndex: 7.1,
    priceTrend20y: [
      { year: 2004, psf: 430 },
      { year: 2008, psf: 610 },
      { year: 2012, psf: 880 },
      { year: 2016, psf: 1050 },
      { year: 2020, psf: 1250 },
      { year: 2024, psf: 1480 }
    ],
    topDevelopments: [
      { name: 'Provence Residence EC', tenure: '99-year', avgPsf: 1220, units: 413, yield: 4.8, completionYear: 2023 },
      { name: 'North Gaia EC', tenure: '99-year', avgPsf: 1280, units: 616, yield: 4.7, completionYear: 2027 }
    ],
    svgPathD: 'M 380,60 L 480,60 L 480,120 L 380,120 Z',
    labelPos: { x: 430, y: 90 },
    recentCaveats: [],
    schoolProximity1kmCount: 10,
    foreignBuyerRatio: 1.8
  },
  {
    id: 'D28',
    numId: 28,
    name: 'District 28',
    shortName: 'Seletar / Yio Chu Kang',
    subregions: 'Seletar, Yio Chu Kang',
    region: 'OCR',
    score: 7.2,
    avgRentalYield: 4.3,
    yieldYoy: 0.2,
    transactionVolume30d: 98,
    volumeMom: 6,
    medianPsf: 1620,
    affordabilityIndex: 8.3,
    priceTrend20y: [
      { year: 2004, psf: 510 },
      { year: 2008, psf: 710 },
      { year: 2012, psf: 1010 },
      { year: 2016, psf: 1190 },
      { year: 2020, psf: 1410 },
      { year: 2024, psf: 1620 }
    ],
    topDevelopments: [
      { name: 'Nim Collection', tenure: '99-year', avgPsf: 1720, units: 98, yield: 4.1, completionYear: 2021 },
      { name: 'Belgravia Ace', tenure: 'Freehold', avgPsf: 1850, units: 107, yield: 3.9, completionYear: 2028 }
    ],
    svgPathD: 'M 480,90 L 570,90 L 570,150 L 480,150 Z',
    labelPos: { x: 525, y: 120 },
    recentCaveats: [],
    schoolProximity1kmCount: 5,
    foreignBuyerRatio: 2.5
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
