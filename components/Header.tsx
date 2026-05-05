export default function Header() {
  return (
    <header className="text-center pt-8 pb-4 px-4">
      <div className="inline-flex items-center gap-2 mb-1">
        <span className="text-2xl">🃏</span>
        <h1 className="text-4xl font-black tracking-tight text-gray-900">
          Stack It
        </h1>
      </div>
      <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-2">
        by @thegirlwithpoints
      </p>
      <p className="text-lg text-gray-600 font-medium">
        Same purchase.{' '}
        <span className="text-gray-900 font-bold">Double reward.</span>
      </p>
    </header>
  );
}
