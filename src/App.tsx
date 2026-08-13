import React, { useState } from 'react';
import { SINGAPORE_DISTRICTS, INITIAL_SENTIMENT_ALERTS } from './data/singaporeDistricts';
import { DistrictData, PropertyType, BudgetRange, TransactionMode } from './types';
import { SideNavBar } from './components/SideNavBar';
import { TopAppBar } from './components/TopAppBar';
import { MarketTrendsView } from './components/MarketTrendsView';
import { OverviewView } from './components/OverviewView';
import { PortfolioView } from './components/PortfolioView';
import { AnalyticsView } from './components/AnalyticsView';
import { DisqusForum } from './components/DisqusForum';
import { DeepDiveModal } from './components/DeepDiveModal';
import { ExportReportModal } from './components/ExportReportModal';
import { NotificationsModal } from './components/NotificationsModal';
import { SettingsModal } from './components/SettingsModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('market-trends');
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>('D9');

  // Filters state
  const [propertyType, setPropertyType] = useState<PropertyType>('All');
  const [budgetRange, setBudgetRange] = useState<BudgetRange>('Any');
  const [transactionMode, setTransactionMode] = useState<TransactionMode>('Sales');

  // Modals state
  const [deepDiveDistrict, setDeepDiveDistrict] = useState<DistrictData | null>(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isNotificationsModalOpen, setIsNotificationsModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const selectedDistrict =
    SINGAPORE_DISTRICTS.find((d) => d.id === selectedDistrictId) || SINGAPORE_DISTRICTS[0];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleApplyFilters = () => {
    showToast(`Filters Applied: ${propertyType} | ${budgetRange} Budget | ${transactionMode}`);
  };

  // Dynamic header title matching design
  const getHeaderTitle = () => {
    switch (activeTab) {
      case 'overview':
        return 'Singapore Market Overview';
      case 'market-trends':
        return 'District Insights';
      case 'portfolio':
        return 'Portfolio Tracker';
      case 'analytics':
        return 'Institutional Analytics';
      case 'discussion':
        return 'Discussion Forum';
      default:
        return 'District Insights';
    }
  };

  return (
    <div className="min-h-screen mesh-bg text-slate-100 flex font-sans selection:bg-blue-500/30 selection:text-white relative overflow-x-hidden">
      {/* Background Ambient Glowing Orbs */}
      <div className="fixed top-[-150px] left-[10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-150px] right-[5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Side Navigation Bar */}
      <SideNavBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onOpenSettingsModal={() => setIsSettingsModalOpen(true)}
        onOpenSupportModal={() => showToast('PropIntel SG Support Desk: Call +65 6888 2400')}
      />

      {/* Main Content Wrapper */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Top Header Bar */}
        <TopAppBar
          title={getHeaderTitle()}
          districts={SINGAPORE_DISTRICTS}
          onSelectDistrict={(id) => {
            setSelectedDistrictId(id);
            if (activeTab !== 'market-trends') setActiveTab('market-trends');
          }}
          onApplyFilters={handleApplyFilters}
          onOpenNotifications={() => setIsNotificationsModalOpen(true)}
          notificationCount={INITIAL_SENTIMENT_ALERTS.length}
        />

        {/* Main Workspace Dashboard Canvas */}
        <main className="flex-1 mt-16 p-6 pb-12 overflow-y-auto">
          <div className="max-w-[1440px] mx-auto space-y-6">
            {activeTab === 'market-trends' && (
              <>
                <MarketTrendsView
                  districts={SINGAPORE_DISTRICTS}
                  selectedDistrict={selectedDistrict}
                  onSelectDistrict={(id) => setSelectedDistrictId(id)}
                  propertyType={propertyType}
                  setPropertyType={setPropertyType}
                  budgetRange={budgetRange}
                  setBudgetRange={setBudgetRange}
                  transactionMode={transactionMode}
                  setTransactionMode={setTransactionMode}
                  sentimentAlerts={INITIAL_SENTIMENT_ALERTS}
                  onOpenDeepDive={(district) => setDeepDiveDistrict(district)}
                  onOpenAffordabilityModal={() => setDeepDiveDistrict(selectedDistrict)}
                  onOpenReturnsModal={() => setActiveTab('analytics')}
                />
                <DisqusForum
                  pageIdentifier={`propintel-district-${selectedDistrict.id}`}
                  title={`${selectedDistrict.name} (${selectedDistrict.id}) Community Discussion`}
                />
              </>
            )}

            {activeTab === 'overview' && (
              <>
                <OverviewView
                  districts={SINGAPORE_DISTRICTS}
                  onSelectDistrict={(id) => {
                    setSelectedDistrictId(id);
                    setActiveTab('market-trends');
                  }}
                />
                <DisqusForum
                  pageIdentifier="propintel-singapore-overview"
                  title="Singapore Real Estate Macro Discussion"
                />
              </>
            )}

            {activeTab === 'portfolio' && (
              <>
                <PortfolioView />
                <DisqusForum
                  pageIdentifier="propintel-portfolio-discussion"
                  title="Institutional Portfolio Strategy Discussion"
                />
              </>
            )}

            {activeTab === 'analytics' && (
              <>
                <AnalyticsView />
                <DisqusForum
                  pageIdentifier="propintel-analytics-discussion"
                  title="Institutional Analytics & Market Forecast Forum"
                />
              </>
            )}

            {activeTab === 'discussion' && (
              <DisqusForum
                pageIdentifier="propintel-main-forum"
                title="PropIntel SG Main Discussion Forum"
              />
            )}
          </div>
        </main>
      </div>

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#122131] border border-[#2563eb] text-[#d4e4fa] px-4 py-3 rounded-lg shadow-2xl font-mono text-xs flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-[#10b981] text-[18px]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modals */}
      {deepDiveDistrict && (
        <DeepDiveModal district={deepDiveDistrict} onClose={() => setDeepDiveDistrict(null)} />
      )}

      {isExportModalOpen && (
        <ExportReportModal
          districts={SINGAPORE_DISTRICTS}
          selectedDistrict={selectedDistrict}
          onClose={() => setIsExportModalOpen(false)}
        />
      )}

      {isNotificationsModalOpen && (
        <NotificationsModal
          alerts={INITIAL_SENTIMENT_ALERTS}
          onClose={() => setIsNotificationsModalOpen(false)}
          onSelectDistrict={(id) => {
            setSelectedDistrictId(id);
            setActiveTab('market-trends');
          }}
        />
      )}

      {isSettingsModalOpen && <SettingsModal onClose={() => setIsSettingsModalOpen(false)} />}
    </div>
  );
}
