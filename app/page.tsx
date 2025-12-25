import Script from "next/script";
function StoreButton({
  variant,
  label,
  sub,
  href,
}: {
  variant: "primary" | "ghost";
  label: string;
  sub: string;
  href: string;
}) {
  const base =
    "inline-flex items-center gap-3 rounded-2xl px-5 py-3 transition active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-purple-300";
  const style =
    variant === "primary"
      ? "bg-purple-600 text-white hover:bg-purple-700 shadow-sm"
      : "bg-white/70 text-zinc-900 hover:bg-white border border-zinc-200";

  return (
    <a href={href} className={`${base} ${style}`}>
      <span className="grid place-items-center w-10 h-10 rounded-xl bg-black/5">
        {/* simple store glyph */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 21h10a2 2 0 0 0 2-2v-8H5v8a2 2 0 0 0 2 2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M4 11 6.2 4.8A2 2 0 0 1 8.08 3.5h7.84a2 2 0 0 1 1.88 1.3L20 11"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 11a3 3 0 0 0 6 0"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-right">
        <span className="block text-[11px] opacity-80 leading-4">{sub}</span>
        <span className="block font-semibold leading-5">{label}</span>
      </span>
    </a>
  );
}

function SoftWave() {
  return (
    <div className="absolute inset-x-0 -bottom-1 pointer-events-none">
      <svg
        viewBox="0 0 1440 220"
        className="w-full h-[140px] md:h-[180px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,160 C180,220 360,220 540,180 C720,140 900,80 1080,110 C1260,140 1350,190 1440,200 L1440,220 L0,220 Z"
          fill="rgba(124,58,237,0.10)"
        />
        <path
          d="M0,140 C220,200 420,210 600,170 C780,130 920,70 1100,95 C1280,120 1360,170 1440,185 L1440,220 L0,220 Z"
          fill="rgba(192,132,252,0.14)"
        />
      </svg>
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[290px] sm:w-[320px]">
      <div className="absolute -inset-6 rounded-[42px] bg-gradient-to-b from-purple-200/40 to-white/0 blur-2xl" />
      <div className="relative rounded-[40px] border border-zinc-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)] overflow-hidden">
        <div className="h-10 bg-gradient-to-r from-purple-600/20 to-purple-300/10" />
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div className="text-sm font-bold">الأسبوع 24</div>
            <span className="text-[11px] rounded-full bg-purple-600/10 text-purple-700 px-3 py-1">
              تنبيه أسبوعي
            </span>
          </div>

          <div className="mt-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-4">
            <div className="text-xs text-zinc-500">نمو الجنين</div>
            <div className="mt-1 font-semibold">حركة أوضح + زيادة الوزن</div>
            <div className="mt-2 text-sm text-zinc-600 leading-6">
              نصائح مريحة وسهلة تساعدك على يومك… بدون قلق.
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-3xl border border-zinc-200 bg-white p-4">
              <div className="text-xs text-zinc-500">حاسبة الحمل</div>
              <div className="mt-1 font-semibold">موعد الولادة</div>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-4">
              <div className="text-xs text-zinc-500">نصائح يومية</div>
              <div className="mt-1 font-semibold">حسب أسبوعك</div>
            </div>
          </div>

          <div className="mt-5 rounded-3xl bg-purple-600 text-white p-4">
            <div className="text-sm font-bold">ملخص اليوم</div>
            <div className="mt-1 text-sm opacity-90">
              شرب ماء + حركة خفيفة + فيتاميناتك
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[radial-gradient(1000px_700px_at_70%_-10%,rgba(192,132,252,0.25),transparent_60%),radial-gradient(900px_650px_at_10%_10%,rgba(124,58,237,0.18),transparent_55%),linear-gradient(#ffffff,#ffffff)] text-zinc-900"
    >
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="فلذة" className="h-10 w-auto" />
        <span className="font-extrabold tracking-tight">فلذة</span>
            </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#features" className="hover:text-zinc-900">
              المميزات
            </a>
            <a href="#preview" className="hover:text-zinc-900">
              صور من التطبيق
            </a>
            <a href="/privacy" className="hover:text-zinc-900">
              الخصوصية
            </a>
            <a href="#faq" className="hover:text-zinc-900">الأسئلة الشائعة</a>

          </nav>

          <a
            href="#download"
            className="rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white hover:bg-purple-700 shadow-sm"
          >
            تحميل التطبيق
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-24 md:pt-20 md:pb-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-600/10 text-purple-700 px-4 py-2 text-xs font-semibold">
              <span className="inline-block w-2 h-2 rounded-full bg-purple-600" />
              طمأنينة في كل أسبوع
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight">
              فلذة — متابعة الحمل{" "}
              <span className="text-purple-700">من أول أسبوع حتى الولادة</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600 max-w-xl">
              تطبيق مصمم خصيصًا لمرافقتك في رحلة الحمل من أول أسبوع حتى الولادة،
              <br />
              بتنبيهات ذكية، محتوى موثوق، وتجربة هادئة تقلّل القلق وتزيد الطمأنينة.
            </p>

            <div id="download" className="mt-8 flex flex-wrap gap-3">
              <StoreButton variant="primary" label="App Store" sub="تحميل من" href="#" />
              <StoreButton variant="ghost" label="Google Play" sub="تحميل من" href="#" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  ✓
                </span>
                خصوصية واحترام للبيانات
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
                  ★
                </span>
                مناسب للمرأة العربية
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-600/10 text-purple-700">
                  ♡
                </span>
                تصميم هادئ بدون إزعاج
              </div>
            </div>
          </div>

          <div className="md:justify-self-end">
            <PhoneMock />
          </div>
        </div>

        <SoftWave />
      </section>

      {/* Pregnancy Calculator SEO Section */}
      <section
        id="pregnancy-calculator"
        className="mx-auto max-w-6xl px-5 sm:px-8 py-14 md:py-16"
      >
        <div className="rounded-[36px] border border-zinc-200 bg-white/70 p-8 md:p-12 shadow-[0_20px_60px_rgba(124,58,237,0.08)] backdrop-blur">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                حاسبة الحمل الدقيقة — احسبي موعد الولادة بسهولة
              </h2>

              <p className="mt-4 text-zinc-600 leading-7">
                تساعدك{" "}
                <span className="font-semibold text-zinc-800">حاسبة الحمل</span>{" "}
                في تطبيق فلذة على حساب موعد الولادة المتوقع ومعرفة عمر الحمل بدقة،
                سواء باستخدام{" "}
                <span className="font-semibold text-zinc-800">
                  حاسبة الحمل بالميلادي
                </span>{" "}
                أو{" "}
                <span className="font-semibold text-zinc-800">
                  حاسبة الحمل بالهجري
                </span>
                ، مع متابعة أسبوعية توضّح تطور الجنين وتغيّرات جسمك خطوة بخطوة.
              </p>

              <p className="mt-4 text-zinc-600 leading-7">
                كثير من الأمهات يبحثن عن{" "}
                <span className="font-semibold text-zinc-800">"حاسبة حملي"</span>{" "}
                لمعرفة المرحلة الحالية من الحمل، وفلذة يقدّم لكِ تجربة هادئة ومريحة
                مع تنبيهات ذكية ومحتوى موثوق يساعدك على الاطمئنان.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#download"
                  className="rounded-2xl bg-purple-600 px-6 py-3 text-white font-semibold hover:bg-purple-700 shadow-sm"
                >
                  ابدئي باستخدام حاسبة الحمل
                </a>
                <a
                  href="#features"
                  className="rounded-2xl border border-zinc-200 bg-white/60 px-6 py-3 font-semibold hover:bg-white"
                >
                  اكتشفي مميزات فلذة
                </a>
              </div>
            </div>

            <div className="w-full md:w-[360px]">
              <div className="rounded-3xl border border-zinc-200 bg-gradient-to-l from-purple-50 to-white p-6">
                <div className="text-sm font-bold">ماذا ستحصلين؟</div>
                <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-purple-600" />
                    حساب موعد الولادة المتوقع بسهولة
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-purple-600" />
                    معرفة عمر الحمل أسبوعًا بأسبوع
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-purple-600" />
                    تنبيهات لطيفة حسب مرحلتك
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl bg-white border border-zinc-200 p-4">
                  <div className="text-xs text-zinc-500">معلومة مهمة</div>
                  <div className="mt-1 text-sm text-zinc-700 leading-6">
                    النتائج تقديرية وقد تختلف حسب الحالة. يُنصح بمراجعة طبيبتك للتأكيد.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-5 sm:px-8 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            كل ما تحتاجينه… في مكان واحد
          </h2>
          <p className="mt-4 text-zinc-600 leading-7">
            مميزات مصممة لراحتك: محتوى أسبوعي، استشارات، دورات، منتجات مساعدة، وخدمات منزلية تدعمك.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 1) Weekly articles */}
          <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-[0_8px_30px_rgba(124,58,237,0.06)] backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-purple-600/10 text-purple-700">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 4h9a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 8h11M7 12h11M7 16h8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">مقالات أسبوعية حسب أسبوعك</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  نصائح وتحذيرات وتغذية وحركة… بترتيب سهل ومريح.
                </p>
              </div>
            </div>
          </div>

          {/* 2) Medical consultations */}
          <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-[0_8px_30px_rgba(124,58,237,0.06)] backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-purple-600/10 text-purple-700">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10 7h4M12 5v4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 21h10a3 3 0 0 0 3-3V11a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v7a3 3 0 0 0 3 3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14h8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">استشارات طبية موثوقة</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  اسألي طبيبة مختصة وخذي توجيه واضح لحالتك.
                </p>
              </div>
            </div>
          </div>

          {/* 3) Courses */}
          <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-[0_8px_30px_rgba(124,58,237,0.06)] backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-purple-600/10 text-purple-700">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3 2 8l10 5 10-5-10-5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 10v6c0 1.5 3 3 6 3s6-1.5 6-3v-6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">دورات عن الحمل والأمومة</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  محتوى مرئي عملي يجهزك لكل مرحلة بثقة.
                </p>
              </div>
            </div>
          </div>

          {/* 4) Products */}
          <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-[0_8px_30px_rgba(124,58,237,0.06)] backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-purple-600/10 text-purple-700">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 7h12l-1 14H7L6 7Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 7a3 3 0 0 1 6 0"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">منتجات مختارة للحامل والرضيع</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  اختيار سريع لمنتجات مفيدة وآمنة تقلل الحيرة.
                </p>
              </div>
            </div>
          </div>

          {/* 5) Home care */}
          <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-[0_8px_30px_rgba(124,58,237,0.06)] backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-purple-600/10 text-purple-700">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 11 12 3l9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V11Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">رعاية منزلية للحامل</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  خدمات منزلية مريحة تدعمك حسب احتياجك.
                </p>
              </div>
            </div>
          </div>

          {/* 6) Smart notifications */}
          <div className="rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-[0_8px_30px_rgba(124,58,237,0.06)] backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-purple-600/10 text-purple-700">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 21a2 2 0 0 0 4 0"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">تنبيهات ذكية ولطيفة</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  تذكيرات مريحة بدون إزعاج — حسب أسبوعك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview */}
      <section id="preview" className="mx-auto max-w-6xl px-5 sm:px-8 pb-16 md:pb-20">
        <div className="rounded-[36px] border border-zinc-200 bg-white/70 p-8 md:p-12 shadow-[0_20px_60px_rgba(124,58,237,0.08)] backdrop-blur">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                واجهة مريحة… مصممة لكِ
              </h2>
              <p className="mt-4 text-zinc-600 leading-7">
                ألوان هادئة، مساحات واسعة، ومحتوى مرتب يخليك تركّزين على الأهم:
                صحتك وراحة بالك.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-600">
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">🤍 تجربة لطيفة للعين</div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">📌 محتوى مرتب حسب أسبوعك</div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">🔔 تنبيهات بدون إزعاج</div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">🔒 احترام للخصوصية</div>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <PhoneMock />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-16">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-l from-purple-600 to-purple-400 text-white p-8 md:p-12">
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-black/10 blur-2xl" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                ابدئي رحلتك مع فلذة اليوم 🤍
              </h2>
              <p className="mt-3 text-white/90 leading-7">
                حمّلي التطبيق وخلي المتابعة أسبوعًا بأسبوع تكون أسهل وأهدى.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-2xl bg-white text-purple-700 px-6 py-3 font-semibold hover:bg-white/90"
              >
                App Store
              </a>
              <a
                href="#"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold hover:bg-white/15"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-zinc-500 leading-6 text-center">
          تنويه: فلذة لا يغني عن استشارة الطبيب. في حال وجود أعراض مقلقة، راجعي طبيبك.
        </p>
      </section>
      {/* FAQ (SEO) */}
      <section
        id="faq"
        className="mx-auto max-w-6xl px-5 sm:px-8 pb-16 md:pb-20"
      >
        <div className="rounded-[36px] border border-zinc-200 bg-white/70 p-8 md:p-12 shadow-[0_20px_60px_rgba(124,58,237,0.08)] backdrop-blur">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                أسئلة شائعة عن حاسبة الحمل
              </h2>
              <p className="mt-4 text-zinc-600 leading-7">
                إجابات مختصرة تساعدك على فهم حساب موعد الولادة وعمر الحمل. النتائج
                تقديرية وقد تختلف حسب السونار والمتابعة الطبية.
              </p>
            </div>

            <a
              href="#download"
              className="rounded-2xl bg-purple-600 px-6 py-3 text-white font-semibold hover:bg-purple-700 shadow-sm"
            >
              جرّبي حاسبة الحمل
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                q: "كيف أحسب موعد الولادة المتوقع؟",
                a: "غالبًا يتم الحساب من أول يوم لآخر دورة شهرية. فلذة يسهّل لك الحساب ويعرض عمر الحمل أسبوعًا بأسبوع.",
              },
              {
                q: "هل حاسبة الحمل بالهجري دقيقة؟",
                a: "تعطي تقديرًا مفيدًا، لكن الدقة الأعلى تكون بتأكيد السونار والمتابعة الطبية خصوصًا إذا كانت الدورة غير منتظمة.",
              },
              {
                q: "ما الفرق بين حساب الحمل بالميلادي والهجري؟",
                a: "الفرق في عرض التاريخ فقط، أما عمر الحمل الطبي فيُقاس بالأسابيع. فلذة يوفر العرض بالطريقتين لتسهيل المتابعة.",
              },
              {
                q: "هل نتائج حاسبة الحمل أكيدة 100%؟",
                a: "لا. النتائج تقديرية وقد تختلف حسب الحالة. يُنصح بمراجعة الطبيبة للتأكيد.",
              },
              {
                q: "متى يبدأ حساب أسبوع الحمل؟",
                a: "عادةً من أول يوم لآخر دورة شهرية، وقد يُعدّل الطبيب عمر الحمل بناءً على السونار المبكر.",
              },
              {
                q: "هل أقدر أعرف عمر الحمل بالأسبوع واليوم؟",
                a: "نعم، فلذة يعرض لك عمر الحمل بشكل واضح أسبوعًا بأسبوع لتسهيل المتابعة والتنبيهات.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-zinc-200 bg-white p-5"
              >
                <div className="font-bold">{item.q}</div>
                <p className="mt-2 text-sm text-zinc-600 leading-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "كيف أحسب موعد الولادة المتوقع؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "غالبًا يتم الحساب من أول يوم لآخر دورة شهرية. فلذة يسهّل لك الحساب ويعرض عمر الحمل أسبوعًا بأسبوع."
                }
              },
              {
                "@type": "Question",
                "name": "هل حاسبة الحمل بالهجري دقيقة؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "تعطي تقديرًا مفيدًا، لكن الدقة الأعلى تكون بتأكيد السونار والمتابعة الطبية خصوصًا إذا كانت الدورة غير منتظمة."
                }
              },
              {
                "@type": "Question",
                "name": "ما الفرق بين حساب الحمل بالميلادي والهجري؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "الفرق في عرض التاريخ فقط، أما عمر الحمل الطبي فيُقاس بالأسابيع. فلذة يوفر العرض بالطريقتين لتسهيل المتابعة."
                }
              },
              {
                "@type": "Question",
                "name": "هل نتائج حاسبة الحمل أكيدة 100%؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "لا. النتائج تقديرية وقد تختلف حسب الحالة. يُنصح بمراجعة الطبيبة للتأكيد."
                }
              },
              {
                "@type": "Question",
                "name": "متى يبدأ حساب أسبوع الحمل؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "عادةً من أول يوم لآخر دورة شهرية، وقد يُعدّل الطبيب عمر الحمل بناءً على السونار المبكر."
                }
              },
              {
                "@type": "Question",
                "name": "هل أقدر أعرف عمر الحمل بالأسبوع واليوم؟",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "نعم، فلذة يعرض لك عمر الحمل بشكل واضح أسبوعًا بأسبوع لتسهيل المتابعة والتنبيهات."
                }
              }
            ]
          }),
        }}
      />

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-purple-600 text-white font-bold">
              ف
            </span>
            <span className="font-semibold">فلذة</span>
            <span className="text-zinc-400">© 2025</span>
            </div>

          <div className="flex items-center gap-6">
            <a className="hover:text-zinc-900" href="/privacy">
              سياسة الخصوصية
            </a>
            <a className="hover:text-zinc-900" href="#features">
              المميزات
            </a>
            <a className="hover:text-zinc-900" href="#download">
              تحميل التطبيق
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
