import Contact from "@/app/features/contact";

export default function Home() {
  return (
    <>
      <section
        className="min-h-screen bg-cover "
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      >
        <div className="flex flex-col min-h-screen bg-black/60">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div className="mt-8 lg:w-full lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-zinc-900 lg:max-w-xl">
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
