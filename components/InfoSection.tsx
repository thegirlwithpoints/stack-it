export default function InfoSection() {
  return (
    <div className="mt-8 space-y-4">
      {/* Card Offer Disclaimer */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
        <p className="text-sm font-bold text-amber-900 mb-1">⚠️ About Card Offers</p>
        <p className="text-sm text-amber-800 leading-relaxed">
          Offers shown may not match yours exactly — every cardholder&apos;s targeted offers can
          differ, and yours could be even better! Always log into your card&apos;s offers portal to
          confirm your specific offer before shopping, and{' '}
          <span className="font-bold">activate it before you check out.</span>
        </p>
      </div>

      {/* Percentage cap disclaimer */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
        <p className="text-sm font-bold text-amber-900 mb-1">💡 Heads Up on Percentage Deals</p>
        <p className="text-sm text-amber-800 leading-relaxed">
          Any deal listed as a percentage back has a <span className="font-bold">maximum dollar cap</span> —
          confirm the exact limit for your card in your credit card offers portal before shopping.
        </p>
      </div>

      {/* How to Stack */}
      <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4">
        <p className="text-sm font-bold text-green-900 mb-2">✅ How to Stack with Rakuten</p>
        <ol className="space-y-1.5">
          {[
            'Activate your card offer in your credit card portal.',
            "Open Rakuten and find your store through the portal — do not navigate directly to the retailer's site.",
            'Review all inclusions, exclusions, and Rakuten-approved promo codes before purchasing.',
            'Complete your purchase entirely within the Rakuten portal.',
          ].map((step, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-green-800">
              <span className="flex-shrink-0 font-bold text-green-700">{i + 1}.</span>
              <span className="leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
