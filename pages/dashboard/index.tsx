import { useState } from 'react';
import Sidenav from '../../components/dashboard/Sidenav';
import ChatModal from '../../components/dashboard/ChatModal';
import Overview from '../../components/dashboard/Overview';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-black/95">
      <Sidenav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-auto">
        {activeTab === 'overview' && <Overview />}
        {/* Add other tab components here */}
      </main>

      <ChatModal />
    </div>
  );
}
