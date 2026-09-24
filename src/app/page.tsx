'use client';

import {
  LayoutDashboard,
  BadgeCheck,
  CalendarDays,
  Building2,
  ClipboardList,
  FileText,
  Users,
  Settings,
  Bell,
  Search,
  ChevronDown,
  CheckCircle2,
  Clock3,
  AlertTriangle,
} from 'lucide-react';

const nav = [
  [LayoutDashboard, 'Dashboard'],
  [BadgeCheck, 'Licences'],
  [CalendarDays, 'Calendar'],
  [Building2, 'Suppliers'],
  [ClipboardList, 'Substance'],
  [FileText, 'Reports'],
  [FileText, 'Audit'],
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

export default function Page() {
  return (
    <main className="flex min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <aside className="hidden w-[248px] shrink-0 border-r border-[#e5e5e7] bg-white lg:flex lg:flex-col">
        <div className="flex h-16 items-center border-b border-[#e5e5e7] px-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1d1d1f] text-sm font-semibold text-white">G</div>
          <div className="ml-3">
            <div className="text-sm font-semibold">GibComply</div>
            <div className="text-[11px] text-[#6e6e73]">Acme Interactive Ltd</div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4">
          <div className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8a8a8f]">Workspace</div>
          <div className="space-y-1">
            {nav.map(([Icon, label], index) => {
              const I = Icon as typeof LayoutDashboard;
              return (
                <button key={label as string} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm ${index === 0 ? 'bg-[#f1f1f3] font-medium text-[#1d1d1f]' : 'text-[#5f6368] hover:bg-[#f7f7f8]'}`}>
                  <I className="h-4 w-4" />
                  <span>{label as string}</span>
                  {label === 'Calendar' && <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#fff1f0] px-1.5 text-[10px] font-semibold text-[#b42318]">2</span>}
                </button>
              );
            })}
          </div>

          <div className="mb-2 mt-6 px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8a8a8f]">Access</div>
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-[#5f6368] hover:bg-[#f7f7f8]"><Users className="h-4 w-4" />Advisers</button>
        </nav>

        <div className="border-t border-[#e5e5e7] p-3">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-[#5f6368] hover:bg-[#f7f7f8]"><Settings className="h-4 w-4" />Settings</button>
        </div>
      </aside>

      <section className="min-w-0 flex-1">
        <header className="flex h-16 items-center justify-between border-b border-[#e5e5e7] bg-white px-5 md:px-7">
          <div>
            <h1 className="text-sm font-semibold">Dashboard</h1>
            <p className="text-[11px] text-[#6e6e73]">RGL-114</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden h-9 items-center gap-2 rounded-lg border border-[#dedee1] bg-white px-3 text-xs text-[#6e6e73] md:flex"><Search className="h-4 w-4" />Search</button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#dedee1] bg-white"><Bell className="h-4 w-4" /></button>
            <button className="flex h-9 items-center gap-2 rounded-lg border border-[#dedee1] bg-white px-2.5 text-xs font-medium">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ececee]">A</span>
              <ChevronDown className="h-3.5 w-3.5 text-[#777]"/>
            </button>
          </div>
        </header>

        <div className="mx-auto w-full max-w-[1460px] p-5 md:p-7">
          <div className="mb-6">
            <p className="mb-1 text-sm text-[#6e6e73]">Acme Interactive Ltd</p>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] md:text-[28px]">Welcome, Alexandra</h2>
          </div>

          <section className="mb-5 overflow-hidden rounded-xl border border-[#dedee1] bg-white">
            <div className="flex flex-col gap-5 p-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-medium text-[#6e6e73]">Compliance readiness</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold tracking-[-0.04em]">82%</span>
                  <span className="text-xs text-[#6e6e73]">9 of 11 controls in place</span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#edf8f0] px-2.5 py-1 text-xs font-medium text-[#137333]"><CheckCircle2 className="h-3.5 w-3.5"/>Licence current</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff7e6] px-2.5 py-1 text-xs font-medium text-[#9a6700]"><Clock3 className="h-3.5 w-3.5"/>2 actions due</span>
              </div>
            </div>
            <div className="h-1 bg-[#eeeeef]"><div className="h-full w-[82%] bg-[#0071e3]"/></div>
          </section>

          <div className="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {[
              ['Licences', '4', 'All current'],
              ['Regulated people', '7', '1 review due'],
              ['Suppliers', '12', '1 review due'],
              ['Open deadlines', '6', '2 due soon'],
            ].map(([label, value, meta]) => (
              <div key={label} className="rounded-xl border border-[#dedee1] bg-white p-4">
                <p className="text-xs text-[#6e6e73]">{label}</p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.03em]">{value}</p>
                <p className="mt-1 text-xs text-[#85858a]">{meta}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
            <div className="rounded-xl border border-[#dedee1] bg-white">
              <div className="flex items-center justify-between border-b border-[#ececee] px-5 py-4">
                <div>
                  <h3 className="text-sm font-semibold">Statutory calendar</h3>
                  <p className="mt-0.5 text-xs text-[#6e6e73]">Upcoming regulatory and internal deadlines</p>
                </div>
                <button className="rounded-lg bg-[#0071e3] px-3 py-2 text-xs font-medium text-white">Add deadline</button>
              </div>
              <div>
                {deadlines.map(([title, date, status], i) => (
                  <div key={title} className="grid grid-cols-[1fr_auto] gap-4 border-b border-[#efeff0] px-5 py-4 last:border-b-0">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        {i === 0 ? <AlertTriangle className="h-4 w-4 shrink-0 text-[#b54708]"/> : <CalendarDays className="h-4 w-4 shrink-0 text-[#777]"/>}
                        <p className="truncate text-sm font-medium">{title}</p>
                      </div>
                      <p className="ml-6 mt-1 text-xs text-[#6e6e73]">{status}</p>
                    </div>
                    <div className="text-right text-xs font-medium text-[#454549]">{date}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-xl border border-[#dedee1] bg-white">
                <div className="border-b border-[#ececee] px-5 py-4"><h3 className="text-sm font-semibold">Regulated people</h3></div>
                <div className="divide-y divide-[#efeff0]">
                  {[
                    ['Alexandra Reed', 'Director'],
                    ['Marcus Cole', 'MLRO'],
                    ['Sofia Bennett', 'Compliance Officer'],
                  ].map(([name, role]) => (
                    <div key={name} className="flex items-center justify-between px-5 py-3.5">
                      <div><p className="text-sm font-medium">{name}</p><p className="text-xs text-[#6e6e73]">{role}</p></div>
                      <span className="text-xs font-medium text-[#137333]">Current</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-[#dedee1] bg-white p-5">
                <h3 className="text-sm font-semibold">Statutory basis</h3>
                <p className="mt-2 text-xs leading-5 text-[#6e6e73]">Gibraltar Gambling Act 2025 workspace tracking and evidence register.</p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-[#dedee1] bg-white">
            <div className="border-b border-[#ececee] px-5 py-4"><h3 className="text-sm font-semibold">Supplier watchlist</h3></div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left">
                <thead className="border-b border-[#ececee] bg-[#fafafa] text-[11px] font-medium uppercase tracking-[0.04em] text-[#76767b]">
                  <tr><th className="px-5 py-3">Supplier</th><th className="px-5 py-3">Service</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Due diligence</th></tr>
                </thead>
                <tbody>
                  {suppliers.map(([name, service, status], i) => (
                    <tr key={name} className="border-b border-[#efeff0] last:border-b-0">
                      <td className="px-5 py-3.5 text-sm font-medium">{name}</td>
                      <td className="px-5 py-3.5 text-sm text-[#5f6368]">{service}</td>
                      <td className="px-5 py-3.5 text-xs"><span className={i===0?'text-[#9a6700]':'text-[#137333]'}>{status}</span></td>
                      <td className="px-5 py-3.5 text-xs text-[#5f6368]">{i===0?'15 Oct 2026':'Complete'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
