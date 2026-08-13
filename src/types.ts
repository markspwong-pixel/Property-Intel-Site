export type PropertyType = 'All' | 'HDB' | 'Condo' | 'Landed';

export type BudgetRange = 'Any' | '< $1M' | '$1M - $2M' | '$2M - $5M' | '> $5M';

export type TransactionMode = 'Sales' | 'Rent';

export type RegionGroup = 'CCR' | 'RCR' | 'OCR';

export interface PriceTrendPoint {
  year: number;
  psf: number;
  volume?: number;
}

export interface Development {
  name: string;
  tenure: 'Freehold' | '99-year' | '999-year';
  avgPsf: number;
  units: number;
  yield: number;
  completionYear: number;
}

export interface URACaveat {
  id: string;
  project: string;
  district: string;
  type: string;
  sizeSqft: number;
  priceSgd: number;
  psf: number;
  date: string;
  floorLevel: string;
}

export interface DistrictData {
  id: string; // e.g. "D09" or "D9"
  numId: number; // 9
  name: string; // "District 9"
  shortName: string; // "Orchard"
  subregions: string; // "Orchard, Cairnhill, River Valley"
  region: RegionGroup; // "CCR"
  score: number; // e.g. 8.4
  avgRentalYield: number; // e.g. 3.8
  yieldYoy: number; // e.g. +0.2
  transactionVolume30d: number; // e.g. 142
  volumeMom: number; // e.g. -12
  medianPsf: number; // e.g. 2450
  affordabilityIndex: number; // e.g. 14.2
  priceTrend20y: PriceTrendPoint[];
  topDevelopments: Development[];
  svgPathD: string; // SVG path or coordinates for map rendering
  labelPos: { x: number; y: number };
  recentCaveats: URACaveat[];
  schoolProximity1kmCount: number;
  foreignBuyerRatio: number; // percentage e.g. 14%
}

export interface SentimentAlert {
  id: string;
  districtId: string;
  districtName: string;
  subTitle: string;
  type: 'positive' | 'warning' | 'neutral';
  message: string;
  timestamp: string;
}

export interface PortfolioProperty {
  id: string;
  propertyName: string;
  districtId: string;
  propertyType: 'Condo' | 'Landed' | 'HDB';
  purchasePrice: number;
  currentValue: number;
  monthlyRent: number;
  tenure: string;
  sqft: number;
  purchaseYear: number;
  occupancyStatus: 'Rented' | 'Vacant' | 'Owner Occupied';
}
