"use client";

import Link from 'next/link';
import React from 'react';

export default function TestPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Test Links Page</h1>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">CRO Services Links</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            <Link href="/services/cro-services/CRO-Audits" className="text-blue-600 hover:underline">
              CRO Audits (capitalized)
            </Link>
          </li>
          <li>
            <Link href="/services/cro-services/cro-audits" className="text-blue-600 hover:underline">
              CRO Audits (lowercase)
            </Link>
          </li>
          <li>
            <Link href="/services/cro-services/User-Experience-Testing" className="text-blue-600 hover:underline">
              User Experience Testing (capitalized)
            </Link>
          </li>
          <li>
            <Link href="/services/cro-services/user-experience-testing" className="text-blue-600 hover:underline">
              User Experience Testing (lowercase)
            </Link>
          </li>
          <li>
            <Link href="/services/cro-services/User-Behavior-Analytics" className="text-blue-600 hover:underline">
              User Behavior Analytics (capitalized)
            </Link>
          </li>
          <li>
            <Link href="/services/cro-services/user-behavior-analytics" className="text-blue-600 hover:underline">
              User Behavior Analytics (lowercase)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
} 