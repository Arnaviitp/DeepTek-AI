import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const plans = [
        {
            name: 'Starter',
            price: '₹0',
            period: '/month',
            desc: 'Perfect for trying out our platform.',
            features: [
                'Up to 50 scans per month',
                'Basic AI Reporting',
                'Email Support',
                '1 User'
            ],
            cta: 'Start Free',
            popular: false
        },
        {
            name: 'Pro',
            price: '₹4,999',
            period: '/month',
            desc: 'For growing clinics and radiologists.',
            features: [
                'Unlimited scans',
                'Advanced AI Analysis',
                'Priority 24/7 Support',
                'Up to 5 Users',
                'Custom Templates'
            ],
            cta: 'Get Started',
            popular: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            desc: 'For large hospitals and networks.',
            features: [
                'Unlimited Everything',
                'Dedicated Success Manager',
                'On-premise Deployment',
                'API Access',
                'SLA Guarantee'
            ],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
                <p className="text-xl text-gray-400">Choose the plan that fits your needs.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div key={plan.name} className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-blue-500 bg-blue-900/10' : 'border-white/10 bg-white/5'} flex flex-col`}>
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-lg font-medium text-gray-400 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                                <span className="text-gray-500">{plan.period}</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-4">{plan.desc}</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-blue-400' : 'text-gray-500'}`} />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/signup"
                            className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.popular
                                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                                : 'bg-white text-black hover:bg-gray-200'
                                }`}
                        >
                            {plan.cta}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
