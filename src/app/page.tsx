'use client';

import { useState } from 'react';
import {
  LayoutDashboard, BadgeCheck, CalendarDays, Building2, ClipboardList, FileText,
  Users, Settings, Bell, Search, ChevronDown, CheckCircle2, Clock3, AlertTriangle,
  ShieldCheck,
} from 'lucide-react';

type Tab = 'Dashboard'|'Licences'|'Calendar'|'Suppliers'|'Substance'|'Reports'|'Audit'|'Advisers'|'Settings';

const nav: Array<[any, Tab]> = [
  [LayoutDashboard, 'Dashboard'], [BadgeCheck, 'Licences'], [CalendarDays, 'Calendar'],
  [Building2, 'Suppliers'], [ClipboardList, 'Substance'], [FileText, 'Reports'], [FileText, 'Audit'],
];

const deadlines = [
  ['Quarterly regulatory return', '30 Sep 2026', 'Due in 6 days'],
  ['AML annual risk assessment', '08 Oct 2026', 'Due in 14 days'],
  ['Supplier due diligence — Nexus Payments', '15 Oct 2026', 'Due in 21 days'],
  ['Board compliance review', '31 Oct 2026', 'Due in 37 days'],
];

const suppliers = [
  ['Nexus Payments', 'Payment services', 'Review due'],
  ['CloudVault Europe', 'Hosting', 'Current'],
  ['KYC Bridge Ltd', 'Identity verification', 'Current'],
];

function SectionTitle({title,subtitle}:{title:string;subtitle:string}) {
  return <div className="mb-6"><p className="mb-1 text-sm text-[#6e6e73]">{subtitle}</p><h2 className="text-2xl font-semibold tracking-[-0.02em] md:text-[28px]">{title}</h2></div>;
}

function Panel({title,children,action}:{title:string;children:React.ReactNode;action?:string}) {
  return <div className="overflow-hidden rounded-xl border border-[#dedee1] bg-white">
    <div className="flex items-center justify-between border-b border-[#ececee] px-5 py-4">
      <h3 className="text-sm font-semibold">{title}</h3>
      {action && <button className="rounded-lg bg-[#0071e3] px-3 py-2 text-xs font-medium text-white">{action}</button>}
    </div>
    {children}
  </div>;
}

function DashboardView() {
  return <>
    <SectionTitle subtitle="Acme Interactive Ltd" title="Welcome, Alexandra" />
    <section className="mb-5 overflow-hidden rounded-xl border border-[#dedee1] bg-white">
      <div className="flex flex-col gap-5 p-5 md:flex-row md:items-end md:justify-between">
        <div><p className="text-xs font-medium text-[#6e6e73]">Compliance readiness</p><div className="mt-2 flex items-baseline gap-2"><span className="text-4xl font-semibold tracking-[-0.04em]">82%</span><span className="text-xs text-[#6e6e73]">9 of 11 controls in place</span></div></div>
        <div className="flex gap-2"><span className="inline-flex items-center gap-1.5 rounded-full bg-[#edf8f0] px-2.5 py-1 text-xs font-medium text-[#137333]"><CheckCircle2 className="h-3.5 w-3.5"/>Licence current</span><span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff7e6] px-2.5 py-1 text-xs font-medium text-[#9a6700]"><Clock3 className="h-3.5 w-3.5"/>2 actions due</span></div>
      </div>
      <div className="h-1 bg-[#eeeeef]"><div className="h-full w-[82%] bg-[#0071e3]"/></div>
    </section>
    <div className="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
      {[['Licences','4','All current'],['Regulated people','7','1 review due'],['Suppliers','12','1 review due'],['Open deadlines','6','2 due soon']].map(([label,value,meta]) => <div key={label} className="rounded-xl border border-[#dedee1] bg-white p-4"><p className="text-xs text-[#6e6e73]">{label}</p><p className="mt-3 text-3xl font-semibold tracking-[-0.03em]">{value}</p><p className="mt-1 text-xs text-[#85858a]">{meta}</p></div>)}
    </div>
    <div className="grid gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
      <Panel title="Statutory calendar" action="Add deadline">
        {deadlines.map(([title,date,status],i)=><div key={title} className="grid grid-cols-[1fr_auto] gap-4 border-b border-[#efeff0] px-5 py-4 last:border-b-0"><div><div className="flex items-center gap-2">{i===0?<AlertTriangle className="h-4 w-4 text-[#b54708]"/>:<CalendarDays className="h-4 w-4 text-[#777]"/>}<p className="text-sm font-medium">{title}</p></div><p className="ml-6 mt-1 text-xs text-[#6e6e73]">{status}</p></div><div className="text-xs font-medium text-[#454549]">{date}</div></div>)}
      </Panel>
      <div className="space-y-5">
        <Panel title="Regulated people">{[['Alexandra Reed','Director'],['Marcus Cole','MLRO'],['Sofia Bennett','Compliance Officer']].map(([name,role])=><div key={name} className="flex items-center justify-between border-b border-[#efeff0] px-5 py-3.5 last:border-0"><div><p className="text-sm font-medium">{name}</p><p className="text-xs text-[#6e6e73]">{role}</p></div><span className="text-xs font-medium text-[#137333]">Current</span></div>)}</Panel>
        <div className="rounded-xl border border-[#dedee1] bg-white p-5"><h3 className="text-sm font-semibold">Statutory basis</h3><p className="mt-2 text-xs leading-5 text-[#6e6e73]">Gibraltar Gambling Act 2025 workspace tracking and evidence register.</p></div>
      </div>
    </div>
  </>;
}

function LicencesView(){const rows=[['RGL-114','Remote gaming','Current','31 Mar 2027'],['B2B-221','B2B support services','Current','30 Jun 2027'],['PPL-009','Personal licence','Review due','18 Oct 2026']];return <><SectionTitle subtitle="Licence registry" title="Licences & regulated people"/><Panel title="Corporate and personal licences" action="Add licence"><table className="w-full text-left"><thead className="bg-[#fafafa] text-[11px] uppercase tracking-wide text-[#76767b]"><tr><th className="px-5 py-3">Reference</th><th className="px-5 py-3">Type</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Expiry</th></tr></thead><tbody>{rows.map(r=><tr key={r[0]} className="border-t border-[#efeff0]"><td className="px-5 py-4 text-sm font-medium">{r[0]}</td><td className="px-5 py-4 text-sm text-[#5f6368]">{r[1]}</td><td className="px-5 py-4 text-sm text-[#137333]">{r[2]}</td><td className="px-5 py-4 text-sm text-[#5f6368]">{r[3]}</td></tr>)}</tbody></table></Panel></>}
function CalendarView(){return <><SectionTitle subtitle="Compliance calendar" title="Upcoming deadlines"/><Panel title="September–October 2026" action="Add deadline">{deadlines.concat([['Licence renewal pack','12 Nov 2026','Due in 49 days']]).map(([title,date,status])=><div key={title} className="flex items-center justify-between border-b border-[#efeff0] px-5 py-4 last:border-0"><div><p className="text-sm font-medium">{title}</p><p className="mt-1 text-xs text-[#6e6e73]">{status}</p></div><span className="text-sm text-[#454549]">{date}</span></div>)}</Panel></>}
function SuppliersView(){return <><SectionTitle subtitle="Third-party oversight" title="Supplier compliance"/><Panel title="Supplier register" action="Log supplier"><table className="w-full text-left"><thead className="bg-[#fafafa] text-[11px] uppercase tracking-wide text-[#76767b]"><tr><th className="px-5 py-3">Supplier</th><th className="px-5 py-3">Service</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Risk</th></tr></thead><tbody>{suppliers.map((r,i)=><tr key={r[0]} className="border-t border-[#efeff0]"><td className="px-5 py-4 text-sm font-medium">{r[0]}</td><td className="px-5 py-4 text-sm text-[#5f6368]">{r[1]}</td><td className="px-5 py-4 text-sm">{r[2]}</td><td className="px-5 py-4 text-sm text-[#5f6368]">{i===0?'Medium':'Low'}</td></tr>)}</tbody></table></Panel></>}
function SubstanceView(){return <><SectionTitle subtitle="Evidence management" title="Substance & records"/><div className="grid gap-5 lg:grid-cols-2"><Panel title="Evidence documents" action="Upload document">{[['Board minutes — Q3','Board governance','Reviewed'],['Gibraltar office lease','Premises','Current'],['Local payroll extract','Staffing','Current']].map(r=><div key={r[0]} className="border-b border-[#efeff0] px-5 py-4 last:border-0"><p className="text-sm font-medium">{r[0]}</p><div className="mt-1 flex justify-between text-xs text-[#6e6e73]"><span>{r[1]}</span><span>{r[2]}</span></div></div>)}</Panel><Panel title="Substance checkpoints">{[['Local decision making','Complete'],['Board presence','Complete'],['Key functions in Gibraltar','Review due']].map(r=><div key={r[0]} className="flex items-center justify-between border-b border-[#efeff0] px-5 py-4 last:border-0"><span className="text-sm">{r[0]}</span><span className="text-xs text-[#137333]">{r[1]}</span></div>)}</Panel></div></>}
function ReportsView(){return <><SectionTitle subtitle="Regulatory reporting" title="Quarterly reports"/><Panel title="Reporting periods" action="Create report">{[['Q3 2026','In progress','30 Sep 2026'],['Q2 2026','Submitted','30 Jun 2026'],['Q1 2026','Submitted','31 Mar 2026']].map(r=><div key={r[0]} className="grid grid-cols-3 border-b border-[#efeff0] px-5 py-4 text-sm last:border-0"><span className="font-medium">{r[0]}</span><span className="text-[#5f6368]">{r[1]}</span><span className="text-right text-[#5f6368]">{r[2]}</span></div>)}</Panel></>}
function AuditView(){return <><SectionTitle subtitle="Immutable activity history" title="Audit trail"/><Panel title="Recent activity">{[['24 Sep 2026, 15:42','Alexandra Reed','Updated supplier review'],['24 Sep 2026, 11:08','Marcus Cole','Marked calendar event complete'],['23 Sep 2026, 16:19','Sofia Bennett','Uploaded substance evidence'],['22 Sep 2026, 09:30','System','Generated quarterly reporting reminder']].map(r=><div key={r[0]+r[2]} className="grid gap-2 border-b border-[#efeff0] px-5 py-4 last:border-0 md:grid-cols-[170px_160px_1fr]"><span className="text-xs text-[#6e6e73]">{r[0]}</span><span className="text-sm font-medium">{r[1]}</span><span className="text-sm text-[#5f6368]">{r[2]}</span></div>)}</Panel></>}
function AdvisersView(){return <><SectionTitle subtitle="External access" title="Advisers"/><Panel title="External advisers" action="Invite adviser">{[['Harbour Legal LLP','Legal adviser','Active'],['Rock Compliance Partners','Compliance adviser','Active']].map(r=><div key={r[0]} className="flex items-center justify-between border-b border-[#efeff0] px-5 py-4 last:border-0"><div><p className="text-sm font-medium">{r[0]}</p><p className="text-xs text-[#6e6e73]">{r[1]}</p></div><span className="text-xs text-[#137333]">{r[2]}</span></div>)}</Panel></>}
function SettingsView(){return <><SectionTitle subtitle="Workspace configuration" title="Settings"/><div className="grid gap-5 lg:grid-cols-2"><Panel title="Workspace"><div className="space-y-4 p-5"><label className="block text-xs text-[#6e6e73]">Operator name<input className="mt-1 h-10 w-full rounded-lg border border-[#dedee1] px-3 text-sm" defaultValue="Acme Interactive Ltd"/></label><label className="block text-xs text-[#6e6e73]">Licence reference<input className="mt-1 h-10 w-full rounded-lg border border-[#dedee1] px-3 text-sm" defaultValue="RGL-114"/></label></div></Panel><Panel title="Security"><div className="p-5"><div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#137333]"/><div><p className="text-sm font-medium">Two-factor authentication</p><p className="text-xs text-[#6e6e73]">Enabled for this workspace</p></div></div></div></Panel></div></>}

export default function Page() {
  const [activeTab,setActiveTab]=useState<Tab>('Dashboard');
  const views:Record<Tab,React.ReactNode>={Dashboard:<DashboardView/>,Licences:<LicencesView/>,Calendar:<CalendarView/>,Suppliers:<SuppliersView/>,Substance:<SubstanceView/>,Reports:<ReportsView/>,Audit:<AuditView/>,Advisers:<AdvisersView/>,Settings:<SettingsView/>};
  return <main className="flex min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
    <aside className="hidden w-[248px] shrink-0 border-r border-[#e5e5e7] bg-white lg:flex lg:flex-col">
      <div className="flex h-16 items-center border-b border-[#e5e5e7] px-5"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1d1d1f] text-sm font-semibold text-white">G</div><div className="ml-3"><div className="text-sm font-semibold">GibComply</div><div className="text-[11px] text-[#6e6e73]">Acme Interactive Ltd</div></div></div>
      <nav className="flex-1 px-3 py-4">
        <div className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8a8a8f]">Workspace</div>
        <div className="space-y-1">{nav.map(([Icon,label])=><button key={label} onClick={()=>setActiveTab(label)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm ${activeTab===label?'bg-[#f1f1f3] font-medium text-[#1d1d1f]':'text-[#5f6368] hover:bg-[#f7f7f8]'}`}><Icon className="h-4 w-4"/><span>{label}</span>{label==='Calendar'&&<span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#fff1f0] px-1.5 text-[10px] font-semibold text-[#b42318]">2</span>}</button>)}</div>
        <div className="mb-2 mt-6 px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8a8a8f]">Access</div>
        <button onClick={()=>setActiveTab('Advisers')} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm ${activeTab==='Advisers'?'bg-[#f1f1f3] font-medium text-[#1d1d1f]':'text-[#5f6368] hover:bg-[#f7f7f8]'}`}><Users className="h-4 w-4"/>Advisers</button>
      </nav>
      <div className="border-t border-[#e5e5e7] p-3"><button onClick={()=>setActiveTab('Settings')} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm ${activeTab==='Settings'?'bg-[#f1f1f3] font-medium text-[#1d1d1f]':'text-[#5f6368] hover:bg-[#f7f7f8]'}`}><Settings className="h-4 w-4"/>Settings</button></div>
    </aside>
    <section className="min-w-0 flex-1">
      <header className="flex h-16 items-center justify-between border-b border-[#e5e5e7] bg-white px-5 md:px-7"><div><h1 className="text-sm font-semibold">{activeTab}</h1><p className="text-[11px] text-[#6e6e73]">RGL-114</p></div><div className="flex items-center gap-2"><button className="hidden h-9 items-center gap-2 rounded-lg border border-[#dedee1] bg-white px-3 text-xs text-[#6e6e73] md:flex"><Search className="h-4 w-4"/>Search</button><button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#dedee1] bg-white"><Bell className="h-4 w-4"/></button><button className="flex h-9 items-center gap-2 rounded-lg border border-[#dedee1] bg-white px-2.5 text-xs font-medium"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ececee]">A</span><ChevronDown className="h-3.5 w-3.5 text-[#777]"/></button></div></header>
      <div className="mx-auto w-full max-w-[1460px] p-5 md:p-7">{views[activeTab]}</div>
    </section>
  </main>;
}
