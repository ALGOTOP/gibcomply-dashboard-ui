'use client';

import { useEffect, useState, type ReactNode } from 'react';
import {
  LayoutDashboard, BadgeCheck, CalendarDays, Building2, ClipboardList, FileText,
  Settings, Bell, Search, ChevronDown, CheckCircle2, Clock3, AlertTriangle,
  ShieldCheck, PanelLeftClose, PanelLeftOpen, Menu, X, PoundSterling, Network,
  FolderArchive, ListChecks, GitCompareArrows, ScanSearch, Library, MessageSquareText,
  Filter, ArrowUpDown, MoreHorizontal, Check, Upload, ChevronRight, Moon, Sun
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
  const readiness = [
    ['Licence coverage', 100, '4 current'],
    ['Key persons', 86, '6 of 7 current'],
    ['Outsourcing reviews', 78, '9 of 12 current'],
    ['Substance evidence', 80, '4 of 5 reviewed'],
  ];

  const actions = [
    ['Quarterly regulatory return', 'Due 30 Sep', 'High', 'Quarterly returns'],
    ['AML annual risk assessment', 'Due 08 Oct', 'High', 'Obligations'],
    ['Nexus Payments due diligence', 'Due 15 Oct', 'Medium', 'Outsourcing'],
    ['Board compliance review', 'Due 31 Oct', 'Medium', 'Calendar'],
  ];

  const activity = [
    ['Today, 15:42', 'Alexandra Reed', 'Updated supplier review', 'Nexus Payments'],
    ['Today, 11:08', 'Marcus Cole', 'Completed calendar item', 'Board pack review'],
    ['Yesterday, 16:19', 'Sofia Bennett', 'Uploaded evidence', 'PAYE payroll summary'],
  ];

  return (
    <div className="mx-auto max-w-[1380px]">
      <div className="mb-7 flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.11em] text-[#8a8a8f]">Acme Interactive Ltd · RGL-114</p>
          <h2 className="max-w-3xl text-[34px] font-semibold tracking-[-0.045em] text-[#18181b] md:text-[42px]">Good morning, Alexandra.</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6e6e73]">A single operational view of what is current, what needs attention, and what is changing across the compliance workspace.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-[#d8d8dc] bg-white px-3 text-sm font-medium text-[#3f3f44] transition hover:bg-[#f7f7f8]"><CalendarDays className="h-4 w-4"/>View calendar</button>
          <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-[#1d1d1f] px-3.5 text-sm font-medium text-white transition hover:bg-black"><FileText className="h-4 w-4"/>Prepare pack</button>
        </div>
      </div>

      <section className="mb-5 overflow-hidden rounded-2xl border border-[#dedee1] bg-white">
        <div className="grid divide-y divide-[#ececee] md:grid-cols-[1.2fr_repeat(3,1fr)] md:divide-x md:divide-y-0">
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-[#6e6e73]">Overall readiness</p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#edf8f0] px-2 py-1 text-[11px] font-medium text-[#137333]"><CheckCircle2 className="h-3 w-3"/>Healthy</span>
            </div>
            <div className="mt-4 flex items-end gap-3">
              <span className="text-5xl font-semibold tracking-[-0.055em] text-[#18181b]">82%</span>
              <span className="pb-1 text-xs text-[#7a7a80]">9 of 11 controls in place</span>
            </div>
            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[#eeeeef]"><div className="h-full w-[82%] rounded-full bg-[#1d1d1f]"/></div>
          </div>
          {[
            ['Open deadlines','06','2 due within 14 days'],
            ['Evidence records','05','1 awaiting review'],
            ['Regulatory changes','03','1 requires assessment'],
          ].map(([label,value,meta])=>(
            <div key={label} className="p-5 md:p-6">
              <p className="text-xs font-medium text-[#74747a]">{label}</p>
              <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#202024]">{value}</p>
              <p className="mt-1.5 text-xs leading-5 text-[#838389]">{meta}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mb-5 grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,.55fr)]">
        <section className="overflow-hidden rounded-2xl border border-[#dedee1] bg-white">
          <div className="flex items-start justify-between border-b border-[#ececee] px-5 py-4 md:px-6">
            <div><h3 className="text-sm font-semibold text-[#252529]">Priority queue</h3><p className="mt-1 text-xs text-[#77777d]">Items with a deadline or review dependency.</p></div>
            <button className="text-xs font-medium text-[#4b4b50] hover:underline">Open all</button>
          </div>
          <div>
            {actions.map(([title,due,level,area],i)=>(
              <button key={title} className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-[#ededee] px-5 py-4 text-left last:border-0 transition hover:bg-[#fafafa] md:px-6">
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${level==='High'?'bg-[#fff1f0] text-[#b42318]':'bg-[#fff8e8] text-[#946200]'}`}>
                  {i<2?<AlertTriangle className="h-4 w-4"/>:<Clock3 className="h-4 w-4"/>}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-[#28282c]">{title}</span>
                  <span className="mt-1 block text-xs text-[#7d7d83]">{area} · {due}</span>
                </span>
                <span className="rounded-full border border-[#dedee1] bg-white px-2 py-1 text-[11px] font-medium text-[#66666c] transition group-hover:border-[#cfcfd4]">{level}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#dedee1] bg-white p-5 md:p-6">
          <div className="mb-5"><h3 className="text-sm font-semibold text-[#252529]">Coverage by area</h3><p className="mt-1 text-xs text-[#77777d]">Operational completeness across the workspace.</p></div>
          <div className="space-y-5">
            {readiness.map(([label,value,meta])=>(
              <div key={label as string}>
                <div className="mb-2 flex items-center justify-between gap-3"><span className="text-sm font-medium text-[#39393e]">{label}</span><span className="text-xs text-[#78787e]">{meta}</span></div>
                <div className="h-1.5 overflow-hidden rounded-full bg-[#efeff1]"><div className="h-full rounded-full bg-[#1d1d1f]" style={{width:`${value}%`}}/></div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <section className="rounded-2xl border border-[#dedee1] bg-white">
          <div className="border-b border-[#ececee] px-5 py-4"><h3 className="text-sm font-semibold">Next statutory dates</h3></div>
          <div className="px-5 py-1">
            {deadlines.slice(0,4).map(([title,date,status],i)=>(
              <div key={title} className="grid grid-cols-[54px_1fr_auto] items-center gap-3 border-b border-[#efeff0] py-3.5 last:border-0">
                <div className="text-center"><div className="text-[10px] font-semibold uppercase tracking-wide text-[#9a9a9f]">{i===0?'Sep':'Oct'}</div><div className="mt-0.5 text-lg font-semibold text-[#252529]">{i===0?'30':i===1?'08':i===2?'15':'31'}</div></div>
                <div><p className="text-sm font-medium text-[#333338]">{title}</p><p className="mt-0.5 text-xs text-[#85858b]">{status}</p></div>
                <span className="text-xs text-[#68686e]">{date}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#dedee1] bg-white">
          <div className="border-b border-[#ececee] px-5 py-4"><h3 className="text-sm font-semibold">Recent workspace activity</h3></div>
          <div className="px-5 py-1">
            {activity.map(([when,person,action,item])=>(
              <div key={when+action} className="grid grid-cols-[8px_1fr] gap-3 border-b border-[#efeff0] py-3.5 last:border-0">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[#b7b7bc]"/>
                <div><div className="flex flex-wrap items-center gap-x-2 gap-y-1"><span className="text-sm font-medium text-[#303034]">{person}</span><span className="text-xs text-[#909096]">{when}</span></div><p className="mt-1 text-xs text-[#66666c]">{action} · {item}</p></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function LicencesView() {
  const [kind,setKind]=useState<'corporate'|'personal'>('corporate');
  const corporate=[
    ['RGL-114','Remote gaming','Current','31 Mar 2027','76%'],
    ['B2B-221','B2B support services','Current','30 Jun 2027','84%'],
  ];
  const personal=[
    ['PPL-009','Alexandra Reed · Director','Review due','18 Oct 2026','24%'],
    ['PPL-018','Marcus Cole · MLRO','Current','12 Feb 2027','63%'],
    ['PPL-021','Sofia Bennett · Compliance Officer','Current','07 May 2027','72%'],
  ];
  const rows=kind==='corporate'?corporate:personal;

  return (
    <div className="mx-auto max-w-[1320px]">
      <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div><p className="mb-1 text-sm text-[#6e6e73]">Licence registry</p><h2 className="text-[30px] font-semibold tracking-[-0.035em]">Licences</h2><p className="mt-2 max-w-xl text-sm leading-6 text-[#707076]">Track corporate permissions and regulated individuals without mixing renewal state with legal status.</p></div>
        <button className="rounded-lg bg-[#1d1d1f] px-3.5 py-2.5 text-sm font-medium text-white hover:bg-black">Add licence</button>
      </div>

      <div className="mb-5 grid gap-3 md:grid-cols-3">
        {[['5','records','Across the workspace'],['4','current','No action required'],['1','review due','Within 30 days']].map(([value,label,meta],i)=>(
          <div key={label} className={`rounded-xl border p-4 ${i===2?'border-[#ead9b5] bg-[#fffaf0]':'border-[#dedee1] bg-white'}`}>
            <p className="text-3xl font-semibold tracking-[-0.04em]">{value}</p><p className="mt-1 text-sm font-medium">{label}</p><p className="mt-1 text-xs text-[#7e7e84]">{meta}</p>
          </div>
        ))}
      </div>

      <section className="overflow-hidden rounded-2xl border border-[#dedee1] bg-white">
        <div className="flex items-center justify-between border-b border-[#ececee] px-5 pt-4">
          <div className="flex gap-6">
            <button onClick={()=>setKind('corporate')} className={`relative pb-3 text-sm font-medium ${kind==='corporate'?'text-[#1d1d1f]':'text-[#79797f]'}`}>Corporate {kind==='corporate'&&<span className="absolute inset-x-0 -bottom-px h-0.5 bg-[#1d1d1f]"/>}</button>
            <button onClick={()=>setKind('personal')} className={`relative pb-3 text-sm font-medium ${kind==='personal'?'text-[#1d1d1f]':'text-[#79797f]'}`}>Individuals {kind==='personal'&&<span className="absolute inset-x-0 -bottom-px h-0.5 bg-[#1d1d1f]"/>}</button>
          </div>
          <button className="mb-3 text-xs font-medium text-[#55555b] hover:underline">Export register</button>
        </div>
        <div>
          {rows.map(([ref,type,status,expiry,progress])=>(
            <div key={ref} className="grid gap-4 border-b border-[#eeeeef] px-5 py-5 last:border-0 lg:grid-cols-[120px_minmax(0,1fr)_170px_210px] lg:items-center">
              <div><p className="font-mono text-xs font-semibold text-[#626268]">{ref}</p></div>
              <div><p className="text-sm font-medium text-[#28282c]">{type}</p><p className="mt-1 text-xs text-[#828288]">Gibraltar Gambling Commissioner</p></div>
              <div><span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${status==='Current'?'bg-[#edf8f0] text-[#137333]':'bg-[#fff7e6] text-[#9a6700]'}`}>{status}</span></div>
              <div>
                <div className="mb-2 flex justify-between text-xs"><span className="text-[#7b7b81]">Expires {expiry}</span><span className="font-medium text-[#4d4d52]">{progress}</span></div>
                <div className="h-1.5 overflow-hidden rounded-full bg-[#ededee]"><div className={`h-full rounded-full ${status==='Current'?'bg-[#2f7d46]':'bg-[#ba7a17]'}`} style={{width:progress}}/></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function OutsourcingView() {
  const [risk,setRisk]=useState<'all'|'medium'|'low'>('all');
  const rows=[
    {name:'Nexus Payments',service:'Payment services',owner:'Marcus Cole',risk:'Medium',review:'15 Oct 2026',status:'Review due'},
    {name:'CloudVault Europe',service:'Hosting',owner:'Sofia Bennett',risk:'Low',review:'12 Jan 2027',status:'Current'},
    {name:'KYC Bridge Ltd',service:'Identity verification',owner:'Alexandra Reed',risk:'Low',review:'02 Mar 2027',status:'Current'},
  ];
  const visible=rows.filter(r=>risk==='all'||r.risk.toLowerCase()===risk);

  return (
    <div className="mx-auto max-w-[1320px]">
      <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div><p className="mb-1 text-sm text-[#6e6e73]">Third-party oversight</p><h2 className="text-[30px] font-semibold tracking-[-0.035em]">Outsourcing</h2><p className="mt-2 max-w-xl text-sm leading-6 text-[#707076]">See concentration, review pressure and ownership before opening a supplier record.</p></div>
        <button className="rounded-lg bg-[#1d1d1f] px-3.5 py-2.5 text-sm font-medium text-white">Add supplier</button>
      </div>

      <div className="mb-5 grid gap-5 lg:grid-cols-[320px_1fr]">
        <section className="rounded-2xl border border-[#dedee1] bg-white p-5">
          <h3 className="text-sm font-semibold">Risk distribution</h3>
          <p className="mt-1 text-xs text-[#7c7c82]">12 suppliers in the full register</p>
          <div className="mt-6 space-y-5">
            {[['Low',8,67,'#3f8454'],['Medium',3,25,'#bd7d1f'],['High',1,8,'#b42318']].map(([label,count,pct,color])=>(
              <button key={label as string} onClick={()=>setRisk((label as string).toLowerCase()==='high'?'all':(label as string).toLowerCase() as 'medium'|'low')} className="block w-full text-left">
                <div className="mb-2 flex items-center justify-between text-sm"><span className="font-medium">{label}</span><span className="text-xs text-[#76767c]">{count} suppliers</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-[#eeeeef]"><div className="h-full rounded-full" style={{width:`${pct}%`,backgroundColor:color as string}}/></div>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#dedee1] bg-white p-5">
          <div className="flex items-start justify-between"><div><h3 className="text-sm font-semibold">Review pressure</h3><p className="mt-1 text-xs text-[#7c7c82]">Upcoming due-diligence workload</p></div><span className="rounded-full bg-[#fff7e6] px-2 py-1 text-xs font-medium text-[#9a6700]">1 due soon</span></div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[['Next 30d','1'],['31–90d','2'],['90d+','9']].map(([label,value])=><div key={label} className="rounded-xl bg-[#f7f7f8] p-4"><p className="text-2xl font-semibold">{value}</p><p className="mt-1 text-xs text-[#737379]">{label}</p></div>)}
          </div>
          <p className="mt-5 text-xs leading-5 text-[#74747a]">Nexus Payments is the only supplier requiring a review this month. No concentration threshold is currently breached.</p>
        </section>
      </div>

      <section className="overflow-hidden rounded-2xl border border-[#dedee1] bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ececee] px-5 py-4">
          <div className="flex gap-2">
            {(['all','medium','low'] as const).map(v=><button key={v} onClick={()=>setRisk(v)} className={`rounded-full px-3 py-1.5 text-xs font-medium capitalize ${risk===v?'bg-[#1d1d1f] text-white':'bg-[#f2f2f4] text-[#626268]'}`}>{v}</button>)}
          </div>
          <button className="text-xs font-medium text-[#55555b]">Review policy</button>
        </div>
        {visible.map(r=>(
          <div key={r.name} className="grid gap-4 border-b border-[#eeeeef] px-5 py-4 last:border-0 md:grid-cols-[minmax(0,1fr)_150px_140px_150px] md:items-center">
            <div><p className="text-sm font-medium">{r.name}</p><p className="mt-1 text-xs text-[#7d7d83]">{r.service} · Owner {r.owner}</p></div>
            <div><span className={`rounded-full px-2 py-1 text-xs font-medium ${r.risk==='Medium'?'bg-[#fff7e6] text-[#9a6700]':'bg-[#edf8f0] text-[#137333]'}`}>{r.risk} risk</span></div>
            <div className="text-xs text-[#66666c]">{r.review}</div>
            <div className="text-right text-xs font-medium text-[#505056]">{r.status}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

function SubstanceView() {
  const [query,setQuery]=useState('');
  const [view,setView]=useState<'all'|'review'|'expiring'>('all');
  const [selected,setSelected]=useState<string[]>([]);

  const records = [
    { id:'lease', document:'Office lease - Suite 4, Rosia Court', category:'Office lease', file:'sample-lease.pdf', valid:'10 Mar 2028', uploaded:'5 Sep 2026', status:'Reviewed' },
    { id:'roster', document:'Gibraltar staff roster - Q3 2026', category:'Employee roster', file:'sample-roster.pdf', valid:'Not set', uploaded:'5 Sep 2026', status:'Reviewed' },
    { id:'payroll', document:'PAYE payroll summary - July and August 2026', category:'Payroll records', file:'sample-payroll.pdf', valid:'Not set', uploaded:'5 Sep 2026', status:'Awaiting review' },
    { id:'tax', document:'Corporate tax return 2025/26 - filing acknowledgement', category:'Gibraltar tax filings', file:'sample-tax.pdf', valid:'Not set', uploaded:'5 Sep 2026', status:'Reviewed' },
    { id:'board', document:'Local board minutes - Q3 2026', category:'Local board minutes', file:'sample-board.pdf', valid:'30 Sep 2027', uploaded:'4 Sep 2026', status:'Reviewed' },
  ];

  const visible=records.filter(r=>{
    const q=query.trim().toLowerCase();
    const matches=!q||[r.document,r.category,r.file,r.status].some(v=>v.toLowerCase().includes(q));
    const matchesView=view==='all'||(view==='review'&&r.status!=='Reviewed')||(view==='expiring'&&r.valid!=='Not set');
    return matches&&matchesView;
  });

  const toggle=(id:string)=>setSelected(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]);
  const allVisibleSelected=visible.length>0&&visible.every(r=>selected.includes(r.id));
  const toggleAll=()=>setSelected(s=>allVisibleSelected?s.filter(id=>!visible.some(r=>r.id===id)):Array.from(new Set(s.concat(visible.map(r=>r.id)))));

  const viewButton=(id:'all'|'review'|'expiring',label:string,count:number)=>(
    <button
      onClick={()=>setView(id)}
      className={`relative px-1 pb-3 text-sm font-medium transition ${view===id?'text-[#1d1d1f]':'text-[#6e6e73] hover:text-[#1d1d1f]'}`}
    >
      {label} <span className="ml-1 text-xs font-normal text-[#8a8a8f]">{count}</span>
      {view===id&&<span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-[#1d1d1f]"/>}
    </button>
  );

  return (
    <div className="mx-auto max-w-[1320px]">
      <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-[#6e6e73]">
            <span>Compliance</span><ChevronRight className="h-3.5 w-3.5"/><span>Evidence</span>
          </div>
          <h2 className="text-[30px] font-semibold tracking-[-0.03em] text-[#1d1d1f]">Substance evidence</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#6e6e73]">
            Keep the records that demonstrate your Gibraltar presence organised, reviewable and ready for a regulatory request.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button className="h-9 rounded-lg border border-[#d7d7da] bg-white px-3 text-sm font-medium text-[#343438] shadow-[0_1px_1px_rgba(0,0,0,.03)] transition hover:bg-[#f7f7f8]">
            Regulator request
          </button>
          <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-[#1d1d1f] px-3.5 text-sm font-medium text-white shadow-[0_1px_1px_rgba(0,0,0,.08)] transition hover:bg-black">
            <Upload className="h-4 w-4"/>Add evidence
          </button>
        </div>
      </div>

      <div className="mb-5 flex items-start gap-3 rounded-xl border border-[#e1e1e4] bg-[#fafafa] px-4 py-3.5">
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-[#e1e1e4]">
          <ShieldCheck className="h-4 w-4 text-[#5f6368]"/>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-[#29292d]">Review state belongs to your team</p>
          <p className="mt-0.5 text-xs leading-5 text-[#6e6e73]">GibComply records your evidence and review decisions; it does not verify the underlying documents.</p>
        </div>
        <button className="hidden text-xs font-medium text-[#3f3f44] hover:underline sm:block">Learn more</button>
      </div>

      <section className="overflow-hidden rounded-xl border border-[#dedee1] bg-white shadow-[0_1px_2px_rgba(0,0,0,.025)]">
        <div className="border-b border-[#ececee] px-4 pt-4 md:px-5">
          <div className="flex gap-6">
            {viewButton('all','All records',records.length)}
            {viewButton('review','Needs review',records.filter(r=>r.status!=='Reviewed').length)}
            {viewButton('expiring','With validity date',records.filter(r=>r.valid!=='Not set').length)}
          </div>
        </div>

        <div className="border-b border-[#ececee] bg-[#fcfcfc] p-3 md:p-4">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <label className="relative min-w-0 flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8b8b90]"/>
              <input
                value={query}
                onChange={e=>setQuery(e.target.value)}
                placeholder="Search evidence"
                className="h-9 w-full rounded-lg border border-[#d9d9dc] bg-white pl-9 pr-3 text-sm outline-none transition placeholder:text-[#9a9a9f] focus:border-[#8caed1] focus:ring-2 focus:ring-[#dce9f5]"
              />
            </label>
            <div className="flex items-center gap-2">
              <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-[#d9d9dc] bg-white px-3 text-sm font-medium text-[#444448] transition hover:bg-[#f7f7f8]"><Filter className="h-4 w-4"/>Filter</button>
              <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-[#d9d9dc] bg-white px-3 text-sm font-medium text-[#444448] transition hover:bg-[#f7f7f8]"><ArrowUpDown className="h-4 w-4"/>Sort</button>
              <button aria-label="More table actions" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#d9d9dc] bg-white text-[#55555a] transition hover:bg-[#f7f7f8]"><MoreHorizontal className="h-4 w-4"/></button>
            </div>
          </div>

          {selected.length>0&&(
            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg border border-[#d9d9dc] bg-white px-3 py-2">
              <span className="text-xs font-medium text-[#444448]">{selected.length} selected</span>
              <span className="h-4 w-px bg-[#e1e1e4]"/>
              <button className="text-xs font-medium text-[#343438] hover:underline">Mark reviewed</button>
              <button className="text-xs font-medium text-[#343438] hover:underline">Export</button>
              <button onClick={()=>setSelected([])} className="ml-auto text-xs text-[#6e6e73] hover:text-[#1d1d1f]">Clear</button>
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#e7e7e9] bg-white text-[11px] font-medium uppercase tracking-[0.045em] text-[#76767b]">
                <th className="w-11 px-4 py-3">
                  <button onClick={toggleAll} aria-label="Select visible records" className={`flex h-4 w-4 items-center justify-center rounded border transition ${allVisibleSelected?'border-[#1d1d1f] bg-[#1d1d1f] text-white':'border-[#c8c8cc] bg-white'}`}>
                    {allVisibleSelected&&<Check className="h-3 w-3"/>}
                  </button>
                </th>
                <th className="px-2 py-3">Document</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Valid until</th>
                <th className="px-4 py-3">Uploaded</th>
                <th className="px-4 py-3">Review status</th>
                <th className="w-12 px-4 py-3"/>
              </tr>
            </thead>
            <tbody>
              {visible.map(r=>{
                const checked=selected.includes(r.id);
                return (
                  <tr key={r.id} className={`group border-b border-[#ededee] last:border-0 transition hover:bg-[#fafafa] ${checked?'bg-[#f7f7f8]':''}`}>
                    <td className="px-4 py-3.5">
                      <button onClick={()=>toggle(r.id)} aria-label={`Select ${r.document}`} className={`flex h-4 w-4 items-center justify-center rounded border transition ${checked?'border-[#1d1d1f] bg-[#1d1d1f] text-white':'border-[#c8c8cc] bg-white'}`}>
                        {checked&&<Check className="h-3 w-3"/>}
                      </button>
                    </td>
                    <td className="px-2 py-3.5">
                      <button className="block max-w-[390px] text-left">
                        <span className="block truncate text-sm font-medium text-[#252529] group-hover:text-black">{r.document}</span>
                        <span className="mt-0.5 block truncate text-xs text-[#838388]">{r.file}</span>
                      </button>
                    </td>
                    <td className="px-4 py-3.5 text-sm text-[#55555a]">{r.category}</td>
                    <td className="px-4 py-3.5 text-sm text-[#55555a]">{r.valid}</td>
                    <td className="px-4 py-3.5 text-sm text-[#55555a]">{r.uploaded}</td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-xs font-medium ${r.status==='Reviewed'?'border-[#cfe5d6] bg-[#f1f8f3] text-[#25633a]':'border-[#ead9b5] bg-[#fff9ec] text-[#805b17]'}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${r.status==='Reviewed'?'bg-[#3b8c56]':'bg-[#b8801d]'}`}/>
                        {r.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <button aria-label={`Actions for ${r.document}`} className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#6e6e73] opacity-60 transition hover:bg-[#eeeeef] hover:text-[#1d1d1f] group-hover:opacity-100"><MoreHorizontal className="h-4 w-4"/></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {visible.length===0&&(
            <div className="px-6 py-14 text-center"><p className="text-sm font-medium text-[#343438]">No evidence matches this view</p><p className="mt-1 text-xs text-[#7d7d82]">Try another search or saved view.</p></div>
          )}
        </div>

        <div className="flex flex-col gap-2 border-t border-[#ececee] bg-[#fcfcfc] px-4 py-3 text-xs text-[#6e6e73] sm:flex-row sm:items-center sm:justify-between md:px-5">
          <span>Showing {visible.length} of {records.length} evidence records</span>
          <div className="flex items-center gap-1">
            <button disabled className="rounded-md border border-[#dedee1] bg-white px-2.5 py-1.5 disabled:text-[#b4b4b8]">Previous</button>
            <button disabled className="rounded-md border border-[#dedee1] bg-white px-2.5 py-1.5 disabled:text-[#b4b4b8]">Next</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuarterlyReturnsView() {
  const steps=[['Scope data','Complete'],['Operator metrics','Complete'],['Compliance attestations','In review'],['Sign-off','Not started'],['Submission','Not started']];
  return (
    <div className="mx-auto max-w-[1280px]">
      <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div><p className="mb-1 text-sm text-[#6e6e73]">Regulatory reporting</p><h2 className="text-[30px] font-semibold tracking-[-0.035em]">Quarterly returns</h2><p className="mt-2 max-w-xl text-sm leading-6 text-[#707076]">Work the current filing as a sequence, while keeping prior submissions easy to inspect.</p></div>
        <button className="rounded-lg bg-[#1d1d1f] px-3.5 py-2.5 text-sm font-medium text-white">Continue Q3 return</button>
      </div>

      <section className="mb-5 overflow-hidden rounded-2xl border border-[#dedee1] bg-white">
        <div className="grid gap-6 p-5 lg:grid-cols-[260px_1fr] lg:p-6">
          <div className="rounded-xl bg-[#f6f6f7] p-5">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#828288]">Current filing</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.04em]">Q3 2026</p>
            <p className="mt-2 text-sm text-[#66666c]">Due 30 Sep 2026</p>
            <div className="mt-5 h-1.5 rounded-full bg-[#e7e7e9]"><div className="h-full w-[58%] rounded-full bg-[#1d1d1f]"/></div>
            <p className="mt-2 text-xs text-[#77777d]">58% complete</p>
          </div>
          <div className="grid gap-0 sm:grid-cols-5">
            {steps.map(([label,state],i)=>(
              <div key={label} className="relative border-l border-[#e5e5e7] px-4 py-2 first:border-l-0">
                <div className={`mb-4 flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${state==='Complete'?'bg-[#1d1d1f] text-white':state==='In review'?'bg-[#fff1d9] text-[#8f6519]':'bg-[#f0f0f2] text-[#77777d]'}`}>{state==='Complete'?<Check className="h-3.5 w-3.5"/>:i+1}</div>
                <p className="text-sm font-medium">{label}</p><p className="mt-1 text-xs text-[#7b7b81]">{state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-[#dedee1] bg-white">
        <div className="border-b border-[#ececee] px-5 py-4"><h3 className="text-sm font-semibold">Filing history</h3></div>
        {[
          ['Q2 2026','Submitted','30 Jun 2026','Marcus Cole','28 Jun 2026'],
          ['Q1 2026','Submitted','31 Mar 2026','Sofia Bennett','29 Mar 2026'],
          ['Q4 2025','Submitted','31 Dec 2025','Alexandra Reed','30 Dec 2025'],
        ].map(r=>(
          <div key={r[0]} className="grid gap-3 border-b border-[#eeeeef] px-5 py-4 last:border-0 md:grid-cols-[120px_120px_150px_1fr_150px] md:items-center">
            <span className="text-sm font-semibold">{r[0]}</span><span className="text-xs font-medium text-[#137333]">{r[1]}</span><span className="text-xs text-[#6e6e73]">Due {r[2]}</span><span className="text-sm text-[#515157]">{r[3]}</span><span className="text-right text-xs text-[#85858b]">Filed {r[4]}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

function CalendarView() {
  const [selectedDay,setSelectedDay]=useState(30);
  const days=Array.from({length:35},(_,i)=>i<2?null:i-1>30?null:i-1);
  const events:{[key:number]:string[]}={8:['AML annual risk assessment'],15:['Supplier due diligence'],30:['Quarterly regulatory return']};
  return (
    <div className="mx-auto max-w-[1320px]">
      <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div><p className="mb-1 text-sm text-[#6e6e73]">Compliance calendar</p><h2 className="text-[30px] font-semibold tracking-[-0.035em]">September 2026</h2><p className="mt-2 text-sm text-[#707076]">Statutory, internal and supplier-review dates in one operational calendar.</p></div>
        <button className="rounded-lg bg-[#1d1d1f] px-3.5 py-2.5 text-sm font-medium text-white">Add deadline</button>
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
        <section className="overflow-hidden rounded-2xl border border-[#dedee1] bg-white">
          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
          <div className="grid grid-cols-7 border-b border-[#ececee] bg-[#fafafa] text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8a8a90]">
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=><div key={d} className="px-2 py-3">{d}</div>)}
          </div>
          <div className="grid grid-cols-7">
            {days.map((day,i)=>(
              <button key={i} disabled={!day} onClick={()=>day&&setSelectedDay(day)} className={`min-h-[92px] border-b border-r border-[#eeeeef] p-2 text-left transition last:border-r-0 ${day?'hover:bg-[#fafafa]':'bg-[#fbfbfc]'} ${selectedDay===day?'bg-[#f5f5f6]':''}`}>
                {day&&<>
                  <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium ${day===30?'bg-[#1d1d1f] text-white':'text-[#505056]'}`}>{day}</span>
                  {events[day]?.map(e=><span key={e} className="mt-2 block truncate rounded-md bg-[#eef3f8] px-2 py-1 text-[10px] font-medium text-[#36536f]">{e}</span>)}
                </>}
              </button>
            ))}
          </div>
            </div>
          </div>
        </section>

        <aside className="rounded-2xl border border-[#dedee1] bg-white p-5">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#85858b]">Selected date</p>
          <div className="mt-2 flex items-end gap-2"><span className="text-5xl font-semibold tracking-[-0.05em]">{selectedDay}</span><span className="pb-1 text-sm text-[#6e6e73]">September</span></div>
          <div className="mt-6 border-t border-[#ececee] pt-5">
            {events[selectedDay]?.length ? events[selectedDay].map(e=><div key={e} className="rounded-xl border border-[#e4e4e7] bg-[#fafafa] p-4"><p className="text-sm font-medium">{e}</p><p className="mt-2 text-xs leading-5 text-[#74747a]">Owner: Compliance · statutory deadline</p><button className="mt-4 text-xs font-medium text-[#3f3f44] hover:underline">Open item</button></div>) : <div className="py-8 text-center"><CalendarDays className="mx-auto h-5 w-5 text-[#a0a0a5]"/><p className="mt-3 text-sm font-medium">No scheduled items</p><p className="mt-1 text-xs text-[#85858b]">This day is clear.</p></div>}
          </div>
          <div className="mt-6 border-t border-[#ececee] pt-5">
            <p className="text-xs font-medium text-[#77777d]">This month</p>
            <div className="mt-3 flex items-center justify-between text-sm"><span>5 deadlines</span><span className="text-[#137333]">3 complete</span></div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function FeesView() {
  return (
    <div className="mx-auto max-w-[1260px]">
      <div className="mb-7"><p className="mb-1 text-sm text-[#6e6e73]">Statutory payments</p><h2 className="text-[30px] font-semibold tracking-[-0.035em]">Fees and duty</h2><p className="mt-2 max-w-xl text-sm leading-6 text-[#707076]">A financial compliance view focused on what is payable, what is scheduled and what has cleared.</p></div>
      <div className="mb-5 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl bg-[#1d1d1f] p-5 text-white"><p className="text-xs text-white/60">Projected 2026/27</p><p className="mt-3 text-4xl font-semibold tracking-[-0.045em]">£42,950</p><p className="mt-2 text-xs text-white/55">Licence fees + gaming duty</p></div>
        <div className="rounded-2xl border border-[#dedee1] bg-white p-5"><p className="text-xs text-[#74747a]">Next payment</p><p className="mt-3 text-3xl font-semibold">£8,450</p><p className="mt-2 text-xs text-[#7e7e84]">Gaming duty · 30 Sep</p></div>
        <div className="rounded-2xl border border-[#dedee1] bg-white p-5"><p className="text-xs text-[#74747a]">Paid this year</p><p className="mt-3 text-3xl font-semibold">£14,500</p><p className="mt-2 text-xs text-[#137333]">All cleared on time</p></div>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <section className="rounded-2xl border border-[#dedee1] bg-white">
          <div className="border-b border-[#ececee] px-5 py-4"><h3 className="text-sm font-semibold">Payment schedule</h3></div>
          {[
            ['Gaming duty','Q3 2026','£8,450','30 Sep 2026','Draft'],
            ['Annual licence fee','2026/27','£20,000','31 Mar 2027','Scheduled'],
            ['Personal licence fee','2026','£500','12 Feb 2026','Paid'],
          ].map(r=><div key={r[0]+r[1]} className="grid gap-3 border-b border-[#eeeeef] px-5 py-4 last:border-0 md:grid-cols-[1fr_120px_110px_140px_100px] md:items-center"><span className="text-sm font-medium">{r[0]}</span><span className="text-xs text-[#6e6e73]">{r[1]}</span><span className="text-sm font-semibold">{r[2]}</span><span className="text-xs text-[#6e6e73]">{r[3]}</span><span className="text-right text-xs font-medium">{r[4]}</span></div>)}
        </section>
        <section className="rounded-2xl border border-[#dedee1] bg-white p-5"><h3 className="text-sm font-semibold">Cost mix</h3><p className="mt-1 text-xs text-[#7b7b81]">Projected annual share</p><div className="mt-6 space-y-5">{[['Licence fees',47],['Gaming duty',42],['Personal fees',11]].map(([label,pct])=><div key={label as string}><div className="mb-2 flex justify-between text-sm"><span>{label}</span><span className="text-xs text-[#7d7d83]">{pct}%</span></div><div className="h-2 rounded-full bg-[#eeeeef]"><div className="h-full rounded-full bg-[#1d1d1f]" style={{width:`${pct}%`}}/></div></div>)}</div></section>
      </div>
    </div>
  );
}

function ScopeView() {
  return (
    <div className="mx-auto max-w-[1280px]">
      <div className="mb-7"><p className="mb-1 text-sm text-[#6e6e73]">Regulatory perimeter</p><h2 className="text-[30px] font-semibold tracking-[-0.035em]">Licensing scope</h2><p className="mt-2 max-w-xl text-sm leading-6 text-[#707076]">Map legal entities to regulated activities, then capture the determination that explains why each activity is in or out of scope.</p></div>
      <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
        <section className="rounded-2xl border border-[#dedee1] bg-white p-5">
          <div className="mb-5 flex items-center justify-between"><h3 className="text-sm font-semibold">Entity structure</h3><button className="text-xs font-medium text-[#55555b]">Edit</button></div>
          <div className="space-y-3">
            <div className="rounded-xl border border-[#dedee1] bg-[#fafafa] p-4"><p className="text-sm font-semibold">Acme Interactive Ltd</p><p className="mt-1 text-xs text-[#7a7a80]">Gibraltar · parent operator</p></div>
            <div className="ml-6 border-l border-[#d5d5d9] pl-4"><div className="rounded-xl border border-[#dedee1] bg-white p-4"><p className="text-sm font-medium">Acme Gaming Ltd</p><p className="mt-1 text-xs text-[#7a7a80]">Remote gambling activity</p></div><div className="mt-3 rounded-xl border border-[#dedee1] bg-white p-4"><p className="text-sm font-medium">Acme Services Ltd</p><p className="mt-1 text-xs text-[#7a7a80]">B2B support services</p></div></div>
          </div>
        </section>
        <section className="rounded-2xl border border-[#dedee1] bg-white">
          <div className="border-b border-[#ececee] px-5 py-4"><h3 className="text-sm font-semibold">Scope determinations</h3></div>
          {[
            ['Remote gambling','Acme Gaming Ltd','Licence required','Documented'],
            ['Payment support','Acme Services Ltd','Within group scope','Documented'],
            ['Marketing operations','Acme Interactive Ltd','Outside direct licensing','Reviewed'],
          ].map(([activity,entity,decision,state],i)=>(
            <div key={activity} className="grid gap-4 border-b border-[#eeeeef] px-5 py-5 last:border-0 md:grid-cols-[44px_1fr_180px_120px] md:items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2f2f4] text-xs font-semibold">{i+1}</span>
              <div><p className="text-sm font-medium">{activity}</p><p className="mt-1 text-xs text-[#7a7a80]">{entity}</p></div>
              <span className="text-xs font-medium text-[#4f4f55]">{decision}</span>
              <span className="text-right text-xs text-[#137333]">{state}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function GossView() {
  const stages=[['Corporate structure','Complete',100],['Business plan','Complete',100],['Key individuals','In review',74],['Policies & controls','In progress',58],['Financial information','Complete',100]];
  return (
    <div className="mx-auto max-w-[1280px]">
      <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="mb-1 text-sm text-[#6e6e73]">Application preparation</p><h2 className="text-[30px] font-semibold tracking-[-0.035em]">GOSS application pack</h2><p className="mt-2 max-w-xl text-sm leading-6 text-[#707076]">Prepare the application as a controlled pack rather than a loose document checklist.</p></div><button className="rounded-lg bg-[#1d1d1f] px-3.5 py-2.5 text-sm font-medium text-white">Export pack</button></div>
      <section className="mb-5 rounded-2xl border border-[#dedee1] bg-white p-5 md:p-6">
        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
          <div><p className="text-xs text-[#76767c]">Application readiness</p><p className="mt-2 text-5xl font-semibold tracking-[-0.05em]">84%</p><p className="mt-2 text-xs text-[#7d7d83]">3 sections complete</p></div>
          <div className="grid gap-3 sm:grid-cols-5">
            {stages.map(([label,state,pct],i)=><div key={label as string} className="rounded-xl bg-[#f7f7f8] p-3"><div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${state==='Complete'?'bg-[#1d1d1f] text-white':'bg-white text-[#55555b] ring-1 ring-[#dedee1]'}`}>{state==='Complete'?<Check className="h-3.5 w-3.5"/>:i+1}</div><p className="mt-3 text-xs font-medium leading-5">{label}</p><div className="mt-3 h-1 rounded-full bg-[#e2e2e5]"><div className="h-full rounded-full bg-[#1d1d1f]" style={{width:`${pct}%`}}/></div></div>)}
          </div>
        </div>
      </section>
      <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
        <section className="rounded-2xl border border-[#dedee1] bg-white"><div className="border-b border-[#ececee] px-5 py-4"><h3 className="text-sm font-semibold">Section status</h3></div>{stages.map(([label,state])=><div key={label as string} className="flex items-center justify-between border-b border-[#eeeeef] px-5 py-4 last:border-0"><div className="flex items-center gap-3"><span className={`h-2 w-2 rounded-full ${state==='Complete'?'bg-[#4c955f]':state==='In review'?'bg-[#be8426]':'bg-[#8e8e94]'}`}/><span className="text-sm font-medium">{label}</span></div><span className="text-xs text-[#6f6f75]">{state}</span></div>)}</section>
        <section className="rounded-2xl border border-[#dedee1] bg-[#fafafa] p-5"><h3 className="text-sm font-semibold">Next best action</h3><p className="mt-3 text-sm leading-6 text-[#59595f]">Complete the key-individual declarations before finalising policies and controls.</p><button className="mt-5 rounded-lg border border-[#d7d7da] bg-white px-3 py-2 text-xs font-medium">Open key individuals</button></section>
      </div>
    </div>
  );
}

function ObligationsView() {
  const groups=[
    ['Current',3,'#3f8454',[['Maintain Gibraltar substance','Ongoing','Alexandra Reed'],['Record outsourcing reviews','Annual','Sofia Bennett'],['Keep licence data current','Ongoing','Compliance']]],
    ['Due soon',2,'#b67a1c',[['AML risk assessment','Annual','Marcus Cole'],['Quarterly return','Quarterly','Sofia Bennett']]],
    ['Not started',1,'#8a8a90',[['2026 board effectiveness review','Annual','Board']]],
  ] as const;
  return (
    <div className="mx-auto max-w-[1280px]">
      <div className="mb-7"><p className="mb-1 text-sm text-[#6e6e73]">Ongoing compliance</p><h2 className="text-[30px] font-semibold tracking-[-0.035em]">Obligations</h2><p className="mt-2 max-w-xl text-sm leading-6 text-[#707076]">A control board for recurring duties, ownership and timing—not just another table.</p></div>
      <div className="mb-5 grid gap-3 md:grid-cols-3">{groups.map(([label,count,color])=><div key={label} className="rounded-xl border border-[#dedee1] bg-white p-4"><div className="flex items-center justify-between"><span className="text-sm font-medium">{label}</span><span className="h-2.5 w-2.5 rounded-full" style={{backgroundColor:color}}/></div><p className="mt-3 text-3xl font-semibold">{count}</p><p className="mt-1 text-xs text-[#7c7c82]">obligations</p></div>)}</div>
      <div className="space-y-4">{groups.map(([label,count,color,items])=><section key={label} className="overflow-hidden rounded-2xl border border-[#dedee1] bg-white"><div className="flex items-center justify-between bg-[#fafafa] px-5 py-3.5"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{backgroundColor:color}}/><h3 className="text-sm font-semibold">{label}</h3></div><span className="text-xs text-[#7b7b81]">{count}</span></div>{items.map(([name,freq,owner])=><div key={name} className="grid gap-3 border-t border-[#eeeeef] px-5 py-4 md:grid-cols-[1fr_140px_180px] md:items-center"><span className="text-sm font-medium">{name}</span><span className="text-xs text-[#74747a]">{freq}</span><span className="text-xs text-[#5f5f65]">{owner}</span></div>)}</section>)}</div>
    </div>
  );
}

function ChangeImpactView() {
  const changes=[
    ['AML guidance update','12 Sep 2026','Assessment required','High','2 affected obligations'],
    ['Quarterly return schema','02 Sep 2026','No material impact','Low','1 reporting workflow'],
    ['Remote gaming code update','19 Aug 2026','Implemented','Medium','3 policies updated'],
  ];
  return (
    <div className="mx-auto max-w-[1280px]">
      <div className="mb-7"><p className="mb-1 text-sm text-[#6e6e73]">Regulatory change tracking</p><h2 className="text-[30px] font-semibold tracking-[-0.035em]">Change impact</h2><p className="mt-2 max-w-xl text-sm leading-6 text-[#707076]">Translate a regulatory update into affected controls, owners and actions instead of treating it as a news feed.</p></div>
      <section className="mb-5 rounded-2xl border border-[#dedee1] bg-white p-5 md:p-6">
        <div className="grid gap-5 md:grid-cols-3">{[['1','needs assessment'],['1','implemented'],['1','no material impact']].map(([value,label],i)=><div key={label} className={`border-l-2 pl-4 ${i===0?'border-[#b42318]':i===1?'border-[#3f8454]':'border-[#a5a5aa]'}`}><p className="text-3xl font-semibold">{value}</p><p className="mt-1 text-xs text-[#77777d]">{label}</p></div>)}</div>
      </section>
      <div className="space-y-4">{changes.map(([title,date,state,impact,scope])=><section key={title} className="rounded-2xl border border-[#dedee1] bg-white p-5"><div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"><div><div className="flex flex-wrap items-center gap-2"><h3 className="text-sm font-semibold">{title}</h3><span className={`rounded-full px-2 py-1 text-[11px] font-medium ${impact==='High'?'bg-[#fff1f0] text-[#b42318]':impact==='Medium'?'bg-[#fff7e6] text-[#9a6700]':'bg-[#f1f1f3] text-[#626268]'}`}>{impact} impact</span></div><p className="mt-2 text-xs text-[#7a7a80]">{date} · {scope}</p></div><span className="text-xs font-medium text-[#4d4d52]">{state}</span></div><div className="mt-4 grid gap-2 sm:grid-cols-3">{['Identify affected controls','Assign owner','Record decision'].map((s,i)=><div key={s} className={`rounded-lg border px-3 py-2 text-xs ${state==='Implemented'||i===0?'border-[#d8e9dd] bg-[#f5faf6] text-[#356846]':'border-[#e1e1e4] bg-[#fafafa] text-[#74747a]'}`}>{s}</div>)}</div></section>)}</div>
    </div>
  );
}

function SanctionsView() {
  const [screening,setScreening]=useState('');
  return (
    <div className="mx-auto max-w-[1180px]">
      <div className="mb-7"><p className="mb-1 text-sm text-[#6e6e73]">Counterparty checks</p><h2 className="text-[30px] font-semibold tracking-[-0.035em]">Sanctions screening</h2><p className="mt-2 max-w-xl text-sm leading-6 text-[#707076]">Start from a subject, then keep the result and screening date visible in the audit trail.</p></div>
      <section className="mb-5 rounded-2xl bg-[#1d1d1f] p-5 text-white md:p-6">
        <p className="text-xs font-medium text-white/60">New screening</p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45"/><input value={screening} onChange={e=>setScreening(e.target.value)} placeholder="Name, company or counterparty" className="h-11 w-full rounded-lg border border-white/15 bg-white/10 pl-9 pr-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-white/30"/></div><button className="h-11 rounded-lg bg-white px-4 text-sm font-semibold text-[#1d1d1f]">Run screening</button></div>
        <p className="mt-3 text-xs text-white/45">Results in this frontend are illustrative only.</p>
      </section>
      <div className="grid gap-5 lg:grid-cols-[1fr_300px]">
        <section className="rounded-2xl border border-[#dedee1] bg-white"><div className="border-b border-[#ececee] px-5 py-4"><h3 className="text-sm font-semibold">Recent screenings</h3></div>{[['Nexus Payments','Supplier','24 Sep 2026','No match'],['Alexandra Reed','Individual','23 Sep 2026','No match'],['CloudVault Europe','Supplier','20 Sep 2026','No match']].map(r=><div key={r[0]} className="grid gap-3 border-b border-[#eeeeef] px-5 py-4 last:border-0 md:grid-cols-[1fr_110px_130px_100px] md:items-center"><div><p className="text-sm font-medium">{r[0]}</p></div><span className="text-xs text-[#6e6e73]">{r[1]}</span><span className="text-xs text-[#6e6e73]">{r[2]}</span><span className="text-right text-xs font-medium text-[#137333]">{r[3]}</span></div>)}</section>
        <aside className="rounded-2xl border border-[#dedee1] bg-[#fafafa] p-5"><h3 className="text-sm font-semibold">Screening cadence</h3><p className="mt-2 text-xs leading-5 text-[#74747a]">3 recent checks are current. No rescreening deadline falls within the next 30 days.</p><div className="mt-5 h-1.5 rounded-full bg-[#e6e6e8]"><div className="h-full w-full rounded-full bg-[#3f8454]"/></div><p className="mt-2 text-xs text-[#137333]">100% current</p></aside>
      </div>
    </div>
  );
}

function TemplatesView() {
  const [query,setQuery]=useState('');
  const templates=[
    ['Board meeting minutes','Governance','Word','Updated 14 Sep'],
    ['Supplier due diligence','Outsourcing','Word','Updated 11 Sep'],
    ['AML annual review','AML','Workbook','Updated 08 Sep'],
    ['Regulatory notification','Notifications','Word','Updated 01 Sep'],
    ['Quarterly return checklist','Reporting','Checklist','Updated 22 Aug'],
    ['Substance evidence request','Substance','Email','Updated 18 Aug'],
  ];
  const visible=templates.filter(t=>t[0].toLowerCase().includes(query.toLowerCase())||t[1].toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="mx-auto max-w-[1280px]">
      <div className="mb-7"><p className="mb-1 text-sm text-[#6e6e73]">Reusable compliance documents</p><h2 className="text-[30px] font-semibold tracking-[-0.035em]">Template library</h2><p className="mt-2 max-w-xl text-sm leading-6 text-[#707076]">A working library organised by task, not a wall of identical cards.</p></div>
      <div className="mb-5 flex flex-col gap-3 rounded-xl border border-[#dedee1] bg-white p-3 sm:flex-row sm:items-center"><label className="relative flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8b8b90]"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search templates" className="h-9 w-full rounded-lg bg-[#f7f7f8] pl-9 pr-3 text-sm outline-none"/></label><button className="rounded-lg border border-[#d9d9dc] px-3 py-2 text-sm font-medium">Categories</button></div>
      <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-2xl border border-[#dedee1] bg-white p-4"><p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[0.09em] text-[#8a8a90]">Collections</p>{['All templates','Governance','Outsourcing','AML','Reporting','Substance'].map((x,i)=><button key={x} className={`block w-full rounded-lg px-2 py-2 text-left text-sm ${i===0?'bg-[#f1f1f3] font-medium':'text-[#636369] hover:bg-[#f7f7f8]'}`}>{x}</button>)}</aside>
        <section className="overflow-hidden rounded-2xl border border-[#dedee1] bg-white">{visible.map((t,i)=><div key={t[0]} className="grid gap-4 border-b border-[#eeeeef] px-5 py-4 last:border-0 md:grid-cols-[44px_1fr_120px_120px] md:items-center"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f2f2f4]"><FileText className="h-4 w-4 text-[#5f5f65]"/></span><div><p className="text-sm font-medium">{t[0]}</p><p className="mt-1 text-xs text-[#7c7c82]">{t[1]}</p></div><span className="text-xs text-[#626268]">{t[2]}</span><span className="text-right text-xs text-[#85858b]">{t[3]}</span></div>)}</section>
      </div>
    </div>
  );
}

function AssistantView() {
  const [draft,setDraft]=useState('');
  const [messages,setMessages]=useState<string[]>([]);
  const send=()=>{if(!draft.trim())return;setMessages(m=>[...m,draft.trim()]);setDraft('');};
  return (
    <div className="mx-auto max-w-[1100px]">
      <div className="mb-7"><p className="mb-1 text-sm text-[#6e6e73]">Workspace assistance</p><h2 className="text-[30px] font-semibold tracking-[-0.035em]">Assistant</h2></div>
      <div className="grid gap-5 lg:grid-cols-[250px_1fr]">
        <aside className="rounded-2xl border border-[#dedee1] bg-white p-4"><p className="px-2 text-[10px] font-semibold uppercase tracking-[0.09em] text-[#8a8a90]">Suggested tasks</p><div className="mt-3 space-y-1">{['What is due next?','Summarise open reviews','Show missing evidence','Explain licence status','Prepare board update'].map(q=><button key={q} onClick={()=>setDraft(q)} className="block w-full rounded-lg px-2 py-2.5 text-left text-sm text-[#56565c] hover:bg-[#f7f7f8]">{q}</button>)}</div></aside>
        <section className="flex min-h-[560px] flex-col overflow-hidden rounded-2xl border border-[#dedee1] bg-white">
          <div className="border-b border-[#ececee] px-5 py-4"><div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1d1d1f] text-white"><MessageSquareText className="h-4 w-4"/></span><div><p className="text-sm font-semibold">GibComply assistant</p><p className="text-xs text-[#7b7b81]">Grounded in this workspace preview</p></div></div></div>
          <div className="flex-1 space-y-4 p-5">
            <div className="max-w-[78%] rounded-2xl rounded-tl-md bg-[#f2f2f4] px-4 py-3"><p className="text-sm leading-6 text-[#4e4e54]">I can help navigate deadlines, licence records, evidence and obligations. What would you like to review?</p></div>
            {messages.map((m,i)=><div key={i} className="ml-auto max-w-[78%] rounded-2xl rounded-tr-md bg-[#1d1d1f] px-4 py-3 text-white"><p className="text-sm leading-6">{m}</p></div>)}
          </div>
          <div className="border-t border-[#ececee] p-4"><div className="flex items-end gap-2 rounded-xl border border-[#dcdce0] bg-[#fafafa] p-2"><textarea value={draft} onChange={e=>setDraft(e.target.value)} rows={2} placeholder="Ask about the workspace…" className="min-h-[44px] flex-1 resize-none bg-transparent px-2 py-1.5 text-sm outline-none"/><button onClick={send} className="rounded-lg bg-[#1d1d1f] px-3 py-2 text-xs font-medium text-white">Send</button></div></div>
        </section>
      </div>
    </div>
  );
}

function SettingsView() {
  const [section,setSection]=useState<'workspace'|'security'|'notifications'|'integrations'>('workspace');
  return (
    <div className="mx-auto max-w-[1180px]">
      <div className="mb-7"><p className="mb-1 text-sm text-[#6e6e73]">Workspace configuration</p><h2 className="text-[30px] font-semibold tracking-[-0.035em]">Settings</h2><p className="mt-2 text-sm text-[#707076]">Manage workspace identity, security and operational preferences.</p></div>
      <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
        <aside className="h-fit rounded-2xl border border-[#dedee1] bg-white p-3">
          {([
            ['workspace','Workspace'],
            ['security','Security'],
            ['notifications','Notifications'],
            ['integrations','Integrations'],
          ] as const).map(([id,label])=><button key={id} onClick={()=>setSection(id)} className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm ${section===id?'bg-[#f1f1f3] font-medium text-[#1d1d1f]':'text-[#626268] hover:bg-[#f7f7f8]'}`}><span>{label}</span>{section===id&&<ChevronRight className="h-4 w-4"/>}</button>)}
        </aside>
        <section className="overflow-hidden rounded-2xl border border-[#dedee1] bg-white">
          {section==='workspace'&&<><div className="border-b border-[#ececee] px-5 py-4"><h3 className="text-sm font-semibold">Workspace details</h3><p className="mt-1 text-xs text-[#7b7b81]">Used throughout the dashboard and exported packs.</p></div><div className="grid gap-4 p-5 md:grid-cols-2"><Field label="Operator name" value="Acme Interactive Ltd"/><Field label="Licence reference" value="RGL-114"/><Field label="Primary jurisdiction" value="Gibraltar"/><Field label="Reporting year end" value="31 December"/></div><div className="border-t border-[#ececee] bg-[#fafafa] px-5 py-3 text-right"><button className="rounded-lg bg-[#1d1d1f] px-3 py-2 text-xs font-medium text-white">Save changes</button></div></>}
          {section==='security'&&<><div className="border-b border-[#ececee] px-5 py-4"><h3 className="text-sm font-semibold">Security controls</h3></div><div className="divide-y divide-[#eeeeef]">{[['Two-factor authentication','Not configured','Set up'],['Session timeout','30 minutes','Change'],['Audit logging','Always on','View log']].map(r=><div key={r[0]} className="flex items-center justify-between gap-4 px-5 py-4"><div><p className="text-sm font-medium">{r[0]}</p><p className="mt-1 text-xs text-[#7a7a80]">{r[1]}</p></div><button className="rounded-lg border border-[#d8d8dc] px-3 py-2 text-xs font-medium">{r[2]}</button></div>)}</div></>}
          {section==='notifications'&&<><div className="border-b border-[#ececee] px-5 py-4"><h3 className="text-sm font-semibold">Notification preferences</h3></div><div className="divide-y divide-[#eeeeef]">{[['Deadline reminders','Email + in-app'],['Review assignments','In-app'],['Regulatory changes','Email + in-app']].map(r=><div key={r[0]} className="flex items-center justify-between px-5 py-4"><div><p className="text-sm font-medium">{r[0]}</p><p className="mt-1 text-xs text-[#7a7a80]">{r[1]}</p></div><button className="h-6 w-10 rounded-full bg-[#1d1d1f] p-1"><span className="ml-auto block h-4 w-4 rounded-full bg-white"/></button></div>)}</div></>}
          {section==='integrations'&&<><div className="border-b border-[#ececee] px-5 py-4"><h3 className="text-sm font-semibold">Connected services</h3></div><div className="divide-y divide-[#eeeeef]">{[['Calendar sync','Google / Microsoft','Not connected'],['Email delivery','Resend','Configured'],['Team alerts','Slack / Teams','Not connected']].map(r=><div key={r[0]} className="grid gap-2 px-5 py-4 md:grid-cols-[1fr_160px_130px] md:items-center"><div><p className="text-sm font-medium">{r[0]}</p></div><span className="text-xs text-[#7a7a80]">{r[1]}</span><button className="justify-self-start rounded-lg border border-[#d8d8dc] px-3 py-2 text-xs font-medium md:justify-self-end">{r[2]}</button></div>)}</div></>}
        </section>
      </div>
    </div>
  );
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
  const [dark,setDark]=useState(false);
  
  useEffect(()=>{
    setSidebarCollapsed(window.localStorage.getItem('gibcomply-dashboard-sidebar')==='collapsed');
    const savedTheme=window.localStorage.getItem('gibcomply-dashboard-theme');
    const shouldUseDark=savedTheme ? savedTheme==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(shouldUseDark);
    document.documentElement.classList.toggle('dark',shouldUseDark);
  },[]);

  const toggleSidebar=()=>{
    setSidebarCollapsed(v=>{const next=!v; window.localStorage.setItem('gibcomply-dashboard-sidebar',next?'collapsed':'open'); return next;});
  };

  const toggleTheme=()=>{
    setDark(current=>{
      const next=!current;
      window.localStorage.setItem('gibcomply-dashboard-theme',next?'dark':'light');
      document.documentElement.classList.toggle('dark',next);
      return next;
    });
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
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] transition-colors duration-200">
      <div className="flex min-h-screen">
        {!sidebarCollapsed && <div className="hidden lg:block"><Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onCollapse={toggleSidebar}/></div>}

        {mobileOpen && <div className="fixed inset-0 z-50 lg:hidden"><button aria-label="Close navigation overlay" onClick={()=>setMobileOpen(false)} className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"/><div className="relative h-full w-fit shadow-2xl"><Sidebar mobile activeTab={activeTab} setActiveTab={setActiveTab} onClose={()=>setMobileOpen(false)}/></div></div>}

        <section className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[#e5e5e7] bg-white/95 px-3 backdrop-blur sm:px-4 md:px-6">
            <div className="flex min-w-0 items-center gap-2">
              <button onClick={()=>setMobileOpen(true)} className="rounded-lg p-2 transition hover:bg-black/5 lg:hidden" aria-label="Open navigation"><Menu className="h-5 w-5"/></button>
              {sidebarCollapsed && <button onClick={toggleSidebar} className="hidden rounded-lg p-2 transition hover:bg-black/5 lg:inline-flex" aria-label="Show sidebar" title="Show sidebar"><PanelLeftOpen className="h-5 w-5"/></button>}
              <div className="min-w-0"><h1 className="truncate text-sm font-semibold">{activeTab}</h1><p className={`text-[11px] ${secondary}`}>RGL-114</p></div>
            </div>

            <div className="flex items-center gap-2">
              <button className="hidden h-9 items-center gap-2 rounded-lg border border-[#dedee1] bg-white px-3 text-xs text-[#6e6e73] transition hover:bg-[#f7f7f8] md:flex"><Search className="h-4 w-4"/>Search sections…</button>
              <button onClick={toggleTheme} aria-pressed={dark} aria-label={dark?'Switch to light mode':'Switch to dark mode'} title={dark?'Light mode':'Dark mode'} className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#dedee1] bg-white transition hover:bg-[#f7f7f8]">{dark?<Sun className="h-4 w-4"/>:<Moon className="h-4 w-4"/>}</button>
              <button aria-label="Notifications" className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#dedee1] bg-white transition hover:bg-[#f7f7f8]"><Bell className="h-4 w-4"/><span className="absolute -right-1 -top-1 rounded-full bg-[#b42318] px-1 text-[9px] font-semibold text-white">9+</span></button>
              <button className="hidden h-9 items-center gap-2 rounded-lg border border-[#dedee1] bg-white px-2.5 text-xs font-medium transition hover:bg-[#f7f7f8] sm:flex"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ececee]">A</span><ChevronDown className={`h-3.5 w-3.5 ${secondary}`}/></button>
            </div>
          </header>

          <div className={`mx-auto w-full p-3 sm:p-4 md:p-6 lg:p-7 ${sidebarCollapsed?'max-w-[1680px]':'max-w-[1480px]'}`}>
            {views[activeTab]}
          </div>
        </section>
      </div>
    </main>
  );
}
