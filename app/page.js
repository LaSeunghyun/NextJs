import Hero from "./home/hero"
import Animation from "./home/ani"

export default function Home() {
  return (
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Animation />
            </div>
            <Hero />
          </div>
        </section>
      </div>
  )
}