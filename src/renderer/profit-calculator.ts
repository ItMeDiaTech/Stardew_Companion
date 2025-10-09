import './profit-calculator.css';
import { ElectronAPI } from '@preload/index';
import { Season, CropQuality, FarmingProfession, ArtisanProfession, ProcessingType, Crop, CropCalculation, CalculatorParams } from '@shared/types';
import { CROPS, getCropsBySeason } from '@shared/data/crops';
import { setupSidebar, setupWindowControls } from './sidebar';

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

const { electronAPI } = window;

// DOM Elements
const seasonSelect = document.getElementById('season-select') as HTMLSelectElement;
const dayInput = document.getElementById('day-input') as HTMLInputElement;
const farmingLevel = document.getElementById('farming-level') as HTMLInputElement;
const professionSelect = document.getElementById('profession-select') as HTMLSelectElement;
const qualitySelect = document.getElementById('quality-select') as HTMLSelectElement;
const processingSelect = document.getElementById('processing-select') as HTMLSelectElement;
const artisanSelect = document.getElementById('artisan-select') as HTMLSelectElement;
const calculateBtn = document.getElementById('calculate-btn') as HTMLButtonElement;
const searchInput = document.getElementById('search-crops') as HTMLInputElement;
const sortSelect = document.getElementById('sort-select') as HTMLSelectElement;
const resultsSummary = document.getElementById('results-summary') as HTMLElement;
const resultsBody = document.getElementById('results-body') as HTMLElement;
const statusText = document.getElementById('status-text') as HTMLElement;

// Summary elements
const bestProfitDay = document.getElementById('best-profit-day') as HTMLElement;
const bestCropDay = document.getElementById('best-crop-day') as HTMLElement;
const bestTotalProfit = document.getElementById('best-total-profit') as HTMLElement;
const bestCropTotal = document.getElementById('best-crop-total') as HTMLElement;
const bestRoi = document.getElementById('best-roi') as HTMLElement;
const bestCropRoi = document.getElementById('best-crop-roi') as HTMLElement;
const plantableCount = document.getElementById('plantable-count') as HTMLElement;

// State
let calculations: CropCalculation[] = [];
let filteredCalculations: CropCalculation[] = [];
let currentParams: CalculatorParams;

// Initialize
function init() {
  setupSidebar();
  setupWindowControls();
  setupEventListeners();
}

function setupEventListeners() {
  calculateBtn.addEventListener('click', calculate);
  searchInput.addEventListener('input', filterResults);
  sortSelect.addEventListener('change', sortResults);
}

function calculate() {
  const season = seasonSelect.value as Season;
  const currentDay = parseInt(dayInput.value);
  const level = parseInt(farmingLevel.value);
  const profession = professionSelect.value as FarmingProfession;
  const quality = qualitySelect.value as CropQuality;
  const processingType = processingSelect.value as ProcessingType;
  const artisanProfession = artisanSelect.value as ArtisanProfession;

  if (currentDay < 1 || currentDay > 28) {
    statusText.textContent = 'Error: Day must be between 1 and 28';
    return;
  }

  currentParams = {
    season,
    currentDay,
    farmingLevel: level,
    profession,
    quality,
    processingType,
    artisanProfession
  };

  const seasonCrops = getCropsBySeason(season);
  calculations = seasonCrops.map(crop => calculateCropProfit(crop, currentParams));

  filteredCalculations = [...calculations];
  sortResults();
  updateSummary();
  renderResults();

  resultsSummary.style.display = 'grid';
  const processingText = processingType !== 'none' ? ` with ${processingType}` : '';
  statusText.textContent = `Calculated ${calculations.length} crops for ${season}${processingText}`;
}

function calculateCropProfit(crop: Crop, params: CalculatorParams): CropCalculation {
  const daysRemaining = 28 - params.currentDay;

  // Apply agriculturist bonus (-10% growth time)
  let daysToMaturity = crop.daysToMaturity;
  if (params.profession === 'agriculturist' || params.profession === 'both') {
    daysToMaturity = Math.ceil(daysToMaturity * 0.9);
  }

  // Can we plant this crop?
  const canPlant = daysRemaining >= daysToMaturity;

  // Calculate max harvests
  let maxHarvests = 0;
  if (canPlant) {
    if (crop.regrowthDays) {
      // Multi-harvest crop
      const daysAfterFirstHarvest = daysRemaining - daysToMaturity;
      maxHarvests = 1 + Math.floor(daysAfterFirstHarvest / crop.regrowthDays);
    } else {
      // Single harvest
      maxHarvests = 1;
    }
  }

  // Calculate sell price with quality multiplier
  let sellPrice = crop.sellPrice;
  const qualityMultipliers: Record<CropQuality, number> = {
    normal: 1.0,
    silver: 1.25,
    gold: 1.5,
    iridium: 2.0
  };
  sellPrice *= qualityMultipliers[params.quality];

  // Apply tiller bonus (+10% sell price)
  if (params.profession === 'tiller' || params.profession === 'both') {
    sellPrice *= 1.1;
  }

  // Calculate revenue and profit (raw crops)
  const totalRevenue = maxHarvests * sellPrice;
  const totalCost = crop.seedPrice;
  const netProfit = totalRevenue - totalCost;

  // Calculate growing days (total time invested)
  let growingDays = 0;
  if (maxHarvests > 0) {
    if (crop.regrowthDays) {
      growingDays = daysToMaturity + ((maxHarvests - 1) * crop.regrowthDays);
    } else {
      growingDays = daysToMaturity;
    }
  }

  const profitPerDay = growingDays > 0 ? netProfit / growingDays : 0;
  const roi = totalCost > 0 ? (netProfit / totalCost) * 100 : 0;

  // Calculate processing profits if applicable
  let processedRevenue: number | undefined;
  let processedProfit: number | undefined;
  let processedProfitPerDay: number | undefined;
  let processedRoi: number | undefined;
  let processingDays: number | undefined;

  if (params.processingType !== 'none' && maxHarvests > 0) {
    let processedPrice = 0;
    let processingTime = 0;

    if (params.processingType === 'keg' && crop.kegProduct) {
      processedPrice = crop.kegProduct.sellPrice;
      processingTime = crop.kegProduct.processingTime;
    } else if (params.processingType === 'preserves-jar' && crop.preservesJarProduct) {
      processedPrice = crop.preservesJarProduct.sellPrice;
      processingTime = crop.preservesJarProduct.processingTime;
    }

    if (processedPrice > 0) {
      // Apply artisan bonus (+40% to processed goods)
      if (params.artisanProfession === 'artisan') {
        processedPrice *= 1.4;
      }

      processedRevenue = maxHarvests * processedPrice;
      processedProfit = processedRevenue - totalCost;

      // Total time = growing time + processing time
      processingDays = growingDays + processingTime;
      processedProfitPerDay = processingDays > 0 ? processedProfit / processingDays : 0;
      processedRoi = totalCost > 0 ? (processedProfit / totalCost) * 100 : 0;
    }
  }

  return {
    crop,
    maxHarvests,
    totalRevenue,
    totalCost,
    netProfit,
    profitPerDay,
    roi,
    canPlant,
    processedRevenue,
    processedProfit,
    processedProfitPerDay,
    processedRoi,
    processingDays
  };
}

function filterResults() {
  const searchTerm = searchInput.value.toLowerCase();
  if (!searchTerm) {
    filteredCalculations = [...calculations];
  } else {
    filteredCalculations = calculations.filter(calc =>
      calc.crop.name.toLowerCase().includes(searchTerm) ||
      calc.crop.type.toLowerCase().includes(searchTerm)
    );
  }
  sortResults();
  renderResults();
}

function sortResults() {
  const sortBy = sortSelect.value;

  filteredCalculations.sort((a, b) => {
    switch (sortBy) {
      case 'profitPerDay':
        return b.profitPerDay - a.profitPerDay;
      case 'totalProfit':
        return b.netProfit - a.netProfit;
      case 'roi':
        return b.roi - a.roi;
      case 'name':
        return a.crop.name.localeCompare(b.crop.name);
      default:
        return 0;
    }
  });
}

function updateSummary() {
  const plantable = calculations.filter(c => c.canPlant);

  if (plantable.length === 0) {
    bestProfitDay.textContent = 'N/A';
    bestCropDay.textContent = 'Too late to plant';
    bestTotalProfit.textContent = 'N/A';
    bestCropTotal.textContent = 'Too late to plant';
    bestRoi.textContent = 'N/A';
    bestCropRoi.textContent = 'Too late to plant';
    plantableCount.textContent = '0';
    return;
  }

  // Best profit per day
  const bestPerDay = [...plantable].sort((a, b) => b.profitPerDay - a.profitPerDay)[0];
  bestProfitDay.textContent = `${Math.round(bestPerDay.profitPerDay)}g`;
  bestCropDay.textContent = bestPerDay.crop.name;

  // Best total profit
  const bestTotal = [...plantable].sort((a, b) => b.netProfit - a.netProfit)[0];
  bestTotalProfit.textContent = `${Math.round(bestTotal.netProfit)}g`;
  bestCropTotal.textContent = bestTotal.crop.name;

  // Best ROI
  const bestRoiCalc = [...plantable].sort((a, b) => b.roi - a.roi)[0];
  bestRoi.textContent = `${Math.round(bestRoiCalc.roi)}%`;
  bestCropRoi.textContent = bestRoiCalc.crop.name;

  // Plantable count
  plantableCount.textContent = plantable.length.toString();
}

function renderResults() {
  if (filteredCalculations.length === 0) {
    resultsBody.innerHTML = `
      <tr>
        <td colspan="9" class="empty-results">
          No crops found matching your search
        </td>
      </tr>
    `;
    return;
  }

  const useProcessed = currentParams.processingType !== 'none';

  resultsBody.innerHTML = filteredCalculations.map((calc, index) => {
    // Determine which values to display based on processing
    const displayProfit = useProcessed && calc.processedProfit ? calc.processedProfit : calc.netProfit;
    const displayProfitPerDay = useProcessed && calc.processedProfitPerDay ? calc.processedProfitPerDay : calc.profitPerDay;
    const displayRoi = useProcessed && calc.processedRoi ? calc.processedRoi : calc.roi;

    const isTop3 = index < 3 && calc.canPlant;
    const profitClass = displayProfit > 0 ? 'profit-positive' : 'profit-negative';

    let roiClass = 'roi-fair';
    if (displayRoi >= 500) roiClass = 'roi-excellent';
    else if (displayRoi >= 300) roiClass = 'roi-good';
    else if (displayRoi < 100) roiClass = 'roi-poor';

    const rowClass = calc.canPlant ? '' : 'cannot-plant';

    let badges = '';
    if (isTop3) badges += '<span class="badge badge-best">TOP 3</span>';
    if (calc.crop.regrowthDays) badges += '<span class="badge badge-multi-harvest">Multi-Harvest</span>';
    if (calc.crop.giantCropPossible) badges += '<span class="badge badge-giant">Giant</span>';

    // Processing info
    let processingInfo = '-';
    if (useProcessed) {
      if (currentParams.processingType === 'keg' && calc.crop.kegProduct) {
        processingInfo = `<span class="processing-badge keg">${calc.crop.kegProduct.name}</span>`;
      } else if (currentParams.processingType === 'preserves-jar' && calc.crop.preservesJarProduct) {
        processingInfo = `<span class="processing-badge preserves">${calc.crop.preservesJarProduct.name}</span>`;
      } else {
        processingInfo = '<span class="not-processable">N/A</span>';
      }
    }

    const rawSellPrice = Math.round(calc.totalRevenue / (calc.maxHarvests || 1));
    const processedSellPrice = useProcessed && calc.processedRevenue ?
      Math.round(calc.processedRevenue / (calc.maxHarvests || 1)) : null;

    return `
      <tr class="${rowClass}">
        <td>
          <span class="crop-name">${calc.crop.name}</span>
          ${badges}
          <span class="crop-type">${calc.crop.type}</span>
        </td>
        <td>${calc.crop.seedPrice}g</td>
        <td>
          ${rawSellPrice}g
          ${processedSellPrice ? `<br><span class="processed-price">${processedSellPrice}g processed</span>` : ''}
        </td>
        <td>${processingInfo}</td>
        <td>${calc.crop.daysToMaturity}${calc.crop.regrowthDays ? ` (+${calc.crop.regrowthDays})` : ''}</td>
        <td>${calc.maxHarvests}</td>
        <td class="${profitClass}">${Math.round(displayProfit)}g</td>
        <td class="${profitClass}">${Math.round(displayProfitPerDay)}g</td>
        <td class="${roiClass}">${Math.round(displayRoi)}%</td>
      </tr>
    `;
  }).join('');
}

// Start the app
init();
