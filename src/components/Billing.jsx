import React, { useState } from 'react';
import { CreditCard, Download, Calendar, CheckCircle, ArrowUpRight, FileText, DollarSign, Clock, AlertCircle } from 'lucide-react';

const Billing = () => {
    const [billingPeriod, setBillingPeriod] = useState('monthly');

    const currentPlan = {
        name: 'Pro',
        price: billingPeriod === 'monthly' ? '$299' : '$2,990',
        period: billingPeriod === 'monthly' ? '/month' : '/year',
        features: [
            'Unlimited scans',
            'Advanced AI Analysis',
            'Priority 24/7 Support',
            'Up to 5 Users',
            'Custom Templates'
        ],
        nextBilling: 'January 28, 2025',
        usage: {
            scans: { used: 1247, limit: 'Unlimited' },
            users: { used: 3, limit: 5 },
            storage: { used: 45, limit: 100, unit: 'GB' }
        }
    };

    const invoices = [
        { id: 'INV-2024-012', date: 'Dec 28, 2024', amount: '$299.00', status: 'Paid' },
        { id: 'INV-2024-011', date: 'Nov 28, 2024', amount: '$299.00', status: 'Paid' },
        { id: 'INV-2024-010', date: 'Oct 28, 2024', amount: '$299.00', status: 'Paid' },
        { id: 'INV-2024-009', date: 'Sep 28, 2024', amount: '$299.00', status: 'Paid' },
        { id: 'INV-2024-008', date: 'Aug 28, 2024', amount: '$299.00', status: 'Paid' }
    ];

    const paymentMethods = [
        { type: 'Visa', last4: '4242', expiry: '12/26', default: true },
        { type: 'Mastercard', last4: '8888', expiry: '03/25', default: false }
    ];

    return (
        <div className="p-8 max-w-6xl mx-auto h-full overflow-y-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Billing & Subscription</h1>
                <p className="text-gray-400">Manage your subscription, payment methods, and invoices</p>
            </div>

            {/* Current Plan */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 bg-[#1E293B] border border-gray-700 rounded-2xl p-6">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h2 className="text-xl font-bold">Current Plan</h2>
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                                    {currentPlan.name}
                                </span>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">{currentPlan.price}</span>
                                <span className="text-gray-400">{currentPlan.period}</span>
                            </div>
                        </div>
                        <button className="px-4 py-2 bg-white/5 border border-gray-600 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">
                            Change Plan
                        </button>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Calendar className="w-4 h-4" />
                        Next billing date: <span className="text-white">{currentPlan.nextBilling}</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <div className="text-sm text-gray-400 mb-2">Included Features</div>
                            {currentPlan.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            <div className="text-sm text-gray-400 mb-2">Usage This Month</div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Scans Processed</span>
                                    <span className="text-green-400">{currentPlan.usage.scans.used}</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }} />
                                </div>
                                <div className="text-xs text-gray-500 mt-1">{currentPlan.usage.scans.limit}</div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Users</span>
                                    <span>{currentPlan.usage.users.used} / {currentPlan.usage.users.limit}</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(currentPlan.usage.users.used / currentPlan.usage.users.limit) * 100}%` }} />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Storage</span>
                                    <span>{currentPlan.usage.storage.used} / {currentPlan.usage.storage.limit} {currentPlan.usage.storage.unit}</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${(currentPlan.usage.storage.used / currentPlan.usage.storage.limit) * 100}%` }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Payment Methods</h2>
                        <button className="text-blue-400 text-sm hover:underline">+ Add</button>
                    </div>
                    <div className="space-y-4">
                        {paymentMethods.map((method, i) => (
                            <div key={i} className={`p-4 rounded-xl border ${method.default ? 'border-blue-500/50 bg-blue-500/5' : 'border-gray-700'}`}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <CreditCard className="w-5 h-5 text-gray-400" />
                                        <span className="font-medium">{method.type}</span>
                                    </div>
                                    {method.default && (
                                        <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Default</span>
                                    )}
                                </div>
                                <div className="text-sm text-gray-400">
                                    •••• {method.last4} · Expires {method.expiry}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Invoices */}
            <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Billing History</h2>
                    <button className="flex items-center gap-2 text-blue-400 text-sm hover:underline">
                        <Download className="w-4 h-4" />
                        Download All
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-sm text-gray-400 border-b border-gray-700">
                                <th className="pb-3 font-medium">Invoice</th>
                                <th className="pb-3 font-medium">Date</th>
                                <th className="pb-3 font-medium">Amount</th>
                                <th className="pb-3 font-medium">Status</th>
                                <th className="pb-3 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((invoice, i) => (
                                <tr key={i} className="border-b border-gray-700/50 last:border-0">
                                    <td className="py-4">
                                        <div className="flex items-center gap-3">
                                            <FileText className="w-5 h-5 text-gray-400" />
                                            <span className="font-medium">{invoice.id}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 text-gray-400">{invoice.date}</td>
                                    <td className="py-4">{invoice.amount}</td>
                                    <td className="py-4">
                                        <span className="flex items-center gap-2 text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="py-4 text-right">
                                        <button className="text-blue-400 hover:underline text-sm flex items-center gap-1 ml-auto">
                                            Download
                                            <Download className="w-3 h-3" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Cancel Subscription */}
            <div className="mt-8 p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-lg mb-2">Cancel Subscription</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            We'd hate to see you go. Before you cancel, please consider downgrading to our Starter plan or contacting support to discuss your concerns.
                        </p>
                        <button className="text-red-400 text-sm hover:underline">
                            Cancel Subscription
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billing;
