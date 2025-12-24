export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
        <div className="text-lg font-bold">فلذة</div>
        <a
          href="#download"
          className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white"
        >
          تحميل التطبيق
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
            فلذة – متابعة الحمل أسبوعًا بأسبوع
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            تطبيق عربي يساعدك على متابعة حملك، مع تنبيهات أسبوعية، حاسبة الحمل،
            ومحتوى موثوق.
          </p>

          <div id="download" className="mt-6 flex gap-3">
            <button className="rounded-2xl bg-violet-600 px-6 py-3 text-white font-semibold">
              App Store
            </button>
            <button className="rounded-2xl border px-6 py-3 font-semibold">
              Google Play
            </button>
          </div>
        </div>

        {/* Mock phone */}
        <div className="flex items-center justify-center">
          <div className="h-[520px] w-[280px] rounded-[2rem] border bg-slate-50 p-4">
            <div className="h-full rounded-[1.5rem] bg-white p-4">
              <div className="font-semibold">الأسبوع 24</div>
              <p className="mt-2 text-sm text-slate-500">
                نمو الجنين + أهم النصائح للأم
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} فلذة
      </footer>
    </main>
  );
}
