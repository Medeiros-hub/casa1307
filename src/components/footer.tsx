import { Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <section className="h-full min-h-[29.25rem] bg-[#000000] p-8">
      <div className="flex flex-wrap space-y-12 text-mint-500 *:w-[16.375rem] sm:space-y-0">
        <div className="space-y-6">
          <h1 className="font-montaga text-2xl leading-8">Casa 1307</h1>
          <span className="flex gap-4">
            <a href="https://www.instagram.com/casatreze07/">
              <Instagram className="size-6" />
            </a>
            <a href="#">
              <Linkedin className="size-6" />
            </a>
          </span>
        </div>
        <div className="leading-6">
          <h1 className="pb-5 font-semibold">Use cases</h1>
          <div className="space-y-3 *:cursor-pointer">
            <p>UI design</p>
            <p>UX design</p>
            <p>Wireframing</p>
            <p>Diagramming</p>
            <p>Brainstorming</p>
            <p>Online whiteboard</p>
            <p>Team collaboration</p>
          </div>
        </div>
        <div className="leading-6">
          <h1 className="pb-5 font-semibold">Explore</h1>
          <div className="*:[cursor-pointer] space-y-3">
            <p>Design</p>
            <p>Prototyping</p>
            <p>Development features</p>
            <p>Design systems</p>
            <p>Collaboration features</p>
            <p>Design process</p>
            <p>FigJam</p>
          </div>
        </div>
        <div className="leading-6">
          <h1 className="pb-5 font-semibold">Resources</h1>
          <div className="space-y-3 *:cursor-pointer">
            <p>Blog</p>
            <p>Best practices</p>
            <p>Colors</p>
            <p>Color wheel</p>
            <p>Support</p>
            <p>Developers</p>
            <p>Resource library</p>
          </div>
        </div>
      </div>
    </section>
  )
}
