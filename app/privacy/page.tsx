export const metadata = {
  title: "سياسة الخصوصية | فلذة",
  description: "سياسة الخصوصية لتطبيق فلذة.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-extrabold">سياسة الخصوصية</h1>
      <p className="mt-4 text-slate-600">
        نحن نحترم خصوصيتك. توضح هذه الصفحة كيف يجمع تطبيق فلذة البيانات ويستخدمها ويحميها.
      </p>

      <div className="mt-8 space-y-6 text-sm leading-7 text-slate-700">
        <section>
          <h2 className="text-base font-bold">المعلومات التي نجمعها</h2>
          <p className="mt-2">
            قد نجمع معلومات الحساب، وبيانات الاستخدام داخل التطبيق، وبيانات تقنية مثل نوع الجهاز
            وإصدار النظام، وذلك لتحسين الخدمة.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold">كيف نستخدم المعلومات</h2>
          <p className="mt-2">
            نستخدم البيانات لتشغيل الميزات، وتحسين التجربة، ودعم العملاء، وتحليل الأداء بشكل عام.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold">مشاركة المعلومات</h2>
          <p className="mt-2">
            لا نبيع بياناتك. قد نشارك بيانات محدودة مع مزودي خدمات موثوقين لتشغيل الخدمة (مثل
            التحليلات أو الدفع) وفق ضوابط.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold">الأمان</h2>
          <p className="mt-2">
            نتخذ إجراءات تقنية وتنظيمية لحماية البيانات، ولا توجد وسيلة آمنة 100% على الإنترنت.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold">التواصل</h2>
          <p className="mt-2">
            لأي استفسار: <span className="font-semibold">support@falada.app</span>
          </p>
        </section>
      </div>
    </main>
  );
}
