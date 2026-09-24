'use client';

import { useEffect, useState, type ReactNode } from 'react';
import {
  LayoutDashboard, BadgeCheck, CalendarDays, Building2, ClipboardList, FileText,
  Settings, Bell, Search, ChevronDown, CheckCircle2, Clock3, AlertTriangle,
  ShieldCheck, PanelLeftClose, PanelLeftOpen, Menu, X, PoundSterling, Network,
  FolderArchive, ListChecks, GitCompareArrows, ScanSearch, Library, MessageSquareText,
  Filter, ArrowUpDown, MoreHorizontal, Check, Upload, ChevronRight
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
      className={`group relative flex items-center gap-2 py-3 text-sm font-medium transition ${view===id?'text-[#111214]':'text-[#7a7d84] hover:text-[#111214]'}`}
    >
      <span>{label}</span>
      <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium transition ${view===id?'bg-[#111214] text-white':'bg-[#f0f0f2] text-[#7a7d84] group-hover:bg-[#e7e7e9]'}`}>{count}</span>
      {view===id&&<span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#111214]"/>}
    </button>
  );

  return (
    <div className="mx-auto max-w-[1380px]">
      <section className="mb-8 border-b border-[#dcdde1] pb-8">
        <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8a8d94]">
          <span>Compliance</span><ChevronRight className="h-3.5 w-3.5"/><span>Evidence</span>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,.55fr)] xl:items-end">
          <div>
            <h2 className="max-w-[880px] text-[clamp(38px,5vw,68px)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#111214]">
              Substance evidence,
              <span className="block text-[#7c7f86]">made review-ready.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#686b72]">
              Keep proof of Gibraltar presence structured, searchable and ready for internal review or a regulator request.
            </p>
          </div>

          <div className="grid grid-cols-3 divide-x divide-[#dedfe3] border-y border-[#dedfe3] xl:grid-cols-1 xl:divide-x-0 xl:divide-y xl:border-x-0">
            {[
              ['05','records'],
              ['01','needs review'],
              ['02','dated'],
            ].map(([value,label])=>(
              <div key={label} className="px-4 py-4 xl:px-0 xl:py-3.5">
                <div className="text-[26px] font-semibold tracking-[-0.04em] text-[#17181b]">{value}</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#8a8d94]">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-2">
          <button className="inline-flex h-10 items-center gap-2 rounded-full bg-[#111214] px-4 text-sm font-medium text-white transition hover:translate-y-[-1px] hover:bg-black">
            <Upload className="h-4 w-4"/>Add evidence
          </button>
          <button className="h-10 rounded-full border border-[#d7d8dc] bg-white px-4 text-sm font-medium text-[#33353a] transition hover:border-[#bfc1c6] hover:bg-[#fafafa]">
            Regulator request
          </button>
          <span className="ml-auto hidden text-xs text-[#92949a] md:block">Last updated 5 Sep 2026</span>
        </div>
      </section>

      <div className="mb-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="rounded-2xl border border-[#e0e1e4] bg-[#f8f8f9] px-4 py-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#dedfe3] bg-white">
              <ShieldCheck className="h-4 w-4 text-[#42454b]"/>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#222327]">Evidence is recorded, not independently verified</p>
              <p className="mt-1 max-w-3xl text-xs leading-5 text-[#74777e]">Review states reflect your team’s workflow. GibComply keeps the record, history and supporting document together.</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#dfe0e3] bg-white px-4 py-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8a8d94]">Review coverage</div>
          <div className="mt-2 flex items-end justify-between">
            <span className="text-3xl font-semibold tracking-[-0.045em] text-[#17181b]">80%</span>
            <span className="text-xs text-[#74777e]">4 of 5 reviewed</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#ececef]"><div className="h-full w-4/5 rounded-full bg-[#17181b]"/></div>
        </div>
      </div>

      <section className="overflow-hidden rounded-2xl border border-[#dddfe3] bg-white shadow-[0_8px_30px_rgba(17,18,20,0.045)]">
        <div className="flex flex-col gap-4 border-b border-[#e5e6e9] px-5 pt-1 md:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex gap-7 overflow-x-auto">
            {viewButton('all','All records',records.length)}
            {viewButton('review','Needs review',records.filter(r=>r.status!=='Reviewed').length)}
            {viewButton('expiring','With validity date',records.filter(r=>r.valid!=='Not set').length)}
          </div>
          <div className="flex items-center gap-2 pb-3">
            <button className="inline-flex h-9 items-center gap-2 rounded-full border border-[#d9dade] bg-white px-3 text-sm font-medium text-[#4c4f55] transition hover:bg-[#f7f7f8]"><Filter className="h-4 w-4"/>Filter</button>
            <button className="inline-flex h-9 items-center gap-2 rounded-full border border-[#d9dade] bg-white px-3 text-sm font-medium text-[#4c4f55] transition hover:bg-[#f7f7f8]"><ArrowUpDown className="h-4 w-4"/>Sort</button>
          </div>
        </div>

        <div className="border-b border-[#e7e8eb] bg-[#fbfbfc] px-5 py-4 md:px-6">
          <label className="relative block max-w-xl">
            <Search className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8b8e95]"/>
            <input
              value={query}
              onChange={e=>setQuery(e.target.value)}
              placeholder="Search by document, category, file or status"
              className="h-9 w-full border-0 bg-transparent pl-6 pr-3 text-sm text-[#25262a] outline-none placeholder:text-[#9a9ca2]"
            />
            <span className="absolute inset-x-0 bottom-0 h-px bg-[#d9dade]"/>
          </label>

          {selected.length>0&&(
            <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl border border-[#d8d9dd] bg-white px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,.03)]">
              <span className="text-xs font-semibold text-[#313338]">{selected.length} selected</span>
              <span className="h-4 w-px bg-[#dedfe2]"/>
              <button className="text-xs font-medium text-[#313338] hover:underline">Mark reviewed</button>
              <button className="text-xs font-medium text-[#313338] hover:underline">Export</button>
              <button onClick={()=>setSelected([])} className="ml-auto text-xs text-[#777a81] hover:text-[#1d1d1f]">Clear</button>
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1020px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#e7e8eb] bg-white text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8a8d94]">
                <th className="w-11 px-5 py-3">
                  <button onClick={toggleAll} aria-label="Select visible records" className={`flex h-4 w-4 items-center justify-center rounded-[4px] border transition ${allVisibleSelected?'border-[#111214] bg-[#111214] text-white':'border-[#c7c8cc] bg-white'}`}>
                    {allVisibleSelected&&<Check className="h-3 w-3"/>}
                  </button>
                </th>
                <th className="px-2 py-3">Document</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Valid until</th>
                <th className="px-4 py-3">Uploaded</th>
                <th className="px-4 py-3">Review</th>
                <th className="w-12 px-4 py-3"/>
              </tr>
            </thead>
            <tbody>
              {visible.map(r=>{
                const checked=selected.includes(r.id);
                return (
                  <tr key={r.id} className={`group border-b border-[#ececef] last:border-0 transition duration-200 hover:bg-[#fafafa] ${checked?'bg-[#f6f6f7]':''}`}>
                    <td className="px-5 py-4">
                      <button onClick={()=>toggle(r.id)} aria-label={`Select ${r.document}`} className={`flex h-4 w-4 items-center justify-center rounded-[4px] border transition ${checked?'border-[#111214] bg-[#111214] text-white':'border-[#c7c8cc] bg-white'}`}>
                        {checked&&<Check className="h-3 w-3"/>}
                      </button>
                    </td>
                    <td className="px-2 py-4">
                      <button className="block max-w-[420px] text-left">
                        <span className="block truncate text-sm font-semibold text-[#242529] transition group-hover:text-black">{r.document}</span>
                        <span className="mt-1 block truncate text-xs text-[#8a8d94]">{r.file}</span>
                      </button>
                    </td>
                    <td className="px-4 py-4 text-sm text-[#5e6167]">{r.category}</td>
                    <td className="px-4 py-4 text-sm text-[#5e6167]">{r.valid}</td>
                    <td className="px-4 py-4 text-sm text-[#5e6167]">{r.uploaded}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center gap-2 text-xs font-medium ${r.status==='Reviewed'?'text-[#27643c]':'text-[#8b621a]'}`}>
                        <span className={`h-2 w-2 rounded-full ${r.status==='Reviewed'?'bg-[#4f9a67]':'bg-[#c58b2c]'}`}/>
                        {r.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <button aria-label={`Actions for ${r.document}`} className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#777a81] opacity-50 transition hover:bg-[#efeff1] hover:text-[#1d1d1f] group-hover:opacity-100"><MoreHorizontal className="h-4 w-4"/></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {visible.length===0&&(
            <div className="px-6 py-16 text-center">
              <p className="text-sm font-semibold text-[#303136]">No evidence in this view</p>
              <p className="mt-1 text-xs text-[#83868d]">Try a different search or switch views.</p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 bg-[#fbfbfc] px-5 py-3.5 text-xs text-[#777a81] sm:flex-row sm:items-center sm:justify-between md:px-6">
          <span>{visible.length} of {records.length} records</span>
          <div className="flex items-center gap-1">
            <button disabled className="rounded-full border border-[#dedfe3] bg-white px-3 py-1.5 disabled:text-[#b6b8bd]">Previous</button>
            <button disabled className="rounded-full border border-[#dedfe3] bg-white px-3 py-1.5 disabled:text-[#b6b8bd]">Next</button>
          </div>
        </div>
      </section>
    </div>
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
