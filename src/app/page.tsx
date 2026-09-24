'use client';

import { useEffect, useState, type ReactNode } from 'react';
import {
  LayoutDashboard, BadgeCheck, CalendarDays, Building2, ClipboardList, FileText,
  Settings, Bell, Search, ChevronDown, CheckCircle2, Clock3, AlertTriangle,
  ShieldCheck, PanelLeftClose, PanelLeftOpen, Menu, X, PoundSterling, Network,
  FolderArchive, ListChecks, GitCompareArrows, ScanSearch, Library, MessageSquareText
} from 'lucide-react';

type Tab =
  | 'Dashboard'
  | 'Licences'
  | 'Outsourcing'
  | 'Substance evidence'
  | 'Quarterly returns'
  | 'Calendar'
  | 'Fees and duty'
  | 'Licensing scope'
  | 'GOSS application pack'
  | 'Obligations'
  | 'Change impact'
  | 'Sanctions screening'
  | 'Template library'
  | 'Assistant'
  | 'Settings';

type NavItem = { label: Tab; icon: any; badge?: string };

const nav: NavItem[] = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Licences', icon: BadgeCheck },
  { label: 'Outsourcing', icon: Building2 },
  { label: 'Substance evidence', icon: ClipboardList },
  { label: 'Quarterly returns', icon: FileText },
  { label: 'Calendar', icon: CalendarDays, badge: '2' },
  { label: 'Fees and duty', icon: PoundSterling },
  { label: 'Licensing scope', icon: Network },
  { label: 'GOSS application pack', icon: FolderArchive },
  { label: 'Obligations', icon: ListChecks },
  { label: 'Change impact', icon: GitCompareArrows },
  { label: 'Sanctions screening', icon: ScanSearch },
  { label: 'Template library', icon: Library },
  { label: 'Assistant', icon: MessageSquareText },
];

const deadlines = [
  ['Quarterly regulatory return', '30 Sep 2026', 'Due in 6 days'],
  ['AML annual risk assessment', '08 Oct 2026', 'Due in 14 days'],
  ['Supplier due diligence — Nexus Payments', '15 Oct 2026', 'Due in 21 days'],
  ['Board compliance review', '31 Oct 2026', 'Due in 37 days'],
];

const suppliers = [
  ['Nexus Payments', 'Payment services', 'Review due', 'Medium'],
  ['CloudVault Europe', 'Hosting', 'Current', 'Low'],
  ['KYC Bridge Ltd', 'Identity verification', 'Current', 'Low'],
];

const surface = 'overflow-hidden rounded-xl border border-[#dedee1] bg-white';
const secondary = 'text-[#6e6e73]';
const divider = 'border-[#ececee]';

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6">
      <p className={`mb-1 text-sm ${secondary}`}>{subtitle}</p>
      <h2 className="text-2xl font-semibold tracking-[-0.02em] md:text-[28px]">{title}</h2>
    </div>
  );
}

function Panel({ title, children, action }: { title: string; children: ReactNode; action?: string }) {
  return (
    <div className={surface}>
      <div className={`flex items-center justify-between border-b px-5 py-4 ${divider}`}>
        <h3 className="text-sm font-semibold">{title}</h3>
        {action && (
          <button className="rounded-lg bg-[#0071e3] px-3 py-2 text-xs font-medium text-white transition hover:bg-[#0066cc]">
            {action}
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

function DashboardView() {
  return (
    <>
      <SectionTitle subtitle="Acme Interactive Ltd" title="Welcome, Alexandra" />
      <section className={`mb-5 ${surface}`}>
        <div className="flex flex-col gap-5 p-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`text-xs font-medium ${secondary}`}>Compliance readiness</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-[-0.04em]">82%</span>
              <span className={`text-xs ${secondary}`}>9 of 11 controls in place</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#edf8f0] px-2.5 py-1 text-xs font-medium text-[#137333]"><CheckCircle2 className="h-3.5 w-3.5"/>Licence current</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff7e6] px-2.5 py-1 text-xs font-medium text-[#9a6700]"><Clock3 className="h-3.5 w-3.5"/>2 actions due</span>
          </div>
        </div>
        <div className="h-1 bg-[#eeeeef]"><div className="h-full w-[82%] bg-[#0071e3]"/></div>
      </section>

      <div className="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
        {[['Licences','4','All current'],['Regulated people','7','1 review due'],['Outsourcing','12','1 review due'],['Open deadlines','6','2 due soon']].map(([label,value,meta]) => (
          <div key={label} className={`p-4 ${surface}`}>
            <p className={`text-xs ${secondary}`}>{label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-[-0.03em]">{value}</p>
            <p className={`mt-1 text-xs ${secondary}`}>{meta}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
        <Panel title="Statutory calendar" action="Add deadline">
          {deadlines.map(([title,date,status],i) => (
            <div key={title} className={`grid grid-cols-[1fr_auto] gap-4 border-b px-5 py-4 last:border-b-0 ${divider}`}>
              <div>
                <div className="flex items-center gap-2">
                  {i===0 ? <AlertTriangle className="h-4 w-4 text-[#b54708]"/> : <CalendarDays className={`h-4 w-4 ${secondary}`}/>}
                  <p className="text-sm font-medium">{title}</p>
                </div>
                <p className={`ml-6 mt-1 text-xs ${secondary}`}>{status}</p>
              </div>
              <div className={`text-xs font-medium ${secondary}`}>{date}</div>
            </div>
          ))}
        </Panel>

        <div className="space-y-5">
          <Panel title="Regulated people">
            {[['Alexandra Reed','Director'],['Marcus Cole','MLRO'],['Sofia Bennett','Compliance Officer']].map(([name,role]) => (
              <div key={name} className={`flex items-center justify-between border-b px-5 py-3.5 last:border-0 ${divider}`}>
                <div><p className="text-sm font-medium">{name}</p><p className={`text-xs ${secondary}`}>{role}</p></div>
                <span className="text-xs font-medium text-[#137333]">Current</span>
              </div>
            ))}
          </Panel>
          <div className={`p-5 ${surface}`}>
            <h3 className="text-sm font-semibold">Statutory basis</h3>
            <p className={`mt-2 text-xs leading-5 ${secondary}`}>Gibraltar Gambling Act 2025 workspace tracking and evidence register.</p>
          </div>
        </div>
      </div>
    </>
  );
}

function LicencesView() {
  const rows = [['RGL-114','Remote gaming','Current','31 Mar 2027'],['B2B-221','B2B support services','Current','30 Jun 2027'],['PPL-009','Personal licence','Review due','18 Oct 2026']];
  return <><SectionTitle subtitle="Licence registry" title="Licences"/><Panel title="Corporate and personal licences" action="Add licence"><DataTable headers={['Reference','Type','Status','Expiry']} rows={rows}/></Panel></>;
}

function OutsourcingView() {
  return <><SectionTitle subtitle="Third-party oversight" title="Outsourcing"/><Panel title="Outsourcing register" action="Add supplier"><DataTable headers={['Supplier','Service','Status','Risk']} rows={suppliers}/></Panel></>;
}

function SubstanceView() {
  const rows = [
    ['Office lease - Suite 4, Rosia Court · sample','Office Lease (s.40)','sample-lease.pdf','Reviewed'],
    ['Gibraltar staff roster - Q3 2026 · sample','Employee Roster (s.40)','sample-roster.pdf','Reviewed'],
    ['PAYE payroll summary - July and August 2026 · sample','Payroll Records (s.40)','sample-payroll.pdf','Awaiting review'],
    ['Corporate tax return 2025/26 - filing acknowledgement · sample','Gibraltar Tax Filings','sample-tax.pdf','Reviewed'],
    ['Local board minutes - Q3 2026 · sample','Local Board Minutes','sample-board.pdf','Reviewed'],
  ];
  return (
    <>
      <SectionTitle subtitle="Records of presence in Gibraltar" title="Substance evidence"/>
      <div className={`mb-5 flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between ${divider} bg-white`}>
        <div><p className="text-sm font-medium">Two-step sign-in is not set up</p><p className={`mt-0.5 text-xs ${secondary}`}>Add a second step to sign-in for stronger workspace security.</p></div>
        <button className="shrink-0 rounded-lg border border-[#dedee1] px-3 py-2 text-xs font-medium">Set it up</button>
      </div>
      <Panel title="Documents" action="Add evidence"><DataTable headers={['Document','Category','File','Review status']} rows={rows}/></Panel>
    </>
  );
}

function QuarterlyReturnsView() {
  return <><SectionTitle subtitle="Regulatory reporting" title="Quarterly returns"/><Panel title="Reporting periods" action="Create return"><DataTable headers={['Period','Status','Due date','Owner']} rows={[[ 'Q3 2026','In progress','30 Sep 2026','Alexandra Reed'],['Q2 2026','Submitted','30 Jun 2026','Marcus Cole'],['Q1 2026','Submitted','31 Mar 2026','Sofia Bennett']]}/></Panel></>;
}

function CalendarView() {
  return <><SectionTitle subtitle="Compliance calendar" title="Calendar"/><Panel title="Upcoming deadlines" action="Add deadline">{deadlines.concat([['Licence renewal pack','12 Nov 2026','Due in 49 days']]).map(([title,date,status])=><div key={title} className={`flex items-center justify-between border-b px-5 py-4 last:border-0 ${divider}`}><div><p className="text-sm font-medium">{title}</p><p className={`mt-1 text-xs ${secondary}`}>{status}</p></div><span className={`text-sm ${secondary}`}>{date}</span></div>)}</Panel></>;
}

function FeesView() {
  return <><SectionTitle subtitle="Statutory payments" title="Fees and duty"/><Panel title="Upcoming payments"><DataTable headers={['Item','Period','Amount','Status']} rows={[[ 'Annual licence fee','2026/27','£20,000','Scheduled'],['Gaming duty','Q3 2026','£8,450','Draft'],['Personal licence fee','2026','£500','Paid']]}/></Panel></>;
}

function ScopeView() {
  return <><SectionTitle subtitle="Regulatory perimeter" title="Licensing scope"/><div className="grid gap-5 lg:grid-cols-2"><Panel title="Entities"><DataTable headers={['Entity','Activity','Status']} rows={[[ 'Alam Gaming Ltd','Remote gambling','In scope'],['Alam Services Ltd','B2B support','In scope']]}/></Panel><Panel title="Determinations">{[['Remote gambling','Licence required'],['Payment support','Within group scope'],['Marketing operations','Review complete']].map(r=><Row key={r[0]} left={r[0]} right={r[1]}/>)}</Panel></div></>;
}

function GossView() {
  return <><SectionTitle subtitle="Application preparation" title="GOSS application pack"/><Panel title="Pack readiness">{[['Corporate structure','Complete'],['Business plan','Complete'],['Key individuals','In review'],['Policies and controls','In progress'],['Financial information','Complete']].map(r=><Row key={r[0]} left={r[0]} right={r[1]}/>)}</Panel></>;
}

function ObligationsView() {
  return <><SectionTitle subtitle="Ongoing compliance" title="Obligations"/><Panel title="Obligation register"><DataTable headers={['Obligation','Frequency','Owner','Status']} rows={[[ 'Maintain Gibraltar substance','Ongoing','Alexandra Reed','Current'],['AML risk assessment','Annual','Marcus Cole','Due soon'],['Quarterly return','Quarterly','Sofia Bennett','In progress'],['Supplier due diligence','Annual','Compliance','Current']]}/></Panel></>;
}

function ChangeImpactView() {
  return <><SectionTitle subtitle="Regulatory change tracking" title="Change impact"/><Panel title="Recent changes">{[['AML guidance update','12 Sep 2026','Assessment required'],['Quarterly return schema','02 Sep 2026','No material impact'],['Remote gaming code update','19 Aug 2026','Implemented']].map(r=><div key={r[0]} className={`grid gap-2 border-b px-5 py-4 last:border-0 md:grid-cols-[1fr_150px_180px] ${divider}`}><span className="text-sm font-medium">{r[0]}</span><span className={`text-xs ${secondary}`}>{r[1]}</span><span className="text-xs">{r[2]}</span></div>)}</Panel></>;
}

function SanctionsView() {
  return <><SectionTitle subtitle="Counterparty checks" title="Sanctions screening"/><Panel title="Recent screenings" action="New screening"><DataTable headers={['Subject','Type','Screened','Result']} rows={[[ 'Nexus Payments','Supplier','24 Sep 2026','No match'],['Alexandra Reed','Individual','23 Sep 2026','No match'],['CloudVault Europe','Supplier','20 Sep 2026','No match']]}/></Panel></>;
}

function TemplatesView() {
  return <><SectionTitle subtitle="Reusable compliance documents" title="Template library"/><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{['Board meeting minutes','Supplier due diligence','AML annual review','Regulatory notification','Quarterly return checklist','Substance evidence request'].map(name=><div key={name} className={`p-5 ${surface}`}><FileText className={`mb-4 h-5 w-5 ${secondary}`}/><h3 className="text-sm font-semibold">{name}</h3><p className={`mt-1 text-xs ${secondary}`}>Standard workspace template</p><button className="mt-4 text-xs font-medium text-[#0066cc]">Open template</button></div>)}</div></>;
}

function AssistantView() {
  return <><SectionTitle subtitle="Workspace assistance" title="Assistant"/><div className={`mx-auto max-w-3xl p-6 md:p-8 ${surface}`}><MessageSquareText className="h-6 w-6"/><h3 className="mt-4 text-lg font-semibold">Ask about your compliance workspace</h3><p className={`mt-2 max-w-xl text-sm ${secondary}`}>Use the assistant to navigate records, deadlines and obligations in this frontend preview.</p><div className={`mt-6 flex items-center gap-2 rounded-xl border p-2 ${divider}`}><input className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none" placeholder="Ask a question…"/><button className="rounded-lg bg-[#0071e3] px-4 py-2 text-xs font-medium text-white hover:bg-[#0066cc]">Send</button></div></div></>;
}

function SettingsView() {
  return <><SectionTitle subtitle="Workspace configuration" title="Settings"/><div className="grid gap-5 lg:grid-cols-2"><Panel title="Workspace"><div className="space-y-4 p-5"><Field label="Operator name" value="Alam"/><Field label="Licence reference" value="RGL-114"/></div></Panel><Panel title="Security"><div className="p-5"><div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#137333]"/><div><p className="text-sm font-medium">Two-factor authentication</p><p className={`text-xs ${secondary}`}>Not yet configured for this preview account</p></div></div></div></Panel></div></>;
}

function Field({label,value}:{label:string;value:string}) {
  return <label className={`block text-xs ${secondary}`}>{label}<input className="mt-1 h-10 w-full rounded-lg border border-[#dedee1] bg-white px-3 text-sm text-[#1d1d1f] outline-none focus:border-[#0071e3]" defaultValue={value}/></label>;
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return <div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left"><thead className="bg-[#fafafa] text-[11px] uppercase tracking-wide text-[#76767b]"><tr>{headers.map(h=><th key={h} className="px-5 py-3 font-medium">{h}</th>)}</tr></thead><tbody>{rows.map((row,i)=><tr key={i} className={`border-t ${divider}`}>{row.map((cell,j)=><td key={j} className={`px-5 py-4 text-sm ${j===0?'font-medium':secondary}`}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function Row({left,right}:{left:string;right:string}) {
  return <div className={`flex items-center justify-between gap-4 border-b px-5 py-4 last:border-0 ${divider}`}><span className="text-sm font-medium">{left}</span><span className={`text-xs ${secondary}`}>{right}</span></div>;
}

function Sidebar({ activeTab, setActiveTab, onClose, onCollapse, mobile=false }: { activeTab: Tab; setActiveTab: (tab: Tab)=>void; onClose?:()=>void; onCollapse?:()=>void; mobile?:boolean }) {
  const go = (tab:Tab) => { setActiveTab(tab); onClose?.(); };
  return (
    <aside className={`${mobile?'h-full w-[248px]':'sticky top-0 h-screen w-[280px] shrink-0'} flex flex-col border-r border-[#e5e5e7] bg-white text-[#1d1d1f]`}>
      <div className="flex h-16 items-center border-b border-[#e5e5e7] px-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1d1d1f] text-sm font-semibold text-white">G</div>
        <div className="ml-3 min-w-0 flex-1"><div className="text-[15px] font-semibold">GibComply</div><div className="truncate text-[11px] text-[#6e6e73]">Acme Interactive Ltd</div></div>
        {mobile ? <button onClick={onClose} aria-label="Close navigation" className="rounded-lg p-2 text-[#6e6e73] transition hover:bg-[#f7f7f8] hover:text-[#1d1d1f]"><X className="h-4 w-4"/></button> : <button onClick={onCollapse} aria-label="Collapse sidebar" title="Collapse sidebar" className="rounded-lg p-2 text-[#6e6e73] transition hover:bg-[#f7f7f8] hover:text-[#1d1d1f]"><PanelLeftClose className="h-4 w-4"/></button>}
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-0.5">
          {nav.map(({label,icon:Icon,badge}) => {
            const active=activeTab===label;
            return <button key={label} onClick={()=>go(label)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[14px] transition ${active?'bg-[#f1f1f3] font-medium text-[#1d1d1f]':'text-[#5f6368] hover:bg-[#f7f7f8] hover:text-[#1d1d1f]'}`}><Icon className="h-[17px] w-[17px] shrink-0"/><span className="min-w-0 flex-1 truncate">{label}</span>{badge&&<span className="rounded-full bg-[#fff1f0] px-1.5 py-0.5 text-[10px] font-semibold text-[#b42318]">{badge}</span>}</button>
          })}
        </div>
      </nav>

      <div className="border-t border-[#e5e5e7] p-3">
        <button onClick={()=>go('Settings')} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[14px] transition ${activeTab==='Settings'?'bg-[#f1f1f3] font-medium text-[#1d1d1f]':'text-[#5f6368] hover:bg-[#f7f7f8] hover:text-[#1d1d1f]'}`}><Settings className="h-[17px] w-[17px]"/>Settings</button>
      </div>
    </aside>
  );
}

export default function Page() {
  const [activeTab,setActiveTab]=useState<Tab>('Dashboard');
  const [sidebarCollapsed,setSidebarCollapsed]=useState(false);
  const [mobileOpen,setMobileOpen]=useState(false);
  
  useEffect(()=>{
    setSidebarCollapsed(window.localStorage.getItem('gibcomply-dashboard-sidebar')==='collapsed');
  },[]);

  const toggleSidebar=()=>{
    setSidebarCollapsed(v=>{const next=!v; window.localStorage.setItem('gibcomply-dashboard-sidebar',next?'collapsed':'open'); return next;});
  };

  const views:Record<Tab,ReactNode>={
    Dashboard:<DashboardView/>,
    Licences:<LicencesView/>,
    Outsourcing:<OutsourcingView/>,
    'Substance evidence':<SubstanceView/>,
    'Quarterly returns':<QuarterlyReturnsView/>,
    Calendar:<CalendarView/>,
    'Fees and duty':<FeesView/>,
    'Licensing scope':<ScopeView/>,
    'GOSS application pack':<GossView/>,
    Obligations:<ObligationsView/>,
    'Change impact':<ChangeImpactView/>,
    'Sanctions screening':<SanctionsView/>,
    'Template library':<TemplatesView/>,
    Assistant:<AssistantView/>,
    Settings:<SettingsView/>,
  };

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="flex min-h-screen">
        {!sidebarCollapsed && <div className="hidden lg:block"><Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onCollapse={toggleSidebar}/></div>}

        {mobileOpen && <div className="fixed inset-0 z-50 lg:hidden"><button aria-label="Close navigation overlay" onClick={()=>setMobileOpen(false)} className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"/><div className="relative h-full w-fit shadow-2xl"><Sidebar mobile activeTab={activeTab} setActiveTab={setActiveTab} onClose={()=>setMobileOpen(false)}/></div></div>}

        <section className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[#e5e5e7] bg-white/95 px-4 backdrop-blur md:px-6">
            <div className="flex min-w-0 items-center gap-2">
              <button onClick={()=>setMobileOpen(true)} className="rounded-lg p-2 transition hover:bg-black/5 lg:hidden" aria-label="Open navigation"><Menu className="h-5 w-5"/></button>
              {sidebarCollapsed && <button onClick={toggleSidebar} className="hidden rounded-lg p-2 transition hover:bg-black/5 lg:inline-flex" aria-label="Show sidebar" title="Show sidebar"><PanelLeftOpen className="h-5 w-5"/></button>}
              <div className="min-w-0"><h1 className="truncate text-sm font-semibold">{activeTab}</h1><p className={`text-[11px] ${secondary}`}>RGL-114</p></div>
            </div>

            <div className="flex items-center gap-2">
              <button className="hidden h-9 items-center gap-2 rounded-lg border border-[#dedee1] bg-white px-3 text-xs text-[#6e6e73] transition hover:bg-[#f7f7f8] md:flex"><Search className="h-4 w-4"/>Search sections…</button>
              <button aria-label="Notifications" className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#dedee1] bg-white transition hover:bg-[#f7f7f8]"><Bell className="h-4 w-4"/><span className="absolute -right-1 -top-1 rounded-full bg-[#b42318] px-1 text-[9px] font-semibold text-white">9+</span></button>
              <button className="flex h-9 items-center gap-2 rounded-lg border border-[#dedee1] bg-white px-2.5 text-xs font-medium transition hover:bg-[#f7f7f8]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ececee]">A</span><ChevronDown className={`h-3.5 w-3.5 ${secondary}`}/></button>
            </div>
          </header>

          <div className={`mx-auto w-full p-4 md:p-6 lg:p-7 ${sidebarCollapsed?'max-w-[1680px]':'max-w-[1480px]'}`}>
            {views[activeTab]}
          </div>
        </section>
      </div>
    </main>
  );
}
