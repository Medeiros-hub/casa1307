import { Topbar } from '../components/topbar'

export function Home() {
  return (
    <div className="w-full space-y-16">
      <Topbar />

      <section className="bg-bg-sm md:bg-bg-large mx-16 rounded-2xl bg-cover bg-no-repeat md:bg-center">
        <div className="flex flex-col justify-between gap-12 px-8 pb-7 pt-3 md:flex-row md:px-16 md:pb-14 md:pt-6">
          <div className="space-y-8 md:w-5/12">
            <div className="font-montaga text-4xl leading-none md:text-6xl">
              <h1 className="text-wrap md:text-nowrap">
                Bem vindo a
                <br />
                <span>Casa 1307</span>
              </h1>
            </div>
            <div className="space-y-5 text-wrap text-justify text-sm md:text-base">
              <p>
                A plataforma completa para empreendedores que querem dominar
                seus negócios.
              </p>
              <p>
                Um ecossistema completo de ferramentas e serviços. Tudo com
                atendimento especializado e humano para auxiliar em cada etapa
                da sua jornada empreendedora.
              </p>
            </div>
          </div>
          <button className="rounded-xl bg-mint-500 px-7 py-5 text-center font-medium leading-none text-black shadow-shadowButton transition-all hover:bg-mint-500/80 sm:self-end md:px-14">
            Estou interessado
          </button>
        </div>
      </section>
    </div>
  )
}
